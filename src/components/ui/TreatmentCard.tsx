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
      className="card-premium-hover bg-white border border-fera-border/30 rounded-luxury-lg overflow-hidden
                      flex flex-col h-full gpu group transition-all duration-700 shadow-luxury-sm
                      hover:border-fera-primary/10"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image Container with Editorial Zoom */}
      <div className="aspect-[16/11] overflow-hidden bg-fera-surface/50 relative">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-fera-deep/0 group-hover:bg-fera-deep/5 transition-colors duration-700" />
        
        {category && (
          <div className="absolute top-6 start-6 z-10">
            <span className="surface-glass px-4 py-1.5 rounded-full
                             text-[10px] font-bold uppercase tracking-[0.25em] text-fera-deep">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-10 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-fera-deep mb-4 leading-tight group-hover:text-fera-primary transition-colors duration-300 tracking-tighter">
          {title}
        </h3>

        <p className="text-sm text-fera-gray font-light leading-relaxed flex-grow line-clamp-3 mb-8">
          {description}
        </p>

        {/* Footer row — Premium Alignment */}
        <div className="mt-auto pt-8 border-t border-fera-border/30 flex items-center justify-between">
          {duration && (
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-[0.2em] text-fera-gray/40 font-bold mb-1">{t('treatments.durationLabel', 'Duration')}</span>
              <span className="text-[11px] font-bold text-fera-deep/70">{duration}</span>
            </div>
          )}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="px-6 border-fera-primary/20 text-fera-deep hover:bg-fera-deep hover:text-white transition-all duration-300 rounded-xl group/btn active-press"
          >
            <Link to={href}>
              {t('treatments.explore', 'Explore Treatment')} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
