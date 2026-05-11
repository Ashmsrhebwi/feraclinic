const fs = require('fs');
const path = require('path');

const FRONTEND_DIR = path.resolve(__dirname, '..', 'src');
const LOCALES_DIR = path.join(FRONTEND_DIR, 'i18n', 'locales');
const DIRECTORIES_TO_SCAN = ['pages', 'components', 'app', 'data'];

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

function isAlphaNumeric(str) {
  return /[a-zA-Z]/.test(str);
}

function main() {
  console.log('--- STARTING COMPREHENSIVE I18N AUDIT ---\n');
  
  const allFiles = [];
  for (const subDir of DIRECTORIES_TO_SCAN) {
    const dirPath = path.join(FRONTEND_DIR, subDir);
    getFiles(dirPath, allFiles);
  }

  const enJsonPath = path.join(LOCALES_DIR, 'en.json');
  const enData = fs.existsSync(enJsonPath) ? JSON.parse(fs.readFileSync(enJsonPath, 'utf8')) : {};

  const hardcodedTexts = [];
  const potentialMissingKeys = new Set();
  const allStringLiterals = new Set();

  for (const file of allFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(FRONTEND_DIR, file);
    const lines = content.split('\n');

    // Regex to find JSX text nodes: > text <
    const jsxTextRegex = />([^<{}]+)</g;
    let match;
    while ((match = jsxTextRegex.exec(content)) !== null) {
      const text = match[1].trim();
      // Ignore if it's just punctuation, numbers, or very short
      if (text.length > 1 && isAlphaNumeric(text)) {
        // Also ignore common JSX artifacts like &nbsp;
        if (text !== '&nbsp;' && !text.startsWith('import ') && !text.startsWith('export ')) {
          // Find line number
          const lineNumber = content.substring(0, match.index).split('\n').length;
          hardcodedTexts.push({ file: relativePath, line: lineNumber, text: text, type: 'JSX Text' });
        }
      }
    }

    // Regex to find common string attributes in JSX: placeholder="...", alt="...", aria-label="..."
    const attrRegex = /(placeholder|alt|aria-label|label|title)=["']([^"']+)["']/g;
    while ((match = attrRegex.exec(content)) !== null) {
      const attr = match[1];
      const text = match[2].trim();
      if (text.length > 0 && isAlphaNumeric(text)) {
        // Ignore if it looks like a URL or a translation key
        if (!text.startsWith('http') && !/^[a-z]+\.[a-zA-Z0-9_.]+$/.test(text)) {
          const lineNumber = content.substring(0, match.index).split('\n').length;
          hardcodedTexts.push({ file: relativePath, line: lineNumber, text: text, type: `Attribute: ${attr}` });
        }
      }
    }

    // Find all string literals to check for raw keys
    const stringLiteralRegex = /(["'`])([^"'`]+)\1/g;
    while ((match = stringLiteralRegex.exec(content)) !== null) {
      const str = match[2];
      allStringLiterals.add(str);
      
      // If it looks like a translation key (e.g. "navbar.home", "treatments.data.title")
      if (/^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z0-9_]+)+$/.test(str)) {
        // Check if it exists in en.json
        if (getNestedValue(enData, str) === undefined) {
          // It's not in en.json, so it might be a missing key!
          // Exclude obvious file paths or css classes
          if (!str.endsWith('.tsx') && !str.endsWith('.ts') && !str.endsWith('.png') && !str.endsWith('.css') && !str.endsWith('.webp')) {
            const lineNumber = content.substring(0, match.index).split('\n').length;
            potentialMissingKeys.add(`${str} (in ${relativePath}:${lineNumber})`);
          }
        }
      }
    }
  }

  // Filter hardcoded texts to remove obvious non-ui strings
  const filteredHardcoded = hardcodedTexts.filter(item => {
    const t = item.text.toLowerCase();
    if (t === 'div' || t === 'span' || t === 'p' || t === 'h1' || t === 'h2' || t === 'button') return false;
    if (t.includes('://')) return false; // url
    return true;
  });

  console.log(`=== PART 1: HARDCODED VISIBLE TEXT ===`);
  console.log(`Found ${filteredHardcoded.length} potential hardcoded strings in components/pages.`);
  if (filteredHardcoded.length > 0) {
    const examples = filteredHardcoded.slice(0, 15);
    examples.forEach(ex => {
      console.log(`- [${ex.file}:${ex.line}] (${ex.type}) : "${ex.text}"`);
    });
    if (filteredHardcoded.length > 15) console.log(`... and ${filteredHardcoded.length - 15} more.`);
  }

  console.log(`\n=== PART 2: MISSING TRANSLATION KEYS (Found as String Literals) ===`);
  const missingKeysArray = Array.from(potentialMissingKeys);
  console.log(`Found ${missingKeysArray.length} strings that look like i18n keys but are missing from en.json.`);
  if (missingKeysArray.length > 0) {
    missingKeysArray.forEach(k => console.log(`- ${k}`));
  }

  // Double check all `t(...)` calls
  let missingTCalls = 0;
  for (const file of allFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const tRegex = /t\s*\(\s*['"`]([a-zA-Z0-9_.]+)['"`]/g;
    let match;
    while ((match = tRegex.exec(content)) !== null) {
      const key = match[1];
      if (getNestedValue(enData, key) === undefined) {
        missingTCalls++;
      }
    }
  }
  console.log(`\n=== PART 3: MISSING t('...') CALLS ===`);
  console.log(`Found ${missingTCalls} exact t() calls with keys missing from en.json.`);

  console.log('\n--- AUDIT COMPLETE ---');
}

main();
