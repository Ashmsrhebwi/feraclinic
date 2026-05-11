<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Partnership Request - FeRa Clinic</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #1B4698;
        }
        .header h1 {
            color: #1B4698;
            margin: 0;
            font-size: 28px;
            font-weight: bold;
        }
        .content {
            margin-bottom: 30px;
        }
        .field {
            margin-bottom: 15px;
            padding: 10px;
            background-color: #f8f9fa;
            border-radius: 5px;
        }
        .field-label {
            font-weight: bold;
            color: #1B4698;
            margin-bottom: 5px;
        }
        .field-value {
            color: #333;
            word-break: break-word;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
        }
        .logo {
            text-align: center;
            margin-bottom: 20px;
        }
        .logo h2 {
            color: #1B4698;
            font-size: 24px;
            margin: 0;
        }
        .badge {
            display: inline-block;
            padding: 4px 8px;
            background-color: #1B4698;
            color: white;
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <h2>FeRa Clinic</h2>
        </div>
        
        <div class="header">
            <h1>New Partnership Request</h1>
            <p>A new partnership application has been submitted on the FeRa Clinic website.</p>
        </div>

        <div class="content">
            <div class="field">
                <div class="field-label">Full Name:</div>
                <div class="field-value">{{ $partnership->full_name }}</div>
            </div>

            <div class="field">
                <div class="field-label">Company / Brand Name:</div>
                <div class="field-value">{{ $partnership->company_name }}</div>
            </div>

            <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value">{{ $partnership->email }}</div>
            </div>

            <div class="field">
                <div class="field-label">Phone / WhatsApp:</div>
                <div class="field-value">{{ $partnership->phone }}</div>
            </div>

            <div class="field">
                <div class="field-label">Country:</div>
                <div class="field-value">{{ $partnership->country }}</div>
            </div>

            <div class="field">
                <div class="field-label">Partnership Type:</div>
                <div class="field-value">
                    <span class="badge">{{ $partnership->partnership_type }}</span>
                </div>
            </div>

            @if($partnership->website_or_social)
            <div class="field">
                <div class="field-label">Website / Social Media:</div>
                <div class="field-value">{{ $partnership->website_or_social }}</div>
            </div>
            @endif

            <div class="field">
                <div class="field-label">Preferred Contact Method:</div>
                <div class="field-value">{{ $partnership->preferred_contact_method }}</div>
            </div>

            @if($partnership->message)
            <div class="field">
                <div class="field-label">Message / Collaboration Details:</div>
                <div class="field-value">{{ nl2br(e($partnership->message)) }}</div>
            </div>
            @endif

            <div class="field">
                <div class="field-label">Language:</div>
                <div class="field-value">{{ $partnership->language ?? 'Not specified' }}</div>
            </div>

            <div class="field">
                <div class="field-label">Submitted From:</div>
                <div class="field-value">{{ $partnership->page_url ?? 'Direct visit' }}</div>
            </div>

            <div class="field">
                <div class="field-label">Submitted At:</div>
                <div class="field-value">{{ $partnership->created_at->format('Y-m-d H:i:s') }}</div>
            </div>

            @if($partnership->utm_source || $partnership->utm_medium || $partnership->utm_campaign)
            <div class="field">
                <div class="field-label">Marketing Information:</div>
                <div class="field-value">
                    @if($partnership->utm_source)<strong>Source:</strong> {{ $partnership->utm_source }}<br>@endif
                    @if($partnership->utm_medium)<strong>Medium:</strong> {{ $partnership->utm_medium }}<br>@endif
                    @if($partnership->utm_campaign)<strong>Campaign:</strong> {{ $partnership->utm_campaign }}@endif
                </div>
            </div>
            @endif
        </div>

        <div class="footer">
            <p>This is an automated message from FeRa Clinic Partnership Program.</p>
            <p>Please review and respond to this partnership application as soon as possible.</p>
            <p><strong>Next Steps:</strong></p>
            <ul style="text-align: left; max-width: 400px; margin: 0 auto;">
                <li>Review the partnership application details</li>
                <li>Research the applicant's background and company</li>
                <li>Contact the applicant within 3-5 business days</li>
                <li>Discuss potential collaboration opportunities</li>
            </ul>
        </div>
    </div>
</body>
</html>
