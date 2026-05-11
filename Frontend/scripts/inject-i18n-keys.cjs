const fs = require('fs');
const path = require('path');

const FRONTEND_DIR = path.resolve(__dirname, '..', 'src');
const LOCALES_DIR = path.join(FRONTEND_DIR, 'i18n', 'locales');
const DIRECTORIES_TO_SCAN = ['pages', 'components', 'app'];
const LANGUAGES = ['en', 'fr', 'ru', 'ar', 'tr', 'es'];

// Helper to recursively get all files in a directory
function getFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (['node_modules', 'dist', 'build', '.git'].includes(file)) continue;
    
    if (stat.isDirectory()) {
      getFiles(filePath, fileList);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function hasArabic(str) {
  return /[\u0600-\u06FF]/.test(str);
}

function humanizeKey(key) {
  const parts = key.split('.');
  const lastPart = parts[parts.length - 1];
  const words = lastPart.replace(/([A-Z])/g, ' $1').split(/[-_ ]+/).filter(Boolean);
  return words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

function extractKeysWithDefaults(content) {
  const usages = [];
  const tRegex = /t\s*\(\s*['"`]([^'"`\$\{\}]+)['"`]/g;
  let match;
  while ((match = tRegex.exec(content)) !== null) {
    const key = match[1];
    let defaultValue = null;
    const remaining = content.substring(match.index + match[0].length);
    const commaMatch = remaining.match(/^\s*,\s*(['"`].*?['"`]|{.*?})/s);
    if (commaMatch) {
      const secondArg = commaMatch[1];
      if (secondArg.startsWith("'") || secondArg.startsWith('"') || secondArg.startsWith('`')) {
        defaultValue = secondArg.substring(1, secondArg.length - 1);
      } else if (secondArg.startsWith('{')) {
        const dvMatch = secondArg.match(/defaultValue\s*:\s*['"`](.*?)['"`]/);
        if (dvMatch) {
          defaultValue = dvMatch[1];
        }
      }
    }
    usages.push({ key, defaultValue });
  }
  return usages;
}

function getNestedValue(obj, keyPath) {
  const parts = keyPath.split('.');
  let current = obj;
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      return undefined;
    }
  }
  return current;
}

function setNestedValue(obj, keyPath, value) {
  const parts = keyPath.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (!(part in current) || typeof current[part] !== 'object') {
      current[part] = {};
    }
    current = current[part];
  }
  current[parts[parts.length - 1]] = value;
}

function main() {
  console.log('--- Starting i18n key injection ---');
  
  const extractedKeys = new Map(); // key -> { enDefault, arDefault }
  
  // 1. Scan files
  for (const subDir of DIRECTORIES_TO_SCAN) {
    const dirPath = path.join(FRONTEND_DIR, subDir);
    const files = getFiles(dirPath);
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      const usages = extractKeysWithDefaults(content);
      
      for (const u of usages) {
        if (!extractedKeys.has(u.key)) {
          extractedKeys.set(u.key, { enDefault: null, arDefault: null });
        }
        
        const current = extractedKeys.get(u.key);
        if (u.defaultValue) {
          if (hasArabic(u.defaultValue)) {
            if (!current.arDefault) current.arDefault = u.defaultValue;
          } else {
            if (!current.enDefault) current.enDefault = u.defaultValue;
          }
        }
      }
    }
  }
  
  console.log(`Found ${extractedKeys.size} unique keys used in code.`);

  // 2. Load translations
  const translations = {};
  for (const lang of LANGUAGES) {
    const filePath = path.join(LOCALES_DIR, `${lang}.json`);
    if (fs.existsSync(filePath)) {
      translations[lang] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } else {
      translations[lang] = {};
    }
  }

  const report = {};
  LANGUAGES.forEach(lang => {
    report[lang] = { added: 0, fixedEmpty: 0 };
  });

  // 3. Process EN first (Source of Truth)
  for (const [key, defaults] of extractedKeys.entries()) {
    const currentVal = getNestedValue(translations['en'], key);
    let newVal = currentVal;
    
    if (currentVal === undefined || currentVal === null) {
      newVal = defaults.enDefault || humanizeKey(key);
      setNestedValue(translations['en'], key, newVal);
      report['en'].added++;
    } else if (typeof currentVal === 'string' && currentVal.trim() === '') {
      newVal = defaults.enDefault || humanizeKey(key);
      setNestedValue(translations['en'], key, newVal);
      report['en'].fixedEmpty++;
    }
  }

  // 4. Process other languages
  for (const lang of LANGUAGES) {
    if (lang === 'en') continue;
    
    for (const [key, defaults] of extractedKeys.entries()) {
      const enVal = getNestedValue(translations['en'], key);
      const currentVal = getNestedValue(translations[lang], key);
      
      let fallbackVal = enVal;
      if (lang === 'ar' && defaults.arDefault) {
        fallbackVal = defaults.arDefault;
      }

      if (currentVal === undefined || currentVal === null) {
        setNestedValue(translations[lang], key, fallbackVal);
        report[lang].added++;
      } else if (typeof currentVal === 'string' && currentVal.trim() === '') {
        setNestedValue(translations[lang], key, fallbackVal);
        report[lang].fixedEmpty++;
      }
    }
  }

  // 5. Save all translations
  for (const lang of LANGUAGES) {
    const filePath = path.join(LOCALES_DIR, `${lang}.json`);
    // Preserve formatting: using 2 spaces
    fs.writeFileSync(filePath, JSON.stringify(translations[lang], null, 2) + '\n');
  }

  console.log('\n=== INJECTION REPORT ===');
  LANGUAGES.forEach(lang => {
    console.log(`[Language: ${lang.toUpperCase()}]`);
    console.log(`  Added missing keys: ${report[lang].added}`);
    console.log(`  Fixed empty values: ${report[lang].fixedEmpty}`);
  });
  console.log('--- Injection Complete ---\n');
}

main();
