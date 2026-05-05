import { Instagram } from 'lucide-react'
import { LocalizedLink as Link } from './ui/LocalizedLink'
import { useTranslation } from 'react-i18next'

export function TopBar() {
  const { t } = useTranslation()

  return (
    <div className="w-full bg-white border-b border-gray-100/60 shadow-[0_25px_80px_rgba(11,28,45,0.12)] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 h-14 sm:h-16 lg:h-[64px] flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Premium Appointment Button */}
        <div className="flex-1 flex justify-start items-center">
          <Link
            to="/consultation"
            className="inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 h-10 sm:h-12 bg-[#0B1C2D] text-white rounded-lg hover:bg-[#0f3460] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out active:scale-95 group"
          >
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider whitespace-nowrap">{t('topbar.bookAppointment', 'Book')}</span>
          </Link>
        </div>

        {/* Center: Premium WhatsApp Block */}
        <div className="flex-[2] flex justify-center items-center hidden sm:flex">
          <a
            href="https://wa.me/905367460100?text=Hello%20Fera%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center h-10 sm:h-12 lg:h-14 w-full max-w-[320px] sm:max-w-[420px] bg-[#25D366] rounded-full hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out group"
          >
            {/* Premium WhatsApp Icon Circle */}
            <div className="absolute -left-1 sm:-left-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366] border-3 sm:border-4 border-white flex items-center justify-center text-white shadow-lg z-10">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.197-.771.967-.945 1.164-.174.197-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>

            {/* Enhanced WhatsApp Text */}
            <div className="w-full pl-8 sm:pl-12 flex items-center justify-center gap-1 sm:gap-3 px-2 sm:px-3 overflow-hidden">
              <span className="text-xs sm:text-sm font-bold text-white/90 whitespace-nowrap">
                {t('topbar.whatsappIconText', '7/24')}
              </span>
              <span className="text-xs sm:text-sm lg:text-base font-bold text-white tracking-tight whitespace-nowrap">
                {t('topbar.whatsappNumber', '+90 536 746 01 00')}
              </span>
            </div>
          </a>
        </div>

        {/* Right: Premium Instagram */}
        <div className="flex-1 flex justify-end items-center">
          <a
            href="https://instagram.com/feraclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 group hover:-translate-y-0.5 transition-all duration-300 ease-out"
          >
            <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full shadow-md" />
              <Instagram className="w-[60%] h-[60%] text-white relative z-10" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors hidden lg:block">
              {t('topbar.instagramText', 'Instagram')}
            </span>
          </a>
        </div>

      </div>
    </div>
  )
}
