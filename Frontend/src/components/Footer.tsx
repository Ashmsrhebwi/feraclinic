import { LocalizedLink as Link } from './ui/LocalizedLink'
import { Facebook, Instagram, Youtube, Linkedin, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const footerTopNavLinks = [
    { label: t('navigation.aboutUs', 'About Us'), to: '/about' },
    { label: t('navigation.corporate', 'Corporate'), to: '/corporate' },
    { label: t('navigation.contact', 'Contact'), to: '/contact' },
    { label: t('navigation.partnership', 'Partnership'), to: '/partnership' },
    { label: t('navigation.joinUs', 'Join Us'), to: '/join-us' },
    { label: t('navigation.gallery', 'Gallery'), to: '/gallery' },
    { label: t('footer.privacyPolicy', 'Privacy Policy'), to: '/privacy' },
  ]

  const treatmentLinks = [
    { label: t('treatments.implants', 'Dental Implants'),           to: '/treatments/dental-implants' },
    { label: t('treatments.veneers', 'Porcelain Veneers'),           to: '/treatments/porcelain-veneers' },
    { label: t('treatments.ortho', 'Orthodontics'),                to: '/treatments/orthodontics' },
    { label: t('treatments.allOn4', 'All-on-4 Restoration'),       to: '/treatments/all-on-4-istanbul' },
    { label: t('treatments.whitening', 'Clinical Whitening'),           to: '/treatments/clinical-whitening' },
    { label: t('treatments.hollywoodSmile', 'Hollywood Smile'),            to: '/treatments/hollywood-smile' },
  ]

  const TikTokIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.88-.64-1.61-1.47-2.11-2.44v10.13c-.15 1.98-1.2 3.89-2.91 4.9-1.72 1.01-3.95 1.11-5.75.26-1.8-.85-3.08-2.67-3.35-4.66-.44-3.23 2.15-6.3 5.37-6.57.54-.05 1.08.01 1.61.16v4.03c-.42-.15-.88-.23-1.33-.21-1.34.07-2.5 1.1-2.73 2.43-.3 1.73.91 3.4 2.65 3.7.88.15 1.83-.05 2.53-.61.71-.57 1.12-1.46 1.14-2.37.02-3.41 0-6.82.01-10.23.01-2.28 0-4.56.02-6.84z"/>
    </svg>
  )

  const quickLinks = [
    { label: t('navigation.about', 'About'),         to: '/about' },
    { label: t('navigation.gallery', 'Gallery'),                   to: '/gallery' },
    { label: t('navigation.dentalTourism', 'Dental Tourism'),            to: '/dental-tourism' },
    { label: t('common.freeConsultation', 'Free Consultation'),         to: '/consultation' },
    { label: t('navigation.blog', 'Blog'),                      to: '/blog' },
    { label: t('navigation.contact', 'Contact'),               to: '/contact' },
  ]

  return (
    <>
      {/* Footer Top Navigation Bar - Premium Blue Gradient */}
      <div className="w-full bg-gradient-to-br from-[#071520] via-[#0B1C2D] to-[#12304A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <nav className="flex items-center justify-center gap-8 lg:gap-10 py-6 flex-wrap">
            {footerTopNavLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-white/85 font-medium hover:text-white transition-all duration-200 relative group hover:-translate-y-0.5"
              >
                {item.label}
                <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <footer className="relative overflow-hidden bg-gradient-to-br from-[#071520] via-[#0B1C2D] to-[#12304A] text-white">

      {/* Premium decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0B1C2D]/105 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-12 pb-12
                        md:grid-cols-2 lg:grid-cols-4">

          {/* ─── Brand ─── */}
          <div className="space-y-6">
            <div>
              {/* Logo Image */}
              <img 
                src="/logofera.png" 
                alt={t('common.brandName', 'FeRa Clinic')} 
                className="h-14 w-auto mb-4 object-contain filter brightness-0 invert"
              />
              <p className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                {t('footer.brandSubtitle', 'Premium Dental · Istanbul')}
              </p>
            </div>

            <p className="text-sm text-white/70 font-light leading-relaxed max-w-xs">
              {t('footer.description', 'Experience refined dental care in Istanbul with personalized treatment planning, advanced technology, and a patient journey designed around trust and natural-looking results.')}
            </p>

            {/* Premium Social Icons */}
            <div className="flex items-center gap-3 pt-2">
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
                  className="group w-12 h-12 rounded-xl border border-white/20 bg-white/10 flex items-center justify-center text-white/80
                             transition-all duration-300 ease-out
                             hover:bg-white hover:text-[#0B1C2D] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(11,28,45,0.25)]"
                >
                  <Icon 
                    className="h-5 w-5 transition-all duration-300 group-hover:scale-110"
                    style={{ color: 'inherit' }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* ─── Treatments ─── */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.3em] text-white/80">{t('navigation.treatments', 'Treatments')}</h4>
            <ul className="space-y-3">
              {treatmentLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/80 hover:text-white transition-all duration-300 font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Quick Links ─── */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.3em] text-white/80">{t('footer.quickLinks', 'Quick Links')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/80 hover:text-white transition-all duration-300 font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Contact ─── */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider text-white/80">{t('navigation.contact', 'Contact')}</h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-all duration-300 group cursor-pointer">
                <MapPin className="mt-0.5 h-5 w-5 text-white/50 shrink-0 group-hover:text-white transition-colors duration-300" />
                <a 
                  href="https://www.google.com/maps/search/Kazlıçeşme Kennedy Cad. No:62 D:1 34020 Zeytinburnu İstanbul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light leading-relaxed hover:text-white"
                >
                  {t('contact.info.locationDetail')}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-all duration-300 group">
                <Phone className="h-5 w-5 text-white/50 shrink-0 group-hover:text-white transition-colors duration-300" />
                <a 
                  href="tel:+905367460100" 
                  className="font-light hover:text-white"
                >
                  +90 536 746 01 00
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-all duration-300 group">
                <Mail className="h-5 w-5 text-white/50 shrink-0 group-hover:text-white transition-colors duration-300" />
                <a 
                  href="mailto:consultation@feraclinic.com"
                  className="font-light hover:text-white"
                >
                  consultation@feraclinic.com
                </a>
              </li>
            </ul>

            {/* Premium CTA in footer */}
            <Link
              to="/consultation"
              className="inline-flex items-center gap-3 rounded-full bg-white
                         px-8 py-4 text-[11px] font-bold uppercase tracking-wider text-[#0B1C2D] shadow-[0_20px_60px_rgba(11,28,45,0.35)]
                         hover:bg-gray-50 hover:shadow-[0_10px_30px_rgba(11,28,45,0.25)] hover:-translate-y-1
                         active:scale-95 transition-all duration-300 group"
            >
              {t('common.freeConsultation')}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ─── Bottom bar ─── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/20">
          <p className="text-[11px] text-white/60 tracking-wider font-medium uppercase">
            {currentYear} {t('common.brandName')}. {t('footer.allRightsReserved')}
          </p>
          <div className="flex flex-wrap items-center gap-6 text-[11px] text-white/60 font-medium uppercase tracking-wider">
            <Link to="/privacy" className="hover:text-white transition-all duration-300 relative group">
              {t('footer.privacyPolicy', 'Privacy Policy')}
              <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}