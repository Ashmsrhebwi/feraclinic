import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageSquare, ArrowRight, Phone, Calendar, Star, MapPin, ChevronLeft, CheckCircle2 } from 'lucide-react'
import { LocalizedLink as Link } from './ui/LocalizedLink'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { treatments } from '../data/treatments'
import { submitLead } from '../lib/leadService'

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isFaqOpen, setIsFaqOpen] = useState(false)
  const [selectedFaq, setSelectedFaq] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const containerRef = useRef<HTMLDivElement>(null)

  // Analytics Helper
  const trackEvent = (eventName: string, payload?: any) => {
    console.log("[Chat Event]", eventName, {
      path: location.pathname,
      language: i18n.language,
      timestamp: new Date().toISOString(),
      ...payload
    })
    
    // Future integration point:
    // window.gtag?.('event', eventName, payload)
    // window.fbq?.('trackCustom', eventName, payload)
  }

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '',
    language: i18n.language
  })

  // Sync language with current locale
  useEffect(() => {
    setFormData(prev => ({ ...prev, language: i18n.language }))
  }, [i18n.language])

  // Backdrop click-outside is handled via the backdrop div rendered in JSX

  const toggleAssistant = () => {
    const newState = !isOpen
    setIsOpen(newState)
    trackEvent(newState ? 'chat_open' : 'chat_close')
  }

  const handleActionClick = (to: string) => {
    const actionMap: Record<string, string> = {
      '/consultation': 'click_consultation',
      '/treatments': 'click_treatments',
      '/dental-tourism': 'click_tourism',
      '/gallery': 'click_gallery',
      '/faq': 'click_faq'
    }

    const eventName = actionMap[to] || 'click_nav'
    trackEvent(eventName, { destination: to })

    if (to === '/consultation') {
      setIsFormOpen(true)
      trackEvent('form_open')
    } else if (to === '/faq') {
      setIsFaqOpen(true)
      trackEvent('faq_open')
    } else {
      setIsOpen(false)
    }
  }

  const handleFaqBack = () => {
    if (selectedFaq) {
      setSelectedFaq(null)
    } else {
      setIsFaqOpen(false)
      trackEvent('faq_close')
    }
  }

  const handleFaqSelect = (id: string) => {
    setSelectedFaq(id)
    trackEvent('faq_view_question', { questionId: id })
  }

  const faqs = [
    { id: 'q1', question: t('chat.faqQ1'), answer: t('chat.faqA1') },
    { id: 'q2', question: t('chat.faqQ2'), answer: t('chat.faqA2') },
    { id: 'q3', question: t('chat.faqQ3'), answer: t('chat.faqA3') },
    { id: 'q4', question: t('chat.faqQ4'), answer: t('chat.faqA4') }
  ]

  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')
    setIsSubmitting(true)
    
    try {
      await submitLead({
        form_type: t('chat.formType', 'Chat Assistant'),
        full_name: formData.name,
        phone: formData.phone,
        treatment_interest: formData.treatment,
        language: formData.language
      })
      trackEvent('form_submit', { treatment: formData.treatment })
      setIsSubmitted(true)
    } catch (err: any) {
      setSubmitError(err.message || t('chat.submitError', 'Submission failed. Please try again.'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const languages = [
    { code: 'en', label: t('languages.english') },
    { code: 'tr', label: t('languages.turkish') },
    { code: 'ar', label: t('languages.arabic') },
    { code: 'fr', label: t('languages.french') },
    { code: 'ru', label: t('languages.russian') },
    { code: 'es', label: t('languages.spanish') }
  ]

  // Reuse existing WhatsApp logic
  const getDynamicMessage = () => {
    const path = location.pathname.toLowerCase()
    let treatment = ''

    if (path.includes('implants')) treatment = t('treatments.implants', 'Dental Implants')
    else if (path.includes('hollywood-smile') || path.includes('veneers')) treatment = t('treatments.veneers', 'Hollywood Smile')
    else if (path.includes('all-on-4-istanbul')) treatment = t('treatments.allOn4', 'All-on-4 Restoration')
    else if (path.includes('crowns')) treatment = t('treatments.crowns', 'Zirconium Crowns')
    else if (path.includes('orthodontics') || path.includes('invisalign')) treatment = t('treatments.ortho', 'Orthodontics')
    else if (path.includes('smile-design-istanbul')) treatment = t('treatments.smileMakeover', 'Smile Makeover')

    const base = t('contact.whatsappBase', 'Hello FeRa Clinic! I would like to get a consultation')
    return treatment ? `${base} ${t('common.for', 'for')} ${treatment}.` : `${base}.`
  }

  const phoneNumber = t('common.whatsappNumber', '905551234567')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(getDynamicMessage())}`

  const getActions = () => {
    const path = location.pathname.toLowerCase()
    
    // Treatment Detail Routes
    if (path.includes('/treatments/')) {
      return [
        { label: t('chat.actionConsultation'), to: '/consultation', icon: Calendar },
        { label: t('chat.actionAskQuestion'), to: '/faq', icon: MessageSquare },
        { label: t('chat.actionAskTreatment'), to: whatsappUrl, isExternal: true, icon: Phone },
        { label: t('chat.actionGallery'), to: '/gallery', icon: ArrowRight },
      ]
    }
    
    // Treatments Listing
    if (path.includes('/treatments')) {
       return [
        { label: t('chat.actionConsultation'), to: '/consultation', icon: Calendar },
        { label: t('chat.actionAskQuestion'), to: '/faq', icon: MessageSquare },
        { label: t('chat.actionGallery'), to: '/gallery', icon: ArrowRight },
      ]
    }

    // Dental Tourism
    if (path.includes('/dental-tourism')) {
      return [
        { label: t('chat.actionTourismPackages'), to: '/dental-tourism#packages', icon: Star },
        { label: t('chat.actionAskQuestion'), to: '/faq', icon: MessageSquare },
        { label: t('chat.actionDuration'), to: whatsappUrl, isExternal: true, icon: Calendar },
        { label: t('chat.actionTourismServices'), to: '/dental-tourism#services', icon: MapPin },
      ]
    }

    // Blog
    if (path.includes('/blog')) {
      return [
        { label: t('chat.actionRelatedTreatments'), to: '/treatments', icon: Star },
        { label: t('chat.actionConsultation'), to: '/consultation', icon: Calendar },
        { label: t('chat.actionAskQuestion'), to: '/faq', icon: MessageSquare },
      ]
    }

    // Default (Home and others)
    return [
      { label: t('chat.actionConsultation'), to: '/consultation', icon: Calendar },
      { label: t('chat.actionAskQuestion'), to: '/faq', icon: MessageSquare },
      { label: t('chat.actionTreatments'), to: '/treatments', icon: Star },
      { label: t('chat.actionTourism'), to: '/dental-tourism', icon: MapPin },
    ]
  }

  const isRTL = i18n.dir() === 'rtl'
  
  return (
    <>
      {/* Backdrop — closes panel when clicking anywhere outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div 
        ref={containerRef} 
        className="fixed bottom-6 left-6 sm:left-8 z-50 flex flex-col items-start"
      >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20, transformOrigin: 'bottom left' }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 w-80 max-h-[80vh] flex flex-col overflow-hidden rounded-2xl bg-white/95 backdrop-blur-md shadow-luxury-2xl border border-gray-100"
          >
            {/* Header */}
            <div className="p-4 pb-2 relative shrink-0">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-[#0B1C2D] transition-all active:scale-90"
                aria-label={t('a11y.closeAssistant')}
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 flex items-center justify-center shrink-0">
                  <img src="/images/BLUE BACK WHİTE LOGO (1).png" alt={t('alt.feraClinic')} className="w-10 h-10 object-contain rounded-full" />
                  <div className="absolute bottom-0 end-0 h-3 w-3 rounded-full border-2 border-white bg-green-500">
                    <div className="absolute inset-0 rounded-full bg-green-500 animate-[ping-slow_3s_infinite]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B1C2D] tracking-tight leading-tight">
                    {t('chat.welcomeTitle')}
                  </h3>
                  <p className="text-[9px] text-gray-500 font-medium uppercase tracking-wider flex items-center gap-1.5 mt-0.5">
                    {t('chat.status')}
                  </p>
                </div>
              </div>
            </div>

            {/* Scrollable Content Wrapper */}
            <div className="overflow-y-auto max-h-[60vh] flex-1 custom-scrollbar">
              {/* Body */}
              <div className="px-4 pt-0 relative z-10">
                <div className="rounded-xl bg-[#0B1C2D]/5 p-3.5 border border-[#0B1C2D]/10 text-[13px] leading-relaxed text-[#0B1C2D] font-medium shadow-sm">
                  {t('chat.welcomeMsg')}
                </div>
              </div>

              {/* Panel Content */}
              <div className="p-4 pt-3">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="py-10 text-center"
                  >
                    <div className="mb-6 flex justify-center">
                      <div className="rounded-full bg-green-50 p-4">
                        <CheckCircle2 className="h-12 w-12 text-green-500" />
                      </div>
                    </div>
                    <h4 className="mb-3 text-xl font-bold text-[#0B1C2D] leading-tight px-4">
                      {t('chat.formSuccess')}
                    </h4>
                    <motion.a
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('click_whatsapp', { source: 'success_panel' })}
                      className="mt-6 flex items-center justify-center gap-3 rounded-xl bg-[#25D366] py-4 font-bold text-white transition-all hover:shadow-lg shadow-green-500/20"
                    >
                      <Phone className="h-5 w-5" />
                      <span className="uppercase tracking-wider text-sm">{t('chat.actionWhatsApp')}</span>
                    </motion.a>
                  </motion.div>
                ) : isFaqOpen ? (
                  <motion.div
                    key="faq"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <button
                      onClick={handleFaqBack}
                      className="mb-4 flex items-center gap-2 text-[10px] font-bold text-[#6B7280] uppercase tracking-wider hover:text-[#0B1C2D] transition-colors"
                    >
                      <ChevronLeft className="h-3 w-3" />
                      {selectedFaq ? t('chat.faqTitle') : t('chat.formBack')}
                    </button>

                    <h4 className="text-xl font-bold text-[#0B1C2D] mb-6">
                      {t('chat.faqTitle')}
                    </h4>

                    {selectedFaq ? (
                      <div className="space-y-6">
                        <div className="flex flex-col gap-4">
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="self-end bg-[#0B1C2D] text-white p-4 rounded-2xl rounded-tr-none text-sm font-medium max-w-[85%] shadow-md"
                          >
                            {faqs.find(f => f.id === selectedFaq)?.question}
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="self-start bg-gray-50 text-[#0B1C2D] p-4 rounded-2xl rounded-tl-none text-sm font-medium max-w-[85%] border border-gray-100 shadow-sm leading-relaxed"
                          >
                            {faqs.find(f => f.id === selectedFaq)?.answer}
                          </motion.div>
                        </div>

                        <div className="pt-4 space-y-3">
                          <motion.button 
                            whileHover={{ scale: 1.02, x: 4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => { setIsFaqOpen(false); setIsFormOpen(true); trackEvent('click_consultation', { source: 'faq_detail' }); trackEvent('form_open'); }}
                            className="w-full h-11 flex items-center justify-between px-3 rounded-xl bg-white border border-gray-100 hover:shadow-md hover:bg-[#0B1C2D]/5 transition-all duration-300 group"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="bg-[#0B1C2D]/5 rounded-lg p-1.5 group-hover:bg-[#0B1C2D]/10 transition-colors">
                                <Calendar className="h-3.5 w-3.5 text-[#0B1C2D]" />
                              </div>
                              <span className="text-sm font-medium text-[#0B1C2D]">{t('chat.actionConsultation')}</span>
                            </div>
                            <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-[#0B1C2D] group-hover:translate-x-1 transition-all" />
                          </motion.button>
                          <motion.div whileHover={{ scale: 1.02, x: 4 }} whileTap={{ scale: 0.98 }}>
                            <Link 
                              to="/treatments" 
                              onClick={() => { setIsOpen(false); trackEvent('click_treatments', { source: 'faq_detail' }); }}
                              className="w-full h-11 flex items-center justify-between px-3 rounded-xl bg-white border border-gray-100 hover:shadow-md hover:bg-[#0B1C2D]/5 transition-all duration-300 group"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="bg-[#0B1C2D]/5 rounded-lg p-1.5 group-hover:bg-[#0B1C2D]/10 transition-colors">
                                  <Star className="h-3.5 w-3.5 text-[#0B1C2D]" />
                                </div>
                                <span className="text-sm font-medium text-[#0B1C2D]">{t('chat.actionTreatments')}</span>
                              </div>
                              <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-[#0B1C2D] group-hover:translate-x-1 transition-all" />
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {faqs.map(faq => (
                          <motion.button
                            whileHover={{ scale: 1.02, x: 4 }}
                            whileTap={{ scale: 0.98 }}
                            key={faq.id}
                            onClick={() => handleFaqSelect(faq.id)}
                            className="w-full h-11 text-start px-3 rounded-xl bg-white border border-gray-100 hover:shadow-md hover:bg-[#0B1C2D]/5 transition-all duration-300 group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[13px] font-medium text-[#0B1C2D] pe-4 truncate">
                                {faq.question}
                              </span>
                              <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-[#0B1C2D] group-hover:translate-x-1 transition-all flex-shrink-0" />
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ) : isFormOpen ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <button
                      type="button"
                      onClick={() => { setIsFormOpen(false); trackEvent('form_close'); }}
                      className="mb-4 flex items-center gap-2 text-[10px] font-bold text-[#6B7280] uppercase tracking-wider hover:text-[#0B1C2D] transition-colors"
                    >
                      <ChevronLeft className="h-3 w-3" />
                      {t('chat.formBack')}
                    </button>
                    
                    <h4 className="text-xl font-bold text-[#0B1C2D] mb-6">
                      {t('chat.formTitle')}
                    </h4>

                    {submitError && (
                      <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-600 mb-4">
                        {submitError}
                      </div>
                    )}

                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold text-[#6B7280]/60 uppercase tracking-widest mb-1.5 px-1">
                          {t('chat.formName')}
                        </label>
                        <input
                          required
                          type="text"
                          placeholder={t('chat.formName')}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl bg-gray-50 border-none px-5 py-3.5 text-sm font-medium text-[#0B1C2D] focus:ring-2 focus:ring-[#0B1C2D]/10 transition-all placeholder:text-gray-300"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-[#6B7280]/60 uppercase tracking-widest mb-1.5 px-1">
                          {t('chat.formPhone')}
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder={t('chat.phonePlaceholder', '+90...')}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl bg-gray-50 border-none px-5 py-3.5 text-sm font-medium text-[#0B1C2D] focus:ring-2 focus:ring-[#0B1C2D]/10 transition-all placeholder:text-gray-300"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                          <label className="block text-[10px] font-bold text-[#6B7280]/60 uppercase tracking-widest mb-1.5 px-1">
                            {t('chat.formTreatment')}
                          </label>
                          <select
                            value={formData.treatment}
                            onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                            className="w-full rounded-xl bg-gray-50 border-none px-5 py-3.5 text-sm font-medium text-[#0B1C2D] focus:ring-2 focus:ring-[#0B1C2D]/10 transition-all appearance-none cursor-pointer"
                          >
                            <option value="">{t('chat.formSelectTreatment')}</option>
                            {treatments.map(t => (
                              <option key={t.id} value={t.slug}>{t.title}</option>
                            ))}
                          </select>
                        </div>

                        <div className="relative">
                          <label className="block text-[10px] font-bold text-[#6B7280]/60 uppercase tracking-widest mb-1.5 px-1">
                            {t('chat.formLanguage')}
                          </label>
                          <select
                            value={formData.language}
                            onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                            className="w-full rounded-xl bg-gray-50 border-none px-4 py-3 text-sm font-medium text-[#0B1C2D] focus:ring-2 focus:ring-[#0B1C2D]/10 transition-all appearance-none cursor-pointer"
                          >
                            {languages.map(l => (
                              <option key={l.code} value={l.code}>{l.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full mt-3 h-12 flex items-center justify-between group px-5 rounded-xl bg-[#0B1C2D] hover:bg-[#13293D] transition-all duration-300 shadow-lg shadow-[0_25px_80px_rgba(11,28,45,0.12)]/10 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      <span className="text-sm font-bold text-white uppercase tracking-wider">
                        {t('chat.formSubmit')}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="actions"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-2"
                  >
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em] px-1 mb-3">
                      {t('chat.quickActions')}
                    </p>
                    
                    {/* Dynamic Contextual Actions */}
                    {getActions().map((action, idx) => {
                      const isExternal = (action as any).isExternal
                      const content = (
                        <motion.div 
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex h-11 items-center justify-between group px-3 rounded-xl bg-white border border-gray-100 hover:shadow-md hover:bg-[#0B1C2D]/5 transition-all duration-300 cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="bg-[#0B1C2D]/5 rounded-lg p-1.5 group-hover:bg-[#0B1C2D]/10 transition-colors">
                              <action.icon className="h-3.5 w-3.5 text-[#0B1C2D] transition-colors" />
                            </div>
                            <span className="text-sm font-medium text-[#0B1C2D] transition-colors">
                              {action.label}
                            </span>
                          </div>
                          <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-[#0B1C2D] group-hover:translate-x-1 transition-all" />
                        </motion.div>
                      )

                      if (isExternal) {
                        return (
                          <a 
                            key={idx} 
                            href={action.to} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => trackEvent('click_whatsapp', { source: 'quick_actions' })}
                          >
                            {content}
                          </a>
                        )
                      }

                      return (
                        <Link key={idx} to={action.to} onClick={() => handleActionClick(action.to)}>
                          {content}
                        </Link>
                      )
                    })}

                    {/* Fixed WhatsApp Support Option (at bottom) */}
                    <motion.a
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('click_whatsapp', { source: 'sticky_bottom' })}
                      className="flex h-11 items-center justify-between group px-3 rounded-xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="bg-[#25D366]/20 rounded-lg p-1.5 group-hover:bg-white/20 transition-colors">
                          <Phone className="h-3.5 w-3.5 text-inherit transition-colors" />
                        </div>
                        <span className="text-sm font-medium transition-colors">
                          {t('chat.actionWhatsApp')}
                        </span>
                      </div>
                      <ArrowRight className="h-3 w-3 text-inherit group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Assistant Button */}
      <motion.button
        onClick={toggleAssistant}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-16 w-16 items-center justify-center rounded-full shadow-luxury-xl transition-all duration-300 bg-[#0B1C2D] text-white border-0"
        aria-label={t('a11y.toggleAssistant')}
      >
        <div className={`absolute inset-0 rounded-full bg-white/20 transition-transform duration-500 pointer-events-none ${isOpen ? 'scale-0' : 'scale-100 animate-pulse'}`} />
        
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <X className="h-7 w-7" />
            </motion.div>
          ) : (
            <motion.div
              key="assistant"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <MessageSquare className="h-7 w-7" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
    </>
  )
}
