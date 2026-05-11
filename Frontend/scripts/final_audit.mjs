import fs from 'fs';
import path from 'path';

const localesDir = path.resolve('src/i18n/locales');
const srcDir = path.resolve('src');
const languages = ['en', 'ar', 'fr', 'ru', 'tr', 'es'];

// ─── Helpers ────────────────────────────────────────────────────
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

function getAllTsxFiles(dir, list = []) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) getAllTsxFiles(full, list);
    else if (f.endsWith('.tsx') || f.endsWith('.ts')) list.push(full);
  }
  return list;
}

// ─── Load all locale files ───────────────────────────────────────
const locales = {};
for (const lang of languages) {
  const p = path.join(localesDir, `${lang}.json`);
  locales[lang] = flattenKeys(JSON.parse(fs.readFileSync(p, 'utf8')));
}
const enKeys = new Set(Object.keys(locales['en']));

// ─── 1. Missing keys per language (keys in EN but not in other) ──
console.log('\n════════════════════════════════════════');
console.log(' CHECK 1: MISSING KEYS (relative to EN)');
console.log('════════════════════════════════════════');
let totalMissing = 0;
for (const lang of languages.filter(l => l !== 'en')) {
  const langKeys = new Set(Object.keys(locales[lang]));
  const missing = [...enKeys].filter(k => !langKeys.has(k));
  console.log(`  ${lang.toUpperCase()}: ${missing.length} missing keys`);
  if (missing.length > 0 && missing.length <= 20) missing.forEach(k => console.log(`    - ${k}`));
  else if (missing.length > 20) console.log(`    (first 20 of ${missing.length}): ${missing.slice(0, 20).join(', ')}`);
  totalMissing += missing.length;
}
console.log(`  TOTAL missing: ${totalMissing}`);

// ─── 2. Empty values ─────────────────────────────────────────────
console.log('\n════════════════════════════════════════');
console.log(' CHECK 2: EMPTY VALUES');
console.log('════════════════════════════════════════');
let totalEmpty = 0;
for (const lang of languages) {
  const flat = locales[lang];
  const empty = Object.entries(flat).filter(([k, v]) => v === '' || v === null || v === undefined);
  console.log(`  ${lang.toUpperCase()}: ${empty.length} empty values`);
  if (empty.length > 0 && empty.length <= 10) empty.forEach(([k]) => console.log(`    - ${k}`));
  totalEmpty += empty.length;
}
console.log(`  TOTAL empty: ${totalEmpty}`);

// ─── 3. Hardcoded visible text in TSX ────────────────────────────
console.log('\n════════════════════════════════════════');
console.log(' CHECK 3: HARDCODED VISIBLE TEXT IN TSX');
console.log('════════════════════════════════════════');
const files = getAllTsxFiles(srcDir);
const skipPatterns = [
  /className/,
  /console\./,
  /import /,
  /from ['"`]/,
  /\/\//,
  /<!--/,
  /\.(webp|png|jpg|svg|mp4)/,
  /tel:|mailto:/,
  /https?:\/\//,
  /wa\.me/,
  /transition=\{/,
  /animate=\{/,
  /initial=\{/,
  /whileHover/,
  /whileTap/,
  /whileInView/,
  /viewport=\{/,
  /ease:/,
  /duration:/,
  /delay:/,
  /strokeLinecap/,
  /strokeLinejoin/,
  /fillRule/,
  /clipRule/,
  /viewBox/,
  /onChange=\{/,
  /onClick=\{/,
  /onSubmit=\{/,
  /ref=\{/,
  /key=\{/,
  /type=["']/,
  /name=["']/,
  /value=["']/,
  /rel=["']/,
  /method=["']/,
  /Accept/,
  /Content-Type/,
  /form_type/,
  /full_name/,
  /form-type/,
  /page_url/,
  /language:/,
  /VITE_API/,
  /localhost/,
  /noopener/,
  /noreferrer/,
  /target=["']/,
  /fetchPriority/,
  /loading=["']/,
  /decoding=["']/,
  /aria-/,
  /data-/,
  /tabIndex/,
  /id=["']/,
  /style=\{/,
  /animationDuration/,
  /animationDelay/,
  /fontFamily/,
  /keyframes/,
  /transform:/,
  /filter:/,
  /@keyframes/,
  /Math\./,
  /\.map\(/,
  /\.filter\(/,
  /\.join\(/,
  /\.split\(/,
  /\.replace\(/,
  /\.includes\(/,
  /\.startsWith\(/,
  /\.endsWith\(/,
  /encodeURIComponent/,
  /JSON\./,
  /Object\./,
  /Array\./,
  /typeof /,
  /instanceof /,
  /===|!==|>=|<=/,
  /^\s*\/\//,
  /^\s*\*/,
  /^\s*\{\/\*/,
  /treatments\.data\.\d/,
  /blog\.posts\./,
  /\$\{/,
  /easeOut/,
  /easeIn/,
];

const hardcodedIgnoreWords = new Set([
  'FeRa', 'FeRa Clinic', 'Istanbul', 'Invisalign', 'ISO', 'HEPA', 'CAD/CAM',
  'Zoom', 'E-Max', 'Biolase', 'WhatsApp', 'Instagram', 'Bitrix24', 'MB',
  'PDF', 'DOC', 'DOCX', 'JSX', 'TSX', 'JS', 'API', 'URL', 'CTA', 'OK',
  'VISA', 'MC', 'TROY', 'VIP', 'HR', 'DIV', 'px', 'rem', 'em', 'vh', 'vw',
]);

let hardcodedCount = 0;
const hardcodedResults = [];

for (const file of files) {
  if (file.includes('node_modules') || file.includes('.d.ts') || 
      file.includes('locales') || file.includes('data/') ||
      file.includes('lib/') || file.includes('scripts/')) continue;
  
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  const rel = path.relative(srcDir, file);
  
  lines.forEach((line, idx) => {
    // Skip lines matching any skip pattern
    if (skipPatterns.some(p => p.test(line))) return;
    
    // Check for JSX text content (between tags, not in expressions)
    const jsxTextMatch = line.match(/>\s*([A-Za-z][A-Za-z\s\-&,.'!?]{5,})\s*</);
    if (jsxTextMatch) {
      const text = jsxTextMatch[1].trim();
      // Skip if it contains t( or looks like a variable
      if (line.includes('t(') || line.includes('{') || text.length < 4) return;
      // Skip ignored words
      if (hardcodedIgnoreWords.has(text)) return;
      hardcodedCount++;
      hardcodedResults.push(`  [${rel}:${idx + 1}] "${text}"`);
    }
  });
}

if (hardcodedResults.length === 0) {
  console.log('  ✅ No hardcoded visible text found in TSX files');
} else {
  hardcodedResults.forEach(r => console.log(r));
}
console.log(`  TOTAL hardcoded: ${hardcodedCount}`);

// ─── 4. Raw key names appearing in UI (t() calls with no fallback where key not in EN) ──
console.log('\n════════════════════════════════════════');
console.log(' CHECK 4: t() KEYS MISSING FROM EN.JSON');
console.log('════════════════════════════════════════');
let rawKeyCount = 0;
const rawKeyResults = [];

for (const file of files) {
  if (file.includes('node_modules') || file.includes('locales') || file.includes('scripts/')) continue;
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(srcDir, file);
  
  // Match t('key') without fallback
  const noFallbackRegex = /\bt\(\s*['"]([^'"]+)['"]\s*\)/g;
  let m;
  while ((m = noFallbackRegex.exec(content)) !== null) {
    const key = m[1];
    if (!enKeys.has(key)) {
      rawKeyCount++;
      rawKeyResults.push(`  [${rel}] Missing key: "${key}"`);
    }
  }
}

if (rawKeyResults.length === 0) {
  console.log('  ✅ All t() keys exist in en.json — no raw keys will show in UI');
} else {
  // deduplicate
  const unique = [...new Set(rawKeyResults)];
  unique.forEach(r => console.log(r));
  rawKeyCount = unique.length;
}
console.log(`  TOTAL missing t() keys: ${rawKeyCount}`);

// ─── Summary ──────────────────────────────────────────────────────
console.log('\n════════════════════════════════════════');
console.log(' FINAL AUDIT SUMMARY');
console.log('════════════════════════════════════════');
console.log(`  Missing keys (other langs vs EN): ${totalMissing}`);
console.log(`  Empty values:                     ${totalEmpty}`);
console.log(`  Hardcoded visible text:            ${hardcodedCount}`);
console.log(`  t() calls with missing EN key:    ${rawKeyCount}`);
console.log('');
