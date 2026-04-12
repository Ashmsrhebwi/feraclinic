import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, User, ArrowRight, Search, Filter } from 'lucide-react'
import { Link } from 'react-router-dom'

interface BlogPost {
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
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Complete Guide to Dental Implants: Everything You Need to Know',
    slug: 'complete-guide-to-dental-implants',
    excerpt: 'Discover everything about dental implants, from treatment planning to recovery and long-term care.',
    content: 'Dental implants are the gold standard for replacing missing teeth...',
    author: 'Dr. Sarah Mitchell',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Dental Implants',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    featured: true
  },
  {
    id: '2',
    title: 'Hollywood Smile Secrets: How Celebrities Get Perfect Teeth',
    slug: 'hollywood-smile-secrets',
    excerpt: 'Learn how veneers, whitening, and smile planning can transform the look of your smile.',
    content: 'A Hollywood smile is more than just straight teeth...',
    author: 'Dr. Michael Chen',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Cosmetic Dentistry',
    image: 'https://images.unsplash.com/photo-1600950337675-35dd9c973c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    featured: true
  },
  {
    id: '3',
    title: 'Invisalign vs Traditional Braces: Which is Right for You?',
    slug: 'invisalign-vs-traditional-braces',
    excerpt: 'Compare treatment options and understand which orthodontic solution best fits your needs.',
    content: 'Choosing between Invisalign and traditional braces...',
    author: 'Dr. Emma Wilson',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Orthodontics',
    image: 'https://images.unsplash.com/photo-1600950337675-35dd9c973c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    featured: false
  },
  {
    id: '4',
    title: 'Dental Tourism in Istanbul: A Complete Guide',
    slug: 'dental-tourism-istanbul-guide',
    excerpt: 'A practical guide for international patients planning dental treatment in Istanbul.',
    content: 'Istanbul has become one of the world’s top destinations...',
    author: 'Dr. Ahmed Hassan',
    date: '2023-12-28',
    readTime: '10 min read',
    category: 'Dental Tourism',
    image: 'https://images.unsplash.com/photo-1524449950035-7c4a5c8c8e5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    featured: false
  },
  {
    id: '5',
    title: 'The Truth About Teeth Whitening: Myths vs Facts',
    slug: 'teeth-whitening-myths-vs-facts',
    excerpt: 'Understand the facts behind teeth whitening and what really helps create a brighter smile.',
    content: 'Teeth whitening is one of the most popular cosmetic...',
    author: 'Dr. Lisa Park',
    date: '2023-12-20',
    readTime: '5 min read',
    category: 'Cosmetic Dentistry',
    image: 'https://images.unsplash.com/photo-1600950337675-35dd9c973c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    featured: false
  },
  {
    id: '6',
    title: 'All-on-4 Implants: The Solution for Full Arch Restoration',
    slug: 'all-on-4-implants-solution',
    excerpt: 'Explore how All-on-4 implants can restore a full smile with fewer implant placements.',
    content: 'All-on-4 is a revolutionary technique for full arch...',
    author: 'Dr. Robert Johnson',
    date: '2023-12-15',
    readTime: '9 min read',
    category: 'Dental Implants',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    featured: false
  }
]

const categories = ['All', 'Dental Implants', 'Cosmetic Dentistry', 'Orthodontics', 'Dental Tourism']

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-fera-ivory">
      <section className="bg-fera-navy px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-fera-gold">
              FeRa Journal
            </p>
            <h1
              className="mb-6 text-5xl font-semibold text-white lg:text-6xl"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Dental Insights & Patient Guides
            </h1>
            <p className="text-lg leading-8 text-white/80">
              Expert articles designed to help you better understand treatments,
              smile design options, and dental care decisions.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="sticky top-20 z-40 border-b border-black/5 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border border-black/10 bg-white py-3 pl-11 pr-4 text-sm text-fera-navy outline-none transition-all focus:border-fera-gold/50"
              />
            </div>

            <div className="flex w-full items-center gap-3 overflow-x-auto lg:w-auto">
              <Filter className="h-5 w-5 flex-shrink-0 text-slate-400" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-fera-gold text-fera-navy'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        {selectedCategory === 'All' && !searchTerm && featuredPosts.length > 0 && (
          <section className="mb-16">
            <div className="mb-8">
              <h2
                className="text-3xl font-semibold text-fera-navy"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Featured Articles
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(15,23,42,0.08)]"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                    </div>

                    <div className="p-7">
                      <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                        <span className="rounded-full bg-fera-gold/10 px-3 py-1 text-xs font-medium text-fera-gold">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                      </div>

                      <h3 className="mb-3 text-2xl font-semibold text-fera-navy transition-colors hover:text-fera-gold">
                        {post.title}
                      </h3>
                      <p className="mb-5 leading-7 text-slate-600">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1.5">
                            <User className="h-4 w-4" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="h-5 w-5 text-fera-gold" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        <section>
          <div className="mb-8">
            <h2
              className="text-3xl font-semibold text-fera-navy"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {selectedCategory === 'All' && !searchTerm ? 'Latest Articles' : 'Search Results'}
            </h2>
          </div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(15,23,42,0.08)]"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="aspect-video overflow-hidden">
                      <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                    </div>

                    <div className="p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                        <span className="rounded-full bg-fera-gold/10 px-3 py-1 text-xs font-medium text-fera-gold">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                      </div>

                      <h3 className="mb-3 text-xl font-semibold text-fera-navy transition-colors hover:text-fera-gold">
                        {post.title}
                      </h3>
                      <p className="mb-5 line-clamp-2 leading-7 text-slate-600">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-sm text-slate-500">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                        <ArrowRight className="h-5 w-5 text-fera-gold" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-black/5 bg-white px-6 py-14 text-center shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <p className="mb-4 text-lg text-slate-600">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchTerm('')
                }}
                className="font-medium text-fera-gold transition-colors hover:text-fera-navy"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}