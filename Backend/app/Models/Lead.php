<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    /** @use HasFactory<\Database\Factories\LeadFactory> */
    use HasFactory;

    protected $fillable = [
        'full_name',
        'email',
        'phone',
        'form_type',
        'language',
        'treatment_interest',
        'message',
        'page_url',
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'company_name',
        'country',
        'inquiry_type',
        'preferred_contact_method',
    ];
}
