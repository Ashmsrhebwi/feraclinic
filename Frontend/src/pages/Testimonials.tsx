import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { Star, Quote, Globe, Calendar, Zap } from 'lucide-react'
import { Button } from '../components/ui/button'

import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'

export function Testimonials() {
  const { t } = useTranslation()
  useSEO({ title: t('navigation.testimonials'), description: t('testimonials.subtitle') })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState('all')

  const testimonials = [
    {
      id: 1,
      name: t('testimonials.list.t1.name'),
      location: t('testimonials.list.t1.location'),
      treatment: 'dental-implants',
      rating: 5,
      quote: t('testimonials.list.t1.quote'),
      date: t('testimonials.list.t1.date'),
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      id: 2,
      name: t('testimonials.list.t2.name'),
      location: t('testimonials.list.t2.location'),
      treatment: 'veneers-smile-design',
      rating: 5,
      quote: t('testimonials.list.t2.quote'),
      date: t('testimonials.list.t2.date'),
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      id: 3,
      name: t('testimonials.list.t3.name'),
      location: t('testimonials.list.t3.location'),
      treatment: 'full-mouth-reconstruction',
      rating: 5,
      quote: t('testimonials.list.t3.quote'),
      date: t('testimonials.list.t3.date'),
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      id: 4,
      name: t('testimonials.list.t4.name'),
      location: t('testimonials.list.t4.location'),
      treatment: 'invisalign',
      rating: 5,
      quote: t('testimonials.list.t4.quote'),
      date: t('testimonials.list.t4.date'),
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      id: 5,
      name: t('testimonials.list.t5.name'),
      location: t('testimonials.list.t5.location'),
      treatment: 'teeth-whitening-istanbul',
      rating: 5,
      quote: t('testimonials.list.t5.quote'),
      date: t('testimonials.list.t5.date'),
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      id: 6,
      name: t('testimonials.list.t6.name'),
      location: t('testimonials.list.t6.location'),
      treatment: 'dental-crowns',
      rating: 5,
      quote: t('testimonials.list.t6.quote'),
      date: t('testimonials.list.t6.date'),
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
    }
  ]

  const treatments = [
    { key: 'all', label: t('testimonials.filters.all') },
    { key: 'dental-implants', label: t('treatments.implants') },
    { key: 'veneers-smile-design', label: t('treatments.veneers') },
    { key: 'invisalign', label: t('treatments.invisalign') },
    { key: 'full-mouth-reconstruction', label: t('treatments.fullMouth') },
    { key: 'teeth-whitening-istanbul', label: t('treatments.whitening') },
    { key: 'dental-crowns', label: t('treatments.crowns') }
  ]

  const filteredTestimonials =
    filter === 'all'
      ? testimonials
      : testimonials.filter((t) => t.treatment === filter)

  const stats = [
    { number: '10,000+', label: t('testimonials.stats.patients') },
    { number: '50+', label: t('testimonials.stats.countries') },
    { number: '98%', label: t('testimonials.stats.satisfaction') },
    { number: '5.0', label: t('testimonials.stats.rating') }
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] px-6 pb-24 pt-32 lg:px-8 relative overflow-hidden">
        {/* Abstract background detail */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.03] blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white opacity-[0.02] blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="mx-auto max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-5xl font-semibold text-white lg:text-6xl"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {t('testimonials.heroTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mx-auto max-w-3xl text-xl leading-8 text-white/80"
          >
            {t('testimonials.heroDesc')}
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
                <div className="mb-2 text-4xl font-semibold text-[#0B1C2D] lg:text-5xl">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FILTERS */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-std">
          <div className="flex flex-wrap justify-center gap-4">
            {treatments.map((treatment) => (
              <button
                key={treatment.key}
                onClick={() => setFilter(treatment.key)}
                className={`px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                  filter === treatment.key 
                    ? 'bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] text-white shadow-lg scale-[1.05]' 
                    : 'bg-[#F4F7FA] text-[#64748B] hover:bg-gradient-to-r hover:from-[#0B1C2D] hover:to-[#123A6B] hover:text-white'
                }`}
              >
                {treatment.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS GRID */}
      <section ref={ref} className="py-24 lg:py-32 bg-white">
        <div className="container-std">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#F8FAFC] border border-gray-100/50 rounded-[2.5rem] p-10 lg:p-12 hover:shadow-[0_20px_60px_rgba(11,28,45,0.06)] transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-2xl object-cover shadow-sm group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-white rounded-lg p-1.5 shadow-sm border border-gray-50">
                        <Globe className="w-3 h-3 text-[#0B1C2D]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0B1C2D] tracking-tight">{testimonial.name}</h3>
                      <p className="text-[10px] uppercase tracking-widest text-[#64748B] font-bold">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < testimonial.rating ? 'fill-[#0B1C2D] text-[#0B1C2D]' : 'text-gray-200'}`} />
                    ))}
                  </div>
                </div>

                <div className="relative mb-8">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-[#0B1C2D]/5" />
                  <p className="relative z-10 text-gray-600 leading-relaxed font-light text-lg italic">“{testimonial.quote}”</p>
                </div>

                <div className="pt-8 border-t border-gray-200/50 flex items-center justify-between">
                  <div className="bg-[#0B1C2D]/5 px-4 py-2 rounded-lg">
                    <span className="text-[10px] font-bold text-[#0B1C2D] uppercase tracking-widest">
                      {treatments.find(tObj => tObj.key === testimonial.treatment)?.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#64748B] uppercase tracking-widest">
                    <Calendar className="w-3 h-3" />
                    {testimonial.date}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VIDEO STORIES */}
      <section className="py-24 lg:py-32 bg-[#F8FAFC]">
        <div className="container-std">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-[10px] font-bold text-[#0B1C2D] uppercase tracking-[0.4em] mb-6 block">{t('testimonials.videoTitle')}</span>
            <h2 className="text-4xl lg:text-[64px] font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.05]">
              {t('testimonials.videoTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1, duration: 0.6 }}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(11,28,45,0.04)] border border-gray-100/50 hover:shadow-2xl transition-all duration-700"
              >
                <div className="aspect-video relative overflow-hidden bg-slate-200">
                  <img 
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1629909613654-28e377c37b09' : item === 2 ? '1579684385127-1ef15d508118' : '1581056771107-24ca5f033842'}?auto=format&fit=crop&q=80&w=800`}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                    alt={t('testimonials.caseImageAlt')}
                  />
                  <div className="absolute inset-0 bg-[#0B1C2D]/30 backdrop-blur-[1px] group-hover:bg-transparent transition-all duration-700" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#0B1C2D] group-hover:text-white transition-all duration-700">
                      <div className="ms-1 w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-current border-b-[10px] border-b-transparent" />
                    </div>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0B1C2D]" />
                    <span className="text-[10px] font-bold text-[#0B1C2D] uppercase tracking-[0.3em]">{t('testimonials.patientStory')}</span>
                  </div>
                  <h4 className="text-xl font-bold text-[#0B1C2D] mb-4 tracking-tight">{t('testimonials.successCase')}{item}</h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {t('testimonials.successCaseDesc')}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 6. FINAL CTA */}
      <section className="py-24 lg:py-32 px-6 bg-white">
        <div className="container-std">
          <div className="bg-gradient-to-r from-[#0B1C2D] to-[#123A6B] rounded-[3rem] lg:rounded-[4rem] px-12 lg:px-24 py-24 lg:py-32 text-center relative overflow-hidden shadow-[0_40px_120px_rgba(11,28,45,0.25)] group">
            {/* Abstract background detail */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-[0.03] blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white opacity-[0.02] blur-[100px] translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 space-y-12">
              <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                  <Star className="w-8 h-8 text-white fill-current" />
                </div>
                <h2 className="text-4xl lg:text-[72px] font-serif font-bold text-white tracking-tight leading-[1.05] max-w-4xl mx-auto">
                  {t('testimonials.ctaTitle')}
                </h2>
              </div>

              <p className="text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                {t('testimonials.ctaDesc')}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link to="/consultation" className="w-full sm:w-auto">
                  <motion.button 
                    className="w-full sm:w-auto px-12 h-20 bg-white text-[#0B1C2D] rounded-full font-bold text-lg uppercase tracking-widest shadow-2xl transition-all duration-500"
                    whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('common.designYourSmile')}
                  </motion.button>
                </Link>
                <a href={`https://wa.me/${t('common.whatsappNumber')}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <motion.button 
                    className="w-full sm:w-auto px-12 h-20 bg-transparent text-white border border-white/20 rounded-full font-bold text-lg uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-4 group/wa"
                    whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center group-hover/wa:bg-green-500 transition-colors">
                      <Zap className="w-4 h-4 text-green-400 group-hover/wa:text-white" />
                    </div>
                    {t('common.whatsappConsultationLong')}
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
