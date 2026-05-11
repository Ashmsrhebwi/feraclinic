<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LeadController extends Controller
{
    public function store(Request $request)
    {
        $formType = $request->input('form_type');

        $rules = [
            'form_type' => 'required|string',
            'language' => 'nullable|string',
            'treatment_interest' => 'nullable|string',
            'message' => 'nullable|string',
            'page_url' => 'nullable|url',
            'utm_source' => 'nullable|string',
            'utm_medium' => 'nullable|string',
            'utm_campaign' => 'nullable|string',
            'company_name' => 'nullable|string',
            'country' => 'nullable|string',
            'inquiry_type' => 'nullable|string',
            'preferred_contact_method' => 'nullable|string',
        ];

        if ($formType === 'Newsletter') {
            $rules['email'] = 'required|email';
            $rules['full_name'] = 'nullable|string';
            $rules['phone'] = 'nullable|string';
        } else {
            $rules['full_name'] = 'required|string';
            $rules['phone'] = 'required|string';
            $rules['email'] = 'nullable|email';
        }

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
                if (in_array($key, ['full_name', 'message', 'treatment_interest', 'company_name', 'country', 'inquiry_type', 'preferred_contact_method'])) {
                    $value = strip_tags($value);
                }
                $input[$key] = $value;
            }
        }
        
        if (!empty($input['phone'])) {
            $hasLeadingPlus = str_starts_with(trim($input['phone']), '+');
            $digitsOnly = preg_replace('/\D/', '', $input['phone']);
            $input['phone'] = $hasLeadingPlus ? '+' . $digitsOnly : $digitsOnly;
        }

        $request->replace($input);

        $validator = Validator::make($request->all(), $rules);

        $validator->after(function ($validator) use ($request) {
            $email = strtolower($request->input('email'));
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

        // Store the lead in the database
        $lead = Lead::create($validator->validated());

        // Dispatch background jobs for email notification and Zoho sync
        // This ensures the user gets an instant success response
        \App\Jobs\SendLeadNotification::dispatch($lead);
        
        if (env('ENABLE_ZOHO_SYNC', true) && !in_array($formType, ['Join Us', 'Corporate'])) {
            \App\Jobs\SyncLeadToZoho::dispatch($lead);
        }

        // Return a successful response
        return response()->json([
            'success' => true,
            'message' => 'Lead received successfully.'
        ]);
    }
}
