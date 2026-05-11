<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Job Application - FeRa Clinic</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .header {
            background: linear-gradient(135deg, #1B4698 0%, #0B2A3C 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 12px 12px 0 0;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
        }
        .header p {
            margin: 10px 0 0 0;
            opacity: 0.9;
        }
        .content {
            background: white;
            padding: 40px;
            border-radius: 0 0 12px 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .field {
            margin-bottom: 25px;
        }
        .field-label {
            font-weight: 600;
            color: #1B4698;
            margin-bottom: 5px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .field-value {
            font-size: 16px;
            color: #333;
            padding: 12px;
            background: #f8f9ff;
            border-left: 4px solid #1B4698;
            border-radius: 4px;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding: 20px;
            color: #666;
            font-size: 14px;
        }
        .footer a {
            color: #1B4698;
            text-decoration: none;
        }
        .experience {
            white-space: pre-wrap;
            line-height: 1.8;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🦷 New Job Application</h1>
        <p>FeRa Clinic - Career Opportunity</p>
    </div>

    <div class="content">
        <div class="field">
            <div class="field-label">Full Name</div>
            <div class="field-value">{{ $jobApplication->full_name }}</div>
        </div>

        <div class="field">
            <div class="field-label">Email Address</div>
            <div class="field-value">{{ $jobApplication->email }}</div>
        </div>

        <div class="field">
            <div class="field-label">Phone Number</div>
            <div class="field-value">{{ $jobApplication->phone }}</div>
        </div>

        <div class="field">
            <div class="field-label">Position Applied For</div>
            <div class="field-value">{{ $jobApplication->position }}</div>
        </div>

        @if($jobApplication->experience)
        <div class="field">
            <div class="field-label">Experience / Message</div>
            <div class="field-value experience">{{ $jobApplication->experience }}</div>
        </div>
        @endif

        @if($jobApplication->language)
        <div class="field">
            <div class="field-label">Language</div>
            <div class="field-value">{{ strtoupper($jobApplication->language) }}</div>
        </div>
        @endif

        @if($jobApplication->page_url)
        <div class="field">
            <div class="field-label">Application Source</div>
            <div class="field-value">
                <a href="{{ $jobApplication->page_url }}" target="_blank">{{ $jobApplication->page_url }}</a>
            </div>
        </div>
        @endif

        <div class="field">
            <div class="field-label">Application Date</div>
            <div class="field-value">{{ $jobApplication->created_at->format('F j, Y \a\t g:i A') }}</div>
        </div>

        <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin-top: 30px; border-left: 4px solid #006693;">
            <p style="margin: 0; color: #1B4698; font-weight: 600;">
                📋 Next Steps:
            </p>
            <ul style="margin: 10px 0 0 20px; color: #333;">
                <li>Review the candidate's qualifications</li>
                <li>Contact the applicant for initial screening</li>
                <li>Schedule an interview if suitable</li>
                <li>Check for CV submission to consultation@feraclinic.com</li>
            </ul>
        </div>
    </div>

    <div class="footer">
        <p>This email was sent automatically from the FeRa Clinic website.</p>
        <p>© {{ date('Y') }} FeRa Clinic. All rights reserved.</p>
        <p>
            Istanbul, Turkey | 
            <a href="mailto:consultation@feraclinic.com">consultation@feraclinic.com</a>
        </p>
    </div>
</body>
</html>
