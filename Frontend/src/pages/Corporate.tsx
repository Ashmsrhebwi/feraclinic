import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { ArrowRight, Building2, Users, Globe, Phone, CheckCircle2, AlertCircle, Send } from 'lucide-react'
import { SectionWrapper } from '../components/ui/SectionWrapper'
import { FormInput } from '../components/ui/FormInput'

interface CorporateFormData {
  companyName: string
  contactPerson: string
  email: string
  phone: string
  country: string
  inquiryType: string
  message: string
  preferredContactMethod: string
}

export function Corporate() {
  const { t, i18n } = useTranslation()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [formData, setFormData] = useState<CorporateFormData>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    inquiryType: '',
    message: '',
    preferredContactMethod: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)

  useSEO({ 
    title: t('navigation.corporate', 'Corporate Services'), 
    description: t('corporate.hero.subtitle', 'Professional corporate and group dental services for companies, organizations, and medical tourism agencies in Istanbul.') 
  })

  const handleInputChange = (field: keyof CorporateFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.companyName.trim()) {
      newErrors.companyName = t('corporate.validation.companyNameRequired', 'Company name is required')
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = t('corporate.validation.contactPersonRequired', 'Contact person is required')
    }

    if (!formData.email.trim()) {
      newErrors.email = t('corporate.validation.emailRequired')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('corporate.validation.emailInvalid')
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('corporate.validation.phoneRequired')
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = t('corporate.validation.phoneInvalid')
    }

    if (!formData.country.trim()) {
      newErrors.country = t('corporate.validation.countryRequired')
    }

    if (!formData.inquiryType.trim()) {
      newErrors.inquiryType = t('corporate.validation.inquiryTypeRequired')
    }

    if (!formData.preferredContactMethod.trim()) {
      newErrors.preferredContactMethod = t('corporate.validation.contactMethodRequired')
    }

    if (formData.message.length > 2000) {
      newErrors.message = t('corporate.validation.messageTooLong')
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
        company_name: formData.companyName,
        contact_person: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        inquiry_type: formData.inquiryType,
        message: formData.message,
        preferred_contact_method: formData.preferredContactMethod,
        language: i18n.language,
        page_url: window.location.href
      }
      
      const response = await fetch(`${API_BASE_URL}/api/corporate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const data = await response.json()

      if (!response.ok) {
        const errorMsg = data.errors 
          ? Object.values(data.errors).flat().join(', ')
          : data.message || 'Submission failed. Please try again.'
        throw new Error(errorMsg)
      }

      setIsSubmitted(true)
      if (formRef.current) {
        formRef.current.reset()
      }
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        country: '',
        inquiryType: '',
        message: '',
        preferredContactMethod: ''
      })
    } catch (err: any) {
      setSubmitError(err.message || 'Submission failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    {
      icon: Building2,
      title: t('corporate.services.corporate.title', 'Corporate Dental Care'),
      description: t('corporate.services.corporate.description', 'Comprehensive dental solutions for companies and their employees with dedicated support and flexible scheduling.')
    },
    {
      icon: Users,
      title: t('corporate.services.group.title', 'Group Treatment Planning'),
      description: t('corporate.services.group.description', 'Coordinated treatment plans for multiple patients with streamlined processes and group pricing options.')
    },
    {
      icon: Globe,
      title: t('corporate.services.international.title', 'International Patient Coordination'),
      description: t('corporate.services.international.description', 'Complete coordination services for international patients including travel, accommodation, and treatment scheduling.')
    },
    {
      icon: Phone,
      title: t('corporate.services.dedicated.title', 'Dedicated Communication'),
      description: t('corporate.services.dedicated.description', 'Single point of contact for all corporate inquiries with priority response and personalized service.')
    }
  ]

  const inquiryTypes = [
    t('corporate.form.inquiryOptions.corporate', 'Corporate Dental Support'),
    t('corporate.form.inquiryOptions.tourism', 'Medical Tourism Collaboration'),
    t('corporate.form.inquiryOptions.group', 'Group Treatment Request'),
    t('corporate.form.inquiryOptions.other', 'Other')
  ]

  const contactMethods = [
    t('corporate.form.contactOptions.whatsapp', 'WhatsApp'),
    t('corporate.form.contactOptions.phone', 'Phone'),
    t('corporate.form.contactOptions.email', 'Email')
  ]

  const clinicPartners = [
    {
      name: 'Klinik No.1',
      logo: '/images/fera-clinic/Corporate/klinik-no-1.webp',
      description: t('corporate.partners.klinik1', 'Dental care partner in Istanbul')
    },
    {
      name: 'Klinik No.2', 
      logo: '/images/fera-clinic/Corporate/klinik-no-2.webp',
      description: t('corporate.partners.klinik2', 'Healthcare coordination partner')
    },
    {
      name: 'Seven Blue Dent',
      logo: '/images/fera-clinic/Corporate/seven-blue.webp',
      description: t('corporate.partners.sevenBlue', 'Dental services collaboration partner')
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fera-clinic/Corporate/Corporate.png"
            alt="FeRa Clinic Corporate Services"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
            loading="eager"
            fetchPriority="high"
          />
          {/* Overlay — text readability without muddying the image */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/55" />
        </div>

        <div className="absolute inset-0 z-[1]">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium uppercase tracking-widest">
                {t('corporate.hero.badge', 'Corporate Services')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] tracking-tight leading-[1.1] mb-8"
            >
              {t('corporate.hero.title', 'Corporate & Group Dental Services')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/85 drop-shadow-sm font-light leading-relaxed mb-12 max-w-4xl mx-auto"
            >
              {t('corporate.hero.subtitle', 'Professional corporate and group dental services for companies, organizations, and medical tourism agencies in Istanbul.')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#inquiry-form"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0B1C2D] text-sm font-bold rounded-full shadow-2xl hover:shadow-[0_25px_50px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                <span className="uppercase tracking-widest">{t('corporate.hero.cta', 'Contact Corporate Team')}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              {t('corporate.services.title', 'Corporate Services')}
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              {t('corporate.services.subtitle', 'Comprehensive corporate dental solutions designed for businesses, organizations, and medical tourism partners.')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="group"
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] border border-[rgba(11,28,45,0.10)] shadow-[0_25px_80px_rgba(11,28,45,0.12)] p-8 h-full hover:shadow-[0_30px_60px_rgba(11,28,45,0.15)] transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-[#0B1C2D]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0B1C2D]/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-[#0B1C2D]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1C2D] mb-4 group-hover:text-[#13293D] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Healthcare Network Section */}
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
              {t('corporate.network.title', 'Healthcare Network & Coordination')}
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-12">
              {t('corporate.network.subtitle', 'We coordinate with selected healthcare partners and clinic networks when required, always focusing on patient safety, communication, and treatment planning.')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-[#0B1C2D]/8 via-[#0B1C2D]/5 to-[#0B1C2D]/8 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B4698' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat'
                      }} />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/95" />
                    
                    <div className="relative z-10">
                      <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-[#0B1C2D]/30 hover:border-[#0B1C2D]/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0B1C2D]/10 to-[#0B1C2D]/5">
                                  <div class="text-3xl font-bold text-[#0B1C2D]">${partner.name.charAt(0)}</div>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                      
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-1 rounded-full shadow-md border border-[#0B1C2D]/20">
                        <span className="text-xs font-semibold text-[#0B1C2D]">{partner.name}</span>
                      </div>
                    </div>
                    
                    <div className="absolute top-6 right-6 w-12 h-12 bg-[#0B1C2D]/15 rounded-full blur-xl" />
                    <div className="absolute bottom-6 left-6 w-8 h-8 bg-[#0B1C2D]/10 rounded-full blur-lg" />
                    <div className="absolute top-1/2 right-8 w-6 h-6 bg-[#0B1C2D]/8 rounded-full blur-md" />
                  </div>
                  
                  <div className="p-8 bg-gradient-to-b from-white to-gray-50">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#0B1C2D] transition-all duration-300 mb-3">
                        {partner.name}
                      </h3>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                        <span className="text-sm font-medium text-green-600">{t('corporate.activePartner', 'Active Partner')}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 text-center">
                      {partner.description}
                    </p>
                    
                    <div className="flex flex-col items-center gap-4">
                      <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0B1C2D]/10 to-[#0B1C2D]/5 text-[#0B1C2D] text-sm font-semibold rounded-full border border-[#0B1C2D]/20 hover:border-[#0B1C2D]/30 transition-all duration-300 shadow-sm hover:shadow-md">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 00-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 00-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 002.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Healthcare Partner
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                        <span>{t('corporate.availableCollaboration', 'Available for collaboration')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Corporate Inquiry Form Section */}
      <SectionWrapper padding="py-20 lg:py-24" background="white" id="inquiry-form">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1] mb-6">
              {t('corporate.form.title', 'Corporate Inquiry')}
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              {t('corporate.form.subtitle', 'Connect with our corporate team to discuss your organization\'s dental care needs and partnership opportunities.')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center shadow-lg">
                <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  {t('corporate.form.success', 'Inquiry Received!')}
                </h3>
                <p className="text-green-700 leading-relaxed mb-8">
                  {t('corporate.form.successDesc', 'Thank you for your interest in our corporate services. Our team will review your inquiry and contact you within 24 hours.')}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full md:w-auto px-12 py-4 bg-[#0B1C2D] text-white font-semibold rounded-xl hover:bg-[#13293D] transition-colors duration-300"
                >
                  {t('corporate.form.newInquiry', 'Submit Another Inquiry')}
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white/90 backdrop-blur-xl rounded-[2rem] border border-gray-100/60 shadow-[0_25px_80px_rgba(11,28,45,0.12)] p-8 lg:p-12"
              >
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
                    label={t('corporate.form.companyName', 'Company / Organization Name')}
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    placeholder={t('corporate.form.companyNamePlaceholder', 'Enter your company name')}
                    error={errors.companyName}
                  />

                  <FormInput
                    label={t('corporate.form.contactPerson', 'Contact Person')}
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                    placeholder={t('corporate.form.contactPersonPlaceholder', 'Enter contact person name')}
                    error={errors.contactPerson}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormInput
                    label={t('corporate.form.email', 'Email Address')}
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder={t('corporate.form.emailPlaceholder', 'your.email@company.com')}
                    error={errors.email}
                  />

                  <FormInput
                    label={t('corporate.form.phone', 'Phone Number')}
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder={t('corporate.form.phonePlaceholder', '+1 234 567 8900')}
                    error={errors.phone}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {t('corporate.form.country', 'Country')} *
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      placeholder={t('corporate.form.countryPlaceholder', 'Enter your country')}
                      className={`w-full rounded-xl border bg-white px-4 py-4 text-gray-900 outline-none transition-all focus:border-[#0B1C2D] focus:ring-2 focus:ring-[#0B1C2D]/20 hover:border-[#0B1C2D]/30 ${
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
                      {t('corporate.form.inquiryType', 'Inquiry Type')} *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                      className={`w-full rounded-xl border bg-white px-4 py-4 text-gray-900 outline-none transition-all focus:border-[#0B1C2D] focus:ring-2 focus:ring-[#0B1C2D]/20 hover:border-[#0B1C2D]/30 ${
                        errors.inquiryType ? 'border-red-500' : 'border-gray-100'
                      }`}
                      required
                    >
                      <option value="">{t('corporate.form.selectInquiryType', 'Select inquiry type')}</option>
                      {inquiryTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.inquiryType && (
                      <p className="mt-1 text-xs text-red-500">{errors.inquiryType}</p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t('corporate.form.message', 'Message')}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder={t('corporate.form.messagePlaceholder', 'Tell us about your needs...')}
                    rows={4}
                    className={`w-full rounded-xl border bg-white px-4 py-4 text-gray-900 outline-none transition-all focus:border-[#0B1C2D] focus:ring-2 focus:ring-[#0B1C2D]/20 hover:border-[#0B1C2D]/30 ${
                      errors.message ? 'border-red-500' : 'border-gray-100'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t('corporate.form.preferredContactMethod', 'Preferred Contact Method')} *
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
                      {t('corporate.form.submit', 'Submit Inquiry')}
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
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
      `}</style>
    </>
  )
}