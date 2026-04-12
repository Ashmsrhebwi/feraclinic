import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, Heart, Eye, ArrowRight, Camera, Microscope, Star, Quote } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { TiltCard } from '../components/ui/TiltCard'
import { BrandDivider } from '../components/ui/BrandDivider'

const beforeAfterImages = [
  {
    id: 1,
    title: 'Anterior Transformation',
    category: 'Full Reconstruction',
    image: '/images/fera-clinic/before-after/case1-after.jpg',
    metrics: { results: 'Natural Harmony', period: '3 Weeks' }
  },
  {
    id: 2,
    title: 'Biological Integration',
    category: 'Surgical Implants',
    image: '/images/fera-clinic/before-after/case2-after.jpg',
    metrics: { results: 'Bone Stability', period: '4 Months' }
  },
  {
    id: 3,
    title: 'Smile Re-Architecture',
    category: 'Master Veneers',
    image: '/images/fera-clinic/before-after/case3-after.jpg',
    metrics: { results: 'Proportional Balance', period: '2 Visits' }
  },
  {
    id: 4,
    title: 'Orthodontic Alignment',
    category: 'Digital Aligners',
    image: '/images/fera-clinic/before-after/case4-after.jpg',
    metrics: { results: 'Bite Correction', period: '12 Months' }
  },
  {
    id: 5,
    title: 'Surgical Full Arch',
    category: 'All-on-4 Protocol',
    image: '/images/fera-clinic/before-after/case5-after.jpg',
    metrics: { results: 'Total Function', period: '24 Hours' }
  }
]

const clinicPhotos = [
  {
    id: 1,
    title: 'Advanced Surgical Suite',
    image: '/images/fera-clinic/clinic/surgery-room.webp',
    desc: 'Equipped with digital 3D imaging and international sterilization protocols for high-precision surgical safety.'
  },
  {
    id: 2,
    title: 'Reception & Patient Care',
    image: '/images/fera-clinic/clinic/reception.webp',
    desc: 'A professional and welcoming environment where your clinical journey begins with our coordination team.'
  },
  {
    id: 3,
    title: 'Patient Lounge',
    image: '/images/fera-clinic/clinic/waiting-area.webp',
    desc: 'Tranquil environments designed for patient comfort during the diagnostic and recovery phases of treatment.'
  }
]

export function Gallery() {
  const location = useLocation()
  const getTabFromHash = (hash: string) => hash === '#clinic-photos' ? 'clinic-photos' : 'before-after'
  const [activeTab, setActiveTab] = useState(() => getTabFromHash(window.location.hash))

  useEffect(() => {
    setActiveTab(getTabFromHash(location.hash))
  }, [location.hash])

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO - MINIMAL HIERARCHY FOR GALLERY */}
      <section className="relative h-[40vh] lg:h-[50vh] flex items-center overflow-hidden bg-fera-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1.5px] bg-fera-primary/20" />
              <span className="text-[10px] font-bold text-fera-primary/50 uppercase tracking-[0.4em]">Clinical Portfolio</span>
              <div className="w-12 h-[1.5px] bg-fera-primary/20" />
            </div>

            <h1 className="text-[clamp(3rem,5vw,70px)] font-bold text-fera-deep tracking-tighter leading-[0.85] mb-8">
              Documented <br />
              <span className="text-fera-primary italic font-light opacity-30">Outcomes.</span>
            </h1>

            <p className="text-lg text-fera-gray/60 max-w-2xl mx-auto font-light leading-relaxed">
              Explore actual transformation results performed under strict biological and aesthetic protocols.
            </p>
          </motion.div>
        </div>
        
        {/* Signature Vertical Lighting Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* 2. SEGMENTED CONTROL - HIGH-KEY STYLE */}
      <section className="bg-white border-b border-fera-border/10 sticky top-[72px] z-40 backdrop-blur-xl bg-white/80">
        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-center">
          <div className="bg-fera-off-white/80 p-2 rounded-2xl flex gap-1 border border-fera-border/10">
            <button
              onClick={() => setActiveTab('before-after')}
              className={`flex items-center gap-3 px-10 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-500 ${
                activeTab === 'before-after'
                  ? 'bg-white text-fera-deep shadow-luxury ring-1 ring-fera-primary/5'
                  : 'text-fera-gray/40 hover:text-fera-primary'
              }`}
            >
              <Camera className="w-4 h-4" />
              Case Transformations
            </button>
            <button
              onClick={() => setActiveTab('clinic-photos')}
              className={`flex items-center gap-3 px-10 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-500 ${
                activeTab === 'clinic-photos'
                  ? 'bg-white text-fera-deep shadow-luxury ring-1 ring-fera-primary/5'
                  : 'text-fera-gray/40 hover:text-fera-primary'
              }`}
            >
              <Microscope className="w-4 h-4" />
              Facility Audit
            </button>
          </div>
        </div>
      </section>

      {/* 3. GALLERY CONTENT - SELECTIVE SPACING & HIGH-KEY LIGHTING */}
      <section className="py-24 lg:py-48 px-6 bg-white overflow-hidden soft-blue-glow">
        {/* Anchor targets for hash navigation from Navbar */}
        <div id="before-after" className="sr-only absolute -mt-24" />
        <div id="clinic-photos" className="sr-only absolute -mt-24" />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatePresence mode="wait">
            {activeTab === 'before-after' ? (
              <motion.div
                key="cases"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
              >
                {beforeAfterImages.map((image) => (
                  <TiltCard key={image.id}>
                    <div className="group relative bg-white rounded-[4rem] border border-fera-border/10 shadow-luxury-lg hover:shadow-luxury-xl overflow-hidden transition-all duration-700 flex flex-col h-full">
                      <div className="aspect-[16/11] relative overflow-hidden bg-fera-off-white">
                        <img
                          src={image.image}
                          alt={image.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-fera-deep/5 group-hover:bg-transparent transition-colors duration-700" />
                        <div className="absolute top-8 left-8">
                           <span className="bg-white/95 backdrop-blur-md text-fera-deep px-5 py-2 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm">
                            Clinical Record
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-12 flex flex-col flex-grow text-left">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-8 h-[1.5px] bg-fera-primary/30" />
                          <span className="text-[10px] font-bold text-fera-primary uppercase tracking-[0.3em] leading-none">{image.category}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-fera-deep tracking-tight mb-10 group-hover:text-fera-primary transition-colors">{image.title}</h3>
                        
                        <div className="mt-auto grid grid-cols-2 gap-8 pt-10 border-t border-fera-border/5">
                          <div>
                            <p className="text-[9px] font-bold text-fera-gray/40 uppercase tracking-[0.2em] mb-2">Protocol Outcome</p>
                            <p className="text-xs font-bold text-fera-deep tracking-tight">{image.metrics.results}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[9px] font-bold text-fera-gray/40 uppercase tracking-[0.2em] mb-2">Clinical Window</p>
                            <p className="text-xs font-bold text-fera-deep tracking-tight">{image.metrics.period}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="facility"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-16"
              >
                {clinicPhotos.map((photo) => (
                  <div key={photo.id} className="group relative rounded-[4.5rem] border border-fera-border/10 bg-white p-6 shadow-luxury-lg hover:shadow-luxury-xl transition-all duration-700">
                      <div className="aspect-[16/9] w-full overflow-hidden rounded-[3.5rem] relative">
                        <img
                          src={photo.image}
                          alt={photo.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                      <div className="absolute inset-0 bg-fera-deep/10 group-hover:bg-transparent transition-colors duration-700" />
                    </div>
                    
                    <div className="p-14 text-left">
                      <h3 className="text-3xl font-bold text-fera-deep tracking-tight mb-8">{photo.title}</h3>
                      <p className="clinical-description text-[15px]">{photo.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <BrandDivider />

      {/* 4. INSTITUTIONAL EVIDENCE - BALANCED CTA SECTION */}
      <section className="py-24 lg:py-48 px-6 bg-white relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center gap-12 mb-16 grayscale opacity-[0.15]">
             <div className="text-[10px] font-bold uppercase tracking-[0.4em]">Restorative Compliance</div>
             <div className="text-[10px] font-bold uppercase tracking-[0.4em]">Biological Safety</div>
             <div className="text-[10px] font-bold uppercase tracking-[0.4em]">Clinical Warranty</div>
          </div>
          <h2 className="text-5xl lg:text-[80px] font-bold text-fera-deep mb-12 tracking-tighter leading-[0.85]">
             Ready for a <br/>
             <span className="text-fera-primary/30 italic font-light">New Smile?</span>
          </h2>
          <p className="text-xl text-fera-gray/60 font-light mb-16 max-w-xl mx-auto leading-relaxed clinical-description">
             Our clinical results are founded on surgical precision and evidence-based materials. Connect with us for your personalized evaluation.
          </p>
          <Link to="/consultation">
             <Button size="xl" variant="premium" className="h-22 px-20 text-xl shadow-luxury-xl bg-fera-deep text-white hover:bg-fera-gold hover:text-white border-0 transition-all duration-500">
                Get Free Consultation
                <ArrowRight className="ml-4 h-6 w-6" />
              </Button>
          </Link>
        </div>
      </section>

      {/* 5. FOOTER TRANSITION */}
      <section className="relative py-32 lg:py-64 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-fera-deep/95">
          <img 
            src="/images/fera-clinic/clinic/reception.webp" 
            alt="Clinic hospitality"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
         <div className="max-w-4xl mx-auto z-10 relative">
          <h2 className="text-5xl lg:text-[120px] font-bold text-white mb-16 tracking-tighter leading-[0.8]">
            Design Your <br/>
            <span className="text-white/20 italic font-light">Next Chapter.</span>
          </h2>
          <Link to="/treatments">
            <Button size="xl" variant="outline" className="h-22 px-16 text-xl border-white/20 text-white hover:bg-white hover:text-fera-deep backdrop-blur-md transition-all duration-500">
              Explore Surgical Protocols
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
