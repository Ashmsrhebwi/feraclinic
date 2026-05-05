import { treatments } from './treatments'
import { blogPosts } from './blog'

export type SearchItemType = 'Treatment' | 'Blog' | 'Page' | 'Gallery'

export interface SearchItem {
  id: string
  title: string
  subtitle?: string
  description: string
  type: SearchItemType
  url: string
  keywords: string[]
}

export const getSearchIndex = (t: any): SearchItem[] => {
  const index: SearchItem[] = []

  // 1. Map Static Pages
  const staticPages: SearchItem[] = [
    {
      id: 'page-home',
      title: t('navigation.home', 'Home'),
      description: t('hero.subtitle', 'Premium Dental Care in Istanbul. Experience world-class dentistry.'),
      type: 'Page',
      url: '/',
      keywords: ['home', 'fera clinic', 'istanbul', 'dentist', 'clinic', 'main']
    },
    {
      id: 'page-about',
      title: t('navigation.about', 'About Us'),
      description: t('about.heroDesc', 'Learn about FeRa Clinic, our expert specialists, and our commitment to premium dental care in Istanbul.'),
      type: 'Page',
      url: '/about',
      keywords: ['about', 'team', 'doctors', 'specialists', 'clinic', 'istanbul', 'history', 'mission']
    },
    {
      id: 'page-tourism',
      title: t('navigation.dentalTourism', 'Dental Tourism'),
      description: t('tourism.heroDesc', 'Your premium dental journey to Istanbul. We provide VIP transfers, 5-star accommodation, and complete itinerary management.'),
      type: 'Page',
      url: '/dental-tourism',
      keywords: ['tourism', 'travel', 'istanbul', 'airport', 'hotel', 'packages', 'vip', 'international']
    },
    {
      id: 'page-consultation',
      title: t('navigation.consultation', 'Consultation'),
      description: t('consultation.heroDesc', 'Book your free virtual or in-person consultation with our dental specialists.'),
      type: 'Page',
      url: '/consultation',
      keywords: ['consultation', 'book', 'appointment', 'contact', 'evaluation', 'x-ray']
    },
    {
      id: 'page-gallery',
      title: t('navigation.gallery', 'Smile Gallery'),
      description: t('gallery.heroDesc', 'Explore our before & after patient transformations and clinic facilities.'),
      type: 'Page',
      url: '/gallery',
      keywords: ['gallery', 'before after', 'photos', 'results', 'transformations', 'cases', 'clinic']
    },
    {
      id: 'page-contact',
      title: t('navigation.contact', 'Contact Us'),
      description: t('contact.heroDesc', 'Get in touch with FeRa Clinic. Find our location in Istanbul, phone numbers, and email.'),
      type: 'Page',
      url: '/contact',
      keywords: ['contact', 'location', 'phone', 'email', 'map', 'address', 'whatsapp']
    }
  ]
  index.push(...staticPages)

  // 2. Map Treatments
  treatments.forEach(treatment => {
    index.push({
      id: `treatment-${treatment.slug}`,
      title: t(`treatments.data.${treatment.id}.title`, treatment.title),
      subtitle: t(`treatments.data.${treatment.id}.category`, treatment.category),
      description: t(`treatments.data.${treatment.id}.desc`, treatment.description),
      type: 'Treatment',
      url: `/treatments/${treatment.slug}`,
      keywords: [
        treatment.title.toLowerCase(), 
        treatment.category.toLowerCase(), 
        ...treatment.features.map(f => f.toLowerCase()), 
        'treatment', 
        'dental'
      ]
    })
  })

  // 3. Map Blog Posts
  blogPosts.forEach(post => {
    index.push({
      id: `blog-${post.slug}`,
      title: post.title,
      subtitle: post.author,
      description: post.excerpt,
      type: 'Blog',
      url: `/blog/${post.slug}`,
      keywords: [
        post.title.toLowerCase(), 
        post.category.toLowerCase(), 
        ...post.tags.map(t => t.toLowerCase()), 
        'blog', 
        'article', 
        'guide'
      ]
    })
  })

  return index
}
