import { CSSProperties, ReactNode } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

type AnimationType = 'heading' | 'card' | 'image' | 'fade-up' | 'fade-left' | 'fade-right'

interface ScrollRevealProps {
  children: ReactNode
  type?: AnimationType
  delay?: number
  duration?: number
  className?: string
  stagger?: boolean
}

const typeClasses: Record<AnimationType, string> = {
  heading: 'anim-heading',
  card:    'anim-card',
  image:   'anim-image',
  'fade-up': 'anim-fade-up',
  'fade-left': 'anim-fade-left',
  'fade-right': 'anim-fade-right',
}

export function ScrollReveal({
  children,
  type = 'fade-up',
  delay = 0,
  duration = 800,
  className = '',
}: ScrollRevealProps) {
  const { ref, inView } = useScrollAnimation()

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
  }

  return (
    <div
      ref={ref}
      style={style}
      className={`animate-on-scroll ${typeClasses[type]} ${inView ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
