import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { ArrowRight, Users, Globe, Award, Heart, Briefcase, Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { SectionWrapper } from '../components/ui/SectionWrapper'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { FormInput } from '../components/ui/FormInput'

interface ApplicationFormData {
  fullName: string
  email: string
  phone: string
  position: string
  experience: string
  cvFile: File | null
}

export function JoinUs() {
  const { t, i18n } = useTranslation()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    cvFile: null
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)

  useSEO({ 
    title: t('navigation.joinUs', 'Join Us'), 
    description: t('joinUs.hero.subtitle', 'Join our team at FeRa Clinic and advance your career in a premium international dental clinic in Istanbul.') 
  })

  const handleInputChange = (field: keyof ApplicationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleFileChange = (file: File | null) => {
    setFormData(prev => ({ ...prev, cvFile: file }))
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = t('validation.nameRequired', 'Name is required')
    }

    if (!formData.email.trim()) {
      newErrors.email = t('validation.emailRequired')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('validation.emailInvalid')
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('validation.phoneRequired')
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = t('validation.phoneInvalid', 'Please enter a valid phone number')
    }

    if (!formData.position.trim()) {
      newErrors.position = t('validation.positionRequired', 'Position is required')
    }

    if (formData.experience.length > 2000) {
      newErrors.experience = t('validation.experienceTooLong')
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
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
      
      const payload = {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          position: formData.position,
          experience: formData.experience,
          language: i18n.language,
          page_url: window.location.href
        }
      
      console.log('Submitting job application:', payload)
      
      const response = await fetch(`${API_BASE_URL}/api/job-application`, {
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
        email: '',
        phone: '',
        position: '',
        experience: '',
        cvFile: null
      })
    } catch (err: any) {
      setSubmitError(err.message || t('form.submitError', 'Submission failed. Please try again.'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    {
      icon: Users,
      title: t('joinUs.benefits.team.title', 'International Team'),
      description: t('joinUs.benefits.team.description', 'Work with dental professionals from around the world in a multicultural environment.')
    },
    {
      icon: Globe,
      title: t('joinUs.benefits.modern.title', 'Modern Clinic'),
      description: t('joinUs.benefits.modern.description', 'State-of-the-art facilities with the latest dental technology and equipment.')
    },
    {
      icon: Award,
      title: t('joinUs.benefits.growth.title', 'Career Growth'),
      description: t('joinUs.benefits.growth.description', 'Continuous learning opportunities and professional development programs.')
    },
    {
      icon: Heart,
      title: t('joinUs.benefits.culture.title', 'Patient-Focused'),
      description: t('joinUs.benefits.culture.description', 'Be part of a team that puts patient care and satisfaction above all else.')
    }
  ]

  const positions = [
    t('joinUs.positions.dentist', 'Dentist'),
    t('joinUs.positions.specialist', 'Specialist'),
    t('joinUs.positions.assistant', 'Dental Assistant'),
    t('joinUs.positions.technician', 'Dental Technician'),
    t('joinUs.positions.coordinator', 'Patient Coordinator'),
    t('joinUs.positions.admin', 'Administrative Staff'),
    t('joinUs.positions.other', 'Other')
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/fera-clinic/Join Us/Join_us.png"
            alt={t('alt.joinUsHero', 'FeRa Clinic Team')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
            loading="eager"
            fetchPriority="high"
          />
          {/* Overlay — text readability without muddying the image */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/45" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6">
              <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-white/90 block mb-6 drop-shadow-md">
                {t('joinUs.hero.badge', 'Join Our Team')}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              {t('joinUs.hero.title', 'Join FeRa Clinic Team')}
            </h1>

            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12 text-white/90 drop-shadow-md">
              {t('joinUs.hero.subtitle', 'Advance your career in a premium international dental clinic in Istanbul, where excellence meets opportunity.')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="#application-form"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0B1C2D] text-sm font-bold rounded-full shadow-2xl hover:shadow-[0_25px_50px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                <span className="uppercase tracking-widest">{t('joinUs.hero.cta', 'Apply Now')}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us Section */}
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
              {t('joinUs.whyWork.title', 'Why Work With Us')}
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              {t('joinUs.whyWork.subtitle', 'Discover the opportunities and benefits of joining our prestigious dental clinic team.')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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
                    <benefit.icon className="w-8 h-8 text-[#0B1C2D]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1C2D] mb-4 group-hover:text-[#13293D] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Application Form Section */}
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
              {t('joinUs.application.title', 'Join Our Team')}
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              {t('joinUs.application.subtitle', 'Fill out the form below and our HR team will review your application.')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center shadow-lg">
                <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  {t('joinUs.application.success', 'Application Received!')}
                </h3>
                <p className="text-green-700 leading-relaxed mb-8">
                  {t('joinUs.application.successDesc', 'Thank you for your interest in joining FeRa Clinic. Our HR team will review your application and contact you soon.')}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full md:w-auto px-12 py-4 bg-[#0B1C2D] text-white font-semibold rounded-xl hover:bg-[#13293D] transition-colors duration-300"
                >
                  {t('joinUs.application.newApplication', 'Submit Another Application')}
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white/90 backdrop-blur-xl rounded-[2rem] border border-gray-100/60 shadow-[0_25px_80px_rgba(11,28,45,0.12)] p-8 lg:p-12"
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
                    label={t('joinUs.form.fullName', 'Full Name')}
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder={t('joinUs.form.fullNamePlaceholder', 'Enter your full name')}
                    error={errors.fullName}
                  />

                  <FormInput
                    label={t('joinUs.form.email', 'Email Address')}
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder={t('joinUs.form.emailPlaceholder', 'your.email@example.com')}
                    error={errors.email}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormInput
                    label={t('joinUs.form.phone', 'Phone Number')}
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder={t('joinUs.form.phonePlaceholder', '+90 552 123 45 67')}
                    error={errors.phone}
                  />

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {t('joinUs.form.position', 'Position Applied For')} *
                    </label>
                    <select
                      value={formData.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      className={`w-full rounded-xl border bg-white px-4 py-4 text-gray-900 outline-none transition-all focus:border-[#0B1C2D] focus:ring-2 focus:ring-[#0B1C2D]/20 hover:border-gray-200 ${
                        errors.position ? 'border-red-500' : 'border-gray-100'
                      }`}
                    >
                      <option value="">{t('joinUs.form.selectPosition', 'Select a position')}</option>
                      {positions.map((position, index) => (
                        <option key={index} value={position}>
                          {position}
                        </option>
                      ))}
                    </select>
                    {errors.position && (
                      <p className="mt-1 text-xs text-red-500">{errors.position}</p>
                    )}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t('joinUs.form.experience', 'Experience / Message')}
                  </label>
                  <textarea
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    placeholder={t('joinUs.form.experiencePlaceholder', 'Tell us about your experience and why you want to join FeRa Clinic...')}
                    rows={6}
                    className={`w-full rounded-xl border bg-white px-4 py-4 text-gray-900 outline-none transition-all focus:border-[#0B1C2D] focus:ring-2 focus:ring-[#0B1C2D]/20 hover:border-gray-200 resize-none ${
                      errors.experience ? 'border-red-500' : 'border-gray-100'
                    }`}
                  />
                  {errors.experience && (
                    <p className="mt-1 text-xs text-red-500">{errors.experience}</p>
                  )}
                </div>

                {/* CV Upload */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t('joinUs.form.cvUpload', 'Upload CV')}
                    <span className="text-gray-500 font-normal ml-2">({t('joinUs.form.cvOptional', 'Optional')})</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer hover:border-[#0B1C2D] hover:bg-[#0B1C2D]/5 ${
                      formData.cvFile ? 'border-green-500 bg-green-50' : 'border-gray-100'
                    }`}>
                      <div className="flex flex-col items-center gap-3">
                        {formData.cvFile ? (
                          <>
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-green-800">{formData.cvFile.name}</p>
                              <p className="text-xs text-green-600">{(formData.cvFile.size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleFileChange(null);
                              }}
                              className="text-xs text-red-600 hover:text-red-700 font-medium"
                            >
                              {t('common.remove', 'Remove')}
                            </button>
                          </>
                        ) : (
                          <>
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-700">{t('joinUs.form.dropCV', 'Drop your CV here or click to browse')}</p>
                              <p className="text-xs text-gray-500">{t('joinUs.form.cvFormats', 'PDF, DOC, DOCX (Max 5MB)')}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
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
                      {t('joinUs.form.submit', 'Submit Application')}
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
