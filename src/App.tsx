import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

import './i18n'
import './index.css'

// Lazy load pages for performance optimization
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })))
const Treatments = lazy(() => import('./pages/Treatments').then(m => ({ default: m.Treatments })))
const TreatmentDetail = lazy(() => import('./pages/TreatmentDetail').then(m => ({ default: m.TreatmentDetail })))
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })))
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })))
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })))
const Consultation = lazy(() => import('./pages/Consultation').then(m => ({ default: m.Consultation })))
const DentalTourism = lazy(() => import('./pages/DentalTourism').then(m => ({ default: m.DentalTourism })))
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })))
const BlogPost = lazy(() => import('./pages/BlogPost').then(m => ({ default: m.BlogPost })))
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })))
const Testimonials = lazy(() => import('./pages/Testimonials').then(m => ({ default: m.Testimonials })))

function App() {
  return (
    <div className="min-h-screen bg-fera-ivory">
      <Navbar />
      <main>
        <Suspense fallback={<div className="h-screen flex items-center justify-center bg-white"><div className="w-10 h-[1px] bg-fera-gold animate-pulse" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/dental-tourism" element={<DentalTourism />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/treatments/:slug" element={<TreatmentDetail />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
