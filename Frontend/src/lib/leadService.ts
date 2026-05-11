export interface LeadPayload {
  form_type: string;
  full_name?: string;
  email?: string;
  phone?: string;
  language?: string;
  treatment_interest?: string;
  message?: string;
}

const FORBIDDEN_DOMAINS = ['example.com', 'fake.com', 'dummy.com', 'mailinator.com', 'tempmail.com', '10minutemail.com'];
const FORBIDDEN_EMAILS = ['test@test.com', 'test@gmail.com'];
const XSS_PATTERNS = [/<script/i, /javascript:/i, /onerror=/i, /onclick=/i, /<iframe/i, /<img/i];

export const submitLead = async (payload: LeadPayload) => {
  // Trim and XSS Check
  for (const key in payload) {
    const k = key as keyof LeadPayload;
    if (typeof payload[k] === 'string') {
      const val = (payload[k] as string).trim();
      payload[k] = val;
      if (XSS_PATTERNS.some(pattern => pattern.test(val))) {
        throw new Error("Invalid characters detected in input.");
      }
    }
  }

  // Email Validation
  if (payload.email) {
    const email = payload.email.toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Please enter a valid email address.");
    }
    const domain = email.split('@')[1];
    if (FORBIDDEN_EMAILS.includes(email) || (domain && FORBIDDEN_DOMAINS.includes(domain))) {
      throw new Error("Please provide a valid, real email address.");
    }
  }

  // Phone Validation
  if (payload.form_type !== 'Newsletter' && payload.phone) {
    const digits = payload.phone.replace(/\D/g, '');
    if (digits.length < 7) {
      throw new Error("Please enter a valid phone number with at least 7 digits.");
    }
  }

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
  
  // Extract UTM parameters
  const urlParams = new URLSearchParams(window.location.search);
  const utm_source = urlParams.get('utm_source') || undefined;
  const utm_medium = urlParams.get('utm_medium') || undefined;
  const utm_campaign = urlParams.get('utm_campaign') || undefined;
  
  const fullPayload = {
    ...payload,
    page_url: window.location.href,
    utm_source,
    utm_medium,
    utm_campaign
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

  try {
    const response = await fetch(`${API_BASE_URL}/api/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(fullPayload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    const data = await response.json();

    if (!response.ok) {
      const errorMsg = data.errors 
        ? Object.values(data.errors).flat().join(', ')
        : data.message || 'Submission failed. Please try again.';
      throw new Error(errorMsg);
    }

    return data;
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error("The request timed out. Please try again or contact us via WhatsApp.");
    }
    throw error;
  }
};
