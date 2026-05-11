<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Corporate extends Model
{
    protected $fillable = [
        'company_name',
        'contact_person',
        'email',
        'phone',
        'country',
        'inquiry_type',
        'message',
        'preferred_contact_method',
        'language',
        'page_url',
    ];
}
