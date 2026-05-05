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
            transition: { duration: 0.6, ease: 'easeOut' } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#13293D] to-[#0B1C2D] overflow-hidden"
        >
          {/* Premium background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(11,28,45,0.1)_0%,transparent_100%)] pointer-events-none" />
          
          {/* Animated dental pulse lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full border border-gray-100"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.05, 0.2]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute inset-4 rounded-full border border-gray-100"
              />
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Premium Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="relative mb-8"
            >
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md bg-gray-50 p-4 shadow-2xl border border-white/20">
                <img 
                  src="/logofera.png" 
                  alt={t('alt.feraClinic', 'FeRa Clinic')} 
                  className="w-full h-full object-contain brightness-0 invert" 
                />
              </div>
              {/* Soft glow effect */}
              <div className="absolute inset-0 rounded-full bg-white/5 blur-xl scale-150" />
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              FeRa Clinic
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
              className="text-sm font-light text-white/70 tracking-wider mb-12 italic"
            >
              Smile makers, more than smile
            </motion.p>

            {/* Premium Loading Bar */}
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '200px' }}
              transition={{ duration: 0.8, delay: 1 }}
              className="h-0.5 bg-white/20 rounded-full overflow-hidden relative"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ 
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2
                }}
                className="absolute inset-y-0 w-full bg-gradient-to-r from-transparent via-white/60 to-white"
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
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0B1C2D]/40">
          FeRa Clinic
        </span>
        <div className="w-32 h-px bg-gray-100 overflow-hidden relative rounded-full">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#0B1C2D]/40 to-transparent"
          />
        </div>
      </div>
    </div>
  )
}
