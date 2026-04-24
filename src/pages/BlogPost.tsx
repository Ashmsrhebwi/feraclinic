import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/button'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { blogPosts, getPostBySlug, BlogPost } from '../data/blog'

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
      <div className="flex min-h-screen items-center justify-center bg-slate-50/50 px-6">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-semibold text-[#1b4698]">{t('blog.postNotFound', 'Blog Post Not Found')}</h1>
          <Link to="/blog">
            <Button variant="primary">{t('blog.backToBlog', 'Back to Blog')}</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50/50">
      <section className="relative h-[420px] overflow-hidden lg:h-[560px]">
        <img src={post.image} alt={getTranslated(post, 'title', post.title)} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b4698] via-[#1b4698]/40 to-transparent" />

        <div className="absolute bottom-0 inset-x-0 px-6 pb-12 lg:px-12 lg:pb-20">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/blog"
                className="mb-8 inline-flex items-center gap-2 text-white/70 transition-all hover:text-white hover:translate-x-[-4px] rtl:hover:translate-x-[4px]"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-widest">{t('blog.backToBlog', 'Back to Blog')}</span>
              </Link>

              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex rounded-lg bg-[#008BC9] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-luxury-sm">
                  {getTranslated(post, 'category', post.category)}
                </span>
              </div>

              <h1
                className="mb-8 max-w-4xl text-4xl font-bold leading-[1.1] text-white lg:text-6xl tracking-tight"
              >
                {getTranslated(post, 'title', post.title)}
              </h1>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-white/60 text-xs font-medium uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#008BC9]" />
                  {getTranslated(post, 'date', post.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#008BC9]" />
                  {getTranslated(post, 'readTime', post.readTime)}
                </span>
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-[#008BC9]" />
                  {post.author}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-luxury lg:p-16 relative z-10"
        >
          <div className="mb-12 flex flex-wrap items-center justify-between gap-6 border-b border-gray-50 pb-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#1b4698]">
                <User className="w-5 h-5" />
              </div>
              <div className="text-sm">
                <p className="text-slate-400 uppercase tracking-widest text-[10px] font-bold mb-0.5">{t('blog.articleBy', 'Article by')}</p>
                <p className="font-bold text-[#1b4698]">{post.author}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="me-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">{t('blog.share', 'Share Article')}:</span>
              <button className="rounded-xl bg-slate-50 p-2.5 text-slate-400 transition-all hover:bg-[#1b4698] hover:text-white">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="rounded-xl bg-slate-50 p-2.5 text-slate-400 transition-all hover:bg-[#1b4698] hover:text-white">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="rounded-xl bg-slate-50 p-2.5 text-slate-400 transition-all hover:bg-[#1b4698] hover:text-white">
                <Linkedin className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            className="blog-content max-w-3xl mx-auto text-start"
            dangerouslySetInnerHTML={{ __html: getTranslated(post, 'content', post.content) }}
          />

          <div className="mt-16 border-t border-gray-50 pt-10">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{t('blog.tags', 'Article Tags')}:</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-lg bg-slate-50 px-4 py-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider border border-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] bg-slate-50 p-8 lg:p-12 border border-gray-100/50">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.5rem] bg-[#1b4698] text-white shadow-luxury">
                <User className="h-8 w-8" />
              </div>
              <div className="text-center sm:text-start">
                <p className="text-[#008BC9] uppercase tracking-[0.2em] text-[10px] font-bold mb-2">Clinical Contributor</p>
                <h4 className="text-2xl font-bold text-[#1b4698] mb-4">{post.author}</h4>
                <p className="leading-relaxed text-slate-500 text-base font-light italic">
                  {t('blog.authorDesc', 'Dental professional focused on evidence-based care, patient education, and treatment planning that supports both function and aesthetics.')}
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1b4698] tracking-tight">
            {t('blog.relatedArticles', 'Related Articles')}
          </h2>
          <Link to="/blog" className="text-xs font-bold uppercase tracking-widest text-[#008BC9] hover:text-[#1b4698] transition-colors">
            {t('blog.viewAll', 'View All Posts')}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {displayRelatedPosts.map((relatedPost, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-luxury-sm transition-all hover:translate-y-[-8px] hover:shadow-luxury-lg"
            >
              <Link to={`/blog/${relatedPost.slug}`}>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={relatedPost.image} alt={getTranslated(relatedPost, 'title', relatedPost.title)} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#1b4698]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#008BC9] mb-4 block">
                    {getTranslated(relatedPost, 'category', relatedPost.category)}
                  </span>
                  <h3 className="text-xl font-bold text-[#1b4698] leading-tight group-hover:text-[#008BC9] transition-colors">
                    {getTranslated(relatedPost, 'title', relatedPost.title)}
                  </h3>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>

      <section className="bg-[#1b4698] px-6 py-24 lg:py-32 relative overflow-hidden">
        {/* Ambient background detail */}
        <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-[#008BC9] opacity-[0.05] blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#008BC9] mb-6 block">Take the first step</span>
          <h2 className="mb-8 text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            {t('common.readyFor1', 'Ready for a')} <br />
            <span className="text-white/40 italic font-light">{t('common.readyFor2', 'New Smile?')}</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg lg:text-xl font-light text-white/80 leading-relaxed">
            {t('blog.ctaDesc', 'Speak with our team and receive a treatment consultation tailored to your needs, goals, and travel plans.')}
          </p>
          <Link to="/consultation">
            <Button variant="white" size="xl" className="px-12">
              {t('common.freeConsultation', 'Get Free Consultation')}
              <ArrowRight className="ms-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
