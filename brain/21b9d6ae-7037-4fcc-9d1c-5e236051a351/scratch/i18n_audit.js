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

function extractKeys(content) {
  const keys = new Set();
  // Regex for t('key') or t("key") or t(`key`)
  // Also matches i18n.t('key')
  const regex = /t\(['"`]([^'"`]+)['"`]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    // Basic filter for dynamic keys (containing ${})
    if (!match[1].includes('${')) {
      keys.add(match[1]);
    }
  }
  return Array.from(keys);
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

function audit() {
  const allFiles = getAllFiles(SRC_DIR);
  const usedKeys = new Set();
  
  allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const fileKeys = extractKeys(content);
    fileKeys.forEach(key => usedKeys.add(key));
  });

  const reports = {};
  const translations = {};

  LANGUAGES.forEach(lang => {
    const filePath = path.join(LOCALES_DIR, `${lang}.json`);
    if (fs.existsSync(filePath)) {
      translations[lang] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  });

  const sourceOfTruth = translations['en'] || {};
  const results = {
    missingInEn: [],
    missingInLang: {},
    unusedInJson: [], // Optional
  };

  LANGUAGES.forEach(lang => {
    results.missingInLang[lang] = [];
  });

  usedKeys.forEach(key => {
    const enVal = getNestedValue(sourceOfTruth, key);
    if (enVal === undefined) {
      results.missingInEn.push(key);
    }

    LANGUAGES.forEach(lang => {
      if (translations[lang]) {
        const val = getNestedValue(translations[lang], key);
        if (val === undefined || val === null || val === '') {
          results.missingInLang[lang].push(key);
        }
      }
    });
  });

  const outputDir = 'c:\\Users\\Shahm.s\\Desktop\\New_Website_Fera\\brain\\21b9d6ae-7037-4fcc-9d1c-5e236051a351\\artifacts';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  fs.writeFileSync(path.join(outputDir, 'i18n_audit_results.json'), JSON.stringify(results, null, 2));
  
  console.log('Audit complete. Results saved to artifacts/i18n_audit_results.json');
  console.log(`Missing in EN: ${results.missingInEn.length}`);
  Object.keys(results.missingInLang).forEach(lang => {
    console.log(`Missing in ${lang.toUpperCase()}: ${results.missingInLang[lang].length}`);
  });
}

audit();
