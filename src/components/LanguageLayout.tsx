import { useEffect } from 'react'
import { Outlet, useParams, Navigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const SUPPORTED_LANGUAGES = ['en', 'ar', 'fr', 'ru', 'es', 'tr']

export const LanguageLayout = () => {
  const { lang } = useParams<{ lang: string }>()
  const { i18n } = useTranslation()
  const location = useLocation()

  // Validate language
  const isValidLang = lang && SUPPORTED_LANGUAGES.includes(lang)

  useEffect(() => {
    if (isValidLang && lang !== i18n.language) {
      i18n.changeLanguage(lang)
    }

    // Handle RTL dynamically based on URL language parameter
    if (isValidLang) {
      document.documentElement.lang = lang
      if (lang === 'ar') {
        document.documentElement.dir = 'rtl'
      } else {
        document.documentElement.dir = 'ltr'
      }
    }
  }, [lang, i18n, isValidLang])

  // If the language parameter is invalid or missing, redirect to English
  // while keeping the rest of the path intact
  if (!isValidLang) {
    const fallbackPath = location.pathname.replace(/^\/[^/]+/, '/en')
    // If the path was just '/', it will become '/en'
    return <Navigate to={fallbackPath === '/' ? '/en' : fallbackPath} replace />
  }

  return <Outlet />
}
