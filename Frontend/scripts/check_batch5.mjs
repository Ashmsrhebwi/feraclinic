import fs from 'fs';
import path from 'path';

const files = [
  'Corporate.tsx',
  'Partnership.tsx',
  'JoinUs.tsx',
  'Legal.tsx',
  'PrivacyPolicy.tsx',
  'TermsOfService.tsx',
  'DeliveryRefundPolicy.tsx',
  'DistanceSalesAgreement.tsx',
  'About.tsx'
];

files.forEach(f => {
  const p = path.join('src', 'pages', f);
  if (fs.existsSync(p)) {
    const text = fs.readFileSync(p, 'utf8');
    const lines = text.split('\n');
    lines.forEach((line, idx) => {
      // Find texts that don't have t( or are plain text in JSX
      if (line.match(/>([^<{]*[a-zA-Z]{3,}[^>]*)</)) {
        if (!line.includes('t(')) {
          console.log(`[${f}:${idx+1}] JSX Text: ${line.trim()}`);
        }
      }
      if (line.match(/['"`][a-zA-Z]{3,}[a-zA-Z\s.,!]{4,}['"`]/)) {
        if (!line.includes('t(') && !line.includes('className') && !line.includes('console.log') && !line.includes('import') && !line.includes('url')) {
          console.log(`[${f}:${idx+1}] String Lit: ${line.trim()}`);
        }
      }
    });
  }
});
