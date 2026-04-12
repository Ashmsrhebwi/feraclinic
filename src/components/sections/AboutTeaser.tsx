import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users, Award, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '../ui/button'

export const AboutTeaser = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.16 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const features = [
    {
      icon: Users,
      title: 'Internationally Trained Dentists',
      desc: 'Our team combines advanced clinical expertise with aesthetic precision to deliver refined, natural-looking smile transformations.'
    },
    {
      icon: Award,
      title: 'Advanced Digital Dentistry',
      desc: 'We use modern imaging, digital smile planning, and high-quality materials to achieve comfort, accuracy, and long-lasting results.'
    },
    {
      icon: Clock,
      title: 'Personalized Patient Experience',
      desc: 'From consultation to aftercare, every step is carefully designed around your comfort, expectations, and treatment goals.'
    }
  ]

  return (
    <section className="relative overflow-hidden bg-fera-ivory py-24 px-6 lg:px-8">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top right, rgba(212,175,55,0.08), transparent 28%)' }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fera-gold/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-10"
          >
            <div className="space-y-5">
              <motion.span
                variants={itemVariants}
                className="block text-xs font-semibold uppercase tracking-[0.35em] text-fera-gold"
              >
                About FeRa Clinic
              </motion.span>

              <motion.h2
                variants={itemVariants}
                className="max-w-2xl text-4xl font-semibold leading-tight text-fera-navy md:text-5xl"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Redefining <span className="italic text-fera-gold">Dental Excellence</span> in Istanbul
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="h-[2px] w-20 rounded-full bg-fera-gold"
              />

              <motion.p
                variants={itemVariants}
                className="max-w-xl text-base leading-8 text-slate-600"
              >
                At FeRa Clinic, we combine modern dentistry, aesthetic sensitivity,
                and patient-centered care to create a treatment journey that feels
                as reassuring as it is effective.
              </motion.p>
            </div>

            <div className="space-y-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-fera-gold/10">
                    <feature.icon className="h-5 w-5 text-fera-gold" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-fera-navy">
                      {feature.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-7 text-slate-600">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="pt-2">
              <Button
                asChild
                className="rounded-full bg-fera-navy px-8 py-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-fera-gold hover:text-fera-navy"
              >
                <Link to="/about" className="inline-flex items-center gap-2">
                  Discover Our Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 hidden h-32 w-32 rounded-full bg-fera-gold/10 blur-2xl md:block" />
            <div className="absolute -bottom-8 -right-4 hidden h-40 w-40 rounded-full bg-fera-navy/5 blur-3xl md:block" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
                alt="FeRa Clinic dental treatment room"
                className="h-[520px] w-full rounded-[1.5rem] object-cover"
              />

              <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.12)] backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-green-100 p-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-fera-gold">
                      Trusted Care
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      A refined patient experience built on quality treatment,
                      clear communication, and attention to every detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}