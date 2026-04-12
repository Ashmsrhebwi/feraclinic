import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const treatmentLinks = [
    { label: 'Dental Implants',           to: '/treatments/dental-implants' },
    { label: 'Porcelain Veneers',         to: '/treatments/veneers' },
    { label: 'Invisalign',                to: '/treatments/invisalign' },
    { label: 'All-on-4 Implants',         to: '/treatments/all-on-four' },
    { label: 'Teeth Whitening',           to: '/treatments/teeth-whitening' },
    { label: 'Smile Makeover',            to: '/treatments/smile-makeover' },
  ]

  const quickLinks = [
    { label: 'About FeRa Clinic',         to: '/about' },
    { label: 'Gallery',                   to: '/gallery' },
    { label: 'Dental Tourism',            to: '/dental-tourism' },
    { label: 'Free Consultation',         to: '/consultation' },
    { label: 'Blog',                      to: '/blog' },
    { label: 'Contact Us',               to: '/contact' },
  ]

  return (
    <footer className="relative overflow-hidden bg-fera-deep text-white">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-fera-primary via-fera-light to-fera-primary/20" />

      {/* Subtle radial ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 90% 10%, rgba(0,102,147,0.30) 0%, transparent 55%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14
                        md:grid-cols-2 xl:grid-cols-4">

          {/* ─── Brand ─── */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                FeRa <span className="text-fera-light">Clinic</span>
              </h2>
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-fera-light/60 mt-1">
                Premium Dental · Istanbul
              </p>
            </div>

            <p className="text-sm text-white/55 font-light leading-[1.85] max-w-[280px]">
              Experience refined dental care in Istanbul with personalized treatment planning, 
              advanced technology, and a patient journey designed around trust and natural-looking results.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {[
                { href: 'https://facebook.com/feraclinic',  icon: Facebook,  label: 'Facebook' },
                { href: 'https://instagram.com/feraclinic', icon: Instagram, label: 'Instagram' },
                { href: 'https://youtube.com/feraclinic',   icon: Youtube,   label: 'YouTube' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center
                             text-white/60 transition-all duration-300
                             hover:border-fera-light/40 hover:bg-fera-light hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* ─── Treatments ─── */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white tracking-tight">Treatments</h4>
            <ul className="space-y-2.5">
              {treatmentLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/55 hover:text-white hover:pl-1 transition-all duration-200 font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Quick Links ─── */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white tracking-tight">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/55 hover:text-white hover:pl-1 transition-all duration-200 font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Contact ─── */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white tracking-tight">Contact</h4>

            <div className="space-y-4">
              <a
                href="tel:+905551234567"
                className="flex items-start gap-3 text-sm text-white/55 hover:text-white transition-colors duration-200"
              >
                <Phone className="mt-0.5 h-4 w-4 text-fera-light shrink-0" />
                <span className="font-light">+90 555 123 45 67</span>
              </a>

              <a
                href="mailto:info@feraclinic.com"
                className="flex items-start gap-3 text-sm text-white/55 hover:text-white transition-colors duration-200"
              >
                <Mail className="mt-0.5 h-4 w-4 text-fera-light shrink-0" />
                <span className="font-light">info@feraclinic.com</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-white/55">
                <MapPin className="mt-0.5 h-4 w-4 text-fera-light shrink-0" />
                <span className="font-light">Nişantaşı, Istanbul, Türkiye</span>
              </div>
            </div>

            {/* CTA in footer */}
            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 rounded-xl border border-fera-light/25 
                         px-5 py-2.5 text-sm font-semibold text-fera-light 
                         hover:border-fera-light hover:bg-fera-light hover:text-white
                         transition-all duration-300"
            >
              Free Consultation
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ─── Bottom bar ─── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-xs text-white/35 tracking-wide">
            © {currentYear} FeRa Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/35">
            <Link to="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link to="/terms"   className="hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}