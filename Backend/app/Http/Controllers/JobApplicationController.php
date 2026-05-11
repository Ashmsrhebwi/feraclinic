<?php

namespace App\Http\Controllers;

use App\Models\JobApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewJobApplicationNotification;

class JobApplicationController extends Controller
{
    public function store(Request $request)
    {
        $rules = [
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'position' => 'required|string|max:255',
            'experience' => 'nullable|string|max:2000',
            'language' => 'nullable|string|max:10',
            'page_url' => 'nullable|url',
        ];

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
                if (in_array($key, ['full_name', 'position', 'experience'])) {
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

        // Store the job application in the database
        $jobApplication = JobApplication::create($validator->validated());

        // Dispatch background job for email notification
        \App\Jobs\SendJobApplicationNotification::dispatch($jobApplication);

        // Return a successful response
        return response()->json([
            'success' => true,
            'message' => 'Job application received successfully.'
        ]);
    }
}
