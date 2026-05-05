import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null)

  const getDynamicMessage = () => {
    const path = location.pathname.toLowerCase()
    let treatment = ''

    if (path.includes('implants')) treatment = t('treatments.implants')
    else if (path.includes('hollywood-smile') || path.includes('veneers')) treatment = t('treatments.veneers')
    else if (path.includes('all-on-4-istanbul')) treatment = t('treatments.allOn4')
    else if (path.includes('crowns')) treatment = t('treatments.crowns')
    else if (path.includes('orthodontics') || path.includes('invisalign')) treatment = t('treatments.ortho')
    else if (path.includes('smile-design-istanbul')) treatment = t('treatments.smileMakeover')

    const base = t('contact.whatsappBase')
    return treatment ? `${base} ${t('common.for')} ${treatment}.` : `${base}.`
  }

  const phoneNumber = t('common.whatsappNumber').replace(/\D/g, '')
  const message = getDynamicMessage()
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false)
      return
    }
    const showTimer = setTimeout(() => setShowTooltip(true), 3500)
    const hideTimer = setTimeout(() => setShowTooltip(false), 10000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [location.pathname, isOpen])

  // Backdrop click-outside is handled via the backdrop div rendered in JSX

  const handleChatStart = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
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
        className="fixed bottom-6 right-6 sm:right-8 z-50 flex flex-col items-end"
      >
        <AnimatePresence>
          {/* WhatsApp Popup Card */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 w-[280px] overflow-hidden rounded-[2rem] bg-white shadow-luxury-2xl sm:w-[360px] border border-gray-100"
            >
              {/* Header */}
              <div className="bg-white p-6 relative border-b border-gray-100">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-5 end-5 text-slate-500 hover:text-[#0B1C2D] transition-all active:scale-90"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 flex items-center justify-center">
                    <img src="/images/BLUE BACK WHİTE LOGO (1).png" alt={t('alt.feraClinic')} className="w-12 h-auto object-contain rounded-full" />
                    <div className="absolute bottom-1 end-1 h-3 w-3 rounded-full border-2 border-white bg-green-500">
                      <div className="absolute inset-0 rounded-full bg-green-500 animate-[ping-slow_3s_infinite]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1C2D] tracking-tight">
                      {t('whatsapp.title')}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                        {t('whatsapp.status')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="relative rounded-2xl bg-gray-50 p-5 text-sm leading-relaxed text-[#6B7280] font-medium border border-gray-100 shadow-sm">
                  <div className="absolute -left-2 top-4 h-4 w-4 rotate-45 bg-gray-50 border-t border-l border-gray-100/50" />
                  {t('whatsapp.greeting')}
                </div>
              </div>

              {/* Footer / CTA */}
              <div className="p-6 pt-0">
                <motion.button
                  onClick={handleChatStart}
                  initial={{ opacity: 0, translateY: 10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 py-4 px-6 text-white font-semibold tracking-wide shadow-[0_10px_30px_rgba(34,197,94,0.35)] transition-all duration-300 ease-out hover:shadow-[0_25px_80px_rgba(11,28,45,0.12)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  {/* Subtle pulse glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />

                  <Send className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
                  <span className="uppercase tracking-wider text-sm font-semibold">{t('whatsapp.cta')}</span>
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Tooltip (Before Open) */}
          {!isOpen && showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="hidden sm:block mb-4 max-w-[260px] rounded-2xl border border-[#13293D]/10 bg-white/95 backdrop-blur-md px-5 py-4 shadow-luxury-lg cursor-pointer hover:shadow-luxury-xl transition-all hover:-translate-y-1 active:scale-[0.98]"
              onClick={() => setIsOpen(true)}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-gray-500 animate-pulse shrink-0" />
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#13293D]">
                    {t('contact.cta.whatsapp')}
                  </p>
                  <p className="mt-1 text-xs text-[#0B1C2D] leading-relaxed font-medium">
                    {t('contact.cta.whatsappDesc')}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex h-16 w-16 items-center justify-center rounded-full shadow-luxury-xl transition-all duration-300 bg-white border border-gray-200 text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-transparent"
          aria-label={t('a11y.toggleWhatsApp')}
        >
          <div className={`absolute inset-0 rounded-full transition-transform duration-500 pointer-events-none bg-[#25D366]/20 group-hover:bg-white/20 ${isOpen ? 'scale-0' : 'scale-100 animate-ping'}`} />

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
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.197-.771.967-.945 1.164-.174.197-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  )
}