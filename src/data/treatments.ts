import { Treatment } from '../types'

export const treatments: Treatment[] = [
  {
    id: '1',
    slug: 'dental-implants',
    title: 'Dental Implants',
    category: 'Restorative',
    description: 'Premium quality titanium implants with lifetime warranty. The perfect solution for missing teeth with natural-looking results.',
    duration: '1-2 hours per implant',
    recovery: '3-6 months',
    price: 'From EUR500',
    image: '/images/fera-clinic/treatments/implant-procedure.webp',
    features: [
      'Titanium grade 5 material',
      'Lifetime warranty',
      '3D guided surgery',
      'Immediate loading option',
      'All-on-4 technique'
    ],
    benefits: [
      'Permanent solution',
      'Natural appearance',
      'Preserves jaw bone',
      'No adjacent tooth damage',
      '99% success rate'
    ]
  },
  {
    id: '2',
    slug: 'veneers',
    title: 'Porcelain Veneers',
    category: 'Cosmetic',
    description: 'Transform your smile with custom-designed porcelain veneers. Achieve a perfect Hollywood smile with minimal tooth preparation.',
    duration: '2-3 visits over 2 weeks',
    recovery: 'None',
    price: 'From EUR350 per tooth',
    image: '/images/fera-clinic/treatments/veneer-procedure.webp',
    features: [
      'Ultra-thin porcelain',
      'Stain resistant',
      'Custom shade matching',
      'Minimal preparation',
      'CAD/CAM design'
    ],
    benefits: [
      'Instant smile transformation',
      'Natural translucency',
      'Long lasting results',
      'Improved confidence',
      'Reversible procedure'
    ]
  },
  {
    id: '3',
    slug: 'invisalign',
    title: 'Invisalign',
    category: 'Orthodontics',
    description: 'Straighten your teeth invisibly with clear aligners. The modern alternative to traditional braces.',
    duration: '6-18 months',
    recovery: 'None',
    price: 'From EUR2,500',
    image: '/images/fera-clinic/treatments/orthodontic-checkup.webp',
    features: [
      'Clear removable aligners',
      '3D treatment planning',
      'Weekly changes',
      'Virtual monitoring',
      'Comfortable material'
    ],
    benefits: [
      'Invisible treatment',
      'Removable for eating',
      'Easy cleaning',
      'Predictable results',
      'No dietary restrictions'
    ]
  },
  {
    id: '4',
    slug: 'teeth-whitening',
    title: 'Professional Teeth Whitening',
    category: 'Cosmetic',
    description: 'Get a brighter smile with our professional teeth whitening treatment. Safe, effective, and long-lasting results.',
    duration: '1 hour',
    recovery: 'None',
    price: 'From EUR250',
    image: '/images/fera-clinic/treatments/general-dentistry.webp',
    features: [
      'LED-activated whitening',
      'FDA-approved gel',
      'Up to 8 shades lighter',
      'Desensitizing treatment',
      'Immediate results'
    ],
    benefits: [
      'Instant results',
      'Safe for enamel',
      'Long lasting effect',
      'Boosted confidence',
      'Minimal sensitivity'
    ]
  },
  {
    id: '5',
    slug: 'smile-makeover',
    title: 'Smile Makeover',
    category: 'Comprehensive',
    description: 'Complete smile transformation combining multiple treatments for your perfect smile. Customized treatment plan.',
    duration: '2-12 weeks',
    recovery: 'Varies by treatment',
    price: 'From EUR3,000',
    image: '/images/fera-clinic/treatments/veneer-procedure.webp',
    features: [
      'Comprehensive analysis',
      'Digital smile design',
      'Multiple treatments',
      'Phased approach',
      'Final preview'
    ],
    benefits: [
      'Complete transformation',
      'Customized results',
      'Improved function',
      'Enhanced aesthetics',
      'Long-term solution'
    ]
  },
  {
    id: '6',
    slug: 'all-on-four',
    title: 'All-on-4 Implants',
    category: 'Restorative',
    description: 'Full arch restoration with just 4 implants. Immediate function and beautiful aesthetics for complete tooth loss.',
    duration: 'Same day surgery',
    recovery: '3-6 months',
    price: 'From EUR8,000 per arch',
    image: '/images/fera-clinic/treatments/implant-procedure.webp',
    features: [
      '4 strategic implants',
      'Immediate loading',
      'Fixed prosthesis',
      'Bone graft alternative',
      'Same day teeth'
    ],
    benefits: [
      'Immediate function',
      'Cost effective',
      'Minimal surgery',
      'Stable solution',
      'Natural appearance'
    ]
  },
  {
    id: '7',
    slug: 'crowns-bridges',
    title: 'Crowns & Bridges',
    category: 'Restorative',
    description: 'Restore damaged teeth with high-quality ceramic crowns and bridges. Strength, function, and aesthetics combined.',
    duration: '2-3 visits over 2 weeks',
    recovery: 'None',
    price: 'From EUR400 per unit',
    image: '/images/fera-clinic/treatments/implant-procedure.webp',
    features: [
      'Zirconia material',
      'Digital scanning',
      'Perfect fit',
      'Natural color',
      'Metal-free option'
    ],
    benefits: [
      'Restores function',
      'Strengthens teeth',
      'Natural appearance',
      'Durable solution',
      'Improves bite'
    ]
  },
  {
    id: '8',
    slug: 'gum-contouring',
    title: 'Gum Contouring',
    category: 'Cosmetic',
    description: 'Improve your smile line with precise gum reshaping. Create the perfect frame for your teeth.',
    duration: '1-2 hours',
    recovery: '1-2 weeks',
    price: 'From EUR500',
    image: '/images/fera-clinic/treatments/general-dentistry.webp',
    features: [
      'Laser technology',
      'Minimal discomfort',
      'Precise shaping',
      'Quick healing',
      'Local anesthesia'
    ],
    benefits: [
      'Improved smile line',
      'Better proportions',
      'Minimal recovery',
      'Permanent results',
      'Enhanced confidence'
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
