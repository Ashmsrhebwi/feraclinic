import React from 'react'
import { CardProps } from '../../types'
import { cn } from '../ui/utils'

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
  variant = 'default'
}) => {

  const baseClasses =
    'relative overflow-hidden rounded-2xl bg-white border border-black/5 transition-all duration-300'

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const variants = {
    default: 'shadow-[0_10px_30px_rgba(15,23,42,0.04)]',
    elevated: 'shadow-[0_18px_40px_rgba(15,23,42,0.08)]',
    soft: 'bg-[#008BC9]/5 border-[#008BC9]/10',
    glass: 'bg-white/70 backdrop-blur-md border-white/40'
  }

  const hoverClasses = hover
    ? 'hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]'
    : ''

  return (
    <div
      className={cn(
        baseClasses,
        paddingClasses[padding],
        variants[variant],
        hoverClasses,
        className
      )}
    >
      {children}
    </div>
  )
}