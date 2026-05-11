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
        Schema::create('google_reviews', function (Blueprint $table) {
            $table->id();
            $table->string('google_review_id')->unique()->nullable();
            $table->string('reviewer_name')->nullable();
            $table->string('reviewer_avatar')->nullable();
            $table->integer('rating');
            $table->text('review_text')->nullable();
            $table->string('language')->nullable();
            $table->timestamp('review_time')->nullable();
            $table->boolean('is_visible')->default(true);
            $table->string('source')->default('google');
            $table->json('raw_payload')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('google_reviews');
    }
};
