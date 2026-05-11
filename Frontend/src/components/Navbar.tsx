import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Globe, Search } from 'lucide-react'
import { treatments } from '../data/treatments'
import { LocalizedLink as Link } from './ui/LocalizedLink'
import { useTranslation } from 'react-i18next'
import { SearchModal } from './ui/SearchModal'
import { TopBar } from './TopBar'


const LANGUAGES = [
  { code: 'en', label: 'languages.english', flag: '🇬🇧', countryCode: 'GB' },
  { code: 'ar', label: 'languages.arabic', flag: '🇸🇦', countryCode: 'SA' },
  { code: 'fr', label: 'languages.french', flag: '🇫🇷', countryCode: 'FR' },
  { code: 'ru', label: 'languages.russian', flag: '🇷🇺', countryCode: 'RU' },
  { code: 'es', label: 'languages.spanish', flag: '🇪🇸', countryCode: 'ES' },
  { code: 'tr', label: 'languages.turkish', flag: '🇹🇷', countryCode: 'TR' },
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

  /* Body scroll locking when mobile menu is open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

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
      className={`sticky top-0 inset-x-0 z-[999] bg-white/95 backdrop-blur-xl border border-[rgba(11,28,45,0.10)] overflow-hidden
          transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}
    >
      <div className="w-full max-w-full mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">

        {/* ── PREMIUM BRAND LOGO ── */}
        <div className="flex flex-col leading-tight flex-shrink-0 max-w-[260px] lg:max-w-[300px] mr-4 lg:mr-8 min-w-0">
          <Link to="/" className="flex items-center gap-3 lg:gap-4 group transition-all duration-300 hover:opacity-80" aria-label={t('a11y.home', 'FeRa Clinic – Home')}>
            <img 
              src="/fera-logo.png" 
              alt={t('common.brandName', 'FeRa Clinic')}
              className="w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0B1C2D] transition-colors duration-300 group-hover:text-[#0B1C2D]">{t('common.brandName', 'FeRa Clinic')}</span>
              <span className="text-[10px] lg:text-[12px] italic text-[#64748B] leading-tight truncate hidden sm:block">{t('common.tagline', 'Premium Dental Care Istanbul')}</span>
            </div>
          </Link>
        </div>

        {/* ── PREMIUM DESKTOP LINKS (center) ── */}
        <nav className="hidden xl:flex items-center gap-5 xl:gap-6 flex-shrink-0 min-w-0">

          <Link
            to="/"
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ease-out
                        ${isActive('/') 
                ? 'text-[#0B1C2D] bg-[#F4F7FA] font-semibold'
                : 'text-[#334155] hover:text-[#0B1C2D] hover:bg-[#F4F7FA]'}`}
          >
            {t('navigation.home')}
          </Link>

          {/* Treatments dropdown */}
          <div className="nav-dropdown group relative">
            <Link
              to="/treatments"
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ease-out
                          ${isActive('/treatments')
                  ? 'text-[#0B1C2D] bg-[#F4F7FA] font-semibold'
                  : 'text-[#334155] hover:text-[#0B1C2D] hover:bg-[#F4F7FA]'}`}
            >
              {t('navigation.treatments')} <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180 opacity-60" />
            </Link>
            <div 
              className="nav-dropdown-menu absolute top-full start-0 mt-1 w-64
                            bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl
                            transition-all duration-500 z-[9999] p-2 space-y-1
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
                                  ? 'bg-[#F4F7FA] text-[#0B1C2D] font-semibold' 
                                  : 'text-[#334155] hover:bg-[#F4F7FA] hover:text-[#0B1C2D]'}`}
                  >
                    {tr.title}
                  </Link>
                );
              })}
              <div className="border-t border-gray-100 my-1 pt-1">
                <Link
                  to="/treatments"
                  onClick={() => setActiveDropdown(null)}
                  className="h-11 px-4 flex items-center justify-between rounded-lg text-xs font-bold uppercase tracking-widest text-[#13293D] hover:bg-gray-100 transition-all duration-300 group/all"
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
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ease-out
                          ${isActive('/gallery')
                  ? 'text-[#0B1C2D] bg-[#F4F7FA] font-semibold'
                  : 'text-[#334155] hover:text-[#0B1C2D] hover:bg-[#F4F7FA]'}`}
            >
              {t('navigation.gallery')} <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180 opacity-60" />
            </Link>
            <div 
              className="nav-dropdown-menu absolute top-full start-0 mt-1 w-64
                            bg-white/95 backdrop-blur-xl border border-[rgba(11,28,45,0.10)] rounded-2xl shadow-[0_20px_70px_rgba(11,28,45,0.08)]
                            transition-all duration-500 z-[9999] p-2 space-y-1
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
                                  ? 'bg-[#F4F7FA] text-[#0B1C2D] font-semibold' 
                                  : 'text-[#334155] hover:bg-[#F4F7FA] hover:text-[#0B1C2D]'}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="border-t border-gray-100 my-1 pt-1">
                <Link
                  to="/gallery"
                  onClick={() => setActiveDropdown(null)}
                  className="h-11 px-4 flex items-center justify-between rounded-lg text-xs font-bold uppercase tracking-widest text-[#0B1C2D] hover:bg-[#F4F7FA] transition-all duration-300 group/all"
                >
                  {t('navigation.gallery')} <span className="inline-block transition-transform duration-300 group-hover/all:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>

          {[
            { label: t('navigation.about'), href: '/about' },
            { label: t('navigation.dentalTourism'), href: '/dental-tourism' },
            { label: t('navigation.blog'), href: '/blog' },
            { label: t('navigation.contact'), href: '/contact' },
          ].map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ease-out
                          ${isActive(link.href)
                  ? 'text-[#0B1C2D] bg-[#F4F7FA] font-semibold'
                  : 'text-[#334155] hover:text-[#0B1C2D] hover:bg-[#F4F7FA]'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── PREMIUM CTA + MOBILE TOGGLE ── */}
        <div className="flex items-center gap-3 xl:gap-6 flex-shrink-0 min-w-0">

          {/* Premium Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="hidden xl:flex items-center justify-center w-10 h-10 rounded-xl text-[#64748B] hover:bg-[#F4F7FA] hover:text-[#0B1C2D] transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-95 shadow-sm"
            aria-label={t('a11y.search', 'Search')}
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Premium Language Switcher */}
          <div className="nav-dropdown group relative hidden xl:flex">
            <div
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-300 ease-out cursor-pointer hover:bg-[#F4F7FA] hover:-translate-y-0.5 shadow-sm overflow-visible"
              aria-label={t('a11y.changeLanguage', 'Change language')}
            >
              <Globe className="w-5 h-5 shrink-0 text-slate-600 group-hover:text-slate-700 transition-colors" />
              <span className="text-[10px] font-bold uppercase hidden lg:block tracking-widest text-slate-700 group-hover:text-[#0B1C2D] transition-colors">{lang}</span>
            </div>
            <div 
              className="nav-dropdown-menu absolute top-full end-0 mt-3 w-64
                            bg-white/98 backdrop-blur-2xl border border-[rgba(11,28,45,0.08)] rounded-[1.25rem] shadow-[0_15px_45px_rgba(11,28,45,0.08)]
                            transition-all duration-500 z-[9999] p-2 space-y-0.5
                            opacity-0 invisible -translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
            >
              <div className="grid grid-cols-1">
                {LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    onClick={() => handleLangSwitch(l.code)}
                    className={`h-12 w-full px-4 flex items-center justify-between rounded-xl text-sm transition-all duration-300 group/lang
                                ${lang === l.code 
                                  ? 'bg-[#F4F7FA] text-[#0B1C2D] font-bold' 
                                  : 'text-[#64748B] hover:bg-[#F4F7FA] hover:text-[#0B1C2D]'}`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Fixed width container for flag to ensure alignment */}
                      <span className="w-7 h-7 flex items-center justify-center text-xl filter drop-shadow-sm transition-transform group-hover/lang:scale-110">
                        {l.flag}
                      </span>
                      <span className="tracking-tight">{t(l.label)}</span>
                    </div>
                    <span className={`text-[10px] font-bold tracking-widest transition-opacity opacity-30 group-hover/lang:opacity-100`}>
                      {l.countryCode}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Premium Free Consultation Button */}
          <Link
            to="/consultation"
            className="hidden 2xl:inline-flex items-center gap-2 whitespace-nowrap px-6 py-3 rounded-full
                       bg-[#0B1C2D] text-white text-sm font-bold uppercase tracking-widest
                       hover:bg-[#12304A] hover:-translate-y-0.5 hover:shadow-lg active:scale-95 transition-all duration-300 ease-out shadow-md"
          >
            {t('common.freeConsultation')}
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="flex xl:hidden p-2 rounded-lg text-[#0B1C2D] hover:bg-[#F4F7FA] active:scale-90 transition-all"
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
            className="xl:hidden overflow-hidden bg-white border-t border-[rgba(11,28,45,0.10)]"
          >
            <div className="px-4 sm:px-6 py-3 sm:py-4 space-y-1">
              {[
                { label: t('navigation.home'), href: '/' },
                { label: t('navigation.about'), href: '/about' },
                { label: t('navigation.dentalTourism'), href: '/dental-tourism' },
                { label: t('navigation.gallery'), href: '/gallery' },
                { label: t('navigation.blog'), href: '/blog' },
                { label: t('navigation.contact'), href: '/contact' },
              ].map(l => (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`block py-3 px-4 text-sm font-medium rounded-xl transition-all
                              ${isActive(l.href) 
                                ? 'bg-[#F4F7FA] text-[#0B1C2D] font-semibold' 
                                : 'text-[#334155] hover:bg-[#F4F7FA]'}`}
                >
                  {l.label}
                </Link>
              ))}

              <p className="pt-4 pb-2 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B1C2D] opacity-60">{t('navigation.treatments')}</p>
              {getLocalizedTreatments(t).slice(0, 6).map(tr => (
                <Link
                  key={tr.id}
                  to={`/treatments/${tr.slug}`}
                  className="block py-2.5 px-4 text-sm text-[#64748B] hover:text-[#0B1C2D] hover:bg-[#F4F7FA] rounded-lg transition-colors"
                >
                  {tr.title}
                </Link>
              ))}

              <div className="pt-4 pb-2 flex flex-col gap-3">
                <a href="tel:+905367460100" className="flex items-center gap-3 text-sm text-[#64748B] hover:text-[#0B1C2D]">
                  <Phone className="w-4 h-4 text-[#0B1C2D]" /> +90 536 746 01 00
                </a>
                
                {/* Mobile Search Button */}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center gap-3 text-sm text-[#64748B] hover:text-[#0B1C2D] transition-colors"
                >
                  <Search className="w-4 h-4 text-[#0B1C2D]" /> {t('navigation.search', 'Search')}
                </button>
                
                {/* Mobile Language Options */}
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B1C2D] opacity-60">{t('navigation.language', 'Language')}</p>
                  <div className="grid grid-cols-2 xs:grid-cols-3 gap-2">
                    {LANGUAGES.map(l => (
                      <button
                        key={l.code}
                        onClick={() => handleLangSwitch(l.code)}
                        className={`py-2.5 px-3 flex items-center gap-2 rounded-xl text-xs transition-all min-w-0
                                    ${lang === l.code 
                                      ? 'bg-[#0B1C2D] text-white font-bold' 
                                      : 'bg-[#F4F7FA] text-[#334155] border border-transparent'}`}
                      >
                        <span className="text-base shrink-0">{l.flag}</span>
                        <span className="uppercase font-bold tracking-widest truncate">{l.code}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <Link
                  to="/consultation"
                  className="block text-center py-3 rounded-lg bg-[#0B1C2D] text-white text-sm font-semibold hover:bg-[#12304A] transition-colors"
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