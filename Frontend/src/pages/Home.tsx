import { useState, useEffect } from 'react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { ArrowRight, ShieldCheck, Award, Users, Clock, Star, Globe, CheckCircle, Check, Phone, Facebook, Instagram, Youtube, Linkedin, Building, Play, X, Mail, MapPin, Stethoscope, Microscope, Scan, ScanLine, Sparkles, Zap, ExternalLink } from 'lucide-react'
import { TreatmentCard } from '../components/ui/TreatmentCard'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { BeforeAfterAnimation } from '../components/BeforeAfterAnimation'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { Button } from '../components/ui/button'
import { getMedia } from '../lib/mediaResolver'
import { submitLead } from '../lib/leadService'
import { SectionWrapper } from '../components/ui/SectionWrapper'
import { HeroCallForm } from '../components/HeroCallForm'
import { GOOGLE_REVIEWS, GOOGLE_REVIEW_LINK } from '../data/googleReviews'

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.88-.64-1.61-1.47-2.11-2.44v10.13c-.15 1.98-1.2 3.89-2.91 4.9-1.72 1.01-3.95 1.11-5.75.26-1.8-.85-3.08-2.67-3.35-4.66-.44-3.23 2.15-6.3 5.37-6.57.54-.05 1.08.01 1.61.16v4.03c-.42-.15-.88-.23-1.33-.21-1.34.07-2.5 1.1-2.73 2.43-.3 1.73.91 3.4 2.65 3.7.88.15 1.83-.05 2.53-.61.71-.57 1.12-1.46 1.14-2.37.02-3.41 0-6.82.01-10.23.01-2.28 0-4.56.02-6.84z" />
  </svg>
)

/* ─── FEATURED TREATMENTS ─── */
const getFeaturedTreatments = (t: any) => [
  {
    id: '1',
    slug: 'dental-implants',
    title: t('treatments.implants', 'Dental Implants'),
    category: t('treatments.categories.restorative', 'Restorative'),
    description: t('home.treatments.0.desc', 'Advanced titanium dental implants with lifetime warranty at our Istanbul clinic. The permanent solution for missing teeth with natural-looking results and precision 3D-guided surgery.'),
    image: '/images/fera-clinic/treatments/implant-procedure.webp',
    duration: t('treatments.detail.implants.duration', '1–2 Hours')
  },
  {
    id: '2',
    slug: 'hollywood-smile',
    title: t('treatments.veneers', 'Porcelain Veneers'),
    category: t('treatments.categories.cosmetic', 'Cosmetic'),
    description: t('home.treatments.1.desc', 'Custom-designed porcelain veneers for a perfect Hollywood smile at our Istanbul clinic. Minimal tooth preparation with stain-resistant ceramic materials for lasting aesthetic excellence.'),
    image: '/images/fera-clinic/treatments/veneer-procedure.webp',
    duration: t('treatments.detail.hollywood.duration', '2–3 Visits')
  },
  {
    id: '3',
    slug: 'all-on-4-istanbul',
    title: t('treatments.allOn4', 'All-on-4 Implants'),
    category: t('treatments.categories.restorative', 'Restorative'),
    description: t('home.treatments.2.desc', 'Full arch restoration with just 4 implants at our Istanbul clinic. Same-day teeth with immediate function and beautiful, natural-looking aesthetics for complete smile transformation.'),
    image: '/images/fera-clinic/treatments/implant-procedure.webp',
    duration: t('treatments.detail.ortho.duration', '1 Day')
  }
]

/* ─── WHY FERA ─── */
const getReasons = (t: any) => [
  {
    icon: ShieldCheck,
    title: t('home.reasons.sterilization.title', 'European Sterilization Standards'),
    desc: t('home.reasons.sterilization.desc', 'Class-B autoclave systems and HEPA-filtered surgical suites in every treatment room at our Istanbul clinic for maximum patient safety.')
  },
  {
    icon: Clock,
    title: t('home.reasons.planning.title', '3D Treatment Planning'),
    desc: t('home.reasons.planning.desc', 'Advanced CBCT imaging and digital smile design technology completed before any clinical procedure begins at our Istanbul facility.')
  },
  {
    icon: Star,
    title: t('home.reasons.doctors.title', 'Specialist Doctors Only'),
    desc: t('home.reasons.doctors.desc', 'Every dental procedure at our Istanbul clinic is performed by a doctor holding an advanced degree and specialization in their field.')
  },
  {
    icon: Globe,
    title: t('home.reasons.coordination.title', 'Full International Coordination'),
    desc: t('home.reasons.coordination.desc', 'Dedicated international patient coordinator, VIP airport transfers, and hotel booking for patients visiting our dental clinic in Istanbul.')
  }
]

/* ─── STATS ─── */
const getStats = (t: any) => [
  { value: '12+', label: t('stats.experience', 'Years of Experience') },
  { value: '5,000+', label: t('stats.patients', 'International Patients') },
  { value: '98%', label: t('stats.satisfaction', 'Satisfaction Rate') },
  { value: '12', label: t('stats.specialists', 'Specialist Doctors') },
]


/* ─── BEFORE / AFTER CASES ─── */
const getBeforeAfterCases = (t: any) => [
  {
    label: t('treatments.smileMakeover', 'Hollywood Smile'),
    before: '/images/fera-clinic/before-after/case1-before.jpg',
    beforeKey: 'case_1_before',
    after: '/images/fera-clinic/before-after/case1-after.jpg',
    afterKey: 'case_1_after',
  },
  {
    label: t('treatments.implants', 'Dental Implants'),
    before: '/images/fera-clinic/before-after/case2-before.jpg',
    beforeKey: 'case_2_before',
    after: '/images/fera-clinic/before-after/case2-after.jpg',
    afterKey: 'case_2_after',
  },
  {
    label: t('treatments.crowns', 'Zirconium Crowns'),
    before: '/images/fera-clinic/before-after/case3-before.jpg',
    beforeKey: 'case_3_before',
    after: '/images/fera-clinic/before-after/case3-after.jpg',
    afterKey: 'case_3_after',
  },
  {
    label: t('treatments.orthodontics', 'Orthodontic Alignment'),
    before: '/images/fera-clinic/before-after/case4-before.jpg',
    beforeKey: 'case_4_before',
    after: '/images/fera-clinic/before-after/case4-after.jpg',
    afterKey: 'case_4_after',
  },
  {
    label: t('treatments.allOn4', 'Surgical Full Arch'),
    before: '/images/fera-clinic/before-after/case5-before.jpg',
    beforeKey: 'case_5_before',
    after: '/images/fera-clinic/before-after/case5-after.jpg',
    afterKey: 'case_5_after',
  },
  {
    label: t('gallery.cases.c1.title', 'Full Aesthetic Reconstruction'),
    before: '/images/fera-clinic/before-after/case1-before.jpg',
    beforeKey: 'case_1_before',
    after: '/images/fera-clinic/before-after/case1-after.jpg',
    afterKey: 'case_1_after',
  },
]

/* ─── BEFORE / AFTER CARD SUB-COMPONENT ─── */
const BeforeAfterCard = ({ caseData, index, t }: { caseData: any, index: number, t: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
    >
      <div className="relative rounded-3xl shadow-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/40">
        <BeforeAfterAnimation
          beforeImage={getMedia(caseData.beforeKey || caseData.before)}
          afterImage={getMedia(caseData.afterKey || caseData.after)}
          title={caseData.label}
          alt={t('alt.beforeAfter', `${caseData.label} before and after`)}
          className="rounded-3xl"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none rounded-3xl" />
      </div>
    </motion.div>
  )
}

/* ─── FAQ DATA & COMPONENT ─── */
const getFaqs = (t: any) => [
  {
    question: t('home.faq.q1', 'Am I a good candidate for dental implants?'),
    answer: t('home.faq.a1', 'Ideal candidates for dental implants at our Istanbul clinic have healthy gums and sufficient bone density. During your initial consultation and 3D CBCT scan, our specialists will evaluate your bone structure to ensure precise, long-lasting implant placement. Results may vary based on individual clinical conditions. Please note that dental implants may not be suitable for everyone, and our team will discuss the risks and benefits with you during your consultation.')
  },
  {
    question: t('home.faq.q2', 'How long does a Hollywood Smile treatment usually take?'),
    answer: t('home.faq.a2', 'A complete Hollywood Smile using porcelain veneers or zirconium crowns at our Istanbul clinic is typically completed in 5 to 7 days, requiring only 2 or 3 clinic visits. Final results depend on individual clinical factors and natural healing response. As with any medical procedure, there are risks and benefits associated with a Hollywood Smile treatment, and our team will discuss these with you during your consultation.')
  },
  {
    question: t('home.faq.q3', 'Are zirconium crowns natural-looking?'),
    answer: t('home.faq.a3', 'Yes. Zirconium used at our Istanbul clinic is highly durable and reflects light similarly to natural tooth enamel. Our digital smile design technology ensures the shade, shape, and transparency perfectly match your facial structure for optimal aesthetic results. However, as with any dental restoration, there is a risk of complications, and our team will discuss these with you during your consultation.')
  },
  {
    question: t('home.faq.q4', 'Is the consultation process suitable for international patients?'),
    answer: t('home.faq.a4', 'Absolutely. We offer comprehensive virtual consultations for international patients visiting our Istanbul clinic. By reviewing your dental photos and x-rays online, our medical coordinators can provide a highly accurate preliminary treatment plan and timeline before you travel to Turkey. Please note that a virtual consultation is not a substitute for a thorough in-person examination, and our team will discuss the risks and benefits with you during your consultation.')
  },
  {
    question: t('home.faq.q5', 'Will my treatment plan be personalized?'),
    answer: t('home.faq.a5', 'Every patient at our Istanbul clinic receives a fully bespoke treatment protocol. We use advanced digital imaging and smile design technology to tailor procedures to your unique anatomical needs, ensuring both functional stability and aesthetic perfection. Individual results may vary based on clinical conditions. As with any medical procedure, there are risks and benefits associated with a personalized treatment plan, and our team will discuss these with you during your consultation.')
  },
  {
    question: t('home.faq.q6', 'How many days should I stay in Istanbul for treatment?'),
    answer: t('home.faq.a6', 'For cosmetic procedures like veneers at our Istanbul clinic, 5-7 days is typically sufficient for your stay in Turkey. For surgical implants, a 3-4 day initial visit is needed, followed by a second 7-day visit after healing period. Our team coordinates your entire Istanbul itinerary including accommodation and transfers. Please note that the length of stay may vary depending on individual clinical factors, and our team will discuss this with you during your consultation.')
  }
]

const FAQItem = ({ faq, index, openIndex, setOpenIndex }: { faq: any, index: number, openIndex: number | null, setOpenIndex: (i: number | null) => void }) => {
  const isOpen = openIndex === index
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className={`border border-[rgba(11,28,45,0.10)] rounded-2xl overflow-hidden transition-all duration-400 ${isOpen ? 'bg-white shadow-lg border-[rgba(11,28,45,0.18)]' : 'bg-[#F4F7FA]/30 hover:bg-white hover:shadow-md'}`}
    >
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full px-8 py-6 flex items-center justify-between text-start focus:outline-none group"
      >
        <span className={`text-lg font-semibold tracking-tight transition-all duration-400 pe-4 ${isOpen ? 'text-[#0B1C2D]' : 'text-[#334155] group-hover:text-[#0B1C2D]'}`}>
          {faq.question}
        </span>
        <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-400 ${isOpen ? 'border-[#0B1C2D] bg-[#0B1C2D] text-white rotate-180 shadow-sm' : 'border-[rgba(11,28,45,0.10)] bg-[#F4F7FA] text-[#64748B] group-hover:border-[#0B1C2D] group-hover:bg-white'}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-8 pt-3 text-[#64748B] leading-relaxed font-light text-base">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  )
}

interface ReviewData {
  id: string
  author: {
    en: string;
    ar: string;
    tr: string;
    fr: string;
    es: string;
    ru: string;
  }
  text: {
    en: string;
    ar: string;
    tr: string;
    fr: string;
    es: string;
    ru: string;
  }
  rating: number
  date: string
  authorImage?: string
}

export const Home = () => {
  const { t, i18n } = useTranslation()
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [newsletterLoading, setNewsletterLoading] = useState(false)
  const currentLang = i18n.language.split('-')[0] // handle cases like 'en-US'

  const [displayReviews, setDisplayReviews] = useState<ReviewData[]>([]);

  useEffect(() => {
    const fetchHomeReviews = async () => {
      // 1. Logic for static fallbacks based on EXACT language requirements
      let selectedReviews: GoogleReview[] = [];
      
      const homeMapping: Record<string, string[]> = {
        'en': ['en-1', 'en-2', 'en-3'],
        'es': ['en-1', 'en-2', 'en-3'], // ES uses EN fallback
        'tr': ['tr-1', 'tr-2', 'tr-3'],
        'ru': ['ru-1', 'ru-2', 'ru-3'],
        'fr': ['fr-1', 'fr-2', 'fr-3'],
        'ar': ['ar-1', 'ar-2', 'ar-3']
      };

      const ids = homeMapping[currentLang] || homeMapping['en'];
      selectedReviews = GOOGLE_REVIEWS.filter(r => ids.includes(r.id));
      
      // Sort to match the order in ids array
      selectedReviews.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));

      const initialDisplay = selectedReviews.map(r => ({
        id: r.id,
        author: r.author,
        text: r.text,
        rating: r.rating,
        date: r.date,
        authorImage: r.authorImage
      }));

      setDisplayReviews(initialDisplay);

      // 2. API reviews are disabled for Home page to ensure strict mapping as requested
    }
    fetchHomeReviews()
  }, [currentLang])

  useSEO({ title: 'Premium Dental Clinic Istanbul | Dental Implants Turkey | Smile Makeover', description: 'FeRa Clinic - Istanbul\'s premier dental clinic. Specializing in dental implants, smile makeovers, and cosmetic dentistry. 15+ specialist dentists, 5,000+ international patients. Book your consultation today.' })

  return (
    <div className="bg-white">

      {/* 
      ══════════════════════════════════════
        HERO - PREMIUM ANIMATIONS & MOTION
      ══════════════════════════════════════ */}
      <section className="relative min-h-[580px] sm:min-h-[620px] md:min-h-[650px] lg:min-h-[70vh] flex items-start overflow-hidden" style={{ animationDelay: '1000ms' }}>
        {/* Enhanced Background with Animation */}
        <div className="absolute inset-0 z-0">
          <img
            src={getMedia("hero_home_main")}
            alt={t('alt.feraClinic', 'FeRa Clinic')}
            className="w-full h-full object-cover object-center"
            style={{ animation: 'heroZoomPan 15s ease-in-out infinite alternate' }}
            loading="eager"
            fetchPriority="high"
          />
          {/* Standardized Dark Overlay for Global Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 backdrop-blur-[1px]" />
        </div>

        {/* Premium Floating Glow Effect — overflow-safe: clipped by parent section's overflow-hidden */}
        <div className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#0B1C2D]/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-64 sm:h-64 bg-[#0B1C2D]/8 rounded-full blur-2xl animate-pulse pointer-events-none" style={{ animationDuration: '12s', animationDelay: '2s' }} />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 2xl:px-16 pt-20 sm:pt-24 md:pt-28 lg:pt-24 flex justify-between items-start lg:gap-8">
          {/* Standardized Darker Glass Content Card */}
          <motion.div
            className="hero-content-card w-full min-w-0 mb-10 max-w-full sm:max-w-[680px] lg:max-w-[860px] 2xl:max-w-[980px] bg-white/10 backdrop-blur-2xl rounded-[32px] p-5 sm:p-7 lg:p-9 shadow-2xl border border-white/20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Premium Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-[1px] bg-white/40" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest drop-shadow-md">{t('home.heroEyebrow')}</span>
            </motion.div>

            {/* Premium Heading - White with Shadow */}
            <div className="mb-6 max-w-3x">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] tracking-tight leading-[0.95]"
              >
                {t('home.heroTitleMain', 'Istanbul FeRa Clinic,')}
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] tracking-tight leading-[0.95]"
              >
                {t('home.heroTitleSub', 'World-Class Smiles')}
              </motion.h1>
            </div>

            {/* Enhanced Description - White/85 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="text-lg text-white/85 font-light leading-relaxed max-w-2xl mb-6 drop-shadow-sm"
            >
              {t('home.heroDesc')}
            </motion.p>

            {/* Premium CTA Buttons with Enhanced Hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-7"
            >
              {/* Primary CTA - Free Consultation with Pulse */}
              <Link to="/consultation" className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:min-w-[200px] lg:min-w-[220px] h-14 sm:h-16 px-6 sm:px-8 bg-[#0B1C2D] text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out flex items-center justify-center gap-3 group relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -3, boxShadow: "0 20px 40px rgba(11,28,45,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Subtle Pulse Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="uppercase tracking-widest relative z-10">{t('home.ctaPrimary')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 relative z-10" />
                </motion.button>
              </Link>

              {/* Secondary CTA - View Gallery */}
              <Link to="/gallery" className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:min-w-[200px] lg:min-w-[220px] h-14 sm:h-16 px-6 sm:px-8 bg-white/60 backdrop-blur-sm text-[#0B1C2D] text-sm font-bold rounded-full border border-[#0B1C2D]/30 shadow-md hover:bg-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-out flex items-center justify-center gap-3 group"
                  whileHover={{ scale: 1.02, y: -3, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="uppercase tracking-widest">{t('home.ctaSecondary')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Clean Trust Indicators with Staggered Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 sm:gap-8 text-white"
            >
              {[
                { icon: ShieldCheck, text: t('common.trustBadges.iso', 'ISO Certified') },
                { icon: Award, text: t('common.trustBadges.specialists', '15+ Specialist Dentists') },
                { icon: Users, text: t('common.trustBadges.patients', 'Thousands of Happy Patients') }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#0B1C2D]/10 flex items-center justify-center group-hover:bg-[#0B1C2D]/20 transition-colors duration-300">
                    <item.icon className="w-4 h-4 text-[#0B1C2D] group-hover:text-[#13293D] transition-colors duration-300" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide group-hover:text-[#13293D] transition-colors duration-300">{item.text}</span>
                  {index < 2 && <div className="w-px h-6 bg-[#0B1C2D]/20 hidden sm:block" />}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Call Form - Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block flex-shrink-0"
          >
            <HeroCallForm />
          </motion.div>
        </div>

        {/* Refined Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
        >
          <div className="text-[8px] font-bold text-white/40 uppercase tracking-[0.5em]">
            {t('navigation.discoverExcellence', 'Discover Excellence')}
          </div>
          <div className="w-[1.5px] h-14 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* Mobile/Tablet Hero Call Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        className="lg:hidden px-4 sm:px-6 py-10 sm:py-12 bg-gradient-to-b from-white to-[#f7faff] overflow-hidden"
      >
        <div className="max-w-md mx-auto w-full">
          <HeroCallForm />
        </div>
      </motion.div>

      {/* ── PREMIUM TRUST VERIFICATION BAR WITH ENTRANCE ANIMATION ── */}
      <motion.div
        className="bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] py-8 border-t border-white/10 relative z-20 shadow-inner"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-y-6 lg:gap-y-0 text-white/90 relative">
            {[
              { icon: 'check', text: t('stats.boardCertified', 'Board Certified') },
              { icon: 'users', text: t('stats.specialists', 'Specialist Doctors') },
              { icon: 'shield', text: t('common.lifetimeWarranty', 'Lifetime Warranty') },
              { icon: 'car', text: t('tourism.executiveTransfers', 'Executive Transfers') }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="flex flex-col items-center gap-2 group cursor-pointer relative"
              >
                {/* Icon Circle */}
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                  {item.icon === 'check' && (
                    <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {item.icon === 'users' && (
                    <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                  {item.icon === 'shield' && (
                    <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {item.icon === 'car' && (
                    <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4 4m4-4l-4-4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  )}
                </div>

                {/* Text */}
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80 group-hover:text-white transition-all duration-300 text-center">
                  {item.text}
                </span>

                {/* Subtle Divider for Desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-white/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <SectionWrapper padding="py-24 lg:py-32" background="white">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[#0B1C2D]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B1C2D]/60 block">
                  {t('home.whyChooseUs')}
                </span>
              </div>
              <h2 className="text-4xl lg:text-[56px] font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.05]">
                {t('home.precisionCare')} <br />
                <span className="text-[#5f8bc4]/70 italic font-light">{t('home.premiumCare')}</span>
              </h2>
            </div>

            <p className="text-xl text-[#64748B] font-light leading-relaxed max-w-xl">
              {t('home.precisionDesc')}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {getReasons(t).map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                >
                  <div className="p-8 bg-white border border-[rgba(11,28,45,0.08)] rounded-[2rem] shadow-[0_15px_45px_rgba(11,28,45,0.06)] hover:shadow-[0_25px_60px_rgba(11,28,45,0.12)] hover:-translate-y-2 transition-all duration-500 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#0B1C2D]/5 text-[#0B1C2D] flex items-center justify-center mb-6 group-hover:bg-[#0B1C2D] group-hover:text-white transition-all duration-500 shadow-sm">
                      <r.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0B1C2D] uppercase tracking-widest mb-3 group-hover:text-[#162e45] transition-colors duration-300">
                      {r.title}
                    </h3>
                    <p className="text-sm text-[#64748B] font-light leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative rounded-[2.5rem] shadow-[0_40px_100px_rgba(11,28,45,0.15)] overflow-hidden group">
              <img
                src="/images/fera-clinic/clinic/waiting-area.webp"
                alt={t('alt.homeInterior', 'FeRa Clinic Interior')}
                className="w-full h-[600px] lg:h-[750px] object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
              />

              <motion.div
                className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl p-8 max-w-[260px]"
                whileHover={{ y: -8 }}
              >
                <div className="w-12 h-12 bg-[#0B1C2D] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-[10px] font-bold text-[#0B1C2D]/40 uppercase tracking-[0.2em] mb-2">{t('home.clinicalProtocol', 'Clinical Protocol')}</p>
                <p className="text-sm font-bold text-[#0B1C2D] leading-tight tracking-tight">
                  {t('home.euCertified', 'EU Certified Sterilization Standards')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="py-24 lg:py-32" background="gray">
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-[#0B1C2D]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B1C2D]/60 block">
                {t('home.technology.title')}
              </span>
            </div>
            <h2 className="text-4xl lg:text-[56px] font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.05]">
              {t('home.technology.subtitle')}
            </h2>
          </div>
          <p className="text-xl text-[#64748B] font-light max-w-md leading-relaxed">
            {t('home.technology.desc')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {[
            { id: 't1', number: '01', icon: ScanLine, title: t('home.technology.t1') },
            { id: 't2', number: '02', icon: Sparkles, title: t('home.technology.t2') },
            { id: 't3', number: '03', icon: Zap, title: t('home.technology.t3') }
          ].map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1, ease: "easeOut" }}
            >
              <div className="bg-white p-10 rounded-[2.5rem] border border-[rgba(11,28,45,0.08)] shadow-[0_15px_45px_rgba(11,28,45,0.06)] hover:shadow-[0_25px_60px_rgba(11,28,45,0.12)] hover:-translate-y-2 transition-all duration-700 ease-out group h-full">
                <div className="flex items-center justify-between mb-10">
                  <span className="text-5xl font-serif font-light text-[#0B1C2D]/10 group-hover:text-[#0B1C2D]/20 transition-colors duration-500">
                    {item.number}
                  </span>
                  <div className="w-16 h-16 rounded-2xl bg-[#0B1C2D]/5 group-hover:bg-[#0B1C2D] group-hover:text-white group-hover:rotate-[360deg] transition-all duration-1000 flex items-center justify-center shadow-sm">
                    <item.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#0B1C2D] mb-4 tracking-tight group-hover:text-[#162e45] transition-colors duration-300">
                  {t(`home.technology.${item.id}`)}
                </h3>
                <p className="text-[#64748B] font-light leading-relaxed">
                  {t(`home.technology.${item.id}Desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper padding="py-24 lg:py-32" background="white">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#0B1C2D]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B1C2D]/60 block">
              {t('home.treatments.title')}
            </span>
            <div className="w-12 h-[1px] bg-[#0B1C2D]" />
          </div>
          <h2 className="text-4xl lg:text-[64px] font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.05] mb-8">
            {t('home.treatments.title')}
          </h2>
          <p className="text-xl text-[#64748B] font-light leading-relaxed max-w-2xl mx-auto">
            {t('home.treatments.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {getFeaturedTreatments(t).map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
            >
              <TreatmentCard
                title={treatment.title}
                description={treatment.description}
                image={treatment.image}
                category={treatment.category}
                href={`/treatments/${treatment.slug}`}
                duration={treatment.duration}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <Link to="/treatments">
            <motion.button
              className="inline-flex items-center gap-4 px-12 py-5 bg-[#0B1C2D] text-white text-sm font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 ease-out group uppercase tracking-widest"
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(11,28,45,0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{t('common.viewAll')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper padding="py-24 lg:py-32" background="navy">
        <div className="max-w-4xl mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-white/20" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60 block">
              {t('home.realResults')}
            </span>
          </div>
          <h2 className="text-4xl lg:text-[64px] font-serif font-bold text-white tracking-tight leading-[1.05] mb-8">
            {t('common.beforeAndAfter')}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl font-light leading-relaxed">
            {t('home.beforeAfterDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {getBeforeAfterCases(t).map((c, i) => (
            <BeforeAfterCard key={i} caseData={c} index={i} t={t} />
          ))}
        </div>

        <div className="mt-20 lg:mt-24 flex justify-center">
          <Link to="/gallery">
            <motion.button
              className="inline-flex items-center gap-4 px-12 py-5 bg-white text-[#0B1C2D] text-sm font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 ease-out group uppercase tracking-widest"
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{t('home.viewFullGallery')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </Link>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="py-24 lg:py-32" background="white">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="grid grid-cols-2 gap-8">
              <motion.div
                className="group cursor-pointer"
                whileHover={{ y: -8 }}
              >
                <img
                  src="/images/fera-clinic/clinic/surgery-room.webp"
                  alt={t('alt.surgicalSuite', 'FeRa Clinic surgical suite')}
                  className="rounded-[2rem] object-cover w-full aspect-[4/3] shadow-xl group-hover:shadow-2xl transition-all duration-500"
                />
              </motion.div>
              <motion.div
                className="group cursor-pointer mt-12"
                whileHover={{ y: -8 }}
              >
                <img
                  src="/images/fera-clinic/clinic/reception.webp"
                  alt={t('alt.reception', 'FeRa Clinic reception')}
                  className="rounded-[2rem] object-cover w-full aspect-[4/3] shadow-xl group-hover:shadow-2xl transition-all duration-500"
                />
              </motion.div>
            </div>
            <motion.div
              className="group cursor-pointer"
              whileHover={{ y: -8 }}
            >
              <img
                src="/images/fera-clinic/clinic/waiting-area-2.webp"
                alt={t('alt.waitingArea', 'FeRa Clinic waiting area')}
                className="rounded-[3rem] object-cover w-full h-[450px] shadow-2xl group-hover:shadow-2xl transition-all duration-500"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[#0B1C2D]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B1C2D]/60 block">
                  {t('home.institutionalExcellence')}
                </span>
              </div>
              <h2 className="text-4xl lg:text-[56px] font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.05]">
                {t('home.istanbulSurgicalHub')} <br />
                <span className="text-[#5f8bc4]/70 italic font-light">{t('home.globalDentistry')}</span>
              </h2>
            </div>
            <p className="text-xl text-[#64748B] font-light leading-relaxed max-w-xl">
              {t('home.institutionalDesc')}
            </p>
            <div className="grid gap-6">
              {[
                { title: t('home.accreditation1.title'), desc: t('home.accreditation1.desc') },
                { title: t('home.accreditation2.title'), desc: t('home.accreditation2.desc') }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 p-8 bg-[#F4F7FA]/50 rounded-[2rem] border border-[rgba(11,28,45,0.05)]">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0B1C2D]">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1C2D] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#64748B] leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 
      ══════════════════════════════════════
        VERIFIED PATIENT EXPERIENCES
      ══════════════════════════════════════ */}
      <SectionWrapper padding="py-24 lg:py-32" background="white">
        <div className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#0B1C2D]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B1C2D]/60 block">
              {t('home.patientTestimonials')}
            </span>
            <div className="w-12 h-[1px] bg-[#0B1C2D]" />
          </div>
          <h2 className="text-4xl lg:text-[64px] font-serif font-bold text-[#0B1C2D] mb-8 leading-[1.05]">
            {t('home.whatOurPatientsSay')}
          </h2>
          <p className="text-xl text-[#64748B] leading-relaxed font-light max-w-2xl mx-auto">
            {t('home.realOutcomes')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayReviews.map((review, i) => (
            <motion.div
              key={review.id}
              className={`relative rounded-3xl p-8 lg:p-10 flex flex-col gap-6
                         bg-white border border-slate-200/60
                         shadow-sm hover:shadow-xl transition-all duration-500 
                         group ${currentLang === 'ar' ? 'text-right' : ''}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Google Badge/Logo at top */}
              <div className={`flex items-center ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <img 
                  src="/images/fera-clinic/testimonials/google-review.png" 
                  alt="Google" 
                  className="w-24 h-auto opacity-90" 
                />
              </div>

              {/* Review Text */}
              <div className="flex-grow">
                <p className="text-base lg:text-lg text-slate-700 leading-relaxed font-normal">
                  "{review.text[currentLang as keyof typeof review.text] || review.text.en}"
                </p>
              </div>

              {/* Patient footer - Author Row */}
              <div className={`flex items-center gap-4 pt-6 border-t border-slate-100 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm bg-slate-100 flex items-center justify-center">
                    {review.authorImage ? (
                      <img src={review.authorImage} alt={review.author[currentLang as keyof typeof review.author] || review.author.en} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-lg font-bold text-slate-400">
                        {(review.author[currentLang as keyof typeof review.author] || review.author.en || '?').charAt(0).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-5 h-5 bg-[#0B1C2D] rounded-full flex items-center justify-center border-2 border-white`}>
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="text-base font-bold text-[#0B1C2D] truncate leading-tight mb-0.5">
                    {review.author[currentLang as keyof typeof review.author] || review.author.en}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#0B1C2D]/40">
                    Google Review
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews CTAs */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/medical-google-reviews">
            <Button
              className="px-10 h-16 bg-[#0B1C2D] text-white hover:bg-[#1a3a5a] rounded-full font-bold text-sm uppercase tracking-widest shadow-xl transition-all duration-300"
            >
              {t('testimonials.readAllGoogleReviews')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="px-10 h-16 border-[#0B1C2D]/20 hover:border-[#0B1C2D] hover:bg-[#0B1C2D] hover:text-white text-[#0B1C2D] rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 group"
            >
              <span className="group-hover:text-white transition-colors">{t('testimonials.writeGoogleReview')}</span>
              <ExternalLink className="w-4 h-4 ml-2 opacity-60 group-hover:opacity-100 transition-opacity" />
            </Button>
          </a>
        </div>


        <div className="mt-24 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="mb-10 lg:mb-12 flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-[#0B1C2D]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B1C2D]/60 block">{t('home.trustBadgeLabel')}</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-[#0B1C2D] mb-6">
                {t('home.trustedByGlobal')}
              </h3>
              <p className="text-lg text-[#64748B] leading-relaxed font-light max-w-2xl">
                {t('home.trustedDesc')}
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-10">
              <a
                href="https://g.page/r/CecRcyst1LmcEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-[1.03] transition-transform duration-300"
              >
                <img src="/google.png" alt={t('home.googleAlt', 'Google')} className="w-[220px] lg:w-[260px] object-contain" />
              </a>

              <a
                href="https://www.trustpilot.com/evaluate/feraclinic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-[1.03] transition-transform duration-300"
              >
                <img src="/trustpilot-badge.svg" alt={t('home.trustpilotAlt', 'Trustpilot')} className="w-[220px] lg:w-[260px] object-contain" />
              </a>

              <div className="hover:scale-[1.03] transition-transform duration-300">
                <img src="/reviewsio-badge.png" alt={t('home.reviewsAlt', 'Reviews.io')} className="w-[240px] lg:w-[280px] object-contain" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] rounded-[2.5rem] p-10 lg:p-14 text-white flex flex-col transition-all duration-500 shadow-[0_30px_90px_rgba(11,28,45,0.15)]"
          >
            <div className="mb-10 lg:mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-white/20" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60 block">{t('home.socialJourneyLabel')}</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-white">
                {t('home.followExcellence')}
              </h3>
              <p className="text-lg text-white/80 leading-relaxed font-light">
                {t('home.exploreUpdates')}
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {[
                { icon: MapPin, label: t('common.location'), value: t('common.locationValue'), href: 'https://goo.gl/maps/...' },
                { icon: Phone, label: t('common.whatsapp'), value: '+90 536 746 01 00', href: 'tel:+905367460100' },
                { icon: Mail, label: t('common.email'), value: 'consultation@feraclinic.com', href: 'mailto:consultation@feraclinic.com' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white text-[#0B1C2D] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-0.5">{item.label}</p>
                    <p className="text-sm font-bold text-white tracking-tight">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/feradentalclinic/' },
                { icon: Instagram, href: 'https://www.instagram.com/feraclinic' },
                { icon: Youtube, href: 'https://www.youtube.com/@feraclinic' },
                { icon: Linkedin, href: 'https://www.linkedin.com/company/fera-clinic/posts/?feedView=all' },
                { icon: TikTokIcon, href: 'https://www.tiktok.com/@feraclinic' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white/80 hover:bg-white hover:text-[#0B1C2D] hover:-translate-y-1 transition-all duration-500 shadow-sm"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="py-12 lg:py-16" background="gray">
        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
          {[
            {
              logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Logo_of_Ministry_of_Health_%28Turkey%29.png",
              title: t('home.trustBadge1'),
              label: t('home.trustBadge1Label')
            },
            {
              logo: "https://upload.wikimedia.org/wikipedia/tr/d/d6/USHAS_company_logo.png",
              title: t('home.trustBadge2'),
              label: t('home.trustBadge2Label')
            },
            {
              logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Ministry_of_Culture_and_Tourism_%28Turkey%29_logo.svg",
              title: t('home.trustBadge3'),
              label: t('home.trustBadge3Label')
            }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center p-4 shadow-sm border border-[rgba(11,28,45,0.05)] group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0B1C2D]/40 mb-1">{item.label}</span>
                <span className="text-sm font-bold text-[#0B1C2D] leading-tight max-w-[180px]">
                  {item.title}
                </span>
              </div>
              {idx < 2 && <div className="hidden xl:block h-10 w-[1px] bg-[#0B1C2D]/10 ms-10" />}
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper padding="py-24 lg:py-32" background="white">
        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative z-10"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#0B1C2D]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B1C2D]/60 block">
                {t('home.insideClinicLabel')}
              </span>
              <div className="w-12 h-[1px] bg-[#0B1C2D]" />
            </div>
            <h2 className="text-4xl lg:text-[64px] font-serif font-bold text-[#0B1C2D] tracking-tight mb-8 leading-[1.05]">
              {t('home.insideClinicTitle')}
            </h2>
            <p className="text-xl text-[#64748B] font-light leading-relaxed mb-16 max-w-3xl mx-auto">
              {t('home.insideClinicDesc')}
            </p>

            <motion.div
              whileHover={{ y: -8 }}
              onClick={() => setIsVideoOpen(true)}
              className="relative aspect-video rounded-[3rem] overflow-hidden shadow-[0_40px_120px_rgba(11,28,45,0.25)] transition-all duration-700 cursor-pointer group border border-[rgba(11,28,45,0.1)]"
            >
              <img
                src={getMedia('clinic_waiting')}
                alt={t('alt.patientJourney', 'Patient Journey Preview')}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <Play className="w-10 h-10 text-[#0B1C2D] fill-[#0B1C2D] ml-1.5" />
                </div>
              </div>

              <div className="absolute bottom-10 left-10 flex items-center gap-4 bg-[#0B1C2D]/90 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <div className="w-2.5 h-2.5 rounded-full bg-[#7CC4FF] animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">
                  {t('home.experience.exclusiveTour', 'Exclusive Clinical Tour')}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 md:p-6"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-[#0B1C2D] shadow-xl hover:scale-110 transition-transform duration-300"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/3lq84rIyLDE"
                title={t('home.videoTitle', 'FeRa Clinic Patient Experience')}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SectionWrapper padding="py-24 lg:py-32" background="gray">
        <div className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-[0_40px_120px_rgba(11,28,45,0.08)] border border-[rgba(11,28,45,0.08)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4F7FA] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 select-none pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[#0B1C2D]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B1C2D]/60 block">
                  {t('home.newsletter.title')}
                </span>
              </div>
              <h2 className="text-4xl lg:text-[56px] font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.05]">
                {t('home.newsletter.subtitle')}
              </h2>
              <p className="text-xl text-[#64748B] font-light leading-relaxed">
                {t('home.newsletter.desc')}
              </p>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F4F7FA]/50 border border-[rgba(11,28,45,0.05)] w-fit">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#0B1C2D]" />
                </div>
                <span className="text-sm font-bold text-[#0B1C2D] uppercase tracking-widest">{t('home.newsletter.trust')}</span>
              </div>
            </div>

            <div className="w-full">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const email = (e.target as any).email.value;
                  if (email && !newsletterLoading) {
                    setNewsletterLoading(true);
                    try {
                      await submitLead({
                        form_type: 'Newsletter',
                        email: email,
                      });
                      alert(t('home.newsletter.success', 'Thank you for subscribing!'));
                      (e.target as any).reset();
                    } catch (err: any) {
                      alert(err.message || 'Subscription failed. Please try again.');
                    } finally {
                      setNewsletterLoading(false);
                    }
                  }
                }}
                className="flex flex-col gap-6"
              >
                <div className="relative group">
                  <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-[#0B1C2D]/40 group-focus-within:text-[#0B1C2D] transition-colors" />
                  </div>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder={t('home.newsletter.emailPlaceholder')}
                    className="w-full h-20 rounded-[1.5rem] border border-[rgba(11,28,45,0.1)] bg-[#F4F7FA]/50 px-20 text-lg text-[#0B1C2D] outline-none transition-all duration-500 focus:border-[#0B1C2D] focus:bg-white focus:ring-4 focus:ring-[#0B1C2D]/5 placeholder:text-gray-400 shadow-inner"
                  />
                </div>
                <button
                  type="submit"
                  disabled={newsletterLoading}
                  className="w-full h-20 bg-[#0B1C2D] text-white font-bold rounded-[1.5rem] hover:bg-[#162e45] transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 uppercase tracking-[0.2em] flex items-center justify-center gap-4 group"
                >
                  {newsletterLoading ? t('common.loading', 'Please wait...') : (
                    <>
                      <span>{t('home.newsletter.subscribe')}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="py-24 lg:py-32" background="white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#0B1C2D]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B1C2D]/60 block">
              {t('home.faq.label')}
            </span>
            <div className="w-12 h-[1px] bg-[#0B1C2D]" />
          </div>
          <h2 className="text-4xl lg:text-[56px] font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.05] mb-8">
            {t('home.faq.title')}
          </h2>
          <p className="text-xl text-[#64748B] font-light leading-relaxed">
            {t('home.faq.desc')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {getFaqs(t).map((faq, idx) => (
            <FAQItem
              key={idx}
              faq={faq}
              index={idx}
              openIndex={openFaq}
              setOpenIndex={setOpenFaq}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper padding="py-24 lg:py-32" background="navy">
        <div className="bg-transparent rounded-[3rem] px-12 lg:px-24 py-24 lg:py-32 text-center max-w-[1400px] mx-auto relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-[0.03] blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white opacity-[0.02] blur-[100px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 space-y-12">
            <div className="flex flex-col items-center gap-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl lg:text-[72px] font-serif font-bold text-white tracking-tight leading-[1.05] max-w-4xl mx-auto">
                {t('home.ctaTitle1')} <br />
                <span className="italic font-light opacity-80">{t('home.ctaTitle2')}</span>
              </h2>
            </div>

            <p className="text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
              {t('home.readyToGetStartedDesc')}
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
              <a href={`https://wa.me/${t('common.whatsappNumber', '905367460100')}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
      </SectionWrapper>

    </div>
  )
}
