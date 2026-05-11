<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Corporate;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewCorporateNotification;

class CorporateController extends Controller
{
    public function store(Request $request)
    {
        // Validate the request
        $validator = Validator::make($request->all(), [
            'company_name' => 'required|string|max:255',
            'contact_person' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'country' => 'required|string|max:100',
            'inquiry_type' => 'required|string|max:100',
            'message' => 'nullable|string|max:2000',
            'preferred_contact_method' => 'required|string|max:50',
            'language' => 'nullable|string|max:10',
            'page_url' => 'nullable|url',
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

        // Store the corporate inquiry in the database
        $corporate = Corporate::create($validator->validated());

        // Dispatch background job for email notification
        \App\Jobs\SendCorporateNotification::dispatch($corporate);

        // Return a successful response
        return response()->json([
            'success' => true,
            'message' => 'Corporate inquiry received successfully.'
        ]);
    }
}
