import { LocalizedLink as Link } from './LocalizedLink'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link to={href} className="block h-full group">
        <div className="card-premium-hover bg-white rounded-luxury-lg overflow-hidden flex flex-col h-full
                        border border-fera-border/30 shadow-luxury-sm transition-all duration-700">

          {/* Image */}
          <div className="aspect-[16/10] w-full overflow-hidden relative bg-gray-50">
            <img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out
                         group-hover:scale-105"
            />
            {/* Subtle overlay on hover for depth */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {category && (
              <div className="absolute top-4 start-4 z-10">
                <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full
                                 text-[9px] font-bold uppercase tracking-widest text-[#1b4698] shadow-sm border border-[#1b4698]/5">
                  {category}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-fera-deep mb-3 leading-tight
                           group-hover:text-fera-primary transition-colors duration-300 tracking-tight">
              {title}
            </h3>
            <p className="text-fera-gray text-sm font-light leading-relaxed flex-grow line-clamp-2 mb-8">
              {description}
            </p>

            <footer className="pt-6 border-t border-slate-50 flex items-center justify-between">
              {metadata ? (
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-[#6B7280]/40 font-bold mb-1">
                    {metadata.label}
                  </span>
                  <span className="text-xs font-bold text-[#1b4698]/60 tracking-tight">{metadata.value}</span>
                </div>
              ) : <div />}

              <div className="w-9 h-9 rounded-full border border-slate-100 flex items-center justify-center text-[#006693] transition-all group-hover:bg-[#1b4698] group-hover:text-white group-hover:border-transparent">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </footer>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
