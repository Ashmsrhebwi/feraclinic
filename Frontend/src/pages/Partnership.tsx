import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { ArrowRight, Users, Handshake, Globe, CheckCircle2, AlertCircle, Send, Building2, User, MessageSquare, Phone, Mail } from 'lucide-react'
import { SectionWrapper } from '../components/ui/SectionWrapper'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { FormInput } from '../components/ui/FormInput'

interface PartnershipFormData {
  fullName: string
  companyName: string
  email: string
  phone: string
  country: string
  partnershipType: string
  websiteOrSocial: string
  message: string
  preferredContactMethod: string
}

export function Partnership() {
  const { t, i18n } = useTranslation()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [formData, setFormData] = useState<PartnershipFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    partnershipType: '',
    websiteOrSocial: '',
    message: '',
    preferredContactMethod: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)

  useSEO({ 
    title: t('navigation.partnership', 'Partnership'), 
    description: t('partnership.hero.subtitle', 'Professional partnership opportunities with FeRa Clinic for medical tourism agencies, consultants, and healthcare partners in Istanbul.') 
  })

  const handleInputChange = (field: keyof PartnershipFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = t('partnership.validation.fullNameRequired', 'Full name is required')
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = t('partnership.validation.companyNameRequired', 'Company name is required')
    }

    if (!formData.email.trim()) {
      newErrors.email = t('partnership.validation.emailRequired')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('partnership.validation.emailInvalid')
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('partnership.validation.phoneRequired')
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = t('partnership.validation.phoneInvalid')
    }

    if (!formData.country.trim()) {
      newErrors.country = t('partnership.validation.countryRequired', 'Country is required')
    }

    if (!formData.partnershipType.trim()) {
      newErrors.partnershipType = t('partnership.validation.partnershipTypeRequired')
    }

    if (formData.websiteOrSocial && !/^https?:\/\/.+\..+/.test(formData.websiteOrSocial)) {
      newErrors.websiteOrSocial = t('partnership.validation.websiteInvalid')
    }

    if (formData.message.length > 2000) {
      newErrors.message = t('partnership.validation.messageTooLong')
    }

    if (!formData.preferredContactMethod.trim()) {
      newErrors.preferredContactMethod = t('partnership.validation.contactMethodRequired', 'Preferred contact method is required')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const API_BASE_URL = (import.meta as any).env.VITE_API_BASE_URL || 'http://localhost:8000'
      
      const payload = {
        form_type: 'partnership',
        full_name: formData.fullName,
        company_name: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        partnership_type: formData.partnershipType,
        website_or_social: formData.websiteOrSocial,
        message: formData.message,
        preferred_contact_method: formData.preferredContactMethod,
        language: i18n.language,
        page_url: window.location.href
      }
      
      console.log('Submitting partnership request:', payload)
      
      const response = await fetch(`${API_BASE_URL}/api/partnership`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const data = await response.json()
      console.log('Response:', data)

      if (!response.ok) {
        const errorMsg = data.errors 
          ? Object.values(data.errors).flat().join(', ')
          : data.message || t('form.submitError', 'Submission failed. Please try again.')
        console.error('Submission error:', errorMsg, data)
        throw new Error(errorMsg)
      }

      setIsSubmitted(true)
      if (formRef.current) {
        formRef.current.reset()
      }
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        country: '',
        partnershipType: '',
        websiteOrSocial: '',
        message: '',
        preferredContactMethod: ''
      })
    } catch (err: any) {
      setSubmitError(err.message || t('form.submitError', 'Submission failed. Please try again.'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const whoCanApply = [
    {
      icon: Building2,
      title: t('partnership.whoCanApply.agencies.title', 'Medical Tourism Agencies'),
      description: t('partnership.whoCanApply.agencies.description', 'Established agencies coordinating international dental treatments and medical travel.')
    },
    {
      icon: Users,
      title: t('partnership.whoCanApply.coordinators.title', 'Patient Coordinators'),
      description: t('partnership.whoCanApply.coordinators.description', 'Healthcare professionals who facilitate patient care and treatment planning.')
    },
    {
      icon: User,
      title: t('partnership.whoCanApply.consultants.title', 'Healthcare Consultants'),
      description: t('partnership.whoCanApply.consultants.description', 'Independent consultants providing guidance on dental tourism and treatment options.')
    },
    {
      icon: Globe,
      title: t('partnership.whoCanApply.influencers.title', 'Influencers & Creators'),
      description: t('partnership.whoCanApply.influencers.description', 'Content creators and influencers in healthcare, wellness, and dental tourism.')
    },
    {
      icon: Handshake,
      title: t('partnership.whoCanApply.referrals.title', 'Referral Partners'),
      description: t('partnership.whoCanApply.referrals.description', 'International partners who refer patients for premium dental care services.')
    }
  ]

  const whyPartner = [
    {
      title: t('partnership.whyPartner.premium.title', 'Premium Dental Care'),
      description: t('partnership.whyPartner.premium.description', 'Access to world-class dental treatments and state-of-the-art facilities in Istanbul.'),
      icon: '🦷'
    },
    {
      title: t('partnership.whyPartner.support.title', 'International Patient Support'),
      description: t('partnership.whyPartner.support.description', 'Comprehensive support for international patients including travel coordination and translation.'),
      icon: '🌍',
      color: 'text-[#0B1C2D]'
    },
    {
      title: t('partnership.whyPartner.location.title', 'Strategic Istanbul Location'),
      description: t('partnership.whyPartner.location.description', 'Premium location in Istanbul, bridging Europe and Asia for international patient access.'),
      icon: '📍'
    },
    {
      title: t('partnership.whyPartner.communication.title', 'Transparent Communication'),
      description: t('partnership.whyPartner.communication.description', 'Clear, honest communication and regular updates throughout the treatment journey.'),
      icon: '💬'
    },
    {
      title: t('partnership.whyPartner.coordination.title', 'Personalized Coordination'),
      description: t('partnership.whyPartner.coordination.description', 'Tailored treatment coordination and personalized care for each referred patient.'),
      icon: '⭐'
    },
    {
      title: t('partnership.whyPartner.reputation.title', 'Trusted Reputation'),
      description: t('partnership.whyPartner.reputation.description', 'Build your reputation by partnering with a trusted, premium dental clinic brand.'),
      icon: '🏆'
    }
  ]

  const howItWorks = [
    {
      step: '01',
      title: t('partnership.howItWorks.step1.title', 'Submit Partnership Request'),
      description: t('partnership.howItWorks.step1.description', 'Complete our partnership application form with your details and collaboration interests.')
    },
    {
      step: '02',
      title: t('partnership.howItWorks.step2.title', 'Our Team Reviews Your Profile'),
      description: t('partnership.howItWorks.step2.description', 'Our partnership team carefully reviews your application and background for potential collaboration.')
    },
    {
      step: '03',
      title: t('partnership.howItWorks.step3.title', 'We Contact You to Discuss Collaboration'),
      description: t('partnership.howItWorks.step3.description', 'If there\'s a potential fit, we\'ll reach out to discuss partnership opportunities and next steps.')
    }
  ]

  const partnershipTypes = [
    t('partnership.form.types.agency', 'Medical Tourism Agency'),
    t('partnership.form.types.referral', 'Patient Referral Partner'),
    t('partnership.form.types.influencer', 'Influencer / Creator'),
    t('partnership.form.types.consultant', 'Healthcare Consultant'),
    t('partnership.form.types.other', 'Other')
  ]

  const contactMethods = [
    t('partnership.form.contactOptions.whatsapp', 'WhatsApp'),
    t('partnership.form.contactOptions.phone', 'Phone'),
    t('partnership.form.contactOptions.email', 'Email')
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fera-clinic/Partnership/partnership.png"
            alt="FeRa Clinic Partnership"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 45%' }}
            loading="eager"
            fetchPriority="high"
          />
          {/* Overlay — text readability without muddying the image */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/55" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-[1]">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-500" />
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-white/3 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 drop-shadow-md"
            >
              <Handshake className="w-5 h-5 text-white" />
              <span className="text-white/90 text-sm font-medium uppercase tracking-widest">
                {t('partnership.hero.badge', 'Partnership Opportunities')}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] tracking-tight leading-[1.1] mb-8"
            >
              {t('partnership.hero.title', 'Partner With FeRa Clinic')}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/85 font-light leading-relaxed mb-12 max-w-4xl mx-auto drop-shadow-sm"
            >
              {t('partnership.hero.subtitle', 'Join our network of trusted partners and collaborate with a premium dental clinic in Istanbul. Together, we can provide exceptional dental care to international patients.')}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#partnership-form"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0B2A3C] text-sm font-bold rounded-full shadow-2xl hover:shadow-[0_25px_50px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                <span className="uppercase tracking-widest">{t('partnership.hero.cta', 'Apply for Partnership')}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who Can Apply Section */}
      <SectionWrapper padding="py-20 lg:py-24" background="white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1] mb-6">
              {t('partnership.whoCanApply.title', 'Who Can Apply')}
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              {t('partnership.whoCanApply.subtitle', 'We welcome applications from established professionals and organizations in the medical tourism and healthcare industry.')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whoCanApply.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="group"
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-[1.5rem] border border-gray-100/70 shadow-[0_20px_60px_rgba(11,28,45,0.08)] p-6 h-full hover:shadow-[0_25px_50px_rgba(11,28,45,0.12)] transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0B1C2D] to-[#13293D] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1C2D] mb-3 group-hover:text-[#13293D] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Partner Section */}
      <SectionWrapper padding="py-20 lg:py-24" background="gray">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1] mb-6">
              {t('partnership.whyPartner.title', 'Why Partner With FeRa Clinic')}
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              {t('partnership.whyPartner.subtitle', 'Discover the benefits of partnering with a premium dental clinic committed to excellence and patient satisfaction.')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyPartner.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-white/80 backdrop-blur-xl rounded-[2rem] border border-gray-100/60 shadow-[0_25px_80px_rgba(11,28,45,0.12)] p-8 h-full hover:shadow-[0_35px_70px_rgba(11,28,45,0.18)] transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0B1C2D]/10 to-[#13293D]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#0B1C2D]/20 group-hover:to-[#13293D]/20 transition-all duration-300">
                    <span className={`text-3xl ${item.color || 'text-[#0B1C2D]'}`}>{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1C2D] mb-4 group-hover:text-[#13293D] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* How It Works Section */}
      <SectionWrapper padding="py-20 lg:py-24" background="white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1] mb-6">
              {t('partnership.howItWorks.title', 'How It Works')}
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              {t('partnership.howItWorks.subtitle', 'Our partnership process is designed to be transparent, efficient, and focused on building successful collaborations.')}
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line for desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0B1C2D]/20 to-transparent" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-white to-white/90 backdrop-blur-xl rounded-[2rem] border border-gray-100/60 shadow-[0_25px_80px_rgba(11,28,45,0.12)] p-8 h-full hover:shadow-[0_35px_70px_rgba(11,28,45,0.18)] transition-all duration-300 hover:-translate-y-2">
                    {/* Step number with circle */}
                    <div className="relative mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#0B1C2D] to-[#13293D] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-bold text-white">
                          {step.step}
                        </span>
                      </div>
                      {/* Desktop connection dots */}
                      {index < howItWorks.length - 1 && (
                        <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#0B1C2D]/30 to-transparent" />
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#0B1C2D] mb-4 group-hover:text-[#13293D] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Partnership Application Form Section */}
      <SectionWrapper padding="py-20 lg:py-24" background="gray">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1] mb-6">
              {t('partnership.form.title', 'Partnership Application')}
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              {t('partnership.form.subtitle', 'Ready to partner with us? Complete the form below and our partnership team will review your application.')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {isSubmitted ? (
              <div className="bg-gray-50 border border-green-200 rounded-3xl p-12 text-center shadow-lg">
                <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  {t('partnership.form.success', 'Application Received!')}
                </h3>
                <p className="text-green-700 leading-relaxed mb-8">
                  {t('partnership.form.successDesc', 'Thank you for your interest in partnering with FeRa Clinic. Our team will review your application and contact you within 3-5 business days.')}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full md:w-auto px-12 py-4 bg-[#0B1C2D] text-white font-semibold rounded-xl hover:bg-[#13293D] transition-colors duration-300"
                >
                  {t('partnership.form.newApplication', 'Submit Another Application')}
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white/90 backdrop-blur-xl rounded-[2rem] border border-gray-100/60 shadow-[0_25px_80px_rgba(11,28,45,0.12)] p-8 lg:p-12"
                id="partnership-form"
              >
                {/* Error Display */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-sm text-red-600">{submitError}</p>
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormInput
                    label={t('partnership.form.fullName', 'Full Name')}
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder={t('partnership.form.fullNamePlaceholder', 'Enter your full name')}
                    error={errors.fullName}
                  />

                  <FormInput
                    label={t('partnership.form.companyName', 'Company / Brand Name')}
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    placeholder={t('partnership.form.companyNamePlaceholder', 'Enter your company or brand name')}
                    error={errors.companyName}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormInput
                    label={t('partnership.form.email', 'Email Address')}
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder={t('partnership.form.emailPlaceholder', 'your.email@company.com')}
                    error={errors.email}
                  />

                  <FormInput
                    label={t('partnership.form.phone', 'Phone / WhatsApp')}
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder={t('partnership.form.phonePlaceholder', '+1 234 567 8900')}
                    error={errors.phone}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {t('partnership.form.country', 'Country')} *
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      placeholder={t('partnership.form.countryPlaceholder', 'Enter your country')}
                      className={`w-full rounded-xl border bg-white px-4 py-4 text-gray-900 outline-none transition-all focus:border-[#0B1C2D] focus:ring-2 focus:ring-[#0B1C2D]/20 hover:border-gray-200 ${
                        errors.country ? 'border-red-500' : 'border-gray-100'
                      }`}
                      required
                    />
                    {errors.country && (
                      <p className="mt-1 text-xs text-red-500">{errors.country}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {t('partnership.form.partnershipType', 'Partnership Type')} *
                    </label>
                    <select
                      value={formData.partnershipType}
                      onChange={(e) => handleInputChange('partnershipType', e.target.value)}
                      className={`w-full rounded-xl border bg-white px-4 py-4 text-gray-900 outline-none transition-all focus:border-[#0B1C2D] focus:ring-2 focus:ring-[#0B1C2D]/20 hover:border-gray-200 ${
                        errors.partnershipType ? 'border-red-500' : 'border-gray-100'
                      }`}
                      required
                    >
                      <option value="">{t('partnership.form.selectPartnershipType', 'Select partnership type')}</option>
                      {partnershipTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.partnershipType && (
                      <p className="mt-1 text-xs text-red-500">{errors.partnershipType}</p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t('partnership.form.websiteOrSocial', 'Website / Social Media Link')}
                  </label>
                  <input
                    type="url"
                    value={formData.websiteOrSocial}
                    onChange={(e) => handleInputChange('websiteOrSocial', e.target.value)}
                    placeholder={t('partnership.form.websiteOrSocialPlaceholder', 'https://yourwebsite.com or social media profile')}
                    className={`w-full rounded-xl border bg-white px-4 py-4 text-gray-900 outline-none transition-all focus:border-[#0B1C2D] focus:ring-2 focus:ring-[#0B1C2D]/20 hover:border-gray-200 ${
                      errors.websiteOrSocial ? 'border-red-500' : 'border-gray-100'
                    }`}
                  />
                  {errors.websiteOrSocial && (
                    <p className="mt-1 text-xs text-red-500">{errors.websiteOrSocial}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t('partnership.form.message', 'Message / Collaboration Details')}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder={t('partnership.form.messagePlaceholder', 'Tell us about your partnership proposal and collaboration interests...')}
                    rows={6}
                    className={`w-full rounded-xl border bg-white px-4 py-4 text-gray-900 outline-none transition-all focus:border-[#0B1C2D] focus:ring-2 focus:ring-[#0B1C2D]/20 hover:border-gray-200 resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-100'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t('partnership.form.preferredContactMethod', 'Preferred Contact Method')} *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {contactMethods.map((method, index) => (
                      <label key={index} className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all hover:border-[#0B1C2D] hover:bg-[#0B1C2D]/5">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          checked={formData.preferredContactMethod === method}
                          onChange={(e) => handleInputChange('preferredContactMethod', e.target.value)}
                          className="w-4 h-4 text-[#0B1C2D] focus:ring-[#0B1C2D]/20"
                        />
                        <span className="text-sm font-medium text-gray-700">{method}</span>
                      </label>
                    ))}
                  </div>
                  {errors.preferredContactMethod && (
                    <p className="mt-1 text-xs text-red-500">{errors.preferredContactMethod}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-12 py-4 bg-[#0B1C2D] text-white font-semibold rounded-xl hover:bg-[#13293D] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t('common.loading', 'Processing...')}
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Send className="w-5 h-5" />
                      {t('partnership.form.submit', 'Submit Application')}
                    </div>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </SectionWrapper>

      <style>{`
        @keyframes heroZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </>
  )
}
