import fs from 'fs';
import path from 'path';

const localesDir = path.resolve('src/i18n/locales');
const languages = ['en', 'ar', 'fr', 'ru', 'tr', 'es'];

// Helpers
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

const isURL = (val) => /https?:\/\/[^\s]+/.test(val) || /wa\.me/.test(val);
const isEmail = (val) => /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(val);
const isPhone = (val) => /\+?[0-9\s-]{7,}/.test(val) && /[0-9]/.test(val);

const brandNames = [
  'FeRa', 'Clinic', 'Invisalign', 'WhatsApp', 'Instagram', 'Bitrix24', 'ISO', 
  'HEPA', 'CAD/CAM', 'Zoom', 'E-Max', 'Biolase', 'VIP', 'HR', 'TROY', 'VISA', 'MC'
];

const medicalTerms = [
  'Zirconium', 'Implants', 'Veneers', 'Botox', 'PRP', 'Lumineers', 'Orthodontics'
];

const isIgnored = (val) => {
  if (typeof val !== 'string') return true;
  if (isURL(val) || isEmail(val) || isPhone(val)) return true;
  const lower = val.toLowerCase();
  if (brandNames.some(b => lower.includes(b.toLowerCase()))) {
    // If it's ONLY the brand name or brand name + symbols, ignore
    const clean = val.replace(/[^\w\s]/g, '').trim();
    if (brandNames.some(b => clean.toLowerCase() === b.toLowerCase())) return true;
  }
  return false;
};

const isPlaceholder = (val) => {
  if (typeof val !== 'string') return false;
  const placeholders = [/Hero\s*Title/i, /Hero\s*Desc/i, /Trust\s*Badge/i, /Collection\s*Desc/i, /Tech\s*Title/i, /Title\s*\d/i, /Desc\s*\d/i];
  return placeholders.some(p => p.test(val));
};

const hasArabic = (val) => /[\u0600-\u06FF]/.test(val);
const hasCyrillic = (val) => /[\u0400-\u04FF]/.test(val);
const hasLatin = (val) => /[a-zA-Z]/.test(val);

// Load all locales
const locales = {};
for (const lang of languages) {
  const p = path.join(localesDir, `${lang}.json`);
  locales[lang] = flattenKeys(JSON.parse(fs.readFileSync(p, 'utf8')));
}

const en = locales['en'];
const report = [];

for (const lang of languages) {
  const current = locales[lang];
  const langReport = {
    file: `${lang}.json`,
    mixed: [],
    placeholders: [],
    fallbacks: [],
    missing: 0
  };

  for (const [key, val] of Object.entries(current)) {
    if (isIgnored(val)) continue;

    // Check Placeholders
    if (isPlaceholder(val)) {
      langReport.placeholders.push({ key, val });
      continue;
    }

    // Check for Fallbacks (same as EN in non-EN files)
    if (lang !== 'en' && val === en[key] && val !== '') {
      // Special case: if EN value has no letters (e.g. "15+"), don't count as fallback if it's meant to be same
      if (hasLatin(val) || hasArabic(val) || hasCyrillic(val)) {
         langReport.fallbacks.push({ key, val, type: 'English Fallback' });
         continue;
      }
    }

    // Language specific purity
    if (lang === 'ar') {
      if (hasLatin(val) && hasArabic(val)) {
        langReport.mixed.push({ key, val, type: 'Mixed Arabic/English' });
      } else if (hasLatin(val) && !hasArabic(val)) {
        langReport.mixed.push({ key, val, type: 'Pure English in AR' });
      }
    } else if (lang === 'ru') {
      if (!hasCyrillic(val) && hasLatin(val)) {
         // Might be English fallback or untranslated
         if (val === en[key]) {
            // already caught in fallbacks
         } else {
            langReport.mixed.push({ key, val, type: 'Latin in RU' });
         }
      }
    }
    // For FR/ES/TR, they use Latin, so "identical to EN" is our main fallback check
  }
  report.push(langReport);
}

// Final output
console.log('Language Purity Audit Report\n');
report.forEach(r => {
  console.log(`File: ${r.file}`);
  console.log(`- Mixed/Wrong Language: ${r.mixed.length}`);
  r.mixed.slice(0, 5).forEach(m => console.log(`  [${m.type}] ${m.key}: "${m.val}"`));
  if (r.mixed.length > 5) console.log(`  ... and ${r.mixed.length - 5} more`);

  console.log(`- Placeholders: ${r.placeholders.length}`);
  r.placeholders.slice(0, 5).forEach(p => console.log(`  [Placeholder] ${p.key}: "${p.val}"`));
  
  console.log(`- English Fallbacks: ${r.fallbacks.length}`);
  r.fallbacks.slice(0, 5).forEach(f => console.log(`  [Fallback] ${f.key}: "${f.val}"`));
  if (r.fallbacks.length > 5) console.log(`  ... and ${r.fallbacks.length - 5} more`);
  
  console.log('-----------------------------------\n');
});
