import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { treatments } from '../data/treatments'

/* ─── dropdown item shape ─── */
interface NavItem {
  label: string
  href: string
}

const galleryLinks: NavItem[] = [
  { label: 'Before & After', href: '/gallery#before-after' },
  { label: 'Clinic Photos', href: '/gallery#clinic-photos' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)   // mobile menu
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  /* Compact padding after a tiny scroll */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  /* Close mobile menu on route change */
  useEffect(() => { setOpen(false) }, [location.pathname + location.hash])

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white border-b border-[#E2E8F0]
                  transition-shadow duration-200 ${scrolled ? 'shadow-[0_2px_12px_rgba(27,70,152,0.10)]' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* ── LOGO ── */}
        <Link to="/" className="flex items-center shrink-0" aria-label="FeRa Clinic – Home">
          <img
            src="/logofera.png"
            alt="FeRa Clinic"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* ── DESKTOP LINKS (center) ── */}
        <nav className="hidden lg:flex items-center gap-1">

          <Link
            to="/"
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                        ${isActive('/') && location.pathname === '/'
                ? 'text-[#006693]'
                : 'text-[#1b4698]/80 hover:text-[#006693] hover:bg-[#F5F7FA]'}`}
          >
            Home
          </Link>

          {/* Treatments dropdown */}
          <div className="nav-dropdown relative">
            <button
              className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors
                          ${isActive('/treatments')
                  ? 'text-[#006693]'
                  : 'text-[#1b4698]/80 hover:text-[#006693] hover:bg-[#F5F7FA]'}`}
            >
              Treatments <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            <div className="nav-dropdown-menu absolute top-full left-0 mt-1 w-56
                            bg-white border border-[#E2E8F0] rounded-xl shadow-[0_8px_32px_rgba(27,70,152,0.13)]
                            opacity-0 invisible translate-y-1
                            transition-all duration-150 z-50 py-1">
              {treatments.map(t => (
                <Link
                  key={t.id}
                  to={`/treatments/${t.slug}`}
                  className="block px-4 py-2.5 text-sm text-[#1b4698]/80 hover:text-[#006693] hover:bg-[#F5F7FA] transition-colors"
                >
                  {t.title}
                </Link>
              ))}
              <div className="border-t border-[#E2E8F0] mt-1 pt-1">
                <Link
                  to="/treatments"
                  className="block px-4 py-2.5 text-sm font-semibold text-[#006693] hover:bg-[#F5F7FA] transition-colors"
                >
                  All Treatments →
                </Link>
              </div>
            </div>
          </div>

          {/* Gallery dropdown */}
          <div className="nav-dropdown relative">
            <button
              className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors
                          ${isActive('/gallery')
                  ? 'text-[#006693]'
                  : 'text-[#1b4698]/80 hover:text-[#006693] hover:bg-[#F5F7FA]'}`}
            >
              Gallery <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            <div className="nav-dropdown-menu absolute top-full left-0 mt-1 w-48
                            bg-white border border-[#E2E8F0] rounded-xl shadow-[0_8px_32px_rgba(27,70,152,0.13)]
                            opacity-0 invisible translate-y-1
                            transition-all duration-150 z-50 py-1">
              {galleryLinks.map(item => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-4 py-2.5 text-sm text-[#1b4698]/80 hover:text-[#006693] hover:bg-[#F5F7FA] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {[
            { label: 'About', href: '/about' },
            { label: 'Dental Tourism', href: '/dental-tourism' },
            { label: 'Contact', href: '/contact' },
          ].map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                          ${isActive(link.href)
                  ? 'text-[#006693]'
                  : 'text-[#1b4698]/80 hover:text-[#006693] hover:bg-[#F5F7FA]'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── CTA + MOBILE TOGGLE ── */}
        <div className="flex items-center gap-3">
          <Link
            to="/consultation"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                       bg-[#1b4698] text-white text-sm font-semibold
                       hover:bg-[#006693] transition-colors duration-200"
          >
            Free Consultation
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-[#1b4698] hover:bg-[#F5F7FA] transition-colors"
            aria-label="Toggle menu"
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
            className="lg:hidden overflow-hidden bg-white border-t border-[#E2E8F0]"
          >
            <div className="px-6 py-4 space-y-1">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Dental Tourism', href: '/dental-tourism' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map(l => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="block py-2.5 text-sm font-medium text-[#1b4698] border-b border-[#F5F7FA] hover:text-[#006693] transition-colors"
                >
                  {l.label}
                </Link>
              ))}

              <p className="pt-2 pb-1 text-[10px] font-semibold uppercase tracking-widest text-[#006693]/50">Treatments</p>
              {treatments.slice(0, 6).map(t => (
                <Link
                  key={t.id}
                  to={`/treatments/${t.slug}`}
                  className="block py-2 text-sm text-[#1b4698]/80 hover:text-[#006693] transition-colors"
                >
                  {t.title}
                </Link>
              ))}

              <div className="pt-4 pb-2 flex flex-col gap-3">
                <a href="tel:+905551234567" className="flex items-center gap-2 text-sm font-medium text-[#1b4698]">
                  <Phone className="w-4 h-4 text-[#006693]" /> +90 555 123 45 67
                </a>
                <Link
                  to="/consultation"
                  className="block text-center py-3 rounded-lg bg-[#1b4698] text-white text-sm font-semibold hover:bg-[#006693] transition-colors"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}