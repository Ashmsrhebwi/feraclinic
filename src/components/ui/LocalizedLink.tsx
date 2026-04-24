import { Link, LinkProps } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface LocalizedLinkProps extends LinkProps {
  to: string;
}

export const LocalizedLink = ({ to, ...props }: LocalizedLinkProps) => {
  const { i18n } = useTranslation()
  const lang = i18n.language || 'en'
  
  // If the path already starts with the language, don't double prepend
  const pathPrefix = `/${lang}`
  const isAlreadyLocalized = to.startsWith(`/${lang}/`) || to === `/${lang}`
  
  // Also handle absolute URLs just in case
  const isAbsolute = to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')
  
  let localizedPath = to
  if (!isAbsolute && !isAlreadyLocalized) {
    // If it's the root path "/", it becomes "/en"
    if (to === '/') {
      localizedPath = pathPrefix
    } else {
      // "/about" becomes "/en/about"
      localizedPath = `${pathPrefix}${to.startsWith('/') ? '' : '/'}${to}`
    }
  }

  return <Link to={localizedPath} {...props} />
}
