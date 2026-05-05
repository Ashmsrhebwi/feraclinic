import React from 'react'
import { motion } from 'framer-motion'
import {
  Plane,
  Hotel,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Star,
  Zap,
  Coffee,
  Heart,
  Globe,
  Stethoscope,
  Award,
  Users,
  Luggage,
  Car,
  Building,
  Camera,
  Utensils,
  Wifi,
  ConciergeBell,
  Sparkles
} from 'lucide-react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { Button } from '../components/ui/button'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { HeroCard } from '../components/ui/HeroCard'
import { SectionWrapper } from '../components/ui/SectionWrapper'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { SecondaryButton } from '../components/ui/SecondaryButton'

export function DentalTourism() {
  const { t } = useTranslation()
  useSEO({ title: t('navigation.dentalTourism'), description: t('tourism.subtitle', 'Premium medical coordination for international patients.') })

  // Journey steps for VIP experience
  const journeySteps = [
    {
      id: '01',
      title: t('tourism.steps.arrival.title', 'Arrival'),
      desc: t('tourism.steps.arrival.desc', 'VIP airport pickup and luxury hotel check-in with personalized welcome.'),
      icon: Plane
    },
    {
      id: '02',
      title: t('tourism.steps.consultation.title', 'Consultation'),
      desc: t('tourism.steps.consultation.desc', 'Comprehensive examination with 3D imaging and personalized treatment planning.'),
      icon: Stethoscope
    },
    {
      id: '03',
      title: t('tourism.steps.treatment.title', 'Treatment'),
      desc: t('tourism.steps.treatment.desc', 'World-class dental procedures with specialist doctors and advanced technology.'),
      icon: Heart
    },
    {
      id: '04',
      title: t('tourism.steps.recovery.title', 'Recovery'),
      desc: t('tourism.steps.recovery.desc', 'Comfortable recovery with 24/7 support and optional Istanbul city experiences.'),
      icon: Hotel
    },
    {
      id: '05',
      title: t('tourism.steps.followup.title', 'Follow-up'),
      desc: t('tourism.steps.followup.desc', 'Post-treatment care and virtual follow-ups to ensure lasting results.'),
      icon: ShieldCheck
    }
  ]

  // Services included in VIP experience
  const services = [
    {
      icon: Hotel,
      title: t('tourism.services.hotel.title', '5-Star Accommodation'),
      desc: t('tourism.services.hotel.desc', 'Luxury hotels in prime Istanbul locations with premium amenities.')
    },
    {
      icon: Car,
      title: t('tourism.services.transfer.title', 'VIP Transfers'),
      desc: t('tourism.services.transfer.desc', 'Private luxury vehicles for airport and clinic transfers.')
    },
    {
      icon: ConciergeBell,
      title: t('tourism.services.concierge.title', 'Personal Concierge'),
      desc: t('tourism.services.concierge.desc', 'Dedicated coordinator for your entire stay and treatment journey.')
    },
    {
      icon: Globe,
      title: t('tourism.services.translation.title', 'Translation Services'),
      desc: t('tourism.services.translation.desc', 'Professional interpreters available throughout your visit.')
    },
    {
      icon: Camera,
      title: t('tourism.services.tourism.title', 'City Tours'),
      desc: t('tourism.services.tourism.desc', 'Guided tours of Istanbul historic and cultural attractions.')
    },
    {
      icon: Utensils,
      title: t('tourism.services.dining.title', 'Fine Dining'),
      desc: t('tourism.services.dining.desc', 'Reservations at premium restaurants and local culinary experiences.')
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* 
══════════════════════════════════════
  HERO - PREMIUM VIP JOURNEY
══════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fera-clinic/clinic/waiting-area.webp"
            alt={t('alt.dentalTourism', 'Istanbul Dental Tourism')}
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
                {t('tourism.heroEyebrow', 'VIP Dental Journey')}
              </span>
            </div>

            {/* Premium Heading */}
            <h1 className="text-5xl lg:text-[84px] font-serif font-bold text-white tracking-tight leading-[1.05] mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              {t('tourism.heroTitle', 'Your Smile Journey')} <br />
              <span className="italic font-light text-white/80">{t('common.inIstanbul', 'in Istanbul')}</span>
            </h1>

            <p className="text-xl text-white/85 font-light leading-relaxed max-w-2xl mb-12 drop-shadow-sm">
              {t('tourism.heroDesc', 'Experience world-class dental care in the heart of Istanbul. We handle every detail of your medical journey with luxury and precision.')}
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-10">
              {[
                { icon: ShieldCheck, text: t('common.trustBadges.iso', 'ISO Certified') },
                { icon: Award, text: t('common.trustBadges.specialists', '15+ Specialist Dentists') },
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

      {/* 
══════════════════════════════════════
  JOURNEY / PROCESS SECTION
══════════════════════════════════════ */}
      <SectionWrapper padding="py-24 lg:py-32" background="white">
        <div className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#0B1C2D]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B1C2D]/60 block">
              {t('tourism.processEyebrow', 'The Experience')}
            </span>
            <div className="w-12 h-[1px] bg-[#0B1C2D]" />
          </div>
          <h2 className="text-4xl lg:text-[64px] font-serif font-bold text-[#0B1C2D] mb-8 leading-[1.05]">
            {t('tourism.journeyTitle1', 'Your VIP Journey')}
          </h2>
          <p className="text-xl text-[#64748B] leading-relaxed font-light">
            {t('tourism.journeyDesc', 'From arrival to recovery, every step is carefully orchestrated for your comfort and success.')}
          </p>
        </div>

        {/* Journey Steps - Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {journeySteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative"
              whileHover={{ y: -8 }}
            >
              {/* Connector Line (Desktop) */}
              {i < journeySteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-5 w-10 h-[1px] bg-[#0B1C2D]/10 z-0" />
              )}

              <div className="bg-white rounded-[2.5rem] p-10 lg:p-12 h-full text-center border border-[rgba(11,28,45,0.08)] shadow-[0_15px_45px_rgba(11,28,45,0.06)] hover:shadow-[0_25px_60px_rgba(11,28,45,0.12)] transition-all duration-500 relative z-10">
                {/* Step Number */}
                <div className="text-sm font-bold text-[#0B1C2D]/20 mb-8 tracking-widest uppercase">
                  {t('common.step', 'Step')} {step.id}
                </div>

                {/* Icon Box */}
                <div className="w-20 h-20 bg-[#F4F7FA] text-[#0B1C2D] rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#0B1C2D] group-hover:text-white transition-all duration-500 shadow-sm">
                  <step.icon className="w-10 h-10" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0B1C2D] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* 
══════════════════════════════════════
  SERVICES INCLUDED SECTION
══════════════════════════════════════ */}
      <SectionWrapper padding="py-24 lg:py-32" background="gray">
        <div className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#0B1C2D]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B1C2D]/60 block">
              {t('tourism.servicesEyebrow', 'All-Inclusive Care')}
            </span>
            <div className="w-12 h-[1px] bg-[#0B1C2D]" />
          </div>
          <h2 className="text-4xl lg:text-[64px] font-serif font-bold text-[#0B1C2D] mb-8 leading-[1.05]">
            {t('tourism.servicesTitle1', 'Premium Services')}
          </h2>
          <p className="text-xl text-[#64748B] leading-relaxed font-light">
            {t('tourism.servicesDesc', 'Everything you need for a comfortable and successful dental journey in Istanbul.')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
              whileHover={{ y: -8 }}
            >
              <div className="bg-white rounded-[2.5rem] p-10 lg:p-12 h-full border border-[rgba(11,28,45,0.08)] shadow-[0_15px_45px_rgba(11,28,45,0.06)] hover:shadow-[0_25px_60px_rgba(11,28,45,0.12)] transition-all duration-500">
                {/* Icon Box */}
                <div className="w-20 h-20 bg-[#F4F7FA] text-[#0B1C2D] rounded-3xl flex items-center justify-center mb-10 group-hover:bg-[#0B1C2D] group-hover:text-white transition-all duration-500 shadow-sm">
                  <service.icon className="w-10 h-10" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#0B1C2D] mb-6">
                  {service.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* 
══════════════════════════════════════
  VISUAL STORY SECTION
══════════════════════════════════════ */}
      <SectionWrapper padding="py-24 lg:py-32" background="white">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left: Clinic Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
              <img
                src="/images/fera-clinic/clinic/surgery-room.webp"
                alt={t('alt.stateOfTheArtClinic', 'State-of-the-art clinic')}
                className="w-full h-[600px] object-cover group-hover:scale-[1.05] transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-10 bg-white backdrop-blur-md p-10 rounded-[2.5rem] shadow-[0_30px_100px_rgba(11,28,45,0.2)] border border-[rgba(11,28,45,0.08)] max-w-[320px] hidden md:block"
            >
              <div className="w-14 h-14 bg-[#F4F7FA] text-[#0B1C2D] rounded-2xl flex items-center justify-center mb-6">
                <Stethoscope className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-[#0B1C2D] mb-3">
                {t('tourism.clinicBadge', 'Medical Excellence')}
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed font-light">
                {t('tourism.clinicDesc', 'Advanced technology and specialist doctors with international accreditation.')}
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-12"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[#0B1C2D]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B1C2D]/60 block">{t('tourism.medicalHospitality', 'Medical Hospitality')}</span>
              </div>
              <h3 className="text-4xl lg:text-[56px] font-serif font-bold text-[#0B1C2D] leading-[1.1]">
                {t('tourism.experienceTitle1', 'World-Class Care,')} <br />
                <span className="italic font-light text-[#0B1C2D]/80">{t('tourism.experienceTitle2', 'Turkish Hospitality')}</span>
              </h3>
              <p className="text-xl text-[#64748B] leading-relaxed font-light max-w-lg">
                {t('tourism.experienceDesc', 'Our clinic combines cutting-edge dental technology with the warmth and hospitality Turkey is famous for.')}
              </p>
            </div>

            {/* Experience Features */}
            <div className="grid gap-6">
              {[
                { icon: Building, title: t('tourism.feature1', 'Modern Facilities'), desc: t('tourism.feature1Desc', 'State-of-the-art equipment and comfortable environment') },
                { icon: Users, title: t('tourism.feature2', 'Expert Team'), desc: t('tourism.feature2Desc', 'Internationally trained specialist dentists') },
                { icon: MapPin, title: t('tourism.feature3', 'Prime Location'), desc: t('tourism.feature3Desc', 'Located in Istanbul prestigious medical district') }
              ].map((feature, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#F4F7FA] text-[#0B1C2D] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B1C2D] group-hover:text-white transition-all duration-500">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0B1C2D] mb-1">{feature.title}</h4>
                    <p className="text-[#64748B] text-sm leading-relaxed font-light">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Second Visual Row - Hotel Experience */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mt-32 lg:mt-48">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[#0B1C2D]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B1C2D]/60 block">{t('tourism.luxuryStay', 'Luxury Stay')}</span>
              </div>
              <h3 className="text-4xl lg:text-[56px] font-serif font-bold text-[#0B1C2D] leading-[1.1]">
                {t('tourism.luxuryTitle1', 'Luxury')} <br />
                <span className="italic font-light text-[#0B1C2D]/80">{t('tourism.luxuryTitle2', 'Accommodation')}</span>
              </h3>
              <p className="text-xl text-[#64748B] leading-relaxed font-light max-w-lg">
                {t('tourism.luxuryDesc', 'Stay in premium 5-star hotels with exceptional amenities and personalized service during your dental journey.')}
              </p>
            </div>

            {/* Luxury Features */}
            <div className="grid gap-6">
              {[
                { icon: Hotel, title: t('tourism.luxury1', '5-Star Hotels'), desc: t('tourism.luxury1Desc', 'Premium accommodations in prime locations') },
                { icon: Utensils, title: t('tourism.luxury2', 'Fine Dining'), desc: t('tourism.luxury2Desc', 'Gourmet experiences and local cuisine') },
                { icon: Wifi, title: t('tourism.luxury3', 'Modern Amenities'), desc: t('tourism.luxury3Desc', 'All comforts for a relaxing stay') }
              ].map((feature, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#F4F7FA] text-[#0B1C2D] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B1C2D] group-hover:text-white transition-all duration-500">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0B1C2D] mb-1">{feature.title}</h4>
                    <p className="text-[#64748B] text-sm leading-relaxed font-light">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Hotel Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
              <img
                src="/images/fera-clinic/clinic/reception.webp"
                alt={t('alt.luxuryHotel', 'Luxury hotel accommodation')}
                className="w-full h-[600px] object-cover group-hover:scale-[1.05] transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -left-10 bg-white backdrop-blur-md p-10 rounded-[2.5rem] shadow-[0_30px_100px_rgba(11,28,45,0.2)] border border-[rgba(11,28,45,0.08)] max-w-[320px] hidden md:block"
            >
              <div className="w-14 h-14 bg-[#F4F7FA] text-[#0B1C2D] rounded-2xl flex items-center justify-center mb-6">
                <Hotel className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-[#0B1C2D] mb-3">
                {t('tourism.hotelBadge', 'Premium Stay')}
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed font-light">
                {t('tourism.hotelDesc', '5-star comfort and service tailored for medical travelers.')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 
══════════════════════════════════════
  TRUST / WHY CHOOSE US SECTION
══════════════════════════════════════ */}
      <SectionWrapper padding="py-24 lg:py-32" background="gray">
        <div className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#0B1C2D]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B1C2D]/60 block">
              {t('tourism.trustEyebrow', 'Proven Excellence')}
            </span>
            <div className="w-12 h-[1px] bg-[#0B1C2D]" />
          </div>
          <h2 className="text-4xl lg:text-[64px] font-serif font-bold text-[#0B1C2D] mb-8 leading-[1.05]">
            {t('tourism.trustTitle1', 'Why Choose')} <br />
            {t('tourism.trustTitle2', 'FeRa Tourism')}
          </h2>
          <p className="text-xl text-[#64748B] leading-relaxed font-light">
            {t('tourism.trustDesc', 'International patients trust us for exceptional care and seamless medical travel experiences.')}
          </p>
        </div>

        {/* Trust Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-20 lg:mb-32">
          {[
            {
              icon: ShieldCheck,
              title: t('tourism.trust.certified', 'ISO Certified'),
              desc: t('tourism.trust.certifiedDesc', 'International quality standards for medical care.'),
              badge: 'Certified'
            },
            {
              icon: Users,
              title: t('tourism.trust.patients', '5000+ Patients'),
              desc: t('tourism.trust.patientsDesc', 'From over 50 countries worldwide.'),
              badge: 'Global'
            },
            {
              icon: Award,
              title: t('tourism.trust.experience', '15+ Years'),
              desc: t('tourism.trust.experienceDesc', 'Of dental tourism excellence.'),
              badge: 'Expert'
            },
            {
              icon: Star,
              title: t('tourism.trust.satisfaction', '98% Satisfaction'),
              desc: t('tourism.trust.satisfactionDesc', 'Patient success and happiness rate.'),
              badge: 'Proven'
            }
          ].map((trust, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
              whileHover={{ y: -8 }}
            >
              <div className="bg-white rounded-[2rem] p-10 lg:p-12 h-full text-center border border-[rgba(11,28,45,0.08)] shadow-[0_15px_45px_rgba(11,28,45,0.06)] hover:shadow-[0_25px_60px_rgba(11,28,45,0.12)] transition-all duration-500">
                {/* Badge */}
                <span className="inline-flex px-4 py-1.5 bg-[#F4F7FA] text-[#0B1C2D] text-[10px] font-bold uppercase tracking-widest rounded-full mb-8 border border-[rgba(11,28,45,0.05)]">
                  {trust.badge}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 bg-[#F4F7FA] text-[#0B1C2D] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#0B1C2D] group-hover:text-white transition-all duration-500 shadow-sm">
                  <trust.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0B1C2D] mb-4">
                  {trust.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed font-light">
                  {trust.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* International Patients Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] rounded-[3rem] p-12 lg:p-20 text-white shadow-[0_40px_120px_rgba(11,28,45,0.25)] relative overflow-hidden"
        >
          {/* Abstract background detail */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.03] blur-[120px] -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 text-center mb-16 lg:mb-20">
            <h3 className="text-3xl lg:text-[52px] font-serif font-bold mb-8 text-white tracking-tight leading-[1.05]">
              {t('tourism.internationalTitle', 'Trusted by International Patients')}
            </h3>
            <p className="text-xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
              {t('tourism.internationalDesc', 'Patients from around the world choose FeRa Clinic for our expertise, technology, and comprehensive care.')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {[
              { icon: Globe, label: t('tourism.country1', '50+ Countries'), desc: t('tourism.country1Desc', 'Patients served globally') },
              { icon: Heart, label: t('tourism.country2', '24/7 Support'), desc: t('tourism.country2Desc', 'Always available for you') },
              { icon: Award, label: t('tourism.country3', 'Premium Care'), desc: t('tourism.country3Desc', 'Luxury medical experience') }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-10 border border-white/10 text-center hover:bg-white/20 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white tracking-tight">{item.label}</h4>
                <p className="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* 
══════════════════════════════════════
  STRONG CTA SECTION
══════════════════════════════════════ */}
      <SectionWrapper padding="py-24 lg:py-32" background="navy">
        <div className="bg-transparent rounded-[3rem] px-12 lg:px-24 py-24 lg:py-32 text-center max-w-[1400px] mx-auto relative overflow-hidden group">
          {/* Abstract background detail */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-[0.03] blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white opacity-[0.02] blur-[100px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 space-y-12">
            <div className="flex flex-col items-center gap-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl lg:text-[72px] font-serif font-bold text-white tracking-tight leading-[1.05] max-w-4xl mx-auto">
                {t('tourism.ctaTitle1', 'Start Your Dental')} <br />
                <span className="italic font-light opacity-80">{t('tourism.ctaTitle2', 'Journey Today')}</span>
              </h2>
            </div>

            <p className="text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
              {t('tourism.ctaDesc', 'Join thousands of international patients who have transformed their smiles with FeRa Clinic in Istanbul.')}
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
