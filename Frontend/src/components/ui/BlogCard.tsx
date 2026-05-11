import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { LocalizedLink as Link } from './LocalizedLink'
import { BlogPost } from '../../data/blog'
import { useTranslation } from 'react-i18next'
import { getMedia } from '../../lib/mediaResolver'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
  className?: string
  getTranslated: (post: BlogPost, field: keyof BlogPost, fallback: string) => string
}

export function BlogCard({ post, featured = false, className = '', getTranslated }: BlogCardProps) {
  const { t } = useTranslation()

  if (featured) {
    // Featured Article - Large Card
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`bg-white rounded-3xl border border-gray-100/60 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-350 ease hover:-translate-y-6 hover:scale-[1.01] ${className}`}
      >
        <Link to={`/blog/${post.slug}`} className="group block">
          <div className="lg:grid lg:grid-cols-2">
            {/* Image Side */}
            <div className="aspect-[16/10] lg:aspect-auto relative overflow-hidden">
              <img
                src={getMedia(post.imageKey || post.image)}
                alt={getTranslated(post, 'title', post.title)}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-350 ease"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12">
              {/* Category Badge */}
              <div className="mb-6">
                <span className="inline-flex px-3 py-1 bg-[#0B1C2D]/10 text-[#0B1C2D] text-xs font-bold uppercase tracking-widest rounded-full">
                  {getTranslated(post, 'category', post.category)}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[#0B1C2D] mb-6 leading-tight group-hover:text-[#13293D] transition-all duration-300 ease">
                {getTranslated(post, 'title', post.title)}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 leading-relaxed mb-8 line-clamp-3">
                {getTranslated(post, 'excerpt', post.excerpt)}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{getTranslated(post, 'date', post.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{getTranslated(post, 'readTime', post.readTime)}</span>
                  </div>
                </div>
              </div>

              {/* Read More Button */}
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#0B1C2D] text-white text-sm font-semibold rounded-full hover:bg-[#0B1C2D]/90 transition-all duration-300 ease"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{t('common.readArticle')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 rtl:rotate-180 transition-transform duration-300 ease" />
              </motion.div>

            </div>
          </div>
        </Link>
      </motion.article>
    )
  }

  // Regular Blog Card
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`group ${className}`}
    >
    <Link to={`/blog/${post.slug}`} className="block h-full group">
      <div className="bg-white rounded-3xl border border-[rgba(11,28,45,0.10)] shadow-[0_20px_60px_rgba(11,28,45,0.08)] hover:-translate-y-6 hover:scale-[1.01] hover:shadow-[0_30px_90px_rgba(11,28,45,0.15)] transition-all duration-350 ease h-full flex flex-col">
        {/* Image */}
        <div className="aspect-video overflow-hidden rounded-t-3xl">
          <img
            src={getMedia(post.imageKey || post.image)}
            alt={getTranslated(post, 'title', post.title)}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-350 ease"
          />
        </div>

        {/* Content */}
        <div className="p-8 flex-1 flex flex-col">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-flex px-3 py-1 bg-[#0B1C2D]/10 text-[#0B1C2D] text-xs font-bold uppercase tracking-widest rounded-full">
              {getTranslated(post, 'category', post.category)}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-serif font-bold text-[#0B1C2D] mb-4 leading-tight group-hover:text-[#13293D] transition-all duration-300 ease line-clamp-2">
            {getTranslated(post, 'title', post.title)}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 leading-relaxed mb-6 flex-1 line-clamp-3">
            {getTranslated(post, 'excerpt', post.excerpt)}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{getTranslated(post, 'date', post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{getTranslated(post, 'readTime', post.readTime)}</span>
              </div>
            </div>
            <motion.div
              className="w-10 h-10 rounded-full border border-[#0B1C2D]/20 flex items-center justify-center text-[#0B1C2D] transition-all duration-300 ease group-hover:bg-[#0B1C2D] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_8px_25px_rgba(11,28,45,0.25)]"
              whileHover={{ scale: 1.03 }}
            >
              <ArrowRight className="w-5 h-5 transition-transform duration-300 ease group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 rtl:rotate-180" />

            </motion.div>
          </div>
        </div>
      </div>
    </Link>
    </motion.article>
  )
}
