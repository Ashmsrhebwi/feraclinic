import { LocalizedLink as Link } from './ui/LocalizedLink'
import { Facebook, Instagram, Youtube, Linkedin, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const treatmentLinks = [
    { label: t('treatments.implants', 'Dental Implants'),           to: '/treatments/dental-implants' },
    { label: t('treatments.veneers', 'Hollywood Smile'),           to: '/treatments/hollywood-smile' },
    { label: t('treatments.ortho', 'Orthodontics'),                to: '/treatments/orthodontics' },
    { label: t('treatments.allOn4', 'All-on-4 Restoration'),       to: '/treatments/all-on-four' },
    { label: t('treatments.whitening', 'Teeth Whitening'),           to: '/treatments/teeth-whitening' },
    { label: t('treatments.smileMakeover', 'Smile Makeover'),            to: '/treatments/smile-makeover' },
  ]

  const TikTokIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.88-.64-1.61-1.47-2.11-2.44v10.13c-.15 1.98-1.2 3.89-2.91 4.9-1.72 1.01-3.95 1.11-5.75.26-1.8-.85-3.08-2.67-3.35-4.66-.44-3.23 2.15-6.3 5.37-6.57.54-.05 1.08.01 1.61.16v4.03c-.42-.15-.88-.23-1.33-.21-1.34.07-2.5 1.1-2.73 2.43-.3 1.73.91 3.4 2.65 3.7.88.15 1.83-.05 2.53-.61.71-.57 1.12-1.46 1.14-2.37.02-3.41 0-6.82.01-10.23.01-2.28 0-4.56.02-6.84z"/>
    </svg>
  )

  const quickLinks = [
    { label: t('navigation.about', 'About FeRa Clinic'),         to: '/about' },
    { label: t('navigation.gallery', 'Gallery'),                   to: '/gallery' },
    { label: t('navigation.dentalTourism', 'Dental Tourism'),            to: '/dental-tourism' },
    { label: t('common.freeConsultation', 'Free Consultation'),         to: '/consultation' },
    { label: t('navigation.blog', 'Blog'),                      to: '/blog' },
    { label: t('navigation.contact', 'Contact Us'),               to: '/contact' },
  ]

  return (
    <footer className="relative overflow-hidden bg-fera-deep text-white">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-white/5 via-white/20 to-white/5" />

      {/* Subtle radial ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 90% 10%, rgba(255,255,255,0.02) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 gap-16 border-b border-white/10 pb-16
                        md:grid-cols-2 xl:grid-cols-4">

          {/* ─── Brand ─── */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tighter">
                FeRa <span className="text-fera-primary italic font-light opacity-50">Clinic</span>
              </h2>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mt-3">
                {t('footer.brandSubtitle', 'Premium Dental · Istanbul')}
              </p>
            </div>

            <p className="text-sm text-white/50 font-light leading-relaxed max-w-[280px]">
              {t('footer.description', 'Experience refined dental care in Istanbul with personalized treatment planning, advanced technology, and a patient journey designed around trust and natural-looking results.')}
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {[
                { href: 'https://facebook.com/feraclinic',  icon: Facebook,  label: 'Facebook', hoverColor: '#1877F2' },
                { href: 'https://instagram.com/feraclinic', icon: Instagram, label: 'Instagram', hoverColor: '#E4405F' },
                { href: 'https://youtube.com/feraclinic',   icon: Youtube,   label: 'YouTube', hoverColor: '#FF0000' },
                { href: 'https://linkedin.com/company/feraclinic', icon: Linkedin, label: 'LinkedIn', hoverColor: '#0077B5' },
                { href: 'https://tiktok.com/@feraclinic',    icon: TikTokIcon, label: 'TikTok', hoverColor: '#FFFFFF' },
              ].map(({ href, icon: Icon, label, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white/50
                             transition-all duration-500 ease-out
                             hover:scale-110 hover:-translate-y-1.5 hover:bg-white/10 hover:border-white/20 active:scale-95"
                >
                  <Icon 
                    className="h-5 w-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: 'inherit' }}
                  />
                  <Icon 
                    className="h-5 w-5 absolute opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 blur-[8px] group-hover:blur-0"
                    style={{ color: hoverColor }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* ─── Treatments ─── */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.25em] opacity-40">{t('navigation.treatments', 'Treatments')}</h4>
            <ul className="space-y-4">
              {treatmentLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/50 hover:text-fera-primary transition-all duration-300 font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Quick Links ─── */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.25em] opacity-40">{t('footer.quickLinks', 'Quick Links')}</h4>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/50 hover:text-fera-primary transition-all duration-300 font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Contact ─── */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.25em] opacity-40">{t('navigation.contact', 'Contact')}</h4>

            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-sm text-white/50 hover:text-white transition-all duration-300 group cursor-pointer">
                <MapPin className="mt-0.5 h-5 w-5 text-white/20 shrink-0 group-hover:text-fera-primary transition-colors duration-500" />
                <span className="font-light leading-relaxed">Teşvikiye, Nişantaşı, Istanbul</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/50 hover:text-white transition-all duration-300 group">
                <Phone className="h-5 w-5 text-white/20 shrink-0 group-hover:text-fera-primary transition-colors duration-500" />
                <a href="tel:+905551234567" className="active-press">
                  <span className="font-light">+90 555 123 45 67</span>
                </a>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/50 hover:text-white transition-all duration-300 group">
                <Mail className="h-5 w-5 text-white/20 shrink-0 group-hover:text-fera-primary transition-colors duration-500" />
                <a 
                  href="mailto:contact@feraclinic.com"
                  className="active-press"
                >
                  <span className="font-light">contact@feraclinic.com</span>
                </a>
              </li>
            </ul>

            {/* CTA in footer */}
            <Link
              to="/consultation"
              className="inline-flex items-center gap-3 rounded-2xl bg-white
                         px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-fera-deep shadow-luxury-lg
                         hover:bg-fera-primary hover:text-white hover:-translate-y-1.5 hover:shadow-luxury-xl
                         active:scale-95 transition-all duration-500 group"
            >
              {t('common.freeConsultation')}
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ─── Bottom bar ─── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">
          <p className="text-[10px] text-white/30 tracking-widest font-bold uppercase">
            © {currentYear} FeRa Clinic. {t('footer.allRightsReserved', 'All rights reserved.')}
          </p>
          <div className="flex items-center gap-10 text-[10px] text-white/30 font-bold uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-fera-primary transition-colors duration-300">{t('footer.privacyPolicy', 'Privacy Policy')}</Link>
            <Link to="/terms"   className="hover:text-fera-primary transition-colors duration-300">{t('footer.termsOfService', 'Terms of Service')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}