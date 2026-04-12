import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, Mail, Clock, MapPin, CheckCircle2, Upload, Shield, ArrowRight, ShieldCheck, Stethoscope, Globe, Lock } from 'lucide-react'
import { Button } from '../components/ui/button'
import { BrandDivider } from '../components/ui/BrandDivider'

interface ConsultationForm {
  fullName: string
  email: string
  phone: string
  countryCode: string
  treatment: string
  message: string
  images: FileList | null
}

interface CRMLead {
  name: string
  email: string
  phone: string
  country: string
  treatment: string
  message: string
  source: 'consultation_form'
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
}

export function Consultation() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm<ConsultationForm>()

  const onSubmit = async (data: ConsultationForm) => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const crmLead: CRMLead = {
        name: data.fullName,
        email: data.email,
        phone: `${data.countryCode}${data.phone}`,
        country: data.countryCode,
        treatment: data.treatment,
        message: data.message,
        source: 'consultation_form'
      }

      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSubmitted(true)
    } catch (error) {
      setSubmitError('Clinical services are currently transitioning. Please use WhatsApp for urgent intake.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const treatments = [
    'Dental Implants',
    'Porcelain Veneers',
    'All-on-4 Restoration',
    'Sinus Lifting',
    'Zirconium Crowns',
    'Digital Smile Design'
  ]

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-xl text-center"
        >
          <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-fera-navy text-fera-gold">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <h2 className="mb-6 text-5xl font-semibold text-fera-navy tracking-tighter">
            Intake <br />
            <span className="gold-highlight">Received.</span>
          </h2>

          <p className="mb-12 text-lg text-slate-500 font-light leading-relaxed">
            Your medical intake has been submitted to our clinical coordinators. 
            A specialized treatment coordinator will review your request and contact you within 24 hours.
          </p>

          <Link to="/">
            <Button variant="outline" className="px-12 h-16 border-fera-border hover:bg-fera-navy hover:text-white transition-all">
              Return to Clinic
            </Button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 1. INSTITUTIONAL HERO */}
      <section className="bg-white px-6 pt-48 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto border-b border-fera-border pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[1px] bg-fera-gold" />
              <span className="text-[10px] font-bold text-fera-gold uppercase tracking-[0.4em]">Medical Intake</span>
            </div>
            <h1 className="text-6xl lg:text-[100px] font-semibold text-fera-navy mb-8 tracking-tighter leading-[0.9]">
              Start Your <br />
              <span className="gold-highlight">Smile Protocol.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-500 max-w-2xl font-light leading-relaxed">
              Begin your professional dental journey in Istanbul. Submit your details for a 
              standardized clinical assessment by our specialist doctors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Form Flow */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            
            {/* Trust & Security Sidebar */}
            <div className="lg:col-span-4 space-y-16">
              <div className="sticky top-32">
                <div className="mb-16">
                   <h3 className="text-3xl font-semibold text-fera-navy mb-6 tracking-tight">Clinical Trust</h3>
                   <p className="text-slate-500 font-light leading-relaxed text-sm">
                     At FeRa Clinic, we prioritize medical standard security and patient confidentiality. 
                     Every submission is directly reviewed by our department heads in Nişantaşı.
                   </p>
                </div>

                <div className="space-y-12">
                  {[
                    { icon: Lock, title: 'Encrypted Data', desc: 'Secure medical-grade SSL protocols for patient data.' },
                    { icon: ShieldCheck, title: 'Professional Secrecy', desc: 'Compliant with medical confidentiality standards.' },
                    { icon: Globe, title: 'Global Coordination', desc: 'Specialized support for international patients.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-12 h-12 rounded-xl border border-fera-border flex items-center justify-center text-fera-navy flex-shrink-0">
                        <item.icon className="w-5 h-5 text-fera-gold" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-fera-navy uppercase tracking-widest leading-tight mb-1">{item.title}</h4>
                        <p className="text-xs text-slate-400 font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-20 pt-16 border-t border-fera-border">
                  <div className="flex items-center gap-4 text-fera-navy">
                    <div className="w-12 h-12 rounded-full border border-fera-border flex items-center justify-center">
                      <Phone className="w-4 h-4 text-fera-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Direct Priority Intake</p>
                      <p className="font-semibold">+90 212 123 4567</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-16">
                
                {/* Section 1: Personal */}
                <div className="space-y-12">
                  <div className="flex items-center justify-between border-b border-fera-border pb-6">
                    <h4 className="text-2xl font-semibold text-fera-navy tracking-tight">Application Details</h4>
                    <span className="text-[9px] font-bold text-fera-gold uppercase tracking-widest">Section 01</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-fera-navy uppercase tracking-[0.2em]">Full Name</label>
                      <input
                        {...register('fullName', { required: true })}
                        className="input-premium focus:border-fera-gold text-fera-navy placeholder:text-slate-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-fera-navy uppercase tracking-[0.2em]">Email Address</label>
                      <input
                        {...register('email', { required: true })}
                        className="input-premium focus:border-fera-gold text-fera-navy placeholder:text-slate-200"
                        placeholder="j.doe@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-fera-navy uppercase tracking-[0.2em]">Country Code</label>
                      <select {...register('countryCode')} className="input-premium appearance-none">
                        <option value="+44">United Kingdom (+44)</option>
                        <option value="+1">United States (+1)</option>
                        <option value="+49">Germany (+49)</option>
                        <option value="+90">Turkey (+90)</option>
                        <option value="+33">France (+33)</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-fera-navy uppercase tracking-[0.2em]">Phone Number</label>
                      <input
                        {...register('phone')}
                        className="input-premium focus:border-fera-gold text-fera-navy placeholder:text-slate-200"
                        placeholder="1234567890"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Clinical */}
                <div className="space-y-12 pt-10">
                  <div className="flex items-center justify-between border-b border-fera-border pb-6">
                    <h4 className="text-2xl font-semibold text-fera-navy tracking-tight">Clinical Assessment</h4>
                    <span className="text-[9px] font-bold text-fera-gold uppercase tracking-widest">Section 02</span>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-fera-navy uppercase tracking-[0.2em]">Primary Treatment of Interest</label>
                    <select {...register('treatment')} className="input-premium appearance-none">
                      <option value="">Select Treatment Discipline</option>
                      {treatments.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-fera-navy uppercase tracking-[0.2em]">Additional Medical History (Optional)</label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="input-premium resize-none h-40 placeholder:text-slate-200"
                      placeholder="Briefly describe your dental needs or current concerns..."
                    />
                  </div>
                </div>

                {/* Submission */}
                <div className="pt-20">
                  <Button
                    type="submit"
                    variant="premium"
                    disabled={isSubmitting}
                    className="w-full h-20 text-xl shadow-luxury hover:scale-[1.02] transition-all duration-500"
                  >
                    {isSubmitting ? 'Processing Clinical Data...' : 'Get Free Consultation'}
                    {!isSubmitting && <ArrowRight className="ml-4 h-6 w-6" />}
                  </Button>
                  <div className="mt-10 text-center">
                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                      Your estimate will be sent to the provided email within 24 hours.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}