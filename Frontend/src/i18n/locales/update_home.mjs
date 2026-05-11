import fs from 'fs';
import path from 'path';

const homePath = path.resolve('src/pages/Home.tsx');
const localesDir = path.resolve('src/i18n/locales');
const languages = ['en', 'ar', 'fr', 'ru', 'tr', 'es'];

let homeContent = fs.readFileSync(homePath, 'utf8');

const replacements = [
  // 1. Hero
  {
    regex: /t\('home\.heroEyebrow',\s*'التخصصات الطبية'\)/g,
    replace: "t('home.heroEyebrow', 'Medical Specialties')",
    ar: "التخصصات الطبية", en: "Medical Specialties", key: "home.heroEyebrow"
  },
  {
    regex: /t\('home\.heroDesc',\s*'اكتشف عيادة الأسنان الرائدة في إسطنبول حيث تلتقي الخبرة العالمية بالدقة الفنية لتوفير تحولات حياتية للابتسامة في قلب تركيا\.'\)/g,
    replace: "t('home.heroDesc', 'Discover Istanbul\\'s premier dental clinic where global expertise meets artistic precision to provide life-changing smile transformations in the heart of Turkey.')",
    ar: "اكتشف عيادة الأسنان الرائدة في إسطنبول حيث تلتقي الخبرة العالمية بالدقة الفنية لتوفير تحولات حياتية للابتسامة في قلب تركيا.",
    en: "Discover Istanbul's premier dental clinic where global expertise meets artistic precision to provide life-changing smile transformations in the heart of Turkey.",
    key: "home.heroDesc"
  },
  {
    regex: /t\('home\.ctaPrimary',\s*'ابدأ رحلة ابتسامتك'\)/g,
    replace: "t('home.ctaPrimary', 'Start Your Smile Journey')",
    ar: "ابدأ رحلة ابتسامتك", en: "Start Your Smile Journey", key: "home.ctaPrimary"
  },
  {
    regex: /t\('home\.ctaSecondary',\s*'شاهد نتائج المرضى'\)/g,
    replace: "t('home.ctaSecondary', 'View Patient Results')",
    ar: "شاهد نتائج المرضى", en: "View Patient Results", key: "home.ctaSecondary"
  },
  // 2. Why Choose Us
  {
    regex: /t\('home\.whyChooseUs',\s*'التميز الطبي'\)/g,
    replace: "t('home.whyChooseUs', 'Medical Excellence')",
    ar: "التميز الطبي", en: "Medical Excellence", key: "home.whyChooseUs"
  },
  {
    regex: /t\('home\.precisionCare',\s*'رعاية الأسنان المتخصصة\.'\)/g,
    replace: "t('home.precisionCare', 'Specialized Dental Care.')",
    ar: "رعاية الأسنان المتخصصة.", en: "Specialized Dental Care.", key: "home.precisionCare"
  },
  {
    regex: /t\('home\.premiumCare',\s*'معايير دولية\.'\)/g,
    replace: "t('home.premiumCare', 'International Standards.')",
    ar: "معايير دولية.", en: "International Standards.", key: "home.premiumCare"
  },
  {
    regex: /t\('home\.precisionDesc',\s*'في عيادة FeRa، يتبع كل علاج للأسنان بروتوكول دولية مع رعاية يقودها متخصصون وتقنيات تشخيص متقدمة وشفافية كاملة طوال رحلة المريض\.'\)/g,
    replace: "t('home.precisionDesc', 'At FeRa Clinic, every dental treatment follows international protocols with specialist-led care, advanced diagnostic technologies, and complete transparency throughout the patient journey.')",
    ar: "في عيادة FeRa، يتبع كل علاج للأسنان بروتوكول دولية مع رعاية يقودها متخصصون وتقنيات تشخيص متقدمة وشفافية كاملة طوال رحلة المريض.",
    en: "At FeRa Clinic, every dental treatment follows international protocols with specialist-led care, advanced diagnostic technologies, and complete transparency throughout the patient journey.",
    key: "home.precisionDesc"
  },
  // 3. Technology
  {
    regex: /t\('home\.technology\.title',\s*'التكنولوجيا'\)/g,
    replace: "t('home.technology.title', 'Technology')",
    ar: "التكنولوجيا", en: "Technology", key: "home.technology.title"
  },
  {
    regex: /t\('home\.technology\.subtitle',\s*'الدقة السريرية المتقدمة'\)/g,
    replace: "t('home.technology.subtitle', 'Advanced Clinical Precision')",
    ar: "الدقة السريرية المتقدمة", en: "Advanced Clinical Precision", key: "home.technology.subtitle"
  },
  {
    regex: /t\('home\.technology\.desc',\s*'نستخدم أحدث التقنيات الرقمية والتصميم ثلاثي الأبعاد لضمان نتائج علاج دقيقة ومريحة للمرضى\.'\)/g,
    replace: "t('home.technology.desc', 'We use the latest digital technologies and 3D design to ensure accurate and comfortable treatment results for patients.')",
    ar: "نستخدم أحدث التقنيات الرقمية والتصميم ثلاثي الأبعاد لضمان نتائج علاج دقيقة ومريحة للمرضى.",
    en: "We use the latest digital technologies and 3D design to ensure accurate and comfortable treatment results for patients.",
    key: "home.technology.desc"
  },
  {
    regex: /t\('home\.technology\.t1',\s*'تصوير ثلاثي الأبعاد CBCT'\)/g,
    replace: "t('home.technology.t1', '3D CBCT Imaging')",
    ar: "تصوير ثلاثي الأبعاد CBCT", en: "3D CBCT Imaging", key: "home.technology.t1"
  },
  {
    regex: /t\('home\.technology\.t2',\s*'التصميم الرقمي للابتسامة'\)/g,
    replace: "t('home.technology.t2', 'Digital Smile Design')",
    ar: "التصميم الرقمي للابتسامة", en: "Digital Smile Design", key: "home.technology.t2"
  },
  {
    regex: /t\('home\.technology\.t3',\s*'تقنية ليزر Biolase'\)/g,
    replace: "t('home.technology.t3', 'Biolase Laser Technology')",
    ar: "تقنية ليزر Biolase", en: "Biolase Laser Technology", key: "home.technology.t3"
  },
  // 4. Treatments
  {
    regex: /t\('home\.treatments\.title',\s*'علاجات أسنان متقدمة مصممة خصيصًا لتحقيق أهداف ابتسامتك'\)/g,
    replace: "t('home.treatments.title', 'Advanced dental treatments specially designed to achieve your smile goals')",
    ar: "علاجات أسنان متقدمة مصممة خصيصًا لتحقيق أهداف ابتسامتك",
    en: "Advanced dental treatments specially designed to achieve your smile goals",
    key: "home.treatments.title"
  },
  {
    regex: /t\('home\.treatments\.subtitle',\s*'علاجات أسنان متقدمة مصممة خصيصًا لتحقيق أهداف ابتسامتك'\)/g,
    replace: "t('home.treatments.subtitle', 'Advanced dental treatments specially designed to achieve your smile goals')",
    ar: "علاجات أسنان متقدمة مصممة خصيصًا لتحقيق أهداف ابتسامتك",
    en: "Advanced dental treatments specially designed to achieve your smile goals",
    key: "home.treatments.subtitle"
  },
  // 5. Before & After
  {
    regex: /t\('home\.realResults',\s*'نتائج حقيقية للمرضى'\)/g,
    replace: "t('home.realResults', 'Real Patient Results')",
    ar: "نتائج حقيقية للمرضى", en: "Real Patient Results", key: "home.realResults"
  },
  {
    regex: /t\('home\.beforeAfterDesc',\s*'مرضى حقيقيون، نتائج حقيقية في عيادة FeRa\. قد تختلف النتائج بناءً على الحالات السريرية الفردية\.'\)/g,
    replace: "t('home.beforeAfterDesc', 'Real patients, real results at FeRa Clinic. Results may vary based on individual clinical cases.')",
    ar: "مرضى حقيقيون، نتائج حقيقية في عيادة FeRa. قد تختلف النتائج بناءً على الحالات السريرية الفردية.",
    en: "Real patients, real results at FeRa Clinic. Results may vary based on individual clinical cases.",
    key: "home.beforeAfterDesc"
  },
  {
    regex: /t\('home\.viewFullGallery',\s*'شاهد الأرشيف السريري'\)/g,
    replace: "t('home.viewFullGallery', 'View Clinical Archive')",
    ar: "شاهد الأرشيف السريري", en: "View Clinical Archive", key: "home.viewFullGallery"
  },
  // 6. Clinic
  {
    regex: /t\('home\.theClinic',\s*'العيادة'\)/g,
    replace: "t('home.theClinic', 'The Clinic')",
    ar: "العيادة", en: "The Clinic", key: "home.theClinic"
  },
  {
    regex: /t\('home\.stateOfArt1',\s*'أسنان متقدمة'\)/g,
    replace: "t('home.stateOfArt1', 'Advanced Dental')",
    ar: "أسنان متقدمة", en: "Advanced Dental", key: "home.stateOfArt1"
  },
  {
    regex: /t\('home\.stateOfArt2',\s*'عيادة في إسطنبول'\)/g,
    replace: "t('home.stateOfArt2', 'Clinic in Istanbul')",
    ar: "عيادة في إسطنبول", en: "Clinic in Istanbul", key: "home.stateOfArt2"
  },
  {
    regex: /t\('home\.stateOfArtDesc',\s*'تتميز عيادتنا في إسطنبول بتقنية تصوير ثلاثي الأبعاد CBCT، وتقنية التصميم الرقمي للابتسامة، وأنظمة تعقيم من الفئة ب - لتلبية معايير السلامة والتميز الطبي للمرضى\.'\)/g,
    replace: "t('home.stateOfArtDesc', 'Our Istanbul clinic features 3D CBCT imaging, Digital Smile Design, and Class-B sterilization systems - meeting the highest standards of safety and medical excellence for patients.')",
    ar: "تتميز عيادتنا في إسطنبول بتقنية تصوير ثلاثي الأبعاد CBCT، وتقنية التصميم الرقمي للابتسامة، وأنظمة تعقيم من الفئة ب - لتلبية معايير السلامة والتميز الطبي للمرضى.",
    en: "Our Istanbul clinic features 3D CBCT imaging, Digital Smile Design, and Class-B sterilization systems - meeting the highest standards of safety and medical excellence for patients.",
    key: "home.stateOfArtDesc"
  },
  {
    regex: /t\('home\.clinic\.feature1',\s*'تعقيم من الفئة ب في كل غرفة'\)/g,
    replace: "t('home.clinic.feature1', 'Class B Sterilization in Every Room')",
    ar: "تعقيم من الفئة ب في كل غرفة", en: "Class B Sterilization in Every Room", key: "home.clinic.feature1"
  },
  {
    regex: /t\('home\.clinic\.feature2',\s*'تصوير تشخيصي ثلاثي الأبعاد CBCT'\)/g,
    replace: "t('home.clinic.feature2', '3D CBCT Diagnostic Imaging')",
    ar: "تصوير تشخيصي ثلاثي الأبعاد CBCT", en: "3D CBCT Diagnostic Imaging", key: "home.clinic.feature2"
  },
  {
    regex: /t\('home\.clinic\.feature3',\s*'التصميم الرقمي للابتسامة \(DSD\)'\)/g,
    replace: "t('home.clinic.feature3', 'Digital Smile Design (DSD)')",
    ar: "التصميم الرقمي للابتسامة (DSD)", en: "Digital Smile Design (DSD)", key: "home.clinic.feature3"
  },
  {
    regex: /t\('home\.clinic\.feature4',\s*'بروتوكول معتمدة من ISO'\)/g,
    replace: "t('home.clinic.feature4', 'ISO Certified Protocols')",
    ar: "بروتوكول معتمدة من ISO", en: "ISO Certified Protocols", key: "home.clinic.feature4"
  },
  // 7. Medical Tourism
  {
    regex: /t\('home\.medicalTourism',\s*'رعاية المرضى العالمية'\)/g,
    replace: "t('home.medicalTourism', 'Global Patient Care')",
    ar: "رعاية المرضى العالمية", en: "Global Patient Care", key: "home.medicalTourism"
  },
  {
    regex: /t\('home\.completeCare1',\s*'رعاية سياحية طبية'\)/g,
    replace: "t('home.completeCare1', 'Medical Tourism Care')",
    ar: "رعاية سياحية طبية", en: "Medical Tourism Care", key: "home.completeCare1"
  },
  {
    regex: /t\('home\.completeCare2',\s*'شاملة في إسطنبول'\)/g,
    replace: "t('home.completeCare2', 'Comprehensive in Istanbul')",
    ar: "شاملة في إسطنبول", en: "Comprehensive in Istanbul", key: "home.completeCare2"
  },
  {
    regex: /t\('home\.completeCareDesc',\s*'توفر عيادة FeRa خدمات سياحية طبية شاملة - من النقل من المطار والإقامة في الفنادق إلى التنسيق السريري - مما يسمح لك بالتركيز بالكامل على علاجك وتعافيك في إسطنبول\.'\)/g,
    replace: "t('home.completeCareDesc', 'FeRa Clinic provides comprehensive medical tourism services - from airport transfers and hotel accommodation to clinical coordination - allowing you to focus entirely on your treatment and recovery in Istanbul.')",
    ar: "توفر عيادة FeRa خدمات سياحية طبية شاملة - من النقل من المطار والإقامة في الفنادق إلى التنسيق السريري - مما يسمح لك بالتركيز بالكامل على علاجك وتعافيك في إسطنبول.",
    en: "FeRa Clinic provides comprehensive medical tourism services - from airport transfers and hotel accommodation to clinical coordination - allowing you to focus entirely on your treatment and recovery in Istanbul.",
    key: "home.completeCareDesc"
  },
  {
    regex: /t\('home\.tourism\.vip',\s*'النقل المميز'\)/g,
    replace: "t('home.tourism.vip', 'VIP Transfers')",
    ar: "النقل المميز", en: "VIP Transfers", key: "home.tourism.vip"
  },
  {
    regex: /t\('home\.tourism\.hotel',\s*'إقامة فاخرة'\)/g,
    replace: "t('home.tourism.hotel', 'Luxury Accommodation')",
    ar: "إقامة فاخرة", en: "Luxury Accommodation", key: "home.tourism.hotel"
  },
  {
    regex: /t\('home\.tourism\.language',\s*'متعدد اللغات'\)/g,
    replace: "t('home.tourism.language', 'Multilingual')",
    ar: "متعدد اللغات", en: "Multilingual", key: "home.tourism.language"
  },
  {
    regex: /t\('home\.tourism\.coordinator',\s*'التنسيق'\)/g,
    replace: "t('home.tourism.coordinator', 'Coordination')",
    ar: "التنسيق", en: "Coordination", key: "home.tourism.coordinator"
  },
  // 8. Testimonials
  {
    regex: /t\('home\.patientTestimonials',\s*'تجارب المرضى الموثقة'\)/g,
    replace: "t('home.patientTestimonials', 'Verified Patient Experiences')",
    ar: "تجارب المرضى الموثقة", en: "Verified Patient Experiences", key: "home.patientTestimonials"
  },
  {
    regex: /t\('home\.whatOurPatientsSay',\s*'تجارب المرضى'\)/g,
    replace: "t('home.whatOurPatientsSay', 'Patient Experiences')",
    ar: "تجارب المرضى", en: "Patient Experiences", key: "home.whatOurPatientsSay"
  },
  {
    regex: /t\('home\.realOutcomes',\s*'تجارب حقيقية من مرضى دوليين أكملوا علاجاتهم للأسنان في عيادة FeRa في إسطنبول\.'\)/g,
    replace: "t('home.realOutcomes', 'Real experiences from international patients who completed their dental treatments at FeRa Clinic in Istanbul.')",
    ar: "تجارب حقيقية من مرضى دوليين أكملوا علاجاتهم للأسنان في عيادة FeRa في إسطنبول.",
    en: "Real experiences from international patients who completed their dental treatments at FeRa Clinic in Istanbul.",
    key: "home.realOutcomes"
  },
  // 9. Newsletter
  {
    regex: /t\('home\.newsletter\.title',\s*'ابقَ على اطلاع'\)/g,
    replace: "t('home.newsletter.title', 'Stay Updated')",
    ar: "ابقَ على اطلاع", en: "Stay Updated", key: "home.newsletter.title"
  },
  {
    regex: /t\('home\.newsletter\.subtitle',\s*'رؤى خبراء الأسنان وأخبار عيادة إسطنبول'\)/g,
    replace: "t('home.newsletter.subtitle', 'Dental Expert Insights and Istanbul Clinic News')",
    ar: "رؤى خبراء الأسنان وأخبار عيادة إسطنبول", en: "Dental Expert Insights and Istanbul Clinic News", key: "home.newsletter.subtitle"
  },
  {
    regex: /t\('home\.newsletter\.desc',\s*'تلق رؤى خبراء الأسنان وتحديثات العلاجات وعروض حصرية مباشرة من فريقنا السريري في إسطنبول\.'\)/g,
    replace: "t('home.newsletter.desc', 'Receive dental expert insights, treatment updates, and exclusive offers directly from our clinical team in Istanbul.')",
    ar: "تلق رؤى خبراء الأسنان وتحديثات العلاجات وعروض حصرية مباشرة من فريقنا السريري في إسطنبول.",
    en: "Receive dental expert insights, treatment updates, and exclusive offers directly from our clinical team in Istanbul.",
    key: "home.newsletter.desc"
  },
  {
    regex: /t\('home\.newsletter\.emailPlaceholder',\s*'عنوان بريدك الإلكتروني'\)/g,
    replace: "t('home.newsletter.emailPlaceholder', 'Your Email Address')",
    ar: "عنوان بريدك الإلكتروني", en: "Your Email Address", key: "home.newsletter.emailPlaceholder"
  },
  {
    regex: /t\('home\.newsletter\.subscribe',\s*'اشترك الآن'\)/g,
    replace: "t('home.newsletter.subscribe', 'Subscribe Now')",
    ar: "اشترك الآن", en: "Subscribe Now", key: "home.newsletter.subscribe"
  },
  // 10. FAQ
  {
    regex: /t\('home\.faq\.label',\s*'الأسئلة الشائعة'\)/g,
    replace: "t('home.faq.label', 'Frequently Asked Questions')",
    ar: "الأسئلة الشائعة", en: "Frequently Asked Questions", key: "home.faq.label"
  },
  {
    regex: /t\('home\.faq\.title',\s*'الأسئلة الشائعة'\)/g,
    replace: "t('home.faq.title', 'Frequently Asked Questions')",
    ar: "الأسئلة الشائعة", en: "Frequently Asked Questions", key: "home.faq.title"
  },
  {
    regex: /t\('home\.faq\.desc',\s*'إجابات واضحة حول زراعة الأسنان وتصميم الابتسامة وتخطيط العلاج ورعاية المرضى في عيادتنا في إسطنبول\.'\)/g,
    replace: "t('home.faq.desc', 'Clear answers about dental implants, smile design, treatment planning, and patient care at our clinic in Istanbul.')",
    ar: "إجابات واضحة حول زراعة الأسنان وتصميم الابتسامة وتخطيط العلاج ورعاية المرضى في عيادتنا في إسطنبول.",
    en: "Clear answers about dental implants, smile design, treatment planning, and patient care at our clinic in Istanbul.",
    key: "home.faq.desc"
  },
  // 11. CTA
  {
    regex: /t\('home\.ctaTitle1',\s*'ابدأ رحلة التحوّل'\)/g,
    replace: "t('home.ctaTitle1', 'Start Your Transformation Journey')",
    ar: "ابدأ رحلة التحوّل", en: "Start Your Transformation Journey", key: "home.ctaTitle1"
  },
  {
    regex: /t\('home\.ctaTitle2',\s*'الخاصة بك'\)/g,
    replace: "t('home.ctaTitle2', 'Today')",
    ar: "الخاصة بك", en: "Today", key: "home.ctaTitle2"
  },
  {
    regex: /t\('home\.readyToGetStartedDesc',\s*"تواصل مع منسقي العلاج لدينا اليوم\. استشارة مجانية، لا التزام، استجابة احترافية من فريقنا في إسطنبول\."\)/g,
    replace: "t('home.readyToGetStartedDesc', 'Connect with our treatment coordinators today. Free consultation, no obligation, professional response from our team in Istanbul.')",
    ar: "تواصل مع منسقي العلاج لدينا اليوم. استشارة مجانية، لا التزام، استجابة احترافية من فريقنا في إسطنبول.",
    en: "Connect with our treatment coordinators today. Free consultation, no obligation, professional response from our team in Istanbul.",
    key: "home.readyToGetStartedDesc"
  },
  {
    regex: /t\('common\.designYourSmile',\s*'صمّم ابتسامتك'\)/g,
    replace: "t('common.designYourSmile', 'Design Your Smile')",
    ar: "صمّم ابتسامتك", en: "Design Your Smile", key: "common.designYourSmile"
  },
  {
    regex: /t\('common\.whatsappConsultationLong',\s*'استشارة تصميم الابتسامة عبر واتساب'\)/g,
    replace: "t('common.whatsappConsultationLong', 'WhatsApp Smile Design Consultation')",
    ar: "استشارة تصميم الابتسامة عبر واتساب", en: "WhatsApp Smile Design Consultation", key: "common.whatsappConsultationLong"
  }
];

// Now the hardcoded blocks in JSX
const hardcodedBlocks = [
  // 1. Trust Block
  {
    regex: /<span className="text-\[10px\] font-bold uppercase tracking-\[0\.4em\] text-\[#0B1C2D\]\/60 block">الثقة العالمية<\/span>/g,
    replace: `<span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B1C2D]/60 block">{t('home.trustBadgeLabel', 'Global Trust')}</span>`,
    ar: "الثقة العالمية", en: "Global Trust", key: "home.trustBadgeLabel"
  },
  {
    regex: /موثوق من قبل مرضى من مختلف أنحاء العالم/g,
    replace: `{t('home.trustedByGlobal', 'Trusted by patients from around the world')}`,
    ar: "موثوق من قبل مرضى من مختلف أنحاء العالم", en: "Trusted by patients from around the world", key: "home.trustedByGlobal"
  },
  {
    regex: /تجارب حقيقية للمرضى\. نتائج علاجية موثقة\. اكتشف لماذا يختار المرضى من مختلف أنحاء العالم عيادة FeRa للعناية بالأسنان في إسطنبول\./g,
    replace: `{t('home.trustedDesc', 'Real patient experiences. Documented treatment results. Discover why patients from all over the world choose FeRa Clinic for dental care in Istanbul.')}`,
    ar: "تجارب حقيقية للمرضى. نتائج علاجية موثقة. اكتشف لماذا يختار المرضى من مختلف أنحاء العالم عيادة FeRa للعناية بالأسنان في إسطنبول.",
    en: "Real patient experiences. Documented treatment results. Discover why patients from all over the world choose FeRa Clinic for dental care in Istanbul.",
    key: "home.trustedDesc"
  },
  // 2. Social Block
  {
    regex: /<span className="text-\[10px\] font-bold uppercase tracking-\[0\.4em\] text-white\/60 block">الرحلة الاجتماعية<\/span>/g,
    replace: `<span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60 block">{t('home.socialJourneyLabel', 'Social Journey')}</span>`,
    ar: "الرحلة الاجتماعية", en: "Social Journey", key: "home.socialJourneyLabel"
  },
  {
    regex: /تابع تميزنا الطبي/g,
    replace: `{t('home.followExcellence', 'Follow Our Medical Excellence')}`,
    ar: "تابع تميزنا الطبي", en: "Follow Our Medical Excellence", key: "home.followExcellence"
  },
  {
    regex: /استكشف التحولات الحقيقية، ولمحات من خلف الكواليس، وتحديثات يومية من عيادتنا\./g,
    replace: `{t('home.exploreUpdates', 'Explore real transformations, behind-the-scenes glimpses, and daily updates from our clinic.')}`,
    ar: "استكشف التحولات الحقيقية، ولمحات من خلف الكواليس، وتحديثات يومية من عيادتنا.",
    en: "Explore real transformations, behind-the-scenes glimpses, and daily updates from our clinic.",
    key: "home.exploreUpdates"
  },
  // 3. Contact Info inside Social Block
  {
    regex: /label: 'الموقع'/g,
    replace: `label: t('common.location', 'Location')`,
    ar: "الموقع", en: "Location", key: "common.location"
  },
  {
    regex: /value: 'زيتينبورنو، إسطنبول'/g,
    replace: `value: t('common.locationValue', 'Zeytinburnu, Istanbul')`,
    ar: "زيتينبورنو، إسطنبول", en: "Zeytinburnu, Istanbul", key: "common.locationValue"
  },
  {
    regex: /label: 'واتساب'/g,
    replace: `label: t('common.whatsapp', 'WhatsApp')`,
    ar: "واتساب", en: "WhatsApp", key: "common.whatsapp"
  },
  {
    regex: /label: 'البريد الإلكتروني'/g,
    replace: `label: t('common.email', 'Email')`,
    ar: "البريد الإلكتروني", en: "Email", key: "common.email"
  },
  // 4. Inside Clinic Block
  {
    regex: /داخل عيادة FeRa/g,
    replace: `{t('home.insideClinicLabel', 'Inside FeRa Clinic')}`,
    ar: "داخل عيادة FeRa", en: "Inside FeRa Clinic", key: "home.insideClinicLabel"
  },
  {
    regex: /تعرّف على عيادتنا في إسطنبول/g,
    replace: `{t('home.insideClinicTitle', 'Get to know our clinic in Istanbul')}`,
    ar: "تعرّف على عيادتنا في إسطنبول", en: "Get to know our clinic in Istanbul", key: "home.insideClinicTitle"
  },
  {
    regex: /نظرة أقرب على مرافقنا وتقنياتنا ورحلة المريض\. شاهد الدقة والعناية والنتائج التي تغيّر الحياة والتي تحدد معايير FeRa\./g,
    replace: `{t('home.insideClinicDesc', 'A closer look at our facilities, technology, and patient journey. See the precision, care, and life-changing results that define FeRa standards.')}`,
    ar: "نظرة أقرب على مرافقنا وتقنياتنا ورحلة المريض. شاهد الدقة والعناية والنتائج التي تغيّر الحياة والتي تحدد معايير FeRa.",
    en: "A closer look at our facilities, technology, and patient journey. See the precision, care, and life-changing results that define FeRa standards.",
    key: "home.insideClinicDesc"
  }
];

const allReplacements = [...replacements, ...hardcodedBlocks];
const keysData = [];

allReplacements.forEach(r => {
  homeContent = homeContent.replace(r.regex, r.replace);
  keysData.push({ key: r.key, en: r.en, ar: r.ar });
});

fs.writeFileSync(homePath, homeContent, 'utf8');
console.log('Home.tsx updated successfully.');

// Helper to set nested value
function setNested(obj, pathStr, value) {
  const keys = pathStr.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

// Update locales
languages.forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  if (!fs.existsSync(filePath)) return;
  
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  keysData.forEach(kd => {
    // If it's Arabic, put the Arabic text, else fallback to English
    const textToInsert = (lang === 'ar') ? kd.ar : kd.en;
    setNested(content, kd.key, textToInsert);
  });
  
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
  console.log(`Updated ${lang}.json`);
});
