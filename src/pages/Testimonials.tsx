import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { Star, Quote, Globe, Calendar } from 'lucide-react'
import { Button } from '../components/ui/button'

import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'

export function Testimonials() {
  const { t } = useTranslation()
  useSEO({ title: t('navigation.testimonials'), description: t('testimonials.subtitle', 'Experiences shared by patients.') })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState('all')

  const testimonials = [
    {
      id: 1,
      name: t('testimonials.list.t1.name', 'Michael Schmidt'),
      location: t('testimonials.list.t1.location', 'Berlin, Germany'),
      treatment: 'dental-implants',
      rating: 5,
      quote: t('testimonials.list.t1.quote', 'The treatment process felt clear and well organized. I appreciated the professionalism of the team and the attention given to every step.'),
      date: t('testimonials.list.t1.date', 'March 2024'),
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      id: 2,
      name: t('testimonials.list.t2.name', 'Emma Johnson'),
      location: t('testimonials.list.t2.location', 'Manchester, UK'),
      treatment: 'veneers-smile-design',
      rating: 5,
      quote: t('testimonials.list.t2.quote', 'I felt supported from consultation to treatment. The final result looked natural, balanced, and exactly what I hoped for.'),
      date: t('testimonials.list.t2.date', 'February 2024'),
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      id: 3,
      name: t('testimonials.list.t3.name', 'David Williams'),
      location: t('testimonials.list.t3.location', 'New York, USA'),
      treatment: 'full-mouth-reconstruction',
      rating: 5,
      quote: t('testimonials.list.t3.quote', 'The clinic experience was smooth and reassuring. Communication was clear, and the team handled the case with real care and expertise.'),
      date: t('testimonials.list.t3.date', 'January 2024'),
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      id: 4,
      name: t('testimonials.list.t4.name', 'Sophie Laurent'),
      location: t('testimonials.list.t4.location', 'Paris, France'),
      treatment: 'invisalign',
      rating: 5,
      quote: t('testimonials.list.t4.quote', 'Everything felt modern, organized, and easy to follow. I appreciated how clearly the treatment steps were explained.'),
      date: t('testimonials.list.t4.date', 'December 2023'),
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      id: 5,
      name: t('testimonials.list.t5.name', 'Ahmed Hassan'),
      location: t('testimonials.list.t5.location', 'Dubai, UAE'),
      treatment: 'teeth-whitening',
      rating: 5,
      quote: t('testimonials.list.t5.quote', 'A very polished and comfortable experience. The team was welcoming, and the result gave my smile a noticeably fresher look.'),
      date: t('testimonials.list.t5.date', 'November 2023'),
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      id: 6,
      name: t('testimonials.list.t6.name', 'Maria Petrova'),
      location: t('testimonials.list.t6.location', 'Moscow, Russia'),
      treatment: 'dental-crowns',
      rating: 5,
      quote: t('testimonials.list.t6.quote', 'The care quality was excellent, and I felt confident throughout the process. The final result looked very natural.'),
      date: t('testimonials.list.t6.date', 'October 2023'),
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
    }
  ]

  const treatments = [
    { key: 'all', label: t('testimonials.filters.all', 'All Treatments') },
    { key: 'dental-implants', label: t('treatments.implants', 'Dental Implants') },
    { key: 'veneers-smile-design', label: t('treatments.veneers', 'Veneers & Smile Design') },
    { key: 'invisalign', label: t('treatments.invisalign', 'Invisalign') },
    { key: 'full-mouth-reconstruction', label: t('treatments.fullMouth', 'Full Mouth Reconstruction') },
    { key: 'teeth-whitening', label: t('treatments.whitening', 'Teeth Whitening') },
    { key: 'dental-crowns', label: t('treatments.crowns', 'Dental Crowns') }
  ]

  const filteredTestimonials =
    filter === 'all'
      ? testimonials
      : testimonials.filter((t) => t.treatment === filter)

  const stats = [
    { number: '10,000+', label: t('testimonials.stats.patients', 'Happy Patients') },
    { number: '50+', label: t('testimonials.stats.countries', 'Countries') },
    { number: '98%', label: t('testimonials.stats.satisfaction', 'Satisfaction Rate') },
    { number: '5.0', label: t('testimonials.stats.rating', 'Average Rating') }
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#1b4698] px-6 pb-24 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-5xl font-semibold text-white lg:text-6xl"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {t('testimonials.heroTitle', 'Patient Stories')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mx-auto max-w-3xl text-xl leading-8 text-white/80"
          >
            {t('testimonials.heroDesc', 'Experiences shared by patients who trusted FeRa Clinic with their smile journey.')}
          </motion.p>
        </div>
      </section>

      <section className="bg-[#F5F7FA] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-semibold text-[#1b4698] lg:text-5xl">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-white px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            {treatments.map((treatment) => (
              <Button
                key={treatment.key}
                onClick={() => setFilter(treatment.key)}
                variant={filter === treatment.key ? 'primary' : 'outline'}
                size="sm"
              >
                {treatment.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref} className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.id}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-[2rem] border border-black/5 bg-[#F5F7FA] p-8"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="h-16 w-16 rounded-full object-cover shadow-sm border border-black/5"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-[#1b4698]">{testimonial.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Globe className="h-4 w-4" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-[#008BC9]" />
                    ))}
                  </div>
                </div>

                <Quote className="mb-4 h-8 w-8 text-[#008BC9]/30" />
                <p className="mb-6 leading-8 text-slate-600">“{testimonial.quote}”</p>

                <div className="border-t border-black/5 pt-4">
                  <p className="text-sm font-medium text-[#1b4698]">{treatments.find(tObj => tObj.key === testimonial.treatment)?.label}</p>
                  <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                    <Calendar className="h-3 w-3" />
                    {testimonial.date}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2
              className="mb-4 text-4xl font-semibold text-[#1b4698] lg:text-5xl"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {t('testimonials.videoTitle', 'Video Stories')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
              {t('testimonials.videoDesc', 'Space reserved for selected patient video testimonials and interview content.')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.08, duration: 0.45 }}
                className="group cursor-pointer overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
              >
                <div className="aspect-video bg-slate-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1b4698] transition-transform group-hover:scale-105">
                      <div className="ms-1 h-0 w-0 border-b-[8px] border-s-[12px] border-t-[8px] border-b-transparent border-s-white border-t-transparent" />
                    </div>
                    <p className="text-slate-500">{t('testimonials.patientStory', 'Patient Story')} {item}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1b4698] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-semibold text-white"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {t('testimonials.ctaTitle', 'Start Your Own Smile Journey')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-8 text-xl text-white/80"
          >
            {t('testimonials.ctaDesc', 'Speak with our team and take the next step toward a treatment plan tailored to you.')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/consultation">
              <Button variant="primary" size="lg">
                {t('testimonials.ctaButton', 'Start Your Journey')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
