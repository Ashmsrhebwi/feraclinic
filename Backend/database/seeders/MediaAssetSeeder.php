<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MediaAsset;

class MediaAssetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $assets = [
            // --- TREATMENT: Dental Implants ---
            ['media_key' => 'treatment_implants_main', 'category' => 'treatments', 'alt_en' => 'Dental Implants Hero'],
            ['media_key' => 'treatment_implants_proc_1', 'category' => 'treatments', 'alt_en' => 'Dental Implants Procedure 1'],
            ['media_key' => 'treatment_implants_proc_2', 'category' => 'treatments', 'alt_en' => 'Dental Implants Procedure 2'],
            ['media_key' => 'treatment_implants_proc_3', 'category' => 'treatments', 'alt_en' => 'Dental Implants Procedure 3'],
            ['media_key' => 'treatment_implants_proc_4', 'category' => 'treatments', 'alt_en' => 'Dental Implants Procedure 4'],
            ['media_key' => 'treatment_implants_blog', 'category' => 'blog', 'alt_en' => 'Dental Implants Blog Cover'],

            // --- TREATMENT: Porcelain Veneers ---
            ['media_key' => 'treatment_veneers_main', 'category' => 'treatments', 'alt_en' => 'Porcelain Veneers Hero'],
            ['media_key' => 'treatment_veneers_proc_1', 'category' => 'treatments', 'alt_en' => 'Porcelain Veneers Procedure 1'],
            ['media_key' => 'treatment_veneers_proc_2', 'category' => 'treatments', 'alt_en' => 'Porcelain Veneers Procedure 2'],
            ['media_key' => 'treatment_veneers_proc_3', 'category' => 'treatments', 'alt_en' => 'Porcelain Veneers Procedure 3'],
            ['media_key' => 'treatment_veneers_proc_4', 'category' => 'treatments', 'alt_en' => 'Porcelain Veneers Procedure 4'],
            ['media_key' => 'treatment_veneers_blog', 'category' => 'blog', 'alt_en' => 'Porcelain Veneers Blog Cover'],

            // --- TREATMENT: Orthodontics ---
            ['media_key' => 'treatment_ortho_main', 'category' => 'treatments', 'alt_en' => 'Orthodontics Hero'],
            ['media_key' => 'treatment_ortho_proc_1', 'category' => 'treatments', 'alt_en' => 'Orthodontics Procedure 1'],
            ['media_key' => 'treatment_ortho_proc_2', 'category' => 'treatments', 'alt_en' => 'Orthodontics Procedure 2'],
            ['media_key' => 'treatment_ortho_proc_3', 'category' => 'treatments', 'alt_en' => 'Orthodontics Procedure 3'],
            ['media_key' => 'treatment_ortho_proc_4', 'category' => 'treatments', 'alt_en' => 'Orthodontics Procedure 4'],
            ['media_key' => 'treatment_ortho_blog', 'category' => 'blog', 'alt_en' => 'Orthodontics Blog Cover'],

            // --- TREATMENT: Professional Whitening ---
            ['media_key' => 'treatment_whitening_main', 'category' => 'treatments', 'alt_en' => 'Professional Whitening Hero'],
            ['media_key' => 'treatment_whitening_proc_1', 'category' => 'treatments', 'alt_en' => 'Professional Whitening Procedure 1'],
            ['media_key' => 'treatment_whitening_proc_2', 'category' => 'treatments', 'alt_en' => 'Professional Whitening Procedure 2'],
            ['media_key' => 'treatment_whitening_proc_3', 'category' => 'treatments', 'alt_en' => 'Professional Whitening Procedure 3'],
            ['media_key' => 'treatment_whitening_proc_4', 'category' => 'treatments', 'alt_en' => 'Professional Whitening Procedure 4'],
            ['media_key' => 'treatment_whitening_blog', 'category' => 'blog', 'alt_en' => 'Professional Whitening Blog Cover'],

            // --- TREATMENT: Full Smile Design ---
            ['media_key' => 'treatment_smile_design_main', 'category' => 'treatments', 'alt_en' => 'Full Smile Design Hero'],
            ['media_key' => 'treatment_smile_design_proc_1', 'category' => 'treatments', 'alt_en' => 'Full Smile Design Procedure 1'],
            ['media_key' => 'treatment_smile_design_proc_2', 'category' => 'treatments', 'alt_en' => 'Full Smile Design Procedure 2'],
            ['media_key' => 'treatment_smile_design_proc_3', 'category' => 'treatments', 'alt_en' => 'Full Smile Design Procedure 3'],
            ['media_key' => 'treatment_smile_design_proc_4', 'category' => 'treatments', 'alt_en' => 'Full Smile Design Procedure 4'],
            ['media_key' => 'treatment_smile_design_blog', 'category' => 'blog', 'alt_en' => 'Full Smile Design Blog Cover'],

            // --- TREATMENT: All-on-5 Restoration ---
            ['media_key' => 'treatment_allon5_main', 'category' => 'treatments', 'alt_en' => 'All-on-5 Restoration Hero'],
            ['media_key' => 'treatment_allon5_proc_1', 'category' => 'treatments', 'alt_en' => 'All-on-5 Restoration Procedure 1'],
            ['media_key' => 'treatment_allon5_proc_2', 'category' => 'treatments', 'alt_en' => 'All-on-5 Restoration Procedure 2'],
            ['media_key' => 'treatment_allon5_proc_3', 'category' => 'treatments', 'alt_en' => 'All-on-5 Restoration Procedure 3'],
            ['media_key' => 'treatment_allon5_proc_4', 'category' => 'treatments', 'alt_en' => 'All-on-5 Restoration Procedure 4'],
            ['media_key' => 'treatment_allon5_blog', 'category' => 'blog', 'alt_en' => 'All-on-5 Restoration Blog Cover'],

            // --- TREATMENT: Zirconium Crowns ---
            ['media_key' => 'treatment_zirconium_main', 'category' => 'treatments', 'alt_en' => 'Zirconium Crowns Hero'],
            ['media_key' => 'treatment_zirconium_proc_1', 'category' => 'treatments', 'alt_en' => 'Zirconium Crowns Procedure 1'],
            ['media_key' => 'treatment_zirconium_proc_2', 'category' => 'treatments', 'alt_en' => 'Zirconium Crowns Procedure 2'],
            ['media_key' => 'treatment_zirconium_proc_3', 'category' => 'treatments', 'alt_en' => 'Zirconium Crowns Procedure 3'],
            ['media_key' => 'treatment_zirconium_proc_4', 'category' => 'treatments', 'alt_en' => 'Zirconium Crowns Procedure 4'],
            ['media_key' => 'treatment_zirconium_blog', 'category' => 'blog', 'alt_en' => 'Zirconium Crowns Blog Cover'],

            // --- TREATMENT: Gingival Sculpting ---
            ['media_key' => 'treatment_gingival_main', 'category' => 'treatments', 'alt_en' => 'Gingival Sculpting Hero'],
            ['media_key' => 'treatment_gingival_proc_1', 'category' => 'treatments', 'alt_en' => 'Gingival Sculpting Procedure 1'],
            ['media_key' => 'treatment_gingival_proc_2', 'category' => 'treatments', 'alt_en' => 'Gingival Sculpting Procedure 2'],
            ['media_key' => 'treatment_gingival_proc_3', 'category' => 'treatments', 'alt_en' => 'Gingival Sculpting Procedure 3'],
            ['media_key' => 'treatment_gingival_proc_4', 'category' => 'treatments', 'alt_en' => 'Gingival Sculpting Procedure 4'],
            ['media_key' => 'treatment_gingival_blog', 'category' => 'blog', 'alt_en' => 'Gingival Sculpting Blog Cover'],

            // --- BEFORE / AFTER ---
            ['media_key' => 'before_after_bg', 'category' => 'before-after', 'alt_en' => 'Before After Section Background'],
            // Generating 15 cases
            ...array_map(fn($i) => ['media_key' => "case_{$i}_before", 'category' => 'before-after', 'alt_en' => "Case {$i} Before"], range(1, 15)),
            ...array_map(fn($i) => ['media_key' => "case_{$i}_after", 'category' => 'before-after', 'alt_en' => "Case {$i} After"], range(1, 15)),

            // --- CLINIC ---
            ['media_key' => 'clinic_reception', 'category' => 'clinic', 'alt_en' => 'Clinic Reception'],
            ['media_key' => 'clinic_waiting', 'category' => 'clinic', 'alt_en' => 'Clinic Waiting Area'],
            ['media_key' => 'clinic_surgery', 'category' => 'clinic', 'alt_en' => 'Clinic Surgery Room'],
            ['media_key' => 'clinic_sterilization', 'category' => 'clinic', 'alt_en' => 'Clinic Sterilization Area'],
            ...array_map(fn($i) => ['media_key' => "clinic_doctor_action_{$i}", 'category' => 'clinic', 'alt_en' => "Doctor in Action {$i}"], range(1, 11)),

            // --- MEDICAL TOURISM ---
            ['media_key' => 'tourism_istanbul_skyline', 'category' => 'medical-tourism', 'alt_en' => 'Istanbul Skyline'],
            ['media_key' => 'tourism_transfer', 'category' => 'medical-tourism', 'alt_en' => 'VIP Transfer'],
            ['media_key' => 'tourism_hotel', 'category' => 'medical-tourism', 'alt_en' => 'Luxury Hotel partner'],
            ['media_key' => 'tourism_journey', 'category' => 'medical-tourism', 'alt_en' => 'Patient Journey in Istanbul'],

            // --- BLOG ---
            ['media_key' => 'blog_page_bg', 'category' => 'blog', 'alt_en' => 'Blog Page Background'],

            // --- DOCTORS ---
            ['media_key' => 'doctor_portrait_1', 'category' => 'doctors', 'alt_en' => 'Doctor 1 Portrait'],
            ['media_key' => 'doctor_portrait_2', 'category' => 'doctors', 'alt_en' => 'Doctor 2 Portrait'],
            ['media_key' => 'doctor_portrait_3', 'category' => 'doctors', 'alt_en' => 'Doctor 3 Portrait'],
            ['media_key' => 'doctor_cv_1', 'category' => 'doctors', 'alt_en' => 'Doctor 1 CV'],

            // --- LOGOS ---
            ['media_key' => 'logo_png', 'category' => 'branding', 'alt_en' => 'FeRa Clinic Logo PNG'],
            ['media_key' => 'logo_svg', 'category' => 'branding', 'alt_en' => 'FeRa Clinic Logo SVG'],
            ['media_key' => 'logo_white', 'category' => 'branding', 'alt_en' => 'FeRa Clinic Logo White'],
            ['media_key' => 'logo_dark', 'category' => 'branding', 'alt_en' => 'FeRa Clinic Logo Dark'],
        ];

        foreach ($assets as $asset) {
            MediaAsset::updateOrCreate(
                ['media_key' => $asset['media_key']],
                [
                    'category' => $asset['category'],
                    'file_path' => 'placeholder.webp', // Default placeholder
                    'alt_en' => $asset['alt_en'],
                    'is_active' => true,
                ]
            );
        }
    }
}
