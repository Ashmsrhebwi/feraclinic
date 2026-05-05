import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { motion } from 'framer-motion'
import { Shield, ArrowLeft, Mail, Phone, MapPin, Lock, Database, Eye, CreditCard, FileText, Users, Award, CheckCircle, AlertCircle, Package } from 'lucide-react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { SectionWrapper } from '../components/ui/SectionWrapper'

export function PrivacyPolicy() {
  const { t } = useTranslation()

  useSEO({ 
    title: t('footer.privacyPolicy'), 
    description: 'FeRa Clinic Privacy Policy - Comprehensive legal information including About Us, Privacy Policy, Terms of Service, Payment Security, and iyzico compliance' 
  })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[450px] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C2D]/10 to-[#13293D]/5" />
        </div>

        {/* Premium Floating Glow Effects */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gray-300/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />

        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 lg:px-10 2xl:px-16 pt-24 pb-16">
          <motion.div 
            className="w-full max-w-[94vw] sm:max-w-[680px] lg:max-w-[860px] 2xl:max-w-[980px] bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 lg:p-12 shadow-[0_30px_100px_rgba(11,28,45,0.15)] border border-white/50"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Back Link */}
            <Link to="/" className="inline-flex items-center gap-2 text-[#0B1C2D] hover:text-[#13293D] transition-all duration-300 ease mb-6 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300 ease" />
              <span className="text-sm font-bold uppercase tracking-widest">{t('common.backToHome')}</span>
            </Link>

            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="w-16 h-16 rounded-2xl bg-gray-50 text-[#0B1C2D] flex items-center justify-center mb-6"
            >
              <Shield className="w-8 h-8" />
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1] mb-6"
            >
              {t('footer.privacyPolicy')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="text-lg text-gray-600 font-light leading-relaxed"
            >
              {t('privacy.policyDescription')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <SectionWrapper padding="py-16" background="gray">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('privacy.tableOfContents')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'about', title: t('privacy.aboutUsTitle'), icon: Users },
                { id: 'privacy', title: t('privacy.privacyPolicyTitle'), icon: Lock },
                { id: 'delivery', title: t('privacy.deliveryRefundTitle'), icon: Package },
                { id: 'distance', title: t('privacy.distanceSalesTitle'), icon: FileText },
                { id: 'terms', title: t('privacy.termsOfServiceTitle'), icon: AlertCircle },
                { id: 'payment', title: t('privacy.paymentSecurityTitle'), icon: CreditCard }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-3 p-4 text-left rounded-xl border border-gray-200 hover:border-[#0B1C2D] hover:bg-gray-50 transition-all duration-300 ease group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-50 text-[#0B1C2D] flex items-center justify-center group-hover:bg-[#0B1C2D] group-hover:text-white transition-all duration-300 ease group-hover:shadow-[0_4px_12px_rgba(11,28,45,0.15)]">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700 group-hover:text-[#0B1C2D] font-medium transition-all duration-300 ease">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Legal Content Sections */}
      <SectionWrapper padding="py-20 lg:py-32" background="white">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* A) {t('privacy.aboutUsSection', 'About Us')} */}
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-br from-gray-50/50 to-white rounded-3xl p-10 border border-gray-100/60 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#0B1C2D] text-white flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold text-[#0B1C2D]">{t('privacy.aboutUsSection')}</h2>
                <p className="text-gray-600 mt-1">{t('privacy.companyInfo')}</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-[#0B1C2D] mb-3">{t('privacy.companyInfoTitle')}</h3>
                <p className="mb-4">
                  {t('privacy.companyDescription')}
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>{t('privacy.clinicName')}:</strong> FeRa Clinic</p>
                  <p><strong>{t('privacy.address')}:</strong> {t('common.clinicAddress')}</p>
                  <p><strong>{t('privacy.phone')}:</strong> {t('common.phoneNumber')}</p>
                  <p><strong>{t('privacy.email')}:</strong> {t('common.emailAddress')}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-[#0B1C2D] mb-3">{t('privacy.ourServices')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{t('privacy.service1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{t('privacy.service2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{t('privacy.service3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{t('privacy.service4')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-3">{t('privacy.websitePurpose')}</h3>
                <p className="text-gray-700">
                  {t('privacy.websiteDescription')}
                </p>
              </div>
            </div>
          </motion.section>

          {/* B) {t('privacy.privacySection', 'Privacy Policy')} */}
          <motion.section
            id="privacy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-br from-green-50/50 to-white rounded-3xl p-10 border border-green-100/60 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-green-600 text-white flex items-center justify-center">
                <Lock className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold text-green-700">{t('privacy.privacySection')}</h2>
                <p className="text-gray-600 mt-1">{t('privacy.dataProtection')}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-green-700 mb-3">{t('privacy.personalDataCollected')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{t('privacy.consultationData')}</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• {t('privacy.dataItem1')}</li>
                      <li>• {t('privacy.dataItem2')}</li>
                      <li>• {t('privacy.dataItem3')}</li>
                      <li>• {t('privacy.dataItem4')}</li>
                      <li>• {t('privacy.dataItem5')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{t('privacy.treatmentInfo')}</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• {t('privacy.dataItem6')}</li>
                      <li>• {t('privacy.dataItem7')}</li>
                      <li>• {t('privacy.dataItem8')}</li>
                      <li>• {t('privacy.dataItem9')}</li>
                      <li>• {t('privacy.dataItem10')}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-green-700 mb-3">{t('privacy.dataProcessingPurpose')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                    <span>{t('privacy.purpose1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                    <span>{t('privacy.purpose2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                    <span>{t('privacy.purpose3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                    <span>{t('privacy.purpose4')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-bold text-green-800 mb-3">{t('privacy.dataRetention')}</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• {t('privacy.retention1')}</li>
                  <li>• {t('privacy.retention2')}</li>
                  <li>• {t('privacy.retention3')}</li>
                  <li>• {t('privacy.retention4')}</li>
                  <li>• {t('privacy.retention5')}</li>
                  <li>• {t('privacy.retention6')}</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* C) {t('privacy.deliveryRefund', 'Delivery & Refund')} */}
          <motion.section
            id="delivery"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-br from-purple-50/50 to-white rounded-3xl p-10 border border-purple-100/60 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-purple-600 text-white flex items-center justify-center">
                <Package className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold text-purple-700">{t('privacy.deliveryRefund')}</h2>
                <p className="text-gray-600 mt-1">{t('privacy.serviceTerms')}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-bold text-purple-800 mb-3">{t('privacy.serviceNature')}</h3>
                <p className="text-purple-700">
                  {t('privacy.serviceNatureDesc')}
                </p>
                <ul className="mt-3 space-y-1 text-purple-700">
                  <li>• {t('privacy.paymentItem1')}</li>
                  <li>• {t('privacy.paymentItem2')}</li>
                  <li>• {t('privacy.paymentItem3')}</li>
                  <li>• {t('privacy.paymentItem4')}</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-purple-800 mb-3">{t('privacy.refundPolicy')}</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>{t('privacy.consultationCancellations')}</strong></p>
                  <ul className="space-y-1 text-sm text-gray-600 ml-4">
                    <li>• {t('privacy.refund1')}</li>
                    <li>• {t('privacy.refund2')}</li>
                    <li>• {t('privacy.refund3')}</li>
                  </ul>
                  
                  <p className="mt-4"><strong>{t('privacy.treatmentDepositPolicy')}</strong></p>
                  <ul className="space-y-1 text-sm text-gray-600 ml-4">
                    <li>• {t('privacy.refund4')}</li>
                    <li>• {t('privacy.refund5')}</li>
                    <li>• {t('privacy.refund6')}</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-purple-700 mb-3">{t('privacy.refundProcess')}</h3>
                <p className="text-gray-700">
                  {t('privacy.refundProcessDesc')}
                </p>
              </div>
            </div>
          </motion.section>

          {/* D) {t('privacy.distanceSalesAgreement', 'Distance Sales Agreement')} */}
          <motion.section
            id="distance"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-br from-orange-50/50 to-white rounded-3xl p-10 border border-orange-100/60 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-orange-600 text-white flex items-center justify-center">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold text-orange-700">{t('privacy.distanceSalesAgreement')}</h2>
                <p className="text-gray-600 mt-1">{t('privacy.legalAgreementDesc')}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-orange-700 mb-3">{t('privacy.agreementParties')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{t('privacy.serviceProvider')}</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>{t('privacy.company')}:</strong> FeRa Clinic</p>
                      <p><strong>{t('privacy.address')}:</strong> {t('common.clinicAddress')}</p>
                      <p><strong>{t('privacy.phone')}:</strong> {t('common.phoneNumber')}</p>
                      <p><strong>{t('privacy.email')}:</strong> {t('common.emailAddress')}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{t('privacy.customer')}</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>{t('privacy.customerName')}:</strong> [{t('privacy.customerNamePlaceholder')}]</p>
                      <p><strong>{t('privacy.customerAddress')}:</strong> [{t('privacy.customerAddressPlaceholder')}]</p>
                      <p><strong>{t('privacy.customerPhone')}:</strong> [{t('privacy.customerPhonePlaceholder')}]</p>
                      <p><strong>{t('privacy.customerEmail')}:</strong> [{t('privacy.customerEmailPlaceholder')}]</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-orange-700 mb-3">{t('privacy.serviceDescription')}</h3>
                <p className="text-gray-700">
                  {t('privacy.serviceDescriptionText')}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-orange-700 mb-3">{t('privacy.paymentTerms')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t('privacy.paymentSecure')}</li>
                  <li>• {t('privacy.supportedCards')}</li>
                  <li>• {t('privacy.paymentConfirmation')}</li>
                  <li>• {t('privacy.paymentReceipt')}</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="font-bold text-orange-800 mb-3">{t('privacy.consumerRights')}</h3>
                <p className="text-orange-700">
                  {t('privacy.consumerRightsText')} 
                  {t('privacy.consumerRightsDesc', 'All disputes are resolved according to Turkish consumer protection laws.')}
                </p>
              </div>
            </div>
          </motion.section>

          {/* E) {t('privacy.termsOfService', 'Terms of Service')} */}
          <motion.section
            id="terms"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-br from-red-50/50 to-white rounded-3xl p-10 border border-red-100/60 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-red-600 text-white flex items-center justify-center">
                <AlertCircle className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold text-red-700">{t('privacy.termsOfService')}</h2>
                <p className="text-gray-600 mt-1">{t('privacy.websiteDisclaimer')}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-red-700 mb-3">{t('privacy.websiteUsage')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t('privacy.websiteUsage1')}</li>
                  <li>• {t('privacy.websiteUsage2')}</li>
                  <li>• {t('privacy.websiteUsage3')}</li>
                  <li>• {t('privacy.websiteUsage4')}</li>
                  <li>• {t('privacy.websiteUsage5')}</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="font-bold text-red-800 mb-3">{t('privacy.medicalDisclaimer')}</h3>
                  <p className="text-red-700">
                    {t('privacy.medicalDisclaimerText')}
                  </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-red-800 mb-3">{t('privacy.limitationOfLiability')}</h3>
                <p className="text-gray-700">
                  {t('privacy.limitationOfLiabilityText')}
                </p>
              </div>
            </div>
          </motion.section>

          {/* F) {t('privacy.paymentSecurity', 'Payment Security')} */}
          <motion.section
            id="payment"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#F4F7FA]/50 to-white rounded-3xl p-10 border border-[rgba(11,28,45,0.10)] shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#0B1C2D] text-white flex items-center justify-center">
                <CreditCard className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold text-[#0B1C2D]">{t('privacy.paymentSecurity')}</h2>
                <p className="text-gray-600 mt-1">{t('privacy.paymentSecurityDesc')}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F4F7FA] rounded-xl p-6 border border-[rgba(11,28,45,0.10)]">
                <h3 className="font-bold text-[#0B1C2D] mb-3">{t('privacy.paymentSecurityIntegration')}</h3>
                <ul className="space-y-2 text-[#334155]">
                  <li>• {t('privacy.sslEncryption')}</li>
                  <li>• {t('privacy.pciCompliant')}</li>
                  <li>• {t('privacy.iyzicoIntegration')}</li>
                  <li>• {t('privacy.noCardStorage')}</li>
                  <li>• {t('privacy.fraudDetection')}</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-[#0B1C2D] mb-3">{t('privacy.acceptedPaymentMethods')}</h3>
                <div className="flex items-center gap-6 mt-4">
                  <div className="text-center">
                    <div className="w-16 h-10 bg-gray-600 rounded flex items-center justify-center text-white font-bold mb-2">
                      VISA
                    </div>
                    <p className="text-xs text-gray-600">{t('privacy.visaCards')}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-10 bg-red-600 rounded flex items-center justify-center text-white font-bold mb-2">
                      MC
                    </div>
                    <p className="text-xs text-gray-600">{t('privacy.mastercard')}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-10 bg-orange-600 rounded flex items-center justify-center text-white font-bold mb-2">
                      TROY
                    </div>
                    <p className="text-xs text-gray-600">{t('privacy.troyCards')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#0B1C2D] to-[#12304A] rounded-xl p-6 text-white">
                <h3 className="font-bold mb-3">{t('privacy.iyzicoPayment')}</h3>
                <p className="text-white/90">
                  {t('privacy.iyzicoDescription')}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm">{t('privacy.certifiedProvider')}</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* {t('privacy.contactInformation', 'Contact Information')} */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#0B1C2D] via-[#1e3a8a] to-[#0f172a] backdrop-blur-md rounded-3xl p-10 text-white shadow-xl shadow-black/20 border border-white/10"
          >
            <h2 className="text-3xl font-serif font-bold text-white mb-8">{t('privacy.contactInformation')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Mail className="w-8 h-8 text-white/80 mb-4" />
                <h3 className="font-bold text-white mb-2">{t('common.email')}</h3>
                <p className="text-white/80">{t('common.emailAddress')}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Phone className="w-8 h-8 text-white/80 mb-4" />
                <h3 className="font-bold text-white mb-2">{t('common.phone')}</h3>
                <p className="text-white/80">{t('common.phoneNumber')}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <MapPin className="w-8 h-8 text-white/80 mb-4" />
                <h3 className="font-bold text-white mb-2">{t('common.address')}</h3>
                <p className="text-white/80">{t('common.clinicAddress')}</p>
              </div>
            </div>
          </motion.section>

          {/* Last Updated */}
          <div className="pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              {t('legal.lastUpdated', 'Last Updated')}: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

        </div>
      </SectionWrapper>
    </div>
  )
}
