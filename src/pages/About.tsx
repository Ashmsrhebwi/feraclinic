import React from 'react'
import { motion } from 'framer-motion'
import {
  Award,
  Users,
  Building2,
  ShieldCheck,
  Microscope,
  Heart,
  ArrowRight,
  Stethoscope,
  ChevronRight,
  Globe
} from 'lucide-react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { Button } from '../components/ui/button'
import { TiltCard } from '../components/ui/TiltCard'
import { BrandDivider } from '../components/ui/BrandDivider'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'

const getTeam = (t: any) => [
  {
    name: 'Dr. Ahmet Yılmaz',
    role: t('about.team.0.role', 'Chief Medical Director'),
    specialty: t('about.team.0.specialty', 'Oral Surgery & Implantology'),
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=1000',
    desc: t('about.team.0.desc', 'Specializing in complex biological reconstructions with over 15 years of surgical excellence.')
  },
  {
    name: 'Dr. Sarah Müller',
    role: t('about.team.1.role', 'Senior Aesthetic Architect'),
    specialty: t('about.team.1.specialty', 'Digital Smile Design'),
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800&h=1000',
    desc: t('about.team.1.desc', 'Expert in the harmony of dental biology and facial aesthetics using CAD/CAM technologies.')
  },
  {
    name: 'Dr. Can Karaca',
    role: t('about.team.2.role', 'Lead Prosthodontist'),
    specialty: t('about.team.2.specialty', 'High-Precision Prosthetics'),
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800&h=1000',
    desc: t('about.team.2.desc', 'Dedicated to the perfect marriage of functional load-bearing and natural translucency.')
  }
]

export function About() {
  const { t } = useTranslation()
  useSEO({ title: t('navigation.about'), description: t('about.subtitle') })

  console.log("PAGE LOADED: About")

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO - UNIFIED SYSTEM */}
      <section className="relative min-h-[780px] md:min-h-[820px] lg:min-h-[92vh] flex items-start overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fera-clinic/clinic/reception.webp"
            alt={t('alt.clinicInstitutional', 'FeRa Clinic Institutional')}
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
              <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-fera-accent uppercase tracking-[0.25em]">{t('about.heroEyebrow', 'Institutional Legacy')}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.2rem,8vw,3.6rem)] lg:text-[clamp(3.6rem,5vw,4.6rem)] font-semibold text-fera-deep tracking-tight leading-[0.98] mb-6"
            >
              {t('about.heroTitle', 'Excellence as a Standard')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[15px] sm:text-base lg:text-lg text-fera-deep/90 max-w-[58ch] font-normal leading-[1.75] mb-8"
            >
              {t('about.heroDesc', 'Guided by a commitment to biological safety and clinical mastery, FeRa Clinic represents the pinnacle of Turkish dental expertise.')}
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
                  <span className="uppercase tracking-widest text-sm font-bold">{t('about.ctaPrimary', 'Free Consultation')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300" />
                </Button>
              </Link>

              <Link to="/gallery" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  variant="outline"
                  className="w-full sm:min-w-[260px] h-12 sm:h-14 px-12 group active-press"
                >
                  <span className="uppercase tracking-widest text-sm font-bold">{t('about.ctaSecondary', 'View Gallery')}</span>
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

      {/* ── TRUST VERIFICATION BAR ── */}
      <div className="bg-fera-deep py-6 border-b border-white/5 relative z-20">
        <div className="container-std px-6">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 lg:gap-4 text-white/40">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{t('stats.certified', 'ISO-9001 Certified Clinic')}</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden lg:block" />
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{t('stats.specialists', '15+ Specialist Surgeons')}</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden lg:block" />
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{t('common.lifetimeWarranty', 'Lifetime Surgical Warranty')}</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden lg:block" />
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{t('home.tourism.vip', 'VIP Medical Concierge')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. INSTITUTIONAL PILLARS - CLEAN WHITE BACKGROUND FOR BREATHING SPACE */}
      <section className="py-20 lg:py-28 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-1 bg-fera-primary/30 mb-12 rounded-full" />
              <h2 className="text-4xl lg:text-5xl font-medium text-fera-deep mb-8 tracking-tight leading-[1.1]">
                {t('about.pillarsTitle1', 'High Quality')} {t('about.pillarsTitle2', 'Care Standards.')}
              </h2>
              <p className="section-body mb-16">
                {t('about.pillarsDesc', 'Our clinic operates under strict international medical protocols, ensuring that every patient receives restorative and aesthetic care of the highest biological standard.')}
              </p>

              <div className="grid sm:grid-cols-2 gap-12">
                {[
                  { icon: ShieldCheck, title: t('about.pillars.riskTitle', 'Risk Management'), desc: t('about.pillars.riskDesc', 'We follow stringent global safety standards for all invasive procedures.') },
                  { icon: Microscope, title: t('about.pillars.techTitle', 'Bio-Digital Tech'), desc: t('about.pillars.techDesc', 'Implementing the latest 3D imaging for extreme surgical accuracy.') },
                  { icon: Stethoscope, title: t('about.pillars.triageTitle', 'Specialist Triage'), desc: t('about.pillars.triageDesc', 'Multi-disciplinary coordination for complex restorative cases.') },
                  { icon: Heart, title: t('about.pillars.careTitle', 'Concierge Care'), desc: t('about.pillars.careDesc', 'Dedicated coordinators supporting your entire medical journey.') }
                ].map((pillar, i) => (
                  <div key={i} className="group space-y-5">
                    <div className="w-14 h-14 rounded-2xl bg-fera-surface border border-fera-border/30 flex items-center justify-center text-fera-primary shadow-luxury-sm group-hover:bg-fera-deep group-hover:text-white transition-all duration-500">
                      <pillar.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xs font-bold text-fera-deep uppercase tracking-[0.2em] group-hover:text-fera-primary transition-colors duration-300">{pillar.title}</h4>
                    <p className="text-[13px] text-fera-gray/60 font-light leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative p-6 bg-gray-50/30 rounded-[4rem] border border-gray-100"
            >
              <img
                src="/images/fera-clinic/clinic/surgery-room.webp"
                alt={t('alt.surgicalTheater', 'State of the art surgical theater')}
                loading="lazy"
                decoding="async"
                className="w-full h-[750px] object-cover rounded-luxury-lg shadow-luxury-xl grayscale-[0.05] transition-all duration-1000"
              />
              <div className="absolute top-16 start-16 bg-white/95 backdrop-blur-md p-10 rounded-2xl shadow-luxury-lg border border-fera-border/30 max-w-[240px] transition-transform hover:-translate-y-1 duration-300">
                <Globe className="w-8 h-8 text-fera-primary mb-6" />
                <p className="text-[10px] font-bold text-fera-deep uppercase tracking-[0.2em] leading-relaxed">
                  {t('about.boutiqueHub', "Istanbul's Boutique Hub for Surgical Excellence")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. TEAM SHOWCASE - SELECTIVE LARGE SPACING & SUBTLE GLOW */}
      <section className="py-20 lg:py-32 px-6 bg-gray-50/40 soft-blue-glow overflow-hidden text-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mb-16 mx-auto">
            <h2 className="text-4xl lg:text-5xl font-medium text-fera-deep mb-8 tracking-tight leading-[1.1]">
              {t('about.teamTitle1', 'Expert')} {t('about.teamTitle2', 'Specialists.')}
            </h2>
            <p className="section-body max-w-2xl mx-auto">
              {t('about.teamDesc', 'Our surgical team consists of credentialed specialists with over 15 years of evidence-based clinical experience.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-start">
            {getTeam(t).map((member, i) => (
              <TiltCard key={i}>
                <div className="card-premium-hover group relative bg-white rounded-luxury-lg p-10 shadow-luxury-lg border border-fera-border/30 h-full flex flex-col transition-all duration-700">
                  <div className="aspect-[4/5] max-h-[380px] sm:max-h-none overflow-hidden rounded-luxury-md mb-12 relative bg-fera-surface">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-fera-deep/5 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <span className="text-[10px] font-bold text-fera-primary uppercase tracking-[0.4em] mb-4 block">{member.specialty}</span>
                    <h3 className="text-3xl font-bold text-fera-deep mb-6 tracking-tight group-hover:text-fera-primary transition-colors duration-300">{member.name}</h3>
                    <p className="text-fera-gray/60 text-[13px] font-light leading-relaxed mb-10 flex-grow">{t(`about.team.${i}.desc`, member.desc)}</p>
                    <div className="flex items-center gap-3 text-fera-deep/20 font-bold text-[10px] uppercase tracking-[0.2em] pt-8 border-t border-fera-border/10 group-hover:text-fera-primary transition-colors">
                      {t('about.boardCertified', 'Clinical Board Certified')}
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/gallery">
              <Button
                variant="secondary"
                size="xl"
                className="px-12 group active-press"
              >
                <span className="uppercase tracking-[0.2em] text-xs font-bold">{t('about.viewOutcomes', 'View Transformation Outcomes')}</span>
                <ArrowRight className="ms-4 h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-500" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA - BALANCED INTENSITY */}
      <section className="relative py-20 lg:py-32 px-6 text-center overflow-hidden bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-medium text-fera-deep tracking-tight leading-[1.05] mb-10">
              {t('about.ctaTitle1', 'Ready for')} {t('about.ctaTitle2', 'an Evaluation?')}
            </h2>
            <p className="section-body max-w-xl mx-auto mb-16">
              {t('about.ctaDesc', 'Connect with our clinical coordinators for a specialized cost estimate and trip protocol.')}
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
