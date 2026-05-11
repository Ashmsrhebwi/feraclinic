import fs from 'fs';
import path from 'path';

const localesDir = path.resolve('src/i18n/locales');
const languages = ['en', 'ar', 'fr', 'ru', 'tr', 'es'];

function flattenKeys(obj, prefix = '') {
  const result = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v !== null && typeof v === 'object' && !Array.isArray(v)) {
      Object.assign(result, flattenKeys(v, key));
    } else {
      result[key] = v;
    }
  }
  return result;
}

function setNested(obj, pathStr, value) {
  const keys = pathStr.split('.');
  let cur = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!cur[keys[i]] || typeof cur[keys[i]] !== 'object') cur[keys[i]] = {};
    cur = cur[keys[i]];
  }
  const last = keys[keys.length - 1];
  if (cur[last] === undefined || cur[last] === null || cur[last] === '') {
    cur[last] = value;
  }
}

// Load EN as source of truth
const enRaw = JSON.parse(fs.readFileSync(path.join(localesDir, 'en.json'), 'utf8'));
const enFlat = flattenKeys(enRaw);

let totalFixed = 0;

// For each non-EN language, find missing keys and fill with EN fallback
for (const lang of languages.filter(l => l !== 'en')) {
  const filePath = path.join(localesDir, `${lang}.json`);
  const langRaw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const langFlat = flattenKeys(langRaw);
  
  const missing = Object.entries(enFlat).filter(([k]) => !(k in langFlat));
  
  if (missing.length === 0) {
    console.log(`${lang.toUpperCase()}: already complete`);
    continue;
  }
  
  console.log(`${lang.toUpperCase()}: filling ${missing.length} missing keys with EN fallback...`);
  totalFixed += missing.length;
  
  for (const [key, value] of missing) {
    setNested(langRaw, key, value);
  }
  
  // Fix TR empty values too
  if (lang === 'tr') {
    const trFlat = flattenKeys(langRaw);
    const empty = Object.entries(trFlat).filter(([k, v]) => v === '' || v === null);
    for (const [key] of empty) {
      const enVal = enFlat[key];
      if (enVal) {
        console.log(`  TR: fixing empty key "${key}"`);
        setNested(langRaw, key, enVal);
      }
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(langRaw, null, 2), 'utf8');
  console.log(`  Done: ${lang}.json updated`);
}

console.log(`\nTotal keys filled: ${totalFixed}`);
console.log('All locale files are now complete with EN fallbacks.');
