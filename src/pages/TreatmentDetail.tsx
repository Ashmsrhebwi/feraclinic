import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { ArrowRight, Phone, CheckCircle2, Clock, MapPin } from 'lucide-react'

// Mock treatment data - in a real app, this would come from an API or data file
const treatmentData = {
  'dental-implants': {
    title: 'Dental Implants',
    description: 'Advanced implant solutions designed for durability, comfort, and a natural aesthetic result.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800',
    duration: '2-3 hours',
    price: 'From $800',
    features: ['Titanium implants', 'Same-day placement', 'Lifetime warranty', 'Natural appearance'],
    benefits: ['Restores chewing function', 'Prevents bone loss', 'Permanent solution', 'Looks completely natural'],
    candidates: ['Missing teeth', 'Bone loss prevention', 'Full mouth restoration', 'Single tooth replacement'],
    process: ['Consultation & planning', 'Implant placement', 'Healing period', 'Final restoration']
  },
  'hollywood-smile': {
    title: 'Hollywood Smile',
    description: 'Custom-designed veneers crafted to enhance your smile with precision and harmony.',
    image: 'https://images.unsplash.com/photo-1593054323124-b1bb3050090d?auto=format&fit=crop&q=80&w=800',
    duration: '2-3 visits',
    price: 'From $500 per tooth',
    features: ['Porcelain veneers', 'Custom shade matching', 'Minimal preparation', 'Stain resistant'],
    benefits: ['Instant transformation', 'Durable and long-lasting', 'Natural translucency', 'Boosts confidence'],
    candidates: ['Discolored teeth', 'Chipped or worn teeth', 'Gaps between teeth', 'Uneven smile'],
    process: ['Smile design', 'Preparation', 'Veneer fabrication', 'Final placement']
  },
  'orthodontics': {
    title: 'Orthodontics',
    description: 'Modern alignment solutions including clear aligners for discreet, effective results.',
    image: 'https://images.unsplash.com/photo-1513412855150-e63bd706ec93?auto=format&fit=crop&q=80&w=800',
    duration: '6-18 months',
    price: 'From $2,500',
    features: ['Clear aligners', 'Custom treatment plan', 'Removable design', 'Digital monitoring'],
    benefits: ['Invisible appearance', 'Comfortable fit', 'Convenient lifestyle', 'Predictable results'],
    candidates: ['Crooked teeth', 'Overbite/underbite', 'Gaps in smile', 'Crowded teeth'],
    process: ['Initial assessment', '3D scanning', 'Custom aligners', 'Progress monitoring']
  }
}

export function TreatmentDetail() {
  const { slug } = useParams<{ slug: string }>()
  const treatment = slug ? treatmentData[slug as keyof typeof treatmentData] : null

  if (!treatment) {
    return (
      <div className="min-h-screen bg-fera-ivory flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-fera-navy mb-4">Treatment Not Found</h1>
          <p className="text-gray-600 mb-6">The treatment you're looking for doesn't exist.</p>
          <Link to="/treatments">
            <Button>Back to Treatments</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-fera-ivory min-h-screen">
      
      {/* HERO */}
      <section className="bg-fera-navy px-6 pt-32 pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {treatment.title}
            </h1>

            <p className="text-white/85 mb-8 text-lg leading-relaxed">
              {treatment.description}
            </p>

            <div className="flex flex-wrap gap-6 mb-8 text-white">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-fera-gold" />
                {treatment.duration}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-fera-gold" />
                {treatment.price}
              </span>
            </div>

            {/* Is this treatment right for you? */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-8">
              <h3 className="text-white font-semibold mb-3">Is this treatment right for you?</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                {treatment.candidates.map((candidate, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-fera-gold" />
                    {candidate}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/consultation">
                <Button size="lg" variant="primary">
                  Get Treatment Plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-4 w-4" />
                  Quick Questions
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src={treatment.image}
              alt={treatment.title}
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-semibold mb-6 text-fera-navy" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Treatment Features</h2>
            <div className="space-y-3">
              {treatment.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-fera-gold" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6 text-fera-navy" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Benefits</h2>
            <div className="space-y-3">
              {treatment.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-fera-gold" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mid-section CTA */}
        <div className="mt-16 text-center">
          <div className="bg-fera-gold/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-fera-navy mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Ready to Transform Your Smile?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get a personalized treatment plan and cost estimate from our expert team. 
              We'll guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/consultation">
                <Button variant="primary" size="lg">
                  Get Treatment Plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 h-4 w-4" />
                  Ask Questions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 px-6 bg-fera-ivory">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-fera-navy" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Your Treatment Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {treatment.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-fera-gold rounded-full flex items-center justify-center text-white font-semibold mb-4 mx-auto">
                  {index + 1}
                </div>
                <p className="text-sm text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-fera-navy py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-white mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Transform Your Smile in Istanbul
          </h2>
          <p className="text-xl text-white/85 mb-8">
            Get your personalized treatment plan and cost estimate. 
            Our team guides international patients through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation">
              <Button variant="primary" size="lg">
                Get Treatment Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp Consultation
              </Button>
            </a>
          </div>
          <div className="mt-6 text-white/70 text-sm">
            Save up to 70% compared to Western prices while receiving premium care
          </div>
        </div>
      </section>

    </div>
  )
}