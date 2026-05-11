<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('media_assets', function (Blueprint $table) {
            $table->id();
            $table->string('media_key')->unique()->comment('The unique key used by the frontend to resolve this image');
            $table->string('category')->nullable()->comment('Category for admin organization');
            $table->string('file_path')->comment('Relative path in storage/media');
            $table->string('original_name')->nullable();
            $table->string('mime_type')->nullable();
            $table->unsignedBigInteger('size')->nullable();
            
            // Multilingual Alt Texts
            $table->string('alt_en')->nullable();
            $table->string('alt_ar')->nullable();
            $table->string('alt_fr')->nullable();
            $table->string('alt_ru')->nullable();
            $table->string('alt_tr')->nullable();
            $table->string('alt_es')->nullable();
            
            $table->boolean('is_active')->default(true);
            $table->integer('version')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('media_assets');
    }
};
