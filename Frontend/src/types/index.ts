// Treatment Types
export interface TreatmentRow {
  eyebrow: string
  heading: string
  description: string
  image: string
}

export interface Treatment {
  id: string
  slug: string
  title: string
  category: string
  description: string
  duration: string
  price: string
  image: string
  features: string[]
  benefits: string[]
  editorial?: TreatmentRow[]
  additionalImages?: string[]
}

// Navigation Types
export interface NavLink {
  to: string
  label: string
  isActive?: boolean
}

// Contact Form Types
export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
  treatment?: string
}

// Consultation Form Types
export interface ConsultationForm {
  name: string
  email: string
  phone: string
  country: string
  treatment: string
  message: string
}

// Testimonial Types
export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  image: string
  date: string
}

// Blog Post Types
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: number
  image: string
  category: string
}

// FAQ Types
export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

// Gallery Types
export interface GalleryItem {
  id: string
  title: string
  category: string
  image: string
  description: string
  treatment?: string
}

// Component Props Types
export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  disabled?: boolean
  className?: string
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export interface NavbarProps {
  transparent?: boolean
}

export interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
}

// Language Types
export interface Language {
  code: string
  name: string
  flag: string
}

// SEO Types
export interface SEOProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
}
