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
        <div className="card-premium-hover bg-white rounded-3xl overflow-hidden flex flex-col h-full
                        border border-[rgba(11,28,45,0.10)] shadow-[0_20px_60px_rgba(11,28,45,0.08)] transition-all duration-350 ease
                        hover:-translate-y-6 hover:scale-[1.01] hover:shadow-[0_30px_90px_rgba(11,28,45,0.15)]">

          {/* Image */}
          <div className="aspect-[16/10] w-full overflow-hidden relative bg-gray-50">
            <img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-350 ease
                         group-hover:scale-105"
            />
            {/* Subtle overlay on hover for depth */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-all duration-350 ease" />

            {category && (
              <div className="absolute top-4 start-4 z-10">
                <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full
                                 text-[9px] font-bold uppercase tracking-widest text-[#0B1C2D] shadow-sm border border-[#0B1C2D]/5">
                  {category}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-fera-deep mb-3 leading-tight
                           group-hover:text-fera-primary transition-all duration-300 ease tracking-tight">
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
                  <span className="text-xs font-bold text-[#0B1C2D]/60 tracking-tight">{metadata.value}</span>
                </div>
              ) : <div />}

              <div className="w-9 h-9 rounded-full border border-slate-100 flex items-center justify-center text-[#13293D] transition-all duration-300 ease group-hover:bg-[#0B1C2D] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_8px_25px_rgba(11,28,45,0.25)]">
                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease group-hover:translate-x-0.5" />
              </div>
            </footer>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
