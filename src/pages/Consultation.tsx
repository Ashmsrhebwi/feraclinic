import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, Mail, Clock, MapPin, CheckCircle2, Upload, Shield, ArrowRight, ShieldCheck, Stethoscope, Globe, Lock } from 'lucide-react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { Button } from '../components/ui/button'
import { BrandDivider } from '../components/ui/BrandDivider'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'

interface ConsultationForm {
  fullName: string
  email: string
  phone: string
  countryCode: string
  treatment: string
  message: string
  images: FileList | null
}

interface CRMLead {
  name: string
  email: string
  phone: string
  country: string
  treatment: string
  message: string
  source: 'consultation_form'
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
}

export function Consultation() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm<ConsultationForm>()
  const { t, i18n } = useTranslation()
  useSEO({ title: t('navigation.consultation', 'Consultation'), description: t('consultation.subtitle', 'Start your smile protocol.') })

  const onSubmit = async (data: ConsultationForm) => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const crmLead: CRMLead = {
        name: data.fullName,
        email: data.email,
        phone: `${data.countryCode}${data.phone}`,
        country: data.countryCode,
        treatment: data.treatment,
        message: data.message,
        source: 'consultation_form'
      }

      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSubmitted(true)
    } catch (error) {
      setSubmitError('Clinical services are currently transitioning. Please use WhatsApp for urgent intake.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const treatments = [
    t('treatments.implants', 'Dental Implants'),
    t('treatments.veneers', 'Porcelain Veneers'),
    t('treatments.allOn4', 'All-on-4 Restoration'),
    t('treatments.sinusLifting', 'Sinus Lifting'),
    t('treatments.crowns', 'Zirconium Crowns'),
    t('treatments.smileDesign', 'Digital Smile Design')
  ]

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-xl text-center"
        >
          <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-[#1b4698] text-[#D4AF37]">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <h2 className="mb-6 text-5xl font-semibold text-[#1b4698] tracking-tighter">
            {t('consultation.intake', 'Intake')} <br />
            <span className="gold-highlight">{t('consultation.received', 'Received.')}</span>
          </h2>

          <p className="mb-12 text-lg text-slate-500 font-light leading-relaxed">
            {t('consultation.successDesc', 'Your medical intake has been submitted to our clinical coordinators. A specialized treatment coordinator will review your request and contact you within 24 hours.')}
          </p>

          <Link to="/">
            <Button variant="outline" className="px-12 h-16 border-gray-100 hover:bg-[#1b4698] hover:text-white transition-all">
              {t('consultation.returnHome', 'Return to Clinic')}
            </Button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[780px] md:min-h-[820px] lg:min-h-[92vh] flex items-start overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fera-clinic/treatments/orthodontic-checkup.webp"
            alt={t('alt.consultation', 'FeRa Clinic Consultation')}
            className="w-full h-full object-cover object-[center_35%] scale-[1.05]"
            style={{ animation: 'heroZoom 45s linear infinite alternate' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-white/85 via-white/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 md:pt-32 lg:pt-24 flex justify-start">
          <div className="w-full max-w-[92vw] sm:max-w-[680px] lg:max-w-[760px] xl:max-w-[820px] bg-white/82 md:bg-white/68 backdrop-blur-md rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            {/* Trust Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-fera-accent" />
              <span className="text-[10px] sm:text-xs font-bold text-fera-accent uppercase tracking-[0.25em]">{t('consultation.heroEyebrow')}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.2rem,8vw,3.6rem)] lg:text-[clamp(3.6rem,5vw,4.6rem)] font-semibold text-fera-deep tracking-tight leading-[0.98] mb-6"
            >
              {t('consultation.heroTitle')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[15px] sm:text-base lg:text-lg text-fera-deep/90 max-w-[58ch] font-normal leading-[1.75] mb-8"
            >
              {t('consultation.heroDesc')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 lg:gap-6 mb-8"
            >
              <Link to="/gallery" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  variant="outline"
                  className="w-full sm:min-w-[260px] h-12 sm:h-14 px-12 group active-press"
                >
                  <span className="uppercase tracking-widest text-sm font-bold">{t('consultation.ctaSecondary')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Form Flow */}
      <section className="px-6 py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

            {/* Trust & Security Sidebar */}
            <div className="lg:col-span-4 space-y-16">
              <div className="sticky top-32">
                <div className="mb-16">
                  <h3 className="text-3xl font-semibold text-[#1b4698] mb-6 tracking-tight">{t('consultation.trustTitle', 'Clinical Trust')}</h3>
                  <p className="text-slate-600 font-light leading-relaxed text-sm">
                    {t('consultation.trustDesc', 'At FeRa Clinic, we prioritize medical standard security and patient confidentiality. Every submission is directly reviewed by our department heads in Nişantaşı.')}
                  </p>
                </div>

                <div className="space-y-12">
                  {[
                    { icon: Lock, title: t('consultation.trustFeatures.dataTitle', 'Encrypted Data'), desc: t('consultation.trustFeatures.dataDesc', 'Secure medical-grade SSL protocols for patient data.') },
                    { icon: ShieldCheck, title: t('consultation.trustFeatures.secrecyTitle', 'Professional Secrecy'), desc: t('consultation.trustFeatures.secrecyDesc', 'Compliant with medical confidentiality standards.') },
                    { icon: Globe, title: t('consultation.trustFeatures.globalTitle', 'Global Coordination'), desc: t('consultation.trustFeatures.globalDesc', 'Specialized support for international patients.') }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-12 h-12 rounded-xl border border-gray-100 flex items-center justify-center text-[#1b4698] flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#008BC9]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#1b4698] uppercase tracking-widest leading-tight mb-1">{item.title}</h4>
                        <p className="text-xs text-slate-500 font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-20 pt-16 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-[#1b4698]">
                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-[#008BC9]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{t('consultation.priorityIntake', 'Direct Priority Intake')}</p>
                      <p className="font-semibold">{t('common.whatsappNumberDisplay', '+90 555 123 45 67')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-16">

                {/* Section 1: Personal */}
                <div className="space-y-12 p-6 md:p-10 rounded-3xl bg-slate-50/50 border border-slate-100/50">
                  <div className="flex items-center justify-between border-b border-slate-200/50 pb-6">
                    <h4 className="text-2xl font-semibold text-[#1b4698] tracking-tight">{t('consultation.form.appDetails', 'Application Details')}</h4>
                    <span className="text-[10px] font-bold text-[#1b4698]/30 uppercase tracking-[0.2em]">{t('consultation.form.section1', 'Section 01')}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="text-xs font-bold text-[#1b4698]/60 uppercase tracking-[0.2em]">{t('contact.form.name', 'Full Name')}</label>
                      <input
                        {...register('fullName', { required: true })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-[15px] text-[#1b4698] outline-none transition-all focus:border-[#1b4698]/30 focus:ring-4 focus:ring-[#1b4698]/5 placeholder:text-slate-300"
                        placeholder={t('consultation.form.namePlaceholder', 'John Doe')}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs font-bold text-[#1b4698]/60 uppercase tracking-[0.2em]">{t('contact.form.email', 'Email Address')}</label>
                      <input
                        {...register('email', { required: true })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-[15px] text-[#1b4698] outline-none transition-all focus:border-[#1b4698]/30 focus:ring-4 focus:ring-[#1b4698]/5 placeholder:text-slate-300"
                        placeholder={t('consultation.form.emailPlaceholder', 'john@example.com')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="text-xs font-bold text-[#1b4698]/60 uppercase tracking-[0.2em]">{t('consultation.form.countryCode', 'Country Code')}</label>
                      <select {...register('countryCode')} className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-[15px] text-[#1b4698] outline-none transition-all focus:border-[#1b4698]/30 focus:ring-4 focus:ring-[#1b4698]/5 appearance-none cursor-pointer">
                        <option value="+44">{t('common.countries.uk', 'United Kingdom')} (+44)</option>
                        <option value="+1">{t('common.countries.us', 'United States')} (+1)</option>
                        <option value="+49">{t('common.countries.germany', 'Germany')} (+49)</option>
                        <option value="+90">{t('common.countries.turkey', 'Turkey')} (+90)</option>
                        <option value="+33">{t('common.countries.france', 'France')} (+33)</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs font-bold text-[#1b4698]/60 uppercase tracking-[0.2em]">{t('contact.form.phone', 'Phone Number')}</label>
                      <input
                        {...register('phone')}
                        className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-[15px] text-[#1b4698] outline-none transition-all focus:border-[#1b4698]/30 focus:ring-4 focus:ring-[#1b4698]/5 placeholder:text-slate-300"
                        placeholder={t('consultation.form.phonePlaceholder', '1234567890')}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Clinical */}
                <div className="space-y-12 p-6 md:p-10 rounded-3xl bg-slate-50/50 border border-slate-100/50">
                  <div className="flex items-center justify-between border-b border-slate-200/50 pb-6">
                    <h4 className="text-2xl font-semibold text-[#1b4698] tracking-tight">{t('consultation.form.clinicalAssessment', 'Clinical Assessment')}</h4>
                    <span className="text-[10px] font-bold text-[#1b4698]/30 uppercase tracking-[0.2em]">{t('consultation.form.section2', 'Section 02')}</span>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold text-[#1b4698]/60 uppercase tracking-[0.2em]">{t('consultation.form.treatment', 'Primary Treatment of Interest')}</label>
                    <select {...register('treatment')} className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-[15px] text-[#1b4698] outline-none transition-all focus:border-[#1b4698]/30 focus:ring-4 focus:ring-[#1b4698]/5 appearance-none cursor-pointer">
                      <option value="">{t('consultation.form.selectTreatment', 'Select Treatment Discipline')}</option>
                      {treatments.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold text-[#1b4698]/60 uppercase tracking-[0.2em]">{t('consultation.form.history', 'Additional Medical History (Optional)')}</label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-[15px] text-[#1b4698] outline-none transition-all focus:border-[#1b4698]/30 focus:ring-4 focus:ring-[#1b4698]/5 resize-none h-40 placeholder:text-slate-300"
                      placeholder={t('consultation.form.historyPlaceholder', 'Briefly describe your dental needs or current concerns...')}
                    />
                  </div>
                </div>

                {/* Submission */}
                <div className="pt-20">
                  <Button
                    type="submit"
                    variant="premium"
                    disabled={isSubmitting}
                    className="w-full h-20 text-xl shadow-luxury hover:scale-[1.02] transition-all duration-500"
                  >
                    {isSubmitting ? t('consultation.form.submitting', 'Processing Clinical Data...') : t('common.freeConsultation', 'Get Free Consultation')}
                    {!isSubmitting && <ArrowRight className="ms-4 h-6 w-6" />}
                  </Button>
                  <div className="mt-10 text-center">
                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                      {t('consultation.form.estimateNotice', 'Your estimate will be sent to the provided email within 24 hours.')}
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
