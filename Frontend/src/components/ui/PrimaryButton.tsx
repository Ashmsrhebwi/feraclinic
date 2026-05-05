import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ReactNode } from 'react'

interface PrimaryButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  disabled?: boolean
}

export function PrimaryButton({ 
  children, 
  onClick, 
  href, 
  className = '', 
  size = 'lg',
  fullWidth = false,
  disabled = false
}: PrimaryButtonProps) {
  const sizeClasses = {
    sm: 'h-12 px-6 text-white',
    md: 'h-14 px-8 text-white',
    lg: 'h-16 px-8 text-white'
  }

  const widthClass = fullWidth ? 'w-full' : 'w-full sm:w-auto sm:min-w-[280px]'

  const buttonContent = (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-[#12304A] to-[#0B1C2D] opacity-0 group-hover:opacity-100 transition-all duration-300 ease" />
      <span className="uppercase tracking-widest font-bold relative z-10">{children}</span>
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 ease relative z-10" />
    </>
  )

  const buttonClasses = `
    ${widthClass} ${sizeClasses[size]} 
    bg-[#0B1C2D] text-white font-bold rounded-full 
    shadow-[0_18px_45px_rgba(11,28,45,0.22)] hover:shadow-[0_25px_60px_rgba(11,28,45,0.35)] hover:scale-[1.03] 
    transition-all duration-300 ease 
    flex items-center justify-center gap-3 group relative overflow-hidden
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `

  const motionProps = {
    className: buttonClasses,
    whileHover: disabled ? {} : { scale: 1.03, y: -2, boxShadow: "0 25px 60px rgba(11,28,45,0.35)" },
    whileTap: disabled ? {} : { scale: 0.98 }
  }

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {buttonContent}
      </a>
    )
  }

  return (
    <motion.button {...motionProps} onClick={onClick}>
      {buttonContent}
    </motion.button>
  )
}
