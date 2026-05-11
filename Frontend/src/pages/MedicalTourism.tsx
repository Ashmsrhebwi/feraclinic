import React from 'react'
import { motion } from 'framer-motion'
import {
  Plane,
  Hotel,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Star,
  Zap,
  Globe,
  Stethoscope,
  Award,
  Users,
  Car,
  Sparkles,
  Heart,
  Clock,
  Compass,
  CheckCircle2,
  Phone
} from 'lucide-react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { SectionWrapper } from '../components/ui/SectionWrapper'
import { getMedia } from '../lib/mediaResolver'

export function MedicalTourism() {
  const { t } = useTranslation()
  useSEO({ 
    title: t('medicalTourism.hero.title'), 
    description: t('medicalTourism.hero.subtitle') 
  })

  // Journey steps for the itinerary section
  const journeySteps = [
    {
      title: t('medicalTourism.itinerary.step1'),
      desc: t('medicalTourism.itinerary.step1Desc'),
      icon: Stethoscope
    },
    {
      title: t('medicalTourism.itinerary.step2'),
      desc: t('medicalTourism.itinerary.step2Desc'),
      icon: Plane
    },
    {
      title: t('medicalTourism.itinerary.step3'),
      desc: t('medicalTourism.itinerary.step3Desc'),
      icon: Award
    },
    {
      title: t('medicalTourism.itinerary.step4'),
      desc: t('medicalTourism.itinerary.step4Desc'),
      icon: Heart
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* 
      ══════════════════════════════════════
        1. HERO - CAPITAL OF MEDICAL TOURISM
      ══════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={getMedia("hero_medical_tourism_main")}
            alt="Medical Tourism Istanbul"
            className="w-full h-full object-cover object-center"
            style={{ animation: 'heroZoomPan 25s ease-in-out infinite alternate' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2D]/90 via-[#0B1C2D]/60 to-transparent backdrop-blur-[1px]" />
        </div>

        <div className="container-std relative z-10 pt-20">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-gold-400/60" />
              <span className="text-[10px] font-bold text-white uppercase tracking-[0.5em]">
                {t('medicalTourism.hero.eyebrow')}
              </span>
            </motion.div>

            <h1 className="text-6xl lg:text-[100px] font-serif font-bold text-white tracking-tight leading-[0.95] mb-8">
              {t('medicalTourism.hero.title')}
            </h1>

            <p className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed max-w-2xl mb-12">
              {t('medicalTourism.hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/consultation">
                <motion.button
                  className="w-full sm:w-auto px-12 h-20 bg-white text-[#0B1C2D] rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl hover:bg-gold-50 transition-all duration-500"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('medicalTourism.hero.cta')}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 
      ══════════════════════════════════════
        2. BLENDING TOURISM & BEAUTY
      ══════════════════════════════════════ */}
      <SectionWrapper padding="py-24 lg:py-40" background="white">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-serif font-bold text-[#0B1C2D] tracking-tight">
                {t('medicalTourism.blending.title')}
              </h2>
              <p className="text-xl text-[#64748B] font-light leading-relaxed">
                {t('medicalTourism.blending.desc')}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-[#F4F7FA] border border-[#0B1C2D]/5">
                <Compass className="w-10 h-10 text-[#0B1C2D] mb-6" />
                <h4 className="font-bold text-[#0B1C2D] mb-2 uppercase tracking-widest text-xs">
                  {t('medicalTourism.blending.feature1')}
                </h4>
              </div>
              <div className="p-8 rounded-3xl bg-[#F4F7FA] border border-[#0B1C2D]/5">
                <Award className="w-10 h-10 text-[#0B1C2D] mb-6" />
                <h4 className="font-bold text-[#0B1C2D] mb-2 uppercase tracking-widest text-xs">
                  {t('medicalTourism.blending.feature2')}
                </h4>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden shadow-3xl"
          >
            <img 
              src="/images/fera-clinic/clinic/waiting-area.webp" 
              className="w-full aspect-[4/5] object-cover"
              alt="Istanbul Tourism"
            />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 
      ══════════════════════════════════════
        3. GLOBAL SUPPORT (24/7)
      ══════════════════════════════════════ */}
      <SectionWrapper padding="py-32" background="navy">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-7xl font-serif font-bold text-white tracking-tight">
              {t('medicalTourism.support.title')}
            </h2>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              {t('medicalTourism.support.desc')}
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4">
              <div className="text-4xl font-serif italic text-white/40">01</div>
              <h4 className="text-white font-bold uppercase tracking-[0.2em]">{t('medicalTourism.support.support1')}</h4>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-serif italic text-white/40">02</div>
              <h4 className="text-white font-bold uppercase tracking-[0.2em]">{t('medicalTourism.support.support2')}</h4>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 
      ══════════════════════════════════════
        4. HOLISTIC EXPERIENCE (BEYOND BEAUTY)
      ══════════════════════════════════════ */}
      <SectionWrapper padding="py-24 lg:py-40" background="white">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative rounded-[3rem] overflow-hidden shadow-3xl"
          >
            <img 
              src="/images/fera-clinic/clinic/reception.webp" 
              className="w-full aspect-[4/5] object-cover"
              alt="Luxury Reception"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-10"
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-serif font-bold text-[#0B1C2D] tracking-tight">
                {t('medicalTourism.beyond.title')}
              </h2>
              <p className="text-xl text-[#64748B] font-light leading-relaxed">
                {t('medicalTourism.beyond.desc')}
              </p>
            </div>
            <ul className="space-y-6">
              {[t('medicalTourism.beyond.feature1'), t('medicalTourism.beyond.feature2')].map((item, i) => (
                <li key={i} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1C2D]/5 flex items-center justify-center group-hover:bg-[#0B1C2D] group-hover:text-white transition-all duration-500">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-[#0B1C2D] font-bold uppercase tracking-widest text-xs">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 
      ══════════════════════════════════════
        5. INCLUSIVITY (FOR ALL)
      ══════════════════════════════════════ */}
      <SectionWrapper padding="py-32" background="gray">
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0B1C2D]">
              {t('medicalTourism.all.title')}
            </h2>
            <p className="text-lg text-[#64748B] font-light">
              {t('medicalTourism.all.desc')}
            </p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            <div className="p-12 bg-white rounded-[3rem] shadow-xl border border-[#0B1C2D]/5 space-y-6">
              <Globe className="w-12 h-12 text-[#0B1C2D]" />
              <h4 className="font-bold text-[#0B1C2D] uppercase tracking-widest">{t('medicalTourism.all.standard')}</h4>
            </div>
            <div className="p-12 bg-white rounded-[3rem] shadow-xl border border-[#0B1C2D]/5 space-y-6">
              <Users className="w-12 h-12 text-[#0B1C2D]" />
              <h4 className="font-bold text-[#0B1C2D] uppercase tracking-widest">{t('medicalTourism.all.diversity')}</h4>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 
      ══════════════════════════════════════
        6. PIONEER OF GLOBAL HEALTHCARE
      ══════════════════════════════════════ */}
      <SectionWrapper padding="py-24 lg:py-40" background="white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-[#0B1C2D]/20" />
              <span className="text-[10px] font-bold text-[#0B1C2D]/60 uppercase tracking-[0.4em]">
                {t('medicalTourism.pioneer.title')}
              </span>
              <div className="w-12 h-[1px] bg-[#0B1C2D]/20" />
            </div>
            <p className="text-2xl lg:text-4xl text-[#0B1C2D] font-light leading-relaxed">
              {t('medicalTourism.pioneer.desc')}
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4">
              <Zap className="w-10 h-10 text-[#0B1C2D] mx-auto" />
              <h4 className="text-[#0B1C2D] font-bold uppercase tracking-[0.2em]">{t('medicalTourism.pioneer.innovation')}</h4>
            </div>
            <div className="space-y-4">
              <Award className="w-10 h-10 text-[#0B1C2D] mx-auto" />
              <h4 className="text-[#0B1C2D] font-bold uppercase tracking-[0.2em]">{t('medicalTourism.pioneer.leadership')}</h4>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 
      ══════════════════════════════════════
        7. LUXURY STANDARDS (VIP)
      ══════════════════════════════════════ */}
      <SectionWrapper padding="py-24 lg:py-40" background="navy">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight">
              {t('medicalTourism.standards.title')}
            </h2>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              {t('medicalTourism.standards.desc')}
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-4">
                <Car className="w-6 h-6 text-white" />
                <span className="text-white font-bold uppercase tracking-widest text-xs">{t('medicalTourism.standards.vip')}</span>
              </div>
              <div className="flex items-center gap-4">
                <Hotel className="w-6 h-6 text-white" />
                <span className="text-white font-bold uppercase tracking-widest text-xs">{t('medicalTourism.standards.luxury')}</span>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-[3rem] overflow-hidden shadow-3xl rotate-3">
               <img src="/images/fera-clinic/clinic/waiting-area.webp" className="w-full h-full object-cover" alt="VIP Service" />
             </div>
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 animate-spin-slow" />
          </div>
        </div>
      </SectionWrapper>

      {/* 
      ══════════════════════════════════════
        8. ITINERARY (JOURNEY)
      ══════════════════════════════════════ */}
      <SectionWrapper padding="py-24 lg:py-40" background="white">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-[#0B1C2D] tracking-tight mb-8">
            {t('medicalTourism.itinerary.title')}
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-12">
          {journeySteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-8"
            >
              <div className="w-20 h-20 bg-[#F4F7FA] rounded-[2rem] flex items-center justify-center text-[#0B1C2D]">
                <step.icon className="w-10 h-10" />
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-[#0B1C2D]">{step.title}</h4>
                <p className="text-[#64748B] font-light leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* 
      ══════════════════════════════════════
        9. FINAL CTA
      ══════════════════════════════════════ */}
      <SectionWrapper padding="py-24 lg:py-40" background="navy">
        <div className="max-w-5xl mx-auto text-center space-y-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white opacity-[0.02] blur-[150px] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8 relative z-10"
          >
            <Sparkles className="w-16 h-16 text-white mx-auto mb-12 opacity-50" />
            <h2 className="text-5xl lg:text-[100px] font-serif font-bold text-white tracking-tight leading-[0.95]">
              {t('medicalTourism.cta.title')}
            </h2>
            <p className="text-2xl text-white/70 font-light max-w-2xl mx-auto">
              {t('medicalTourism.cta.subtitle')}
            </p>
          </motion.div>

          <Link to="/consultation" className="inline-block relative z-10">
            <motion.button
              className="px-16 h-24 bg-white text-[#0B1C2D] rounded-full font-bold text-xl uppercase tracking-widest shadow-3xl hover:scale-105 transition-all duration-500"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('medicalTourism.cta.button')}
            </motion.button>
          </Link>
        </div>
      </SectionWrapper>

      <style jsx>{`
        @keyframes heroZoomPan {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
