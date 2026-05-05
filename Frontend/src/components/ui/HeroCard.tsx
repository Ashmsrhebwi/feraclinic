import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HeroCardProps {
  children: ReactNode
  className?: string
}

export function HeroCard({ children, className = '' }: HeroCardProps) {
  return (
    <motion.div 
      className={`w-full max-w-[94vw] sm:max-w-[680px] lg:max-w-[860px] 2xl:max-w-[980px] bg-white/75 backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 lg:p-12 shadow-[0_30px_100px_rgba(11,28,45,0.15)] border border-white/50 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
