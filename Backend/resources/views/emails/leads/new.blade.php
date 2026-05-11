<x-mail::message>
# You have received a new lead from the website.

**Lead Details:**
- **Form Type:** {{ $lead->form_type }}
- **Full Name:** {{ $lead->full_name ?? 'N/A' }}
- **Email:** {{ $lead->email ?? 'N/A' }}
- **Phone:** {{ $lead->phone ?? 'N/A' }}
- **Language:** {{ $lead->language ?? 'N/A' }}
- **Treatment Interest:** {{ $lead->treatment_interest ?? 'N/A' }}
- **Submitted At:** {{ $lead->created_at }}

@if(!empty($lead->message))
**Message / Notes:**
{{ $lead->message }}
@endif

**Tracking Information (UTM):**
- **Page URL:** {{ $lead->page_url ?? 'N/A' }}
- **Source:** {{ $lead->utm_source ?? 'N/A' }}
- **Medium:** {{ $lead->utm_medium ?? 'N/A' }}
- **Campaign:** {{ $lead->utm_campaign ?? 'N/A' }}

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
