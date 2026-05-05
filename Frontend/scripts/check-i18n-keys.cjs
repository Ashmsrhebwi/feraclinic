const fs = require('fs');
const path = require('path');

// Directories to scan
const SCAN_DIRS = [
  'src/pages',
  'src/components',
  'src/app'
];

// Translation files to check
const TRANSLATION_FILES = {
  en: 'src/i18n/locales/en.json',
  fr: 'src/i18n/locales/fr.json',
  ru: 'src/i18n/locales/ru.json',
  ar: 'src/i18n/locales/ar.json',
  tr: 'src/i18n/locales/tr.json'
};

// Files to exclude
const EXCLUDE_PATTERNS = [
  'node_modules',
  'dist',
  'build',
  '.git',
  'package-lock.json'
];

function scanDirectory(dir, files) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !EXCLUDE_PATTERNS.includes(item)) {
      scanDirectory(fullPath, files);
    } else if (stat.isFile() && item.endsWith('.tsx') || item.endsWith('.ts')) {
      scanFile(fullPath, files);
    }
  }
}

function scanFile(filePath, files) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Find all t("key") and t('key') patterns
    const regex = /t\(["']([^"']+)["']/g;
    let match;
    const usedKeys = new Set();
    
    while ((match = regex.exec(content)) !== null) {
      usedKeys.add(match[1]);
    }
    
    if (usedKeys.size > 0) {
      console.log(`Found ${usedKeys.size} keys in: ${filePath}`);
      files.push(...usedKeys);
    }
  } catch (error) {
    console.error(`Error scanning ${filePath}:`, error.message);
  }
}

function loadTranslationFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
    return {};
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error.message);
    return {};
  }
}

function flattenObject(obj, prefix = '') {
  const result = {};
  
  function flatten(current, currentPrefix = '') {
    for (const key in current) {
      const fullKey = currentPrefix ? `${currentPrefix}.${key}` : key;
      if (typeof current[key] === 'object' && current[key] !== null) {
        flatten(current[key], fullKey);
      } else {
        result[fullKey] = current[key];
      }
    }
  }
  
  flatten(obj);
  return result;
}

function main() {
  console.log('🔍 Scanning for translation keys...\n');
  
  const allUsedKeys = new Set();
  
  // Scan all directories
  for (const dir of SCAN_DIRS) {
    if (fs.existsSync(dir)) {
      console.log(`📁 Scanning ${dir}...`);
      scanDirectory(dir, allUsedKeys);
    }
  }
  
  console.log(`\n📊 Found ${allUsedKeys.size} unique translation keys in codebase\n`);
  
  // Load translation files
  console.log('\n📚 Loading translation files...');
  const translations = {};
  for (const [lang, filePath] of Object.entries(TRANSLATION_FILES)) {
    console.log(`   Loading ${lang}: ${filePath}`);
    translations[lang] = flattenObject(loadTranslationFile(filePath));
  }
  
  // Check for missing keys in each language
  console.log('\n🔍 Checking for missing translations...\n');
  
  for (const [lang, translationObj] of Object.entries(translations)) {
    const missingKeys = [];
    const emptyKeys = [];
    
    for (const key of allUsedKeys) {
      if (!(key in translationObj)) {
        missingKeys.push(key);
      } else if (translationObj[key] === '' || translationObj[key] === null) {
        emptyKeys.push(key);
      }
    }
    
    if (missingKeys.length > 0) {
      console.log(`\n❌ ${lang.toUpperCase()}: ${missingKeys.length} missing keys:`);
      missingKeys.sort().forEach(key => console.log(`   - ${key}`));
    }
    
    if (emptyKeys.length > 0) {
      console.log(`\n⚠️  ${lang.toUpperCase()}: ${emptyKeys.length} empty keys:`);
      emptyKeys.sort().forEach(key => console.log(`   - ${key}`));
    }
    
    if (missingKeys.length === 0 && emptyKeys.length === 0) {
      console.log(`\n✅ ${lang.toUpperCase()}: All keys present and non-empty`);
    }
  }
  
  // Check for keys defined but never used
  console.log('\n🔍 Checking for unused keys...\n');
  
  for (const [lang, translationObj] of Object.entries(translations)) {
    const allKeysInTranslation = Object.keys(translationObj);
    const unusedKeys = allKeysInTranslation.filter(key => !allUsedKeys.has(key));
    
    if (unusedKeys.length > 0) {
      console.log(`\n📋 ${lang.toUpperCase()}: ${unusedKeys.length} unused keys:`);
      unusedKeys.sort().forEach(key => console.log(`   - ${key}`));
    }
    
    if (unusedKeys.length === 0) {
      console.log(`\n✅ ${lang.toUpperCase()}: All keys are used`);
    }
  }
  
  // Summary
  console.log('\n📋 SUMMARY:');
  console.log(`   Total keys used in code: ${allUsedKeys.size}`);
  console.log(`   Languages checked: ${Object.keys(translations).join(', ')}`);
  
  const hasIssues = Object.values(translations).some(lang => {
    const translationObj = translations[lang];
    const missingKeys = [...allUsedKeys].filter(key => !(key in translationObj));
    const emptyKeys = [...allUsedKeys].filter(key => translationObj[key] === '' || translationObj[key] === null);
    return missingKeys.length > 0 || emptyKeys.length > 0;
  });
  
  if (hasIssues) {
    console.log('\n❌ ISSUES FOUND - Please review above details');
    process.exit(1);
  } else {
    console.log('\n✅ ALL TRANSLATION KEYS ARE VALID');
    process.exit(0);
  }
}

main();
