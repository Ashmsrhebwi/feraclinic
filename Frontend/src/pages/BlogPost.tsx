import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin, ArrowRight, ShieldCheck, Award, Users } from 'lucide-react'
import { Button } from '../components/ui/button'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { blogPosts, getPostBySlug, BlogPost } from '../data/blog'
import { SectionWrapper } from '../components/ui/SectionWrapper'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { BlogCard } from '../components/ui/BlogCard'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()

  const post = slug ? getPostBySlug(slug) : undefined

  // Helper to get translated content for the post
  const getTranslated = (p: BlogPost, field: keyof BlogPost, fallback: string) => {
    const i18nKey = `blog.posts.p${p.id}.${field as string}`
    const translated = t(i18nKey)
    return translated === i18nKey ? fallback : translated
  }

  // Dynamic related posts: same category or latest, excluding current
  const relatedPosts = blogPosts
    .filter(p => p.id !== post?.id)
    .filter(p => p.category === post?.category || post?.category === undefined)
    .slice(0, 3)

  // Fallback if no same-category posts found
  const displayRelatedPosts = relatedPosts.length > 0 
    ? relatedPosts 
    : blogPosts.filter(p => p.id !== post?.id).slice(0, 3)

  useSEO({ 
    title: post ? `${post.title} | ${t('common.clinicName', 'FeRa Clinic')}` : t('blog.postNotFound', 'Blog Post Not Found'),
    description: post ? post.title : t('blog.postNotFound', 'Blog Post Not Found')
  })

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          <div className="bg-white rounded-3xl border border-gray-100/60 shadow-lg p-16">
            <h1 className="mb-6 text-4xl font-serif font-bold text-[#13293D]">
              {t('blog.postNotFound', 'Blog Post Not Found')}
            </h1>
            <p className="text-gray-600 mb-8">
              {t('blog.postNotFoundDesc', 'The article you are looking for does not exist or has been moved.')}
            </p>
            <Link to="/blog">
              <PrimaryButton>
                {t('blog.backToBlog', 'Back to Blog')}
              </PrimaryButton>
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 
══════════════════════════════════════
  ARTICLE HERO - PREMIUM EDITORIAL
══════════════════════════════════════ */}
      <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt={getTranslated(post, 'title', post.title)}
            className="w-full h-full object-cover object-center"
            style={{ animation: 'heroZoom 20s ease-in-out infinite alternate' }}
            loading="eager"
            fetchPriority="high"
          />
          {/* Premium Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        {/* Premium Floating Glow Effect */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-100/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gray-100/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 2xl:px-16 h-full flex items-end pb-16 lg:pb-24">
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Back to Blog */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-8"
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 group drop-shadow-md"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="text-xs font-bold uppercase tracking-widest">{t('blog.backToBlog', 'Back to Blog')}</span>
              </Link>
            </motion.div>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mb-6"
            >
              <span className="inline-flex px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest rounded-full border border-white/30 drop-shadow-md">
                {getTranslated(post, 'category', post.category)}
              </span>
            </motion.div>

            {/* Article Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] tracking-tight leading-[1.1] mb-8 max-w-5xl"
            >
              {getTranslated(post, 'title', post.title)}
            </motion.h1>

            {/* Article Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-8 text-white/90 text-sm font-medium"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4" />
                <span>{getTranslated(post, 'date', post.date)}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                <span>{getTranslated(post, 'readTime', post.readTime)}</span>
              </div>
              <div className="flex items-center gap-3">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 
══════════════════════════════════════
  ARTICLE CONTENT - PREMIUM READABILITY
══════════════════════════════════════ */}
      <SectionWrapper padding="py-20 lg:py-24" background="white">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-100/60 shadow-lg p-8 lg:p-16"
          >
            {/* Article Header Info */}
            <div className="flex flex-wrap items-center justify-between gap-6 mb-12 pb-8 border-b border-gray-100">
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#13293D]">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{t('blog.articleBy', 'Article by')}</p>
                  <p className="text-lg font-semibold text-[#13293D]">{post.author}</p>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{t('blog.share', 'Share')}:</span>
                <motion.button
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#0B1C2D] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#0B1C2D] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#0B1C2D] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Article Content with Premium Typography */}
            <div
              className="blog-content prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: getTranslated(post, 'content', post.content) }}
              style={{
                fontSize: '18px',
                lineHeight: '1.8',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            />

            {/* Article Tags */}
            <div className="mt-16 pt-8 border-t border-gray-100">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{t('blog.tags', 'Tags')}:</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex px-3 py-1 bg-gray-50 text-[#13293D] text-xs font-medium rounded-full border border-gray-100/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-r from-gray-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border border-gray-100/60"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                <div className="w-20 h-20 rounded-2xl bg-[#0B1C2D] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                  <User className="w-10 h-10" />
                </div>
                <div className="text-center sm:text-start">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#13293D] mb-2">{t('blog.clinicalContributor', 'Clinical Contributor')}</p>
                  <h3 className="text-2xl font-serif font-bold text-[#13293D] mb-4">{post.author}</h3>
                  <p className="text-gray-600 leading-relaxed font-light italic max-w-2xl">
                    {t('blog.authorDesc', 'Dental professional focused on evidence-based care, patient education, and treatment planning that supports both function and aesthetics.')}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.article>
        </div>
      </SectionWrapper>

      {/* 
══════════════════════════════════════
  RELATED ARTICLES - PREMIUM GRID
══════════════════════════════════════ */}
      {displayRelatedPosts.length > 0 && (
        <SectionWrapper padding="py-20 lg:py-24" background="gray">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#13293D] tracking-tight leading-[1.1]">
                {t('blog.relatedArticles', 'Related Articles')}
              </h2>
              <Link to="/blog">
                <motion.button
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white text-[#13293D] text-sm font-semibold rounded-full border border-[#0B1C2D]/20 hover:bg-[#0B1C2D] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{t('blog.viewAll', 'View All')}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Related Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayRelatedPosts.map((relatedPost, index) => (
                <BlogCard
                  key={relatedPost.id}
                  post={relatedPost}
                  getTranslated={getTranslated}
                />
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* 
══════════════════════════════════════
  CTA SECTION - PREMIUM CONVERSION
══════════════════════════════════════ */}
      <SectionWrapper padding="py-20 lg:py-24" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 mb-12 text-[#13293D]">
              {[
                { icon: ShieldCheck, text: t('common.trustBadges.iso', 'ISO Certified') },
                { icon: Award, text: t('common.trustBadges.specialists', '15+ Specialist Dentists') },
                { icon: Users, text: t('common.trustBadges.patients', 'Thousands of Happy Patients') }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#13293D] tracking-tight leading-[1.1] mb-8">
              {t('blog.ctaTitle1', 'Ready to Transform')} <br className="lg:hidden" />{t('blog.ctaTitle2', 'Your Smile?')}
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              {t('blog.ctaDesc', 'Get personalized advice from our expert team and start your journey to a perfect smile.')}
            </p>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  )
}
