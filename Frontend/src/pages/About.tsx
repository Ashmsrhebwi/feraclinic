import React from 'react'
import { motion } from 'framer-motion'
import {
  Award,
  Users,
  Building2,
  ShieldCheck,
  Microscope,
  Heart,
  ArrowRight,
  Stethoscope,
  ChevronRight,
  Globe,
  Star,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Mail
} from 'lucide-react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { Button } from '../components/ui/button'
import { TiltCard } from '../components/ui/TiltCard'
import { PremiumCard } from '../components/ui/PremiumCard'
import { BrandDivider } from '../components/ui/BrandDivider'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { HeroCard } from '../components/ui/HeroCard'
import { SectionWrapper } from '../components/ui/SectionWrapper'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { SecondaryButton } from '../components/ui/SecondaryButton'

const getTeam = (t: any) => [
  {
    name: 'Dr. Ahmet Yılmaz',
    role: t('about.team.0.role', 'Chief Medical Director'),
    specialty: t('about.team.0.specialty', 'Oral Surgery & Implantology'),
    image: '/images/fera-clinic/specialists/doctor-1.jpg',
    desc: t('about.team.0.desc', 'Specializing in complex dental reconstructions with over 15 years of surgical excellence and implantology expertise.')
  },
  {
    name: 'Dr. Sarah Müller',
    role: t('about.team.1.role', 'Senior Aesthetic Architect'),
    specialty: t('about.team.1.specialty', 'Digital Smile Design'),
    image: '/images/fera-clinic/specialists/doctor-2.jpg',
    desc: t('about.team.1.desc', 'Expert in the harmony of dental aesthetics and facial proportions using advanced CAD/CAM digital smile design technology.')
  },
  {
    name: 'Dr. Can Karaca',
    role: t('about.team.2.role', 'Lead Prosthodontist'),
    specialty: t('about.team.2.specialty', 'High-Precision Prosthetics'),
    image: '/images/fera-clinic/specialists/doctor-3.jpg',
    desc: t('about.team.2.desc', 'Dedicated to achieving the perfect balance between functional load-bearing prosthetics and natural tooth translucency.')
  }
]

export function About() {
  const { t } = useTranslation()
  useSEO({ title: t('navigation.about'), description: t('about.subtitle', 'Learn about FeRa Clinic in Istanbul, Turkey. Our specialist dentists provide advanced dental care with international standards and 15+ years of experience.') })

  return (
    <div className="min-h-screen bg-white">
      {/* 
══════════════════════════════════════
  HERO - MATCH HOME PAGE PREMIUM QUALITY
══════════════════════════════════════ */}
      <section className="relative min-h-[780px] md:min-h-[820px] lg:min-h-[92vh] flex items-start overflow-hidden pb-20">
        {/* Enhanced Background with Animation */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fera-clinic/clinic/reception.webp"
            alt={t('alt.clinicInstitutional', 'FeRa Clinic Institutional')}
            className="w-full h-full object-cover object-center"
            style={{ animation: 'heroZoomPan 15s ease-in-out infinite alternate' }}
            loading="eager"
            fetchPriority="high"
          />
          {/* Standardized Dark Overlay for Global Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 backdrop-blur-[1px]" />
        </div>

        {/* Premium Floating Glow Effect */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#071520]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#13293D]/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />

        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 lg:px-10 2xl:px-16 pt-24 sm:pt-28 md:pt-32 lg:pt-24 flex justify-start">
          {/* Standardized Darker Glass Content Card */}
          <motion.div 
            className="w-full max-w-[94vw] sm:max-w-[680px] lg:max-w-[860px] 2xl:max-w-[980px] bg-white/10 backdrop-blur-2xl rounded-[3rem] p-8 sm:p-10 lg:p-12 shadow-2xl border border-white/20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Premium Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-white/40" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest drop-shadow-md">{t('about.heroEyebrow', 'FeRa Clinic')}</span>
            </motion.div>

            {/* Premium Heading - White with Shadow */}
            <div className="mb-6 max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] tracking-tight leading-[1.1]"
              >
                {t('about.heroTitle', 'FeRa Clinic in')}
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] tracking-tight leading-[1.1]"
              >
                {t('about.heroTitle2', 'Istanbul')}
              </motion.h1>
            </div>

            {/* Enhanced Description - White/85 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="text-lg text-white/85 font-light leading-relaxed max-w-2xl drop-shadow-sm"
            >
              {t('about.heroDesc', 'Guided by a commitment to patient safety and clinical excellence, FeRa Clinic represents the pinnacle of Turkish dental expertise in Istanbul.')}
            </motion.p>

            {/* Premium CTA Buttons with Enhanced Hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-10"
            >
              {/* Secondary CTA - View Gallery */}
              <Link to="/gallery" className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:min-w-[280px] h-14 sm:h-16 px-8 bg-white/60 backdrop-blur-sm text-[#0B1C2D] text-sm font-bold rounded-full border border-[#0B1C2D]/30 shadow-md hover:bg-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-out flex items-center justify-center gap-3 group"
                  whileHover={{ scale: 1.02, y: -3, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="uppercase tracking-widest">{t('about.ctaSecondary', 'View Gallery')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Clean Trust Indicators with Staggered Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-8 text-white"
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
                  className="flex items-center gap-3"
                >
                  <item.icon className="w-4 h-4 text-[#0B1C2D]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0B1C2D]">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST VERIFICATION BAR ── */}
      <div className="bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] py-6 border-b border-white/5 relative z-20">
        <div className="container-std px-6">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 lg:gap-4 text-white/40">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{t('stats.certified', 'ISO-9001 Certified Clinic')}</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden lg:block" />
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{t('stats.specialists', '15+ Specialist Surgeons')}</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden lg:block" />
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{t('common.lifetimeWarranty', 'Lifetime Surgical Warranty')}</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden lg:block" />
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{t('home.tourism.vip', 'VIP Medical Concierge')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 
══════════════════════════════════════
  STORY SECTION - BALANCED LAYOUT
══════════════════════════════════════ */}
      <SectionWrapper padding="py-20 lg:py-24" background="white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="w-16 h-1 bg-[#0B1C2D]/30 mb-8 rounded-full" />
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1] mb-8">
                  {t('about.storyTitle1', 'High Quality')} <br className="hidden lg:block" />{t('about.storyTitle2', 'Care Standards.')}
                </h2>
                <p className="text-lg text-[#64748B] font-light leading-relaxed max-w-xl">
                  {t('about.storyDesc', 'Our Istanbul dental clinic operates under strict international medical protocols, ensuring that every patient receives restorative and aesthetic care of the highest clinical standard.')}
                </p>
              </div>

              {/* Story Points */}
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: t('about.storyPillars.riskTitle', 'Safety Management'), desc: t('about.storyPillars.riskDesc', 'We follow stringent international safety standards for all dental procedures.') },
                  { icon: Microscope, title: t('about.storyPillars.techTitle', 'Digital Technology'), desc: t('about.storyPillars.techDesc', 'Implementing the latest 3D dental imaging for extreme surgical accuracy.') },
                  { icon: Stethoscope, title: t('about.storyPillars.triageTitle', 'Specialist Assessment'), desc: t('about.storyPillars.triageDesc', 'Multi-disciplinary coordination for complex restorative dental cases.') },
                  { icon: Heart, title: t('about.storyPillars.careTitle', 'Concierge Care'), desc: t('about.storyPillars.careDesc', 'Dedicated coordinators supporting your entire dental treatment journey.') }
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex gap-5 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#0B1C2D]/5 text-[#0B1C2D] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B1C2D] group-hover:text-white transition-all duration-500 shadow-sm">
                      <point.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0B1C2D] mb-2">{point.title}</h4>
                      <p className="text-[#64748B] leading-relaxed font-light">{point.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group border border-[#0B1C2D]/10">
                <img
                  src="/images/fera-clinic/clinic/surgery-room.webp"
                  alt={t('alt.surgicalTheater', 'State of the art surgical theater')}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[600px] object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/40 via-transparent to-transparent" />
                
                {/* Floating Info Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-8 rounded-[2rem] shadow-xl border border-white/50 max-w-[280px] transition-transform hover:-translate-y-1 duration-300"
                >
                  <Globe className="w-8 h-8 text-[#0B1C2D] mb-4" />
                  <h4 className="text-lg font-bold text-[#0B1C2D] mb-2 tracking-tight">
                    {t('about.boutiqueHub', "Istanbul's Boutique Hub")}
                  </h4>
                  <p className="text-sm text-[#64748B] leading-relaxed font-light">
                    {t('about.boutiqueDesc', 'Surgical Excellence in the Heart of Istanbul')}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* 
══════════════════════════════════════
  VALUES / WHY FERA - PREMIUM CARDS
══════════════════════════════════════ */}
      <SectionWrapper padding="py-20 lg:py-24" background="gray">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1] mb-8">
              {t('about.valuesTitle1', 'Why Choose')} <br className="md:hidden" />{t('about.valuesTitle2', 'FeRa Clinic')}
            </h2>
            <p className="text-xl text-[#64748B] font-light leading-relaxed max-w-3xl mx-auto">
              {t('about.valuesDesc', 'Experience the difference that premium dental care makes. Our commitment to excellence ensures exceptional outcomes for every patient.')}
            </p>
          </motion.div>

          {/* Premium Values Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: t('about.values.riskTitle', 'Risk Management'), 
                desc: t('about.values.riskDesc', 'Stringent global safety standards for all procedures.')
              },
              { 
                icon: Microscope, 
                title: t('about.values.techTitle', 'Bio-Digital Technology'), 
                desc: t('about.values.techDesc', 'Latest 3D imaging for surgical accuracy.')
              },
              { 
                icon: Stethoscope, 
                title: t('about.values.triageTitle', 'Specialist Triage'), 
                desc: t('about.values.triageDesc', 'Multi-disciplinary coordination for complex cases.')
              },
              { 
                icon: Heart, 
                title: t('about.values.careTitle', 'Concierge Care'), 
                desc: t('about.values.careDesc', 'Dedicated coordinators for your entire journey.')
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-[2rem] border border-[rgba(11,28,45,0.08)] shadow-[0_15px_45px_rgba(11,28,45,0.06)] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(11,28,45,0.12)] transition-all duration-500 p-10 h-full flex flex-col items-center text-center">
                  {/* Icon Box */}
                  <div className="w-20 h-20 bg-[#0B1C2D]/5 text-[#0B1C2D] rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-[#0B1C2D] group-hover:text-white transition-all duration-500 shadow-sm">
                    <value.icon className="w-10 h-10" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#0B1C2D] mb-4 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-[#64748B] leading-relaxed font-light">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 
══════════════════════════════════════
  TRUST / CREDIBILITY SECTION
══════════════════════════════════════ */}
      <SectionWrapper padding="py-20 lg:py-24" background="white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1] mb-8">
              {t('about.trustTitle1', 'Accreditation &')} <br className="md:hidden" />{t('about.trustTitle2', 'Clinical Excellence')}
            </h2>
            <p className="text-xl text-[#64748B] font-light leading-relaxed max-w-3xl mx-auto">
              {t('about.trustDesc', 'Our commitment to international standards and continuous improvement ensures the highest quality dental care for every patient.')}
            </p>
          </motion.div>

          {/* Trust Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: ShieldCheck,
                title: t('about.trust.isoTitle', 'ISO 9001 Certified'),
                desc: t('about.trust.isoDesc', 'Internationally recognized quality management system for medical facilities.'),
                badge: t('about.trust.badges.certified', 'Certified')
              },
              {
                icon: Award,
                title: t('about.trust.experienceTitle', '15+ Years Experience'),
                desc: t('about.trust.experienceDesc', 'Decades of specialized dental practice with thousands of successful treatments.'),
                badge: t('about.trust.badges.expert', 'Expert')
              },
              {
                icon: Users,
                title: t('about.trust.patientsTitle', '5000+ Happy Patients'),
                desc: t('about.trust.patientsDesc', 'Trusted by international patients from over 50 countries worldwide.'),
                badge: t('about.trust.badges.proven', 'Proven')
              },
              {
                icon: Stethoscope,
                title: t('about.trust.specialistsTitle', 'Specialist Doctors Only'),
                desc: t('about.trust.specialistsDesc', 'Every procedure performed by doctors with advanced specialty training.'),
                badge: t('about.trust.badges.qualified', 'Qualified')
              },
              {
                icon: Microscope,
                title: t('about.trust.technologyTitle', 'Advanced Technology'),
                desc: t('about.trust.technologyDesc', 'State-of-the-art equipment and digital treatment planning systems.'),
                badge: t('about.trust.badges.modern', 'Modern')
              },
              {
                icon: Heart,
                title: t('about.trust.careTitle', 'Patient-Centered Care'),
                desc: t('about.trust.careDesc', 'Personalized treatment plans with dedicated coordinators for international patients.'),
                badge: t('about.trust.badges.caring', 'Caring')
              }
            ].map((trust, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-[2rem] border border-[rgba(11,28,45,0.08)] shadow-[0_15px_45px_rgba(11,28,45,0.06)] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(11,28,45,0.12)] transition-all duration-500 p-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 bg-[#0B1C2D]/5 text-[#0B1C2D] rounded-2xl flex items-center justify-center shadow-sm">
                      <trust.icon className="w-8 h-8" />
                    </div>
                    <span className="inline-flex px-4 py-1.5 bg-[#0B1C2D]/10 text-[#0B1C2D] text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {trust.badge}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#0B1C2D] mb-4 tracking-tight">
                    {trust.title}
                  </h3>
                  <p className="text-[#64748B] leading-relaxed font-light">
                    {trust.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Clinical Standards Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] backdrop-blur-md rounded-[2.5rem] p-12 lg:p-20 text-white shadow-2xl shadow-[#0B1C2D]/20 border border-white/10 relative overflow-hidden"
          >
            {/* Abstract glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -ml-20 -mb-20" />

            <div className="text-center mb-16 relative z-10">
              <h3 className="text-4xl lg:text-5xl font-bold mb-8 text-white tracking-tight leading-tight">
                {t('about.standardsTitle', 'Clinical Standards & Protocols')}
              </h3>
              <p className="text-xl text-white/80 max-w-4xl mx-auto font-light leading-relaxed">
                {t('about.standardsDesc', 'We maintain the highest international standards in sterilization, safety, and treatment protocols to ensure exceptional patient outcomes at our Istanbul dental clinic.')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {[
                { icon: ShieldCheck, label: t('about.standard1', 'European Sterilization'), desc: t('about.standard1Desc', 'Class-B autoclave systems') },
                { icon: Microscope, label: t('about.standard2', 'Digital Treatment Planning'), desc: t('about.standard2Desc', '3D CBCT imaging') },
                { icon: Heart, label: t('about.standard3', 'Patient Safety First'), desc: t('about.standard3Desc', 'HEPA-filtered environments') }
              ].map((standard, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-[1.5rem] p-10 border border-white/10 shadow-xl text-center hover:bg-white/20 transition-all duration-500">
                  <standard.icon className="w-14 h-14 text-[#7CC4FF] mx-auto mb-6" />
                  <h4 className="text-2xl font-bold mb-3 text-white tracking-tight">{standard.label}</h4>
                  <p className="text-white/80 text-lg font-light leading-relaxed">{standard.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    {/* 
══════════════════════════════════════
  TEAM SHOWCASE - PREMIUM DESIGN
══════════════════════════════════════ */}
      <SectionWrapper padding="py-20 lg:py-24" background="gray">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1] mb-8">
              {t('about.teamTitle1', 'Expert')} <br className="md:hidden" />{t('about.teamTitle2', 'Specialists')}
            </h2>
            <p className="text-xl text-[#64748B] font-light leading-relaxed max-w-3xl mx-auto">
              {t('about.teamSubtitle', 'Our surgical team consists of credentialed specialists with over 15 years of evidence-based clinical experience.')}
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {getTeam(t).map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-[rgba(11,28,45,0.08)] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                      <div className="flex items-center gap-3 text-white/90 mb-4">
                        <div className="w-6 h-6 rounded-full bg-[#7CC4FF] flex items-center justify-center">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0B1C2D]" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                          {t('about.boardCertified', 'Board Certified Specialist')}
                        </span>
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed font-light">
                        {t(`about.team.${i}.desc`)}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-10 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <span className="inline-flex items-center px-4 py-2 bg-[#0B1C2D]/5 text-[#0B1C2D] text-[10px] font-bold uppercase tracking-widest rounded-full border border-[#0B1C2D]/5">
                        {member.specialty}
                      </span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-3.5 h-3.5 text-[#FABB05] fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#0B1C2D] mb-2 tracking-tight group-hover:text-[#162e45] transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    <p className="text-[#64748B] text-sm leading-relaxed mb-8 font-light italic">
                      {member.role}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-8 border-t border-gray-100">
                      <div className="flex items-center gap-6 text-[#64748B]">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#0B1C2D]/40" />
                          <span className="text-xs font-medium">{t('about.yearsExperience', '15+ Years')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-[#0B1C2D]/40" />
                          <span className="text-xs font-medium">{t('common.expert')}</span>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-[#0B1C2D]/5 text-[#0B1C2D] flex items-center justify-center group-hover:bg-[#0B1C2D] group-hover:text-white transition-all duration-500 shadow-sm">
                        <ChevronRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/gallery">
              <motion.button
                className="inline-flex items-center gap-3 px-12 py-4 bg-white text-[#0B1C2D] text-sm font-bold rounded-full border border-[#0B1C2D]/30 shadow-lg hover:bg-[#F4F7FA] hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out"
                whileHover={{ scale: 1.02, y: -3, boxShadow: "0 20px 40px rgba(11,28,45,0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="uppercase tracking-widest">{t('about.viewOutcomes', 'View Transformation Outcomes')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 
══════════════════════════════════════
  FINAL CTA - PREMIUM CONVERSION
══════════════════════════════════════ */}
      <SectionWrapper padding="py-24 lg:py-32" background="white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] rounded-[2.5rem] px-10 lg:px-20 py-20 lg:py-28 text-center relative overflow-hidden shadow-2xl">
            {/* Abstract background detail */}
            <div className="absolute top-0 end-0 w-64 h-64 bg-[#0B1C2D] opacity-10 blur-[120px]" />
            <div className="absolute bottom-0 start-0 w-48 h-48 bg-white/5 blur-[80px]" />

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-[64px] font-serif font-bold text-white tracking-tight leading-[1.05] mb-10">
                {t('about.ctaTitle1', 'Ready for')} <br className="lg:hidden" />{t('about.ctaTitle2', 'an Evaluation?')}
              </h2>
              <p className="text-white/80 text-xl font-light leading-relaxed max-w-2xl mx-auto mb-16">
                {t('about.ctaDesc', 'Connect with our clinical coordinators for a specialized cost estimate and trip protocol.')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/consultation" className="w-full sm:w-auto">
                  <motion.button
                    className="w-full sm:w-auto px-12 h-16 sm:h-20 bg-white text-[#0B1C2D] rounded-full font-bold text-base sm:text-lg uppercase tracking-wider shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{t('common.designYourSmile', 'Design Your Smile')}</span>
                  </motion.button>
                </Link>
                <a 
                  href={`https://wa.me/${t('common.whatsappNumber', '905367460100')}?text=${encodeURIComponent(t('common.whatsappMessage', 'Hello, I have a question about treatments.'))}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto"
                >
                  <motion.button
                    className="w-full sm:w-auto px-10 h-16 sm:h-20 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#7CC4FF] flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-[#0B1C2D]" />
                    </div>
                    <span>{t('common.whatsappConsultationLong', 'Smile Design Consultation via WhatsApp')}</span>
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
