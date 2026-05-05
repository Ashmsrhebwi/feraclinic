import { LocalizedLink as Link } from './LocalizedLink'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from './button'
import { useTranslation } from 'react-i18next'

interface TreatmentCardProps {
  title: string
  description: string
  image: string
  category?: string
  href: string
  duration?: string
}

export function TreatmentCard({ title, description, image, category, href, duration }: TreatmentCardProps) {
  const { t } = useTranslation()
  return (
    <motion.div
      className="bg-white border border-gray-200/50 rounded-3xl overflow-hidden
                 flex flex-col h-full group transition-all duration-300 ease-out shadow-lg
                 hover:shadow-[0_25px_80px_rgba(11,28,45,0.12)] cursor-pointer"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.03, translateY: -4 }}
    >
      {/* Premium Image Container with Enhanced Hover */}
      <div className="aspect-[16/11] overflow-hidden bg-gray-50 relative">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        
        {/* Premium overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {category && (
          <div className="absolute top-4 start-4 z-10">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full
                           text-xs font-bold uppercase tracking-wider text-gray-700">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Enhanced Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight group-hover:text-[#0B1C2D] transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 font-normal leading-relaxed flex-grow line-clamp-3 mb-6 max-w-xs">
          {description}
        </p>

        {/* Premium Footer with Minimal Duration */}
        <div className="mt-auto pt-6 border-t border-gray-200/50 space-y-4">
          {duration && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-gray-300"></div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-[0.15em] text-gray-400 font-medium">{t('treatments.durationLabel', 'Duration')}</span>
                <span className="text-xs font-medium text-gray-600">{duration}</span>
              </div>
            </div>
          )}
          
          {/* Premium CTA Button */}
          <motion.button
            className="w-full px-6 py-3 border border-[#0B1C2D] text-[#0B1C2D] text-sm font-semibold rounded-full
                           transition-all duration-300 ease-out hover:bg-[#0B1C2D] hover:text-white hover:shadow-lg
                           flex items-center justify-center gap-2 group/btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to={href} className="flex items-center gap-2 w-full justify-center">
              {t('treatments.explore', 'Explore Treatment')}
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
