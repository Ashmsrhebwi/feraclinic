import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Zap,
  Star,
  ChevronRight,
  ShieldAlert,
  Microscope,
  Stethoscope,
  Award,
  Users
} from 'lucide-react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { Button } from '../components/ui/button'
import { PremiumCard } from '../components/ui/PremiumCard'
import { BrandDivider } from '../components/ui/BrandDivider'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { treatments } from '../data/treatments'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'

export function Treatments() {
  const { t, i18n } = useTranslation()
  useSEO({ title: t('navigation.treatments'), description: t('treatments.subtitle', 'Transform your smile with expert dental care.') })
  console.log("PAGE LOADED: Treatments")

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO - UNIFIED SYSTEM */}
      <section className="relative min-h-[780px] md:min-h-[820px] lg:min-h-[92vh] flex items-start overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fera-clinic/clinic/waiting-area.webp"
            alt={t('alt.clinicalMastery', 'FeRa Clinic Clinical Mastery')}
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
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 mb-5 sm:mb-6"
            >
              <div className="w-8 sm:w-10 h-[1px] bg-fera-accent" />
              <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-fera-accent uppercase tracking-[0.25em]">{t('treatments.heroEyebrow', 'Advanced Biological Dentistry')}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.2rem,8vw,3.6rem)] lg:text-[clamp(3.6rem,5vw,4.6rem)] font-semibold text-fera-deep tracking-tight leading-[0.98] mb-6"
            >
              {t('treatments.heroTitle', 'Clinical Mastery & Aesthetic Precision')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[15px] sm:text-base lg:text-lg text-fera-deep/90 max-w-[58ch] font-normal leading-[1.75] mb-8"
            >
              {t('treatments.heroDesc', 'Explore our comprehensive range of specialized dental services, from full arch reconstruction to minimally invasive biological treatments.')}
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
                  <span className="uppercase tracking-widest text-sm font-bold">{t('treatments.ctaPrimary', 'Free Consultation')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300" />
                </Button>
              </Link>

              <Link to="/gallery" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  variant="outline"
                  className="w-full sm:min-w-[260px] h-12 sm:h-14 px-12 group active-press"
                >
                  <span className="uppercase tracking-widest text-sm font-bold">{t('treatments.ctaSecondary', 'View Gallery')}</span>
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

      {/* 2. TREATMENT COLLECTION - USING PremiumCard */}
      <section className="py-20 lg:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal type="heading" className="text-center mb-20">
            <span className="section-label mb-8">{t('treatments.collectionEyebrow', 'Clinical Archive')}</span>
            <h2 className="text-4xl lg:text-5xl font-medium text-fera-deep tracking-tight leading-[1.1] mt-4">
              {t('treatments.heroTitle1', 'Transform Your')} {t('treatments.heroTitle2', 'Smile.')}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {treatments.map((item, idx) => (
              <ScrollReveal key={item.id} type="card" delay={idx * 80}>
                <PremiumCard
                  title={t(`treatments.data.${item.id}.title`, item.title)}
                  description={t(`treatments.data.${item.id}.desc`, item.description)}
                  image={item.image}
                  category={t(`treatments.data.${item.id}.category`, item.category)}
                  href={`/treatments/${item.slug}`}
                  metadata={{
                    label: t('treatments.typicalProtocol', 'Typical Protocol'),
                    value: t(`treatments.data.${item.id}.duration`, item.duration)
                  }}
                />
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/gallery">
              <Button
                variant="secondary"
                size="xl"
                className="px-12 group active-press"
              >
                <span className="uppercase tracking-[0.2em] text-xs font-bold">{t('treatments.viewGallery', 'View Before & After Gallery')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-500" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <BrandDivider />

      {/* 3. TECHNOLOGY - CLEAR REASSURANCE */}
      <section className="py-20 lg:py-32 px-6 bg-gray-50/10">
        <div className="w-full max-w-[94vw] sm:max-w-[680px] lg:max-w-[860px] 2xl:max-w-[1080px] bg-white/55 backdrop-blur-md rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: i18n.dir() === 'rtl' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-16 h-1 bg-fera-primary/30 mb-10 rounded-full" />
              <h2 className="text-3xl lg:text-4xl font-medium text-fera-deep mb-8 tracking-tight leading-[1.1]">
                {t('treatments.techTitle1', 'Modern Dental')} {t('treatments.techTitle2', 'Technology.')}
              </h2>
              <p className="section-body mb-16">
                {t('treatments.techDesc', 'We use modern digital tools for all our treatments. From 3D scanning to precise computer planning, we ensure high-quality and reliable results for every patient.')}
              </p>
              <div className="space-y-12">
                {[
                  { icon: Microscope, title: t('treatments.tech.precision', 'Precision Visualization'), desc: t('treatments.tech.precisionDesc', 'Using advanced medical tools for ultra-clear surgical accuracy.') },
                  { icon: Zap, title: t('treatments.tech.scanning', 'Digital 3D Scanning'), desc: t('treatments.tech.scanningDesc', 'Comfortable and fast digital oral maps without physical molds.') },
                  { icon: ShieldCheck, title: t('treatments.tech.materials', 'Quality Materials'), desc: t('treatments.tech.materialsDesc', 'Only using world-leading biocompatible dental materials.') }
                ].map((tech, i) => (
                  <div key={i} className="group flex gap-8">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-luxury flex items-center justify-center text-fera-primary flex-shrink-0 group-hover:bg-fera-deep group-hover:text-white transition-all duration-500">
                      <tech.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-fera-deep uppercase tracking-[0.2em] text-[11px] mb-3 group-hover:text-fera-primary transition-colors duration-300">{tech.title}</h4>
                      <p className="text-fera-gray/60 text-[15px] font-light leading-relaxed">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative rounded-[4rem] shadow-luxury-xl p-4 bg-white border border-gray-100"
            >
              <img
                src="/images/fera-clinic/clinic/surgery-room.webp"
                alt={t('alt.labTech', 'High end dental lab tech')}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-luxury-lg"
              />
              <div className="absolute -bottom-10 end-[-2.5rem] bg-fera-deep text-white p-12 rounded-luxury-lg shadow-luxury-xl whitespace-nowrap flex flex-col items-center">
                <p className="text-5xl font-bold tracking-tighter mb-2">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">{t('treatments.tech.digitalProcess', 'Digital Process')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BrandDivider />

      {/* 4. FINAL CTA - CLEAR COMMAND */}
      <section className="bg-[#1b4698] py-20 lg:py-32 px-6 text-center relative overflow-hidden">
        <div className="hero-inner-glow" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-10">
              {t('common.readyFor1', 'Ready for a')} {t('common.readyFor2', 'New Smile?')}
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto mb-12 font-normal leading-[1.7]">
              {t('treatments.ctaDesc', 'Contact us today for a free price estimate and personalized treatment plan. Our specialists are ready to help you.')}
            </p>
            <Link to="/consultation">
              <Button
                variant="white"
                size="xl"
                className="px-20 active-press group"
              >
                <span className="uppercase tracking-[0.2em] text-lg font-bold">{t('common.freeConsultation')}</span>
                <ArrowRight className="ms-4 h-8 w-8 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-500" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
