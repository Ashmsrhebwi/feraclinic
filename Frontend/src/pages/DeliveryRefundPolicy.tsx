import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { motion } from 'framer-motion'
import { Package, ArrowLeft, Calendar, CreditCard, AlertCircle, Clock, CheckCircle } from 'lucide-react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { SectionWrapper } from '../components/ui/SectionWrapper'

export function DeliveryRefundPolicy() {
  const { t } = useTranslation()

  useSEO({ 
    title: t('common.legalPages.deliveryRefund'), 
    description: 'FeRa Clinic Delivery & Refund Policy - Appointment scheduling, service delivery, and refund conditions for dental treatments' 
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
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#032B44]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#032B44]/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />

        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 lg:px-10 2xl:px-16 pt-24 pb-16">
          <motion.div 
            className="w-full max-w-[94vw] sm:max-w-[680px] lg:max-w-[860px] 2xl:max-w-[980px] bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 lg:p-12 shadow-[0_25px_80px_rgba(11,28,45,0.12)] border border-white/50"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Back Link */}
            <Link to="/" className="inline-flex items-center gap-2 text-[#0B1C2D] hover:text-[#032B44] transition-colors mb-6 group">
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
              <Package className="w-8 h-8" />
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1] mb-6"
            >
              {t('delivery.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="text-lg text-gray-600 font-light leading-relaxed"
            >
              {t('delivery.description')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <SectionWrapper padding="py-20 lg:py-32" background="white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none space-y-12"
          >
            {/* Important Notice */}
            <section className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-[#032B44] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-4">{t('delivery.importantNotice')}</h2>
                  <p className="text-[#032B44] leading-relaxed">
                    <strong>{t('delivery.notProductPolicy')}</strong> {t('delivery.serviceExplanation')}
                  </p>
                </div>
              </div>
            </section>

            {/* Service Delivery */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('delivery.serviceDelivery')}</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 text-[#0B1C2D] flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t('delivery.appointmentDelivery')}</h3>
                      <p className="text-gray-600">
                        {t('delivery.appointmentDeliveryDesc')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t('delivery.serviceConfirmation')}</h3>
                      <p className="text-gray-600">
                        {t('delivery.serviceConfirmationDesc')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t('delivery.treatmentTimeline')}</h3>
                      <p className="text-gray-600">
                        {t('delivery.treatmentTimelineDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Appointment Cancellation */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('delivery.appointmentCancellation')}</h2>
              <div className="space-y-4 text-gray-700">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h4 className="font-semibold text-red-800 mb-3">{t('delivery.cancellationNoticePeriods')}</h4>
                  <ul className="space-y-2 text-red-700">
                    <li>• <strong>{t('delivery.cancellation48Hours')}</strong> {t('delivery.cancellation48HoursDesc')}</li>
                    <li>• <strong>{t('delivery.cancellation24Hours')}</strong> {t('delivery.cancellation24HoursDesc')}</li>
                    <li>• <strong>{t('delivery.cancellationLess24Hours')}</strong> {t('delivery.cancellationLess24HoursDesc')}</li>
                    <li>• <strong>{t('delivery.cancellationNoShow')}</strong> {t('delivery.cancellationNoShowDesc')}</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                  <h4 className="font-semibold text-[#032B44] mb-3">{t('delivery.emergencyCancellations')}</h4>
                  <p className="text-[#032B44]">
                {t('delivery.emergencyCancellationsDesc')}
                  </p>
                </div>
              </div>
            </section>

            {/* Payment Refund Policy */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('delivery.paymentRefundPolicy')}</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t('delivery.refundablePayments')}</h3>
                      <p className="text-gray-600">
                        {t('delivery.refundablePaymentsDesc')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                  <h4 className="font-semibold text-gray-900 mb-4">{t('delivery.refundProcessing')}</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0B1C2D] mt-2 flex-shrink-0"></span>
                      <span>{t('delivery.refundProcessing1')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0B1C2D] mt-2 flex-shrink-0"></span>
                      <span>{t('delivery.refundProcessing2')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0B1C2D] mt-2 flex-shrink-0"></span>
                      <span>{t('delivery.refundProcessing3')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0B1C2D] mt-2 flex-shrink-0"></span>
                      <span>{t('delivery.refundProcessing4')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Non-Refundable Items */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('delivery.nonRefundableItems')}</h2>
              <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                <h4 className="font-semibold text-red-800 mb-4">{t('delivery.generallyNonRefundable')}</h4>
                <ul className="space-y-2 text-red-700">
                  <li>• {t('delivery.nonRefundable1')}</li>
                  <li>• {t('delivery.nonRefundable2')}</li>
                  <li>• {t('delivery.nonRefundable3')}</li>
                  <li>• {t('delivery.nonRefundable4')}</li>
                  <li>• {t('delivery.nonRefundable5')}</li>
                </ul>
              </div>
            </section>

            {/* Treatment Plan Changes */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('delivery.treatmentPlanModifications')}</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  {t('delivery.treatmentModificationIntro')}
                </p>
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                  <h4 className="font-semibold text-[#032B44] mb-3">{t('delivery.planAdjustments')}</h4>
                  <ul className="space-y-2 text-[#032B44]">
                    <li>• {t('delivery.planAdjustment1')}</li>
                    <li>• {t('delivery.planAdjustment2')}</li>
                    <li>• {t('delivery.planAdjustment3')}</li>
                    <li>• {t('delivery.planAdjustment4')}</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('delivery.disputeResolution')}</h2>
              <div className="bg-gray-50 rounded-xl p-8 text-gray-700">
                <p className="mb-4">
                  {t('delivery.disputeIntro')}
                </p>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>{t('delivery.disputeStep1')}</li>
                  <li>{t('delivery.disputeStep2')}</li>
                  <li>{t('delivery.disputeStep3')}</li>
                  <li>{t('delivery.disputeStep4')}</li>
                  <li>{t('delivery.disputeStep5')}</li>
                </ol>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('delivery.contactInformation')}</h2>
              <div className="bg-gradient-to-br from-[#0B1C2D] via-[#1e3a8a] to-[#0f172a] backdrop-blur-md rounded-2xl p-8 text-white shadow-xl shadow-black/20 border border-white/10">
                <p className="text-white/90 mb-6">
                  {t('delivery.contactDescription')}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[#0B1C2D]">{t('common.email')}:</span>
                    <span>{t('common.emailAddress')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#0B1C2D]">{t('common.phone')}:</span>
                    <span>{t('common.phoneNumber')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#0B1C2D]">{t('common.address')}:</span>
                    <span>{t('common.clinicAddress')}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/70">
                    <strong>{t('delivery.cancellationHours')}:</strong> {t('delivery.cancellationHoursTime')}
                  </p>
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
