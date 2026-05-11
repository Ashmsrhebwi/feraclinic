import React from 'react'
import { LocalizedLink as Link } from '../ui/LocalizedLink'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Award, Users } from 'lucide-react'
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next'
import { getMedia } from '../../lib/mediaResolver'

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-[780px] md:min-h-[820px] lg:min-h-[92vh] flex items-start overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={getMedia('hero_home_main')}
          alt={t('alt.feraClinic', 'FeRa Clinic')}
          className="w-full h-full object-cover object-[center_35%] scale-[1.03]"
          style={{ animation: 'heroZoom 45s linear infinite alternate' }}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-white/90 via-white/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 lg:px-10 2xl:px-16 pt-24 sm:pt-28 md:pt-32 lg:pt-24 flex justify-start">
        <div className="w-full max-w-[94vw] sm:max-w-[680px] lg:max-w-[860px] 2xl:max-w-[1080px] bg-white/75 backdrop-blur-md rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          {/* Trust Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-5 sm:mb-6"
          >
            <div className="w-8 sm:w-10 h-[1px] bg-fera-accent" />
            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-fera-accent uppercase tracking-[0.25em]">
              {t('home.heroEyebrow', 'Institutional Excellence')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.2rem,8vw,3.6rem)] lg:text-[clamp(3.6rem,5vw,4.6rem)] font-semibold text-fera-deep tracking-tight leading-[0.98] mb-6"
          >
            {t('home.heroTitle', 'Clinical Excellence, Mastered Aesthetics')}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-[15px] sm:text-base lg:text-lg text-fera-deep/90 max-w-[58ch] font-normal leading-[1.75] mb-8"
          >
            {t('home.heroDesc', 'Redefining the standard of biological dentistry through the marriage of clinical precision and patient-centered luxury.')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 lg:gap-6 mb-8"
          >
            <Link to="/consultation" className="w-full sm:w-auto">
              <Button
                size="xl"
                variant="primary"
                className="w-full sm:min-w-[260px] h-12 sm:h-14 px-12 group active-press"
              >
                <span className="uppercase tracking-widest text-sm font-bold">
                  {t('common.getConsultation', 'Free Consultation')}
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300" />
              </Button>
            </Link>

            <Link to="/gallery" className="w-full sm:w-auto">
              <Button
                size="xl"
                variant="outline"
                className="w-full sm:min-w-[260px] h-12 sm:h-14 px-12 group active-press"
              >
                <span className="uppercase tracking-widest text-sm font-bold">
                  {t('common.viewGallery', 'View Gallery')}
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
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
  )
}