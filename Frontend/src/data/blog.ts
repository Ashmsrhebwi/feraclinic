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
    excerpt: 'Expert guide to dental implants in Istanbul: treatment planning, procedures, recovery, and long-term care for international patients.',
    content: `
      <h2>Understanding Dental Implants</h2>
      <p>Dental implants are titanium posts surgically placed into the jawbone to serve as artificial tooth roots. They provide a stable foundation for replacement teeth that look, feel, and function like natural teeth.</p>
      
      <h2>How Dental Implants Work</h2>
      <p>Through a process called osseointegration, the implant fuses with your jawbone over several months, creating a strong and permanent anchor for your new teeth. This biological bonding allows implants to withstand the forces of biting and chewing just like natural tooth roots.</p>
      
      <h2>The Dental Implant Journey</h2>
      <p>At FeRa Clinic in Istanbul, we follow a comprehensive protocol to ensure optimal results for our international patients:</p>
      <ol>
        <li><strong>Initial Consultation:</strong> Clinical examination, 3D imaging, and personalized treatment planning</li>
        <li><strong>Surgical Planning:</strong> Digital smile design and precise implant positioning</li>
        <li><strong>Implant Placement:</strong> Minimally invasive surgical procedure under local anesthesia</li>
        <li><strong>Healing Period:</strong> 3-6 months for osseointegration (varies by individual)</li>
        <li><strong>Final Restoration:</strong> Placement of custom crowns, bridges, or prosthetics</li>
      </ol>
      
      <h2>Benefits of Dental Implants</h2>
      <ul>
        <li>Natural appearance and comfortable function</li>
        <li>Improved speech and chewing ability</li>
        <li>Long-term solution with proper care</li>
        <li>Preservation of jawbone and facial structure</li>
        <li>Success rates exceeding 95% with proper planning</li>
      </ul>
      
      <h2>Are You a Candidate for Dental Implants?</h2>
      <p>Ideal candidates should have good general health, adequate jawbone density, and healthy gums. However, modern techniques allow us to help many patients who previously weren't candidates through bone grafting and alternative approaches.</p>
      
      <blockquote>
        <p><strong>Important Note:</strong> Individual results may vary. A thorough clinical evaluation is necessary to determine your specific treatment plan and expected outcomes.</p>
      </blockquote>
      
      <h2>Why Choose Istanbul for Dental Implants?</h2>
      <p>Istanbul combines world-class dental expertise with significant cost advantages. Our clinic uses the same premium materials and advanced technology as leading European clinics, but at more accessible rates.</p>
      
      <h2>Next Steps</h2>
      <p>If you're considering dental implants, we recommend scheduling a consultation to discuss your specific needs and explore your treatment options. Our international patient team can help coordinate your entire journey.</p>
    `,
    author: 'Dr. Sarah Mitchell',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Dental Implants',
    image: '/images/fera-clinic/treatments/implant-procedure.webp',
    featured: true,
    tags: ['dental implants', 'tooth replacement', 'oral surgery', 'restorative dentistry', 'istanbul dental clinic']
  },
  {
    id: '2',
    title: 'Hollywood Smile Secrets: How Celebrities Get Perfect Teeth',
    slug: 'hollywood-smile-secrets',
    excerpt: 'Discover the advanced cosmetic dentistry techniques behind celebrity smiles: veneers, digital smile design, and personalized treatment planning.',
    content: `
      <h2>What Makes a Hollywood Smile?</h2>
      <p>A Hollywood smile is more than just white teeth—it's a carefully designed result that balances tooth shape, color, alignment, and facial harmony. At FeRa Clinic, we use advanced digital planning to create smiles that complement your unique features.</p>
      
      <h2>Key Components of Smile Design</h2>
      <h3>Digital Smile Planning</h3>
      <p>Modern smile design begins with sophisticated digital tools that allow us to preview your potential results before treatment begins. This includes 3D imaging, facial analysis, and virtual try-ins.</p>
      
      <h3>Porcelain Veneers</h3>
      <p>Thin, custom-crafted shells of porcelain that bond to the front surface of teeth. They can correct color, shape, size, and alignment issues with minimal tooth preparation.</p>
      
      <h3>Professional Teeth Whitening</h3>
      <p>Clinical-grade whitening systems that safely and effectively brighten your smile by several shades. Results are immediate and long-lasting with proper maintenance.</p>
      
      <h2>The Smile Design Process</h2>
      <p>Our approach at FeRa Clinic involves:</p>
      <ol>
        <li><strong>Comprehensive Analysis:</strong> Facial proportions, gum line, tooth shape, and color assessment</li>
        <li><strong>Digital Mockup:</strong> Computer-generated preview of your potential smile</li>
        <li><strong>Trial Smile:</strong> Temporary version to test aesthetics and function</li>
        <li><strong>Final Treatment:</strong> Custom veneers or other restorations crafted to perfection</li>
      </ol>
      
      <h2>Common Questions About Smile Makeovers</h2>
      <h3>How long do veneers last?</h3>
      <p>With proper care, porcelain veneers typically last 10-15 years. Good oral hygiene and regular dental visits are essential for longevity.</p>
      
      <h3>Is the process painful?</h3>
      <p>Most procedures involve minimal discomfort. We use advanced techniques and anesthesia to ensure your comfort throughout treatment.</p>
      
      <h3>Can anyone get a Hollywood smile?</h3>
      <p>Most healthy adults are candidates. However, we need to assess your oral health and discuss realistic expectations based on your unique situation.</p>
      
      <blockquote>
        <p><strong>Medical Note:</strong> Results vary based on individual factors including oral health, bone structure, and personal habits. A thorough consultation is required to determine your suitability.</p>
      </blockquote>
      
      <h2>Maintaining Your New Smile</h2>
      <ul>
        <li>Consistent brushing and flossing routine</li>
        <li>Regular professional cleanings and check-ups</li>
        <li>Avoid excessive staining foods and beverages</li>
        <li>Consider a night guard if you grind your teeth</li>
        <li>Follow your dentist's specific care instructions</li>
      </ul>
      
      <h2>Why Choose FeRa Clinic for Your Smile Makeover?</h2>
      <p>Our Istanbul clinic combines artistic expertise with clinical excellence. We use premium materials, advanced technology, and personalized approaches to create natural-looking results that enhance your unique beauty.</p>
    `,
    author: 'Dr. Michael Chen',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Cosmetic Dentistry',
    image: '/images/fera-clinic/treatments/veneer-procedure.webp',
    featured: true,
    tags: ['hollywood smile', 'veneers', 'cosmetic dentistry', 'smile makeover', 'digital smile design']
  },
  {
    id: '3',
    title: 'Invisalign vs Traditional Braces: Which is Right for You?',
    slug: 'invisalign-vs-traditional-braces',
    excerpt: 'Comprehensive comparison of Invisalign and traditional braces to help you choose the best orthodontic treatment for your lifestyle and needs.',
    content: `
      <h2>Understanding Modern Orthodontics</h2>
      <p>Choosing between Invisalign and traditional braces is an important decision that affects both your treatment experience and final results. Both systems can deliver excellent outcomes, but they serve different needs and lifestyles.</p>
      
      <h2>Invisalign: The Clear Alternative</h2>
      <p>Invisalign uses a series of custom-made, clear aligners to gradually move your teeth into the desired position. Each aligner is worn for 1-2 weeks before progressing to the next in the series.</p>
      
      <h3>Benefits of Invisalign</h3>
      <ul>
        <li>Nearly invisible appearance</li>
        <li>Removable for eating, drinking, and cleaning</li>
        <li>No dietary restrictions</li>
        <li>Comfortable, smooth plastic material</li>
        <li>Easy oral hygiene maintenance</li>
        <li>Digital treatment planning with predictable results</li>
      </ul>
      
      <h3>Considerations for Invisalign</h3>
      <ul>
        <li>Requires high patient compliance (22+ hours daily wear)</li>
        <li>May not be suitable for complex orthodontic cases</li>
        <li>Typically costs more than traditional braces</li>
        <li>Lost aligners can delay treatment</li>
      </ul>
      
      <h2>Traditional Braces: Time-Tested Reliability</h2>
      <p>Traditional braces use metal or ceramic brackets bonded to teeth, connected by wires that apply gentle pressure to move teeth gradually. Modern options include less noticeable ceramic brackets and even tooth-colored wires.</p>
      
      <h3>Benefits of Traditional Braces</h3>
      <ul>
        <li>Effective for complex tooth movements and severe cases</li>
        <li>Fixed in place - no compliance issues</li>
        <li>Predictable results for all orthodontic issues</li>
        <li>Modern ceramic options for better aesthetics</li>
        <li>Often more cost-effective than Invisalign</li>
        <li>Shorter treatment time for some cases</li>
      </ul>
      
      <h3>Considerations for Traditional Braces</h3>
      <ul>
        <li>More noticeable appearance</li>
        <li>Dietary restrictions to avoid damage</li>
        <li>More challenging oral hygiene</li>
        <li>Potential discomfort from brackets and wires</li>
      </ul>
      
      <h2>Which Treatment is Best for You?</h2>
      <p>The right choice depends on several factors:</p>
      
      <h3>Choose Invisalign if you:</h3>
      <ul>
        <li>Have mild to moderate orthodontic needs</li>
        <li>Value discretion and flexibility</li>
        <li>Are committed to wearing aligners consistently</li>
        <li>Want the convenience of removable aligners</li>
      </ul>
      
      <h3>Choose Traditional Braces if you:</h3>
      <ul>
        <li>Have complex orthodontic requirements</li>
        <li>Prefer not to worry about compliance</li>
        <li>Are looking for a more budget-friendly option</li>
        <li>Need precise control over tooth movement</li>
      </ul>
      
      <h2>The FeRa Clinic Approach</h2>
      <p>At our Istanbul clinic, we offer both Invisalign and traditional braces. Our orthodontic specialists will evaluate your specific needs, lifestyle, and goals to recommend the most appropriate treatment option.</p>
      
      <blockquote>
        <p><strong>Important:</strong> Treatment duration and results vary based on individual factors. A comprehensive orthodontic evaluation is necessary to determine your optimal treatment plan.</p>
      </blockquote>
      
      <h2>International Patient Considerations</h2>
      <p>For patients traveling to Istanbul for orthodontic treatment, we offer coordinated care plans that minimize travel requirements while ensuring optimal results. Our team can help plan your treatment around your schedule.</p>
    `,
    author: 'Dr. Emma Wilson',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Orthodontics',
    image: '/images/fera-clinic/treatments/orthodontic-checkup.webp',
    featured: false,
    tags: ['orthodontics', 'invisalign', 'braces', 'smile alignment', 'dental clinic istanbul']
  },
  {
    id: '4',
    title: 'Dental Tourism in Istanbul: A Complete Guide',
    slug: 'dental-tourism-istanbul-guide',
    excerpt: 'Essential guide for international patients planning dental treatment in Istanbul: costs, logistics, clinics, and tips for a successful dental journey.',
    content: `
      <h2>Why Istanbul for Dental Care?</h2>
      <p>Istanbul has emerged as a premier destination for dental tourism, combining world-class clinical expertise with significant cost advantages and exceptional hospitality. The city's strategic location between Europe and Asia makes it easily accessible for international patients.</p>
      
      <h2>The Istanbul Advantage</h2>
      <p>What makes Istanbul special for dental care:</p>
      <ul>
        <li>Internationally trained dentists with European certifications</li>
        <li>State-of-the-art clinics with advanced technology</li>
        <li>60-70% cost savings compared to Western European countries</li>
        <li>Rich cultural experience alongside dental treatment</li>
        <li>English-speaking staff and international patient services</li>
      </ul>
      
      <h2>Planning Your Dental Journey</h2>
      <p>A successful dental tourism experience requires careful planning and coordination. At FeRa Clinic, we've developed a comprehensive protocol for international patients.</p>
      
      <h2>The FeRa International Patient Protocol</h2>
      <ol>
        <li><strong>Initial Virtual Consultation:</strong> Online assessment and preliminary treatment planning</li>
        <li><strong>Treatment Proposal:</strong> Detailed plan with timeline and cost breakdown</li>
        <li><strong>Travel Coordination:</strong> Assistance with flights, accommodation, and local transportation</li>
        <li><strong>VIP Airport Welcome:</strong> Personal pickup and transfer to your hotel</li>
        <li><strong>5-Star Accommodation:</strong> Partner hotels in premium Istanbul locations</li>
        <li><strong>Clinical Treatment:</strong> Scheduled procedures with your specialist team</li>
        <li><strong>Recovery & Tourism:</strong> Guided cultural experiences during healing periods</li>
        <li><strong>Follow-up Care:</strong> Virtual monitoring and local coordination as needed</li>
      </ol>
      
      <h2>Popular Dental Treatments for International Patients</h2>
      <h3>Dental Implants</h3>
      <p>Istanbul is particularly popular for dental implants due to the significant cost savings while maintaining the same quality of materials and expertise used in Western countries.</p>
      
      <h3>Smile Makeovers</h3>
      <p>Comprehensive cosmetic treatments combining veneers, whitening, and orthodontics for complete smile transformation.</p>
      
      <h3>Full Mouth Rehabilitation</h3>
      <p>Complex treatments involving multiple procedures to restore oral health and function.</p>
      
      <h2>Cost Comparison</h2>
      <p>Typical cost savings for common treatments (compared to UK/US prices):</p>
      <ul>
        <li>Dental Implants: 60-70% savings</li>
        <li>Porcelain Veneers: 50-60% savings</li>
        <li>Crowns and Bridges: 55-65% savings</li>
        <li>Orthodontic Treatment: 40-50% savings</li>
      </ul>
      
      <h2>Choosing the Right Clinic</h2>
      <p>When selecting a dental clinic in Istanbul, consider:</p>
      <ul>
        <li>International certifications and accreditations</li>
        <li>Experience with international patients</li>
        <li>Language capabilities of the staff</li>
        <li>Technology and materials used</li>
        <li>Patient testimonials and reviews</li>
        <li>Transparent pricing and no hidden costs</li>
      </ul>
      
      <h2>Best Time to Visit</h2>
      <p>Istanbul is beautiful year-round, but consider:</p>
      <ul>
        <li>Spring (April-May) and Autumn (September-October) offer pleasant weather</li>
        <li>Summer can be hot and crowded with tourists</li>
        <li>Winter is quieter but may have some cold, rainy days</li>
      </ul>
      
      <blockquote>
        <p><strong>Important Note:</strong> While dental tourism offers significant benefits, always prioritize quality and safety over cost alone. Ensure your chosen clinic meets international standards and uses certified materials.</p>
      </blockquote>
      
      <h2>Insurance and Financing</h2>
      <p>Many international clinics offer financing options and work with international insurance providers. Be sure to understand your coverage and payment options before traveling.</p>
      
      <h2>Post-Treatment Care</h2>
      <p>Reputable clinics provide comprehensive follow-up care, including virtual consultations and coordination with local dentists in your home country for ongoing maintenance.</p>
    `,
    author: 'Dr. Ahmed Hassan',
    date: '2023-12-28',
    readTime: '10 min read',
    category: 'Dental Tourism',
    image: '/images/fera-clinic/clinic/reception.webp',
    featured: false,
    tags: ['dental tourism', 'istanbul', 'medical travel', 'fera clinic', 'international dental care']
  },
  {
    id: '5',
    title: 'The Truth About Teeth Whitening: Myths vs Facts',
    slug: 'teeth-whitening-myths-vs-facts',
    excerpt: 'Separate facts from fiction about professional teeth whitening: safety, effectiveness, and what really works for a brighter smile.',
    content: `
      <h2>Understanding Professional Teeth Whitening</h2>
      <p>Teeth whitening is one of the most popular cosmetic dental procedures, yet it's surrounded by misconceptions. Let's separate the myths from the facts about achieving a brighter, whiter smile safely and effectively.</p>
      
      <h2>Common Myths About Teeth Whitening</h2>
      
      <h3>Myth #1: Whitening Damages Tooth Enamel</h3>
      <p><strong>Fact:</strong> Professional whitening procedures using carbamide peroxide or hydrogen peroxide at approved concentrations are safe for tooth enamel when performed by qualified dental professionals. The active ingredients penetrate the enamel to break down stains without damaging the tooth structure.</p>
      
      <h3>Myth #2: All Whitening Products Are the Same</h3>
      <p><strong>Fact:</strong> There's a significant difference between over-the-counter products and professional treatments. Clinical whitening systems use higher concentrations of active ingredients and are applied under controlled conditions for better results and safety.</p>
      
      <h3>Myth #3: Results Are Permanent</h3>
      <p><strong>Fact:</strong> Teeth whitening results are long-lasting but not permanent. The duration depends on your habits, diet, and oral hygiene. Professional treatments typically last 1-3 years with proper maintenance.</p>
      
      <h3>Myth #4: Whitening Works on All Teeth</h3>
      <p><strong>Fact:</strong> Whitening is most effective on natural teeth. It doesn't work on dental restorations like crowns, veneers, or fillings. Additionally, certain types of discoloration (like tetracycline stains) may require alternative treatments.</p>
      
      <h2>Professional Whitening Options</h2>
      
      <h3>In-Office Whitening</h3>
      <p>Clinical whitening procedures typically involve:</p>
      <ul>
        <li>Professional cleaning and examination</li>
        <li>Protective barrier for gums and soft tissues</li>
        <li>Application of professional-strength whitening gel</li>
        <li>LED or laser light activation for enhanced results</li>
        <li>Multiple 15-20 minute sessions in one visit</li>
        <li>Immediate results of 3-8 shades lighter</li>
      </ul>
      
      <h3>Custom Take-Home Kits</h3>
      <p>Professional take-home whitening includes:</p>
      <ul>
        <li>Custom-fitted trays for precise application</li>
        <li>Professional-grade whitening gel</li>
        <li>Supervised treatment over 2-4 weeks</li>
        <li>Gradual, controlled whitening process</li>
        <li>Excellent maintenance option</li>
      </ul>
      
      <h2>Who Is a Good Candidate for Whitening?</h2>
      <p>Ideal candidates should have:</p>
      <ul>
        <li>Good overall oral health</li>
        <li>No active gum disease or cavities</li>
        <li>Natural teeth that need brightening</li>
        <li>Realistic expectations about results</li>
        <li>Commitment to proper oral hygiene</li>
      </ul>
      
      <h2>Potential Side Effects</h2>
      <p>While generally safe, some patients may experience:</p>
      <ul>
        <li>Temporary tooth sensitivity (usually resolves within days)</li>
        <li>Mild gum irritation (prevented with proper barriers)</li>
        <li>Uneven results (addressed with proper technique)</li>
      </ul>
      
      <blockquote>
        <p><strong>Medical Note:</strong> Individual results vary based on natural tooth color, staining causes, and personal habits. A dental examination is necessary to determine if you're a suitable candidate for whitening.</p>
      </blockquote>
      
      <h2>Maintaining Your Whitened Smile</h2>
      <ul>
        <li>Practice excellent oral hygiene with proper brushing and flossing</li>
        <li>Avoid staining foods and beverages (coffee, tea, red wine)</li>
        <li>Use a straw for dark beverages when possible</li>
        <li>Quit smoking or tobacco use</li>
        <li>Schedule regular dental cleanings</li>
        <li>Consider touch-up treatments as recommended</li>
      </ul>
      
      <h2>Why Choose Professional Whitening?</h2>
      <p>Professional whitening offers:</p>
      <ul>
        <li>Supervised treatment for safety and effectiveness</li>
        <li>Customized approach for your specific needs</li>
        <li>Stronger, more effective formulations</li>
        <li>Immediate, dramatic results</li>
        <li>Professional guidance and support</li>
      </ul>
    `,
    author: 'Dr. Lisa Park',
    date: '2023-12-20',
    readTime: '5 min read',
    category: 'Cosmetic Dentistry',
    image: '/images/fera-clinic/treatments/general-dentistry.webp',
    featured: false,
    tags: ['teeth whitening', 'cosmetic dentistry', 'smile bright', 'dental health', 'professional whitening']
  },
  {
    id: '6',
    title: 'All-on-4 Implants: The Solution for Full Arch Restoration',
    slug: 'all-on-4-implants-solution',
    excerpt: 'Revolutionary All-on-4 implant technique for full smile restoration: fewer implants, immediate function, and cost-effective full arch replacement.',
    content: `
      <h2>Understanding All-on-4 Implants</h2>
      <p>All-on-4 is an innovative dental implant technique that allows for the restoration of a complete arch of teeth using only four strategically placed implants. This revolutionary approach has transformed full mouth reconstruction, offering immediate function and significant cost advantages.</p>
      
      <h2>How All-on-4 Works</h2>
      <p>The All-on-4 technique involves placing four dental implants in specific positions:</p>
      <ul>
        <li><strong>Two anterior implants:</strong> Placed vertically in the front of the jaw</li>
        <li><strong>Two posterior implants:</strong> Placed at angles (up to 45°) in the back of the jaw</li>
      </ul>
      
      <p>This angled placement maximizes available bone support and allows for immediate loading of a full arch prosthesis.</p>
      
      <h2>Benefits of All-on-4 Treatment</h2>
      
      <h3>Immediate Function</h3>
      <p>Unlike traditional implant treatments that require months of healing, All-on-4 often allows for immediate placement of a temporary prosthesis. You can leave the clinic with functional teeth the same day.</p>
      
      <h3>Cost-Effectiveness</h3>
      <p>By using only four implants instead of 6-8 for a full arch, All-on-4 significantly reduces the overall cost while maintaining excellent stability and function.</p>
      
      <h3>Avoids Bone Grafting</h3>
      <p>The angled placement strategy often eliminates the need for bone grafting procedures, even in cases of moderate bone loss, making treatment accessible to more patients.</p>
      
      <h3>High Success Rates</h3>
      <p>All-on-4 procedures have documented success rates exceeding 95% over 10 years, making them a reliable long-term solution.</p>
      
      <h2>The All-on-4 Treatment Process</h2>
      
      <h3>Phase 1: Planning and Preparation</h3>
      <ul>
        <li>Comprehensive oral examination and imaging</li>
        <li>3D CBCT scans for precise implant planning</li>
        <li>Digital smile design and prosthesis planning</li>
        <li>Medical history review and clearance</li>
      </ul>
      
      <h3>Phase 2: Surgical Procedure</h3>
      <ul>
        <li>Extraction of remaining teeth (if needed)</li>
        <li>Placement of four strategically positioned implants</li>
        <li>Immediate attachment of temporary prosthesis</li>
        <li>Same-day discharge with functional teeth</li>
      </ul>
      
      <h3>Phase 3: Healing and Integration</h3>
      <ul>
        <li>3-6 months for osseointegration</li>
        <li>Regular follow-up appointments</li>
        <li>Temporary prosthesis adjustments as needed</li>
        <li>Oral hygiene instruction and maintenance</li>
      </ul>
      
      <h3>Phase 4: Final Prosthesis</h3>
      <ul>
        <li>Fabrication of permanent zirconia or hybrid prosthesis</li>
        <li>Final placement and bite adjustment</li>
        <li>Long-term maintenance planning</li>
      </ul>
      
      <h2>Who Is a Candidate for All-on-4?</h2>
      <p>Ideal candidates include:</p>
      <ul>
        <li>Patients with multiple failing or missing teeth</li>
        <li>Those wearing uncomfortable dentures</li>
        <li>People with significant tooth decay or gum disease</li>
        <li>Patients seeking a permanent, fixed solution</li>
        <li>Those with adequate general health for surgery</li>
      </ul>
      
      <h2>All-on-4 vs. Traditional Dentures</h2>
      <p>Key advantages of All-on-4 over traditional dentures:</p>
      <ul>
        <li>Fixed solution - no removal required</li>
        <li>Superior chewing efficiency and bite force</li>
        <li>Preservation of jawbone and facial structure</li>
        <li>Enhanced speech and confidence</li>
        <li>No palate coverage - better taste sensation</li>
        <li>Long-term durability and stability</li>
      </ul>
      
      <blockquote>
        <p><strong>Important:</strong> All-on-4 is a complex surgical procedure requiring extensive planning. Individual results vary, and not everyone is a candidate. A thorough evaluation is essential to determine suitability.</p>
      </blockquote>
      
      <h2>Long-Term Care and Maintenance</h2>
      <p>Proper maintenance is crucial for longevity:</p>
      <ul>
        <li>Daily cleaning with special brushes and floss threaders</li>
        <li>Regular professional cleanings every 3-6 months</li>
        <li>Avoiding hard or sticky foods initially</li>
        <li>Annual check-ups and prosthesis evaluation</li>
        <li>Immediate attention to any issues or discomfort</li>
      </ul>
      
      <h2>Why Consider All-on-4 in Istanbul?</h2>
      <p>Istanbul offers world-class implantology at significantly reduced costs. Our clinic uses the same premium implant systems and techniques as leading European clinics, making All-on-4 treatment accessible to more patients.</p>
    `,
    author: 'Dr. Robert Johnson',
    date: '2023-12-15',
    readTime: '9 min read',
    category: 'Dental Implants',
    image: '/images/fera-clinic/clinic/surgery-room.webp',
    featured: false,
    tags: ['all-on-4', 'dental implants', 'full arch restoration', 'smile surgery', 'immediate loading']
  }
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}
