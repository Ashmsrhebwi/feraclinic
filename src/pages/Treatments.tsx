import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  Zap,
  Star,
  ChevronRight,
  ShieldAlert,
  Microscope,
  Stethoscope
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { PremiumCard } from '../components/ui/PremiumCard'
import { BrandDivider } from '../components/ui/BrandDivider'
import { treatments } from '../data/treatments'

export function Treatments() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO - CLEAR BRANDING */}
      <section className="bg-fera-navy px-6 py-32 lg:py-48 relative overflow-hidden text-center">
        <div className="hero-inner-glow" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-fera-gold/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="w-12 h-1 bg-gradient-to-r from-fera-gold to-fera-gold/30 rounded-full" />
              <span className="text-[10px] font-bold text-fera-gold uppercase tracking-[0.4em]">Clinical Protocols</span>
              <div className="w-12 h-1 bg-gradient-to-l from-fera-gold to-fera-gold/30 rounded-full" />
            </div>
            <h1 className="text-6xl lg:text-[110px] font-semibold text-white mb-10 tracking-tighter leading-[0.9]">
              Transform Your Smile with <br />
              <span className="italic font-light text-white/40">Expert Dental Care.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/50 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Standardized medical procedures performed by specialists using advanced diagnostic 
              imaging and the world's leading dental materials in the heart of Nişantaşı.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. TREATMENT COLLECTION - USING PremiumCard */}
      <section className="py-40 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {treatments.map((t) => (
              <PremiumCard
                key={t.id}
                title={t.title}
                description={t.description}
                image={t.image}
                category={t.category}
                href={`/treatments/${t.slug}`}
                metadata={{
                  label: 'Typical Protocol',
                  value: t.duration
                }}
              />
            ))}
          </div>
          
          <div className="mt-32 text-center">
            <Link to="/gallery" className="group inline-flex items-center gap-4 text-fera-gold hover:text-fera-navy transition-all duration-300">
              <span className="text-base font-bold uppercase tracking-widest">View Before & After Gallery</span>
              <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-fera-gold group-hover:bg-fera-gold group-hover:text-white transition-all duration-300 text-fera-gold">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <BrandDivider />

      {/* 3. TECHNOLOGY - CLEAR REASSURANCE */}
      <section className="py-40 px-6 bg-fera-ivory/10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
             >
                <div className="w-14 h-1 bg-fera-gold mb-8 rounded-full" />
                <h2 className="text-4xl lg:text-7xl font-semibold text-fera-navy mb-8 tracking-tighter leading-[1]">
                  Modern Dental <br />
                  <span className="text-fera-gold italic font-light">Technology.</span>
                </h2>
                <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
                  We use modern digital tools for all our treatments. From 3D scanning to precise computer planning, 
                  we ensure high-quality and reliable results for every patient.
                </p>
                <div className="space-y-8">
                   {[
                     { icon: Microscope, title: 'Precision Visualization', desc: 'Using advanced medical tools for ultra-clear surgical accuracy.' },
                     { icon: Zap, title: 'Digital 3D Scanning', desc: 'Comfortable and fast digital oral maps without physical molds.' },
                     { icon: ShieldCheck, title: 'Quality Materials', desc: 'Only using world-leading biocompatible dental materials.' }
                   ].map((tech, i) => (
                     <div key={i} className="flex gap-6">
                       <div className="w-12 h-12 rounded-xl bg-white shadow-luxury flex items-center justify-center text-fera-navy flex-shrink-0">
                         <tech.icon className="w-5 h-5" />
                       </div>
                       <div>
                         <h4 className="font-bold text-fera-navy uppercase tracking-widest text-sm mb-1">{tech.title}</h4>
                         <p className="text-gray-400 text-sm font-light leading-relaxed">{tech.desc}</p>
                       </div>
                     </div>
                   ))}
                </div>
             </motion.div>
             
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2 }}
               className="relative rounded-[4rem] overflow-hidden shadow-luxury-xl p-4 bg-white border border-gray-100"
             >
               <img 
                src="/images/fera-clinic/clinic/surgery-room.webp" 
                alt="High end dental lab tech"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-[3rem]"
              />
               <div className="absolute -bottom-10 -right-10 bg-fera-navy text-white p-10 rounded-[2.5rem] shadow-luxury-xl">
                 <p className="text-4xl font-semibold tracking-tighter mb-1">100%</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-fera-gold">Digital Process</p>
               </div>
             </motion.div>
          </div>
        </div>
      </section>

      <BrandDivider />

      {/* 4. FINAL CTA - CLEAR COMMAND */}
      <section className="bg-fera-navy py-48 px-6 text-center relative overflow-hidden">
        <div className="hero-inner-glow" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-[110px] font-semibold text-white tracking-tighter leading-[0.85] mb-12">
              Ready for a <br />
              <span className="italic font-light text-white/40">New Smile?</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
              Contact us today for a free price estimate and personalized treatment plan. 
              Our specialists are ready to help you.
            </p>
            <Link to="/consultation">
              <Button size="lg" variant="premium" className="h-20 px-20 text-2xl shadow-luxury-xl hover:scale-105 transition-transform duration-300">
                Get Free Consultation
                <ArrowRight className="ml-4 h-8 w-8" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}