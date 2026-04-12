import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/button'

export function Contact() {
  const ref = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    treatment: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+90 555 123 45 67'],
      description: 'Available for international patient inquiries'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@feraclinic.com'],
      description: 'Response typically within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Nişantaşı, Istanbul, Türkiye'],
      description: 'Central location in prestigious district'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon–Fri: 9:00 AM – 8:00 PM', 'Sat: 10:00 AM – 6:00 PM'],
      description: 'Flexible scheduling for international patients'
    }
  ]

  const treatments = [
    'Dental Implants',
    'Porcelain Veneers',
    'Orthodontics',
    'Full Mouth Reconstruction',
    'Teeth Whitening',
    'Smile Makeover',
    'Other'
  ]

  return (
    <div className="min-h-screen bg-fera-ivory">
      {/* HERO SECTION */}
      <section className="bg-fera-navy px-6 pb-24 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-5xl font-semibold text-white lg:text-6xl"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mx-auto max-w-3xl text-lg leading-8 text-white/85"
          >
            Have questions about our treatments or ready to begin your smile journey? 
            Our team is here to provide the information and support you need.
          </motion.p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-fera-gold/10">
                <info.icon className="h-6 w-6 text-fera-gold" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-fera-navy">{info.title}</h3>
              <div className="mb-3 space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="font-medium text-gray-700">{detail}</p>
                ))}
              </div>
              <p className="text-sm leading-7 text-gray-600">{info.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONSULTATION FORM */}
      <section ref={ref} className="bg-fera-ivory px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2
              className="mb-6 text-4xl font-semibold text-fera-navy"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Request Your Consultation
            </h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center"
              >
                <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green-600" />
                <h3 className="mb-2 text-xl font-semibold text-green-800">Request Received</h3>
                <p className="leading-7 text-green-700">
                  Thank you for contacting FeRa Clinic. Our team will review your information 
                  and get in touch with you shortly to discuss your treatment options.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-fera-navy">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-fera-navy outline-none transition-all focus:border-fera-gold/50 focus:ring-2 focus:ring-fera-gold/20"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-fera-navy">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-fera-navy outline-none transition-all focus:border-fera-gold/50 focus:ring-2 focus:ring-fera-gold/20"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-fera-navy">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-fera-navy outline-none transition-all focus:border-fera-gold/50 focus:ring-2 focus:ring-fera-gold/20"
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-fera-navy">Treatment Interest</label>
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-fera-navy outline-none transition-all focus:border-fera-gold/50 focus:ring-2 focus:ring-fera-gold/20"
                    >
                      <option value="">Select treatment type</option>
                      {treatments.map((treatment) => (
                        <option key={treatment} value={treatment}>{treatment}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-fera-navy">Tell us about your dental concerns</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-fera-navy outline-none transition-all focus:border-fera-gold/50 focus:ring-2 focus:ring-fera-gold/20"
                    placeholder="Please describe your concerns and what you would like to improve..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth>
                  <Send className="mr-2 h-5 w-5" />
                  Send Consultation Request
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div className="space-y-8">
              {/* Map */}
              <div className="mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.8423456789!2d29.1234567890123!3d41.12345678901234!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA3JzIyLjIiNiBZ2zNDHCsDA3JzIyLjIiNiBZ!5e0!3m2!1str!2str!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="FeRa Clinic Location Map"
                  className="rounded-2xl"
                />
              </div>

              {/* International Support */}
              <div className="rounded-2xl bg-fera-navy p-8 text-white">
                <h3
                  className="mb-5 text-2xl font-semibold"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  International Patient Support
                </h3>

                <div className="space-y-4">
                  {[
                    ['Airport Transfer', 'Seamless arrival coordination and clinic transportation'],
                    ['Accommodation Assistance', 'Guidance for nearby stay options during treatment'],
                    ['Multilingual Staff', 'Communication support for international patients'],
                    ['Virtual Consultations', 'Initial guidance and treatment planning remotely']
                  ].map(([title, desc]) => (
                    <div key={title} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-fera-gold" />
                      <div>
                        <p className="font-medium">{title}</p>
                        <p className="text-sm leading-7 text-white/80">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/70 mb-4">
                    For immediate assistance or to schedule your consultation:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="tel:+905551234567" 
                      className="flex items-center gap-2 text-white hover:text-fera-gold transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="font-medium">Call Us</span>
                    </a>
                    <a 
                      href="https://wa.me/905XXXXXXXXX" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-fera-gold transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="font-medium">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}