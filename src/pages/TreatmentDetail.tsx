import React, { useState } from 'react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { ArrowRight, Phone, CheckCircle2, Clock, MapPin, ShieldCheck, CalendarDays, Activity, HeartPulse, Sparkles, UserCheck, Tag, Mail, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { treatments, getTreatmentBySlug } from '../data/treatments'

export function TreatmentDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()

  const treatment = slug ? getTreatmentBySlug(slug) : null

  // Helper to get translated content for the treatment
  const getTranslated = (key: string, fallback: string) => {
    if (!treatment) return fallback
    // Try to find in i18n data
    const i18nKey = `treatments.data.${treatment.id}.${key}`
    const translated = t(i18nKey)
    return translated === i18nKey ? fallback : translated
  }

  useSEO({ 
    title: treatment 
      ? `${getTranslated('title', treatment.title)} | ${t('common.clinicName', 'FeRa Clinic')}` 
      : t('treatments.notFound', 'Treatment Not Found'),
    description: treatment 
      ? getTranslated('desc', treatment.description) 
      : t('treatments.notFoundDesc', 'The treatment you are looking for does not exist.')
  })

  if (!treatment) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center">
        <div className="text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold text-[#1b4698] mb-4">{t('treatments.notFound', 'Treatment Not Found')}</h1>
            <p className="text-fera-gray mb-8 max-w-md mx-auto">{t('treatments.notFoundDesc', "The treatment you're looking for doesn't exist or has been moved.")}</p>
            <Link to="/treatments">
              <Button variant="primary">{t('treatments.backToTreatments', 'Back to Treatments')}</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  // Map the data from the source of truth
  const displayData = {
    title: getTranslated('title', treatment.title),
    description: getTranslated('desc', treatment.description),
    image: treatment.image,
    duration: getTranslated('duration', treatment.duration),
    price: getTranslated('price', treatment.price || ''),
    features: treatment.features.map((f, i) => t(`treatments.data.${treatment.id}.features.${i}`, f)),
    benefits: treatment.benefits.map((b, i) => t(`treatments.data.${treatment.id}.benefits.${i}`, b)),
    process: (treatment as any).process 
      ? (treatment as any).process.map((p: string, i: number) => t(`treatments.data.${treatment.id}.process.${i}`, p))
      : [
          t('treatments.process.consultation', 'Consultation & Planning'),
          t('treatments.process.procedure', 'Clinical Procedure'),
          t('treatments.process.recovery', 'Healing Period'),
          t('treatments.process.result', 'Final Result')
        ],
    candidates: (treatment as any).candidates
      ? (treatment as any).candidates.map((c: string, i: number) => t(`treatments.data.${treatment.id}.candidates.${i}`, c))
      : [
          t('treatments.candidates.missing', 'Missing or damaged teeth'),
          t('treatments.candidates.aesthetic', 'Aesthetic improvements'),
          t('treatments.candidates.function', 'Restoration of function'),
          t('treatments.candidates.longterm', 'Long-term dental health')
        ]
  }

  console.log("PAGE LOADED: TreatmentDetail")

  return (
    <div className="bg-white min-h-screen">
      
      {/* 
══════════════════════════════════════
  HERO - UNIFIED SYSTEM
══════════════════════════════════════ */}
      <section className="relative min-h-[780px] md:min-h-[820px] lg:min-h-[92vh] flex items-start overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={displayData.image}
            alt={displayData.title}
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
              <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-fera-accent uppercase tracking-[0.25em]">{t('treatments.heroEyebrow', 'Clinical Specialization')}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.2rem,8vw,3.6rem)] lg:text-[clamp(3.6rem,5vw,4.6rem)] font-semibold text-fera-deep tracking-tight leading-[0.98] mb-6"
            >
              {displayData.title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[15px] sm:text-base lg:text-lg text-fera-deep/90 max-w-[58ch] font-normal leading-[1.75] mb-8"
            >
              {displayData.description}
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
                  <span className="uppercase tracking-widest text-sm font-bold">{t('common.getConsultation', 'Free Consultation')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300" />
                </Button>
              </Link>

              <Link to="/gallery" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  variant="outline"
                  className="w-full sm:min-w-[260px] h-12 sm:h-14 px-12 group active-press"
                >
                  <span className="uppercase tracking-widest text-sm font-bold">{t('common.viewGallery', 'View Gallery')}</span>
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
                <span>{displayData.duration}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-fera-deep/10 hidden sm:block" />
              <div className="flex items-center gap-3">
                <Sparkles className="w-3.5 h-3.5 text-fera-primary" />
                <span>{t('treatments.detail.badges.specialist', 'Specialist Procedure')}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-fera-deep/10 hidden sm:block" />
              <div className="flex items-center gap-3">
                <UserCheck className="w-3.5 h-3.5 text-fera-primary" />
                <span>{t('treatments.detail.badges.globalStandards', 'Global Clinical Standards')}</span>
              </div>
            </motion.div>

            {/* Summary Box */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-fera-deep/5 backdrop-blur-sm border border-fera-deep/10 rounded-2xl p-6 mb-8 flex flex-wrap gap-x-12 gap-y-6 transition-all duration-300"
            >
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] text-fera-deep/40 font-bold mb-2">{t('treatments.categories.title', 'Classification')}</span>
                <span className="text-sm font-bold text-fera-deep tracking-tight">{treatment.category}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] text-fera-deep/40 font-bold mb-2">{t('treatments.duration', 'Clinical Time')}</span>
                <span className="text-sm font-bold text-fera-deep tracking-tight">{displayData.duration}</span>
              </div>
              {displayData.price && (
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-fera-deep/40 font-bold mb-2">{t('treatments.price', 'Investment')}</span>
                  <span className="text-sm font-bold text-fera-deep tracking-tight">{displayData.price}</span>
                </div>
              )}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 lg:gap-6 mb-4"
            >
              <Link to="/consultation" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  variant="primary"
                  className="w-full sm:min-w-[260px] h-12 sm:h-14 px-12 group active-press"
                >
                  <span className="uppercase tracking-widest text-sm font-bold">{t('treatments.getTreatmentPlan')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300" />
                </Button>
              </Link>

              <a 
                href={`https://wa.me/${t('common.whatsappNumber', '905551234567')}?text=${encodeURIComponent(t('common.whatsappMessage', 'Hello, I have a question about treatments.'))}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="xl"
                  variant="outline"
                  className="w-full sm:min-w-[260px] h-12 sm:h-14 px-12 group active-press"
                >
                  <Phone className="me-2 h-5 w-5" />
                  <span className="uppercase tracking-widest text-sm font-bold">{t('treatments.quickQuestions')}</span>
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL STORYTELLING SECTION */}
      {treatment.editorial && treatment.editorial.length > 0 && (
        <section className="py-20 lg:py-32 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto space-y-20 lg:space-y-32">
            {treatment.editorial.map((row, idx) => {
              const isEven = idx % 2 === 1
              return (
                <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-32`}>
                  {/* Image Column */}
                  <ScrollReveal 
                    type={isEven ? 'fade-left' : 'fade-right'}
                    className="w-full lg:w-1/2 relative"
                  >
                    <div className="absolute -inset-6 bg-gray-50/80 rounded-[4rem] -z-10 rotate-1 group-hover:rotate-0 transition-transform duration-1000" />
                    <img 
                      src={row.image} 
                      alt={row.heading}
                      className="w-full h-[450px] lg:h-[650px] object-cover rounded-[3rem] shadow-luxury-xl grayscale-[0.1] hover:grayscale-0 transition-all duration-1000"
                    />
                  </ScrollReveal>

                  {/* Text Column */}
                  <ScrollReveal 
                    type={isEven ? 'fade-right' : 'fade-left'}
                    delay={150}
                    className="w-full lg:w-1/2"
                  >
                    <div className="max-w-xl">
                      <span className="text-[11px] font-bold text-fera-primary uppercase tracking-[0.5em] mb-8 block">
                        {row.eyebrow}
                      </span>
                      <h2 className="text-3xl lg:text-4xl font-medium text-fera-deep mb-8 tracking-tight leading-[1.15]">
                        {row.heading}
                      </h2>
                      <p className="text-lg text-[#6B7280] font-normal leading-[1.7] mb-10 clinical-description">
                        {row.description}
                      </p>
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-[1.5px] bg-fera-border/30" />
                        <Link to="/consultation" className="text-xs font-bold text-fera-deep uppercase tracking-widest hover:text-fera-primary transition-colors duration-300">
                          {t('treatments.getTreatmentPlan', 'Discuss Protocol')}
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* 3. CLINICAL SPECIFICATIONS (FEATURES & BENEFITS) */}
      <section className="py-20 lg:py-32 px-6 bg-gray-50/30 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[10px] font-bold text-fera-deep uppercase tracking-[0.3em] mb-12 border-b border-fera-border/30 pb-5">
                {t('treatments.treatmentFeatures', 'Clinical Features')}
              </h3>
              <div className="space-y-6">
                {displayData.features.map((feature: string, i: number) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-6 h-6 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-[#1b4698] group-hover:text-white transition-all duration-300">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-lg text-gray-600 font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-[10px] font-bold text-fera-deep uppercase tracking-[0.3em] mb-12 border-b border-fera-border/30 pb-5">
                {t('treatments.benefits', 'Patient Benefits')}
              </h3>
              <div className="space-y-6">
                {displayData.benefits.map((benefit: string, i: number) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-6 h-6 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-[#008BC9] group-hover:text-white transition-all duration-300">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-lg text-gray-600 font-light">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 lg:py-32 px-6 bg-fera-surface relative overflow-hidden">
        {/* Ambient background detail */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1b4698] opacity-[0.03] blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-6 block">
                {t('treatments.clinicalWorkflow', 'Clinical Workflow')}
              </span>
              <h2 className="section-heading mb-8">
                {t('treatments.yourJourney', 'Your Treatment Journey')}
              </h2>
              <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
                A guided, specialist-led clinical pathway designed for safety, precision, and world-class aesthetic outcomes.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            {/* Desktop Progress Line */}
            <div className="hidden lg:block absolute top-1/2 start-0 w-full h-px bg-gradient-to-r from-transparent via-[#1b4698]/10 to-transparent -translate-y-[80px]" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {displayData.process.map((step: string, index: number) => {
                const stepIcons = [CalendarDays, Activity, HeartPulse, Sparkles];
                const StepIcon = stepIcons[index % stepIcons.length];
                const stepDescs = [
                  "Initial 3D evaluation and clinical planning.",
                  "Implementation by our clinical specialists.",
                  "Professional monitoring and healing support.",
                  "The final unveiling of your healthy smile."
                ];
                
                return (
                  <motion.div 
                    key={index} 
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <div className="card-premium-hover h-full bg-white rounded-luxury-lg p-12 border border-fera-border/30 group flex flex-col items-center text-center transition-all duration-500">
                      <div className="w-20 h-20 bg-fera-surface shadow-luxury rounded-2xl flex items-center justify-center text-fera-primary mb-10 group-hover:bg-fera-deep group-hover:text-white transition-all duration-500 relative">
                        <StepIcon className="w-8 h-8" />
                        <span className="absolute -top-3 -end-3 w-8 h-8 rounded-full bg-white border border-fera-border/10 shadow-luxury-sm flex items-center justify-center text-[10px] font-bold text-fera-deep group-hover:bg-fera-primary group-hover:text-white transition-colors duration-500">
                          0{index + 1}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-fera-deep mb-4 tracking-tight group-hover:text-fera-primary transition-colors duration-300">
                        {step}
                      </h3>
                      <p className="text-[15px] text-fera-gray font-light leading-relaxed">
                        {stepDescs[index % stepDescs.length]}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-20 lg:py-32 px-6 text-center border-t border-gray-100 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-gray-50/50 to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Trust Points Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20"
          >
            {[
              { 
                icon: Clock, 
                label: "Response within 24h",
                desc: "Priority medical coordination"
              },
              { 
                icon: Globe, 
                label: "International Support",
                desc: "Multi-language assistance"
              },
              { 
                icon: Tag, 
                label: "Transparent Pricing",
                desc: "Fixed clinical quotes"
              },
              { 
                icon: UserCheck, 
                label: "Certified Specialists",
                desc: "European Board certified"
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="card-premium-hover p-8 rounded-luxury-md bg-white border border-fera-border/30 group text-start flex flex-col transition-all duration-500 shadow-luxury-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-fera-surface flex items-center justify-center text-fera-primary mb-6 group-hover:bg-fera-deep group-hover:text-white transition-all duration-500">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="text-[10px] font-bold text-fera-deep uppercase tracking-[0.2em] mb-2 group-hover:text-fera-primary transition-colors duration-300">{item.label}</h4>
                <p className="text-[12px] text-fera-gray/60 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-6xl font-medium text-fera-deep mb-8 tracking-tight leading-[1.1]">
              {t('treatments.transformInIstanbul', 'Transform Your Smile in Istanbul')}
            </h2>
            <p className="section-body mb-16 max-w-2xl mx-auto">
              {t('treatments.transformDesc', 'Get your personalized treatment plan and cost estimate. Our team guides international patients through every step of their journey.')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
              <Link to="/consultation">
                <Button variant="primary" size="xl" className="min-w-[300px] active-press group">
                  <span className="uppercase tracking-widest text-sm font-bold">{t('treatments.getTreatmentPlan', 'Discuss Your Treatment')}</span>
                  <ArrowRight className="ms-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-500" />
                </Button>
              </Link>
              <a 
                href={`https://wa.me/${t('common.whatsappNumber', '905551234567')}?text=${encodeURIComponent(t('common.whatsappMessage', 'Hello, I have a question about treatments.'))}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="xl" className="min-w-[300px] active-press">
                  <Phone className="me-2 h-5 w-5" />
                  <span className="uppercase tracking-widest text-sm font-bold">{t('treatments.whatsappConsultation', 'Contact via WhatsApp')}</span>
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-gray-400">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <Mail className="w-3.5 h-3.5" />
                <span>hello@feraclinic.com</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <Phone className="w-3.5 h-3.5" />
                <span>{t('treatments.detail.cta.speak', 'Speak with our coordinators')}</span>
              </div>
            </div>

            <div className="mt-16 text-gray-300 text-[10px] font-bold uppercase tracking-[0.3em]">
              {t('treatments.saveNotice', 'Save up to 70% compared to Western prices while receiving premium care')}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )

}
