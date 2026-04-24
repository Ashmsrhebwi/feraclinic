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
  Users
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'

export function Contact() {
  const { t, i18n } = useTranslation()
  useSEO({ title: t('navigation.contact'), description: t('contact.subtitle') })
  const ref = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    treatment: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const getContactInfo = (t: any) => [
    {
      icon: Phone,
      title: t('contact.info.phone'),
      details: [t('common.whatsappNumberDisplay', '+90 555 123 45 67')],
      description: t('contact.info.phoneDesc', 'Available for international patient inquiries')
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      details: ['contact@feraclinic.com'],
      description: t('contact.info.emailDesc', 'Response typically within 24 hours')
    },
    {
      icon: MapPin,
      title: t('contact.info.location'),
      details: [t('contact.info.locationDetail', 'Nişantaşı, Istanbul, Türkiye')],
      description: t('contact.info.locationDesc', 'Central location in prestigious district')
    },
    {
      icon: Clock,
      title: t('contact.info.hours'),
      details: [t('contact.info.hoursMonFri', 'Mon–Fri: 9:00 AM – 8:00 PM'), t('contact.info.hoursSat', 'Sat: 10:00 AM – 6:00 PM')],
      description: t('contact.info.hoursDesc', 'Flexible scheduling for international patients')
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

  console.log("PAGE LOADED: Contact")

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* 1. HERO - UNIFIED SYSTEM */}
      <section className="relative min-h-[780px] md:min-h-[820px] lg:min-h-[92vh] flex items-start overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fera-clinic/clinic/reception.webp"
            alt={t('alt.reception', 'FeRa Clinic Reception')}
            className="w-full h-full object-cover object-[center_35%] scale-[1.03]"
            style={{ animation: 'heroZoom 45s linear infinite alternate' }}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-white/90 via-white/70 to-transparent" />
        </div>

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
              <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-fera-accent uppercase tracking-[0.25em]">{t('contact.heroEyebrow', 'Connect With Us')}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.2rem,8vw,3.6rem)] lg:text-[clamp(3.6rem,5vw,4.6rem)] font-semibold text-fera-deep tracking-tight leading-[0.98] mb-6"
            >
              {t('contact.heroTitle', 'Start Your Journey')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[15px] sm:text-base lg:text-lg text-fera-deep/90 max-w-[58ch] font-normal leading-[1.75] mb-8"
            >
              {t('contact.heroDesc', 'Our international patient coordinators are ready to assist you with every step of your transformative dental experience.')}
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
                  <span className="uppercase tracking-widest text-sm font-bold">{t('contact.ctaPrimary', 'Free Consultation')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300" />
                </Button>
              </Link>

              <Link to="/gallery" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  variant="outline"
                  className="w-full sm:min-w-[260px] h-12 sm:h-14 px-12 group active-press"
                >
                  <span className="uppercase tracking-widest text-sm font-bold">{t('contact.ctaSecondary', 'View Gallery')}</span>
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

      {/* CONTACT INFO */}
      <section className="bg-white px-6 py-20 lg:py-32 lg:px-8 border-t border-gray-100">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {getContactInfo(t).map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="card-premium-hover rounded-luxury-lg border border-fera-border/30 bg-white p-10 text-center shadow-luxury-sm group transition-all duration-500"
            >
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-fera-surface text-fera-primary group-hover:bg-fera-deep group-hover:text-white transition-all duration-500 shadow-luxury-sm">
                <info.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-fera-deep">{info.title}</h3>
              <div className="mb-4 space-y-2">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-base font-bold text-fera-deep tracking-tight">{detail}</p>
                ))}
              </div>
              <p className="text-[13px] text-fera-gray/60 font-light leading-relaxed">{info.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONSULTATION FORM */}
      <section ref={ref} className="bg-[#F5F7FA] px-6 py-20 lg:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: i18n.dir() === 'rtl' ? 28 : -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-fera-deep mb-8 tracking-tight leading-[1.15]">
              {t('contact.form.submit')}
            </h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center"
              >
                <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green-600" />
                <h3 className="mb-2 text-xl font-semibold text-green-800">{t('contact.form.success', 'Request Received')}</h3>
                <p className="leading-7 text-green-700">
                  {t('contact.form.successDesc', "Thank you for contacting FeRa Clinic. Our team will review your information and get in touch with you shortly to discuss your treatment options.")}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden Language Field */}
                <input type="hidden" name="language" value={i18n.language} />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-[11px] font-bold uppercase tracking-widest text-fera-deep/40">{t('contact.form.name')} *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-fera-border/30 bg-white px-6 py-5 text-[15px] text-fera-deep outline-none transition-all focus:border-fera-primary/50 focus:ring-4 focus:ring-fera-primary/5 shadow-luxury-sm"
                      placeholder={t('contact.form.namePlaceholder', 'Your full name')}
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-[11px] font-bold uppercase tracking-widest text-fera-deep/40">{t('contact.form.email')} *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-fera-border/30 bg-white px-6 py-5 text-[15px] text-fera-deep outline-none transition-all focus:border-fera-primary/50 focus:ring-4 focus:ring-fera-primary/5 shadow-luxury-sm"
                      placeholder={t('contact.form.emailPlaceholder', 'your.email@example.com')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-[11px] font-bold uppercase tracking-widest text-fera-deep/40">{t('contact.form.phone')} *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-fera-border/30 bg-white px-6 py-5 text-[15px] text-fera-deep outline-none transition-all focus:border-fera-primary/50 focus:ring-4 focus:ring-fera-primary/5 shadow-luxury-sm"
                      placeholder={t('contact.form.phonePlaceholder', '+1 234 567 8900')}
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-[11px] font-bold uppercase tracking-widest text-fera-deep/40">{t('contact.form.treatment')}</label>
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-fera-border/30 bg-white px-6 py-5 text-[15px] text-fera-deep outline-none transition-all focus:border-fera-primary/50 focus:ring-4 focus:ring-fera-primary/5 shadow-luxury-sm appearance-none cursor-pointer"
                    >
                      <option value="">{t('contact.form.treatmentPlaceholder', 'Select treatment type')}</option>
                      {getTreatments(t).map((treatment) => (
                        <option key={treatment} value={treatment}>{treatment}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-[11px] font-bold uppercase tracking-widest text-fera-deep/40">{t('contact.form.message')}</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-fera-border/30 bg-white px-6 py-5 text-[15px] text-fera-deep outline-none transition-all focus:border-fera-primary/50 focus:ring-4 focus:ring-fera-primary/5 shadow-luxury-sm resize-none h-44"
                    placeholder={t('contact.form.messagePlaceholder', 'Please describe your concerns and what you would like to improve...')}
                  />
                </div>

                <Button type="submit" variant="primary" size="xl" fullWidth className="active-press group">
                  <span className="uppercase tracking-[0.2em] text-sm font-bold">{t('contact.form.submit')}</span>
                  <ArrowRight className="ms-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: i18n.dir() === 'rtl' ? -28 : 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div className="space-y-8">
              {/* Map — links to Google Maps instead of broken embed */}
              <a
                href="https://www.google.com/maps/search/FeRa+Clinic+Nisantasi+Istanbul"
                target="_blank"
                rel="noopener noreferrer"
                className="group mb-8 flex flex-col items-center justify-center overflow-hidden rounded-2xl
                           border border-gray-200 bg-[#F5F7FA] shadow-sm
                           hover:shadow-[0_8px_32px_rgba(27,70,152,0.10)] transition-shadow duration-200
                           h-[220px] gap-4 text-center px-6"
                aria-label={t('a11y.viewGoogleMaps', 'View FeRa Clinic on Google Maps')}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-[#1b4698]" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-[#1b4698]">{t('contact.info.locationDetail', 'Nişantaşı, Istanbul, Türkiye')}</p>
                  <p className="text-xs text-[#6B7280] mt-1">{t('contact.info.mapClick', 'Click to view on Google Maps →')}</p>
                </div>
              </a>

              <div className="rounded-luxury-lg bg-fera-deep p-12 text-white shadow-luxury-xl relative overflow-hidden">
                <div className="absolute top-0 end-0 w-32 h-32 bg-fera-primary/10 blur-[80px] rounded-full" />
                <h3 className="mb-8 text-3xl font-bold tracking-tight">
                  {t('common.internationalPatients')}
                </h3>

                <div className="space-y-4">
                  {[
                    [t('home.tourism.vip', 'Airport Transfer'), t('contact.intl.vipDesc', 'Seamless arrival coordination and clinic transportation')],
                    [t('home.tourism.hotel', 'Accommodation Assistance'), t('contact.intl.hotelDesc', 'Guidance for nearby stay options during treatment')],
                    [t('home.tourism.language', 'Multilingual Staff'), t('contact.intl.langDesc', 'Communication support for international patients')],
                    [t('consultation.trustFeatures.globalTitle', 'Virtual Consultations'), t('contact.intl.virtualDesc', 'Initial guidance and treatment planning remotely')]
                  ].map(([title, desc]) => (
                    <div key={title} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#D4AF37]" />
                      <div>
                        <p className="font-medium">{title}</p>
                        <p className="text-sm leading-7 text-white/80">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/70 mb-4">
                    {t('contact.intl.immediateAssistance', 'For immediate assistance or to schedule your consultation:')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:+905551234567"
                      className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="font-medium">{t('contact.cta.callNow')}</span>
                    </a>
                    <a
                      href={`https://wa.me/${t('common.whatsappNumber', '905551234567')}?text=${encodeURIComponent(t('common.whatsappMessage', 'Hello, I have a question about treatments.'))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.197-.771.967-.945 1.164-.174.197-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <span className="font-medium">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
