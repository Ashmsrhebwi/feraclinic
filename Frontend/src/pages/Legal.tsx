import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { motion } from 'framer-motion'
import { Shield, FileText, ArrowLeft } from 'lucide-react'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'

export function Legal() {
  const { t } = useTranslation()
  const isPrivacy = window.location.pathname.includes('privacy')

  const title = isPrivacy ? t('footer.privacyPolicy', 'Privacy Policy') : t('footer.termsOfService', 'Terms of Service')

  useSEO({ title, description: `${title} - FeRa Clinic Istanbul` })

  return (
    <div className="min-h-screen bg-white py-32 px-6">
      <div className="w-full max-w-[94vw] sm:max-w-[680px] lg:max-w-[860px] 2xl:max-w-[1080px] bg-white/55 backdrop-blur-md rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_25px_80px_rgba(11,28,45,0.12)]">
        <Link to="/" className="inline-flex items-center gap-2 text-[#13293D] hover:text-[#0B1C2D] transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-semibold uppercase tracking-widest">{t('common.backToHome', 'Back to Home')}</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#13293D]/10 flex items-center justify-center text-[#13293D]">
              {isPrivacy ? <Shield className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0B1C2D] tracking-tight">{title}</h1>
          </div>

          <div className="prose prose-slate prose-lg max-w-none text-gray-500 font-light leading-relaxed space-y-8">
            <section>
              <h2 className="text-xl font-bold text-[#0B1C2D] uppercase tracking-widest text-sm mb-4">
                {t('legal.commitmentTitle', 'Our Commitment')}
              </h2>
              <p>
                {t('legal.commitmentDesc', 'At FeRa Clinic, we are committed to maintaining the highest standards of clinical excellence and patient data protection. This document outlines our protocols and your rights as a patient at our Istanbul facility.')}
              </p>
            </section>

            <section className="bg-[#F5F7FA]/30 p-8 rounded-3xl border border-gray-100/10">
              <h2 className="text-xl font-bold text-[#0B1C2D] uppercase tracking-widest text-sm mb-4">
                {t('legal.placeholderTitle', 'Content Under Review')}
              </h2>
              <p>
                {t('legal.placeholderDesc', 'Our legal documentation is currently being updated to reflect the latest international healthcare regulations and patient protection acts. For immediate inquiries regarding our policies, please contact our international coordination office directly.')}
              </p>
            </section>

            <div className="pt-12 border-t border-gray-100">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
                {t('legal.lastUpdated', 'Last Updated')}: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
