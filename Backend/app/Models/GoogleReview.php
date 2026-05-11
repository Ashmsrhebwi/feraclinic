<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GoogleReview extends Model
{
    use HasFactory;

    protected $fillable = [
        'google_review_id',
        'reviewer_name',
        'reviewer_avatar',
        'rating',
        'review_text',
        'language',
        'review_time',
        'is_visible',
        'source',
        'raw_payload',
    ];

    protected $casts = [
        'raw_payload' => 'array',
        'review_time' => 'datetime',
        'is_visible' => 'boolean',
    ];
}
