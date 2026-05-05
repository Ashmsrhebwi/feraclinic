import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { getTreatmentBySlug } from '../data/treatments'
import { TreatmentPageLayout } from '../components/TreatmentPageLayout'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { Button } from '../components/ui/button'
import { motion } from 'framer-motion'

export function TreatmentDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()

  const treatment = slug ? getTreatmentBySlug(slug) : null

  // Helper to get translated content for the treatment
  const getTranslated = (key: string, fallback: string) => {
    if (!treatment) return fallback
    const i18nKey = `treatments.data.${treatment.id}.${key}`
    const translated = t(i18nKey)
    return translated === i18nKey ? fallback : translated
  }

  // SEO Handling
  const getSEOContent = () => {
    if (!treatment) return { title: '', description: '' }
    
    // Check for specific SEO translations first
    const seoTitleKey = `treatments.data.${treatment.id}.seo.title`
    const seoDescKey = `treatments.data.${treatment.id}.seo.description`
    
    // Special cases mapping for keys that might be named differently
    const legacyKeys: Record<string, {title: string, desc: string}> = {
      'dental-implants': { title: 'treatments.detail.implants.seo.title', desc: 'treatments.detail.implants.seo.description' },
      'hollywood-smile': { title: 'treatments.detail.hollywood.seo.title', desc: 'treatments.detail.hollywood.seo.description' },
      'orthodontics': { title: 'treatments.detail.ortho.seo.title', desc: 'treatments.detail.ortho.seo.description' }
    }

    let seoTitle = t(seoTitleKey)
    let seoDesc = t(seoDescKey)

    if (seoTitle === seoTitleKey && legacyKeys[treatment.slug]) {
      seoTitle = t(legacyKeys[treatment.slug].title)
      seoDesc = t(legacyKeys[treatment.slug].desc)
    }

    return {
      title: seoTitle !== seoTitleKey ? seoTitle : `${getTranslated('title', treatment.title)} | ${t('common.clinicName')}`,
      description: seoDesc !== seoDescKey ? seoDesc : getTranslated('desc', treatment.description)
    }
  }

  useSEO(getSEOContent())

  if (!treatment) {
    return (
      <div className="min-h-screen bg-[#F4F7FA] flex items-center justify-center">
        <div className="text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold text-[#0B1C2D] mb-4">{t('treatments.notFound')}</h1>
            <p className="text-[#64748B] mb-8 max-w-md mx-auto">{t('treatments.notFoundDesc')}</p>
            <Link to="/treatments">
              <Button variant="primary">{t('treatments.backToTreatments')}</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  // Prepare Data for the Layout
  const heroDescription = treatment.slug === 'dental-implants' 
    ? t('treatments.detail.implants.heroDesc', { defaultValue: treatment.description })
    : treatment.slug === 'hollywood-smile'
    ? t('treatments.detail.hollywood.heroDesc', { defaultValue: treatment.description })
    : treatment.slug === 'orthodontics'
    ? t('treatments.detail.ortho.heroDesc', { defaultValue: treatment.description })
    : getTranslated('heroDesc', treatment.description)

  const processSteps = treatment.slug === 'dental-implants'
    ? t('treatments.detail.implants.process', { returnObjects: true, defaultValue: [
        t('treatmentProcess.planning3D'), t('treatmentProcess.implantPlacement'), t('treatmentProcess.healingPhase'), t('treatmentProcess.finalRestoration')
      ]})
    : treatment.slug === 'hollywood-smile'
    ? t('treatments.detail.hollywood.process', { returnObjects: true, defaultValue: [
        t('treatmentProcess.smileDesign'), t('treatmentProcess.preparation'), t('treatmentProcess.placement'), t('treatmentProcess.refinement')
      ]})
    : treatment.slug === 'orthodontics'
    ? t('treatments.detail.ortho.treatmentProcess.steps', { returnObjects: true, defaultValue: [
        t('treatmentProcess.assessment'), t('treatmentProcess.planning'), t('treatmentProcess.aligners'), t('treatmentProcess.monitoring'), t('treatmentProcess.retention')
      ]})
    : (treatment as any).process || [
        t('treatments.process.consultation', { defaultValue: 'Consultation' }),
        t('treatments.process.procedure', { defaultValue: 'Procedure' }),
        t('treatments.process.recovery', { defaultValue: 'Recovery' }),
        t('treatments.process.result', { defaultValue: 'Result' })
      ]

  const candidateList = treatment.slug === 'dental-implants'
    ? t('treatments.detail.implants.candidates', { returnObjects: true, defaultValue: [
        'Missing one or multiple teeth', 'Desire for permanent solution', 'Jawbone preservation needs'
      ]})
    : treatment.slug === 'hollywood-smile'
    ? t('treatments.detail.hollywood.candidates', { returnObjects: true, defaultValue: [
        'Discolored or stained teeth', 'Gaps between teeth', 'Desire for aesthetic boost'
      ]})
    : treatment.slug === 'orthodontics'
    ? t('treatments.detail.ortho.whoNeedsIt.candidates', { returnObjects: true, defaultValue: [
        'Crooked or crowded teeth', 'Bite alignment issues', 'Gaps between teeth'
      ]})
    : (treatment as any).candidates || [
        t('treatments.candidates.missing', { defaultValue: 'Missing or damaged teeth' }),
        t('treatments.candidates.aesthetic', { defaultValue: 'Aesthetic improvements' }),
        t('treatments.candidates.function', { defaultValue: 'Restoration of function' }),
        t('treatments.candidates.longterm', { defaultValue: 'Long-term dental health' })
      ]

  // Default FAQs for all treatments
  const defaultFaqs = [
    {
      question: t('faq.treatment.q1'),
      answer: t('faq.treatment.a1')
    },
    {
      question: t('faq.treatment.q2'),
      answer: t('faq.treatment.a2')
    },
    {
      question: t('faq.treatment.q3'),
      answer: t('faq.treatment.a3')
    },
    {
      question: t('faq.treatment.q4'),
      answer: t('faq.treatment.a4')
    }
  ]

  return (
    <TreatmentPageLayout
      title={getTranslated('title', treatment.title)}
      category={treatment.category}
      heroDescription={heroDescription}
      fullDescription={treatment.description}
      image={treatment.image}
      duration={getTranslated('duration', treatment.duration)}
      price={getTranslated('price', treatment.price)}
      features={treatment.features.map((f, i) => t(`treatments.data.${treatment.id}.features.${i}`, f))}
      benefits={treatment.benefits.map((b, i) => t(`treatments.data.${treatment.id}.benefits.${i}`, b))}
      process={processSteps}
      candidates={candidateList}
      faqs={defaultFaqs}
      additionalImages={treatment.additionalImages || []}
    />
  )
}
