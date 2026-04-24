import { Treatment } from '../types'

export const treatments: Treatment[] = [
  {
    id: '1',
    slug: 'dental-implants',
    title: 'Dental Implants',
    category: 'Restorative',
    description: 'The gold standard for permanent tooth replacement. Our surgical specialists utilize Swiss-engineered titanium implants and 3D computer-guided protocols to restore full biological function and natural aesthetics with a lifetime clinical warranty.',
    duration: '1-2 hours per implant',
    recovery: '3-6 months integration',
    price: 'From EUR 500',
    image: '/images/fera-clinic/treatments/implant-procedure.webp',
    features: [
      'Grade-5 bio-compatible titanium',
      '3D CBCT surgical planning',
      'Immediate loading protocols',
      'Computer-guided precision',
      'ISO-certified sterilization'
    ],
    benefits: [
      'Stops jawbone resorption',
      'Restores 100% bite force',
      'Natural-looking porcelain finish',
      'Adjacent tooth preservation',
      'Long-term clinical stability'
    ],
    editorial: [
      {
        eyebrow: 'Precision Planning',
        heading: '3D Guided Surgical Protocols',
        description: 'Every implant procedure begins with advanced CBCT imaging, allowing our surgeons to map your jaw structure with sub-millimeter precision before the first incision is made.',
        image: '/images/fera-clinic/treatments/implant-procedure.webp'
      },
      {
        eyebrow: 'Swiss Engineering',
        heading: 'Bio-Compatible Titanium Integration',
        description: 'We utilize world-leading Swiss and German implant systems that offer superior osseointegration, ensuring your new tooth root becomes a permanent part of your biological structure.',
        image: '/images/fera-clinic/clinic/surgery-room.webp'
      },
      {
        eyebrow: 'Natural Aesthetics',
        heading: 'Custom Porcelain Restoration',
        description: 'The final crown is digitally designed to match the translucency and shade of your natural teeth, restoring not just your bite, but the authentic character of your smile.',
        image: '/images/fera-clinic/treatments/general-dentistry.webp'
      }
    ]
  },
  {
    id: '2',
    slug: 'hollywood-smile',
    title: 'Hollywood Smile',
    category: 'Cosmetic',
    description: 'A comprehensive smile transformation tailored to your facial symmetry. Utilizing ultra-thin E-Max porcelain veneers, we correct color, shape, and alignment to create a radiant, durable, and harmonious smile that looks completely natural.',
    duration: '5-7 days in Istanbul',
    recovery: 'Immediate results',
    price: 'From EUR 300 per unit',
    image: '/images/fera-clinic/treatments/veneer-procedure.webp',
    features: [
      'Digital Smile Design (DSD)',
      'E-Max lithium disilicate',
      'Ultra-thin preparation',
      'Custom translucency mapping',
      'Gingival symmetry alignment'
    ],
    benefits: [
      'Stain-resistant ceramics',
      'Perfect facial harmony',
      'Instant aesthetic correction',
      'High durability (15+ years)',
      'Minimal biological impact'
    ],
    editorial: [
      {
        eyebrow: 'Facial Harmony',
        heading: 'Digital Smile Design Analysis',
        description: 'We don’t just look at teeth; we analyze your entire facial structure, lip line, and skin tone to design a smile that enhances your natural beauty and personality.',
        image: '/images/fera-clinic/treatments/veneer-procedure.webp'
      },
      {
        eyebrow: 'Minimal Impact',
        heading: 'Ultra-Thin Porcelain Mastery',
        description: 'Our E-Max veneers require minimal to no tooth preparation, preserving your natural enamel while delivering a transformative aesthetic result that lasts for decades.',
        image: '/images/fera-clinic/clinic/waiting-area.webp'
      },
      {
        eyebrow: 'Artistic Finish',
        heading: 'Hand-Finished Ceramic Artistry',
        description: 'Each veneer is individually characterized by our master ceramists to include natural micro-textures and light-reflective properties that mimic real enamel.',
        image: '/images/fera-clinic/before-after/case1-after.jpg'
      }
    ]
  },
  {
    id: '3',
    slug: 'orthodontics',
    title: 'Orthodontics',
    category: 'Orthodontics',
    description: 'Correct complex alignment issues discreetly. From Invisalign clear aligners to advanced ceramic braces, our orthodontic specialists design custom treatment pathways that optimize both dental function and smile aesthetics.',
    duration: '6-18 months',
    recovery: 'Non-invasive',
    price: 'From EUR 2,200',
    image: '/images/fera-clinic/treatments/orthodontic-checkup.webp',
    features: [
      'Invisalign Platinum Elite',
      'iTero 3D digital scanning',
      'Clear ceramic fixed braces',
      'Accelerated movement options',
      'Virtual progress tracking'
    ],
    benefits: [
      'Discreet alignment',
      'Improved periodontal health',
      'No dietary restrictions (Aligners)',
      'Stable long-term results',
      'Corrects functional bite'
    ],
    editorial: [
      {
        eyebrow: 'Bite Alignment',
        heading: 'Functional Stability First',
        description: 'Our orthodontic approach prioritizes the long-term health of your jaw joint and bite function, ensuring your new smile is as healthy as it is beautiful.',
        image: '/images/fera-clinic/treatments/orthodontic-checkup.webp'
      },
      {
        eyebrow: 'Discreet Progress',
        heading: 'Invisible Correction Protocols',
        description: 'With Invisalign Platinum Elite status, we offer virtually invisible clear aligner treatments that fit seamlessly into your professional and social life.',
        image: '/images/fera-clinic/treatments/general-dentistry.webp'
      },
      {
        eyebrow: 'Structured Planning',
        heading: 'Predictable Digital Outcomes',
        description: 'Using iTero 3D scanning, we show you your final result before you even begin, with a structured plan that tracks your progress every step of the way.',
        image: '/images/fera-clinic/clinic/surgery-room.webp'
      }
    ]
  },
  {
    id: '4',
    slug: 'teeth-whitening',
    title: 'Professional Whitening',
    category: 'Cosmetic',
    description: 'Restore the natural brilliance of your smile with clinical-grade whitening. We use LED-activated Zoom systems to safely lift deep stains and brighten your smile by up to 8 shades in a single, comfortable session.',
    duration: '45-60 minutes',
    recovery: 'Minimal sensitivity',
    price: 'From EUR 250',
    image: '/images/fera-clinic/treatments/whitening-room.webp',
    features: [
      'Philips Zoom LED Tech',
      'Gingival barrier protection',
      'Desensitizing pretreatment',
      'Personalized shade guide',
      'Home maintenance kit'
    ],
    benefits: [
      'Instant aesthetic boost',
      'Enamel-safe protocols',
      'Removes years of staining',
      'Uniform color distribution',
      'Long-lasting brightness'
    ],
    editorial: [
      {
        eyebrow: 'Clinical Grade',
        heading: 'Philips Zoom LED Precision',
        description: 'Unlike over-the-counter options, our clinical whitening utilizes advanced LED technology to activate professional-grade gels for maximum results in minimum time.',
        image: '/images/fera-clinic/treatments/whitening-room.webp'
      },
      {
        eyebrow: 'Safe & Comfortable',
        heading: 'Enamel Protection Protocol',
        description: 'We utilize specialized gingival barriers and desensitizing agents to ensure your whitening experience is completely safe for your enamel and comfortable for your nerves.',
        image: '/images/fera-clinic/clinic/waiting-area.webp'
      },
      {
        eyebrow: 'Lasting Results',
        heading: 'Professional Maintenance Logic',
        description: 'Your treatment includes a customized maintenance plan and shade tracking to ensure your new, bright smile remains brilliant for as long as possible.',
        image: '/images/fera-clinic/treatments/general-dentistry.webp'
      }
    ]
  },
  {
    id: '5',
    slug: 'smile-makeover',
    title: 'Full Smile Design',
    category: 'Comprehensive',
    description: 'A multi-disciplinary approach to complete oral rehabilitation. Our specialists combine veneers, crowns, and orthodontic alignment to address multiple aesthetic and functional concerns in one cohesive treatment plan.',
    duration: '10-14 days',
    recovery: 'Varies by protocol',
    price: 'Custom Estimate',
    image: '/images/fera-clinic/treatments/general-dentistry.webp',
    features: [
      'Full mouth digital analysis',
      'Functional bite correction',
      'Multi-specialist triage',
      'Diagnostic wax-up preview',
      'Phased surgical approach'
    ],
    benefits: [
      'Total smile rejuvenation',
      'Cohesive aesthetic result',
      'Improved oral health',
      'Optimized facial support',
      'Confidence restoration'
    ],
    process: [
      '3D Facial & Dental Analysis',
      'Multidisciplinary Case Planning',
      'Functional Wax-up & Preview',
      'Phased Clinical Implementation',
      'Final Aesthetic Integration'
    ],
    candidates: [
      'Complex aesthetic concerns',
      'Functional bite misalignments',
      'Multiple missing or damaged teeth',
      'Complete smile transformation needs'
    ],
    editorial: [
      {
        eyebrow: 'Holistic Design',
        heading: 'Multidisciplinary Reconstruction',
        description: 'For complex cases, our team of prosthodontists, surgeons, and orthodontists collaborate to create a comprehensive plan that restores both health and harmony.',
        image: '/images/fera-clinic/treatments/general-dentistry.webp'
      },
      {
        eyebrow: 'Digital Mock-up',
        heading: 'The "Test Drive" Your Smile',
        description: 'Before any irreversible steps, we provide a temporary "wax-up" of your new smile, allowing you to see and feel the transformation in your own mouth.',
        image: '/images/fera-clinic/before-after/case1-after.jpg'
      },
      {
        eyebrow: 'Total Transformation',
        heading: 'Full Arch Aesthetic Synergy',
        description: 'By addressing color, shape, and function simultaneously, we achieve a level of aesthetic synergy that is impossible with piecemeal treatments.',
        image: '/images/fera-clinic/clinic/surgery-room.webp'
      }
    ]
  },
  {
    id: '6',
    slug: 'all-on-four',
    title: 'All-on-4 Restoration',
    category: 'Restorative',
    description: 'The definitive solution for total tooth loss. This revolutionary surgical technique uses four strategically angled implants to support a full bridge of teeth, providing immediate stability and function even in cases of bone loss.',
    duration: 'Same-day surgery',
    recovery: 'Soft diet for 3 months',
    price: 'From EUR 5,500 per arch',
    image: '/images/fera-clinic/treatments/allon4-surgery.webp',
    features: [
      'Tilted posterior implants',
      'Immediate fixed loading',
      'Full arch bridge design',
      'Avoids bone grafting',
      'Surgical guide precision'
    ],
    benefits: [
      'Teeth-in-a-day outcome',
      'Reduced surgical time',
      'Cost-effective rehab',
      'Preserves facial structure',
      'Stable fixed alternative'
    ],
    editorial: [
      {
        eyebrow: 'Surgical Innovation',
        heading: 'Strategically Angled Implants',
        description: 'By angling the posterior implants, we maximize contact with existing bone, often eliminating the need for complex and time-consuming bone grafting procedures.',
        image: '/images/fera-clinic/treatments/allon4-surgery.webp'
      },
      {
        eyebrow: 'Immediate Function',
        heading: 'Fixed Teeth in a Single Day',
        description: 'Our All-on-4 protocol allows for the placement of a temporary fixed bridge on the same day as surgery, so you never have to be without your smile.',
        image: '/images/fera-clinic/clinic/surgery-room.webp'
      },
      {
        eyebrow: 'Structural Support',
        heading: 'Restoring Facial Proportions',
        description: 'Total tooth loss leads to jawbone recession; All-on-4 provides the necessary structural support to maintain your natural facial contours and youthful profile.',
        image: '/images/fera-clinic/before-after/case5-after.jpg'
      }
    ]
  },
  {
    id: '7',
    slug: 'zirconium-crowns',
    title: 'Zirconium Crowns',
    category: 'Restorative',
    description: 'Premium restorative caps for damaged or weakened teeth. Zirconium offers unmatched durability and light-reflecting properties that mimic natural enamel, making it the ideal choice for both front and back tooth restoration.',
    duration: '4-5 days in Istanbul',
    recovery: 'Immediate function',
    price: 'From EUR 280 per unit',
    image: '/images/fera-clinic/treatments/crown-fitting.webp',
    features: [
      'Solid Monolithic Zirconia',
      'CAD/CAM milling precision',
      'Metal-free bio-compatibility',
      'High fracture resistance',
      'Custom glaze finishing'
    ],
    benefits: [
      'Exceptional strength',
      'Natural light reflection',
      'Biologically friendly',
      'Protects tooth structure',
      'Hypoallergenic material'
    ],
    editorial: [
      {
        eyebrow: 'Pure Strength',
        heading: 'Monolithic Zirconia Durability',
        description: 'Our monolithic zirconium crowns are virtually indestructible, making them perfect for posterior teeth that endure high chewing forces.',
        image: '/images/fera-clinic/treatments/crown-fitting.webp'
      },
      {
        eyebrow: 'Light Reflection',
        heading: 'Natural Enamel Translucency',
        description: 'We use high-translucency zirconia blocks that reflect light just like natural enamel, ensuring a perfect aesthetic match for your front teeth.',
        image: '/images/fera-clinic/clinic/waiting-area.webp'
      },
      {
        eyebrow: 'Perfect Fit',
        heading: 'CAD/CAM Digital Precision',
        description: 'Each crown is digitally milled to an accuracy of 20 microns, ensuring a perfect seal at the gum line and maximum comfort for your bite.',
        image: '/images/fera-clinic/treatments/general-dentistry.webp'
      }
    ]
  },
  {
    id: '8',
    slug: 'gum-contouring',
    title: 'Gingival Sculpting',
    category: 'Cosmetic',
    description: 'Perfect the frame of your smile. Our laser specialists use precise gingival contouring to correct "gummy" smiles and uneven gum lines, creating balanced proportions between your teeth and gums for a more symmetrical appearance.',
    duration: '1 hour',
    recovery: '1-3 days',
    price: 'From EUR 400',
    image: '/images/fera-clinic/treatments/laser-procedure.webp',
    features: [
      'Soft tissue laser tech',
      'No-stitch procedure',
      'Digital symmetry design',
      'Minimal bleeding/swelling',
      'Biolase precision'
    ],
    benefits: [
      'Corrects gummy smile',
      'Improves tooth symmetry',
      'Quick healing time',
      'Enhanced smile line',
      'Permanent correction'
    ],
    editorial: [
      {
        eyebrow: 'Laser Precision',
        heading: 'Micro-Surgical Gum Refinement',
        description: 'Using advanced Biolase soft-tissue lasers, we can sculpt the gum line with extreme precision, often with no need for traditional sutures.',
        image: '/images/fera-clinic/treatments/laser-procedure.webp'
      },
      {
        eyebrow: 'Symmetry Design',
        heading: 'Architectural Smile Balancing',
        description: 'We treat the gum line as the architectural frame of your smile, ensuring each tooth is framed by perfectly symmetrical, healthy-looking tissue.',
        image: '/images/fera-clinic/clinic/waiting-area.webp'
      },
      {
        eyebrow: 'Rapid Healing',
        heading: 'Bloodless Clinical Protocols',
        description: 'The laser instantly cauterizes as it cuts, meaning minimal swelling, no bleeding, and a healing process that is measured in days, not weeks.',
        image: '/images/fera-clinic/treatments/general-dentistry.webp'
      }
    ]
  }
]

export const categories = [
  'All',
  'Cosmetic',
  'Restorative',
  'Orthodontics',
  'Comprehensive'
]

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find(treatment => treatment.slug === slug)
}

export function getTreatmentsByCategory(category: string): Treatment[] {
  if (category === 'All') return treatments
  return treatments.filter(treatment => treatment.category === category)
}
