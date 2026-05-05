import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  padding?: string
  background?: 'white' | 'gray' | 'gradient' | 'navy'
}

export function SectionWrapper({ 
  children, 
  className = '', 
  padding = 'py-20',
  background = 'white'
}: SectionWrapperProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-[#F8FAFC]',
    gradient: 'bg-gradient-to-b from-white to-[#F4F7FA]',
    navy: 'bg-gradient-to-r from-[#0B1C2D] to-[#123A6B]'
  }

  return (
    <section className={`${padding} px-6 ${bgClasses[background]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
