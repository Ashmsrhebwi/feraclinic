import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useLocation } from 'react-router-dom'

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const location = useLocation()

  const getDynamicMessage = () => {
    const path = location.pathname.toLowerCase()
    let treatment = ''

    if (path.includes('implants')) treatment = 'Dental Implants'
    else if (path.includes('veneers')) treatment = 'Porcelain Veneers'
    else if (path.includes('all-on-four')) treatment = 'All-on-4 Restoration'
    else if (path.includes('crowns')) treatment = 'Zirconium Crowns'
    else if (path.includes('smile-design')) treatment = 'Digital Smile Design'

    const base = 'Hello FeRa Clinic! I would like to get a consultation'
    return treatment ? `${base} for ${treatment}.` : `${base}.`
  }

  const phoneNumber = '905321234567' // Standardized placeholder
  const message = getDynamicMessage()
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  useEffect(() => {
    const showTimer = setTimeout(() => setShowTooltip(true), 2500)
    const hideTimer = setTimeout(() => setShowTooltip(false), 8500)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [location.pathname])

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="mb-3 max-w-[280px] rounded-2xl border border-fera-gold/20 bg-white px-4 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-green-500" />
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-fera-gold">
                  WhatsApp Support
                </p>
                <p className="mt-1 text-sm leading-6 text-fera-navy">
                  Speak with our team and get your free consultation.
                </p>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-slate-400 transition-colors hover:text-fera-navy"
                aria-label="Close WhatsApp tooltip"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-fera-navy shadow-[0_14px_34px_rgba(15,23,42,0.18)] ring-1 ring-black/5 transition-all hover:shadow-[0_18px_42px_rgba(15,23,42,0.22)]"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full ring-8 ring-green-500/10" />
        <span className="absolute right-0.5 top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />

        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative h-6 w-6 transition-transform group-hover:scale-105"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.197-.771.967-.945 1.164-.174.197-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.button>
    </div>
  )
}