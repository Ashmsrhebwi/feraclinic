<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Corporate Inquiry - FeRa Clinic</title>
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
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <h2>FeRa Clinic</h2>
        </div>
        
        <div class="header">
            <h1>New Corporate Inquiry</h1>
            <p>A new corporate inquiry has been submitted on the FeRa Clinic website.</p>
        </div>

        <div class="content">
            <div class="field">
                <div class="field-label">Company Name:</div>
                <div class="field-value">{{ $corporate->company_name }}</div>
            </div>

            <div class="field">
                <div class="field-label">Contact Person:</div>
                <div class="field-value">{{ $corporate->contact_person }}</div>
            </div>

            <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value">{{ $corporate->email }}</div>
            </div>

            <div class="field">
                <div class="field-label">Phone:</div>
                <div class="field-value">{{ $corporate->phone }}</div>
            </div>

            <div class="field">
                <div class="field-label">Country:</div>
                <div class="field-value">{{ $corporate->country }}</div>
            </div>

            <div class="field">
                <div class="field-label">Inquiry Type:</div>
                <div class="field-value">{{ $corporate->inquiry_type }}</div>
            </div>

            <div class="field">
                <div class="field-label">Preferred Contact Method:</div>
                <div class="field-value">{{ $corporate->preferred_contact_method }}</div>
            </div>

            @if($corporate->message)
            <div class="field">
                <div class="field-label">Message:</div>
                <div class="field-value">{{ nl2br(e($corporate->message)) }}</div>
            </div>
            @endif

            <div class="field">
                <div class="field-label">Language:</div>
                <div class="field-value">{{ $corporate->language ?? 'Not specified' }}</div>
            </div>

            <div class="field">
                <div class="field-label">Submitted From:</div>
                <div class="field-value">{{ $corporate->page_url ?? 'Direct visit' }}</div>
            </div>

            <div class="field">
                <div class="field-label">Submitted At:</div>
                <div class="field-value">{{ $corporate->created_at->format('Y-m-d H:i:s') }}</div>
            </div>
        </div>

        <div class="footer">
            <p>This is an automated message from FeRa Clinic Corporate Services.</p>
            <p>Please respond to this inquiry as soon as possible.</p>
        </div>
    </div>
</body>
</html>
