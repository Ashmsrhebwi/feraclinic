import fs from 'fs';
import path from 'path';

const localesDir = path.resolve('src/i18n/locales');
const languages = ['en', 'ar', 'fr', 'ru', 'tr', 'es'];

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
  // Only set if not already set, or if we want to force
  if (current[keys[keys.length - 1]] === undefined || typeof current[keys[keys.length - 1]] === 'string' && current[keys[keys.length - 1]].startsWith('treatments.')) {
    current[keys[keys.length - 1]] = value;
  }
}

// Ensure array exists
function setNestedArray(obj, pathStr, arr) {
    const keys = pathStr.split('.');
    let current = obj;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }
    const lastKey = keys[keys.length - 1];
    if (current[lastKey] === undefined) {
        current[lastKey] = arr;
    }
}

const treatmentsData = {
  "1": {
    "title": "Dental Implants",
    "desc": "The gold standard for permanent tooth replacement. Our surgical specialists utilize Swiss-engineered titanium implants and 3D computer-guided protocols to restore full biological function and natural aesthetics with a lifetime clinical warranty.",
    "duration": "1-2 hours per implant",
    "price": "From EUR 500",
    "heroDesc": "Permanent, natural-looking replacement for missing teeth using advanced Swiss-engineered titanium implants.",
    "features": [
      "Grade-5 bio-compatible titanium",
      "3D CBCT surgical planning",
      "Immediate loading protocols",
      "Computer-guided precision",
      "ISO-certified sterilization"
    ],
    "benefits": [
      "Stops jawbone resorption",
      "Restores 100% bite force",
      "Natural-looking porcelain finish",
      "Adjacent tooth preservation",
      "Long-term clinical stability"
    ],
    "seo": {
      "title": "Dental Implants in Istanbul | FeRa Clinic",
      "description": "Restore your smile with premium dental implants in Istanbul. Expert surgeons, Swiss-engineered implants, and lifetime warranty at FeRa Clinic."
    }
  },
  "2": {
    "title": "Hollywood Smile",
    "desc": "A comprehensive smile transformation tailored to your facial symmetry. Utilizing ultra-thin E-Max porcelain veneers, we correct color, shape, and alignment to create a radiant, durable, and harmonious smile that looks completely natural.",
    "duration": "5-7 days in Istanbul",
    "price": "From EUR 300 per unit",
    "heroDesc": "Transform your smile completely with custom-designed porcelain veneers tailored to your facial symmetry.",
    "features": [
      "Digital Smile Design (DSD)",
      "E-Max lithium disilicate",
      "Ultra-thin preparation",
      "Custom translucency mapping",
      "Gingival symmetry alignment"
    ],
    "benefits": [
      "Stain-resistant ceramics",
      "Perfect facial harmony",
      "Instant aesthetic correction",
      "High durability (15+ years)",
      "Minimal biological impact"
    ],
    "seo": {
      "title": "Hollywood Smile Turkey | Porcelain Veneers Istanbul",
      "description": "Get a flawless Hollywood Smile in Istanbul. Custom porcelain veneers and digital smile design at FeRa Clinic."
    }
  },
  "3": {
    "title": "Orthodontics",
    "desc": "Correct complex alignment issues discreetly. From Invisalign clear aligners to advanced ceramic braces, our orthodontic specialists design custom treatment pathways that optimize both dental function and smile aesthetics.",
    "duration": "6-18 months",
    "price": "From EUR 2,200",
    "heroDesc": "Discreetly correct alignment issues with Invisalign clear aligners and advanced ceramic braces.",
    "features": [
      "Invisalign Platinum Elite",
      "iTero 3D digital scanning",
      "Clear ceramic fixed braces",
      "Accelerated movement options",
      "Virtual progress tracking"
    ],
    "benefits": [
      "Discreet alignment",
      "Improved periodontal health",
      "No dietary restrictions (Aligners)",
      "Stable long-term results",
      "Corrects functional bite"
    ],
    "seo": {
      "title": "Orthodontics & Invisalign in Istanbul | FeRa Clinic",
      "description": "Expert orthodontic treatments in Istanbul. Invisalign and ceramic braces for perfect alignment at FeRa Clinic."
    }
  },
  "4": {
    "title": "Professional Whitening",
    "desc": "Restore the natural brilliance of your smile with clinical-grade whitening. We use LED-activated Zoom systems to safely lift deep stains and brighten your smile by up to 8 shades in a single, comfortable session.",
    "duration": "45-60 minutes",
    "price": "From EUR 250",
    "heroDesc": "Brighten your smile up to 8 shades in a single session with our clinical-grade LED whitening.",
    "features": [
      "Philips Zoom LED Tech",
      "Gingival barrier protection",
      "Desensitizing pretreatment",
      "Personalized shade guide",
      "Home maintenance kit"
    ],
    "benefits": [
      "Instant aesthetic boost",
      "Enamel-safe protocols",
      "Removes years of staining",
      "Uniform color distribution",
      "Long-lasting brightness"
    ],
    "seo": {
      "title": "Teeth Whitening Istanbul | Professional Laser Whitening",
      "description": "Brighten your smile with professional laser teeth whitening in Istanbul at FeRa Clinic. Safe and effective."
    }
  },
  "5": {
    "title": "Full Smile Design",
    "desc": "A multi-disciplinary approach to complete oral rehabilitation. Our specialists combine veneers, crowns, and orthodontic alignment to address multiple aesthetic and functional concerns in one cohesive treatment plan.",
    "duration": "10-14 days",
    "price": "Custom Estimate",
    "heroDesc": "A complete, multi-disciplinary approach to oral rehabilitation for optimal aesthetics and function.",
    "features": [
      "Full mouth digital analysis",
      "Functional bite correction",
      "Multi-specialist triage",
      "Diagnostic wax-up preview",
      "Phased surgical approach"
    ],
    "benefits": [
      "Total smile rejuvenation",
      "Cohesive aesthetic result",
      "Improved oral health",
      "Optimized facial support",
      "Confidence restoration"
    ],
    "seo": {
      "title": "Full Smile Design Istanbul | Complete Makeover",
      "description": "Comprehensive smile makeovers in Istanbul. Achieve the perfect smile with digital design at FeRa Clinic."
    }
  },
  "6": {
    "title": "All-on-4 Restoration",
    "desc": "The definitive solution for total tooth loss. This revolutionary surgical technique uses four strategically angled implants to support a full bridge of teeth, providing immediate stability and function even in cases of bone loss.",
    "duration": "Same-day surgery",
    "price": "From EUR 5,500 per arch",
    "heroDesc": "Immediate, full-arch tooth replacement using four strategically placed implants for maximum stability.",
    "features": [
      "Tilted posterior implants",
      "Immediate fixed loading",
      "Full arch bridge design",
      "Avoids bone grafting",
      "Surgical guide precision"
    ],
    "benefits": [
      "Teeth-in-a-day outcome",
      "Reduced surgical time",
      "Cost-effective rehab",
      "Preserves facial structure",
      "Stable fixed alternative"
    ],
    "seo": {
      "title": "All on 4 Implants Istanbul | Full Mouth Restoration",
      "description": "Get permanent teeth in one day with All-on-4 implants in Istanbul at FeRa Clinic. Advanced surgical protocols."
    }
  },
  "7": {
    "title": "Zirconium Crowns",
    "desc": "Premium restorative caps for damaged or weakened teeth. Zirconium offers unmatched durability and light-reflecting properties that mimic natural enamel, making it the ideal choice for both front and back tooth restoration.",
    "duration": "4-5 days in Istanbul",
    "price": "From EUR 280 per unit",
    "heroDesc": "Durable, natural-looking tooth restoration using premium monolithic zirconia.",
    "features": [
      "Solid Monolithic Zirconia",
      "CAD/CAM milling precision",
      "Metal-free bio-compatibility",
      "High fracture resistance",
      "Custom glaze finishing"
    ],
    "benefits": [
      "Exceptional strength",
      "Natural light reflection",
      "Biologically friendly",
      "Protects tooth structure",
      "Hypoallergenic material"
    ],
    "seo": {
      "title": "Zirconium Crowns Istanbul | High Quality Dental Crowns",
      "description": "Restore your teeth with premium zirconium crowns in Istanbul. Durable, natural-looking results at FeRa Clinic."
    }
  },
  "8": {
    "title": "Gingival Sculpting",
    "desc": "Expert gingival contouring to correct gummy smiles and uneven gum lines. Using advanced laser technology, we sculpt your gums for perfect symmetry and a balanced smile.",
    "duration": "1 hour",
    "price": "From EUR 400",
    "heroDesc": "Achieve perfect smile symmetry with painless, laser-assisted gum contouring.",
    "features": [
      "Soft tissue laser tech",
      "No-stitch procedure",
      "Digital symmetry design",
      "Minimal bleeding/swelling",
      "Biolase precision"
    ],
    "benefits": [
      "Corrects gummy smile",
      "Improves tooth symmetry",
      "Quick healing time",
      "Enhanced smile line",
      "Permanent correction"
    ],
    "seo": {
      "title": "Gum Contouring & Sculpting Istanbul | FeRa Clinic",
      "description": "Correct gummy smiles with precision laser gum sculpting in Istanbul. Quick healing and perfect symmetry."
    }
  }
};

const otherTranslations = {
  "treatments.detail.implants.seo.title": "Dental Implants in Istanbul | FeRa Clinic",
  "treatments.detail.implants.seo.description": "Restore your smile with premium dental implants in Istanbul. Expert surgeons, Swiss-engineered implants, and lifetime warranty at FeRa Clinic.",
  "treatments.detail.hollywood.seo.title": "Hollywood Smile Turkey | Porcelain Veneers Istanbul",
  "treatments.detail.hollywood.seo.description": "Get a flawless Hollywood Smile in Istanbul. Custom porcelain veneers and digital smile design at FeRa Clinic.",
  "treatments.detail.ortho.seo.title": "Orthodontics & Invisalign in Istanbul | FeRa Clinic",
  "treatments.detail.ortho.seo.description": "Expert orthodontic treatments in Istanbul. Invisalign and ceramic braces for perfect alignment at FeRa Clinic.",
  
  "treatments.detail.implants.heroDesc": "Permanent, natural-looking replacement for missing teeth using advanced Swiss-engineered titanium implants.",
  "treatments.detail.hollywood.heroDesc": "Transform your smile completely with custom-designed porcelain veneers tailored to your facial symmetry.",
  "treatments.detail.ortho.heroDesc": "Discreetly correct alignment issues with Invisalign clear aligners and advanced ceramic braces.",
  
  "treatments.process.consultation": "Consultation",
  "treatments.process.procedure": "Procedure",
  "treatments.process.recovery": "Recovery",
  "treatments.process.result": "Result",
  
  "treatmentProcess.planning3D": "3D Planning",
  "treatmentProcess.implantPlacement": "Implant Placement",
  "treatmentProcess.healingPhase": "Healing Phase",
  "treatmentProcess.finalRestoration": "Final Restoration",
  
  "treatmentProcess.smileDesign": "Smile Design",
  "treatmentProcess.preparation": "Preparation",
  "treatmentProcess.placement": "Placement",
  "treatmentProcess.refinement": "Refinement",
  
  "treatmentProcess.assessment": "Assessment",
  "treatmentProcess.planning": "Planning",
  "treatmentProcess.aligners": "Aligners",
  "treatmentProcess.monitoring": "Monitoring",
  "treatmentProcess.retention": "Retention",
  
  "treatments.candidates.missing": "Missing or damaged teeth",
  "treatments.candidates.aesthetic": "Aesthetic improvements",
  "treatments.candidates.function": "Restoration of function",
  "treatments.candidates.longterm": "Long-term dental health",
  
  "faq.treatment.q1": "How long does the treatment take?",
  "faq.treatment.a1": "Treatment duration varies based on the specific procedure and your individual case. We will provide a detailed timeline during your consultation.",
  "faq.treatment.q2": "Is the procedure painful?",
  "faq.treatment.a2": "We use modern anesthetics and advanced techniques to ensure your treatment is as comfortable and pain-free as possible.",
  "faq.treatment.q3": "What is the recovery time?",
  "faq.treatment.a3": "Recovery time depends on the treatment. Many cosmetic procedures have immediate recovery, while surgical procedures may require a few days to a few months for complete healing.",
  "faq.treatment.q4": "How long do the results last?",
  "faq.treatment.a4": "With proper care and maintenance, treatments like implants and high-quality veneers can last 15 years to a lifetime.",

  "treatments.notFound": "Treatment Not Found",
  "treatments.notFoundDesc": "The treatment you are looking for does not exist or has been moved.",
  "treatments.backToTreatments": "Back to Treatments"
};

const arrayTranslations = {
  "treatments.detail.implants.process": [
    "3D Planning", "Implant Placement", "Healing Phase", "Final Restoration"
  ],
  "treatments.detail.hollywood.process": [
    "Smile Design", "Preparation", "Placement", "Refinement"
  ],
  "treatments.detail.ortho.treatmentProcess.steps": [
    "Assessment", "Planning", "Aligners", "Monitoring", "Retention"
  ],
  "treatments.detail.implants.candidates": [
    "Missing one or multiple teeth", "Desire for permanent solution", "Jawbone preservation needs"
  ],
  "treatments.detail.hollywood.candidates": [
    "Discolored or stained teeth", "Gaps between teeth", "Desire for aesthetic boost"
  ],
  "treatments.detail.ortho.whoNeedsIt.candidates": [
    "Crooked or crowded teeth", "Bite alignment issues", "Gaps between teeth"
  ]
};

languages.forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${lang}, file not found.`);
    return;
  }
  
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Set simple flat keys
  for (const [key, value] of Object.entries(otherTranslations)) {
    setNested(content, key, value);
  }
  
  // Set arrays
  for (const [key, value] of Object.entries(arrayTranslations)) {
    setNestedArray(content, key, value);
  }
  
  // Set treatment data keys
  for (const [id, data] of Object.entries(treatmentsData)) {
    setNested(content, `treatments.data.${id}.title`, data.title);
    setNested(content, `treatments.data.${id}.desc`, data.desc);
    setNested(content, `treatments.data.${id}.duration`, data.duration);
    setNested(content, `treatments.data.${id}.price`, data.price);
    setNested(content, `treatments.data.${id}.heroDesc`, data.heroDesc);
    setNested(content, `treatments.data.${id}.seo.title`, data.seo.title);
    setNested(content, `treatments.data.${id}.seo.description`, data.seo.description);
    
    // Arrays for features and benefits
    data.features.forEach((feature, index) => {
        setNested(content, `treatments.data.${id}.features.${index}`, feature);
    });
    data.benefits.forEach((benefit, index) => {
        setNested(content, `treatments.data.${id}.benefits.${index}`, benefit);
    });
  }
  
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
  console.log(`Updated ${lang}.json`);
});
