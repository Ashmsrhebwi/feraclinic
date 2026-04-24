import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface PremiumLoaderProps {
  isVisible: boolean
}

export function PremiumLoader({ isVisible }: PremiumLoaderProps) {
  const { t } = useTranslation()
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="premium-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -20,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#0c2350] to-[#1b4698] overflow-hidden"
        >
          {/* Subtle background glow/noise overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Sequence */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm p-3 mb-6 shadow-2xl border border-white/10"
            >
              {/* Inverted logo for dark navy background */}
              <img 
                src="/logofera.png" 
                alt={t('alt.feraClinic', 'FeRa Clinic')} 
                className="w-full h-full object-contain brightness-0 invert opacity-90" 
              />
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="text-3xl font-light text-white tracking-[0.2em] mb-4 uppercase"
            >
              FeRa Clinic
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="text-[10px] font-medium text-white/50 tracking-[0.3em] uppercase mb-12"
            >
              Precision. Aesthetics. Confidence.
            </motion.p>

            {/* Glowing Line Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-48 h-px bg-white/10 overflow-hidden relative rounded-full"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function InlineLoader() {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-5">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1b4698]/40">
          FeRa Clinic
        </span>
        <div className="w-32 h-px bg-gray-100 overflow-hidden relative rounded-full">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#1b4698]/40 to-transparent"
          />
        </div>
      </div>
    </div>
  )
}
