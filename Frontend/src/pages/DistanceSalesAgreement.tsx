import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { motion } from 'framer-motion'
import { FileText, ArrowLeft, Building2, User, CreditCard, Calendar, MapPin, Phone, Mail } from 'lucide-react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { SectionWrapper } from '../components/ui/SectionWrapper'

export function DistanceSalesAgreement() {
  const { t } = useTranslation()

  useSEO({ 
    title: t('common.legalPages.distanceSales'), 
    description: 'FeRa Clinic Distance Sales Agreement - Medical service payment agreement for dental treatments and consultations' 
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[450px] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C2D]/10 to-[#13293D]/5" />
        </div>

        {/* Premium Floating Glow Effects */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-navy-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-navy-300/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />

        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 lg:px-10 2xl:px-16 pt-24 pb-16">
          <motion.div 
            className="w-full max-w-[94vw] sm:max-w-[680px] lg:max-w-[860px] 2xl:max-w-[980px] bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 lg:p-12 shadow-[0_25px_80px_rgba(11,28,45,0.12)] border border-white/50"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Back Link */}
            <Link to="/" className="inline-flex items-center gap-2 text-[#0B1C2D] hover:text-[#008BC9] transition-colors mb-6 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-widest">{t('common.backToHome', 'Back to Home')}</span>
            </Link>

            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="w-16 h-16 rounded-2xl bg-gray-50 text-[#0B1C2D] flex items-center justify-center mb-6"
            >
              <FileText className="w-8 h-8" />
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1] mb-6"
            >
              {t('distance.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="text-lg text-gray-600 font-light leading-relaxed"
            >
              {t('distance.description')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Agreement Content */}
      <SectionWrapper padding="py-20 lg:py-32" background="white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none space-y-12"
          >
            {/* Agreement Header */}
            <section className="bg-gray-50/50 rounded-2xl p-8 border border-gray-100/60">
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-4">{t('distance.agreementTitle')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('distance.agreementIntro')}
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                {t('distance.agreementAcceptance')}
              </p>
            </section>

            {/* Parties */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('distance.partiesTitle')}</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 text-[#0B1C2D] flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t('distance.serviceProvider')}</h3>
                      <div className="text-gray-600 space-y-1">
                        <p><strong>{t('distance.companyName')}:</strong> FeRa Clinic</p>
                        <p><strong>{t('distance.address')}:</strong> {t('common.clinicAddress')}</p>
                        <p><strong>{t('distance.phone')}:</strong> {t('common.phoneNumber')}</p>
                        <p><strong>{t('distance.email')}:</strong> {t('common.emailAddress')}</p>
                        <p><strong>{t('distance.taxNumber')}:</strong> {t('distance.taxNumberDesc')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t('distance.customer')}</h3>
                      <div className="text-gray-600 space-y-1">
                        <p><strong>{t('distance.fullName')}:</strong> [{t('distance.toBeProvided')}]</p>
                        <p><strong>{t('distance.email')}:</strong> [{t('distance.toBeProvided')}]</p>
                        <p><strong>{t('distance.phone')}:</strong> [{t('distance.toBeProvided')}]</p>
                        <p><strong>{t('distance.address')}:</strong> [{t('distance.toBeProvided')}]</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Subject of Agreement */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('distance.subjectTitle')}</h2>
              <div className="bg-gray-50 rounded-xl p-8 text-gray-700">
                <p className="mb-4">
                  {t('distance.subjectIntro')}
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>{t('distance.service1')}</li>
                  <li>{t('distance.service2')}</li>
                  <li>{t('distance.service3')}</li>
                  <li>{t('distance.service4')}</li>
                  <li>{t('distance.service5')}</li>
                  <li>{t('distance.service6')}</li>
                </ul>
              </div>
            </section>

            {/* Service Description */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('distance.serviceDescriptionTitle')}</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  {t('distance.serviceDescriptionIntro')}
                </p>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <ul className="space-y-2">
                    <li>• {t('distance.specificService1')}</li>
                    <li>• {t('distance.specificService2')}</li>
                    <li>• {t('distance.specificService3')}</li>
                    <li>• {t('distance.specificService4')}</li>
                    <li>• {t('distance.specificService5')}</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 italic">
                  {t('distance.serviceNote')}
                </p>
              </div>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('distance.paymentTermsTitle')}</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t('distance.paymentMethod')}</h3>
                      <p className="text-gray-600">
                        {t('distance.paymentMethodDesc')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                  <h4 className="font-semibold text-gray-900 mb-4">{t('distance.paymentSchedule')}</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• {t('distance.paymentSchedule1')}</li>
                    <li>• {t('distance.paymentSchedule2')}</li>
                    <li>• {t('distance.paymentSchedule3')}</li>
                    <li>• {t('distance.paymentSchedule4')}</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Delivery Terms */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('distance.deliveryTermsTitle')}</h2>
              <div className="space-y-4 text-gray-700">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 text-[#0B1C2D] flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t('distance.deliveryTimeline')}</h3>
                      <p className="text-gray-600">
                        {t('distance.deliveryTimelineDesc')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t('distance.serviceLocation')}</h3>
                      <p className="text-gray-600">
                        {t('distance.serviceLocationDesc')} {t('common.clinicAddress')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cancellation and Refund */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('distance.cancellationTitle')}</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  {t('distance.cancellationIntro')}
                </p>
                <div className="bg-gray-50 rounded-xl p-8">
                  <ul className="space-y-2">
                    <li>• <strong>{t('distance.cancellationWithdrawal')}:</strong> {t('distance.cancellationWithdrawalDesc')}</li>
                    <li>• <strong>{t('distance.cancellationDeposits')}:</strong> {t('distance.cancellationDepositsDesc')}</li>
                    <li>• <strong>{t('distance.cancellationDevices')}:</strong> {t('distance.cancellationDevicesDesc')}</li>
                    <li>• <strong>{t('distance.cancellationRefund')}:</strong> {t('distance.cancellationRefundDesc')}</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600">
                  {t('distance.cancellationPolicyRef')}
                </p>
              </div>
            </section>

            {/* Customer Obligations */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('distance.obligationsTitle')}</h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <ul className="space-y-2 text-gray-700">
                  <li>• {t('distance.obligation1')}</li>
                  <li>• {t('distance.obligation2')}</li>
                  <li>• {t('distance.obligation3')}</li>
                  <li>• {t('distance.obligation4')}</li>
                  <li>• {t('distance.obligation5')}</li>
                  <li>• {t('distance.obligation6')}</li>
                </ul>
              </div>
            </section>

            {/* Medical Disclaimer */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('distance.medicalDisclaimerTitle')}</h2>
              <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                <h4 className="font-semibold text-red-800 mb-3">{t('distance.medicalInfoTitle')}</h4>
                <ul className="space-y-2 text-red-700">
                  <li>• {t('distance.medicalInfo1')}</li>
                  <li>• {t('distance.medicalInfo2')}</li>
                  <li>• {t('distance.medicalInfo3')}</li>
                  <li>• {t('distance.medicalInfo4')}</li>
                  <li>• {t('distance.medicalInfo5')}</li>
                </ul>
              </div>
            </section>

            {/* Confidentiality */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('distance.confidentialityTitle')}</h2>
              <div className="bg-gray-50 rounded-xl p-8 text-gray-700">
                <p>
                  {t('distance.confidentialityDesc')}
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('distance.governingLawTitle')}</h2>
              <div className="bg-gray-50 rounded-xl p-8 text-gray-700">
                <p className="mb-4">
                  {t('distance.governingLawIntro')}
                </p>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>{t('distance.disputeStep1')}</li>
                  <li>{t('distance.disputeStep2')}</li>
                  <li>{t('distance.disputeStep3')}</li>
                </ol>
              </div>
            </section>

            {/* Agreement Acceptance */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('distance.acceptanceTitle')}</h2>
              <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                <p className="text-green-800">
                  {t('distance.acceptanceIntro')}
                </p>
                <ul className="space-y-2 text-green-700 mt-4">
                  <li>• {t('distance.acceptance1')}</li>
                  <li>• {t('distance.acceptance2')}</li>
                  <li>• {t('distance.acceptance3')}</li>
                  <li>• {t('distance.acceptance4')}</li>
                  <li>• {t('distance.acceptance5')}</li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('distance.contactTitle')}</h2>
              <div className="bg-gradient-to-br from-[#0B1C2D] via-[#1e3a8a] to-[#0f172a] backdrop-blur-md rounded-2xl p-8 text-white shadow-xl shadow-black/20 border border-white/10">
                <p className="text-white/90 mb-6">
                  {t('distance.contactDescription')}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#0B1C2D]" />
                    <span>{t('common.emailAddress')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#0B1C2D]" />
                    <span>{t('common.phoneNumber')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#0B1C2D]" />
                    <span>{t('common.clinicAddress')}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Last Updated */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                {t('legal.lastUpdated', 'Last Updated')}: {new Date().toLocaleDateString()}
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  )
}
