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
  Users,
  Zap
} from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { Button } from '../components/ui/button'
import { TiltCard } from '../components/ui/TiltCard'
import { BeforeAfterSlider } from '../components/BeforeAfterSlider'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { SectionWrapper } from '../components/ui/SectionWrapper'

export function Gallery() {
  const { t } = useTranslation()
  useSEO({ title: t('navigation.gallery'), description: t('gallery.subtitle', 'View real dental treatment results and clinic photos from FeRa Clinic in Istanbul, Turkey. See before and after cases from actual patients.') })

  const beforeAfterImages = [
    {
      id: 1,
      title: t('gallery.cases.c1.title', 'Anterior Smile Restoration'),
      category: t('gallery.cases.c1.category', 'Full Mouth Rehabilitation'),
      beforeImage: '/images/fera-clinic/before-after/case1-before.jpg',
      afterImage: '/images/fera-clinic/before-after/case1-after.jpg',
      metrics: { results: t('gallery.cases.c1.res', 'Natural Harmony'), period: t('gallery.cases.c1.time', '3 Weeks Treatment') }
    },
    {
      id: 2,
      title: t('gallery.cases.c2.title', 'Dental Implant Integration'),
      category: t('gallery.cases.c2.category', 'Implant Surgery'),
      beforeImage: '/images/fera-clinic/before-after/case2-before.jpg',
      afterImage: '/images/fera-clinic/before-after/case2-after.jpg',
      metrics: { results: t('gallery.cases.c2.res', 'Bone Integration'), period: t('gallery.cases.c2.time', '4 Months Healing') }
    },
    {
      id: 3,
      title: t('gallery.cases.c3.title', 'Smile Design Reconstruction'),
      category: t('gallery.cases.c3.category', 'Porcelain Veneers'),
      beforeImage: '/images/fera-clinic/before-after/case3-before.jpg',
      afterImage: '/images/fera-clinic/before-after/case3-after.jpg',
      metrics: { results: t('gallery.cases.c3.res', 'Aesthetic Balance'), period: t('gallery.cases.c3.time', '2 Visits') }
    },
    {
      id: 4,
      title: t('gallery.cases.c4.title', 'Orthodontic Correction'),
      category: t('gallery.cases.c4.category', 'Clear Aligners'),
      beforeImage: '/images/fera-clinic/before-after/case4-before.jpg',
      afterImage: '/images/fera-clinic/before-after/case4-after.jpg',
      metrics: { results: t('gallery.cases.c4.res', 'Bite Alignment'), period: t('gallery.cases.c4.time', '12 Months Treatment') }
    },
    {
      id: 5,
      title: t('gallery.cases.c5.title', 'Full Arch Restoration'),
      category: t('gallery.cases.c5.category', 'All-on-4 Dental Implants'),
      beforeImage: '/images/fera-clinic/before-after/case5-before.jpg',
      afterImage: '/images/fera-clinic/before-after/case5-after.jpg',
      metrics: { results: t('gallery.cases.c5.res', 'Full Function'), period: t('gallery.cases.c5.time', '24 Hour Procedure') }
    }
  ]

  const clinicPhotos = [
    {
      id: 1,
      title: t('gallery.clinic.p1.title', 'Advanced Surgical Center'),
      image: '/images/fera-clinic/clinic/surgery-room.webp',
      desc: t('gallery.clinic.p1.desc', 'Equipped with 3D CBCT imaging and international sterilization protocols for surgical precision and patient safety.')
    },
    {
      id: 2,
      title: t('gallery.clinic.p2.title', 'Patient Reception Area'),
      image: '/images/fera-clinic/clinic/reception.webp',
      desc: t('gallery.clinic.p2.desc', 'Our professional and welcoming patient reception area in Istanbul is designed to make you feel at ease from the moment you arrive.')
    },
    {
      id: 3,
      title: t('gallery.clinic.p3.title', 'Patient Lounge'),
      image: '/images/fera-clinic/clinic/waiting-area.webp',
      desc: t('gallery.clinic.p3.desc', 'Our comfortable patient lounge in Istanbul is designed for relaxation during diagnostic and treatment phases.')
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
      {/* 1. GALLERY HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fera-clinic/clinic/waiting-area.webp"
            alt={t('alt.clinicGallery', 'FeRa Clinic Gallery')}
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
                {t('gallery.heroEyebrow', 'Clinical Excellence')}
              </span>
            </div>

            {/* Premium Heading */}
            <h1 className="text-5xl lg:text-[84px] font-serif font-bold text-white tracking-tight leading-[1.05] mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              {t('gallery.heroTitle', 'Results & Tour')}
            </h1>

            <p className="text-xl text-white/85 font-light leading-relaxed max-w-2xl mb-12 drop-shadow-sm">
              {t('gallery.heroDesc', 'Explore our Istanbul dental clinic facilities and view actual patient treatment results. Individual results may vary based on clinical conditions.')}
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-10">
              {[
                { icon: ShieldCheck, text: t('common.trustBadges.iso', 'ISO Certified') },
                { icon: Award, text: t('common.trustBadges.specialists', '15+ Specialists') },
                { icon: Users, text: t('common.trustBadges.patients', 'Global Patients') }
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

      {/* 2. GALLERY DROPDOWN */}
      <section className="pt-24 sm:pt-32 pb-16 px-6 bg-white">
        <div className="container-std flex justify-center">
          <div className="inline-flex p-2 bg-[#F4F7FA] rounded-[2rem] border border-gray-100 shadow-inner">
            <button
              onClick={() => setActiveTab('before-after')}
              className={`flex items-center justify-center gap-4 px-10 py-5 rounded-[1.5rem] text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 ${
                activeTab === 'before-after'
                  ? 'bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] text-white shadow-xl scale-[1.02]'
                  : 'text-[#64748B] hover:bg-white hover:text-[#0B1C2D]'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>{t('gallery.tabCases', 'Before & After')}</span>
            </button>
            <button
              onClick={() => setActiveTab('clinic-photos')}
              className={`flex items-center justify-center gap-4 px-10 py-5 rounded-[1.5rem] text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 ${
                activeTab === 'clinic-photos'
                  ? 'bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] text-white shadow-xl scale-[1.02]'
                  : 'text-[#64748B] hover:bg-white hover:text-[#0B1C2D]'
              }`}
            >
              <Microscope className="w-4 h-4" />
              <span>{t('gallery.tabFacility', 'Clinic Photos')}</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="container-std">
          <AnimatePresence mode="wait">
            {activeTab === 'before-after' ? (
              <motion.div
                key="cases"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
              >
                {beforeAfterImages.map((case_, idx) => (
                  <motion.div 
                    key={case_.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="group relative bg-white rounded-[2.5rem] shadow-[0_15px_45px_rgba(11,28,45,0.06)] border border-gray-100/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(11,28,45,0.12)]"
                  >
                    <BeforeAfterSlider
                      beforeImage={case_.beforeImage}
                      afterImage={case_.afterImage}
                      title={case_.category}
                      alt={case_.title}
                      className="rounded-[2.5rem]"
                    />
                  </motion.div>
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="group relative bg-white rounded-[2.5rem] shadow-[0_15px_45px_rgba(11,28,45,0.06)] border border-gray-100/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(11,28,45,0.12)]"
                  >
                    <div className="aspect-[16/9] w-full overflow-hidden relative">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    <div className="p-10 lg:p-12">
                      <h3 className="text-2xl font-bold text-[#0B1C2D] tracking-tight mb-4 group-hover:text-[#518bc7] transition-colors duration-300">{photo.title}</h3>
                      <p className="text-[#64748B] leading-relaxed font-light">{photo.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <SectionWrapper padding="py-24 lg:py-32" background="navy">
        <div className="bg-transparent rounded-[3rem] px-12 lg:px-24 py-24 lg:py-32 text-center max-w-[1400px] mx-auto relative overflow-hidden group">
          {/* Abstract background detail */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-[0.03] blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white opacity-[0.02] blur-[100px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 space-y-12">
            <div className="flex flex-col items-center gap-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                <Star className="w-8 h-8 text-white fill-current" />
              </div>
              <h2 className="text-4xl lg:text-[72px] font-serif font-bold text-white tracking-tight leading-[1.05] max-w-4xl mx-auto">
                {t('common.readyFor1', 'Ready for a')} <br />
                <span className="italic font-light opacity-80">{t('common.readyFor2', 'New Smile?')}</span>
              </h2>
            </div>

            <p className="text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
              {t('gallery.ctaDesc', 'Our dental treatment results are based on surgical precision and evidence-based dentistry. Contact our Istanbul clinic for your personalized evaluation.')}
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
      </SectionWrapper>
    </div>
  )
}
