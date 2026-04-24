import { lazy, Suspense, useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import { ChatAssistant } from './components/ChatAssistant'
import { LanguageLayout } from './components/LanguageLayout'
import { ScrollToTop } from './components/ui/ScrollToTop'

import './i18n'
import './index.css'

import { ScrollToTopOnRouteChange } from './components/ui/ScrollToTopOnRouteChange'
import { PremiumLoader, InlineLoader } from './components/ui/PremiumLoader'

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
const BlogPost = lazy(() => import('./pages/BlogPost').then(m => ({ default: m.BlogPostPage })))
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })))
const Testimonials = lazy(() => import('./pages/Testimonials').then(m => ({ default: m.Testimonials })))
const Legal = lazy(() => import('./pages/Legal').then(m => ({ default: m.Legal })))

function App() {
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    // Minimum cinematic display time of 1.6s
    const timer = setTimeout(() => {
      setIsInitialLoad(false)
    }, 1600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <PremiumLoader isVisible={isInitialLoad} />
      <Navbar />
      <main>
        <Suspense fallback={<InlineLoader />}>
          <ScrollToTopOnRouteChange />
          <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />
            
            <Route path="/:lang" element={<LanguageLayout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="testimonials" element={<Testimonials />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="consultation" element={<Consultation />} />
              <Route path="dental-tourism" element={<DentalTourism />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:slug" element={<BlogPost />} />
              <Route path="treatments" element={<Treatments />} />
              <Route path="treatments/:slug" element={<TreatmentDetail />} />
              <Route path="privacy" element={<Legal />} />
              <Route path="terms" element={<Legal />} />
              <Route path="faq" element={<Navigate to="../consultation" replace />} />
              <Route path="before-after" element={<Navigate to="/gallery#before-after" replace />} />
            </Route>

            {/* Catch-all redirect for any invalid base route without a language */}
            <Route path="*" element={<Navigate to="/en" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatAssistant />
      <ScrollToTop />
    </div>
  )
}

export default App
