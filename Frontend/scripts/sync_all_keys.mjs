import fs from 'fs';
import path from 'path';

const pagesDir = path.resolve('src/pages');
const componentsDir = path.resolve('src/components');
const localesDir = path.resolve('src/i18n/locales');
const languages = ['en', 'ar', 'fr', 'ru', 'tr', 'es'];

// Recursively get all .tsx files
function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (filePath.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = [...getAllFiles(pagesDir), ...getAllFiles(componentsDir)];
const extractedKeys = {}; // key -> fallback

files.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  // Match t('key', 'fallback text') or t("key", "fallback text")
  const regex = /t\(\s*['"]([^'"]+)['"]\s*(?:,\s*['"]([^'"]+)['"]\s*)?\)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const key = match[1];
    let fallback = match[2];
    if (fallback) {
      // Decode any basic escape sequences if needed, but usually fine
      extractedKeys[key] = fallback;
    }
  }
});

// Helper to set nested value
function setNested(obj, pathStr, value) {
  const keys = pathStr.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }
  const lastKey = keys[keys.length - 1];
  if (current[lastKey] === undefined || current[lastKey] === '') {
    current[lastKey] = value;
  }
}

languages.forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  if (!fs.existsSync(filePath)) return;
  
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let updated = false;
  
  for (const [key, fallback] of Object.entries(extractedKeys)) {
    // Only set if not already set
    const keys = key.split('.');
    let current = content;
    let exists = true;
    for (const k of keys) {
      if (current === undefined || current[k] === undefined) {
        exists = false;
        break;
      }
      current = current[k];
    }
    
    if (!exists || current === '') {
      setNested(content, key, fallback);
      updated = true;
    }
  }
  
  if (updated) {
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`Updated ${lang}.json with new keys from pages`);
  } else {
    console.log(`${lang}.json already has all keys`);
  }
});
