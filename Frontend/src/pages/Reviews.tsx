import { useRef, useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from '../components/ui/button'

import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { GOOGLE_REVIEWS, GOOGLE_REVIEW_LINK } from '../data/googleReviews'

interface ReviewData {
  id: string
  author: {
    en: string;
    ar: string;
    tr: string;
    fr: string;
    es: string;
    ru: string;
  } | string // string for API fallback
  text: {
    en: string;
    ar: string;
    tr: string;
    fr: string;
    es: string;
    ru: string;
  } | string // string for API fallback
  rating: number
  date: string
  authorImage?: string
}

export function Reviews() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const [apiReviews, setApiReviews] = useState<ReviewData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useSEO({
    title: t('testimonials.medicalGoogleReviews'),
    description: t('testimonials.realPatientExperiences')
  })

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/google-reviews?limit=50')
        if (!response.ok) throw new Error('API fetch failed')
        const data = await response.json()
        
        if (data.data && data.data.length > 0) {
          const transformed = data.data.map((r: any, index: number) => ({
            id: `api-${index}`,
            author: r.reviewer_name,
            text: r.review_text,
            rating: r.rating,
            date: r.review_time ? new Date(r.review_time).toLocaleDateString() : '',
            authorImage: r.reviewer_avatar
          }))
          setApiReviews(transformed)
        }
      } catch (error) {
        console.error('Error fetching reviews:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchReviews()
  }, [])

  const displayReviews = apiReviews.length > 0 ? apiReviews : GOOGLE_REVIEWS
  const ref = useRef(null)

  // Fallback avatar - simplified as per requirements
  const getAvatar = (author: any) => {
    const currentLang = i18n.language.split('-')[0]
    const name = typeof author === 'string' ? author : (author[currentLang] || author.en || '?')
    const firstLetter = name.charAt(0).toUpperCase();
    return (
      <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white bg-gray-400">
        {firstLetter}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. MINIMAL HEADER */}
      <section className="bg-white border-b border-gray-200 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4"
          >
            <img
              src="/images/fera-clinic/testimonials/google-review.png"
              alt="Google Reviews"
              className="w-[150px] object-contain mb-2"
            />

            <h1
              className="text-3xl font-bold text-[#0B1C2D] lg:text-4xl tracking-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {t('testimonials.medicalGoogleReviews')}
            </h1>

            <p className="max-w-2xl text-lg text-slate-500 font-light">
              {t('testimonials.realPatientExperiences')}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              <a
                href={GOOGLE_REVIEW_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="px-8 h-12 bg-[#0B1C2D] text-white hover:bg-[#1a3a5a] hover:text-white rounded-lg font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md"
                >
                  {t('testimonials.writeGoogleReview')}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. REVIEWS GRID - 2 Columns Desktop, 1 Column Mobile */}
      <section ref={ref} className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          {isLoading && apiReviews.length === 0 && (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0B1C2D]"></div>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {displayReviews.map((review) => (
              <motion.article
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 shadow-sm flex flex-col h-[320px] relative"
              >
                {/* Google Logo & Stars (Single Image) */}
                <div className={`mb-4 ${isRTL ? 'flex justify-end' : ''}`}>
                  <img
                    src="/images/fera-clinic/testimonials/google-review.png"
                    alt="Google Reviews"
                    className="w-[120px] h-auto object-contain"
                  />
                </div>

                {/* Review Text - Fixed Height with Internal Scroll */}
                <div className="flex-grow overflow-y-auto mb-6 pr-2 custom-scrollbar">
                  <p className={`text-sm leading-relaxed text-slate-600 font-normal ${isRTL ? 'text-right' : 'text-left'}`}>
                    {typeof review.text === 'string' ? review.text : (review.text[i18n.language.split('-')[0] as keyof typeof review.text] || review.text.en)}
                  </p>
                </div>

                {/* Reviewer Info at Bottom */}
                <div className={`flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {review.authorImage ? (
                    <img
                      src={review.authorImage}
                      alt={typeof review.author === 'string' ? review.author : review.author.en}
                      className="w-10 h-10 rounded-full object-cover border border-gray-100"
                    />
                  ) : (
                    getAvatar(review.author)
                  )}
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h3 className="text-sm font-bold text-[#0B1C2D]">
                      {typeof review.author === 'string' ? review.author : (review.author[i18n.language.split('-')[0] as keyof typeof review.author] || review.author.en)}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">{review.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Simple CTA at bottom */}
          <div className="mt-16 text-center">
            <a
              href={GOOGLE_REVIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="outline"
                className="px-8 h-14 border-gray-200 hover:border-[#0B1C2D] hover:bg-[#0B1C2D] hover:text-white rounded-lg font-bold text-xs uppercase tracking-widest transition-all duration-300 group"
              >
                <span className="group-hover:translate-x-[-4px] transition-transform">{t('testimonials.readAllGoogleReviews')}</span>
                <ExternalLink className="w-4 h-4 ml-3 opacity-40" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </div>
  )
}
