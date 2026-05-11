import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, CheckCircle } from 'lucide-react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { useTranslation } from 'react-i18next'

export function PaymentCompliance() {
  const { t } = useTranslation()

  return (
    <div className="bg-gray-50 border-t border-[#13293D]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Security Messaging */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-[#13293D]" />
            <span className="text-sm font-semibold text-[#13293D]">{t('compliance.securePayment', 'Secure Payment Infrastructure')}</span>
          </div>
          <p className="text-xs text-[#13293D]">
            {t('compliance.cardDetails', 'Card details are processed securely by iyzico - PCI DSS Compliant')}
          </p>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-xs">
          <Link to="/privacy" className="text-[#13293D] hover:text-[#0B1C2D] transition-colors">
            {t('footer.privacyPolicy', 'Privacy Policy')}
          </Link>
          <span className="text-gray-400">•</span>
          <Link to="/terms" className="text-[#13293D] hover:text-[#0B1C2D] transition-colors">
            {t('footer.termsOfService', 'Terms of Service')}
          </Link>
          <span className="text-gray-400">•</span>
          <Link to="/delivery-refund-policy" className="text-[#13293D] hover:text-[#0B1C2D] transition-colors">
            {t('common.legalPages.deliveryRefund', 'Delivery & Refund')}
          </Link>
          <span className="text-gray-400">•</span>
          <Link to="/distance-sales-agreement" className="text-[#13293D] hover:text-[#0B1C2D] transition-colors">
            {t('common.legalPages.distanceSales', 'Distance Sales')}
          </Link>
          <span className="text-gray-400">•</span>
          <Link to="/about" className="text-[#13293D] hover:text-[#0B1C2D] transition-colors">
            {t('navigation.about', 'About Us')}
          </Link>
          <span className="text-gray-400">•</span>
          <Link to="/contact" className="text-[#13293D] hover:text-[#0B1C2D] transition-colors">
            {t('navigation.contact', 'Contact')}
          </Link>
        </div>

        {/* Payment Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* Visa */}
          <div className="bg-white rounded-lg p-3 shadow-[0_25px_80px_rgba(11,28,45,0.12)]">
            <svg viewBox="0 0 48 32" className="h-8 w-12" fill="none">
              <rect width="48" height="32" rx="4" fill="#1A1F71"/>
              <path d="M20.5 10h3.2l-1.4 12h-3.2l1.4-12zM15 10c-1.1 0-2 0.3-2.6 0.8l-0.4 2.4c0.6-0.4 1.4-0.6 2.2-0.6 0.8 0 1.2 0.3 1.2 0.9 0 0.2 0 0.4-0.1 0.6l-0.3 1.8c-0.1 0.4-0.3 0.6-0.8 0.6-0.4 0-0.8-0.2-0.8-0.6 0-0.2 0-0.4 0.1-0.6l0.3-1.8c0.2-0.8 0.8-1.5 1.9-1.5 0.5 0 0.9 0.1 1.2 0.3l0.4-2.4C17.1 10.1 16.1 10 15 10zM27 10l-0.3 2h-1.8l-0.3 2h1.8l-0.8 6h3.2l0.8-6h1.8l0.3-2h-1.8l0.3-2c0-0.2 0.1-0.4 0.3-0.4h1.8l0.3-2h-2.5c-1.1 0-2 0.8-2.2 1.8z" fill="white"/>
            </svg>
          </div>

          {/* MasterCard */}
          <div className="bg-white rounded-lg p-3 shadow-[0_25px_80px_rgba(11,28,45,0.12)]">
            <svg viewBox="0 0 48 32" className="h-8 w-12" fill="none">
              <rect width="48" height="32" rx="4" fill="#EB001B"/>
              <circle cx="18" cy="16" r="8" fill="#F79E1B"/>
              <circle cx="30" cy="16" r="8" fill="#EB001B"/>
              <path d="M24 10c-2.2 1.4-3.6 3.8-3.6 6.4s1.4 5 3.6 6.4c2.2-1.4 3.6-3.8 3.6-6.4S26.2 11.4 24 10z" fill="#FF5F00"/>
            </svg>
          </div>

          {/* iyzico ile Öde */}
          <div className="bg-white rounded-lg p-3 shadow-[0_25px_80px_rgba(11,28,45,0.12)]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">iy</span>
              </div>
              <span className="text-xs font-semibold text-[#13293D]">{t('compliance.ileOde', 'ile Öde')}</span>
            </div>
          </div>

          {/* SSL Certificate */}
          <div className="bg-white rounded-lg p-3 shadow-[0_25px_80px_rgba(11,28,45,0.12)]">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#13293D]" />
              <span className="text-xs font-semibold text-[#13293D]">{t('compliance.sslSecure', 'SSL Secure')}</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-8 pt-6 border-t border-[#13293D]">
          <p className="text-xs text-[#13293D] mb-2">
            {t('common.brandName', 'FeRa Clinic')} - {t('contact.info.locationDetail', 'Kazlıçeşme, Kennedy Cad. No:62 D:1, 34020 Zeytinburnu/İstanbul')}
          </p>
          <div className="flex justify-center items-center gap-4 text-xs text-[#13293D]">
            <span>{t('common.emailAddress', 'consultation@feraclinic.com')}</span>
            <span>•</span>
            <span>{t('common.phoneNumber', '+90 536 746 01 00')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

