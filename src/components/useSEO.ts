import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES } from './LanguageLayout'

interface SEOProps {
  title?: string
  description?: string
  ogImage?: string
}

export function useSEO({ title, description, ogImage }: SEOProps = {}) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  
  const siteName = t('common.clinicName', 'FeRa Clinic')
  const finalTitle = title ? `${title} | ${siteName}` : `${siteName} — ${t('hero.subtitle', 'Premium Dental Care in Istanbul')}`

  useEffect(() => {
    // 1. Set document title
    document.title = finalTitle

    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    
    // Default description if none provided
    const defaultDesc = t('common.defaultDesc', 'Experience premium dental care in Istanbul. Specialist surgeons, 3D technology, and VIP hospitality for international patients.')
    metaDescription.setAttribute('content', description || defaultDesc)

    // 3. Set Open Graph tags
    let metaOgTitle = document.querySelector('meta[property="og:title"]')
    if (!metaOgTitle) {
      metaOgTitle = document.createElement('meta')
      metaOgTitle.setAttribute('property', 'og:title')
      document.head.appendChild(metaOgTitle)
    }
    metaOgTitle.setAttribute('content', finalTitle)

    if (ogImage) {
      let metaOgImage = document.querySelector('meta[property="og:image"]')
      if (!metaOgImage) {
        metaOgImage = document.createElement('meta')
        metaOgImage.setAttribute('property', 'og:image')
        document.head.appendChild(metaOgImage)
      }
      metaOgImage.setAttribute('content', ogImage)
    }

    // 4. Update / Add hreflang tags for SEO (Multilingual Support)
    const currentPath = window.location.pathname.replace(new RegExp(`^/${lang}`), '') || '/'
    
    SUPPORTED_LANGUAGES.forEach(supportedLang => {
      let linkTag = document.querySelector(`link[rel="alternate"][hreflang="${supportedLang}"]`)
      if (!linkTag) {
        linkTag = document.createElement('link')
        linkTag.setAttribute('rel', 'alternate')
        linkTag.setAttribute('hreflang', supportedLang)
        document.head.appendChild(linkTag)
      }
      
      // Compute correct URL
      const origin = window.location.origin
      const localizedPath = currentPath === '/' ? `/${supportedLang}` : `/${supportedLang}${currentPath}`
      linkTag.setAttribute('href', `${origin}${localizedPath}`)
    })

    // 5. Add x-default hreflang pointing to english
    let xDefaultTag = document.querySelector('link[rel="alternate"][hreflang="x-default"]')
    if (!xDefaultTag) {
      xDefaultTag = document.createElement('link')
      xDefaultTag.setAttribute('rel', 'alternate')
      xDefaultTag.setAttribute('hreflang', 'x-default')
      document.head.appendChild(xDefaultTag)
    }
    const origin = window.location.origin
    const defaultPath = currentPath === '/' ? `/en` : `/en${currentPath}`
    xDefaultTag.setAttribute('href', `${origin}${defaultPath}`)

  }, [lang, finalTitle, description, ogImage])
}
