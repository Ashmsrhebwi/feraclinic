export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  featured: boolean
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Complete Guide to Dental Implants: Everything You Need to Know',
    slug: 'complete-guide-to-dental-implants',
    excerpt: 'Discover everything about dental implants, from treatment planning to recovery and long-term care.',
    content: `
      <h2>What Are Dental Implants?</h2>
      <p>Dental implants are titanium posts placed into the jawbone to support replacement teeth with excellent stability and function.</p>
      <h2>How Do Dental Implants Work?</h2>
      <p>Because implants integrate with the bone, they provide a strong foundation for crowns, bridges, or full-arch restorations.</p>
      <h2>The Dental Implant Procedure</h2>
      <ol>
        <li><strong>Consultation & Planning:</strong> Clinical examination, scans, and treatment design</li>
        <li><strong>Implant Placement:</strong> Surgical placement of the implant fixture</li>
        <li><strong>Healing Phase:</strong> Time for bone integration</li>
        <li><strong>Restoration:</strong> Placement of the final prosthetic tooth or bridge</li>
      </ol>
      <h2>Benefits of Dental Implants</h2>
      <ul>
        <li>Natural appearance and stable function</li>
        <li>Improved chewing comfort</li>
        <li>Long-term support for oral health</li>
        <li>Preservation of surrounding bone structure</li>
      </ul>
    `,
    author: 'Dr. Sarah Mitchell',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Dental Implants',
    image: '/images/fera-clinic/treatments/implant-procedure.webp',
    featured: true,
    tags: ['dental implants', 'tooth replacement', 'oral surgery', 'restorative dentistry']
  },
  {
    id: '2',
    title: 'Hollywood Smile Secrets: How Celebrities Get Perfect Teeth',
    slug: 'hollywood-smile-secrets',
    excerpt: 'Learn how veneers, whitening, and smile planning can transform the look of your smile.',
    content: `
      <h2>What Is a Hollywood Smile?</h2>
      <p>A Hollywood smile is a carefully designed cosmetic result that balances tooth shape, color, alignment, and facial harmony.</p>
      <h2>Popular Treatments</h2>
      <h3>Porcelain Veneers</h3>
      <p>Thin restorations placed on the front surface of the teeth to improve shape, color, and symmetry.</p>
      <h3>Professional Whitening</h3>
      <p>Used to brighten the smile and improve overall appearance.</p>
      <h3>Smile Design</h3>
      <p>Digital planning helps visualize and refine the final result before treatment begins.</p>
      <h2>Maintaining Your Result</h2>
      <ul>
        <li>Brush and floss consistently</li>
        <li>Attend regular dental check-ups</li>
        <li>Avoid excessive staining habits</li>
        <li>Use protective appliances when indicated</li>
      </ul>
    `,
    author: 'Dr. Michael Chen',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Cosmetic Dentistry',
    image: '/images/fera-clinic/treatments/veneer-procedure.webp',
    featured: true,
    tags: ['hollywood smile', 'veneers', 'cosmetic dentistry', 'smile makeover']
  },
  {
    id: '3',
    title: 'Invisalign vs Traditional Braces: Which is Right for You?',
    slug: 'invisalign-vs-traditional-braces',
    excerpt: 'Compare treatment options and understand which orthodontic solution best fits your needs.',
    content: `
      <h2>Modern Orthodontics</h2>
      <p>Choosing between Invisalign and traditional braces is a significant decision. Both systems offer excellent results, but they suit different lifestyles and clinical needs.</p>
      <h2>Invisalign Benefits</h2>
      <ul>
        <li>Discreet appearance with clear aligners</li>
        <li>Removable for eating and cleaning</li>
        <li>No dietary restrictions</li>
        <li>Comfortable smooth plastic material</li>
      </ul>
      <h2>Traditional Braces Benefits</h2>
      <ul>
        <li>Effective for complex tooth movements</li>
        <li>Fixed in place, no compliance issues</li>
        <li>Modern ceramic options for better aesthetics</li>
        <li>Predictable results for all cases</li>
      </ul>
    `,
    author: 'Dr. Emma Wilson',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Orthodontics',
    image: '/images/fera-clinic/treatments/orthodontic-checkup.webp',
    featured: false,
    tags: ['orthodontics', 'invisalign', 'braces', 'smile alignment']
  },
  {
    id: '4',
    title: 'Dental Tourism in Istanbul: A Complete Guide',
    slug: 'dental-tourism-istanbul-guide',
    excerpt: 'A practical guide for international patients planning dental treatment in Istanbul.',
    content: `
      <h2>Why Istanbul for Dental Care?</h2>
      <p>Istanbul has become a global hub for medical tourism, combining world-class clinical expertise with affordable rates and exceptional hospitality.</p>
      <h2>Planning Your Trip</h2>
      <p>A successful dental journey requires careful coordination. At FeRa Clinic, we provide full support for our international patients.</p>
      <h2>The FeRa Protocol</h2>
      <ul>
        <li>Online initial consultation and triage</li>
        <li>VIP airport and hotel transfers</li>
        <li>Assistance with 5-star accommodation</li>
        <li>Multilingual patient support</li>
      </ul>
    `,
    author: 'Dr. Ahmed Hassan',
    date: '2023-12-28',
    readTime: '10 min read',
    category: 'Dental Tourism',
    image: '/images/fera-clinic/clinic/reception.webp',
    featured: false,
    tags: ['dental tourism', 'istanbul', 'medical travel', 'fera clinic']
  },
  {
    id: '5',
    title: 'The Truth About Teeth Whitening: Myths vs Facts',
    slug: 'teeth-whitening-myths-vs-facts',
    excerpt: 'Understand the facts behind teeth whitening and what really helps create a brighter smile.',
    content: `
      <h2>Teeth Whitening Facts</h2>
      <p>Professional teeth whitening is one of the most popular cosmetic procedures. However, many myths circulate about its safety and efficacy.</p>
      <h2>Myth vs Reality</h2>
      <p><strong>Myth:</strong> Whitening damages tooth enamel.<br><strong>Fact:</strong> Professional whitening with approved gels is safe for enamel when performed by specialists.</p>
      <h2>Clinical Whitening Options</h2>
      <ul>
        <li>In-office LED whitening for instant results</li>
        <li>Custom take-home kits for gradual improvement</li>
        <li>Maintenance protocols for long-term brightness</li>
      </ul>
    `,
    author: 'Dr. Lisa Park',
    date: '2023-12-20',
    readTime: '5 min read',
    category: 'Cosmetic Dentistry',
    image: '/images/fera-clinic/treatments/general-dentistry.webp',
    featured: false,
    tags: ['teeth whitening', 'cosmetic dentistry', 'smile bright', 'dental health']
  },
  {
    id: '6',
    title: 'All-on-4 Implants: The Solution for Full Arch Restoration',
    slug: 'all-on-4-implants-solution',
    excerpt: 'Explore how All-on-4 implants can restore a full smile with fewer implant placements.',
    content: `
      <h2>All-on-4 Concept</h2>
      <p>All-on-4 is a revolutionary surgical technique that allows for the restoration of a complete arch of teeth using only four strategically placed implants.</p>
      <h2>Why Choose All-on-4?</h2>
      <ul>
        <li>Immediate function and aesthetics</li>
        <li>Cost-effective compared to individual implants</li>
        <li>Often avoids the need for bone grafting</li>
        <li>High stability and long-term success</li>
      </ul>
    `,
    author: 'Dr. Robert Johnson',
    date: '2023-12-15',
    readTime: '9 min read',
    category: 'Dental Implants',
    image: '/images/fera-clinic/clinic/surgery-room.webp',
    featured: false,
    tags: ['all-on-4', 'dental implants', 'full arch restoration', 'smile surgery']
  }
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}
