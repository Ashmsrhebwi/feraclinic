import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { ArrowLeft, Shield, Lock, Package, FileText, CreditCard, Users, Phone, Mail, MapPin, CheckCircle, AlertTriangle } from 'lucide-react'

export function PrivacyProtocols() {
  const { t, i18n } = useTranslation()
  const isTR = i18n.language === 'tr'

  useSEO({
    title: t('privacyProtocols.pageTitle', 'Privacy Protocols') + ' — FeRa Clinic',
    description: t('privacyProtocols.pageSubtitle', 'Legal compliance, payment security, and company information for FeRa Clinic'),
  })

  const sections = [
    { id: 'about',    label: t('privacyProtocols.aboutTitle', 'About Us'),                icon: Users },
    { id: 'ssl',      label: t('privacyProtocols.sslTitle', 'SSL & Secure Payment'),      icon: Shield },
    { id: 'delivery', label: t('privacyProtocols.deliveryTitle', 'Delivery & Return'),    icon: Package },
    { id: 'privacy',  label: t('privacyProtocols.privacyTitle', 'Privacy Policy'),         icon: Lock },
    { id: 'distance', label: t('privacyProtocols.distanceTitle', 'Distance Sales'),        icon: FileText },
    { id: 'payment',  label: t('privacyProtocols.paymentTitle', 'Payment Security'),       icon: CreditCard },
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFB] font-sans">
      {/* ── Header ── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#0B1C2D] transition-colors mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t('privacyProtocols.backHome', 'Back to Home')}
          </Link>
          <h1 className="text-3xl font-bold text-[#0B1C2D] mb-2">
            {t('privacyProtocols.pageTitle', 'Privacy Protocols')}
          </h1>
          <p className="text-gray-500 text-sm">
            {t('privacyProtocols.pageSubtitle', 'Legal compliance, payment security, and company information for FeRa Clinic')}
          </p>
          <p className="text-xs text-gray-400 mt-2">
            {t('privacyProtocols.lastUpdated', 'Last Updated')}: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* ── Sidebar TOC ── */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              {t('privacyProtocols.tocTitle', 'Table of Contents')}
            </p>
            <nav className="space-y-1">
              {sections.map(s => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0B1C2D] py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <s.icon className="w-4 h-4 flex-shrink-0" />
                  <span>{s.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="lg:col-span-3 space-y-8">

          {/* 1. About Us */}
          <section id="about" className="bg-white rounded-xl border border-gray-200 p-8 scroll-mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#0B1C2D] rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0B1C2D]">{t('privacyProtocols.aboutTitle', 'About Us')}</h2>
                <p className="text-xs text-gray-400">{t('privacyProtocols.aboutSubtitle', 'Company & Clinic Information')}</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {t('privacyProtocols.aboutDesc', 'FeRa Clinic is a premium dental clinic located in Istanbul, Turkey.')}
            </p>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-5 mb-5">
              <h3 className="text-sm font-bold text-[#0B1C2D] mb-3">{t('privacyProtocols.companyInfoTitle', 'Company Information')}</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex gap-2"><dt className="font-semibold text-gray-600 w-36 flex-shrink-0">{t('privacyProtocols.clinicName', 'Clinic Name')}:</dt><dd className="text-gray-800">{t('privacyProtocols.placeholderLegalName')}</dd></div>
                <div className="flex gap-2"><dt className="font-semibold text-gray-600 w-36 flex-shrink-0">{t('privacyProtocols.taxNumber', 'Tax Number')}:</dt><dd className="text-gray-800 font-mono">{t('privacyProtocols.placeholderTaxNo')}</dd></div>
                <div className="flex gap-2"><dt className="font-semibold text-gray-600 w-36 flex-shrink-0">{t('privacyProtocols.tradeRegistry', 'Trade Registry No')}:</dt><dd className="text-gray-800 font-mono">{t('privacyProtocols.placeholderTradeRegistry')}</dd></div>
                <div className="flex gap-2"><dt className="font-semibold text-gray-600 w-36 flex-shrink-0">{t('privacyProtocols.address', 'Address')}:</dt><dd className="text-gray-800">Kazlıçeşme, Kennedy Cad. No:62 D:1, 34020 Zeytinburnu / İstanbul, Türkiye</dd></div>
                <div className="flex gap-2"><dt className="font-semibold text-gray-600 w-36 flex-shrink-0">{t('privacyProtocols.phone', 'Phone')}:</dt><dd className="text-gray-800">+90 536 746 01 00</dd></div>
                <div className="flex gap-2"><dt className="font-semibold text-gray-600 w-36 flex-shrink-0">{t('privacyProtocols.email', 'Email')}:</dt><dd className="text-gray-800">consultation@feraclinic.com</dd></div>
                <div className="flex gap-2"><dt className="font-semibold text-gray-600 w-36 flex-shrink-0">{t('privacyProtocols.website', 'Website')}:</dt><dd className="text-gray-800">www.feraclinic.com</dd></div>
              </dl>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
              <h3 className="text-sm font-bold text-[#0B1C2D] mb-3">{t('privacyProtocols.servicesTitle', 'Our Services')}</h3>
              <ul className="space-y-1.5 text-sm">
                {['service1','service2','service3','service4','service5'].map(k => (
                  <li key={k} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {t(`privacyProtocols.${k}`)}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 2. SSL */}
          <section id="ssl" className="bg-white rounded-xl border border-gray-200 p-8 scroll-mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0B1C2D]">{t('privacyProtocols.sslTitle', 'SSL & Secure Payment Notice')}</h2>
                <p className="text-xs text-gray-400">{t('privacyProtocols.sslSubtitle', '256-bit SSL Encrypted Transactions')}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">{t('privacyProtocols.sslDesc')}</p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 text-sm leading-relaxed">{t('privacyProtocols.sslPoints')}</p>
            </div>
          </section>

          {/* 3. Delivery & Return */}
          <section id="delivery" className="bg-white rounded-xl border border-gray-200 p-8 scroll-mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0B1C2D]">{t('privacyProtocols.deliveryTitle', 'Delivery & Return Policy')}</h2>
                <p className="text-xs text-gray-400">{t('privacyProtocols.deliverySubtitle', 'Service Terms & Cancellation Policy')}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                <h3 className="text-sm font-bold text-[#0B1C2D] mb-2">{t('privacyProtocols.serviceNatureTitle')}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{t('privacyProtocols.serviceNatureDesc')}</p>
              </div>

              <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                <h3 className="text-sm font-bold text-[#0B1C2D] mb-3">{t('privacyProtocols.cancellationTitle')}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {['cancellation1','cancellation2','cancellation3'].map(k => (
                    <li key={k} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                      {t(`privacyProtocols.${k}`)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                <h3 className="text-sm font-bold text-[#0B1C2D] mb-3">{t('privacyProtocols.refundTitle')}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {['refund1','refund2','refund3'].map(k => (
                    <li key={k} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                      {t(`privacyProtocols.${k}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Privacy Policy */}
          <section id="privacy" className="bg-white rounded-xl border border-gray-200 p-8 scroll-mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0B1C2D]">{t('privacyProtocols.privacyTitle', 'Privacy Policy')}</h2>
                <p className="text-xs text-gray-400">{t('privacyProtocols.privacySubtitle', 'Data Collection & Protection')}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                <h3 className="text-sm font-bold text-[#0B1C2D] mb-3">{t('privacyProtocols.dataCollectedTitle')}</h3>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  {['dataCollected1','dataCollected2','dataCollected3'].map(k => (
                    <li key={k} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      {t(`privacyProtocols.${k}`)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                <h3 className="text-sm font-bold text-[#0B1C2D] mb-3">{t('privacyProtocols.dataPurposeTitle')}</h3>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  {['dataPurpose1','dataPurpose2','dataPurpose3','dataPurpose4'].map(k => (
                    <li key={k} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      {t(`privacyProtocols.${k}`)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                <h3 className="text-sm font-bold text-[#0B1C2D] mb-3">{t('privacyProtocols.dataRetentionTitle')}</h3>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  {['dataRetention1','dataRetention2','dataRetention3'].map(k => (
                    <li key={k} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      {t(`privacyProtocols.${k}`)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-blue-800 text-sm">{t('privacyProtocols.kvkkNotice')}</p>
              </div>
            </div>
          </section>

          {/* 5. Distance Sales Agreement */}
          <section id="distance" className="bg-white rounded-xl border border-gray-200 p-8 scroll-mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0B1C2D]">{t('privacyProtocols.distanceTitle', 'Distance Sales Agreement')}</h2>
                <p className="text-xs text-gray-400">{t('privacyProtocols.distanceSubtitle')}</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Parties */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                  <h3 className="text-sm font-bold text-[#0B1C2D] mb-3">{t('privacyProtocols.sellerTitle')}</h3>
                  <dl className="space-y-1.5 text-sm">
                    <div className="flex flex-col"><dt className="font-semibold text-gray-500 text-xs">{t('privacyProtocols.clinicName')}:</dt><dd className="text-gray-800">FeRa Clinic</dd></div>
                    <div className="flex flex-col"><dt className="font-semibold text-gray-500 text-xs">{t('privacyProtocols.address')}:</dt><dd className="text-gray-800">Kazlıçeşme, Kennedy Cad. No:62 D:1, Zeytinburnu / İstanbul</dd></div>
                    <div className="flex flex-col"><dt className="font-semibold text-gray-500 text-xs">{t('privacyProtocols.email')}:</dt><dd className="text-gray-800">consultation@feraclinic.com</dd></div>
                    <div className="flex flex-col"><dt className="font-semibold text-gray-500 text-xs">{t('privacyProtocols.phone')}:</dt><dd className="text-gray-800">+90 536 746 01 00</dd></div>
                  </dl>
                </div>
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                  <h3 className="text-sm font-bold text-[#0B1C2D] mb-3">{t('privacyProtocols.buyerTitle')}</h3>
                  <p className="text-sm text-gray-500 italic">{t('privacyProtocols.buyerPlaceholder')}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                <h3 className="text-sm font-bold text-[#0B1C2D] mb-2">{t('privacyProtocols.serviceDescTitle')}</h3>
                <p className="text-sm text-gray-700">{t('privacyProtocols.serviceDescText')}</p>
              </div>

              <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                <h3 className="text-sm font-bold text-[#0B1C2D] mb-3">{t('privacyProtocols.paymentTermsTitle')}</h3>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  {['paymentTerms1','paymentTerms2','paymentTerms3','paymentTerms4'].map(k => (
                    <li key={k} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                      {t(`privacyProtocols.${k}`)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
                <h3 className="text-sm font-bold text-orange-800 mb-2">{t('privacyProtocols.rightOfWithdrawal')}</h3>
                <p className="text-sm text-orange-700">{t('privacyProtocols.rightOfWithdrawalText')}</p>
              </div>

              <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                <h3 className="text-sm font-bold text-[#0B1C2D] mb-2">{t('privacyProtocols.disputeTitle')}</h3>
                <p className="text-sm text-gray-700">{t('privacyProtocols.disputeText')}</p>
              </div>
            </div>
          </section>

          {/* 6. Payment Security + Logos */}
          <section id="payment" className="bg-white rounded-xl border border-gray-200 p-8 scroll-mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#0B1C2D] rounded-xl flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0B1C2D]">{t('privacyProtocols.paymentTitle', 'Payment Security')}</h2>
                <p className="text-xs text-gray-400">{t('privacyProtocols.paymentSubtitle')}</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-6">{t('privacyProtocols.paymentDesc')}</p>

            {/* iyzico badge — language-aware */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                {t('privacyProtocols.acceptedCardsTitle', 'Accepted Payment Methods')}
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {/* iyzico pay badge (language-aware) */}
                <img
                  src={isTR ? '/images/payment/iyzico-pay-tr-horizontal.svg' : '/images/payment/iyzico-pay-en-horizontal.svg'}
                  alt={t('privacyProtocols.paymentBadgeAlt', 'Pay with iyzico')}
                  className="h-10 w-auto object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
            </div>

            {/* iyzico footer band (Visa + MC + Troy + iyzico) */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                {t('privacyProtocols.iyzicoLabel', 'iyzico')} — Visa · Mastercard · Troy
              </p>
              <img
                src="/images/payment/iyzico-footer-band.svg"
                alt={t('privacyProtocols.iyzicoFooterAlt', 'Secure payment by iyzico')}
                className="h-12 w-auto object-contain max-w-full"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
              <h3 className="text-sm font-bold text-[#0B1C2D] mb-3">{t('privacyProtocols.securityFeatures')}</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {['security1','security2','security3','security4','security5'].map(k => (
                  <li key={k} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {t(`privacyProtocols.${k}`)}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 7. Contact */}
          <section className="bg-[#0B1C2D] rounded-xl p-8 text-white">
            <h2 className="text-xl font-bold mb-2">{t('privacyProtocols.contactTitle', 'Contact Information')}</h2>
            <p className="text-white/60 text-sm mb-6">{t('privacyProtocols.contactSubtitle', 'Reach Our Team')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-xl p-5 border border-white/15">
                <Mail className="w-5 h-5 text-white/70 mb-3" />
                <p className="text-xs text-white/50 uppercase tracking-wider mb-1">{t('privacyProtocols.emailLabel', 'Email')}</p>
                <a href="mailto:consultation@feraclinic.com" className="text-sm text-white hover:text-white/80 transition-colors">consultation@feraclinic.com</a>
              </div>
              <div className="bg-white/10 rounded-xl p-5 border border-white/15">
                <Phone className="w-5 h-5 text-white/70 mb-3" />
                <p className="text-xs text-white/50 uppercase tracking-wider mb-1">{t('privacyProtocols.phoneLabel', 'Phone')}</p>
                <a href="tel:+905367460100" className="text-sm text-white hover:text-white/80 transition-colors">+90 536 746 01 00</a>
              </div>
              <div className="bg-white/10 rounded-xl p-5 border border-white/15">
                <MapPin className="w-5 h-5 text-white/70 mb-3" />
                <p className="text-xs text-white/50 uppercase tracking-wider mb-1">{t('privacyProtocols.addressLabel', 'Address')}</p>
                <p className="text-sm text-white/90 leading-relaxed">Kazlıçeşme, Kennedy Cad. No:62 D:1, 34020 Zeytinburnu / İstanbul</p>
              </div>
            </div>
            <p className="text-white/40 text-xs mt-4">{t('privacyProtocols.workingHours')}: {t('privacyProtocols.workingHoursValue')}</p>
          </section>



        </main>
      </div>
    </div>
  )
}
