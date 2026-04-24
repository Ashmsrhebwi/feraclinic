import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Globe, Search } from 'lucide-react'
import { treatments } from '../data/treatments'
import { LocalizedLink as Link } from './ui/LocalizedLink'
import { useTranslation } from 'react-i18next'
import { SearchModal } from './ui/SearchModal'

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
]

/* ─── dropdown item shape ─── */
interface NavItem {
  label: string
  href: string
}

const getGalleryLinks = (t: any): NavItem[] => [
  { label: t('navigation.gallery_beforeAfter', 'Before & After'), href: '/gallery#before-after' },
  { label: t('navigation.gallery_clinicPhotos', 'Clinic Photos'), href: '/gallery#clinic-photos' },
]

const getLocalizedTreatments = (t: any) => {
  return treatments.map(tr => ({
    ...tr,
    title: t(`treatments.data.${tr.id}.title`, tr.title)
  }))
}

export function Navbar() {
  const [open, setOpen] = useState(false)   // mobile menu
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  /* Compact padding after a tiny scroll */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  /* Close dropdowns when clicking outside */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.nav-dropdown')) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  /* Close mobile menu and dropdowns on route change */
  useEffect(() => { 
    setOpen(false) 
    setActiveDropdown(null)
  }, [location.pathname + location.hash])

  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const currentPathWithoutLang = location.pathname.replace(new RegExp(`^/${lang}`), '') || '/'

  const isActive = (href: string) =>
    href === '/' ? currentPathWithoutLang === '/' : currentPathWithoutLang.startsWith(href)

  const handleLangSwitch = (newLang: string) => {
    const newPath = `/${newLang}${currentPathWithoutLang === '/' ? '' : currentPathWithoutLang}`
    navigate(newPath)
    setOpen(false) // close mobile menu if open
    setActiveDropdown(null)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-fera-border/30
                  transition-shadow duration-200 ${scrolled ? 'shadow-luxury-lg' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* ── LOGO ── */}
        <Link to="/" className="flex items-center shrink-0" aria-label={t('a11y.home', 'FeRa Clinic – Home')}>
          <img
            src="/logofera.png"
            alt={t('alt.feraClinic', 'FeRa Clinic')}
            className="h-10 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* ── DESKTOP LINKS (center) ── */}
        <nav className="hidden lg:flex items-center gap-1">

          <Link
            to="/"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors nav-link-refined active-press
                        ${isActive('/') 
                ? 'text-fera-primary bg-fera-primary/10 font-semibold'
                : 'text-gray-700 hover:text-fera-primary hover:bg-gray-50'}`}
          >
            {t('navigation.home')}
          </Link>

          {/* Treatments dropdown */}
          <div className="nav-dropdown group relative">
            <Link
              to="/treatments"
              className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors nav-link-refined active-press
                          ${isActive('/treatments')
                  ? 'text-fera-primary bg-fera-primary/10 font-semibold'
                  : 'text-gray-700 hover:text-fera-primary hover:bg-gray-50'}`}
            >
              {t('navigation.treatments')} <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 opacity-60" />
            </Link>
            <div 
              className="nav-dropdown-menu absolute top-full start-0 mt-1 w-64
                            bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl
                            transition-all duration-500 z-50 p-2 space-y-1
                            opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
            >
              {getLocalizedTreatments(t).map(tr => {
                const trPath = `/treatments/${tr.slug}`;
                const isTrActive = currentPathWithoutLang === trPath;
                return (
                  <Link
                    key={tr.id}
                    to={trPath}
                    onClick={() => setActiveDropdown(null)}
                    className={`h-11 px-4 flex items-center justify-between rounded-lg text-sm font-medium transition-all duration-300
                                ${isTrActive 
                                  ? 'bg-fera-primary/10 text-fera-primary font-semibold' 
                                  : 'text-gray-700 hover:bg-gray-100 hover:text-fera-primary'}`}
                  >
                    {tr.title}
                  </Link>
                );
              })}
              <div className="border-t border-gray-100 my-1 pt-1">
                <Link
                  to="/treatments"
                  onClick={() => setActiveDropdown(null)}
                  className="h-11 px-4 flex items-center justify-between rounded-lg text-xs font-bold uppercase tracking-widest text-fera-primary hover:bg-gray-100 transition-all duration-300 group/all"
                >
                  {t('common.allTreatments')} <span className="inline-block transition-transform duration-300 group-hover/all:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Gallery dropdown */}
          <div className="nav-dropdown group relative">
            <Link
              to="/gallery"
              className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors nav-link-refined active-press
                          ${isActive('/gallery')
                  ? 'text-fera-primary bg-fera-primary/10 font-semibold'
                  : 'text-gray-700 hover:text-fera-primary hover:bg-gray-50'}`}
            >
              {t('navigation.gallery')} <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 opacity-60" />
            </Link>
            <div 
              className="nav-dropdown-menu absolute top-full start-0 mt-1 w-64
                            bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl
                            transition-all duration-500 z-50 p-2 space-y-1
                            opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
            >
              {getGalleryLinks(t).map(item => {
                const isItemActive = currentPathWithoutLang + location.hash === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setActiveDropdown(null)}
                    className={`h-11 px-4 flex items-center justify-between rounded-lg text-sm font-medium transition-all duration-300
                                ${isItemActive 
                                  ? 'bg-fera-primary/10 text-fera-primary font-semibold' 
                                  : 'text-gray-700 hover:bg-gray-100 hover:text-fera-primary'}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="border-t border-gray-100 my-1 pt-1">
                <Link
                  to="/gallery"
                  onClick={() => setActiveDropdown(null)}
                  className="h-11 px-4 flex items-center justify-between rounded-lg text-xs font-bold uppercase tracking-widest text-fera-primary hover:bg-gray-100 transition-all duration-300 group/all"
                >
                  {t('navigation.gallery')} <span className="inline-block transition-transform duration-300 group-hover/all:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>

          {[
            { label: t('navigation.about'), href: '/about' },
            { label: t('navigation.dentalTourism'), href: '/dental-tourism' },
            { label: t('navigation.blog', 'Blog'), href: '/blog' },
            { label: t('navigation.contact'), href: '/contact' },
          ].map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors nav-link-refined active-press
                          ${isActive(link.href)
                  ? 'text-fera-primary bg-fera-primary/10 font-semibold'
                  : 'text-gray-700 hover:text-fera-primary hover:bg-gray-50'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── CTA + MOBILE TOGGLE ── */}
        <div className="flex items-center gap-2 lg:gap-3">

          {/* Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center justify-center w-10 h-10 rounded-xl text-fera-deep/60 hover:bg-fera-surface hover:text-fera-primary transition-all duration-500 hover:-translate-y-0.5 active:scale-95 shadow-luxury-sm"
            aria-label={t('a11y.search', 'Search')}
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Language Switcher */}
          <div className="nav-dropdown group relative">
            <div
              className="flex items-center gap-1.5 p-2.5 rounded-xl transition-all duration-500 cursor-pointer text-fera-deep/60 hover:bg-fera-surface hover:-translate-y-0.5 group-hover:text-fera-primary shadow-luxury-sm"
              aria-label={t('a11y.changeLanguage', 'Change language')}
            >
              <Globe className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase hidden lg:block tracking-widest">{lang}</span>
            </div>
            <div 
              className="nav-dropdown-menu absolute top-full end-0 mt-1 w-60
                            bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl
                            transition-all duration-500 z-50 p-2 space-y-1
                            opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
            >
              {LANGUAGES.map(l => (
                <button
                  key={l.code}
                  onClick={() => handleLangSwitch(l.code)}
                  className={`h-11 w-full px-4 flex items-center justify-between rounded-lg text-sm font-medium transition-all duration-300
                              ${lang === l.code 
                                ? 'bg-fera-primary/10 text-fera-primary font-semibold' 
                                : 'text-gray-700 hover:bg-gray-100 hover:text-fera-primary'}`}
                >
                  <span className="tracking-tight">{l.label}</span>
                  <span className="opacity-60 grayscale-[0.5] group-hover:grayscale-0 transition-all text-xs">{l.flag}</span>
                </button>
              ))}
            </div>
          </div>

          {/* WhatsApp shortcut */}
          <a
            href={`https://wa.me/${t('common.whatsappNumber', '905551234567')}?text=${encodeURIComponent(t('common.whatsappMessage', 'Hello, I have a question about treatments.'))}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('a11y.contactWhatsApp', 'Contact via WhatsApp')}
            title={t('home.whatsappTooltip')}
            className="hidden lg:flex items-center justify-center w-9 h-9 rounded-lg bg-[#25D366] text-white hover:bg-[#1ebe5d] hover:-translate-y-1 hover:shadow-md active:scale-95 transition-all duration-300 shadow-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.197-.771.967-.945 1.164-.174.197-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>

          <Link
            to="/consultation"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-xl
                       bg-fera-primary text-white text-[11px] font-bold uppercase tracking-widest
                       hover:bg-fera-deep active:scale-95 transition-all duration-500 shadow-luxury-sm"
          >
            {t('common.freeConsultation')}
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-[#1b4698] hover:bg-gray-50 active:scale-90 transition-all"
            aria-label={t('a11y.toggleMenu', 'Toggle menu')}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-1">
              {[
                { label: t('navigation.home'), href: '/' },
                { label: t('navigation.about'), href: '/about' },
                { label: t('navigation.dentalTourism'), href: '/dental-tourism' },
                { label: t('navigation.gallery'), href: '/gallery' },
                { label: t('navigation.blog', 'Blog'), href: '/blog' },
                { label: t('navigation.contact'), href: '/contact' },
              ].map(l => (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`block py-3 px-4 text-sm font-medium rounded-xl transition-all
                              ${isActive(l.href) 
                                ? 'bg-fera-primary/10 text-fera-primary font-semibold' 
                                : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  {l.label}
                </Link>
              ))}

              <p className="pt-4 pb-2 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-fera-primary opacity-60">{t('navigation.treatments')}</p>
              {getLocalizedTreatments(t).slice(0, 6).map(tr => (
                <Link
                  key={tr.id}
                  to={`/treatments/${tr.slug}`}
                  className="block py-2.5 px-4 text-sm text-gray-600 hover:text-fera-primary hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {tr.title}
                </Link>
              ))}

              <div className="pt-4 pb-2 flex flex-col gap-3">
                <a href="tel:+905551234567" className="flex items-center gap-3 text-sm text-[#4B5563] hover:text-[#1b4698]">
                  <Phone className="w-4 h-4 text-[#006693]" /> +90 555 123 45 67
                </a>
                <Link
                  to="/consultation"
                  className="block text-center py-3 rounded-lg bg-[#1b4698] text-white text-sm font-semibold hover:bg-[#006693] transition-colors"
                >
                  {t('common.freeConsultation')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  )
}