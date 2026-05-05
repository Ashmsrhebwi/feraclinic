import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { motion as m } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronDown, Phone, ShieldCheck, Star, Clock, Sparkles, UserCheck, Activity, HeartPulse, Microscope, Target, Zap } from 'lucide-react'
import { LocalizedLink as Link } from './ui/LocalizedLink'
import { ScrollReveal } from './ui/ScrollReveal'
import { useTranslation } from 'react-i18next'

interface TreatmentPageLayoutProps {
  title: string
  category: string
  heroDescription: string
  fullDescription: string
  image: string
  duration: string
  price?: string
  features: string[]
  benefits: string[]
  process: string[]
  candidates: string[]
  faqs?: { question: string; answer: string }[]
  additionalImages?: string[]
}

const SafeImage = ({ src, alt, className, aspect = 'aspect-[4/3]' }: { src: string, alt: string, className?: string, aspect?: string }) => {
  const [error, setError] = React.useState(false)
  
  if (error || !src) return (
    <div className={`${className} ${aspect} bg-gradient-to-br from-[#F4F7FA] to-[#E2E8F0] flex items-center justify-center overflow-hidden relative group`}>
      <div className="absolute inset-0 opacity-10 bg-[url('/images/fera-clinic/pattern-bg.webp')] bg-repeat" />
      <Sparkles className="w-8 h-8 text-[#0B1C2D]/10 group-hover:scale-110 transition-transform duration-500" />
    </div>
  )

  return (
    <div className={`${className} ${aspect} overflow-hidden rounded-[inherit]`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
        onError={() => setError(true)}
      />
    </div>
  )
}

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => (
  <div className={`border border-[rgba(11,28,45,0.08)] rounded-2xl overflow-hidden transition-all duration-500 ${isOpen ? 'bg-white shadow-xl border-[#0B1C2D]/10' : 'bg-[#F4F7FA]/30 hover:bg-white hover:shadow-md'}`}>
    <button
      onClick={onClick}
      className="w-full px-8 py-6 flex items-center justify-between text-start focus:outline-none group"
    >
      <span className={`text-lg font-bold tracking-tight transition-all duration-500 pe-8 ${isOpen ? 'text-[#0B1C2D]' : 'text-[#64748B] group-hover:text-[#0B1C2D]'}`}>
        {question}
      </span>
      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen ? 'border-[#0B1C2D] bg-[#0B1C2D] text-white rotate-180 shadow-lg' : 'border-[#0B1C2D]/10 bg-white text-[#64748B] group-hover:border-[#0B1C2D] group-hover:bg-[#0B1C2D] group-hover:text-white'}`}>
        <ChevronDown className="w-5 h-5" />
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="px-8 pb-8 text-[#64748B] leading-relaxed font-light border-t border-gray-100/50 pt-6">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

export function TreatmentPageLayout({
  title,
  category,
  heroDescription,
  fullDescription,
  image,
  duration,
  price,
  features,
  benefits,
  process,
  candidates,
  faqs = [],
  additionalImages = []
}: TreatmentPageLayoutProps) {
  const { t } = useTranslation()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION - PREMIUM MINIMALIST */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          {image ? (
            <img
              src={image}
              alt={t('treatment.mainImageAlt', '')}
              className="w-full h-full object-cover object-center"
              style={{ animation: 'heroZoomPan 20s ease-in-out infinite alternate' }}
            />
          ) : (
            <div className="absolute inset-0 bg-[#0B1C2D]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="container-std relative z-10 pt-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/10 backdrop-blur-2xl rounded-[3rem] p-10 lg:p-16 shadow-2xl border border-white/20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-white/40" />
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.4em] drop-shadow-md">
                  {category}
                </span>
              </div>

              <h1 className="text-5xl lg:text-[72px] font-serif font-bold text-white tracking-tight leading-[1.05] mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
                {title}
              </h1>

              <p className="text-xl text-white/85 font-light leading-relaxed max-w-2xl mb-12 drop-shadow-sm">
                {heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/consultation" className="w-full sm:w-auto">
                  <motion.button 
                    className="w-full sm:min-w-[240px] h-20 bg-white text-[#0B1C2D] rounded-full font-bold text-xs uppercase tracking-[0.3em] shadow-2xl transition-all duration-500"
                    whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('treatments.getTreatmentPlan', 'Book Consultation')}
                  </motion.button>
                </Link>
                <a href={`https://wa.me/${t('common.whatsappNumber', '905367460100')}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <motion.button 
                    className="w-full sm:min-w-[240px] h-20 bg-transparent text-white border border-white/20 rounded-full font-bold text-xs uppercase tracking-[0.3em] transition-all duration-500"
                    whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('treatments.quickQuestions', 'Ask Questions')}
                  </motion.button>
                </a>
              </div>
            </motion.div>

            {/* Hero Side Image Column */}
            {additionalImages[0] && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative hidden lg:block"
              >
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src={additionalImages[0]} 
                    alt={`${title} Detail`}
                    className="w-full h-full object-cover aspect-[4/5]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/40 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-10 left-10 bg-white backdrop-blur-md p-8 rounded-2xl shadow-xl flex items-center gap-4 z-10 border border-white/50">
                    <div className="w-12 h-12 rounded-xl bg-[#0B1C2D] text-white flex items-center justify-center">
                      <Star className="w-6 h-6 fill-current" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#64748B] font-bold">{t('common.protocol', 'Protocol')}</p>
                      <p className="text-sm font-bold text-[#0B1C2D]">{t('common.premiumCare', 'Premium Standard')}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 2. QUICK TRUST STRIP */}
      <section className="relative z-20 -mt-16 sm:-mt-20 container-std">
        <div className="bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(11,28,45,0.12)] border border-gray-100/50 p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {[
              { icon: Clock, label: t('treatments.duration', 'Clinical Time'), value: duration },
              { icon: ShieldCheck, label: t('treatments.detail.badges.globalStandards', 'Standards'), value: t('treatments.detail.badges.isoCertified', 'ISO Certified') },
              { icon: UserCheck, label: t('treatments.detail.badges.specialist', 'Specialist'), value: t('treatments.detail.badges.boardCertified', 'Board Certified') },
              { icon: Sparkles, label: t('treatments.detail.badges.aesthetics', 'Aesthetics'), value: t('treatments.detail.badges.naturalResults', 'Natural Results') }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-start group">
                <div className="w-16 h-16 rounded-2xl bg-[#F4F7FA] text-[#0B1C2D] flex items-center justify-center mb-6 group-hover:bg-[#0B1C2D] group-hover:text-white transition-all duration-500 shadow-sm">
                  <stat.icon className="w-8 h-8" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#64748B] font-bold mb-2">{stat.label}</span>
                <span className="text-base font-bold text-[#0B1C2D]">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OVERVIEW & WHO IS IT FOR */}
      <section className="py-24 lg:py-32 px-6">
        <div className="container-std">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            {/* Overview Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-[#0B1C2D]/20" />
                  <span className="text-[10px] font-bold text-[#0B1C2D] uppercase tracking-[0.4em]">{t('treatments.overview', 'Overview')}</span>
                </div>
                <h2 className="text-4xl lg:text-[56px] font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1]">
                  {t('treatments.understanding', 'Understanding')} <span className="italic font-light opacity-70">{title}</span>
                </h2>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                {fullDescription}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {features.slice(0, 4).map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-[#0B1C2D] uppercase tracking-wider">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Procedure Image 1 */}
              {additionalImages[1] && (
                <div className="pt-8">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
                    <img 
                      src={additionalImages[1]} 
                      alt={`${title} Procedure`}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#0B1C2D]/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
              )}
            </motion.div>

            {/* Who is it for Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#F8FAFC] border border-gray-100/50 rounded-[3rem] p-12 lg:p-16 h-full flex flex-col shadow-[0_20px_60px_rgba(11,28,45,0.04)]"
            >
              <div className="flex-grow space-y-12">
                <h3 className="text-3xl font-serif font-bold text-[#0B1C2D] tracking-tight">{t('treatments.whoIsItFor', 'Is this treatment for you?')}</h3>
                <div className="space-y-8">
                  {candidates.map((candidate, i) => (
                    <div key={i} className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#0B1C2D] shrink-0 group-hover:bg-[#0B1C2D] group-hover:text-white transition-all duration-500">
                        <Activity className="w-6 h-6" />
                      </div>
                      <p className="text-gray-700 font-medium leading-relaxed pt-2 text-lg">{candidate}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Procedure Image 2 */}
              {additionalImages[2] && (
                <div className="mt-16">
                  <div className="relative rounded-[2rem] overflow-hidden shadow-xl">
                    <img 
                      src={additionalImages[2]} 
                      alt={`${title} Setup`}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CLINICAL STEPS - PREMIUM WORKFLOW */}
      <section className="py-24 lg:py-32 px-6 bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.03] blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white opacity-[0.02] blur-[120px] translate-y-1/2 -translate-x-1/2" />

        <div className="container-std relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-[10px] font-bold text-[#7CC4FF] uppercase tracking-[0.4em] mb-6 block">{t('treatments.clinicalWorkflow', 'Clinical Workflow')}</span>
            <h2 className="text-4xl lg:text-[64px] font-serif font-bold text-white tracking-tight leading-[1.05]">
              {t('treatments.yourJourney', 'Treatment Journey')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {process.map((step, i) => {
              const icons = [Clock, Activity, HeartPulse, Sparkles]
              const Icon = icons[i % icons.length]
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 transition-all duration-500 flex flex-col">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-white group-hover:text-[#0B1C2D] transition-all duration-700 text-[#7CC4FF] relative">
                      <Icon className="w-8 h-8" />
                      <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#7CC4FF] text-[#0B1C2D] flex items-center justify-center text-xs font-bold shadow-lg">0{i + 1}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-6 tracking-tight">{step}</h4>
                    <p className="text-white/50 text-base leading-relaxed font-light">
                      {t(`treatments.process.step${i+1}Desc`, 'Standardized clinical protocol ensuring precision and safety throughout the procedure.')}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. BENEFITS SECTION */}
      <section className="py-24 lg:py-32 px-6">
        <div className="container-std">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-8"
              >
                {benefits.map((benefit, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-[2rem] p-10 shadow-[0_15px_45px_rgba(11,28,45,0.03)] hover:shadow-xl transition-all duration-500 group">
                    <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <p className="text-[#0B1C2D] font-bold text-lg leading-tight">
                      {benefit}
                    </p>
                  </div>
                ))}

                {/* Benefits Images */}
                <div className="grid grid-cols-2 gap-6 sm:col-span-2 pt-8">
                  {additionalImages[3] && (
                    <div className="relative rounded-[2rem] overflow-hidden shadow-lg group">
                      <img src={additionalImages[3]} alt={t('treatment.resultAlt', 'Result')} className="w-full aspect-square object-cover transition-transform duration-1000 group-hover:scale-110" />
                    </div>
                  )}
                  {additionalImages[4] && (
                    <div className="relative rounded-[2rem] overflow-hidden shadow-lg mt-12 group">
                      <img src={additionalImages[4]} alt={t('treatment.detailAlt', 'Detail')} className="w-full aspect-square object-cover transition-transform duration-1000 group-hover:scale-110" />
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 order-1 lg:order-2 space-y-12"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-[#0B1C2D]/20" />
                  <span className="text-[10px] font-bold text-[#0B1C2D] uppercase tracking-[0.4em]">{t('treatments.benefits', 'Benefits')}</span>
                </div>
                <h2 className="text-4xl lg:text-[64px] font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.05]">
                  {t('treatments.whyChoose', 'Why patients choose')} <span className="italic font-light opacity-70">{title}</span>
                </h2>
              </div>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                {t('treatments.benefitsDescription', 'Our clinical protocols are designed to deliver not just aesthetic perfection, but long-term functional stability and oral health.')}
              </p>

              <div className="flex pt-6">
                <Link to="/gallery">
                  <motion.button 
                    className="group px-10 py-5 bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] text-white rounded-full font-bold text-[10px] uppercase tracking-[0.3em] flex items-center gap-4 shadow-2xl transition-all duration-500"
                    whileHover={{ y: -4 }}
                  >
                    {t('home.viewFullGallery', 'View Gallery')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      {faqs && faqs.length > 0 && (
        <section className="py-24 lg:py-32 px-6 bg-[#F8FAFC]">
          <div className="container-std">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="text-[10px] font-bold text-[#0B1C2D] uppercase tracking-[0.4em] mb-6 block">{t('common.faq')}</span>
              <h2 className="text-4xl lg:text-[64px] font-serif font-bold text-[#0B1C2D] tracking-tight">
                {t('home.faq.title', 'Clinical Questions')}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FAQItem
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFaq === i}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. FINAL CONSULTATION CTA */}
      <section className="py-24 lg:py-32 px-6 bg-white">
        <div className="container-std">
          <div className="bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] rounded-[3rem] lg:rounded-[4rem] px-12 lg:px-24 py-24 lg:py-32 text-center relative overflow-hidden shadow-[0_40px_120px_rgba(11,28,45,0.25)] group">
            {/* Abstract background detail */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-[0.03] blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white opacity-[0.02] blur-[100px] translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 space-y-12">
              <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl lg:text-[72px] font-serif font-bold text-white tracking-tight leading-[1.05] max-w-4xl mx-auto">
                  {t('treatments.transformInIstanbul', 'Your New Smile in Istanbul')}
                </h2>
              </div>

              <p className="text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                {t('treatments.transformDesc', 'Our specialist team is ready to design your perfect smile. Get a personalized medical quote and plan today.')}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link to="/consultation" className="w-full sm:w-auto">
                  <motion.button 
                    className="w-full sm:w-auto px-12 h-20 bg-white text-[#0B1C2D] rounded-full font-bold text-lg uppercase tracking-widest shadow-2xl transition-all duration-500"
                    whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('common.designYourSmile', 'Design Your Smile')}
                  </motion.button>
                </Link>
                <a href={`https://wa.me/${t('common.whatsappNumber', '905367460100')}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <motion.button 
                    className="w-full sm:w-auto px-12 h-20 bg-transparent text-white border border-white/20 rounded-full font-bold text-lg uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-4 group/wa"
                    whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center group-hover/wa:bg-green-500 transition-colors">
                      <Zap className="w-4 h-4 text-green-400 group-hover/wa:text-white" />
                    </div>
                    {t('common.whatsappConsultationLong', 'WhatsApp Consultation')}
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
