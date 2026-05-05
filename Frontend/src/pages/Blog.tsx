import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Clock,
  User,
  ArrowRight,
  Search,
  Filter,
  ShieldCheck,
  Award,
  Users,
  Calendar,
  BookOpen,
  TrendingUp,
  FileText
} from 'lucide-react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { Button } from '../components/ui/button'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { SectionWrapper } from '../components/ui/SectionWrapper'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { SecondaryButton } from '../components/ui/SecondaryButton'

import { blogPosts, BlogPost } from '../data/blog'

export function Blog() {
  const { t } = useTranslation()
  useSEO({ title: t('navigation.blog'), description: t('blog.subtitle', 'Dental Insights & Patient Guides') })

  const categories = [
    { key: 'all', label: t('blog.filters.all', 'All') },
    { key: 'restorative', label: t('common.restorative', 'Restorative') },
    { key: 'cosmetic', label: t('common.cosmetic', 'Cosmetic') },
    { key: 'orthodontics', label: t('treatments.categories.orthodontics', 'Orthodontics') },
    { key: 'dentalTourism', label: t('common.dentalTourism', 'Dental Tourism') }
  ]

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Helper to get translated content for the post
  const getTranslated = (post: BlogPost, field: keyof BlogPost, fallback: string) => {
    const i18nKey = `blog.posts.p${post.id}.${field as string}`
    const translated = t(i18nKey)
    return translated === i18nKey ? fallback : translated
  }

  const filteredPosts = blogPosts.filter((post) => {
    const postTitle = getTranslated(post, 'title', post.title)
    const postExcerpt = getTranslated(post, 'excerpt', post.excerpt)
    const postCategory = getTranslated(post, 'category', post.category)

    const matchesCategory = selectedCategory === 'all' || postCategory === selectedCategory
    const matchesSearch =
      postTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      postExcerpt.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  console.log("PAGE LOADED: Blog")

  return (
    <div className="min-h-screen bg-white">
      {/* 
══════════════════════════════════════
  BLOG HERO - PREMIUM EDITORIAL
══════════════════════════════════════ */}
      <section className="relative min-h-[780px] md:min-h-[820px] lg:min-h-[92vh] flex items-start overflow-hidden pb-20">
        {/* Enhanced Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fera-clinic/clinic/waiting-area.webp"
            alt={t('alt.clinicJournal', 'FeRa Clinic Journal')}
            className="w-full h-full object-cover object-center"
            style={{ animation: 'heroZoom 15s ease-in-out infinite alternate' }}
            loading="eager"
            fetchPriority="high"
          />
          {/* Standardized Dark Overlay for Global Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 backdrop-blur-[1px]" />
        </div>

        {/* Premium Floating Glow Effect */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-100/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#0B1C2D]/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />

        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 lg:px-10 2xl:px-16 pt-24 sm:pt-28 md:pt-32 lg:pt-24 flex justify-start">
          <motion.div 
            className="w-full max-w-[94vw] sm:max-w-[680px] lg:max-w-[860px] 2xl:max-w-[980px] bg-white/10 backdrop-blur-2xl rounded-[3rem] p-8 sm:p-10 lg:p-12 shadow-2xl border border-white/20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Premium Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-white/40" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest drop-shadow-md">{t('blog.heroEyebrow', 'Clinical Insights')}</span>
            </motion.div>

            {/* Premium Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] tracking-tight leading-[1.1] mb-8"
            >
              {t('blog.heroTitle', 'FeRa Clinic Journal')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="text-lg text-white/85 font-light leading-relaxed max-w-2xl drop-shadow-sm"
            >
              {t('blog.heroDesc', 'Your comprehensive guide to premium dental care in Istanbul, clinical innovations, and patient transformation stories.')}
            </motion.p>

            {/* Premium CTA Buttons */}
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-8 text-white"
            >
              {[
                { icon: ShieldCheck, text: t('common.trustBadges.iso', 'ISO Certified') },
                { icon: Award, text: t('common.trustBadges.specialists', '15+ Specialist Dentists') },
                { icon: Users, text: t('common.trustBadges.patients', 'Thousands of Happy Patients') }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1, ease: "easeOut" }}
                  className="flex items-center gap-3"
                >
                  <item.icon className="w-4 h-4 text-[#0B1C2D]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0B1C2D]">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 
══════════════════════════════════════
  SEARCH & FILTER SECTION
══════════════════════════════════════ */}
      <SectionWrapper padding="py-8 lg:py-12" background="gray">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[2rem] border border-[rgba(11,28,45,0.08)] shadow-[0_15px_45px_rgba(11,28,45,0.06)] p-6 lg:p-8">
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* Premium Search */}
              <div className="relative w-full max-w-md group">
                <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#0B1C2D]/40 group-focus-within:text-[#0B1C2D] transition-colors" />
                <input
                  type="text"
                  placeholder={t('blog.searchPlaceholder', 'Search articles, topics, treatments…')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-full border border-gray-100 bg-[#F8FAFC] py-4 pl-14 pr-6 text-sm text-[#0B1C2D] outline-none transition-all focus:border-[#0B1C2D]/30 focus:ring-4 focus:ring-[#0B1C2D]/5 shadow-sm"
                />
              </div>

              {/* Premium Category Pills */}
              <div className="flex w-full items-center gap-4 overflow-x-auto lg:w-auto pb-2 lg:pb-0 scrollbar-hide">
                <Filter className="h-5 w-5 flex-shrink-0 text-[#0B1C2D]/40" />
                <div className="flex gap-3">
                  {categories.map((category) => (
                    <motion.button
                      key={category.key}
                      onClick={() => setSelectedCategory(category.key)}
                      className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all whitespace-nowrap border ${
                        selectedCategory === category.key
                          ? 'bg-[#0B1C2D] text-white border-[#0B1C2D] shadow-lg'
                          : 'bg-white text-[#0B1C2D]/70 border-gray-100 hover:border-[#0B1C2D]/30 hover:text-[#0B1C2D]'
                      }`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {category.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 
══════════════════════════════════════
  FEATURED ARTICLE SECTION
══════════════════════════════════════ */}
      {selectedCategory === 'all' && !searchTerm && featuredPosts.length > 0 && (
        <SectionWrapper padding="py-20 lg:py-24" background="white">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1] mb-8">
                {t('blog.featuredArticles', 'Featured Article')}
              </h2>
              <p className="text-xl text-[#64748B] font-light leading-relaxed max-w-3xl mx-auto">
                {t('blog.featuredDesc', 'Expert insights and breakthrough treatments from our clinical team.')}
              </p>
            </motion.div>

            {/* Featured Article - Large Card */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {featuredPosts.slice(0, 1).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2.5rem] border border-[rgba(11,28,45,0.08)] shadow-[0_20px_60px_rgba(11,28,45,0.08)] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 group"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="lg:grid lg:grid-cols-2 h-full">
                      {/* Image Side */}
                      <div className="aspect-[16/10] lg:aspect-auto relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={getTranslated(post, 'title', post.title)}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/40 via-transparent to-transparent opacity-60" />
                      </div>

                      {/* Content Side */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        {/* Category Badge */}
                        <div className="mb-6">
                          <span className="inline-flex px-4 py-2 bg-[#0B1C2D]/5 text-[#0B1C2D] text-[10px] font-bold uppercase tracking-widest rounded-full border border-[#0B1C2D]/5">
                            {getTranslated(post, 'category', post.category)}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[#0B1C2D] mb-6 leading-tight group-hover:text-[#162e45] transition-colors duration-300">
                          {getTranslated(post, 'title', post.title)}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-[#64748B] leading-relaxed mb-8 line-clamp-3 font-light">
                          {getTranslated(post, 'excerpt', post.excerpt)}
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-[#0B1C2D]/40 mb-10 pt-8 border-t border-gray-100">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-[#0B1C2D]/60" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[#0B1C2D]/60" />
                            <span>{getTranslated(post, 'date', post.date)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#0B1C2D]/60" />
                            <span>{getTranslated(post, 'readTime', post.readTime)}</span>
                          </div>
                        </div>

                        {/* Read More Button */}
                        <motion.div
                          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0B1C2D] text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-widest"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>{t('common.readArticle')}</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* 
══════════════════════════════════════
  BLOG GRID SECTION
══════════════════════════════════════ */}
      <SectionWrapper padding="py-20 lg:py-24" background="gray">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1] mb-8">
              {selectedCategory === 'all' && !searchTerm 
                ? t('blog.latestArticles', 'Latest Articles')
                : t('blog.searchResults', 'Search Results')
              }
            </h2>
            <p className="text-xl text-[#64748B] font-light leading-relaxed max-w-3xl mx-auto">
              {selectedCategory === 'all' && !searchTerm 
                ? t('blog.latestDesc', 'Stay updated with the latest insights from our clinical team.')
                : t('blog.searchDesc', 'Articles matching your search criteria.')
              }
            </p>
          </motion.div>

          {/* Blog Grid */}
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`} className="block h-full group">
                    <div className="bg-white rounded-[2rem] border border-[rgba(11,28,45,0.08)] shadow-[0_15px_45px_rgba(11,28,45,0.06)] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(11,28,45,0.12)] transition-all duration-700 h-full flex flex-col">
                      {/* Image */}
                      <div className="aspect-video overflow-hidden rounded-t-[2rem] relative">
                        <img
                          src={post.image}
                          alt={getTranslated(post, 'title', post.title)}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Content */}
                      <div className="p-8 flex-1 flex flex-col">
                        {/* Category Badge */}
                        <div className="mb-4">
                          <span className="inline-flex px-3 py-1 bg-[#0B1C2D]/5 text-[#0B1C2D] text-[10px] font-bold uppercase tracking-widest rounded-full border border-[#0B1C2D]/5">
                            {getTranslated(post, 'category', post.category)}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-serif font-bold text-[#0B1C2D] mb-4 leading-tight group-hover:text-[#162e45] transition-colors duration-300 line-clamp-2">
                          {getTranslated(post, 'title', post.title)}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-[#64748B] leading-relaxed mb-8 flex-1 line-clamp-3 font-light">
                          {getTranslated(post, 'excerpt', post.excerpt)}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-[#0B1C2D]/40">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-3.5 h-3.5 text-[#0B1C2D]/60" />
                              <span>{getTranslated(post, 'date', post.date)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5 text-[#0B1C2D]/60" />
                              <span>{getTranslated(post, 'readTime', post.readTime)}</span>
                            </div>
                          </div>
                          <motion.div
                            className="w-10 h-10 rounded-full bg-[#0B1C2D]/5 flex items-center justify-center text-[#0B1C2D] transition-all group-hover:bg-[#0B1C2D] group-hover:text-white"
                            whileHover={{ scale: 1.1 }}
                          >
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center py-20"
            >
              <div className="bg-white rounded-[2rem] border border-[rgba(11,28,45,0.08)] shadow-[0_15px_45px_rgba(11,28,45,0.06)] p-16 max-w-2xl mx-auto">
                <FileText className="w-16 h-16 text-[#0B1C2D]/10 mx-auto mb-8" />
                <h3 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-4">
                  {t('blog.noArticlesFound', 'No Articles Found')}
                </h3>
                <p className="text-[#64748B] mb-10 font-light">
                  {t('blog.noArticlesDesc', 'Try adjusting your search terms or browse all articles.')}
                </p>
                <motion.button
                  onClick={() => {
                    setSelectedCategory('all')
                    setSearchTerm('')
                  }}
                  className="inline-flex items-center gap-3 px-10 py-4 bg-[#0B1C2D] text-white text-sm font-bold rounded-full hover:bg-[#0B1C2D]/90 transition-all duration-300 shadow-lg uppercase tracking-widest"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{t('blog.clearFilters', 'Clear Filters')}</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </SectionWrapper>

      {/* 
══════════════════════════════════════
  CTA INSIDE BLOG
══════════════════════════════════════ */}
      <SectionWrapper padding="py-24 lg:py-32" background="white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#071520] via-[#0B1C2D] to-[#12304A] rounded-[2.5rem] px-10 lg:px-20 py-20 lg:py-28 text-center relative overflow-hidden shadow-2xl">
            {/* Abstract background detail */}
            <div className="absolute top-0 end-0 w-64 h-64 bg-[#0B1C2D] opacity-10 blur-[120px]" />
            <div className="absolute bottom-0 start-0 w-48 h-48 bg-white/5 blur-[80px]" />

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-[64px] font-serif font-bold text-white tracking-tight leading-[1.05] mb-10">
                {t('blog.ctaTitle1', 'Ready to Transform')} <br className="lg:hidden" />{t('blog.ctaTitle2', 'Your Smile?')}
              </h2>
              <p className="text-white/60 text-xl font-light leading-relaxed max-w-2xl mx-auto mb-16">
                {t('blog.ctaDesc', 'Get personalized advice from our expert team and start your journey to a perfect smile.')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/consultation" className="w-full sm:w-auto">
                  <motion.button
                    className="w-full sm:w-auto px-12 h-16 sm:h-20 bg-white text-[#0B1C2D] rounded-full font-bold text-base sm:text-lg uppercase tracking-wider shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{t('common.designYourSmile', 'Design Your Smile')}</span>
                  </motion.button>
                </Link>
                <a 
                  href={`https://wa.me/${t('common.whatsappNumber', '905367460100')}?text=${encodeURIComponent(t('common.whatsappMessage', 'Hello, I have a question about treatments.'))}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto"
                >
                  <motion.button
                    className="w-full sm:w-auto px-10 h-16 sm:h-20 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#7CC4FF] flex items-center justify-center text-[#0B1C2D]">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <span>{t('common.whatsappConsultationLong', 'Smile Design Consultation via WhatsApp')}</span>
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
