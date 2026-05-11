<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MediaAsset extends Model
{
    use HasFactory;

    protected $fillable = [
        'media_key',
        'category',
        'file_path',
        'original_name',
        'mime_type',
        'size',
        'alt_en',
        'alt_ar',
        'alt_fr',
        'alt_ru',
        'alt_tr',
        'alt_es',
        'is_active',
        'version',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'size' => 'integer',
        'version' => 'integer',
    ];
}
