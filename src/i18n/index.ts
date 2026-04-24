import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.json'
import ar from './locales/ar.json'
import tr from './locales/tr.json'
import ru from './locales/ru.json'
import fr from './locales/fr.json'
import es from './locales/es.json'

const resources = {
  en: { translation: en },
  ar: { translation: ar },
  tr: { translation: tr },
  ru: { translation: ru },
  fr: { translation: fr },
  es: { translation: es }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  })

export default i18n
