import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { motion } from 'framer-motion'
import { FileText, ArrowLeft, Stethoscope, CreditCard, Calendar, AlertCircle } from 'lucide-react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { SectionWrapper } from '../components/ui/SectionWrapper'

export function TermsOfService() {
  const { t } = useTranslation()

  useSEO({ 
    title: t('footer.termsOfService'), 
    description: 'FeRa Clinic Terms of Service - Healthcare and dental consultation service terms and payment conditions' 
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
              <FileText className="w-8 h-8" />
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0B1C2D] tracking-tight leading-[1.1] mb-6"
            >
              {t('footer.termsOfService')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="text-lg text-gray-600 font-light leading-relaxed"
            >
              {t('terms.termsDescription')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* {t('terms.termsOfServiceContent', 'Terms of Service Content')} */}
      <SectionWrapper padding="py-20 lg:py-32" background="white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none space-y-12"
          >
            {/* {t('terms.introduction', 'Introduction')} */}
            <section className="bg-gray-50/50 rounded-2xl p-8 border border-gray-100/60">
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-4">{t('terms.acceptanceOfTerms')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('terms.acceptanceDesc')}
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                {t('terms.disagreementDesc')}
              </p>
            </section>

            {/* {t('terms.serviceDescription', 'Service Description')} */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('terms.serviceDescription')}</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 text-[#0B1C2D] flex items-center justify-center flex-shrink-0">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t('terms.healthcareServices')}</h3>
                      <p className="text-gray-600">
                        {t('terms.healthcareServicesDesc')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t('terms.consultationProcess')}</h3>
                      <p className="text-gray-600">
                        {t('terms.consultationProcessDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* {t('terms.paymentTerms', 'Payment Terms')} */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('terms.paymentTerms')}</h2>
              <div className="space-y-4 text-gray-700">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="font-semibold text-green-800 mb-3">{t('terms.paymentProcessing')}</h4>
                  <p className="text-green-700">
                    {t('terms.paymentProcessingDesc')}
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">{t('terms.treatmentPricing')}</h4>
                  <p className="text-gray-700">
                    {t('terms.treatmentPricingDesc')}
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">{t('terms.depositRequirements')}</h4>
                  <p className="text-gray-700">
                    {t('terms.depositRequirementsDesc')}
                  </p>
                </div>
              </div>
            </section>

            {/* {t('terms.userResponsibilities', 'User Responsibilities')} */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('terms.userResponsibilities')}</h2>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0B1C2D] mt-2 flex-shrink-0"></span>
                    <span>{t('terms.responsibility1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0B1C2D] mt-2 flex-shrink-0"></span>
                    <span>{t('terms.responsibility2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0B1C2D] mt-2 flex-shrink-0"></span>
                    <span>{t('terms.responsibility3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0B1C2D] mt-2 flex-shrink-0"></span>
                    <span>{t('terms.responsibility4')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0B1C2D] mt-2 flex-shrink-0"></span>
                    <span>{t('terms.responsibility5')}</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* {t('terms.medicalDisclaimer', 'Medical Disclaimer')} */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('terms.medicalDisclaimer')}</h2>
              <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-3">{t('terms.importantMedicalInfo')}</h4>
                    <ul className="space-y-2 text-red-700">
                      <li>• {t('terms.disclaimer1')}</li>
                      <li>• {t('terms.disclaimer2')}</li>
                      <li>• {t('terms.disclaimer3')}</li>
                      <li>• {t('terms.disclaimer4')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* {t('terms.cancellationAndRefunds', 'Cancellation and Refunds')} */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('terms.cancellationAndRefunds')}</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  {t('terms.cancellationPolicyDesc')}
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <ul className="space-y-2">
                    <li>• {t('terms.cancellation1')}</li>
                    <li>• {t('terms.cancellation2')}</li>
                    <li>• {t('terms.cancellation3')}</li>
                    <li>• {t('terms.cancellation4')}</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* {t('terms.intellectualProperty', 'Intellectual Property')} */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('terms.intellectualProperty')}</h2>
              <div className="bg-gray-50 rounded-xl p-8 text-gray-700">
                <p className="mb-4">
                  {t('terms.intellectualPropertyDesc')}
                </p>
                <ul className="space-y-2">
                  <li>• {t('terms.ip1')}</li>
                  <li>• {t('terms.ip2')}</li>
                  <li>• {t('terms.ip3')}</li>
                  <li>• {t('terms.ip4')}</li>
                </ul>
              </div>
            </section>

            {/* {t('terms.limitationOfLiability', 'Limitation of Liability')} */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('terms.limitationOfLiability')}</h2>
              <div className="bg-gray-50 rounded-xl p-8 text-gray-700">
                <p>
                  {t('terms.limitationOfLiabilityDesc')}
                </p>
              </div>
            </section>

            {/* {t('terms.contactInformation', 'Contact Information')} */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0B1C2D] mb-6">{t('terms.contactInformation')}</h2>
              <div className="bg-gradient-to-br from-[#0B1C2D] via-[#1e3a8a] to-[#0f172a] backdrop-blur-md rounded-2xl p-8 text-white shadow-xl shadow-black/20 border border-white/10">
                <p className="text-white/90 mb-6">
                  {t('terms.contactQuestions')}
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
              </div>
            </section>

            {/* Last Updated */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                {t('legal.lastUpdated')}: {new Date().toLocaleDateString()}
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  )
}
