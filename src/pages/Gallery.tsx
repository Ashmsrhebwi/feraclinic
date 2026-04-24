import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Filter, 
  Heart, 
  Eye, 
  ArrowRight, 
  Camera, 
  Microscope, 
  Star, 
  Quote,
  ShieldCheck,
  Award,
  Users
} from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { Button } from '../components/ui/button'
import { TiltCard } from '../components/ui/TiltCard'
import { BrandDivider } from '../components/ui/BrandDivider'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'

export function Gallery() {
  const { t } = useTranslation()
  useSEO({ title: t('navigation.gallery'), description: t('gallery.subtitle', 'Documented outcomes and facility audit.') })

  const beforeAfterImages = [
    {
      id: 1,
      title: t('gallery.cases.c1.title', 'Anterior Transformation'),
      category: t('gallery.cases.c1.category', 'Full Reconstruction'),
      image: '/images/fera-clinic/before-after/case1-after.jpg',
      metrics: { results: t('gallery.cases.c1.res', 'Natural Harmony'), period: t('gallery.cases.c1.time', '3 Weeks') }
    },
    {
      id: 2,
      title: t('gallery.cases.c2.title', 'Biological Integration'),
      category: t('gallery.cases.c2.category', 'Surgical Implants'),
      image: '/images/fera-clinic/before-after/case2-after.jpg',
      metrics: { results: t('gallery.cases.c2.res', 'Bone Stability'), period: t('gallery.cases.c2.time', '4 Months') }
    },
    {
      id: 3,
      title: t('gallery.cases.c3.title', 'Smile Re-Architecture'),
      category: t('gallery.cases.c3.category', 'Master Veneers'),
      image: '/images/fera-clinic/before-after/case3-after.jpg',
      metrics: { results: t('gallery.cases.c3.res', 'Proportional Balance'), period: t('gallery.cases.c3.time', '2 Visits') }
    },
    {
      id: 4,
      title: t('gallery.cases.c4.title', 'Orthodontic Alignment'),
      category: t('gallery.cases.c4.category', 'Digital Aligners'),
      image: '/images/fera-clinic/before-after/case4-after.jpg',
      metrics: { results: t('gallery.cases.c4.res', 'Bite Correction'), period: t('gallery.cases.c4.time', '12 Months') }
    },
    {
      id: 5,
      title: t('gallery.cases.c5.title', 'Surgical Full Arch'),
      category: t('gallery.cases.c5.category', 'All-on-4 Protocol'),
      image: '/images/fera-clinic/before-after/case5-after.jpg',
      metrics: { results: t('gallery.cases.c5.res', 'Total Function'), period: t('gallery.cases.c5.time', '24 Hours') }
    }
  ]

  const clinicPhotos = [
    {
      id: 1,
      title: t('gallery.clinic.p1.title', 'Advanced Surgical Suite'),
      image: '/images/fera-clinic/clinic/surgery-room.webp',
      desc: t('gallery.clinic.p1.desc', 'Equipped with digital 3D imaging and international sterilization protocols for high-precision surgical safety.')
    },
    {
      id: 2,
      title: t('gallery.clinic.p2.title', 'Reception & Patient Care'),
      image: '/images/fera-clinic/clinic/reception.webp',
      desc: t('gallery.clinic.p2.desc', 'A professional and welcoming environment where your clinical journey begins with our coordination team.')
    },
    {
      id: 3,
      title: t('gallery.clinic.p3.title', 'Patient Lounge'),
      image: '/images/fera-clinic/clinic/waiting-area.webp',
      desc: t('gallery.clinic.p3.desc', 'Tranquil environments designed for patient comfort during the diagnostic and recovery phases of treatment.')
    }
  ]

  const location = useLocation() as any // handle Location from wouter/router
  const getTabFromHash = (hash: string) => hash === '#clinic-photos' ? 'clinic-photos' : 'before-after'
  const [activeTab, setActiveTab] = useState(() => getTabFromHash(window.location.hash))

  useEffect(() => {
    setActiveTab(getTabFromHash(location.hash))
  }, [location.hash])

  console.log("PAGE LOADED: Gallery")

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO - UNIFIED SYSTEM */}
      <section className="relative min-h-[780px] md:min-h-[820px] lg:min-h-[92vh] flex items-start overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fera-clinic/clinic/waiting-area.webp"
            alt={t('alt.clinicGallery', 'FeRa Clinic Gallery')}
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
              <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-fera-accent uppercase tracking-[0.25em]">{t('gallery.heroEyebrow', 'Institutional Excellence')}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.2rem,8vw,3.6rem)] lg:text-[clamp(3.6rem,5vw,4.6rem)] font-semibold text-fera-deep tracking-tight leading-[0.98] mb-6"
            >
              {t('gallery.heroTitle', 'Gallery of Excellence')}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[15px] sm:text-base lg:text-lg text-fera-deep/90 max-w-[58ch] font-normal leading-[1.75] mb-8"
            >
              {t('gallery.heroDesc', 'Explore our state-of-the-art facility and witness the transformative power of precision dentistry.')}
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
                  <span className="uppercase tracking-widest text-sm font-bold">{t('gallery.ctaPrimary', 'Free Consultation')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300" />
                </Button>
              </Link>

              <Link to="/treatments" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  variant="outline"
                  className="w-full sm:min-w-[260px] h-12 sm:h-14 px-12 group active-press"
                >
                  <span className="uppercase tracking-widest text-sm font-bold">{t('gallery.ctaSecondary', 'Explore Treatments')}</span>
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

      {/* 2. SEGMENTED CONTROL - INTEGRATED TAB SELECTOR */}
      <section className="bg-white py-12 lg:py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="bg-fera-surface p-2 rounded-luxury-lg flex flex-wrap sm:flex-nowrap gap-3 border border-fera-border/30 shadow-luxury-lg">
            <button
              onClick={() => setActiveTab('before-after')}
              className={`flex items-center gap-3 px-12 lg:px-16 py-5 rounded-luxury-md text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-500 active-press ${
                activeTab === 'before-after'
                  ? 'bg-fera-deep text-white shadow-luxury scale-[1.02]'
                  : 'text-fera-deep bg-white border border-fera-border/10 hover:bg-fera-deep hover:text-white'
              }`}
            >
              <Camera className="w-4 h-4" />
              {t('gallery.tabCases', 'Case Transformations')}
            </button>
            <button
              onClick={() => setActiveTab('clinic-photos')}
              className={`flex items-center gap-3 px-12 lg:px-16 py-5 rounded-luxury-md text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-500 active-press ${
                activeTab === 'clinic-photos'
                  ? 'bg-fera-deep text-white shadow-luxury scale-[1.02]'
                  : 'text-fera-deep bg-white border border-fera-border/10 hover:bg-fera-deep hover:text-white'
              }`}
            >
              <Microscope className="w-4 h-4" />
              {t('gallery.tabFacility', 'Facility Audit')}
            </button>
          </div>
        </div>
      </section>

      {/* 3. GALLERY CONTENT - SELECTIVE SPACING & HIGH-KEY LIGHTING */}
      <section className="py-16 lg:py-32 px-6 bg-white overflow-hidden soft-blue-glow">
        {/* Anchor targets for hash navigation from Navbar */}
        <div id="before-after" className="sr-only absolute -mt-24" />
        <div id="clinic-photos" className="sr-only absolute -mt-24" />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatePresence mode="wait">
            {activeTab === 'before-after' ? (
              <motion.div
                key="cases"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
              >
                {beforeAfterImages.map((image, idx) => (
                  <TiltCard key={image.id}>
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="card-premium-hover group relative bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-700 flex flex-col h-full"
                    >
                      <div className="aspect-[16/11] relative overflow-hidden bg-gray-50">
                        <img
                          src={image.image}
                          alt={image.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-[#1b4698]/5 group-hover:bg-transparent transition-colors duration-700" />
                        <div className="absolute top-4 start-4 md:top-8 md:start-8">
                           <span className="bg-white/95 backdrop-blur-md text-[#1b4698] px-3 py-1 md:px-5 md:py-2 rounded-full text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm">
                            {t('gallery.clinicalRecord', 'Clinical Record')}
                          </span>
                        </div>
                      </div>

                      <div className="p-8 md:p-12 flex flex-col flex-grow text-start">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-[1.5px] bg-fera-primary/30" />
                          <span className="text-[10px] font-bold text-fera-primary uppercase tracking-[0.3em] leading-none">{image.category}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-fera-deep tracking-tight mb-10 group-hover:text-fera-primary transition-colors duration-300">{image.title}</h3>
                        
                        <div className="mt-auto grid grid-cols-2 gap-8 pt-10 border-t border-fera-border/30">
                          <div>
                            <p className="text-[9px] font-bold text-fera-gray/40 uppercase tracking-[0.25em] mb-2">{t('gallery.protocolOutcome', 'Protocol Outcome')}</p>
                            <p className="text-[13px] font-bold text-fera-deep tracking-tight">{image.metrics.results}</p>
                          </div>
                          <div className="text-end">
                            <p className="text-[9px] font-bold text-fera-gray/40 uppercase tracking-[0.25em] mb-2">{t('gallery.clinicalWindow', 'Clinical Window')}</p>
                            <p className="text-[13px] font-bold text-fera-deep tracking-tight">{image.metrics.period}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </TiltCard>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="facility"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12"
              >
                {clinicPhotos.map((photo, idx) => (
                  <motion.div 
                    key={photo.id} 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="card-premium-hover group relative rounded-luxury-lg border border-fera-border/30 bg-white p-5 shadow-luxury-sm transition-all duration-700"
                  >
                      <div className="aspect-[16/9] w-full overflow-hidden rounded-luxury-md relative bg-fera-surface">
                        <img
                          src={photo.image}
                          alt={photo.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                        />
                      <div className="absolute inset-0 bg-fera-deep/5 group-hover:bg-transparent transition-colors duration-700" />
                    </div>
                    
                    <div className="p-10 text-start">
                      <h3 className="text-3xl font-bold text-fera-deep tracking-tight mb-6 group-hover:text-fera-primary transition-colors duration-300">{photo.title}</h3>
                      <p className="text-[15px] text-fera-gray font-light leading-relaxed">{photo.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <BrandDivider />

      {/* 4. INSTITUTIONAL EVIDENCE - BALANCED CTA SECTION */}
      <section className="py-20 lg:py-32 px-6 bg-white relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center gap-12 mb-16 grayscale opacity-[0.15]">
             <div className="text-[10px] font-bold uppercase tracking-[0.4em]">{t('gallery.evidence.compliance', 'Restorative Compliance')}</div>
             <div className="text-[10px] font-bold uppercase tracking-[0.4em]">{t('gallery.evidence.safety', 'Biological Safety')}</div>
             <div className="text-[10px] font-bold uppercase tracking-[0.4em]">{t('gallery.evidence.warranty', 'Clinical Warranty')}</div>
          </div>
          <h2 className="text-4xl lg:text-[48px] font-semibold text-fera-deep mb-8 tracking-tight leading-[1.1]">
             {t('common.readyFor1', 'Ready for a')} {t('common.readyFor2', 'New Smile?')}
          </h2>
          <p className="section-body mb-16 max-w-2xl mx-auto">
             {t('gallery.ctaDesc', 'Our clinical results are founded on surgical precision and evidence-based materials. Connect with us for your personalized evaluation.')}
          </p>
          <Link to="/consultation">
             <Button size="xl" variant="primary" className="px-20 active-press group">
                <span className="uppercase tracking-[0.2em] text-sm font-bold">{t('common.freeConsultation')}</span>
                <ArrowRight className="ms-4 h-6 w-6 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-500" />
              </Button>
          </Link>
        </div>
      </section>

      {/* 5. FOOTER TRANSITION */}
      <section className="relative py-20 lg:py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#1b4698]/95">
          <img 
            src="/images/fera-clinic/clinic/reception.webp" 
            alt={t('alt.hospitality', 'Clinic hospitality')}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
         <div className="max-w-7xl mx-auto z-10 relative">
          <h2 className="text-4xl lg:text-[56px] font-semibold text-white mb-10 tracking-tight leading-[1.1]">
            {t('gallery.footerTitle1', 'Design Your')} {t('gallery.footerTitle2', 'Next Chapter.')}
          </h2>
          <Link to="/treatments">
            <Button size="xl" variant="white" className="px-16 active-press">
              <span className="uppercase tracking-[0.2em] text-sm font-bold">{t('gallery.exploreProtocols', 'Explore Surgical Protocols')}</span>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
