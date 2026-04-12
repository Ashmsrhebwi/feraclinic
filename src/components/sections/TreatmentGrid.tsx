import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Treatment } from '../../types'

interface TreatmentGridProps {
  treatments: Treatment[]
  showAll?: boolean
}

export const TreatmentGrid: React.FC<TreatmentGridProps> = ({ treatments, showAll = false }) => {
  const displayTreatments = showAll ? treatments : treatments.slice(0, 6)

  return (
    <section className="bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-4xl mb-12 text-center">
          <h2 className="text-heading mb-6">
            Dental Services
          </h2>
          <p className="text-body">
            Professional dental treatments for your oral health needs
          </p>
        </div>

        {/* FeRa Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayTreatments.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-heading mb-3">
                    {treatment.title}
                  </h3>

                  <p className="text-body text-sm mb-4">
                    {treatment.description}
                  </p>

                  <Link
                    to={`/treatments/${treatment.slug}`}
                    className="inline-flex items-center gap-2 text-fera-accent font-medium hover:text-fera-navy transition-colors text-sm"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {!showAll && (
          <div className="mt-12 text-center">
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 px-6 py-3 bg-fera-accent text-fera-navy font-medium hover:bg-fera-navy hover:text-white transition-colors rounded-lg"
            >
              All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  )
}