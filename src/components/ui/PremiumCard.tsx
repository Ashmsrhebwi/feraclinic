import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface PremiumCardProps {
  title: string
  description: string
  image: string
  category?: string
  href: string
  metadata?: {
    label: string
    value: string
  }
}

export const PremiumCard: React.FC<PremiumCardProps> = ({
  title,
  description,
  image,
  category,
  href,
  metadata
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link to={href} className="block h-full group">
        <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full
                        border border-fera-border/30
                        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                        hover:shadow-luxury-lg hover:border-fera-primary/15 hover:-translate-y-1">

          {/* Image */}
          <div className="aspect-[16/10] w-full overflow-hidden relative bg-fera-off-white">
            <img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-[1600ms] ease-out
                         group-hover:scale-105"
            />
            {/* Subtle overlay on hover for depth */}
            <div className="absolute inset-0 bg-fera-deep/0 group-hover:bg-fera-deep/5 transition-colors duration-500" />

            {category && (
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full
                                 text-[9px] font-bold uppercase tracking-widest text-fera-deep shadow-sm">
                  {category}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-7 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-fera-deep mb-2.5 leading-tight
                           group-hover:text-fera-primary transition-colors duration-300 tracking-tight">
              {title}
            </h3>
            <p className="text-fera-gray text-sm font-light leading-relaxed flex-grow line-clamp-2 mb-6">
              {description}
            </p>

            <footer className="pt-5 border-t border-fera-border/20 flex items-center justify-between">
              {metadata ? (
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-fera-gray/50 font-bold mb-0.5">
                    {metadata.label}
                  </span>
                  <span className="text-xs font-bold text-fera-deep/70 tracking-tight">{metadata.value}</span>
                </div>
              ) : <div />}

              <span className="text-fera-primary font-bold text-[10px] uppercase tracking-widest
                               flex items-center gap-1.5 group-hover:text-fera-deep transition-colors">
                Learn More
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </footer>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
