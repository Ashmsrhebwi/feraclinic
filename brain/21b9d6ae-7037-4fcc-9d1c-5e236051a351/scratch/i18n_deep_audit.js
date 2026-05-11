import fs from 'fs';
import path from 'path';

const SRC_DIR = 'c:\\Users\\Shahm.s\\Desktop\\New_Website_Fera\\frontend\\src';
const LOCALES_DIR = 'c:\\Users\\Shahm.s\\Desktop\\New_Website_Fera\\frontend\\src\\i18n\\locales';
const LANGUAGES = ['en', 'fr', 'ru', 'ar', 'es', 'tr'];

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

function extractKeysWithDefaults(content) {
  const usages = [];
  // Pattern 1: t('key')
  // Pattern 2: t('key', 'default')
  // Pattern 3: t('key', { defaultValue: 'default' })
  
  // Basic regex to find t(
  const tRegex = /t\s*\(\s*['"`]([^'"`]+)['"`]/g;
  let match;
  while ((match = tRegex.exec(content)) !== null) {
    const key = match[1];
    if (key.includes('${')) continue; // Skip dynamic keys

    let defaultValue = null;
    const remaining = content.substring(match.index + match[0].length);
    
    // Check for comma and then a string or object
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

function audit() {
  const allFiles = getAllFiles(SRC_DIR);
  const usedKeys = new Map(); // key -> Set of defaultValues
  
  allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const usages = extractKeysWithDefaults(content);
    usages.forEach(u => {
      if (!usedKeys.has(u.key)) {
        usedKeys.set(u.key, new Set());
      }
      if (u.defaultValue) {
        usedKeys.get(u.key).add(u.defaultValue);
      }
    });
  });

  const translations = {};
  LANGUAGES.forEach(lang => {
    const filePath = path.join(LOCALES_DIR, `${lang}.json`);
    if (fs.existsSync(filePath)) {
      translations[lang] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } else {
      translations[lang] = {};
    }
  });

  const results = {
    missing: {},
    conflicts: [], // Same key used with different defaults
  };

  LANGUAGES.forEach(lang => {
    results.missing[lang] = [];
  });

  for (const [key, defaults] of usedKeys.entries()) {
    if (defaults.size > 1) {
      results.conflicts.push({ key, defaults: Array.from(defaults) });
    }

    LANGUAGES.forEach(lang => {
      const val = getNestedValue(translations[lang], key);
      if (val === undefined || val === null || val === '') {
        results.missing[lang].push({
          key,
          defaults: Array.from(defaults)
        });
      }
    });
  }

  const outputDir = 'c:\\Users\\Shahm.s\\Desktop\\New_Website_Fera\\brain\\21b9d6ae-7037-4fcc-9d1c-5e236051a351\\artifacts';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  fs.writeFileSync(path.join(outputDir, 'i18n_deep_audit.json'), JSON.stringify(results, null, 2));
  
  console.log('Deep audit complete. Results saved to artifacts/i18n_deep_audit.json');
  LANGUAGES.forEach(lang => {
    console.log(`Missing in ${lang.toUpperCase()}: ${results.missing[lang].length}`);
  });
}

audit();
