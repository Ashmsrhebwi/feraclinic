import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ReactNode } from 'react'

interface SecondaryButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export function SecondaryButton({ 
  children, 
  onClick, 
  href, 
  className = '', 
  size = 'lg',
  fullWidth = false
}: SecondaryButtonProps) {
  const sizeClasses = {
    sm: 'h-12 px-6 text-sm',
    md: 'h-14 px-8 text-sm',
    lg: 'h-16 px-8 text-sm'
  }

  const widthClass = fullWidth ? 'w-full' : 'w-full sm:w-auto sm:min-w-[280px]'

  const buttonContent = (
    <>
      <span className="uppercase tracking-widest font-bold">{children}</span>
      <ArrowRight className="w-5 h-5 group-hover:bg-[#0B1C2D]/20 translate-x-1.5 transition-transform duration-300" />
    </>
  )

  const buttonClasses = `
    ${widthClass} ${sizeClasses[size]} 
    bg-white/60 backdrop-blur-sm text-[#13293D] font-bold rounded-full 
    border border-[#13293D]/30 shadow-md 
    hover:bg-white hover:shadow-lg hover:scale-[1.02] 
    transition-all duration-300 ease-out 
    flex items-center justify-center gap-3 group
    ${className}
  `

  const motionProps = {
    className: buttonClasses,
    whileHover: { scale: 1.02, y: -2, boxShadow: "0 10px 30px rgba(11, 28, 45, 0.25)" },
    whileTap: { scale: 0.98 }
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
