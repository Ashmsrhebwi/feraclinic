import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { t, i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          onClick={scrollToTop}
          className={`fixed bottom-32 ${isRTL ? 'left-6 sm:left-8' : 'right-6 sm:right-8'} z-40 
                     w-12 h-12 rounded-full bg-white text-[#1b4698] shadow-md border border-gray-200
                     flex items-center justify-center
                     hover:bg-[#1b4698] hover:text-white hover:border-transparent hover:scale-110 transition-all duration-300
                     group focus:outline-none focus:ring-2 focus:ring-[#1b4698]/30`}
          aria-label={t('a11y.scrollToTop', 'Scroll to top')}
        >
          <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
