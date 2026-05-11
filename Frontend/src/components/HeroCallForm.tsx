import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MessageSquare, Send, ArrowRight, ArrowLeft, Check, User, Globe, Calendar, Clock, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { submitLead } from '../lib/leadService'

interface FormData {
  phone: string
  name: string
  email: string
  treatment: string
  contactChannels: {
    telephone: boolean
    mail: boolean
    whatsapp: boolean
    sms: boolean
  }
}

export const HeroCallForm = () => {
  const { t, i18n } = useTranslation()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [formData, setFormData] = useState<FormData>({
    phone: '',
    name: '',
    email: '',
    treatment: '',
    contactChannels: {
      telephone: false,
      mail: false,
      whatsapp: false,
      sms: false
    }
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const treatments = [
    { value: 'implants', label: t('treatments.implants', 'Dental Implants') },
    { value: 'veneers', label: t('treatments.veneers', 'Porcelain Veneers') },
    { value: 'crowns', label: t('treatments.crowns', 'Zirconium Crowns') },
    { value: 'all-on-4', label: t('treatments.allOn4', 'All-on-4 Restoration') },
    { value: 'smile-design-istanbul', label: t('treatments.smileMakeover', 'Smile Makeover') },
    { value: 'orthodontics', label: t('treatments.orthodontics', 'Orthodontics') },
    { value: 'other', label: t('common.other', 'Other') }
  ]

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.phone.trim()) {
        newErrors.phone = t('validation.phoneRequired')
      } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
        newErrors.phone = t('validation.phoneInvalid')
      }
    }

    if (step === 2) {
      if (!formData.name.trim()) {
        newErrors.name = t('validation.nameRequired')
      }
      if (!formData.email.trim()) {
        newErrors.email = t('validation.emailRequired')
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = t('validation.emailInvalid')
      }
      if (!formData.treatment) {
        newErrors.treatment = t('validation.treatmentRequired')
      }
    }

    if (step === 3) {
      const hasSelectedChannel = Object.values(formData.contactChannels).some(Boolean)
      if (!hasSelectedChannel) {
        newErrors.contactChannels = t('validation.contactRequired')
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 3) {
        handleSubmit()
      } else {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
    setErrors({})
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      await submitLead({
        form_type: t('form.letUsCallYouFormType', 'Let Us Call You'),
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        treatment_interest: formData.treatment,
        language: i18n.language,
        message: `Contact preferences: ${Object.entries(formData.contactChannels)
          .filter(([_, enabled]) => enabled)
          .map(([method]) => method)
          .join(', ')}`
      })
      setIsSubmitted(true)
    } catch (err: any) {
      setSubmitError(err.message || 'Submission failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setCurrentStep(1)
    setIsSubmitted(false)
    setIsSubmitting(false)
    setSubmitError('')
    setFormData({
      phone: '',
      name: '',
      email: '',
      treatment: '',
      contactChannels: {
        telephone: false,
        mail: false,
        whatsapp: false,
        sms: false
      }
    })
    setErrors({})
  }

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const updateContactChannel = (channel: keyof FormData['contactChannels']) => {
    setFormData(prev => ({
      ...prev,
      contactChannels: {
        ...prev.contactChannels,
        [channel]: !prev.contactChannels[channel]
      }
    }))
    if (errors.contactChannels) {
      setErrors(prev => ({ ...prev, contactChannels: '' }))
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-[2rem] border border-gray-100/60 shadow-[0_25px_80px_rgba(11,28,45,0.12)] p-8 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        
        <h3 className="text-2xl font-bold text-[#0B1C2D] mb-4">
          {t('form.thankYou', 'Thank you for choosing FeRa Clinic')}
        </h3>
        
        <p className="text-gray-600 mb-8">
          {t('form.weWillCallYou', 'We will call you shortly.')}
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <Phone className="w-5 h-5 text-[#0B1C2D]" />
            <span className="text-sm text-gray-700">+90 536 746 01 00</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
            <MessageSquare className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-700">WhatsApp: +90 536 746 01 00</span>
          </div>
        </div>

        {(formData.name || formData.phone) && (
          <div className="text-xs text-gray-500 mb-6">
            {formData.name && <div>{t('form.name', 'Name')}: {formData.name}</div>}
            {formData.phone && <div>{t('form.phone', 'Phone')}: {formData.phone}</div>}
          </div>
        )}

        <button
          onClick={resetForm}
          className="w-full py-3 bg-[#0B1C2D] text-white rounded-full font-semibold hover:bg-[#0f3460] transition-colors"
        >
          {t('form.newRequest', 'New Request')}
        </button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="call-form-card w-full max-w-md bg-white/90 backdrop-blur-xl rounded-[2rem] border border-gray-100/60 shadow-[0_25px_80px_rgba(11,28,45,0.12)] p-8"
    >
      {/* Error Display */}
      {submitError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl"
        >
          <p className="text-sm text-red-600">{submitError}</p>
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        {/* Step 1: Phone */}
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#0B1C2D] mb-2">
                {t('form.letUsCallYou', 'Let us call you!')}
              </h3>
              <p className="text-sm text-gray-600">
                {t('form.enterPhoneForConsultation', 'Enter your phone number for a free consultation')}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('form.phoneNumber', 'Phone Number')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
                  <Globe className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  placeholder={t('form.phonePlaceholder', '+90 552 123 45 67')}
                  className={`w-full ps-10 pe-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B1C2D] focus:border-transparent transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <div className="absolute inset-y-0 end-0 pe-3 flex items-center">
                  <div className="w-6 h-4 bg-gradient-to-r from-red-500 to-white rounded-sm" />
                </div>
              </div>
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
              )}
            </div>

            <button
              onClick={handleNext}
              disabled={isSubmitting}
              className="w-full py-3 bg-[#0B1C2D] text-white rounded-full font-semibold hover:bg-[#0f3460] transition-all hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t('form.loading', 'Processing...')}
                </>
              ) : (
                <>
                  {t('form.getFreeConsultation', 'Get Free Consultation')}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              {t('form.termsAgreement', 'By clicking this button, I agree to FeRa Clinic\'s Terms of Service.')}
            </p>
          </motion.div>
        )}

        {/* Step 2: Name, Email, Treatment */}
        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-[#0B1C2D] mb-4">
                {t('form.tellUsMore', 'Tell us more about yourself')}
              </h3>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('form.fullName', 'Full Name')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  placeholder={t('form.namePlaceholder', 'John Doe')}
                  className={`w-full ps-10 pe-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B1C2D] focus:border-transparent transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('form.email', 'Email Address')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder={t('form.emailPlaceholder', 'john@example.com')}
                  className={`w-full ps-10 pe-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B1C2D] focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('form.interestedTreatment', 'Interested Treatment')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                <select
                  value={formData.treatment}
                  onChange={(e) => updateFormData('treatment', e.target.value)}
                  className={`w-full ps-10 pe-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B1C2D] focus:border-transparent transition-colors appearance-none bg-white ${
                    errors.treatment ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">{t('form.selectTreatment', 'Select a treatment')}</option>
                  {treatments.map(treatment => (
                    <option key={treatment.value} value={treatment.value}>
                      {treatment.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 end-0 pe-3 flex items-center pointer-events-none">
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              {errors.treatment && (
                <p className="mt-1 text-xs text-red-500">{errors.treatment}</p>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleBack}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                {t('form.back', 'Back')}
              </button>
              <button
                onClick={handleNext}
                className="flex-1 py-3 bg-[#0B1C2D] text-white rounded-full font-semibold hover:bg-[#0f3460] transition-all hover:shadow-lg flex items-center justify-center gap-2"
              >
                {t('form.next', 'Next')}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Contact Channels */}
        {currentStep === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-[#0B1C2D] mb-2">
                {t('form.contactPreference', 'How can we reach you?')}
              </h3>
              <p className="text-sm text-gray-600">
                {t('form.selectContactMethods', 'Select your preferred contact methods')}
              </p>
            </div>

            <div className="space-y-3">
              <label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.contactChannels.telephone}
                  onChange={() => updateContactChannel('telephone')}
                  className="w-5 h-5 text-[#0B1C2D] border-gray-300 rounded focus:ring-[#0B1C2D] focus:ring-2"
                />
                <Phone className="w-5 h-5 text-gray-600 ms-3 me-3" />
                <span className="text-gray-700">{t('form.telephone', 'Telephone')}</span>
              </label>

              <label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.contactChannels.mail}
                  onChange={() => updateContactChannel('mail')}
                  className="w-5 h-5 text-[#0B1C2D] border-gray-300 rounded focus:ring-[#0B1C2D] focus:ring-2"
                />
                <Mail className="w-5 h-5 text-gray-600 ms-3 me-3" />
                <span className="text-gray-700">{t('form.email', 'Email')}</span>
              </label>

              <label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-green-50 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.contactChannels.whatsapp}
                  onChange={() => updateContactChannel('whatsapp')}
                  className="w-5 h-5 text-[#0B1C2D] border-gray-300 rounded focus:ring-[#0B1C2D] focus:ring-2"
                />
                <MessageSquare className="w-5 h-5 text-green-600 ms-3 me-3" />
                <span className="text-gray-700">{t('common.whatsapp')}</span>
              </label>

              <label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.contactChannels.sms}
                  onChange={() => updateContactChannel('sms')}
                  className="w-5 h-5 text-[#0B1C2D] border-gray-300 rounded focus:ring-[#0B1C2D] focus:ring-2"
                />
                <Send className="w-5 h-5 text-gray-600 ms-3 me-3" />
                <span className="text-gray-700">{t('form.sms', 'SMS')}</span>
              </label>
            </div>

            {errors.contactChannels && (
              <p className="text-xs text-red-500">{errors.contactChannels}</p>
            )}

            <div className="flex gap-3">
              <button
                onClick={handleBack}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                {t('form.back', 'Back')}
              </button>
              <button
                onClick={handleNext}
                disabled={isSubmitting}
                className="flex-1 py-3 bg-[#0B1C2D] text-white rounded-full font-semibold hover:bg-[#0f3460] transition-all hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t('form.loading', 'Processing...')}
                  </>
                ) : (
                  <>
                    {t('form.completed', 'Completed')}
                    <Check className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
