import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface TreatmentCardProps {
  title: string
  description: string
  image: string
  category?: string
  href: string
  duration?: string
}

export function TreatmentCard({ title, description, image, category, href, duration }: TreatmentCardProps) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden
                    transition-shadow duration-200 hover:shadow-[0_8px_32px_rgba(27,70,152,0.13)]
                    flex flex-col h-full">
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden bg-[#F5F7FA]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category badge */}
        {category && (
          <span className="inline-block mb-3 text-[11px] font-semibold uppercase tracking-widest
                           text-[#006693] bg-[#006693]/8 rounded-full px-3 py-1 w-fit">
            {category}
          </span>
        )}

        <h3 className="text-lg font-bold text-[#1b4698] mb-2 leading-snug">{title}</h3>

        <p className="text-sm text-[#6B7280] leading-relaxed flex-grow line-clamp-3">
          {description}
        </p>

        {/* Footer row */}
        <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
          {duration && (
            <span className="text-xs text-[#6B7280]">
              <strong className="font-semibold text-[#1b4698]/70">Duration:</strong> {duration}
            </span>
          )}
          <Link
            to={href}
            className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold
                       text-[#006693] hover:text-[#1b4698] transition-colors"
          >
            Learn more <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
