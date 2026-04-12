import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plane, 
  Hotel, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Star,
  Zap,
  Coffee,
  Heart,
  Globe,
  Stethoscope
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { TiltCard } from '../components/ui/TiltCard'
import { BrandDivider } from '../components/ui/BrandDivider'

const steps = [
  {
    id: 1,
    title: 'Contact Us',
    desc: 'Connect with our team via WhatsApp or online form for an initial consultation.',
    icon: Zap
  },
  {
    id: 2,
    title: 'Get Cost Estimate',
    desc: 'Send us your dental photos or X-rays to receive a personalized price quote.',
    icon: ShieldCheck
  },
  {
    id: 3,
    title: 'Trip Planning',
    desc: 'We organize your airport transfers and 5-star hotel stay in Istanbul.',
    icon: Hotel
  },
  {
    id: 4,
    title: 'Dental Treatment',
    desc: 'Visit our modern clinic for your treatment and enjoy your new smile.',
    icon: Stethoscope
  }
]

const packages = [
  {
    title: 'Basic Package',
    level: 'Tier 01',
    features: [
      'Digital Smile Mapping',
      'VIP Airport Transfers',
      'Translation Services',
      'Post-Treatment Support'
    ]
  },
  {
    title: 'Standard Package',
    level: 'Tier 02',
    highlight: true,
    features: [
      'Full Smile Design',
      '5-Star Hotel Stay',
      'VIP Transfer Service',
      '24/7 Patient Support',
      'Istanbul City Tour'
    ]
  },
  {
    title: 'Luxury Package',
    level: 'Tier 03',
    features: [
      'Full Reconstruction',
      'Luxury Suite Stay',
      'Private Patient Manager',
      'Extended Warranty',
      'All-Inclusive Support'
    ]
  }
]

export function DentalTourism() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO - MEDIUM INTENSITY HIERARCHY */}
      <section className="relative h-[60vh] lg:h-[70vh] flex items-center overflow-hidden">
        {/* Lighter Overlay for Travel/Clinic visibility */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/fera-clinic/clinic/waiting-area.webp" 
            alt="International Patient Journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-fera-deep/75 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-[var(--hero-lighting)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1.5px] bg-white/40" />
              <span className="text-[10px] font-bold text-white/70 uppercase tracking-[0.5em]">Global Patient Concierge</span>
            </div>

            <h1 className="text-[clamp(3.5rem,6vw,90px)] font-bold text-white tracking-tighter leading-[0.85] mb-10">
              Your Dental <br />
              <span className="text-white/40 italic font-light">Journey in Istanbul.</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/80 max-w-2xl font-light leading-relaxed">
              Premium medical coordination for international patients. Specialist surgical outcomes paired with VIP hospitality in the heart of Nişantaşı.
            </p>
          </motion.div>
        </div>
      </section>

      <BrandDivider />

      {/* 2. CONCIERGE EXPERIENCE - CLEAR STEPS & SELECTIVE SPACING */}
      <section className="py-24 lg:py-64 px-6 bg-white overflow-hidden soft-blue-glow">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-32 max-w-3xl mx-auto">
            <h2 className="text-5xl lg:text-[90px] font-bold text-fera-deep mb-8 tracking-tighter leading-[0.85]">
              Systematic <br/>
              <span className="text-fera-primary/30 italic font-light">Coordination.</span>
            </h2>
            <p className="text-xl text-fera-gray font-light max-w-2xl mx-auto leading-relaxed clinical-description">
              From initial digital triage to post-operative recovery, our concierge team handles every surgical and logistical detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative"
              >
                <div className="w-20 h-20 rounded-3xl bg-fera-off-white border border-fera-border/10 flex items-center justify-center text-fera-primary mb-10 shadow-sm group-hover:bg-fera-deep group-hover:text-white transition-all duration-700">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="absolute top-10 left-20 right-0 h-[1px] bg-fera-border/20 -z-10 hidden lg:block" />
                <h3 className="text-xs font-bold text-fera-deep uppercase tracking-[0.3em] mb-6">{step.title}</h3>
                <p className="text-fera-gray/60 text-[13px] font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 text-center">
            <Link to="/consultation" className="group inline-flex items-center gap-6 text-fera-primary hover:text-fera-deep transition-all duration-500">
              <span className="text-sm font-bold uppercase tracking-widest">Begin Initial Triage</span>
              <div className="w-12 h-12 rounded-full border border-fera-border/30 flex items-center justify-center group-hover:bg-fera-deep group-hover:text-white transition-all duration-500">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <BrandDivider />

      {/* 3. COST TRANSPARENCY - CLEAR TABLE */}
      <section className="py-40 px-6 bg-fera-ivory/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
             >
                <div className="w-14 h-1 bg-fera-primary mb-12 rounded-full" />
                <h2 className="text-4xl lg:text-[70px] font-bold text-fera-deep mb-10 tracking-tighter leading-[0.9]">
                  Quality Care <br />
                  <span className="text-fera-primary italic font-light opacity-50">Affordable Prices.</span>
                </h2>
                <p className="text-xl text-fera-gray font-light leading-relaxed mb-16 clinical-description">
                  Istanbul offers high-precision clinical care with operational efficiency. We utilize the same premium materials and technology as leading EU clinics at localized rates.
                </p>
                <div className="bg-white rounded-[3rem] shadow-luxury-lg p-12 border border-fera-border/10 overflow-hidden relative">
                   <div className="absolute top-0 right-0 bg-fera-primary text-[9px] font-bold text-white px-8 py-2.5 tracking-[0.2em] uppercase">Comparative Economics</div>
                   <table className="w-full text-left">
                     <thead>
                       <tr className="border-b border-fera-border/10">
                          <th className="pb-8 text-[10px] font-bold text-fera-gray/40 uppercase tracking-[0.2em]">Surgical Protocol</th>
                          <th className="pb-8 text-[10px] font-bold text-fera-gray/40 uppercase tracking-[0.2em] text-center">Avg. UK Cost</th>
                          <th className="pb-8 text-[10px] font-bold text-fera-primary uppercase tracking-[0.2em] text-right">FeRa Estimate</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-fera-border/5">
                        {[
                          { service: 'Dental Implant', uk: '£2,500', fera: '£650' },
                          { service: 'Veneer (Per Unit)', uk: '£800', fera: '£250' },
                          { service: 'Full Smile Makeover', uk: '£15,000', fera: '£5,500' }
                        ].map((row, i) => (
                          <tr key={i} className="group">
                            <td className="py-8 font-bold text-fera-deep tracking-tight">{row.service}</td>
                            <td className="py-8 text-fera-gray/40 font-light text-center line-through">{row.uk}</td>
                            <td className="py-8 text-fera-primary font-bold text-right">{row.fera}</td>
                          </tr>
                        ))}
                     </tbody>
                   </table>
                </div>
             </motion.div>
             
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2 }}
               className="relative p-6 bg-fera-off-white/30 rounded-[4rem] border border-fera-border/10"
             >
                <img 
                  src="/images/fera-clinic/clinic/reception.webp" 
                  alt="Nişantaşı, Istanbul Medical District"
                  className="w-full h-[750px] object-cover rounded-[3rem] shadow-luxury-xl grayscale-[0.05]"
                />
                <div className="absolute top-16 right-16 bg-white/95 backdrop-blur-md p-10 rounded-2xl shadow-luxury-lg border border-fera-border/10 max-w-[220px]">
                   <MapPin className="w-8 h-8 text-fera-primary mb-6" />
                   <p className="text-[10px] font-bold text-fera-deep uppercase tracking-[0.2em] leading-relaxed">
                     Strategically Located in Nişantaşı Medical Hub.
                   </p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      <BrandDivider />

      {/* 5. LUXURY PACKAGES - TILT PASS */}
      <section className="py-24 lg:py-64 px-6 bg-white overflow-hidden text-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-32 max-w-3xl mx-auto">
            <h2 className="text-5xl lg:text-[100px] font-bold text-fera-deep mb-8 tracking-tighter leading-[0.85]">
              The Concierge <br/>
              <span className="text-fera-primary/30 italic font-light">Experience.</span>
            </h2>
            <p className="text-xl text-fera-gray/60 font-light max-w-xl mx-auto clinical-description">
              Select your transition tier. We handle the complexity so your surgical visit feels like the luxury escape it truly is.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-left">
            {packages.map((pkg, i) => (
              <TiltCard key={i}>
                <div className={`h-full group relative bg-white rounded-[4rem] p-12 shadow-luxury-lg hover:shadow-luxury-xl transition-all duration-700 border border-fera-border/10 flex flex-col ${pkg.highlight ? 'ring-2 ring-fera-primary/10' : ''}`}>
                  {pkg.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-fera-primary text-white text-[9px] font-bold px-8 py-2.5 rounded-full tracking-[0.2em] uppercase shadow-lg shadow-fera-primary/20">Institutional Choice</div>
                  )}
                  <span className="text-[10px] font-bold text-fera-primary uppercase tracking-[0.4em] mb-6 block">{pkg.level}</span>
                  <h3 className="text-3xl font-bold text-fera-deep mb-10 tracking-tight">{pkg.title}</h3>
                  <div className="space-y-6 flex-grow">
                    {pkg.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-4">
                         <div className="w-5 h-5 rounded-full bg-fera-off-white flex items-center justify-center border border-fera-border/10">
                           <CheckCircle2 className="w-3 h-3 text-fera-primary" />
                         </div>
                         <span className="text-[13px] text-fera-gray/60 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 pt-10 border-t border-fera-border/5">
                    <Link to="/consultation">
                       <Button size="xl" variant={pkg.highlight ? 'premium' : 'outline'} className={`w-full font-bold text-[10px] uppercase tracking-[0.2em] ${!pkg.highlight ? 'border-fera-border/30 text-fera-deep hover:bg-fera-deep hover:text-white' : ''}`}>
                        Select Treatment Pathway
                      </Button>
                    </Link>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <BrandDivider />

      {/* 6. FINAL CLEAR CTA */}
      <section className="bg-fera-navy py-48 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-fera-deep/95">
          <img 
            src="/images/fera-clinic/clinic/waiting-area.webp" 
            alt="Clinic hospitality"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl lg:text-[120px] font-bold text-white tracking-tighter leading-[0.85] mb-12">
              Ready for a <br/>
              <span className="text-white/20 italic font-light">New Smile?</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
              Join thousands of international patients who have chosen FeRa Clinic for high-quality dental care in Istanbul.
            </p>
            <Link to="/consultation">
              <Button size="xl" variant="premium" className="h-22 px-20 text-xl shadow-luxury-xl bg-white text-fera-deep hover:bg-fera-gold hover:text-white border-0 transition-all duration-500">
                Get Free Consultation
                <ArrowRight className="ml-4 h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
