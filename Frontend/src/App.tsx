import { lazy, Suspense, useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import { ChatAssistant } from './components/ChatAssistant'
import { LanguageLayout } from './components/LanguageLayout'
import { ScrollToTop } from './components/ui/ScrollToTop'
import { TopBar } from './components/TopBar'

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
const MedicalTourism = lazy(() => import('./pages/MedicalTourism').then(m => ({ default: m.MedicalTourism })))
const DentalTourism = MedicalTourism; // Temporary alias to ensure no breaks
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })))
const BlogPost = lazy(() => import('./pages/BlogPost').then(m => ({ default: m.BlogPostPage })))
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })))
const Reviews = lazy(() => import('./pages/Reviews').then(m => ({ default: m.Reviews })))
const Legal = lazy(() => import('./pages/Legal').then(m => ({ default: m.Legal })))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })))
const TermsOfService = lazy(() => import('./pages/TermsOfService').then(m => ({ default: m.TermsOfService })))
const DeliveryRefundPolicy = lazy(() => import('./pages/DeliveryRefundPolicy').then(m => ({ default: m.DeliveryRefundPolicy })))
const DistanceSalesAgreement = lazy(() => import('./pages/DistanceSalesAgreement').then(m => ({ default: m.DistanceSalesAgreement })))
const PrivacyProtocols = lazy(() => import('./pages/PrivacyProtocols').then(m => ({ default: m.PrivacyProtocols })))
const JoinUs = lazy(() => import('./pages/JoinUs').then(m => ({ default: m.JoinUs })))
const Corporate = lazy(() => import('./pages/Corporate').then(m => ({ default: m.Corporate })))
const Partnership = lazy(() => import('./pages/Partnership').then(m => ({ default: m.Partnership })))


import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Fixed timeout loading screen (800ms)
    const timer = setTimeout(() => {
      setIsInitialLoad(false)
      document.body.classList.add('page-ready')
    }, 800)
    return () => {
      clearTimeout(timer)
      document.body.classList.remove('page-ready')
    }
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <PremiumLoader isVisible={isInitialLoad} />
      <TopBar />
      <Navbar />
      <main className="overflow-x-hidden">
        <Suspense fallback={<InlineLoader />}>
          <ScrollToTopOnRouteChange />
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigate to="/en" replace />} />
                
                <Route path="/:lang" element={<LanguageLayout />}>
                  <Route index element={<Home />} />
                  <Route path="services" element={<Services />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="medical-google-reviews" element={<Reviews />} />
                  <Route path="testimonials" element={<Navigate to="../medical-google-reviews" replace />} />
                  <Route path="reviews" element={<Navigate to="../medical-google-reviews" replace />} />
                  <Route path="gallery" element={<Gallery />} />
                  <Route path="consultation" element={<Consultation />} />
                  <Route path="dental-tourism" element={<DentalTourism />} />
                  <Route path="blog" element={<Blog />} />
                  <Route path="blog/:slug" element={<BlogPost />} />
                  <Route path="treatments" element={<Treatments />} />
                  <Route path="treatments/:slug" element={<TreatmentDetail />} />
                  <Route path="privacy" element={<PrivacyPolicy />} />
                  <Route path="terms" element={<TermsOfService />} />
                  <Route path="delivery-refund-policy" element={<DeliveryRefundPolicy />} />
                  <Route path="distance-sales-agreement" element={<DistanceSalesAgreement />} />
                  <Route path="privacy-protocols" element={<PrivacyProtocols />} />
                  <Route path="join-us" element={<JoinUs />} />
                  <Route path="corporate" element={<Corporate />} />
                  <Route path="partnership" element={<Partnership />} />
                  <Route path="faq" element={<Navigate to="../consultation" replace />} />
                  <Route path="before-after" element={<Navigate to="/gallery#before-after" replace />} />
                </Route>

                {/* Catch-all redirect for any invalid base route without a language */}
                <Route path="*" element={<Navigate to="/en" replace />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
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
