const fs = require('fs');
const path = require('path');

// Specific files to check
const FILES_TO_CHECK = [
  'src/pages/Consultation.tsx',
  'src/pages/Treatments.tsx',
  'src/pages/TreatmentDetail.tsx',
  'src/pages/DentalTourism.tsx',
  'src/pages/Testimonials.tsx',
  'src/components/Navbar.tsx',
  'src/components/Footer.tsx',
  'src/components/HeroCallForm.tsx'
];

function extractKeysFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Find all t("key") and t('key') patterns
    const regex = /t\(["']([^"']+)["']/g;
    let match;
    const usedKeys = new Set();
    
    while ((match = regex.exec(content)) !== null) {
      usedKeys.add(match[1]);
    }
    
    return Array.from(usedKeys);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return [];
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
  console.log('🔍 Checking specific files for translation keys...\n');
  
  // Load en.json as source of truth
  console.log('📚 Loading en.json...');
  const enTranslations = flattenObject(loadTranslationFile('src/i18n/locales/en.json'));
  console.log(`   Found ${Object.keys(enTranslations).length} keys in en.json\n`);
  
  let totalKeysFound = 0;
  let totalMissingKeys = 0;
  
  // Check each file
  for (const filePath of FILES_TO_CHECK) {
    console.log(`📁 Checking: ${filePath}`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`   ⚠️  File not found: ${filePath}\n`);
      continue;
    }
    
    const usedKeys = extractKeysFromFile(filePath);
    const missingKeys = [];
    
    for (const key of usedKeys) {
      if (!(key in enTranslations)) {
        missingKeys.push(key);
      }
    }
    
    console.log(`   Found ${usedKeys.length} keys`);
    
    if (missingKeys.length > 0) {
      console.log(`   ❌ ${missingKeys.length} missing keys:`);
      missingKeys.sort().forEach(key => console.log(`      - ${key}`));
      totalMissingKeys += missingKeys.length;
    } else {
      console.log(`   ✅ All keys found in en.json`);
    }
    
    totalKeysFound += usedKeys.length;
    console.log('');
  }
  
  // Summary
  console.log('📋 SUMMARY:');
  console.log(`   Total keys checked: ${totalKeysFound}`);
  console.log(`   Total missing keys: ${totalMissingKeys}`);
  
  if (totalMissingKeys > 0) {
    console.log('\n❌ MISSING KEYS FOUND - These need to be added to en.json');
    process.exit(1);
  } else {
    console.log('\n✅ ALL KEYS FOUND IN en.json');
    process.exit(0);
  }
}

main();
