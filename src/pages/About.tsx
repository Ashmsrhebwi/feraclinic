import React from 'react'
import { motion } from 'framer-motion'
import { 
  Award, 
  Users, 
  Building2, 
  ShieldCheck, 
  Microscope, 
  Heart,
  ArrowRight,
  Stethoscope,
  ChevronRight,
  Globe
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { TiltCard } from '../components/ui/TiltCard'
import { BrandDivider } from '../components/ui/BrandDivider'

const team = [
  {
    name: 'Dr. Ahmet Yılmaz',
    role: 'Chief Medical Director',
    specialty: 'Oral Surgery & Implantology',
    image: '/images/fera-clinic/clinic/waiting-area.webp',
    desc: 'Specializing in complex biological reconstructions with over 15 years of surgical excellence.'
  },
  {
    name: 'Dr. Sarah Müller',
    role: 'Senior Aesthetic Architect',
    specialty: 'Digital Smile Design',
    image: '/images/fera-clinic/clinic/waiting-area.webp',
    desc: 'Expert in the harmony of dental biology and facial aesthetics using CAD/CAM technologies.'
  },
  {
    name: 'Dr. Can Karaca',
    role: 'Lead Prosthodontist',
    specialty: 'High-Precision Prosthetics',
    image: '/images/fera-clinic/clinic/waiting-area.webp',
    desc: 'Dedicated to the perfect marriage of functional load-bearing and natural translucency.'
  }
]

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO - MEDIUM INTENSITY HIERARCHY */}
      <section className="relative h-[60vh] lg:h-[70vh] flex items-center overflow-hidden">
        {/* Lighter Overlay to keep image visible and bright */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/fera-clinic/clinic/reception.webp" 
            alt="FeRa Clinic Reception & Aesthetics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-fera-deep/70 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white/10" />
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
              <span className="text-[10px] font-bold text-white/70 uppercase tracking-[0.5em]">Heritage & Excellence</span>
            </div>

            <h1 className="text-[clamp(3.5rem,6vw,90px)] font-bold text-white tracking-tighter leading-[0.85] mb-10">
              Expert Dental Care in <br />
              <span className="text-white/40 italic font-light">Nişantaşı, Istanbul.</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/80 max-w-2xl font-light leading-relaxed">
              FeRa Clinic combines international surgical precision with boutique patient care. Our protocols are designed for long-term clinical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL PILLARS - CLEAN WHITE BACKGROUND FOR BREATHING SPACE */}
      <section className="py-24 lg:py-48 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-1 bg-fera-primary mb-12 rounded-full" />
              <h2 className="text-4xl lg:text-[70px] font-bold text-fera-deep mb-10 tracking-tighter leading-[0.9]">
                High Quality <br/>
                <span className="text-fera-primary italic font-light opacity-50">Care Standards.</span>
              </h2>
              <p className="text-xl text-fera-gray font-light leading-relaxed mb-16 clinical-description">
                Our clinic operates under strict international medical protocols, ensuring that every patient receives restorative and aesthetic care of the highest biological standard.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-12">
                {[
                  { icon: ShieldCheck, title: 'Risk Management', desc: 'We follow stringent global safety standards for all invasive procedures.' },
                  { icon: Microscope, title: 'Bio-Digital Tech', desc: 'Implementing the latest 3D imaging for extreme surgical accuracy.' },
                  { icon: Stethoscope, title: 'Specialist Triage', desc: 'Multi-disciplinary coordination for complex restorative cases.' },
                  { icon: Heart, title: 'Concierge Care', desc: 'Dedicated coordinators supporting your entire medical journey.' }
                ].map((pillar, i) => (
                  <div key={i} className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-fera-off-white border border-fera-border/10 flex items-center justify-center text-fera-primary shadow-sm">
                      <pillar.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-fera-deep uppercase tracking-widest">{pillar.title}</h4>
                    <p className="text-[13px] text-fera-gray/60 font-light leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative p-6 bg-fera-off-white/30 rounded-[4rem] border border-fera-border/10"
            >
              <img 
                src="/images/fera-clinic/clinic/surgery-room.webp" 
                alt="State of the art surgical theater"
                loading="lazy"
                decoding="async"
                className="w-full h-[750px] object-cover rounded-[3rem] shadow-luxury-xl grayscale-[0.05]"
              />
              <div className="absolute top-16 left-16 bg-white/95 backdrop-blur-md p-10 rounded-2xl shadow-luxury-lg border border-fera-border/10 max-w-[220px]">
                <Globe className="w-8 h-8 text-fera-primary mb-6" />
                <p className="text-[10px] font-bold text-fera-deep uppercase tracking-[0.2em] leading-relaxed">
                  Istanbul's Boutique Hub for Surgical Excellence
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. TEAM SHOWCASE - SELECTIVE LARGE SPACING & SUBTLE GLOW */}
      <section className="py-24 lg:py-64 px-6 bg-fera-off-white/40 soft-blue-glow overflow-hidden text-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mb-32 mx-auto">
            <h2 className="text-5xl lg:text-[100px] font-bold text-fera-deep mb-8 tracking-tighter leading-[0.85]">
              Expert <br/>
              <span className="text-fera-primary/30 italic font-light">Specialists.</span>
            </h2>
            <p className="text-xl text-fera-gray/60 font-light max-w-xl mx-auto">
              Our surgical team consists of credentialed specialists with over 15 years of evidence-based clinical experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-left">
            {team.map((member, i) => (
              <TiltCard key={i}>
                <div className="group relative bg-white rounded-[4rem] p-8 shadow-luxury-lg hover:shadow-luxury-xl hover:border-fera-primary/5 transition-all duration-700 border border-fera-border/10 h-full flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden rounded-[3rem] mb-12 relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-fera-deep/5 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                  <div className="px-4 pb-4 flex-grow flex flex-col">
                    <span className="text-[10px] font-bold text-fera-primary uppercase tracking-[0.4em] mb-4 block">{member.specialty}</span>
                    <h3 className="text-3xl font-bold text-fera-deep mb-6 tracking-tight group-hover:text-fera-primary transition-colors">{member.name}</h3>
                    <p className="text-fera-gray/60 text-[13px] font-light leading-relaxed mb-10 flex-grow">{member.desc}</p>
                    <div className="flex items-center gap-3 text-fera-deep/30 font-bold text-[10px] uppercase tracking-widest pt-8 border-t border-fera-border/10 group-hover:text-fera-primary transition-colors">
                      Clinical Board Certified
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="mt-32">
            <Link to="/gallery" className="group inline-flex items-center gap-6 text-fera-primary hover:text-fera-deep transition-all duration-500">
              <span className="text-sm font-bold uppercase tracking-widest">View Transformation Outcomes</span>
              <div className="w-12 h-12 rounded-full border border-fera-border/30 flex items-center justify-center group-hover:bg-fera-deep group-hover:text-white transition-all duration-500">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA - BALANCED INTENSITY */}
      <section className="relative py-32 lg:py-64 px-6 text-center overflow-hidden">
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
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-[120px] font-bold text-white tracking-tighter leading-[0.8] mb-12">
              Ready for <br/>
              <span className="text-white/20 italic font-light">Evaluation?</span>
            </h2>
            <p className="text-xl text-white/40 max-w-xl mx-auto mb-16 font-light">
              Connect with our clinical coordinators for a specialized cost estimate and trip protocol.
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