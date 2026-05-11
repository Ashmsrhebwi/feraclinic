/**
 * Centralized Media Resolver (Static Only)
 * 
 * Maps stable media keys to physical file paths.
 * All images are loaded from the local public/images folder.
 */

export const MEDIA_MAP: Record<string, string> = {
  // --- HERO / MARKETING ---
  "hero_home_main": "/images/fera-clinic/hero/Anasafya-scaled-3.webp",
  "hero_treatments_main": "/images/fera-clinic/clinic/waiting-area.webp",
  "hero_medical_tourism_main": "/images/fera-clinic/clinic/waiting-area.webp",
  "consultation_main_image": "/images/fera-clinic/treatments/orthodontic-checkup.webp",

  // --- TREATMENTS: MAIN ---
  "treatment_implants_main": "/images/photos/dental-implant.jpeg",
  "treatment_implants_detail": "/images/photos/dental-implants-2.jpeg",
  "treatment_veneers_main": "/images/photos/porcelain-veneers.jpeg",
  "treatment_veneers_detail": "/images/photos/porcelain-veneers-2.jpeg",
  "treatment_ortho_main": "/images/photos/orthodontics.jpeg",
  "treatment_whitening_main": "/images/photos/professional-whitening.jpeg",
  "treatment_smile_design_main": "/images/photos/full-smile-design.jpeg",
  "treatment_general_main": "/images/fera-clinic/treatments/general-dentistry.webp",
  "treatment_allon4_main": "/images/fera-clinic/treatments/allon4-surgery.webp",
  "treatment_crowns_main": "/images/fera-clinic/treatments/crown-fitting.webp",
  "treatment_laser_main": "/images/fera-clinic/treatments/laser-procedure.webp",

  // --- CLINIC / FACILITIES ---
  "clinic_surgery": "/images/fera-clinic/clinic/surgery-room.webp",
  "clinic_waiting": "/images/fera-clinic/clinic/waiting-area.webp",
  "clinic_reception": "/images/fera-clinic/clinic/reception.webp",

  // --- TREATMENT SPECIFIC: IMPLANTS ---
  "treatment_implants_proc": "/images/fera-clinic/treatments/dental-implants/procedure.webp",
  "treatment_implants_model": "/images/fera-clinic/treatments/dental-implants/model.webp",
  "treatment_implants_consult": "/images/fera-clinic/treatments/dental-implants/consultation.webp",
  "treatment_implants_scan": "/images/fera-clinic/treatments/dental-implants/scan.webp",
  "treatment_implants_smile": "/images/fera-clinic/treatments/dental-implants/final-smile.webp",

  // --- TREATMENT SPECIFIC: HOLLYWOOD SMILE ---
  "treatment_veneers_design": "/images/fera-clinic/treatments/hollywood-smile/design.webp",
  "treatment_veneers_units": "/images/fera-clinic/treatments/hollywood-smile/veneers.webp",
  "treatment_veneers_shade": "/images/fera-clinic/treatments/hollywood-smile/shade.webp",
  "treatment_veneers_preview": "/images/fera-clinic/treatments/hollywood-smile/preview.webp",
  "treatment_veneers_smile": "/images/fera-clinic/treatments/hollywood-smile/final-smile.webp",

  // --- TREATMENT SPECIFIC: ORTHODONTICS ---
  "treatment_ortho_braces": "/images/fera-clinic/treatments/orthodontics/braces.webp",
  "treatment_ortho_aligners": "/images/fera-clinic/treatments/orthodontics/aligners.webp",
  "treatment_ortho_consult": "/images/fera-clinic/treatments/orthodontics/consultation.webp",
  "treatment_ortho_alignment": "/images/fera-clinic/treatments/orthodontics/alignment.webp",
  "treatment_ortho_smile": "/images/fera-clinic/treatments/orthodontics/final-smile.webp",

  // --- TREATMENT SPECIFIC: WHITENING ---
  "treatment_whitening_proc": "/images/fera-clinic/treatments/teeth-whitening/procedure.webp",
  "treatment_whitening_gel": "/images/fera-clinic/treatments/teeth-whitening/gel-light.webp",
  "treatment_whitening_comp": "/images/fera-clinic/treatments/teeth-whitening/comparison.webp",
  "treatment_whitening_smile": "/images/fera-clinic/treatments/teeth-whitening/smile.webp",
  "treatment_whitening_room": "/images/fera-clinic/treatments/teeth-whitening/room.webp",

  // --- TREATMENT SPECIFIC: SMILE DESIGN ---
  "treatment_design_full": "/images/fera-clinic/treatments/smile-design/design.webp",
  "treatment_design_analysis": "/images/fera-clinic/treatments/smile-design/analysis.webp",
  "treatment_design_planning": "/images/fera-clinic/treatments/smile-design/planning.webp",
  "treatment_design_consult": "/images/fera-clinic/treatments/smile-design/consultation.webp",
  "treatment_design_smile": "/images/fera-clinic/treatments/smile-design/final-smile.webp",

  // --- TREATMENT SPECIFIC: ALL-ON-4 ---
  "treatment_allon4_arch": "/images/fera-clinic/treatments/all-on-4/arch.webp",
  "treatment_allon4_scan": "/images/fera-clinic/treatments/all-on-4/scan.webp",
  "treatment_allon4_planning": "/images/fera-clinic/treatments/all-on-4/planning.webp",
  "treatment_allon4_prosthesis": "/images/fera-clinic/treatments/all-on-4/prosthesis.webp",
  "treatment_allon4_smile": "/images/fera-clinic/treatments/all-on-4/final-smile.webp",

  // --- TREATMENT SPECIFIC: ZIRCONIUM ---
  "treatment_crowns_closeup": "/images/fera-clinic/treatments/zirconium-crowns/closeup.webp",
  "treatment_crowns_prep": "/images/fera-clinic/treatments/zirconium-crowns/preparation.webp",
  "treatment_crowns_shade": "/images/fera-clinic/treatments/zirconium-crowns/shade.webp",
  "treatment_crowns_lab": "/images/fera-clinic/treatments/zirconium-crowns/lab.webp",
  "treatment_crowns_smile": "/images/fera-clinic/treatments/zirconium-crowns/final-smile.webp",

  // --- TREATMENT SPECIFIC: GUM SCULPTING ---
  "treatment_laser_detail": "/images/fera-clinic/treatments/gum-sculpting/laser.webp",
  "treatment_laser_contour": "/images/fera-clinic/treatments/gum-sculpting/contouring.webp",
  "treatment_laser_analysis": "/images/fera-clinic/treatments/gum-sculpting/analysis.webp",
  "treatment_laser_proc": "/images/fera-clinic/treatments/gum-sculpting/procedure.webp",
  "treatment_laser_smile": "/images/fera-clinic/treatments/gum-sculpting/final-smile.webp",

  // --- BLOG ---
  "blog_implants_guide": "/images/fera-clinic/treatments/implant-procedure.webp",
  "blog_hollywood_secrets": "/images/fera-clinic/treatments/veneer-procedure.webp",
  "blog_ortho_vs_aligners": "/images/fera-clinic/treatments/orthodontic-checkup.webp",
  "blog_digital_dentistry": "/images/fera-clinic/clinic/surgery-room.webp",
  "blog_whitening_tips": "/images/fera-clinic/treatments/general-dentistry.webp",
  "blog_allon4_solution": "/images/fera-clinic/clinic/surgery-room.webp",

  // --- GALLERY: BEFORE / AFTER ---
  "case_1_before": "/images/fera-clinic/before-after/case1-before.jpg",
  "case_1_after": "/images/fera-clinic/before-after/case1-after.jpg",
  "case_2_before": "/images/fera-clinic/before-after/case2-before.jpg",
  "case_2_after": "/images/fera-clinic/before-after/case2-after.jpg",
  "case_3_before": "/images/fera-clinic/before-after/case3-before.jpg",
  "case_3_after": "/images/fera-clinic/before-after/case3-after.jpg",
  "case_4_before": "/images/fera-clinic/before-after/case4-before.jpg",
  "case_4_after": "/images/fera-clinic/before-after/case4-after.jpg",
  "case_5_before": "/images/fera-clinic/before-after/case5-before.jpg",
  "case_5_after": "/images/fera-clinic/before-after/case5-after.jpg",

  // --- GALLERY: CLINIC ---
  "clinic_facility_surgery": "/images/fera-clinic/clinic/surgery-room.webp",
  "clinic_facility_reception": "/images/fera-clinic/clinic/reception.webp",
  "clinic_facility_waiting": "/images/fera-clinic/clinic/waiting-area.webp",
};

/**
 * Resolves a media key to a physical path.
 * Priority: Static MEDIA_MAP -> Raw Path -> Placeholder
 */
export const getMedia = (keyOrPath?: string): string => {
  if (!keyOrPath) return "/images/fera-logo.png";
  
  // 1. Try Static Map (Build-time)
  if (MEDIA_MAP[keyOrPath]) {
    return MEDIA_MAP[keyOrPath];
  }
  
  // 2. Try Raw Path (direct string)
  if (keyOrPath.startsWith("/") || keyOrPath.startsWith("http")) {
    return keyOrPath;
  }
  
  // 3. Ultimate Fallback
  return "/images/fera-logo.png";
};

