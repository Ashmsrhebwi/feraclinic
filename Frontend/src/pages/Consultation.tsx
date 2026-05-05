import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock, MapPin, CheckCircle2, Upload, Shield, ArrowRight, ShieldCheck, Stethoscope, Globe, Lock, Check, Award, Users } from 'lucide-react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { Button } from '../components/ui/button'
import { BrandDivider } from '../components/ui/BrandDivider'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { submitLead } from '../lib/leadService'
import { HeroCard } from '../components/ui/HeroCard'
import { SectionWrapper } from '../components/ui/SectionWrapper'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { SecondaryButton } from '../components/ui/SecondaryButton'
import { FormInput } from '../components/ui/FormInput'
import { FormStepCard } from '../components/ui/FormStepCard'
import { ProgressIndicator } from '../components/ui/ProgressIndicator'

interface ConsultationForm {
  fullName: string
  email: string
  phone: string
  treatment: string
  contactMethod: string
  message: string
}

export function Consultation() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [formData, setFormData] = useState<ConsultationForm>({
    fullName: '',
    email: '',
    phone: '',
    treatment: '',
    contactMethod: '',
    message: ''
  })
  const { t, i18n } = useTranslation()
  useSEO({ 
    title: t('consultation.seo.title'), 
    description: t('consultation.seo.description') 
  })

  const steps = [t('common.consultationSteps.personalInfo'), t('common.consultationSteps.treatment'), t('common.consultationSteps.contactMethod'), t('common.consultationSteps.review')]
  const totalSteps = 4

  const handleInputChange = (field: keyof ConsultationForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const onSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      await submitLead({
        form_type: 'Consultation',
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        treatment_interest: formData.treatment,
        message: formData.message,
        language: i18n.language
      })

      setIsSubmitted(true)
    } catch (error: any) {
      setSubmitError(error.message || 'Submission failed. Please try again or use WhatsApp.')
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

  const contactMethods = [
    { value: 'whatsapp', label: t('consultation.contactMethods.whatsapp'), icon: Phone },
    { value: 'call', label: t('consultation.contactMethods.phoneCall'), icon: Phone },
    { value: 'email', label: t('consultation.contactMethods.email'), icon: Mail }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl"
        >
          <div className="bg-white rounded-[3rem] border border-gray-100 shadow-[0_40px_100px_rgba(11,28,45,0.1)] p-12 lg:p-20 text-center">
            {/* Success Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-10 w-24 h-24 rounded-[2rem] bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] text-white flex items-center justify-center shadow-2xl rotate-12"
            >
              <CheckCircle2 className="w-12 h-12" />
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1] mb-8">
              {t('consultation.success.title', 'Request Received')}
            </h2>

            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              {t('consultation.success.description', 'Thank you for choosing FeRa Clinic. Our patient coordinators will review your case and contact you within 24 hours.')}
            </p>

            {/* Next Steps List */}
            <div className="bg-[#F8FAFC] rounded-[2rem] p-10 text-left space-y-8 mb-12">
              <h3 className="text-sm font-bold text-[#0B1C2D] uppercase tracking-[0.3em] mb-4">
                {t('consultation.success.nextStepsTitle', 'What Happens Next')}
              </h3>
              {[
                { step: '01', title: t('consultation.success.nextStep1.title'), desc: t('consultation.success.nextStep1.desc') },
                { step: '02', title: t('consultation.success.nextStep2.title'), desc: t('consultation.success.nextStep2.desc') },
                { step: '03', title: t('consultation.success.nextStep3.title'), desc: t('consultation.success.nextStep3.desc') }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-2xl font-serif font-bold text-[#0B1C2D]/20">{item.step}</span>
                  <div>
                    <h4 className="text-lg font-bold text-[#0B1C2D] mb-1">{item.title}</h4>
                    <p className="text-gray-500 font-light text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/">
              <motion.button 
                className="px-12 py-5 bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] text-white rounded-full font-bold text-xs uppercase tracking-[0.3em] shadow-2xl transition-all duration-500"
                whileHover={{ y: -4 }}
              >
                {t('consultation.success.returnHome', 'Return to Home')}
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fera-clinic/treatments/orthodontic-checkup.webp"
            alt={t('alt.consultation', 'FeRa Clinic Consultation')}
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
                {t('consultation.heroEyebrow', 'Digital Diagnosis')}
              </span>
            </div>

            {/* Premium Heading */}
            <h1 className="text-5xl lg:text-[84px] font-serif font-bold text-white tracking-tight leading-[1.05] mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              {t('consultation.heroTitle', 'Free Online Evaluation')}
            </h1>

            <p className="text-xl text-white/85 font-light leading-relaxed max-w-2xl mb-12 drop-shadow-sm">
              {t('consultation.heroDesc', 'Get expert dental guidance from our specialists. Your personalized treatment plan starts here.')}
            </p>
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-10">
              {[
                { icon: Lock, text: t('consultation.trustIndicators.confidential', 'Secure') },
                { icon: Clock, text: t('consultation.trustIndicators.fastResponse', '24h Response') },
                { icon: ShieldCheck, text: t('consultation.trustIndicators.specialistReview', 'Expert Review') }
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

      {/* 2. FORM SYSTEM */}
      <SectionWrapper padding="py-24 lg:py-32" background="white">
        <div className="container-std">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-start">
            {/* Main Form Section */}
            <div className="space-y-12">
              {/* Progress Indicator */}
              <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} steps={steps} />

              {/* Error Message */}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600"
                >
                  {submitError}
                </motion.div>
              )}

          {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-[#F8FAFC] rounded-[3rem] p-10 lg:p-16 border border-gray-100/50 shadow-[0_20px_60px_rgba(11,28,45,0.04)]"
                >
                  <h2 className="text-3xl font-serif font-bold text-[#0B1C2D] tracking-tight mb-10">
                    {t('consultation.form.personalInfo', 'Personal Details')}
                  </h2>
                    <div className="space-y-8">
                      {[
                        { id: 'fullName', label: t('consultation.form.fullName', 'Full Name'), placeholder: t('consultation.form.fullNamePlaceholder', 'Enter your name'), type: 'text' },
                        { id: 'email', label: t('consultation.form.emailAddress', 'Email Address'), placeholder: t('consultation.form.emailAddressPlaceholder', 'Enter your email'), type: 'email' },
                        { id: 'phone', label: t('consultation.form.phoneNumber', 'Phone Number'), placeholder: t('consultation.form.phoneNumberPlaceholder', '+1 234 567 890'), type: 'tel' }
                      ].map((field) => (
                        <div key={field.id} className="space-y-3">
                          <label className="text-[10px] font-bold text-[#0B1C2D] uppercase tracking-[0.2em]">{field.label}</label>
                          <input
                            type={field.type}
                            value={formData[field.id as keyof ConsultationForm]}
                            onChange={(e) => handleInputChange(field.id as keyof ConsultationForm, e.target.value)}
                            className="w-full h-16 bg-white border border-gray-100 rounded-2xl px-6 outline-none focus:border-[#0B1C2D] focus:ring-4 focus:ring-[#0B1C2D]/5 transition-all duration-300 shadow-sm"
                            placeholder={field.placeholder}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end mt-12">
                      <motion.button
                        onClick={handleNext}
                        className="px-12 py-5 bg-[#0B1C2D] text-white rounded-full font-bold text-xs uppercase tracking-[0.3em] shadow-2xl transition-all duration-500 flex items-center gap-4"
                        whileHover={{ y: -4 }}
                      >
                        {t('consultation.form.continueToTreatment', 'Next Step')}
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                </motion.div>
              )}
              {/* Step 2: Treatment Selection */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-[#F8FAFC] rounded-[3rem] p-10 lg:p-16 border border-gray-100/50 shadow-[0_20px_60px_rgba(11,28,45,0.04)]"
                >
                  <h2 className="text-3xl font-serif font-bold text-[#0B1C2D] tracking-tight mb-10">
                    {t('consultation.form.treatmentSelection', 'Treatment Choice')}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4 mb-12">
                    {treatments.map((treatment, index) => (
                      <motion.button
                        key={treatment}
                        type="button"
                        onClick={() => handleInputChange('treatment', treatment)}
                        className={`p-6 rounded-2xl border text-left transition-all duration-500 group ${
                          formData.treatment === treatment
                            ? 'bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] border-[#0B1C2D] text-white shadow-xl'
                            : 'bg-white border-gray-100 text-[#0B1C2D] hover:border-[#0B1C2D]/30'
                        }`}
                        whileHover={{ y: -4 }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm uppercase tracking-wider">{treatment}</span>
                          {formData.treatment === treatment && (
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-8 border-t border-gray-200">
                    <button onClick={handlePrevious} className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.3em] hover:text-[#0B1C2D] transition-colors">
                      {t('consultation.form.back', 'Previous Step')}
                    </button>
                    <motion.button
                      onClick={handleNext}
                      disabled={!formData.treatment}
                      className="px-12 py-5 bg-[#0B1C2D] text-white rounded-full font-bold text-xs uppercase tracking-[0.3em] shadow-2xl transition-all duration-500 flex items-center gap-4 disabled:opacity-30"
                      whileHover={!formData.treatment ? {} : { y: -4 }}
                    >
                      {t('consultation.form.continueToContact', 'Next Step')}
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              )}
              {/* Step 3: Contact Method */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-[#F8FAFC] rounded-[3rem] p-10 lg:p-16 border border-gray-100/50 shadow-[0_20px_60px_rgba(11,28,45,0.04)]"
                >
                  <h2 className="text-3xl font-serif font-bold text-[#0B1C2D] tracking-tight mb-10">
                    {t('consultation.form.contactMethod', 'Contact Preference')}
                  </h2>
                  <div className="grid grid-cols-1 gap-4 mb-12">
                    {contactMethods.map((method, index) => (
                      <motion.button
                        key={method.value}
                        type="button"
                        onClick={() => handleInputChange('contactMethod', method.value)}
                        className={`p-6 rounded-2xl border text-left transition-all duration-500 flex items-center justify-between ${
                          formData.contactMethod === method.value
                            ? 'bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] border-[#0B1C2D] text-white shadow-xl'
                            : 'bg-white border-gray-100 text-[#0B1C2D] hover:border-[#0B1C2D]/30'
                        }`}
                        whileHover={{ y: -4 }}
                      >
                        <div className="flex items-center gap-4">
                          <method.icon className={`w-6 h-6 ${formData.contactMethod === method.value ? 'text-white' : 'text-[#0B1C2D]'}`} />
                          <span className="font-bold text-sm uppercase tracking-wider">{method.label}</span>
                        </div>
                        {formData.contactMethod === method.value && <CheckCircle2 className="w-5 h-5 text-white" />}
                      </motion.button>
                    ))}
                  </div>

                  <div className="space-y-4 mb-12">
                    <label className="text-[10px] font-bold text-[#0B1C2D] uppercase tracking-[0.2em]">{t('consultation.form.additionalMessage', 'Comments')}</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="w-full bg-white border border-gray-100 rounded-2xl p-6 outline-none focus:border-[#0B1C2D] focus:ring-4 focus:ring-[#0B1C2D]/5 transition-all duration-500 shadow-sm resize-none"
                      rows={4}
                      placeholder={t('consultation.form.messagePlaceholder', 'Tell us about your dental goals...')}
                    />
                  </div>

                  <div className="flex justify-between items-center pt-8 border-t border-gray-200">
                    <button onClick={handlePrevious} className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.3em] hover:text-[#0B1C2D] transition-colors">
                      {t('consultation.form.back', 'Previous Step')}
                    </button>
                    <motion.button
                      onClick={handleNext}
                      disabled={!formData.contactMethod}
                      className="px-12 py-5 bg-[#0B1C2D] text-white rounded-full font-bold text-xs uppercase tracking-[0.3em] shadow-2xl transition-all duration-500 flex items-center gap-4 disabled:opacity-30"
                      whileHover={!formData.contactMethod ? {} : { y: -4 }}
                    >
                      {t('consultation.form.reviewInformation', 'Review & Submit')}
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Review & Submit */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-[#F8FAFC] rounded-[3rem] p-10 lg:p-16 border border-gray-100/50 shadow-[0_20px_60px_rgba(11,28,45,0.04)]"
                >
                  <h2 className="text-3xl font-serif font-bold text-[#0B1C2D] tracking-tight mb-10">
                    {t('consultation.form.reviewSubmit', 'Final Review')}
                  </h2>
                  
                  <div className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-inner space-y-10 mb-12">
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em]">{t('consultation.form.personalInfo', 'Personal')}</span>
                        <div className="space-y-2">
                          <p className="text-[#0B1C2D] font-bold">{formData.fullName}</p>
                          <p className="text-gray-500 text-sm">{formData.email}</p>
                          <p className="text-gray-500 text-sm">{formData.phone}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em]">{t('consultation.form.treatmentSelection', 'Protocol')}</span>
                        <div className="space-y-2">
                          <p className="text-[#0B1C2D] font-bold">{formData.treatment}</p>
                          <p className="text-gray-500 text-sm uppercase tracking-widest">{formData.contactMethod}</p>
                        </div>
                      </div>
                    </div>
                    {formData.message && (
                      <div className="pt-10 border-t border-gray-50">
                        <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em]">{t('consultation.form.additionalMessage', 'Notes')}</span>
                        <p className="text-gray-600 font-light mt-4 leading-relaxed">{formData.message}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center pt-8 border-t border-gray-200">
                    <button onClick={handlePrevious} className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.3em] hover:text-[#0B1C2D] transition-colors">
                      {t('consultation.form.back', 'Edit Data')}
                    </button>
                    <motion.button
                      onClick={onSubmit}
                      disabled={isSubmitting}
                      className="px-12 py-5 bg-[#0B1C2D] text-white rounded-full font-bold text-xs uppercase tracking-[0.3em] shadow-2xl transition-all duration-500 flex items-center gap-4 disabled:opacity-30"
                      whileHover={isSubmitting ? {} : { y: -4 }}
                    >
                      {isSubmitting ? t('consultation.form.submitting', 'Processing...') : t('consultation.form.getFreeConsultation', 'Confirm Request')}
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Side Trust Card */}
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                <h3 className="text-2xl font-serif font-bold text-white mb-10 relative z-10">{t('consultation.whatHappensNext.title', 'Our Protocol')}</h3>
                <div className="space-y-10 relative z-10">
                  {[
                    { step: '01', title: t('consultation.whatHappensNext.step1.title'), desc: t('consultation.whatHappensNext.step1.desc') },
                    { step: '02', title: t('consultation.whatHappensNext.step2.title'), desc: t('consultation.whatHappensNext.step2.desc') },
                    { step: '03', title: t('consultation.whatHappensNext.step3.title'), desc: t('consultation.whatHappensNext.step3.desc') }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <span className="text-xl font-serif font-bold text-white/20">{item.step}</span>
                      <div>
                        <h4 className="text-white font-bold mb-2">{item.title}</h4>
                        <p className="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* WhatsApp Quick Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-green-50 rounded-[2.5rem] p-10 border border-green-100 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-500 text-white flex items-center justify-center mb-6 shadow-xl shadow-green-500/20">
                  <Phone className="w-8 h-8" />
                </div>
                <h4 className="text-[#0B1C2D] font-bold text-xl mb-2">{t('consultation.whatsapp.title', 'Quick Support')}</h4>
                <p className="text-green-800/60 text-sm font-medium mb-8 leading-relaxed">
                  {t('consultation.whatsapp.desc', 'Prefer instant messaging? Our coordinators are available on WhatsApp.')}
                </p>
                <a 
                  href={`https://wa.me/${t('common.whatsappNumber', '905367460100')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25D366] text-white rounded-full font-bold text-xs uppercase tracking-[0.3em] shadow-xl hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span className="ps-4">{t('common.whatsapp')}</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
