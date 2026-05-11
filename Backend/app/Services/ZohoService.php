<?php

namespace App\Services;

use App\Models\Lead;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class ZohoService
{
    /**
     * Pushes the lead to Zoho CRM.
     */
    public function createLead(Lead $lead)
    {
        if (!$this->hasCredentials()) {
            Log::warning('Zoho CRM credentials missing. Skipping Zoho integration for Lead ID: ' . $lead->id);
            return false;
        }

        $accessToken = $this->getAccessToken();

        // Map Laravel fields to Zoho API fields
        $leadSource = $lead->form_type;
        if ($leadSource === 'Newsletter') {
            $leadSource = 'Website Newsletter';
        }

        $originalPhone = $lead->phone;
        $sanitizedPhone = null;
        $description = $lead->message;

        if (!empty($originalPhone)) {
            $trimmedPhone = trim($originalPhone);
            $hasLeadingPlus = str_starts_with($trimmedPhone, '+');
            $digitsOnly = preg_replace('/\D/', '', $trimmedPhone);
            $sanitizedPhone = $hasLeadingPlus ? '+' . $digitsOnly : $digitsOnly;

            if (strlen($digitsOnly) < 7) {
                $sanitizedPhone = null;
                $description = ($description ? $description . "\n\n" : "") . "Original Phone: " . $originalPhone;
            }
        }

        $zohoData = [
            'data' => [
                [
                    'Last_Name' => $lead->full_name ?: 'Unknown', // Zoho requires Last Name
                    'Email' => $lead->email,
                    'Phone' => $sanitizedPhone,
                    'Lead_Source' => $leadSource,
                    'Language' => $lead->language,
                    'Treatment_Interest' => $lead->treatment_interest,
                    'Description' => $description,
                    'Company' => $lead->company_name,
                    'Country' => $lead->country,
                    'Lead_Status' => $lead->inquiry_type,
                    'Description' => ($description ? $description . "\n\n" : "") . 
                        "Preferred Contact Method: " . ($lead->preferred_contact_method ?: 'Not specified') . "\n" .
                        "Form Type: " . ($lead->form_type ?: 'Unknown'),
                ]
            ]
        ];

        // Filter out null values so we don't send "Phone": null to Zoho, which might cause issues
        $zohoData['data'][0] = array_filter($zohoData['data'][0], function($value) {
            return $value !== null;
        });

        $apiDomain = env('ZOHO_API_DOMAIN', 'https://www.zohoapis.com');
        $response = Http::withToken($accessToken)
            ->post($apiDomain . '/crm/v3/Leads', $zohoData);

        $responseData = $response->json() ?? [];

        if ($response->failed()) {
            if (strpos($response->body(), 'DUPLICATE_DATA') !== false) {
                Log::info('Zoho CRM Duplicate Data Warning. Existing lead NOT updated per safety constraint. Lead ID: ' . $lead->id);
                return $responseData;
            }
            throw new \Exception('Zoho API Error: ' . $response->body());
        }

        if (isset($responseData['data'][0]['status']) && $responseData['data'][0]['status'] === 'error') {
            $code = $responseData['data'][0]['code'] ?? '';
            if ($code === 'DUPLICATE_DATA') {
                Log::info('Zoho CRM Duplicate Data Warning. Existing lead NOT updated per safety constraint. Lead ID: ' . $lead->id);
                return $responseData;
            }
            throw new \Exception('Zoho API Error: ' . json_encode($responseData));
        }

        return $responseData;
    }

    /**
     * Create a partnership lead in Zoho CRM
     */
    public function createPartnershipLead($partnership)
    {
        $accessToken = $this->getAccessToken();
        
        if (!$accessToken) {
            Log::error('Failed to obtain Zoho CRM access token for partnership lead');
            return null;
        }

        // Clean and format phone number for Zoho
        $originalPhone = $partnership->phone;
        $sanitizedPhone = null;
        
        if (!empty($originalPhone)) {
            $digitsOnly = preg_replace('/\D/', '', $originalPhone);
            if (strlen($digitsOnly) >= 7) {
                $sanitizedPhone = '+' . $digitsOnly;
            } else {
                $sanitizedPhone = null;
                $description = ($description ? $description . "\n\n" : "") . "Original Phone: " . $originalPhone;
            }
        }

        $zohoData = [
            'data' => [
                [
                    'Last_Name' => $partnership->full_name ?: 'Unknown', // Zoho requires Last Name
                    'Email' => $partnership->email,
                    'Phone' => $sanitizedPhone,
                    'Lead_Source' => 'Partnership Application',
                    'Language' => $partnership->language,
                    'Description' => ($partnership->message ?: '') . "\n\n" . 
                        "Company: " . ($partnership->company_name ?: 'Not specified') . "\n" .
                        "Partnership Type: " . ($partnership->partnership_type ?: 'Not specified') . "\n" .
                        "Website/Social: " . ($partnership->website_or_social ?: 'Not provided') . "\n" .
                        "Preferred Contact Method: " . ($partnership->preferred_contact_method ?: 'Not specified') . "\n" .
                        "Country: " . ($partnership->country ?: 'Not specified') . "\n" .
                        "Form Type: Partnership Application",
                ]
            ]
        ];

        // Filter out null values so we don't send "Phone": null to Zoho, which might cause issues
        $zohoData['data'][0] = array_filter($zohoData['data'][0], function($value) {
            return $value !== null;
        });

        $apiDomain = env('ZOHO_API_DOMAIN', 'https://www.zohoapis.com');
        $response = Http::withToken($accessToken)
            ->post($apiDomain . '/crm/v3/Leads', $zohoData);

        $responseData = $response->json() ?? [];

        if ($response->failed()) {
            if (strpos($response->body(), 'DUPLICATE_DATA') !== false) {
                Log::info('Zoho CRM Duplicate Data Warning. Existing partnership lead NOT updated per safety constraint. Partnership ID: ' . $partnership->id);
                return $responseData;
            }
            throw new \Exception('Zoho API Error for partnership: ' . $response->body());
        }

        if (isset($responseData['data'][0]['status']) && $responseData['data'][0]['status'] === 'error') {
            $code = $responseData['data'][0]['code'] ?? '';
            if ($code === 'DUPLICATE_DATA') {
                Log::info('Zoho CRM Duplicate Data Warning. Existing partnership lead NOT updated per safety constraint. Partnership ID: ' . $partnership->id);
                return $responseData;
            }
            throw new \Exception('Zoho API Error for partnership: ' . json_encode($responseData));
        }

        Log::info('Zoho CRM Partnership Lead created successfully. Partnership ID: ' . $partnership->id);
        return $responseData;
    }

    /**
     * Checks if minimum Zoho credentials are set.
     */
    private function hasCredentials(): bool
    {
        return !empty(env('ZOHO_CLIENT_ID')) && 
               !empty(env('ZOHO_CLIENT_SECRET')) && 
               !empty(env('ZOHO_REFRESH_TOKEN'));
    }

    /**
     * Retrieves a valid Access Token, fetching a new one via Refresh Token if expired.
     */
    private function getAccessToken()
    {
        return Cache::remember('zoho_access_token', 3500, function () {
            $accountsUrl = env('ZOHO_ACCOUNTS_URL', 'https://accounts.zoho.com');
            
            $response = Http::asForm()->post($accountsUrl . '/oauth/v2/token', [
                'refresh_token' => env('ZOHO_REFRESH_TOKEN'),
                'client_id' => env('ZOHO_CLIENT_ID'),
                'client_secret' => env('ZOHO_CLIENT_SECRET'),
                'grant_type' => 'refresh_token',
            ]);

            if ($response->failed()) {
                throw new \Exception('Failed to refresh Zoho token: ' . $response->body());
            }

            return $response->json('access_token');
        });
    }
}
