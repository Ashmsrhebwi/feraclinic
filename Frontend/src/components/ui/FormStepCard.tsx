import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

interface FormStepCardProps {
  children: ReactNode
  isActive?: boolean
  className?: string
}

export function FormStepCard({ children, isActive = false, className = '' }: FormStepCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isActive ? 'active' : 'inactive'}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`
          bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_25px_80px_rgba(11,28,45,0.12)]
          border border-gray-100
          ${isActive ? 'ring-2 ring-[#0B1C2D]/20' : ''}
          ${className}
        `}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
