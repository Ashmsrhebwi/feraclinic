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
import { SectionWrapper } from '../components/ui/SectionWrapper'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { treatments } from '../data/treatments'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
export function Treatments() {
  const { t, i18n } = useTranslation()
  useSEO({ 
    title: t('treatments.seo.title'), 
    description: t('treatments.seo.description') 
  })


  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO - MATCH HOME PAGE STYLE */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fera-clinic/clinic/waiting-area.webp"
            alt={t('alt.clinicalExcellence')}
            className="w-full h-full object-cover object-center"
            style={{ animation: 'heroZoomPan 20s ease-in-out infinite alternate' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="container-std relative z-10 pt-20">
          <motion.div 
            className="w-full max-w-4xl bg-white/10 backdrop-blur-2xl rounded-[3rem] p-10 lg:p-16 shadow-2xl border border-white/20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Premium Eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-white/40" />
              <span className="text-[10px] font-bold text-white uppercase tracking-[0.4em] drop-shadow-md">
                {t('treatments.heroEyebrow')}
              </span>
            </div>

            {/* Premium Heading */}
            <h1 className="text-5xl lg:text-[84px] font-serif font-bold text-white tracking-tight leading-[1.05] mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              {t('treatments.heroTitle')}
            </h1>

            <p className="text-xl text-white/85 font-light leading-relaxed max-w-2xl mb-12 drop-shadow-sm">
              {t('treatments.heroDesc')}
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-10">
              {[
                { icon: ShieldCheck, text: t('common.trustBadges.iso') },
                { icon: Award, text: t('common.trustBadges.specialists') },
                { icon: Users, text: t('common.trustBadges.patients') },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SectionWrapper padding="py-24 lg:py-32" background="gray">
        <div className="container-std">
          <div className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#0B1C2D]/20" />
              <span className="text-[10px] font-bold text-[#0B1C2D] uppercase tracking-[0.4em]">{t('treatments.collectionEyebrow')}</span>
              <div className="w-12 h-[1px] bg-[#0B1C2D]/20" />
            </div>
            <h2 className="text-4xl lg:text-[64px] font-serif font-bold text-[#0B1C2D] mb-8 leading-[1.05]">
              {t('treatments.heroTitle1')} <span className="italic font-light opacity-70">{t('treatments.heroTitle2')}</span>
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto font-light leading-relaxed">
              {t('treatments.collectionDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {treatments.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/treatments/${item.slug}`} className="group block h-full">
                  <div className="h-full bg-white rounded-[2.5rem] shadow-[0_15px_45px_rgba(11,28,45,0.06)] border border-gray-100/50 overflow-hidden transition-all duration-500 hover:shadow-[0_40px_100px_rgba(11,28,45,0.12)] hover:-translate-y-2 flex flex-col">
                    {/* Image Container */}
                    <div className="relative aspect-[1.3/1] overflow-hidden">
                      <img
                        src={item.image}
                        alt={t(`treatments.data.${item.id}.title`)}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-6 left-6">
                        <span className="text-[10px] font-bold text-[#0B1C2D] uppercase tracking-widest bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm border border-white/20">
                          {t(`treatments.data.${item.id}.category`)}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-10 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em]">
                          <Clock className="w-3.5 h-3.5 text-[#0B1C2D]/40" />
                          <span>{t(`treatments.data.${item.id}.duration`)}</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-[#0B1C2D]/10" />
                        <div className="flex items-center gap-2 text-[10px] font-bold text-green-600 uppercase tracking-[0.2em]">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>{t('common.clinical')}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-[#0B1C2D] mb-4 tracking-tight group-hover:text-[#518bc7] transition-colors duration-300">
                        {t(`treatments.data.${item.id}.title`)}
                      </h3>
                      
                      <p className="text-[#64748B] text-base leading-relaxed mb-10 font-light line-clamp-3">
                        {t(`treatments.data.${item.id}.desc`)}
                      </p>
                      
                      <div className="mt-auto flex items-center gap-3 text-[#0B1C2D] font-bold text-[10px] uppercase tracking-[0.3em] group-hover:gap-5 transition-all duration-300">
                        <span>{t('treatments.learnMore')}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 lg:mt-24 text-center">
            <Link to="/gallery">
              <motion.button 
                className="group px-12 py-6 bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] text-white rounded-full font-bold text-xs uppercase tracking-[0.3em] shadow-2xl hover:shadow-3xl transition-all duration-500 flex items-center gap-4 mx-auto"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{t('treatments.viewGallery')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
              </motion.button>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="py-24 lg:py-32" background="white">
        <div className="container-std">
          <div className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#0B1C2D]/20" />
              <span className="text-[10px] font-bold text-[#0B1C2D] uppercase tracking-[0.4em]">{t('treatments.techEyebrow')}</span>
              <div className="w-12 h-[1px] bg-[#0B1C2D]/20" />
            </div>
            <h2 className="text-4xl lg:text-[64px] font-serif font-bold text-[#0B1C2D] mb-8 leading-[1.05]">
              {t('treatments.techTitle1')} <span className="italic font-light opacity-70">{t('treatments.techTitle2')}</span>
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto font-light leading-relaxed">
              {t('treatments.techDesc')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              {[
                { icon: Microscope, title: t('treatments.tech.precision'), desc: t('treatments.tech.precisionDesc') },
                { icon: Zap, title: t('treatments.tech.scanning'), desc: t('treatments.tech.scanningDesc') },
                { icon: ShieldCheck, title: t('treatments.tech.materials'), desc: t('treatments.tech.materialsDesc') }
              ].map((tech, i) => (
                <motion.div 
                  key={i} 
                  className="group flex items-start gap-8 p-10 rounded-[2.5rem] bg-[#F8FAFC] border border-gray-100 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(11,28,45,0.08)]"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#0B1C2D] flex-shrink-0 group-hover:bg-[#0B1C2D] group-hover:text-white transition-all duration-500">
                    <tech.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#0B1C2D] text-xl mb-3 tracking-tight">{tech.title}</h4>
                    <p className="text-[#64748B] leading-relaxed font-light">{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-[3rem] shadow-[0_40px_100px_rgba(11,28,45,0.15)] overflow-hidden border border-gray-100">
                <img
                  src="/images/fera-clinic/clinic/surgery-room.webp"
                  alt={t('alt.labTech')}
                  className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/30 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 bg-white rounded-[2.5rem] shadow-[0_30px_80px_rgba(11,28,45,0.15)] p-10 flex items-center gap-6 border border-gray-50 hidden md:flex">
                <div className="w-16 h-16 rounded-2xl bg-[#0B1C2D] flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#0B1C2D] tracking-tighter">100%</p>
                  <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em]">{t('treatments.tech.digitalProcess')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="py-24 lg:py-32" background="navy">
        <div className="container-std">
          <div className="bg-transparent rounded-[3rem] px-12 lg:px-24 py-24 lg:py-32 text-center relative overflow-hidden group">
            {/* Abstract background detail */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-[0.03] blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white opacity-[0.02] blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 space-y-12">
              <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl lg:text-[72px] font-serif font-bold text-white tracking-tight leading-[1.05] max-w-4xl mx-auto">
                  {t('common.readyFor1')} <br />
                  <span className="italic font-light opacity-80">{t('common.readyFor2')}</span>
                </h2>
              </div>

              <p className="text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                {t('treatments.ctaDesc')}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link to="/consultation" className="w-full sm:w-auto">
                  <motion.button 
                    className="w-full sm:w-auto px-12 h-20 bg-white text-[#0B1C2D] rounded-full font-bold text-lg uppercase tracking-widest shadow-2xl transition-all duration-500"
                    whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('common.designYourSmile')}
                  </motion.button>
                </Link>
                <a href={`https://wa.me/${t('common.whatsappNumber')}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <motion.button 
                  className="w-full sm:w-auto px-12 h-20 bg-transparent text-white border border-white/20 rounded-full font-bold text-lg uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-4 group/wa"
                    whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center group-hover/wa:bg-green-500 transition-colors">
                      <Zap className="w-4 h-4 text-green-400 group-hover/wa:text-white" />
                    </div>
                    {t('common.whatsappConsultationLong')}
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
