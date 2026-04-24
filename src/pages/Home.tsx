import { useState } from 'react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { ArrowRight, ShieldCheck, Award, Users, Clock, Star, Globe, CheckCircle, Phone, Facebook, Instagram, Youtube, Linkedin, Building, Play, X } from 'lucide-react'
import { TreatmentCard } from '../components/ui/TreatmentCard'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { Button } from '../components/ui/button'

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
    description: t('home.treatments.0.desc', 'Premium titanium implants with lifetime warranty. The permanent solution for missing teeth with natural-looking results and 3D guided surgery.'),
    image: '/images/fera-clinic/treatments/implant-procedure.webp',
    duration: t('treatments.detail.implants.duration', '1–2 Hours')
  },
  {
    id: '2',
    slug: 'hollywood-smile',
    title: t('treatments.veneers', 'Porcelain Veneers'),
    category: t('treatments.categories.cosmetic', 'Cosmetic'),
    description: t('home.treatments.1.desc', 'Custom-designed porcelain veneers for a perfect Hollywood smile with minimal tooth preparation and stain-resistant ceramic.'),
    image: '/images/fera-clinic/treatments/veneer-procedure.webp',
    duration: t('treatments.detail.hollywood.duration', '2–3 Visits')
  },
  {
    id: '3',
    slug: 'all-on-four',
    title: t('treatments.allOn4', 'All-on-4 Implants'),
    category: t('treatments.categories.restorative', 'Restorative'),
    description: t('home.treatments.2.desc', 'Full arch restoration with just 4 implants. Same-day teeth with immediate function and beautiful, natural-looking aesthetics.'),
    image: '/images/fera-clinic/treatments/implant-procedure.webp',
    duration: t('treatments.detail.ortho.duration', '1 Day')
  }
]

/* ─── WHY FERA ─── */
const getReasons = (t: any) => [
  {
    icon: ShieldCheck,
    title: t('home.reasons.sterilization.title', 'European-Standard Sterilization'),
    desc: t('home.reasons.sterilization.desc', 'Class-B autoclave systems and HEPA-filtered surgical suites in every treatment room.')
  },
  {
    icon: Clock,
    title: t('home.reasons.planning.title', '3D Treatment Planning'),
    desc: t('home.reasons.planning.desc', 'CBCT imaging and digital smile design completed before any clinical procedure begins.')
  },
  {
    icon: Star,
    title: t('home.reasons.doctors.title', 'Specialist Doctors Only'),
    desc: t('home.reasons.doctors.desc', 'Every procedure is performed by a doctor holding an advanced degree in their specialty.')
  },
  {
    icon: Globe,
    title: t('home.reasons.coordination.title', 'Full International Coordination'),
    desc: t('home.reasons.coordination.desc', 'Dedicated case coordinator, VIP transfers, and hotel booking for international patients.')
  }
]

/* ─── STATS ─── */
const getStats = (t: any) => [
  { value: '12+', label: t('stats.experience', 'Years of Experience') },
  { value: '5,000+', label: t('stats.patients', 'International Patients') },
  { value: '98%', label: t('stats.satisfaction', 'Satisfaction Rate') },
  { value: '12', label: t('stats.specialists', 'Specialist Doctors') },
]

/* ─── TESTIMONIALS ─── */
const getTestimonials = (t: any) => [
  {
    name: 'Elena M.',
    country: t('common.countries.italy', 'Italy'),
    flag: '🇮🇹',
    treatment: t('treatments.veneers', 'Porcelain Veneers'),
    text: t('home.testimonials.t1', 'From digital design to final placement, the precision was outstanding. Completed in 5 days as promised. I am beyond happy with my new smile.'),
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5
  },
  {
    name: 'David T.',
    country: t('common.countries.uk', 'United Kingdom'),
    flag: '🇬🇧',
    treatment: t('treatments.allOn4', 'All-on-4 Restoration'),
    text: t('home.testimonials.t2', 'A highly professional surgical environment. The All-on-4 protocol was explained at every stage. Airport transfers and hotel coordination were seamless.'),
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5
  },
  {
    name: 'Sarah S.',
    country: t('common.countries.germany', 'Germany'),
    flag: '🇩🇪',
    treatment: t('treatments.crowns', 'Zirconium Crowns'),
    text: t('home.testimonials.t3', 'I chose FeRa for their focus on medical precision. The result is completely natural and functional. The follow-up care exceeded all my expectations.'),
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5
  },
  // {
  //   name: 'Michael R.',
  //   country: t('common.countries.usa', 'United States'),
  //   flag: '🇺🇸',
  //   treatment: t('treatments.implants', 'Full Mouth Restoration'),
  //   text: t('home.testimonials.t4', 'The surgical precision and modern facilities at FeRa were impressive. My full mouth restoration was handled with immense care and professional coordination.'),
  //   image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
  //   rating: 5
  // },
  // {
  //   name: 'Sophie L.',
  //   country: t('common.countries.france', 'France'),
  //   flag: '🇫🇷',
  //   treatment: t('treatments.veneers', 'E-Max Veneers'),
  //   text: t('home.testimonials.t5', 'An incredible aesthetic result. The doctors took the time to design a smile that looks completely natural and fits my face perfectly. Merci to the whole team.'),
  //   image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200&h=200',
  //   rating: 5
  // },
  // {
  //   name: 'James W.',
  //   country: t('common.countries.canada', 'Canada'),
  //   flag: '🇨🇦',
  //   treatment: t('treatments.smileMakeover', 'Smile Makeover'),
  //   text: t('home.testimonials.t6', 'Traveling from Canada was the best decision for my dental health. The level of specialization here is world-class, and the patient journey was effortless.'),
  //   image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
  //   rating: 5
  // },
]

/* ─── BEFORE / AFTER CASES ─── */
const getBeforeAfterCases = (t: any) => [
  {
    label: t('treatments.smileMakeover', 'Hollywood Smile'),
    before: '/images/fera-clinic/before-after/case1-before.jpg',
    after: '/images/fera-clinic/before-after/case1-after.jpg',
  },
  {
    label: t('treatments.implants', 'Dental Implants'),
    before: '/images/fera-clinic/before-after/case2-before.jpg',
    after: '/images/fera-clinic/before-after/case2-after.jpg',
  },
  {
    label: t('treatments.crowns', 'Zirconium Crowns'),
    before: '/images/fera-clinic/before-after/case3-before.jpg',
    after: '/images/fera-clinic/before-after/case3-after.jpg',
  },
  {
    label: t('treatments.orthodontics', 'Orthodontic Alignment'),
    before: '/images/fera-clinic/before-after/case4-before.jpg',
    after: '/images/fera-clinic/before-after/case4-after.jpg',
  },
  {
    label: t('treatments.allOn4', 'Surgical Full Arch'),
    before: '/images/fera-clinic/before-after/case5-before.jpg',
    after: '/images/fera-clinic/before-after/case5-after.jpg',
  },
  {
    label: t('gallery.cases.c1.title', 'Full Aesthetic Reconstruction'),
    before: '/images/fera-clinic/before-after/case1-before.jpg',
    after: '/images/fera-clinic/before-after/case1-after.jpg',
  },
]

/* ─── BEFORE / AFTER CARD SUB-COMPONENT ─── */
const BeforeAfterCard = ({ caseData, index, t }: { caseData: any, index: number, t: any }) => {
  const [revealed, setRevealed] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => setRevealed(r => !r)}
      className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/3] cursor-pointer
                 shadow-luxury-lg border border-white/10 hover:border-white/30 hover:scale-[1.01] transition-all duration-300 ease-in-out"
      role="button"
      aria-label={`${caseData.label} — tap to reveal result`}
    >
      {/* AFTER (base layer) */}
      <img
        src={caseData.after}
        alt={`${caseData.label} — After`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-500 ease-out"
      />

      {/* BEFORE (slides right) */}
      <div
        className={[
          'absolute inset-0 w-full h-full transition-transform duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
          revealed ? 'rtl:-translate-x-full ltr:translate-x-full' : 'translate-x-0 group-hover:rtl:-translate-x-full group-hover:ltr:translate-x-full'
        ].join(' ')}
      >
        <img
          src={caseData.before}
          alt={`${caseData.label} — Before`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        {/* Label strip */}
        <div className="absolute top-6 start-6 z-20 transition-all duration-300">
          <span className="bg-white/95 backdrop-blur-md text-[#1b4698] px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm">
            {t('common.before', 'Clinical Baseline')}
          </span>
        </div>
      </div>

      {/* After Label */}
      <div className={[
        'absolute top-6 start-6 z-10 transition-all duration-500 delay-300',
        revealed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
      ].join(' ')}>
        <span className="bg-white text-[#1b4698] px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm">
          {t('common.after', 'Protocol Outcome')}
        </span>
      </div>

      {/* Divider */}
      <div className={[
        'absolute inset-y-0 end-0 w-[1.5px] bg-white/40 z-10 transition-opacity duration-500',
        revealed ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
      ].join(' ')} />

      {/* Info Overlay */}
      <div className="absolute bottom-0 inset-x-0 p-10 z-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300">
        <p className="text-white text-2xl font-bold tracking-tight mb-2">{caseData.label}</p>
        <p className="text-white/60 text-[10px] uppercase tracking-[0.25em] font-bold">
          {revealed ? t('common.tapToSeeBefore', 'Click to revert') : t('common.tapToReveal', 'Hover or tap to reveal')}
        </p>
      </div>
    </motion.div>
  )
}

/* ─── FAQ DATA & COMPONENT ─── */
const getFaqs = (t: any) => [
  {
    question: t('home.faq.q1', 'Am I a good candidate for dental implants?'),
    answer: t('home.faq.a1', 'Ideal candidates have healthy gums and sufficient bone density. During your initial consultation and 3D CBCT scan, our specialists will evaluate your bone structure to ensure precise, long-lasting implant placement.')
  },
  {
    question: t('home.faq.q2', 'How long does a Hollywood Smile treatment usually take?'),
    answer: t('home.faq.a2', 'A complete Hollywood Smile using porcelain veneers or zirconium crowns is typically completed in 5 to 7 days, requiring only 2 or 3 clinic visits in Istanbul.')
  },
  {
    question: t('home.faq.q3', 'Are zirconium crowns natural-looking?'),
    answer: t('home.faq.a3', 'Yes. Zirconium is highly durable and reflects light similarly to natural tooth enamel. Our digital smile design ensures the shade, shape, and transparency perfectly match your facial structure.')
  },
  {
    question: t('home.faq.q4', 'Is the consultation process suitable for international patients?'),
    answer: t('home.faq.a4', 'Absolutely. We offer comprehensive virtual consultations. By reviewing your dental photos and x-rays online, our medical coordinators can provide a highly accurate preliminary treatment plan and timeline before you travel.')
  },
  {
    question: t('home.faq.q5', 'Will my treatment plan be personalized?'),
    answer: t('home.faq.a5', 'Every patient receives a fully bespoke protocol. We use advanced digital imaging to tailor the procedure to your unique anatomical needs, ensuring both functional stability and aesthetic perfection.')
  },
  {
    question: t('home.faq.q6', 'How many days should I stay in Istanbul for treatment?'),
    answer: t('home.faq.a6', 'For cosmetic procedures like veneers, 5-7 days is sufficient. For surgical implants, a 3-4 day initial visit is needed, followed by a second 7-day visit after the healing period. We coordinate your entire itinerary.')
  }
]

const FAQItem = ({ faq, index, openIndex, setOpenIndex }: { faq: any, index: number, openIndex: number | null, setOpenIndex: (i: number | null) => void }) => {
  const isOpen = openIndex === index
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white shadow-luxury-lg' : 'bg-gray-50/50 hover:bg-white hover:shadow-luxury-sm'}`}
    >
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full px-8 py-6 flex items-center justify-between text-start focus:outline-none"
      >
        <span className={`text-lg font-semibold tracking-tight transition-colors duration-300 pe-4 ${isOpen ? 'text-[#008BC9]' : 'text-[#1b4698]'}`}>
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'border-[#008BC9] bg-[#008BC9] text-white rotate-180' : 'border-gray-200 text-gray-400'}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-8 pt-2 text-[#6B7280] leading-relaxed font-light text-[15px]">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  )
}

export const Home = () => {
  const { t } = useTranslation()
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  console.log("PAGE LOADED: Home")
  useSEO({ title: t('navigation.home'), description: t('hero.subtitle') })

  return (
    <div className="bg-white">

      {/* 
══════════════════════════════════════
  HERO - UNIFIED SYSTEM
══════════════════════════════════════ */}
      <section className="relative min-h-[780px] md:min-h-[820px] lg:min-h-[92vh] flex items-start overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fera-clinic/hero/Anasafya-scaled-3.webp"
            alt={t('alt.feraClinic', 'FeRa Clinic')}
            className="w-full h-full object-cover object-[center_35%] scale-[1.03]"
            style={{ animation: 'heroZoom 45s linear infinite alternate' }}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-1 bg-gradient-to-r rtl:bg-gradient-to-l from-white/60 via-white/5 to-transparent" />        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 lg:px-10 2xl:px-16 pt-24 sm:pt-28 md:pt-32 lg:pt-24 flex justify-start">
          <div className="w-full max-w-[94vw] sm:max-w-[680px] lg:max-w-[860px] 2xl:max-w-[1080px] bg-white/55 backdrop-blur-md rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            {/* Trust Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 mb-5 sm:mb-6"
            >
              <div className="w-8 sm:w-10 h-[1px] bg-fera-accent" />
              <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-fera-accent uppercase tracking-[0.25em]">{t('home.heroEyebrow', 'Institutional Excellence')}</span>
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

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[15px] sm:text-base lg:text-lg text-fera-deep/90 max-w-[58ch] font-normal leading-[1.75] mb-8"
            >
              {t('home.heroDesc', 'Redefining the standard of biological dentistry through the marriage of clinical precision and patient-centered luxury.')}
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
                  <span className="uppercase tracking-widest text-sm font-bold">{t('home.ctaPrimary', 'Free Consultation')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300" />
                </Button>
              </Link>

              <Link to="/gallery" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  variant="outline"
                  className="w-full sm:min-w-[260px] h-12 sm:h-14 px-12 group active-press"
                >
                  <span className="uppercase tracking-widest text-sm font-bold">{t('home.ctaSecondary', 'View Gallery')}</span>
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

        {/* Cinematic Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4">
          <div className="text-[8px] font-bold text-white/30 uppercase tracking-[0.5em]">
            {t('navigation.gallery', 'Sculpting Smiles')}
          </div>
          <div className="w-[1.5px] h-14 bg-gradient-to-b from-[#008BC9] to-transparent" />
        </div>
      </section>

      {/* ── TRUST VERIFICATION BAR ── */}
      <div className="bg-fera-deep py-4 sm:py-5 border-b border-white/5 relative z-20">
        <div className="container-std px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8 lg:justify-between text-white/40">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em]">
                {t('stats.certified', 'ISO-9001 Certified Clinic')}
              </span>
            </div>

            <div className="w-px h-4 bg-white/10 hidden lg:block" />

            <div className="flex items-center gap-3">
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em]">
                {t('stats.specialists', '15+ Specialist Surgeons')}
              </span>
            </div>

            <div className="w-px h-4 bg-white/10 hidden lg:block" />

            <div className="flex items-center gap-3">
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em]">
                {t('common.lifetimeWarranty', 'Lifetime Surgical Warranty')}
              </span>
            </div>

            <div className="w-px h-4 bg-white/10 hidden lg:block" />

            <div className="flex items-center gap-3">
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em]">
                {t('home.tourism.vip', 'VIP Medical Concierge')}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*
      ══════════════════════════════════════
        WHY FERA — INSTITUTIONAL QUALITY
      ══════════════════════════════════════ */}
      <section className="section bg-white relative overflow-hidden border-t border-gray-100/50">
        <div className="container-std relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <ScrollReveal type="heading">
                <span className="section-label">{t('home.whyChooseUs', 'Clinical Excellence')}</span>
                <h2 className="section-heading mb-8">
                  {t('home.precisionCare', 'Medical Precision.')} <br />
                  <span className="text-fera-primary/30 italic font-light">{t('home.premiumCare', 'Premium Care.')}</span>
                </h2>
              </ScrollReveal>
              <p className="section-body mb-16 leading-[1.7]">
                {t('home.precisionDesc', 'Every treatment at FeRa Clinic follows international protocols with specialist-only care, advanced diagnostics, and complete transparency at every step.')}
              </p>

              <div className="grid sm:grid-cols-2 gap-10">
                {getReasons(t).map((r, i) => (
                  <ScrollReveal key={i} type="card" delay={i * 80}>
                    <div className="group">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#1b4698] group-hover:text-white transition-all duration-500">
                        <r.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1b4698] uppercase tracking-widest mb-3">{r.title}</h3>
                      <p className="text-[13px] text-[#6B7280]/60 font-light leading-relaxed">{r.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="relative p-10 bg-fera-surface/30 rounded-luxury-xl border border-fera-border/30">
              <img
                src="/images/fera-clinic/clinic/waiting-area.webp"
                alt={t('alt.homeInterior', 'FeRa Clinic Interior')}
                className="w-full h-[650px] object-cover rounded-luxury-lg shadow-luxury-xl grayscale-[0.1] hover:grayscale-0 transition-all duration-[2000ms] ease-out"
              />
              <div className="absolute top-16 end-16 surface-glass p-8 rounded-2xl max-w-[200px] transition-transform hover:-translate-y-1 duration-500">
                <CheckCircle className="w-6 h-6 text-fera-primary mb-4" />
                <p className="text-[10px] font-bold text-fera-deep uppercase tracking-[0.2em] leading-relaxed">
                  {t('home.euCertified', 'EU Certified Sterilization Standards')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
      ══════════════════════════════════════
        TECHNOLOGY — CLINICAL PRECISION
      ══════════════════════════════════════ */}
      <section className="section bg-fera-surface border-y border-gray-100">
        <div className="container-std">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-16 lg:mb-20">
            <div className="max-w-2xl">
              <ScrollReveal type="heading">
                <span className="section-label">{t('home.technology.title')}</span>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1b4698] tracking-tight leading-[1.15] mt-4">
                  {t('home.technology.subtitle')}
                </h2>
              </ScrollReveal>
            </div>
            <p className="text-xl text-[#6B7280] font-light max-w-md">
              {t('home.technology.desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { id: 't1', icon: '01' },
              { id: 't2', icon: '02' },
              { id: 't3', icon: '03' }
            ].map((item, idx) => (
              <ScrollReveal key={item.id} type="card" delay={idx * 100}>
                <div className="card-premium-hover bg-white p-12 rounded-luxury-lg border border-fera-border/30 group h-full">
                  <span className="text-4xl font-light text-fera-primary/10 group-hover:text-fera-primary transition-colors block mb-10 duration-500">{item.icon}</span>
                  <h3 className="text-xl font-bold text-fera-deep mb-4 tracking-tight group-hover:text-fera-primary transition-colors duration-300">
                    {t(`home.technology.${item.id}`)}
                  </h3>
                  <p className="text-[15px] text-fera-gray font-light leading-relaxed">
                    {t(`home.technology.${item.id}Desc`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/*
      ══════════════════════════════════════
        FEATURED TREATMENTS
      ══════════════════════════════════════ */}
      <section className="section bg-white relative border-t border-gray-100/50">
        <div className="container-std">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <ScrollReveal type="heading">
              <span className="section-label">{t('treatments.title')}</span>
              <h2 className="section-heading mb-8">
                {t('treatments.title')}
              </h2>
            </ScrollReveal>
            <p className="section-body max-w-2xl mx-auto leading-[1.7]">
              {t('treatments.subtitle')}
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {getFeaturedTreatments(t).map(t => (
              <TreatmentCard
                key={t.id}
                title={t.title}
                description={t.description}
                image={t.image}
                category={t.category}
                href={`/treatments/${t.slug}`}
                duration={t.duration}
              />
            ))}
          </div>

          <div className="text-center mt-24">
            <Button
              asChild
              variant="outline"
              size="xl"
              className="px-12 active-press"
            >
              <Link to="/treatments" className="group">
                <span className="uppercase tracking-[0.2em] text-xs font-bold">{t('common.viewAll')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/*
      ══════════════════════════════════════
        BEFORE / AFTER GALLERY
      ══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#1b4698] overflow-hidden relative">
        {/* Abstract background detail */}
        <div className="absolute top-0 end-0 w-1/3 h-full bg-white/5 skew-x-[-15deg] translate-x-1/2" />

        <div className="container-std relative z-10">
          <div className="max-w-4xl mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-fera-light block mb-8">
              {t('common.realResults', 'Surgical Outcomes')}
            </span>
            <h2 className="text-4xl lg:text-[52px] font-semibold text-white tracking-tight leading-[1.1] mb-6">
              {t('common.beforeAndAfter')}
            </h2>
            <p className="text-lg text-white/50 max-w-2xl font-normal leading-[1.7] mb-12">
              {t('home.beforeAfterDesc', 'Hover or tap each case to reveal the transformation. Real patients, real results at FeRa Clinic.')}
            </p>
          </div>

          {/* Case grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {getBeforeAfterCases(t).map((c, i) => (
              <BeforeAfterCard key={i} caseData={c} index={i} t={t} />
            ))}
          </div>

          <div className="mt-24 flex justify-center">
            <Link to="/gallery">
              <Button
                variant="outline-white"
                size="xl"
                className="px-12 active-press"
              >
                <span className="uppercase tracking-[0.2em] text-xs font-bold">{t('home.viewFullGallery', 'View Clinical Archive')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-500" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/*
      ══════════════════════════════════════
        CLINIC PHOTOS — TRUST SECTION
      ══════════════════════════════════════ */}
      <section className="section bg-[#F5F7FA] border-y border-gray-100/50">
        <div className="container-std">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image grid */}
            <div className="grid grid-cols-2 gap-6">
              <img
                src="/images/fera-clinic/clinic/surgery-room.webp"
                alt={t('alt.surgicalSuite', 'FeRa Clinic surgical suite')}
                loading="lazy"
                decoding="async"
                className="rounded-luxury-lg object-cover w-full aspect-[4/3] shadow-luxury-md"
              />
              <img
                src="/images/fera-clinic/clinic/reception.webp"
                alt={t('alt.reception', 'FeRa Clinic reception')}
                loading="lazy"
                decoding="async"
                className="rounded-luxury-lg object-cover w-full aspect-[4/3] mt-12 shadow-luxury-md"
              />
              <img
                src="/images/fera-clinic/clinic/waiting-area.webp"
                alt={t('alt.waitingArea', 'FeRa Clinic waiting area')}
                loading="lazy"
                decoding="async"
                className="rounded-luxury-lg object-cover w-full aspect-[16/9] col-span-2 shadow-luxury-lg"
              />
            </div>

            {/* Copy */}
            <div className="space-y-6">
              <span className="section-label">{t('home.theClinic', 'The Clinic')}</span>
              <h2 className="section-heading">
                {t('home.stateOfArt1', 'State-of-the-Art')}<br />{t('home.stateOfArt2', 'Facilities in Istanbul')}
              </h2>
              <p className="section-body">
                {t('home.stateOfArtDesc', 'Our clinic is fully equipped with 3D CBCT imaging, digital smile design stations, and Class-B sterilization systems — meeting international standards for patient safety and clinical precision.')}
              </p>

              <ul className="space-y-3">
                {[
                  t('home.clinic.feature1', 'Class-B sterilization in every room'),
                  t('home.clinic.feature2', '3D CBCT diagnostic imaging'),
                  t('home.clinic.feature3', 'Digital Smile Design (DSD)'),
                  t('home.clinic.feature4', 'ISO-certified protocols'),
                  t('home.clinic.feature5', 'Personal case coordinator'),
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#1b4698]/80">
                    <CheckCircle className="w-4 h-4 text-[#006693] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/about">
                <Button
                  variant="primary"
                  size="xl"
                  className="px-12 group active-press"
                >
                  <span className="uppercase tracking-[0.2em] text-xs font-bold">{t('home.aboutOurClinic', 'About Our Clinic')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-500" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*
      ══════════════════════════════════════
        DENTAL TOURISM
      ══════════════════════════════════════ */}
      <section className="section bg-[#1b4698] overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 start-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#D4AF37_0%,transparent_50%)] opacity-20" />
        </div>

        <div className="container-std relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Copy */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-fera-gold block mb-8">
                {t('home.medicalTourism', 'Global Patient Care')}
              </span>
              <h2 className="text-4xl lg:text-[56px] font-semibold text-white tracking-tight leading-[1.1] mb-8">
                {t('home.completeCare1')} {t('home.completeCare2')}
              </h2>
              <p className="text-lg text-white/50 font-normal leading-[1.7] mb-12">
                {t('home.completeCareDesc', 'FeRa Clinic handles everything — from airport transfers to hotel bookings and clinical coordination — so you can focus entirely on your treatment and recovery.')}
              </p>

              <div className="grid grid-cols-2 gap-8 mb-16">
                {[
                  { icon: '✈', label: t('home.tourism.vip', 'VIP Transfer') },
                  { icon: '🏨', label: t('home.tourism.hotel', 'Luxury Stay') },
                  { icon: '🗣', label: t('home.tourism.language', 'Multilingual') },
                  { icon: '📋', label: t('home.tourism.coordinator', 'Coordination') },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-4 text-white/60 group cursor-default">
                    <span className="text-2xl grayscale group-hover:grayscale-0 transition-all duration-300">{item.icon}</span>
                    <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link to="/dental-tourism">
                <Button
                  variant="white"
                  size="xl"
                  className="px-12 group active-press"
                >
                  <span className="uppercase tracking-[0.2em] text-xs font-bold">{t('navigation.dentalTourism')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-500" />
                </Button>
              </Link>
            </div>

            {/* Right: contact block */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-12 lg:p-16 space-y-10 shadow-luxury-xl">
              <h3 className="text-3xl font-bold text-white tracking-tight">{t('home.planYourVisit', 'Evaluate Your Case')}</h3>
              <p className="text-white/40 text-lg font-light leading-relaxed">
                {t('home.planYourVisitDesc', "Our team is available 7 days a week to answer your questions and help you plan your dental treatment in Istanbul.")}
              </p>

              <div className="pt-4 space-y-4">
                <a
                  href="tel:+905551234567"
                  className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:scale-105">
                    <Phone className="w-4 h-4 text-white transition-colors duration-300 group-hover:text-[#1b4698]" />
                  </div>
                  <span className="text-lg font-light tracking-tight">+90 555 123 45 67</span>
                </a>
              </div>

              <Link to="/consultation" className="block">
                <Button
                  variant="primary"
                  size="xl"
                  fullWidth
                  className="shadow-luxury-lg active-press"
                >
                  <span className="uppercase tracking-widest text-sm">{t('home.requestFreeConsultation', 'Begin Initial Triage')}</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*
      ══════════════════════════════════════
        TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="section bg-fera-surface">
        <div className="container-std">
          <div className="text-center mb-12 max-w-xl mx-auto">
            <span className="section-label block text-center">{t('home.patientTestimonials', 'Patient Testimonials')}</span>
            <h2 className="section-heading">{t('home.whatOurPatientsSay', 'What Our Patients Say')}</h2>
            <p className="section-body mt-3">
              {t('home.realOutcomes', 'Real outcomes from international patients who completed their treatment at FeRa Clinic.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getTestimonials(t).map((t, i) => (
              <motion.div
                key={i}
                className="relative rounded-luxury-lg p-10 flex flex-col gap-6
                           bg-white border border-fera-border/30
                           shadow-luxury-sm transition-all duration-300"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
                whileHover={{
                  y: -4,
                  boxShadow: '0 20px 40px rgba(27,70,152,0.08)'
                }}
              >
                {/* Stars + country */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="flex items-center gap-2 text-[12px] text-[#6B7280] font-bold uppercase tracking-widest">
                    <span className="text-lg leading-none">{t.flag}</span>
                    {t.country}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="flex-grow">
                  <p className="text-base text-[#1b4698]/80 leading-relaxed font-light italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </blockquote>

                {/* Patient */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#F0F4F8]">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div>
                    <p className="text-base font-bold text-[#1b4698]">{t.name}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#006693]">
                      {t.treatment}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust & Social Section */}
          <div className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* LEFT BLOCK: Trust & Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-10 lg:p-12 shadow-luxury-sm border border-gray-100 flex flex-col justify-between"
            >
              <div className="mb-10 text-center lg:text-start">
                <h3 className="text-3xl lg:text-4xl font-semibold text-[#1b4698] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Trusted by Hundreds of Patients Worldwide
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Real experiences. Verified results. See why patients choose FeRa Clinic for their dental transformations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-10 lg:gap-16">
                {/* Google */}
                <a
                  href="https://www.google.com/search?q=FeRa+Clinic+Istanbul+Reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group hover:scale-[1.03] transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-100 transition-shadow group-hover:shadow-md">
                    <svg viewBox="0 0 24 24" className="w-8 h-8"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /><path fill="none" d="M1 1z" /></svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl font-bold text-[#1b4698]">4.9</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />)}
                      </div>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B7280]">{t('home.social.googleReviews', 'Google Reviews')}</p>
                  </div>
                </a>

                {/* Trustpilot */}
                <a
                  href="https://www.trustpilot.com/review/feraclinic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group hover:scale-[1.03] transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-100 transition-shadow group-hover:shadow-md">
                    <svg viewBox="0 0 24 24" className="w-9 h-9"><path fill="#00b67a" d="M24 9.172l-9.135-.001L12 0 9.135 9.171 0 9.172l7.391 5.37-2.823 8.709L12 17.881l7.432 5.37-2.823-8.709L24 9.172z" /></svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl font-bold text-[#1b4698]">4.8</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-[#00b67a] text-[#00b67a]" />)}
                      </div>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B7280]">{t('home.social.verifiedReviews', 'Verified Reviews')}</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* RIGHT BLOCK: Follow Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2.5rem] p-10 lg:p-12 shadow-luxury-sm border border-gray-100 flex flex-col justify-between"
            >
              <div className="mb-10 text-center lg:text-start">
                <h3 className="text-3xl lg:text-4xl font-semibold text-[#1b4698] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Follow Our Real Results
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Explore real patient transformations, behind-the-scenes moments, and daily clinical updates.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {[
                  { icon: Facebook, label: 'Facebook', color: '#1877F2', glow: 'rgba(24,119,242,0.15)' },
                  { icon: Instagram, label: 'Instagram', color: '#E4405F', glow: 'rgba(228,64,95,0.15)' },
                  { icon: Youtube, label: 'YouTube', color: '#FF0000', glow: 'rgba(255,0,0,0.15)' },
                  { icon: Linkedin, label: 'LinkedIn', color: '#0077B5', glow: 'rgba(0,119,181,0.15)' },
                  { icon: TikTokIcon, label: 'TikTok', color: '#1b4698', glow: 'rgba(27,70,152,0.1)' },
                ].map(({ icon: Icon, label, color, glow }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-14 h-14 rounded-2xl border border-gray-100 bg-gray-50/50 flex items-center justify-center
                               transition-all duration-300 ease-in-out group relative
                               hover:scale-[1.1] hover:-translate-y-1 hover:bg-white hover:border-gray-200
                               hover:shadow-[0_8px_32px_rgba(27,70,152,0.1)]"
                  >
                    <Icon className="w-5 h-5 text-[#1b4698]/40 transition-all duration-300 group-hover:scale-110" />
                    {/* Hover icon color overlay */}
                    <Icon
                      className="w-5 h-5 absolute opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                      style={{ color: color }}
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Authority / Certification Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 bg-[#F8FAFC] rounded-[2.5rem] p-8 lg:p-12 border border-gray-100 flex flex-wrap items-center justify-center gap-10 lg:gap-20"
          >
            {[
              {
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Logo_of_Ministry_of_Health_%28Turkey%29.png",
                title: "Ministry of Health Certified",
                label: "Regulatory Authority"
              },
              {
                logo: "https://upload.wikimedia.org/wikipedia/tr/d/d6/USHAS_company_logo.png",
                title: "Authorized for International Health Tourism",
                label: "Official Accreditation"
              },
              {
                logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Ministry_of_Culture_and_Tourism_%28Turkey%29_logo.svg",
                title: "Approved by Ministry of Culture & Tourism",
                label: "Institutional Trust"
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center p-2.5 shadow-luxury-sm border border-gray-100 group-hover:scale-105 group-hover:shadow-luxury-md transition-all duration-500">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="w-full h-full object-contain transition-all duration-500"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#1b4698]/30 group-hover:text-[#1b4698]/50 transition-colors mb-1">{item.label}</span>
                  <span className="text-[13px] font-bold text-[#1b4698]/70 group-hover:text-[#1b4698] transition-colors leading-tight max-w-[180px]">
                    {item.title}
                  </span>
                </div>
                {idx < 2 && <div className="hidden xl:block h-10 w-[1px] bg-gray-200/50 ms-12" />}
              </div>
            ))}
          </motion.div>

          {/* Featured Video Block */}
          <div className="mt-24 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#1b4698]/40 mb-6 block">
                The Patient Journey
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1b4698] tracking-tight mb-6">
                Experience FeRa Excellence Firsthand
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                Step inside our clinic through the eyes of our patients. Witness the precision, care, and life-changing results that define the FeRa standard.
              </p>

              <motion.div
                whileHover={{ y: -6, boxShadow: '0 30px 60px -12px rgba(27,70,152,0.18)' }}
                onClick={() => setIsVideoOpen(true)}
                className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-luxury-lg border border-gray-100 transition-all duration-500 group bg-gray-100 cursor-pointer"
              >
                {/* Cover Image */}
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000"
                  alt={t('alt.patientJourney', 'Patient Journey Preview')}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-luxury-lg transition-colors group-hover:bg-white"
                  >
                    <Play className="w-8 h-8 text-[#1b4698] fill-[#1b4698] ms-1" />
                  </motion.div>
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-8 start-8 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#008BC9] animate-pulse" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest drop-shadow-md">{t('home.experience.exclusiveTour', 'Exclusive Tour')}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Video Modal Overlay */}
          {isVideoOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            >
              <div
                className="absolute inset-0 bg-[#1b4698]/95 backdrop-blur-xl"
                onClick={() => setIsVideoOpen(false)}
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black z-10"
              >
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute top-6 end-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all hover:rotate-90"
                >
                  <X className="w-6 h-6" />
                </button>
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/T7uKugXiG4w?autoplay=1"
                  title="FeRa Clinic Patient Experience"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/*
      ══════════════════════════════════════
        NEWSLETTER SECTION
      ══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[#1b4698] opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />

        <div className="container-std relative z-10">
          <div className="bg-[#F5F7FA] rounded-[2.5rem] p-10 lg:p-14 shadow-luxury-sm border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Left: Text Content */}
              <div className="text-center lg:text-start max-w-xl mx-auto lg:mx-0">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#006693] block mb-4">
                  {t('home.newsletter.title', 'Stay Informed')}
                </span>
                <h2
                  className="text-3xl lg:text-4xl font-semibold text-[#1b4698] mb-4 tracking-tight leading-tight"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {t('home.newsletter.subtitle', 'Subscribe for the latest dental insights and exclusive clinic news.')}
                </h2>
                <p className="text-[#6B7280] font-light text-base leading-relaxed">
                  {t('home.newsletter.desc', 'Receive curated insights, treatment updates, and exclusive offers directly from our specialists in Istanbul.')}
                </p>
              </div>

              {/* Right: Form Area */}
              <div className="w-full">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const email = (e.target as any).email.value;
                    if (email) {
                      alert(t('home.newsletter.success', 'Thank you for subscribing!'));
                      (e.target as any).reset();
                    }
                  }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder={t('home.newsletter.emailPlaceholder', 'Your email address')}
                    className="flex-grow h-14 rounded-full border border-gray-200 bg-white px-6 text-sm text-[#1b4698] outline-none transition-all duration-300 focus:border-[#1b4698]/30 focus:ring-4 focus:ring-[#1b4698]/10 placeholder:text-gray-400 shadow-sm"
                  />
                  <button
                    type="submit"
                    className="h-14 px-8 bg-[#1b4698] text-white font-bold rounded-full hover:bg-[#006693] transition-all duration-300 shadow-luxury-md hover:shadow-luxury-lg hover:-translate-y-0.5 whitespace-nowrap focus:outline-none focus:ring-4 focus:ring-[#1b4698]/20"
                  >
                    {t('home.newsletter.subscribe', 'Subscribe Now')}
                  </button>
                </form>

                {/* Trust Element */}
                <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-sm text-[#6B7280]">
                  <CheckCircle className="w-4 h-4 text-[#006693]" />
                  <span>{t('home.newsletter.trust', 'Trusted by 10,000+ international patients.')}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/*
      ══════════════════════════════════════
        PATIENT FAQ
      ══════════════════════════════════════ */}
      <section className="section bg-white border-y border-gray-100">
        <div className="container-std">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">{t('home.faq.label', 'Patient FAQ')}</span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#1b4698] tracking-tight leading-[1.15] mb-6">
              {t('home.faq.title', 'Common Questions About Dental Treatment at FeRa Clinic')}
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              {t('home.faq.desc', 'Clear answers about implants, smile design, treatment planning, and the patient journey in Istanbul.')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
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
        </div>
      </section>

      {/*
      ══════════════════════════════════════
        FINAL CTA
      ══════════════════════════════════════ */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="container-std">
          <div className="bg-[#1b4698] rounded-[4rem] px-12 py-24 text-center max-w-5xl mx-auto space-y-12 relative overflow-hidden shadow-luxury-xl">
            {/* Abstract background detail */}
            <div className="absolute top-0 end-0 w-64 h-64 bg-[#D4AF37] opacity-10 blur-[120px]" />

            <h2 className="text-4xl lg:text-[56px] font-semibold text-white tracking-tight leading-[1.1] relative z-10">
              {t('home.ctaTitle1', 'Begin Your')} {t('home.ctaTitle2', 'Transformation Journey.')}
            </h2>
            <p className="text-white/50 text-lg font-normal max-w-xl mx-auto leading-[1.7] relative z-10">
              {t('home.readyToGetStartedDesc', "Connect with our clinical coordinators today. Free evaluation, no obligation, professional response.")}
            </p>
            <div className="flex flex-wrap gap-8 justify-center pt-6 relative z-10">
              <Link to="/consultation">
                <button className="h-14 px-10 bg-white text-[#1b4698] text-sm font-bold rounded-full 
                                 hover:bg-[#1b4698] hover:text-white hover:scale-[1.03] hover:shadow-luxury-xl 
                                 border border-transparent hover:border-white/20
                                 transition-all duration-300 ease-out flex items-center gap-3 group">
                  {t('common.freeConsultation', 'Start Your Smile Journey')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
