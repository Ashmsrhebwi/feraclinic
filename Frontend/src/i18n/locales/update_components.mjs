import fs from 'fs';
import path from 'path';

const file = path.resolve('src/components/HeroCallForm.tsx');
const localesDir = path.resolve('src/i18n/locales');
const languages = ['en', 'ar', 'fr', 'ru', 'tr', 'es'];

let content = fs.readFileSync(file, 'utf8');

// Replace the hardcoded submit error string
content = content.replace(
  /setSubmitError\(err\.message \|\| 'Submission failed\. Please try again\.'\)/g,
  "setSubmitError(err.message || t('form.submitError', 'Submission failed. Please try again.'))"
);

fs.writeFileSync(file, content, 'utf8');
console.log('HeroCallForm.tsx updated.');

// Add the new key to locales
const keyData = { key: 'form.submitError', text: 'Submission failed. Please try again.' };

function setNested(obj, pathStr, value) {
  const keys = pathStr.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) current[keys[i]] = {};
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

languages.forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  if (!fs.existsSync(filePath)) return;
  const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  setNested(json, keyData.key, keyData.text);
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
  console.log(`Updated ${lang}.json`);
});
