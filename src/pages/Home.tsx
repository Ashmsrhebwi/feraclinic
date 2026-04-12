import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Clock, Star, Globe, CheckCircle, Phone } from 'lucide-react'
import { TreatmentCard } from '../components/ui/TreatmentCard'

/* ─── FEATURED TREATMENTS ─── */
const featuredTreatments = [
  {
    id: '1',
    slug: 'dental-implants',
    title: 'Dental Implants',
    category: 'Restorative',
    description: 'Premium titanium implants with lifetime warranty. The permanent solution for missing teeth with natural-looking results and 3D guided surgery.',
    image: '/images/fera-clinic/treatments/implant-procedure.webp',
    duration: '1–2 Hours'
  },
  {
    id: '2',
    slug: 'veneers',
    title: 'Porcelain Veneers',
    category: 'Cosmetic',
    description: 'Custom-designed porcelain veneers for a perfect Hollywood smile with minimal tooth preparation and stain-resistant ceramic.',
    image: '/images/fera-clinic/treatments/veneer-procedure.webp',
    duration: '2–3 Visits'
  },
  {
    id: '3',
    slug: 'all-on-four',
    title: 'All-on-4 Implants',
    category: 'Restorative',
    description: 'Full arch restoration with just 4 implants. Same-day teeth with immediate function and beautiful, natural-looking aesthetics.',
    image: '/images/fera-clinic/treatments/implant-procedure.webp',
    duration: '1 Day'
  }
]

/* ─── WHY FERA ─── */
const reasons = [
  {
    icon: ShieldCheck,
    title: 'European-Standard Sterilization',
    desc: 'Class-B autoclave systems and HEPA-filtered surgical suites in every treatment room.'
  },
  {
    icon: Clock,
    title: '3D Treatment Planning',
    desc: 'CBCT imaging and digital smile design completed before any clinical procedure begins.'
  },
  {
    icon: Star,
    title: 'Specialist Doctors Only',
    desc: 'Every procedure is performed by a doctor holding an advanced degree in their specialty.'
  },
  {
    icon: Globe,
    title: 'Full International Coordination',
    desc: 'Dedicated case coordinator, VIP transfers, and hotel booking for international patients.'
  }
]

/* ─── STATS ─── */
const stats = [
  { value: '12+', label: 'Years of Experience' },
  { value: '5,000+', label: 'International Patients' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '12', label: 'Specialist Doctors' },
]

/* ─── TESTIMONIALS ─── */
const testimonials = [
  {
    name: 'Elena M.',
    country: 'Italy',
    treatment: 'Porcelain Veneers',
    text: 'From digital design to final placement, the precision was outstanding. Completed in 5 days as promised.',
    initials: 'EM',
    rating: 5
  },
  {
    name: 'David T.',
    country: 'United Kingdom',
    treatment: 'All-on-4 Implants',
    text: 'A highly professional surgical environment. The All-on-4 protocol was explained at every stage. Transfers were seamless.',
    initials: 'DT',
    rating: 5
  },
  {
    name: 'Sarah S.',
    country: 'Germany',
    treatment: 'Zirconium Crowns',
    text: 'I chose FeRa for their focus on medical precision. The result is natural and functional with excellent follow-up care.',
    initials: 'SS',
    rating: 5
  },
]

export const Home = () => {
  return (
    <div className="bg-white">

      {/*
      ══════════════════════════════════════
        HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image */}
        <img
          src="/images/fera-clinic/hero/hero-main.webp"
          alt="FeRa Clinic Istanbul"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
          loading="eager"
        />
        {/* Solid overlay — #1b4698 at 60% opacity for sharp readability */}
        <div className="absolute inset-0" style={{ background: 'rgba(27,70,152,0.62)' }} />

        {/* Content — left-aligned, max-w-xl */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40 w-full">
          <div className="max-w-xl space-y-6">
            {/* Eyebrow */}

            {/* Headline — clean, one thought per line */}
            <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold text-white leading-[1.18] tracking-tight">
              Transform Your Smile<br />
              <span className="text-[#008BC9]">in Istanbul</span>
            </h1>

            {/* Sub-text */}
            <p className="text-[17px] text-white/85 font-normal leading-relaxed">
              Expert Dental Implants & Aesthetic Smile Restoration at FeRa Clinic.
              High-precision care with premium hospitality in the heart of Nişantaşı.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/70 text-sm">
              {['5,000+ Patients', 'Same-Day Results', 'ISO Certified'].map(b => (
                <span key={b} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#008BC9]" /> {b}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/consultation"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg
                           bg-white text-[#1b4698] text-[15px] font-semibold
                           hover:bg-[#F5F7FA] transition-colors duration-200 shadow-sm"
              >
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/treatments"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg
                           border border-white/40 text-white text-[15px] font-medium
                           hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                View Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*
      ══════════════════════════════════════
        STATS BAR
      ══════════════════════════════════════ */}
      <section className="bg-[#1b4698]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {stats.map((s, i) => (
              <div key={i} className="px-8 py-8 text-center lg:text-left">
                <p className="text-2xl lg:text-3xl font-bold text-white tracking-tight">{s.value}</p>
                <p className="text-xs text-white/60 font-medium uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
      ══════════════════════════════════════
        WHY FERA
      ══════════════════════════════════════ */}
      <section className="section bg-[#F5F7FA]">
        <div className="container-std">
          {/* Header */}
          <div className="max-w-2xl mb-14">
            <span className="section-label">Why Choose FeRa Clinic</span>
            <h2 className="section-heading">
              Medical Precision.<br />Premium Care.
            </h2>
            <p className="section-body mt-4">
              Every treatment at FeRa Clinic follows international protocols with specialist-only care,
              advanced diagnostics, and complete transparency at every step.
            </p>
          </div>

          {/* Reason cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((r, i) => (
              <div key={i} className="bg-white rounded-xl border border-[#E2E8F0] p-7
                                      hover:shadow-[0_8px_32px_rgba(27,70,152,0.10)]
                                      hover:border-[#006693]/20 transition-all duration-200">
                <div className="w-11 h-11 rounded-lg bg-[#006693]/8 flex items-center justify-center mb-5">
                  <r.icon className="w-5 h-5 text-[#006693]" />
                </div>
                <h3 className="text-[15px] font-bold text-[#1b4698] mb-2 leading-snug">{r.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
      ══════════════════════════════════════
        FEATURED TREATMENTS
      ══════════════════════════════════════ */}
      <section className="section bg-white">
        <div className="container-std">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="section-label">Clinical Procedures</span>
              <h2 className="section-heading">Our Treatments</h2>
            </div>
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#006693] hover:text-[#1b4698] transition-colors shrink-0"
            >
              View All Treatments <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTreatments.map(t => (
              <TreatmentCard
                key={t.id}
                title={t.title}
                description={t.description}
                image={t.image}
                category={t.category}
                href={`/treatments/${t.slug}`}
                duration={t.duration}
              />
            ))}
          </div>
        </div>
      </section>

      {/*
      ══════════════════════════════════════
        CLINIC PHOTOS — TRUST SECTION
      ══════════════════════════════════════ */}
      <section className="section bg-[#F5F7FA]">
        <div className="container-std">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/fera-clinic/clinic/surgery-room.webp"
                alt="FeRa Clinic surgical suite"
                className="rounded-xl object-cover w-full aspect-[4/3]"
              />
              <img
                src="/images/fera-clinic/clinic/reception.webp"
                alt="FeRa Clinic reception"
                className="rounded-xl object-cover w-full aspect-[4/3] mt-8"
              />
              <img
                src="/images/fera-clinic/clinic/waiting-area.webp"
                alt="FeRa Clinic waiting area"
                className="rounded-xl object-cover w-full aspect-[4/3] col-span-2"
              />
            </div>

            {/* Copy */}
            <div className="space-y-6">
              <span className="section-label">The Clinic</span>
              <h2 className="section-heading">
                State-of-the-Art<br />Facilities in Istanbul
              </h2>
              <p className="section-body">
                Our clinic is fully equipped with 3D CBCT imaging, digital smile design stations,
                and Class-B sterilization systems — meeting international standards for patient safety
                and clinical precision.
              </p>

              <ul className="space-y-3">
                {[
                  'Class-B sterilization in every room',
                  '3D CBCT diagnostic imaging',
                  'Digital Smile Design (DSD)',
                  'ISO-certified protocols',
                  'Personal case coordinator',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#1b4698]/80">
                    <CheckCircle className="w-4 h-4 text-[#006693] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                           bg-[#1b4698] text-white text-sm font-semibold
                           hover:bg-[#006693] transition-colors duration-200"
              >
                About Our Clinic <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*
      ══════════════════════════════════════
        DENTAL TOURISM
      ══════════════════════════════════════ */}
      <section className="section bg-[#1b4698]">
        <div className="container-std">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#008BC9] block">
                Medical Tourism
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug">
                Complete Care for<br />International Patients
              </h2>
              <p className="text-[#FFFFFF]/70 leading-relaxed font-normal">
                FeRa Clinic handles everything — from airport transfers to hotel bookings and clinical coordination —
                so you can focus entirely on your treatment and recovery.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '✈', label: 'VIP Airport Transfer' },
                  { icon: '🏨', label: 'Hotel Coordination' },
                  { icon: '🗣', label: 'Language Support' },
                  { icon: '📋', label: 'Case Coordinator' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="text-xl">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>

              <Link
                to="/dental-tourism"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                           border border-white/30 text-white text-sm font-semibold
                           hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                Dental Tourism Info <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: contact block */}
            <div className="bg-white/8 border border-white/15 rounded-2xl p-10 space-y-8">
              <h3 className="text-xl font-bold text-white">Plan Your Istanbul Visit</h3>
              <p className="text-white/65 text-sm leading-relaxed">
                Our team is available 7 days a week to answer your questions and help you plan
                your dental treatment in Istanbul. No obligation, no pressure.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+905551234567"
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#008BC9]" /> +90 555 123 45 67
                </a>
              </div>
              <Link
                to="/consultation"
                className="block text-center py-3.5 rounded-lg bg-white text-[#1b4698] text-sm font-bold
                           hover:bg-[#F5F7FA] transition-colors duration-200"
              >
                Request Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*
      ══════════════════════════════════════
        TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="section bg-white">
        <div className="container-std">
          <div className="text-center mb-12 max-w-xl mx-auto">
            <span className="section-label block text-center">Patient Testimonials</span>
            <h2 className="section-heading">What Our Patients Say</h2>
            <p className="section-body mt-3">
              Real outcomes from international patients who completed their treatment at FeRa Clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#F5F7FA] border border-[#E2E8F0] rounded-xl p-7 flex flex-col gap-4
                           hover:shadow-[0_8px_32px_rgba(27,70,152,0.10)] transition-shadow duration-200"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-[#006693] text-[#006693]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-[#6B7280] leading-relaxed flex-grow">
                  "{t.text}"
                </p>

                {/* Patient */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#E2E8F0]">
                  <div className="w-10 h-10 rounded-full bg-[#1b4698] flex items-center justify-center
                                  text-white text-xs font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1b4698]">{t.name}</p>
                    <p className="text-[11px] text-[#006693] font-medium uppercase tracking-wide">
                      {t.treatment} · {t.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#006693] hover:text-[#1b4698] transition-colors"
            >
              View Before & After Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/*
      ══════════════════════════════════════
        FINAL CTA
      ══════════════════════════════════════ */}
      <section className="section bg-[#F5F7FA]">
        <div className="container-std">
          <div className="bg-[#1b4698] rounded-2xl px-10 py-14 text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 text-[16px] max-w-md mx-auto leading-relaxed">
              Contact our clinic coordinators today. Free consultation, no obligation, fast response.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Link
                to="/consultation"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg
                           bg-white text-[#1b4698] text-[15px] font-bold
                           hover:bg-[#F5F7FA] transition-colors duration-200"
              >
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/dental-tourism"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg
                           border border-white/30 text-white text-[15px] font-medium
                           hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                Dental Tourism Info
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}