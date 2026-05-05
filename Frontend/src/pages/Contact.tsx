import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  ChevronDown,
  Zap
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { submitLead } from '../lib/leadService'
import { SectionWrapper } from '../components/ui/SectionWrapper'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { FormInput } from '../components/ui/FormInput'

export function Contact() {
  const { t, i18n } = useTranslation()
  useSEO({ 
    title: t('contact.seo.title'), 
    description: t('contact.seo.description') 
  })
  const ref = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    treatment: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [errorMsg, setErrorMsg] = useState('')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')
    try {
      await submitLead({
        form_type: 'Contact',
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        treatment_interest: formData.treatment,
        message: formData.message,
        language: i18n.language
      })
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '', treatment: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err: any) {
      setErrorMsg(err.message)
    }
  }

  const getContactInfo = (t: any) => [
    {
      icon: Phone,
      title: t('contact.info.phone'),
      details: [t('common.whatsappNumberDisplay', '+90 536 746 01 00')],
      description: t('contact.info.phoneDesc', 'Available for international patient inquiries'),
      href: "tel:+905367460100"
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      details: ['consultation@feraclinic.com'],
      description: t('contact.info.emailDesc', 'Response typically within 24 hours'),
      href: "mailto:consultation@feraclinic.com"
    },
    {
      icon: MapPin,
      title: t('contact.info.location'),
      details: [t('contact.info.locationDetail', 'Kazlıçeşme, Kennedy Cad. No:62 D:1, 34020 Zeytinburnu/İstanbul')],
      description: t('contact.info.locationDesc', 'Central location in prestigious district'),
      href: "https://www.google.com/maps/search/Kazlıçeşme Kennedy Cad. No:62 D:1 34020 Zeytinburnu İstanbul"
    },
    {
      icon: Clock,
      title: t('contact.info.hours'),
      details: [t('contact.info.hoursMonFri', 'Mon–Fri: 9:00 AM – 8:00 PM'), t('contact.info.hoursSat', 'Sat: 10:00 AM – 6:00 PM')],
      description: t('contact.info.hoursDesc', 'Flexible scheduling for international patients'),
      href: null
    }
  ]

  const getTreatments = (t: any) => [
    t('treatments.implants', 'Dental Implants'),
    t('treatments.veneers', 'Porcelain Veneers'),
    t('treatments.ortho', 'Orthodontics'),
    t('treatments.fullMouth', 'Full Mouth Reconstruction'),
    t('treatments.whitening', 'Teeth Whitening'),
    t('treatments.smileMakeover', 'Smile Makeover'),
    t('common.other', 'Other')
  ]



  return (
    <div className="min-h-screen bg-white">
      {/* 
══════════════════════════════════════
  CONTACT HERO - PREMIUM GLASS STYLE
══════════════════════════════════════ */}
      <section className="relative min-h-[780px] md:min-h-[820px] lg:min-h-[92vh] flex items-start overflow-hidden pb-20">
        {/* Enhanced Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fera-clinic/clinic/reception.webp"
            alt={t('alt.reception', 'FeRa Clinic Reception')}
            className="w-full h-full object-cover object-center"
            style={{ animation: 'heroZoom 15s ease-in-out infinite alternate' }}
            loading="eager"
            fetchPriority="high"
          />
          {/* Standardized Dark Overlay for Global Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 backdrop-blur-[1px]" />
        </div>

        {/* Premium Floating Glow Effect */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#0B1C2D]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#0B1C2D]/8 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />

        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 lg:px-10 2xl:px-16 pt-24 sm:pt-28 md:pt-32 lg:pt-24 flex justify-start">
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
              <span className="text-[10px] font-bold text-white uppercase tracking-widest drop-shadow-md">{t('contact.heroEyebrow', 'Get In Touch')}</span>
            </motion.div>

            {/* Premium Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] tracking-tight leading-[1.1] mb-6"
            >
              {t('contact.heroTitle', 'Start Your Journey')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="text-lg text-white/85 font-light leading-relaxed max-w-2xl mb-8 drop-shadow-sm"
            >
              {t('contact.heroDesc', 'Our international patient coordinators are ready to assist you with every step of your transformative dental experience.')}
            </motion.p>

            {/* Premium CTA Buttons */}
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
                  <item.icon className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 
══════════════════════════════════════
  CONTACT INFO CARDS - PREMIUM DESIGN
══════════════════════════════════════ */}
      <SectionWrapper padding="py-20 lg:py-24" background="white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1] mb-8">
              {t('contact.info.title', 'Contact Information')}
            </h2>
            <p className="text-xl text-[#64748B] font-light leading-relaxed max-w-3xl mx-auto">
              {t('contact.info.desc', 'Multiple convenient ways to reach our international patient coordinators.')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {getContactInfo(t).map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target={info.href?.includes('http') ? '_blank' : undefined}
                rel={info.href?.includes('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group block"
              >
                <div className="bg-white rounded-[2rem] border border-[rgba(11,28,45,0.08)] shadow-[0_15px_45px_rgba(11,28,45,0.06)] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(11,28,45,0.12)] transition-all duration-500 p-10 h-full flex flex-col items-center text-center">
                  {/* Icon Box */}
                  <div className="w-16 h-16 rounded-2xl bg-[#0B1C2D]/5 text-[#0B1C2D] flex items-center justify-center mx-auto mb-8 group-hover:bg-[#0B1C2D] group-hover:text-white transition-all duration-500 shadow-sm">
                    <info.icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B1C2D]/50 mb-4">
                    {info.title}
                  </h3>

                  {/* Details */}
                  <div className="mb-6 space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-xl font-bold text-[#0B1C2D] tracking-tight group-hover:text-[#162e45] transition-colors duration-300">
                        {detail}
                      </p>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#64748B] leading-relaxed font-light">
                    {info.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 
══════════════════════════════════════
  CONTACT FORM - LUXURY DESIGN
══════════════════════════════════════ */}
      <SectionWrapper ref={ref} padding="py-20 lg:py-24" background="gray">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: i18n.dir() === 'rtl' ? 28 : -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Form Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1] mb-6">
                  {t('contact.form.submit', 'Send Us a Message')}
                </h2>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  {t('contact.form.desc', 'Fill out the form below and our team will get back to you within 24 hours.')}
                </p>
              </motion.div>

              {/* Success Message */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-3xl border border-green-200 bg-green-50 p-8 text-center shadow-lg"
                >
                  <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green-600" />
                  <h3 className="mb-2 text-xl font-semibold text-green-800">{t('contact.form.success', 'Request Received')}</h3>
                  <p className="leading-7 text-green-700">
                    {t('contact.form.successDesc', "Thank you for contacting FeRa Clinic. Our team will review your information and get in touch with you shortly to discuss your treatment options.")}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                  onSubmit={handleSubmit} className="space-y-6"
                >
                  {/* Luxury Form Card */}
                  <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] border border-[rgba(11,28,45,0.10)] shadow-[0_30px_90px_rgba(11,28,45,0.12)] p-10 lg:p-14">
                    {/* Hidden Language Field */}
                    <input type="hidden" name="language" value={i18n.language} />

                    {/* Error Message */}
                    {errorMsg && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-600 mb-8"
                      >
                        {errorMsg}
                      </motion.div>
                    )}

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0B1C2D]/50 mb-3">
                          {t('contact.form.name')} *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full h-16 rounded-2xl border border-gray-100 bg-[#F8FAFC] px-6 text-[#0B1C2D] outline-none transition-all focus:border-[#0B1C2D]/30 focus:ring-4 focus:ring-[#0B1C2D]/5 placeholder:text-gray-400"
                          placeholder={t('contact.form.namePlaceholder', 'Your full name')}
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0B1C2D]/50 mb-3">
                          {t('contact.form.email')} *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full h-16 rounded-2xl border border-gray-100 bg-[#F8FAFC] px-6 text-[#0B1C2D] outline-none transition-all focus:border-[#0B1C2D]/30 focus:ring-4 focus:ring-[#0B1C2D]/5 placeholder:text-gray-400"
                          placeholder={t('contact.form.emailPlaceholder', 'your.email@example.com')}
                        />
                      </div>
                    </div>

                    {/* Phone & Treatment Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0B1C2D]/50 mb-3">
                          {t('contact.form.phone')} *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full h-16 rounded-2xl border border-gray-100 bg-[#F8FAFC] px-6 text-[#0B1C2D] outline-none transition-all focus:border-[#0B1C2D]/30 focus:ring-4 focus:ring-[#0B1C2D]/5 placeholder:text-gray-400"
                          placeholder={t('contact.form.phonePlaceholder', '+1 234 567 8900')}
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0B1C2D]/50 mb-3">
                          {t('contact.form.treatment')}
                        </label>
                        <div className="relative">
                          <select
                            name="treatment"
                            value={formData.treatment}
                            onChange={handleInputChange}
                            className="w-full h-16 rounded-2xl border border-gray-100 bg-[#F8FAFC] px-6 text-[#0B1C2D] outline-none transition-all focus:border-[#0B1C2D]/30 focus:ring-4 focus:ring-[#0B1C2D]/5 appearance-none cursor-pointer"
                          >
                            <option value="">{t('contact.form.treatmentPlaceholder', 'Select treatment type')}</option>
                            {getTreatments(t).map((treatment) => (
                              <option key={treatment} value={treatment}>{treatment}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0B1C2D]/30 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-10">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0B1C2D]/50 mb-3">
                        {t('contact.form.message')}
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border border-gray-100 bg-[#F8FAFC] px-6 py-5 text-[#0B1C2D] outline-none transition-all focus:border-[#0B1C2D]/30 focus:ring-4 focus:ring-[#0B1C2D]/5 resize-none placeholder:text-gray-400"
                        placeholder={t('contact.form.messagePlaceholder', 'Please describe your concerns and what you would like to improve...')}
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      className="w-full bg-[#0B1C2D] text-white text-sm font-bold rounded-full py-6 px-10 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-4 group uppercase tracking-widest"
                      whileHover={{ y: -4, boxShadow: "0 25px 50px rgba(11,28,45,0.25)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{t('contact.form.submit')}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </motion.div>

            {/* Map & Info Section */}
            <motion.div
              initial={{ opacity: 0, x: i18n.dir() === 'rtl' ? -28 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Premium Map Card */}
              <motion.a
                href="https://www.google.com/maps/search/Kazlıçeşme Kennedy Cad. No:62 D:1 34020 Zeytinburnu İstanbul"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group block"
              >
                <div className="bg-white rounded-[2.5rem] border border-[rgba(11,28,45,0.08)] shadow-[0_15px_45px_rgba(11,28,45,0.06)] overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-700 relative group">
                  {/* Map iframe with proper responsive height */}
                  <div className="relative h-[280px] md:h-[450px] overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6425141042!2d28.895318376662483!3d40.989344420199175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab59345e54c87%3A0xf6b92789230526e7!2sFeRa%20Clinic!5e0!3m2!1sen!2str!4v1714578112345!5m2!1sen!2str"
                      className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={t('contact.mapTitle', 'FeRa Clinic Location')}
                    />
                    
                    {/* Clean overlay badge with address */}
                    <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md rounded-[1.5rem] p-6 shadow-xl border border-white/50 max-w-[280px]">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#0B1C2D] flex items-center justify-center flex-shrink-0 shadow-lg">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#0B1C2D]/50 mb-1">{t('contact.info.location', 'Location')}</p>
                          <p className="text-sm font-bold text-[#0B1C2D] leading-tight">
                            {t('common.clinicAddress')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA section */}
                  <div className="p-8 bg-white border-t border-gray-100">
                    <div className="flex items-center justify-between gap-6">
                      <div className="hidden sm:block">
                        <p className="text-base font-bold text-[#0B1C2D] mb-1">
                          {t('contact.map.ctaTitle', 'Visit Our Istanbul Clinic')}
                        </p>
                        <p className="text-xs text-[#64748B] font-light">
                          {t('contact.map.ctaDesc', 'Centrally located premium dental facility.')}
                        </p>
                      </div>
                      <button className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-3 px-8 py-4 bg-[#0B1C2D]/5 text-[#0B1C2D] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#0B1C2D] hover:text-white transition-all duration-500">
                        <MapPin className="w-4 h-4" />
                        {t('contact.map.openMaps', 'Open in Google Maps')}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* International Patients Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0B1C2D] via-[#162e45] to-[#0B1C2D] backdrop-blur-md rounded-[2.5rem] p-10 lg:p-14 text-white shadow-2xl shadow-[#0B1C2D]/20 border border-white/10 relative overflow-hidden"
              >
                {/* Abstract glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full" />
                
                <h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-10 relative z-10 text-white font-semibold">
                  {t('common.internationalPatients')}
                </h3>

                <div className="space-y-6 relative z-10">
                  {[
                    [t('home.tourism.vip', 'Airport Transfer'), t('contact.intl.vipDesc', 'Seamless arrival coordination and clinic transportation')],
                    [t('home.tourism.hotel', 'Accommodation Assistance'), t('contact.intl.hotelDesc', 'Guidance for nearby stay options during treatment')],
                    [t('home.tourism.language', 'Multilingual Staff'), t('contact.intl.langDesc', 'Communication support for international patients')],
                    [t('consultation.trustFeatures.globalTitle', 'Virtual Consultations'), t('contact.intl.virtualDesc', 'Initial guidance and treatment planning remotely')]
                  ].map(([title, desc]) => (
                    <div key={title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-[#7CC4FF]" />
                      </div>
                      <div>
                        <p className="font-bold tracking-tight mb-1">{title}</p>
                        <p className="text-sm leading-relaxed text-white/60 font-light">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-10 border-t border-white/10 relative z-10">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">
                    {t('contact.intl.immediateAssistance', 'Direct Assistance')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href="tel:+905367460100"
                      className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0B1C2D] rounded-full font-bold text-xs uppercase tracking-widest shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone className="h-4 w-4" />
                      <span>{t('contact.cta.callNow')}</span>
                    </motion.a>
                    <motion.a
                      href={`https://wa.me/${t('common.whatsappNumber', '905367460100')}?text=${encodeURIComponent(t('common.whatsappMessage', 'Hello, I have a question about treatments.'))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Zap className="h-4 w-4 text-[#7CC4FF] fill-current" />
                      <span>{t('common.whatsapp', 'WhatsApp')}</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}