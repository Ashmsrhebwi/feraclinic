import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, CheckCircle2 } from 'lucide-react'
import { Button } from '../ui/button'

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-fera-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=90&w=1920"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-fera-navy via-fera-navy/80 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-fera-accent mb-6 uppercase tracking-[0.2em] text-sm"
            >
              FeRa Clinic Istanbul
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-6xl text-white font-semibold leading-tight mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Professional Dental
              <span className="block text-fera-accent">Care</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white/80 text-lg mb-8 max-w-lg"
            >
              FeRa Clinic provides comprehensive dental services with modern technology and experienced specialists in the heart of Istanbul.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link to="/consultation">
                <Button size="lg" className="px-8">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <a
                href="https://wa.me/905551234567"
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-8 text-white/70 text-sm"
            >
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-fera-accent" />
                <span>+90 555 123 45 67</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-fera-accent" />
                <span>info@feraclinic.com</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}