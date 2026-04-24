import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Plane,
  Hotel,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Star,
  Zap,
  Coffee,
  Heart,
  Globe,
  Stethoscope,
  Award,
  Users
} from 'lucide-react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { Button } from '../components/ui/button'
import { TiltCard } from '../components/ui/TiltCard'
import { BrandDivider } from '../components/ui/BrandDivider'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'

export function DentalTourism() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'
  useSEO({ title: t('navigation.dentalTourism'), description: t('tourism.subtitle', 'Premium medical coordination for international patients.') })

  const steps = [
    {
      id: 1,
      title: t('tourism.steps.contact.title', 'Contact Us'),
      desc: t('tourism.steps.contact.desc', 'Connect with our team via WhatsApp or online form for an initial consultation.'),
      icon: Zap
    },
    {
      id: 2,
      title: t('tourism.steps.estimate.title', 'Get Cost Estimate'),
      desc: t('tourism.steps.estimate.desc', 'Send us your dental photos or X-rays to receive a personalized price quote.'),
      icon: ShieldCheck
    },
    {
      id: 3,
      title: t('tourism.steps.plan.title', 'Trip Planning'),
      desc: t('tourism.steps.plan.desc', 'We organize your airport transfers and 5-star hotel stay in Istanbul.'),
      icon: Hotel
    },
    {
      id: 4,
      title: t('tourism.steps.treatment.title', 'Dental Treatment'),
      desc: t('tourism.steps.treatment.desc', 'Visit our modern clinic for your treatment and enjoy your new smile.'),
      icon: Stethoscope
    }
  ]

  const packages = [
    {
      title: t('tourism.packages.basic.title', 'Basic Package'),
      level: t('tourism.packages.tier1', 'Tier 01'),
      features: [
        t('tourism.packages.basic.f1', 'Digital Smile Mapping'),
        t('tourism.packages.basic.f2', 'VIP Airport Transfers'),
        t('tourism.packages.basic.f3', 'Translation Services'),
        t('tourism.packages.basic.f4', 'Post-Treatment Support')
      ]
    },
    {
      title: t('tourism.packages.standard.title', 'Standard Package'),
      level: t('tourism.packages.tier2', 'Tier 02'),
      highlight: true,
      features: [
        t('tourism.packages.standard.f1', 'Full Smile Design'),
        t('tourism.packages.standard.f2', '5-Star Hotel Stay'),
        t('tourism.packages.standard.f3', 'VIP Transfer Service'),
        t('tourism.packages.standard.f4', '24/7 Patient Support'),
        t('tourism.packages.standard.f5', 'Istanbul City Tour')
      ]
    },
    {
      title: t('tourism.packages.luxury.title', 'Luxury Package'),
      level: t('tourism.packages.tier3', 'Tier 03'),
      features: [
        t('tourism.packages.luxury.f1', 'Full Reconstruction'),
        t('tourism.packages.luxury.f2', 'Luxury Suite Stay'),
        t('tourism.packages.luxury.f3', 'Private Patient Manager'),
        t('tourism.packages.luxury.f4', 'Extended Warranty'),
        t('tourism.packages.luxury.f5', 'All-Inclusive Support')
      ]
    }
  ]

  console.log("PAGE LOADED: DentalTourism")

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO - UNIFIED SYSTEM */}
      <section className="relative min-h-[780px] md:min-h-[820px] lg:min-h-[92vh] flex items-start overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fera-clinic/clinic/waiting-area.webp"
            alt={t('alt.dentalTourism', 'Istanbul Dental Tourism')}
            className="w-full h-full object-cover object-[center_35%] scale-[1.03]"
            style={{ animation: 'heroZoom 45s linear infinite alternate' }}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-white/90 via-white/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 lg:px-10 2xl:px-16 pt-24 sm:pt-28 md:pt-32 lg:pt-24 flex justify-start">
          <div className="w-full max-w-[94vw] sm:max-w-[680px] lg:max-w-[860px] 2xl:max-w-[1080px] bg-white/55 backdrop-blur-md rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            {/* Trust Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 mb-5 sm:mb-6"
            >
              <div className="w-8 sm:w-10 h-[1px] bg-fera-accent" />
              <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-fera-accent uppercase tracking-[0.25em]">{t('tourism.heroEyebrow', 'Global Patient Care')}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.2rem,8vw,3.6rem)] lg:text-[clamp(3.6rem,5vw,4.6rem)] font-semibold text-fera-deep tracking-tight leading-[0.98] mb-6"
            >
              {t('tourism.heroTitle', 'Your Smile, Our Journey')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[15px] sm:text-base lg:text-lg text-fera-deep/90 max-w-[58ch] font-normal leading-[1.75] mb-8"
            >
              {t('tourism.heroDesc', 'Seamless dental tourism in the heart of Istanbul. We manage your accommodation, transfers, and world-class clinical care.')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 lg:gap-6 mb-8"
            >
              <Link to="/consultation" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  variant="primary"
                  className="w-full sm:min-w-[260px] h-12 sm:h-14 px-12 group active-press"
                >
                  <span className="uppercase tracking-widest text-sm font-bold">{t('tourism.ctaPrimary', 'Free Consultation')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300" />
                </Button>
              </Link>

              <Link to="/gallery" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  variant="outline"
                  className="w-full sm:min-w-[260px] h-12 sm:h-14 px-12 group active-press"
                >
                  <span className="uppercase tracking-widest text-sm font-bold">{t('tourism.ctaSecondary', 'View Gallery')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>

            {/* Trust Line */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-x-10 gap-y-4 text-fera-deep text-[10px] font-bold uppercase tracking-[0.25em]"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-3.5 h-3.5 text-fera-primary" />
                <span>{t('common.trustBadges.iso', 'ISO Certified')}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-fera-deep/10 hidden sm:block" />
              <div className="flex items-center gap-3">
                <Award className="w-3.5 h-3.5 text-fera-primary" />
                <span>{t('common.trustBadges.specialists', '15+ Specialist Dentists')}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-fera-deep/10 hidden sm:block" />
              <div className="flex items-center gap-3">
                <Users className="w-3.5 h-3.5 text-fera-primary" />
                <span>{t('common.trustBadges.patients', 'Thousands of Happy Patients')}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BrandDivider />

      {/* 2. CONCIERGE EXPERIENCE - CLEAR STEPS & SELECTIVE SPACING */}
      <section className="py-20 lg:py-32 px-6 bg-white overflow-hidden soft-blue-glow">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-32 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-[48px] font-semibold text-fera-deep mb-8 tracking-tight leading-[1.1]">
              {t('tourism.coordTitle1', 'Systematic')} {t('tourism.coordTitle2', 'Coordination.')}
            </h2>
            <p className="section-body max-w-2xl mx-auto">
              {t('tourism.coordDesc', 'From initial digital triage to post-operative recovery, our concierge team handles every surgical and logistical detail.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="w-20 h-20 rounded-3xl bg-fera-surface border border-fera-border/30 flex items-center justify-center text-fera-primary mb-10 shadow-luxury-sm group-hover:bg-fera-deep group-hover:text-white transition-all duration-700">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xs font-bold text-fera-deep uppercase tracking-[0.3em] mb-6 group-hover:text-fera-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-fera-gray/60 text-[13px] font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 text-center">
            <Link to="/consultation">
              <Button
                variant="secondary"
                size="xl"
                className="px-12 group active-press"
              >
                <span className="uppercase tracking-[0.2em] text-xs font-bold">{t('tourism.beginTriage', 'Begin Initial Triage')}</span>
                <ArrowRight className="ms-4 w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-500" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <BrandDivider />

      {/* 3. COST TRANSPARENCY - CLEAR TABLE */}
      <section className="py-20 lg:py-32 px-6 bg-fera-surface/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-16 h-1 bg-fera-primary/30 mb-12 rounded-full" />
              <h2 className="text-4xl lg:text-[48px] font-semibold text-fera-deep mb-8 tracking-tight leading-[1.1]">
                {t('tourism.costTitle1', 'Quality Care')} {t('tourism.costTitle2', 'Affordable Prices.')}
              </h2>
              <p className="section-body mb-16">
                {t('tourism.costDesc', 'Istanbul offers high-precision clinical care with operational efficiency. We utilize the same premium materials and technology as leading EU clinics at localized rates.')}
              </p>
              <div className="bg-white rounded-luxury-lg shadow-luxury-xl p-12 border border-fera-border/30 overflow-hidden relative">
                <div className="absolute top-0 end-0 bg-fera-primary text-[10px] font-bold text-white px-10 py-3 tracking-[0.25em] uppercase">{t('tourism.compEconomics', 'Comparative Economics')}</div>
                <table className="w-full text-start">
                  <thead>
                    <tr className="border-b border-fera-border/30">
                      <th className="pb-8 text-[11px] font-bold text-fera-gray/40 uppercase tracking-[0.2em]">{t('tourism.table.protocol', 'Surgical Protocol')}</th>
                      <th className="pb-8 text-[11px] font-bold text-fera-gray/40 uppercase tracking-[0.2em] text-center">{t('tourism.table.ukCost', 'Avg. UK Cost')}</th>
                      <th className="pb-8 text-[11px] font-bold text-fera-primary uppercase tracking-[0.2em] text-end">{t('tourism.table.feraEstimate', 'FeRa Estimate')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-fera-border/10">
                    {[
                      { service: t('treatments.implants', 'Dental Implant'), uk: t('tourism.table.implantUK', '£2,500'), fera: t('tourism.table.implantFera', '£650') },
                      { service: t('treatments.veneers', 'Veneer (Per Unit)'), uk: t('tourism.table.veneerUK', '£800'), fera: t('tourism.table.veneerFera', '£250') },
                      { service: t('treatments.smileMakeover', 'Full Smile Makeover'), uk: t('tourism.table.smileUK', '£15,000'), fera: t('tourism.table.smileFera', '£5,500') }
                    ].map((row, i) => (
                      <tr key={i} className="group hover:bg-fera-surface/50 transition-colors duration-500 cursor-default">
                        <td className="py-8 font-bold text-fera-deep tracking-tight group-hover:text-fera-primary transition-colors duration-300">{row.service}</td>
                        <td className="py-8 text-fera-gray/40 font-light text-center line-through">{row.uk}</td>
                        <td className="py-8 text-fera-primary font-bold text-end text-lg">{row.fera}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 bg-fera-surface rounded-luxury-lg border border-fera-border/30"
            >
              <img
                src="/images/fera-clinic/reception.webp"
                alt={t('alt.medicalDistrict', 'Nişantaşı, Istanbul Medical District')}
                className="w-full h-[750px] object-cover rounded-luxury-md shadow-luxury-xl grayscale-[0.05] transition-all duration-1000"
              />
              <div className="absolute top-16 end-16 bg-white/95 backdrop-blur-md p-10 rounded-2xl shadow-luxury-lg border border-fera-border/30 max-w-[240px] transition-transform hover:-translate-y-1 duration-300">
                <MapPin className="w-8 h-8 text-fera-primary mb-6" />
                <p className="text-[10px] font-bold text-fera-deep uppercase tracking-[0.2em] leading-relaxed">
                  {t('tourism.locationBadge', 'Strategically Located in Nişantaşı Medical Hub.')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BrandDivider />

      {/* 5. LUXURY PACKAGES - TILT PASS */}
      <section className="py-20 lg:py-32 px-6 bg-white overflow-hidden text-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-32 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-[48px] font-semibold text-fera-deep mb-8 tracking-tight leading-[1.1]">
              {t('tourism.packagesTitle1', 'The Concierge')} {t('tourism.packagesTitle2', 'Experience.')}
            </h2>
            <p className="section-body max-w-2xl mx-auto">
              {t('tourism.packagesDesc', 'Select your transition tier. We handle the complexity so your surgical visit feels like the luxury escape it truly is.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-start">
            {packages.map((pkg, i) => (
              <TiltCard key={i}>
                <div className={`card-premium-hover h-full group relative bg-white rounded-luxury-lg p-14 shadow-luxury-lg transition-all duration-700 border border-fera-border/30 flex flex-col ${pkg.highlight ? 'ring-2 ring-fera-primary/10' : ''}`}>
                  {pkg.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-fera-primary text-white text-[10px] font-bold px-10 py-3 rounded-full tracking-[0.25em] uppercase shadow-lg shadow-fera-primary/20">{t('tourism.packages.popular', 'Institutional Choice')}</div>
                  )}
                  <span className="text-[10px] font-bold text-fera-primary uppercase tracking-[0.4em] mb-8 block">{pkg.level}</span>
                  <h3 className="text-4xl font-bold text-fera-deep mb-12 tracking-tight group-hover:text-fera-primary transition-colors duration-300">{pkg.title}</h3>
                  <div className="space-y-6 flex-grow">
                    {pkg.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-5 group/item">
                        <div className="w-6 h-6 rounded-full bg-fera-surface flex items-center justify-center border border-fera-border/10 group-hover/item:bg-fera-deep group-hover/item:text-white transition-colors duration-500">
                          <CheckCircle2 className="w-3 h-3 text-fera-primary group-hover/item:text-white transition-colors" />
                        </div>
                        <span className="text-[14px] text-fera-gray font-light group-hover/item:text-fera-deep transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 pt-10 border-t border-fera-border/10">
                    <Link to="/consultation">
                      <Button
                        variant={pkg.highlight ? 'primary' : 'outline'}
                        className="w-full active-press group"
                      >
                        <span className="uppercase tracking-[0.2em] text-[11px] font-bold">{t('tourism.selectPathway', 'Select Pathway')}</span>
                        <ArrowRight className="ms-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <BrandDivider />

      {/* 6. FINAL CLEAR CTA */}
      <section className="relative py-20 lg:py-32 px-6 text-center overflow-hidden border-t border-gray-100">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="/images/fera-clinic/clinic/surgery-room.webp" className="w-full h-full object-cover opacity-[0.07] scale-110" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl lg:text-[56px] font-semibold text-fera-deep mb-10 tracking-tight leading-[1.1]">
              {t('common.readyFor1', 'Ready for a')} {t('common.readyFor2', 'New Smile?')}
            </h2>
            <p className="section-body max-w-2xl mx-auto mb-16">
              {t('tourism.ctaDesc', 'Join thousands of international patients who have chosen FeRa Clinic for high-quality dental care in Istanbul.')}
            </p>
            <Link to="/consultation">
              <Button size="xl" variant="primary" className="px-20 active-press group">
                <span className="uppercase tracking-[0.2em] text-lg font-bold">{t('common.freeConsultation')}</span>
                <ArrowRight className="ms-4 h-8 w-8 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-500" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
