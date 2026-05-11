import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../components/useSEO'
import { getTreatmentBySlug } from '../data/treatments'
import { TreatmentPageLayout } from '../components/TreatmentPageLayout'
import { LocalizedLink as Link } from '../components/ui/LocalizedLink'
import { Button } from '../components/ui/button'
import { motion } from 'framer-motion'
import { getMedia } from '../lib/mediaResolver'

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
  // Safe array helper to prevent .map() crashes
  const ensureArray = (val: any, fallback: string[] = []): string[] => {
    if (Array.isArray(val)) return val;
    if (typeof val === 'string') return [val];
    return fallback;
  };

  const processSteps = 
    treatment.slug === 'dental-implants'
      ? [
          { title: t('treatmentProcess.implants.step1.title', 'Bone & Jaw Evaluation'), description: t('treatmentProcess.implants.step1.desc', 'Comprehensive 3D CBCT imaging and clinical assessment of jawbone density.') },
          { title: t('treatmentProcess.implants.step2.title', 'Surgical Implant Placement'), description: t('treatmentProcess.implants.step2.desc', 'Precision placement of the titanium implant under local anesthesia or sedation.') },
          { title: t('treatmentProcess.implants.step3.title', 'Healing & Osseointegration'), description: t('treatmentProcess.implants.step3.desc', 'Biological integration phase where the implant fuses with the natural jawbone.') },
          { title: t('treatmentProcess.implants.step4.title', 'Abutment & Crown Placement'), description: t('treatmentProcess.implants.step4.desc', 'Final restoration with a custom-crafted porcelain or zirconia crown.') }
        ]
      : treatment.slug === 'hollywood-smile'
        ? [
            { title: t('treatmentProcess.veneers.step1.title', 'Digital Smile Analysis'), description: t('treatmentProcess.veneers.step1.desc', 'Photographic analysis and digital planning of your ideal smile proportions.') },
            { title: t('treatmentProcess.veneers.step2.title', 'Minimally Invasive Preparation'), description: t('treatmentProcess.veneers.step2.desc', 'Precise contouring of the enamel to ensure a perfect fit for the veneers.') },
            { title: t('treatmentProcess.veneers.step3.title', 'Precision Veneer Design'), description: t('treatmentProcess.veneers.step3.desc', 'Custom artistry and lab fabrication of ultra-thin E-Max porcelain shells.') },
            { title: t('treatmentProcess.veneers.step4.title', 'Clinical Fitting & Bonding'), description: t('treatmentProcess.veneers.step4.desc', 'Final placement and permanent bonding of the veneers for a radiant smile.') }
          ]
        : treatment.slug === 'orthodontics'
          ? [
              { title: t('treatmentProcess.ortho.step1.title', 'Clinical Assessment & 3D Scan'), description: t('treatmentProcess.ortho.step1.desc', 'Comprehensive oral examination and digital impressions using iTero scanning.') },
              { title: t('treatmentProcess.ortho.step2.title', 'Custom Treatment Planning'), description: t('treatmentProcess.ortho.step2.desc', 'Virtual simulation of tooth movement and design of the alignment path.') },
              { title: t('treatmentProcess.ortho.step3.title', 'Braces or Aligner Fitting'), description: t('treatmentProcess.ortho.step3.desc', 'Placement of the orthodontic appliance or delivery of custom clear aligners.') },
              { title: t('treatmentProcess.ortho.step4.title', 'Monitoring & Adjustments'), description: t('treatmentProcess.ortho.step4.desc', 'Regular clinical visits to ensure progress and perform necessary fine-tuning.') }
            ]
          : ensureArray((treatment as any).process || [
              t('treatments.process.consultation', { defaultValue: 'Consultation' }),
              t('treatments.process.procedure', { defaultValue: 'Procedure' }),
              t('treatments.process.recovery', { defaultValue: 'Recovery' }),
              t('treatments.process.result', { defaultValue: 'Result' })
            ]);

  const candidateList = 
    treatment.slug === 'dental-implants'
      ? [
          t('candidates.implants.item1', 'Patients with one or more missing teeth'),
          t('candidates.implants.item2', 'Those seeking a permanent alternative to dentures'),
          t('candidates.implants.item3', 'Patients requiring jawbone preservation'),
          t('candidates.implants.item4', 'Candidates with healthy gum tissue')
        ]
      : treatment.slug === 'hollywood-smile'
        ? [
            t('candidates.veneers.item1', 'Patients with discolored or stained teeth'),
            t('candidates.veneers.item2', 'Those with minor chips or cracks'),
            t('candidates.veneers.item3', 'Patients with uneven tooth gaps'),
            t('candidates.veneers.item4', 'Individuals seeking a radiant Hollywood Smile')
          ]
        : treatment.slug === 'orthodontics'
          ? [
              t('candidates.ortho.item1', 'Patients with crowded or crooked teeth'),
              t('candidates.ortho.item2', 'Individuals with bite alignment concerns'),
              t('candidates.ortho.item3', 'Those seeking discreet orthodontic correction'),
              t('candidates.ortho.item4', 'Adults and teenagers needing gap closure')
            ]
          : ensureArray((treatment as any).candidates || [
              t('treatments.candidates.missing', { defaultValue: 'Missing or damaged teeth' }),
              t('treatments.candidates.aesthetic', { defaultValue: 'Aesthetic improvements' }),
              t('treatments.candidates.function', { defaultValue: 'Restoration of function' }),
              t('treatments.candidates.longterm', { defaultValue: 'Long-term dental health' })
            ]);

  // Treatment specific FAQs or default ones
  const faqs = [1, 2, 3, 4].map(i => {
    const qKey = `treatments.data.${treatment.id}.faqs.q${i}`;
    const aKey = `treatments.data.${treatment.id}.faqs.a${i}`;
    const defaultQ = t(`faq.treatment.q${i}`);
    const defaultA = t(`faq.treatment.a${i}`);
    
    return {
      question: t(qKey, { defaultValue: defaultQ }),
      answer: t(aKey, { defaultValue: defaultA })
    };
  });

  return (
    <TreatmentPageLayout
      title={getTranslated('title', treatment.title)}
      category={treatment.category}
      heroDescription={heroDescription}
      fullDescription={treatment.description}
      image={getMedia(treatment.imageKey || treatment.image)}
      duration={getTranslated('duration', treatment.duration)}
      price={getTranslated('price', treatment.price)}
      features={treatment.features.map((f, i) => t(`treatments.data.${treatment.id}.features.${i}`, f))}
      benefits={treatment.benefits.map((b, i) => t(`treatments.data.${treatment.id}.benefits.${i}`, b))}
      process={processSteps}
      candidates={candidateList}
      faqs={faqs}
      additionalImages={treatment.imageKeys ? treatment.imageKeys.map(k => getMedia(k)) : (treatment.additionalImages || [])}
    />
  )
}
