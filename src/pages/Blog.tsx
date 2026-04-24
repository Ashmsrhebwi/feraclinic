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
  Users
} from 'lucide-react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { Button } from '../components/ui/button'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'

import { blogPosts, BlogPost } from '../data/blog'

export function Blog() {
  const { t } = useTranslation()
  useSEO({ title: t('navigation.blog'), description: t('blog.subtitle', 'Dental Insights & Patient Guides') })

  const categories = [
    { key: 'all', label: t('blog.filters.all', 'All') },
    { key: t('treatments.categories.restorative', 'Restorative'), label: t('treatments.categories.restorative', 'Restorative') },
    { key: t('treatments.categories.cosmetic', 'Cosmetic'), label: t('treatments.categories.cosmetic', 'Cosmetic') },
    { key: t('treatments.categories.orthodontics', 'Orthodontics'), label: t('treatments.categories.orthodontics', 'Orthodontics') },
    { key: t('navigation.dentalTourism', 'Dental Tourism'), label: t('navigation.dentalTourism', 'Dental Tourism') }
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
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* 1. HERO - UNIFIED SYSTEM */}
      <section className="relative min-h-[780px] md:min-h-[820px] lg:min-h-[92vh] flex items-start overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fera-clinic/clinic/waiting-area.webp"
            alt={t('alt.clinicJournal', 'FeRa Clinic Journal')}
            className="w-full h-full object-cover object-[center_35%] scale-[1.03]"
            style={{ animation: 'heroZoom 45s linear infinite alternate' }}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-white/90 via-white/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 lg:px-10 2xl:px-16 pt-24 sm:pt-28 md:pt-32 lg:pt-24 flex justify-start">
          <div className="w-full max-w-[94vw] sm:max-w-[680px] lg:max-w-[860px] 2xl:max-w-[1080px] bg-white/55 backdrop-blur-md rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            {/* Trust Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 mb-5 sm:mb-6"
            >
              <div className="w-8 sm:w-10 h-[1px] bg-fera-accent" />
              <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-fera-accent uppercase tracking-[0.25em]">{t('blog.heroEyebrow', 'Dental Insights')}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.2rem,8vw,3.6rem)] lg:text-[clamp(3.6rem,5vw,4.6rem)] font-semibold text-fera-deep tracking-tight leading-[0.98] mb-6"
            >
              {t('blog.heroTitle', 'FeRa Clinical Journal')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[15px] sm:text-base lg:text-lg text-fera-deep/90 max-w-[58ch] font-normal leading-[1.75] mb-8"
            >
              {t('blog.heroDesc', 'Stay informed with the latest advancements in biological dentistry, patient success stories, and clinical guides.')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 lg:gap-6 mb-8"
            >
              <Link to="/consultation" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  variant="primary"
                  className="w-full sm:min-w-[260px] h-12 sm:h-14 px-12 group active-press"
                >
                  <span className="uppercase tracking-widest text-sm font-bold">{t('blog.ctaPrimary', 'Free Consultation')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300" />
                </Button>
              </Link>

              <Link to="/gallery" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  variant="outline"
                  className="w-full sm:min-w-[260px] h-12 sm:h-14 px-12 group active-press"
                >
                  <span className="uppercase tracking-widest text-sm font-bold">{t('blog.ctaSecondary', 'View Gallery')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>

            {/* Trust Line */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-x-10 gap-y-4 text-fera-deep text-[10px] font-bold uppercase tracking-[0.25em]"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-3.5 h-3.5 text-fera-primary" />
                <span>{t('common.trustBadges.iso', 'ISO Certified')}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-fera-deep/10 hidden sm:block" />
              <div className="flex items-center gap-3">
                <Award className="w-3.5 h-3.5 text-fera-primary" />
                <span>{t('common.trustBadges.specialists', '15+ Specialist Dentists')}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-fera-deep/10 hidden sm:block" />
              <div className="flex items-center gap-3">
                <Users className="w-3.5 h-3.5 text-fera-primary" />
                <span>{t('common.trustBadges.patients', 'Thousands of Happy Patients')}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="sticky top-20 z-40 border-b border-black/5 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full max-w-md">
              <Search className="absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder={t('blog.searchPlaceholder', 'Search articles...')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border border-black/10 bg-white py-3 ps-11 pe-4 text-sm text-[#1b4698] outline-none transition-all focus:border-[#006693]/50"
              />
            </div>

            <div className="flex w-full items-center gap-3 overflow-x-auto lg:w-auto pb-1">
              <Filter className="h-5 w-5 flex-shrink-0 text-slate-400" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setSelectedCategory(category.key)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all active-press whitespace-nowrap ${selectedCategory === category.key
                        ? 'bg-[#006693] text-white shadow-md'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        {selectedCategory === 'all' && !searchTerm && featuredPosts.length > 0 && (
          <section className="mb-24">
            <div className="mb-10">
              <h2
                className="text-4xl lg:text-[56px] font-bold text-fera-deep tracking-tighter leading-[1.1]"
              >
                {t('blog.featuredArticles', 'Featured Articles')}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="card-premium-hover overflow-hidden rounded-luxury-lg border border-fera-border/30 bg-white shadow-luxury-sm"
                >
                  <Link to={`/blog/${post.slug}`} className="group block">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={getTranslated(post, 'title', post.title)}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="p-8 lg:p-10">
                      <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                        <span className="rounded-full bg-[#1b4698]/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1b4698]/60 border border-[#1b4698]/10">
                          {getTranslated(post, 'category', post.category)}
                        </span>
                        <span className="text-[11px] font-medium uppercase tracking-widest">{getTranslated(post, 'date', post.date)}</span>
                      </div>

                      <h3 className="mb-4 text-2xl lg:text-3xl font-semibold text-[#1b4698] tracking-tight leading-tight group-hover:text-[#006693] transition-colors">
                        {getTranslated(post, 'title', post.title)}
                      </h3>
                      <p className="mb-8 leading-relaxed text-slate-500 font-light text-lg">{getTranslated(post, 'excerpt', post.excerpt)}</p>

                      <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                        <div className="flex flex-wrap items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                          <span className="flex items-center gap-2">
                            <User className="h-4 w-4 text-[#006693]/40" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-[#006693]/40" />
                            {getTranslated(post, 'readTime', post.readTime)}
                          </span>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-[#006693] transition-all group-hover:bg-[#1b4698] group-hover:text-white group-hover:border-transparent">
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        <section>
          <div className="mb-10">
            <h2
              className="text-4xl lg:text-[56px] font-bold text-fera-deep tracking-tighter leading-[1.1]"
            >
              {selectedCategory === 'all' && !searchTerm ? t('blog.latestArticles', 'Latest Articles') : t('blog.searchResults', 'Search Results')}
            </h2>
          </div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="card-premium-hover overflow-hidden rounded-luxury-lg border border-fera-border/30 bg-white shadow-luxury-sm"
                >
                  <Link to={`/blog/${post.slug}`} className="group block h-full flex flex-col">
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={getTranslated(post, 'title', post.title)}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="p-8 flex-1 flex flex-col">
                      <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                        <span className="rounded-full bg-[#1b4698]/5 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#1b4698]/60 border border-[#1b4698]/10">
                          {getTranslated(post, 'category', post.category)}
                        </span>
                        <span className="text-[10px] font-medium uppercase tracking-widest">{getTranslated(post, 'date', post.date)}</span>
                      </div>

                      <h3 className="mb-3 text-xl font-semibold text-[#1b4698] tracking-tight leading-tight group-hover:text-[#006693] transition-colors">
                        {getTranslated(post, 'title', post.title)}
                      </h3>
                      <p className="mb-6 line-clamp-2 leading-relaxed text-slate-500 font-light text-[15px] flex-1">{getTranslated(post, 'excerpt', post.excerpt)}</p>

                      <div className="flex items-center justify-between pt-5 border-t border-slate-50">
                        <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          <Clock className="h-3.5 w-3.5 text-[#006693]/40" />
                          {getTranslated(post, 'readTime', post.readTime)}
                        </span>
                        <ArrowRight className="h-5 w-5 text-[#006693] transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-black/5 bg-white px-6 py-14 text-center shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <p className="mb-4 text-lg text-slate-600">{t('blog.noArticlesFound', 'No articles found matching your criteria.')}</p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchTerm('')
                }}
                className="font-medium text-[#006693] transition-colors hover:text-[#1b4698]"
              >
                {t('blog.clearFilters', 'Clear filters')}
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
