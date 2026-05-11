<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Partnership extends Model
{
    protected $fillable = [
        'full_name',
        'company_name',
        'email',
        'phone',
        'country',
        'partnership_type',
        'website_or_social',
        'message',
        'preferred_contact_method',
        'language',
        'page_url',
        'utm_source',
        'utm_medium',
        'utm_campaign',
    ];
}
