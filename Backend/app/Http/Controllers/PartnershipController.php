<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Partnership;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewPartnershipNotification;

class PartnershipController extends Controller
{
    public function store(Request $request)
    {
        // Validate the request
        $validator = Validator::make($request->all(), [
            'full_name' => 'required|string|max:255',
            'company_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'country' => 'required|string|max:100',
            'partnership_type' => 'required|string|max:100',
            'website_or_social' => 'nullable|url|max:500',
            'message' => 'nullable|string|max:2000',
            'preferred_contact_method' => 'required|string|max:50',
            'language' => 'nullable|string|max:10',
            'page_url' => 'nullable|url',
            'utm_source' => 'nullable|string|max:255',
            'utm_medium' => 'nullable|string|max:255',
            'utm_campaign' => 'nullable|string|max:255',
        ]);

        // Additional validation for email domains
        $validator->after(function ($validator) use ($request) {
            $email = $request->input('email');
            if ($email) {
                $forbiddenDomains = ['example.com', 'fake.com', 'dummy.com', 'mailinator.com', 'tempmail.com', '10minutemail.com'];
                $forbiddenEmails = ['test@test.com', 'test@gmail.com'];
                $domain = explode('@', $email)[1] ?? '';
                
                if (in_array($email, $forbiddenEmails) || in_array($domain, $forbiddenDomains)) {
                    $validator->errors()->add('email', 'Please provide a valid, real email address.');
                }
            }
        });

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        // Sanitize inputs
        $input = $request->all();
        $xssPatterns = ['/<script/i', '/javascript:/i', '/onerror=/i', '/onclick=/i', '/<iframe/i', '/<img/i'];
        
        foreach ($input as $key => $value) {
            if (is_string($value)) {
                $value = trim($value);
                foreach ($xssPatterns as $pattern) {
                    if (preg_match($pattern, $value)) {
                        return response()->json(['success' => false, 'errors' => ['general' => ['Invalid characters detected.']]], 422);
                    }
                }
                if (in_array($key, ['full_name', 'company_name', 'country', 'partnership_type', 'message', 'preferred_contact_method'])) {
                    $value = strip_tags($value);
                }
                $input[$key] = $value;
            }
        }
        
        // Clean phone number
        if (!empty($input['phone'])) {
            $hasLeadingPlus = str_starts_with(trim($input['phone']), '+');
            $digitsOnly = preg_replace('/\D/', '', $input['phone']);
            $input['phone'] = $hasLeadingPlus ? '+' . $digitsOnly : $digitsOnly;
        }

        $request->replace($input);

        // Store the partnership application in the database
        $partnership = Partnership::create($validator->validated());

        // Dispatch background job for email notification
        \App\Jobs\SendPartnershipNotification::dispatch($partnership);

        
        // Return a successful response
        return response()->json([
            'success' => true,
            'message' => 'Partnership application received successfully.'
        ]);
    }
}
