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
    
    // Ignore node_modules, dist, build, .git
    if (['node_modules', 'dist', 'build', '.git'].includes(file)) continue;
    
    if (stat.isDirectory()) {
      getFiles(filePath, fileList);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

// Get value from nested JSON object
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

function main() {
  console.log('--- Starting i18n key extraction ---');
  
  const usedKeys = new Set();
  
  // 1. Scan files
  for (const subDir of DIRECTORIES_TO_SCAN) {
    const dirPath = path.join(FRONTEND_DIR, subDir);
    const files = getFiles(dirPath);
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      
      // Look for t('key') or t("key") or t(`key`)
      const regex = /t\s*\(\s*['"`]([^'"`\$\{\}]+)['"`]/g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        usedKeys.add(match[1]);
      }
    }
  }
  
  console.log(`Found ${usedKeys.size} unique keys used in code.\n`);

  // 2. Load translations
  const translations = {};
  for (const lang of LANGUAGES) {
    const filePath = path.join(LOCALES_DIR, `${lang}.json`);
    if (fs.existsSync(filePath)) {
      translations[lang] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } else {
      console.warn(`Warning: Translation file not found for ${lang}: ${filePath}`);
      translations[lang] = {};
    }
  }

  // 3. Check keys
  const report = {};
  LANGUAGES.forEach(lang => {
    report[lang] = { missing: [], empty: [] };
  });

  for (const key of usedKeys) {
    LANGUAGES.forEach(lang => {
      const value = getNestedValue(translations[lang], key);
      
      if (value === undefined || value === null) {
        report[lang].missing.push(key);
      } else if (typeof value === 'string' && value.trim() === '') {
        report[lang].empty.push(key);
      }
    });
  }

  // 4. Print clean report
  console.log('=== i18n AUDIT REPORT ===\n');
  
  LANGUAGES.forEach(lang => {
    console.log(`[Language: ${lang.toUpperCase()}]`);
    console.log(`Missing keys: ${report[lang].missing.length}`);
    if (report[lang].missing.length > 0) {
      // Print first 5 missing keys as examples
      const examples = report[lang].missing.slice(0, 5).join(', ');
      console.log(`  Examples: ${examples}${report[lang].missing.length > 5 ? ' ...' : ''}`);
    }
    
    console.log(`Empty keys: ${report[lang].empty.length}`);
    if (report[lang].empty.length > 0) {
      const examples = report[lang].empty.slice(0, 5).join(', ');
      console.log(`  Examples: ${examples}${report[lang].empty.length > 5 ? ' ...' : ''}`);
    }
    console.log('');
  });
  
  console.log('--- Audit Complete ---');
}

main();
