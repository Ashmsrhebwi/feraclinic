<?php

namespace App\Services;

use App\Models\GoogleReview;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

class GoogleBusinessReviewService
{
    protected $clientId;
    protected $clientSecret;
    protected $refreshToken;
    protected $accountId;
    protected $locationId;

    public function __construct()
    {
        $this->clientId = config('services.google_business.client_id');
        $this->clientSecret = config('services.google_business.client_secret');
        $this->refreshToken = config('services.google_business.refresh_token');
        $this->accountId = config('services.google_business.account_id');
        $this->locationId = config('services.google_business.location_id');
    }

    /**
     * Sync reviews from Google Business Profile API.
     *
     * @return array
     */
    public function syncReviews()
    {
        Log::info('Google Reviews Sync Started');

        $accessToken = $this->getAccessToken();
        if (!$accessToken) {
            Log::error('Google Reviews Sync: Token Refresh Failed');
            return ['error' => 'Could not refresh access token'];
        }

        Log::info('Google Reviews Sync: Token Refreshed Successfully');

        $fetchedCount = 0;
        $createdCount = 0;
        $updatedCount = 0;
        $hiddenCount = 0;

        $nextPageToken = null;

        // We will try v4 first as it's the most common endpoint for listing reviews
        // Endpoint pattern: https://mybusiness.googleapis.com/v4/accounts/{account_id}/locations/{location_id}/reviews
        $endpoints = [
            'v4' => "https://mybusiness.googleapis.com/v4/accounts/{$this->accountId}/locations/{$this->locationId}/reviews",
            'v1' => "https://mybusinessbusinessinformation.googleapis.com/v1/accounts/{$this->accountId}/locations/{$this->locationId}/reviews",
        ];

        foreach ($endpoints as $version => $url) {
            Log::info("Google Reviews Sync: Testing {$version} endpoint", [
                'pattern' => $version === 'v4' ? 'v4/accounts/{acc}/locations/{loc}/reviews' : 'v1/accounts/{acc}/locations/{loc}/reviews'
            ]);

            $response = Http::withToken($accessToken)->get($url, [
                'pageToken' => $nextPageToken,
            ]);

            Log::info("Google Reviews Sync: {$version} HTTP Response", [
                'status' => $response->status(),
                'has_reviews_key' => $response->successful() && isset($response->json()['reviews']),
                'review_count' => $response->successful() ? count($response->json()['reviews'] ?? []) : 0,
                'has_nextPageToken' => isset($response->json()['nextPageToken']),
                'has_error' => $response->failed(),
                'error_message' => $response->failed() ? ($response->json()['error']['message'] ?? 'Unknown Error') : null
            ]);

            if ($response->successful() && isset($response->json()['reviews'])) {
                $data = $response->json();
                $reviews = $data['reviews'] ?? [];

                foreach ($reviews as $googleReview) {
                    $fetchedCount++;
                    
                    $rating = $this->normalizeRating($googleReview['starRating'] ?? '');
                    $reviewId = $googleReview['reviewId'];
                    $isVisible = ($rating === 5);
                    
                    if (!$isVisible) {
                        $hiddenCount++;
                    }

                    $existing = GoogleReview::where('google_review_id', $reviewId)->first();
                    
                    $payload = [
                        'reviewer_name' => $googleReview['reviewer']['displayName'] ?? 'Anonymous',
                        'reviewer_avatar' => $googleReview['reviewer']['profilePhotoUrl'] ?? null,
                        'rating' => $rating,
                        'review_text' => $googleReview['comment'] ?? null,
                        'review_time' => isset($googleReview['createTime']) ? Carbon::parse($googleReview['createTime']) : null,
                        'is_visible' => $isVisible,
                        'raw_payload' => $googleReview,
                    ];

                    if ($existing) {
                        $existing->update($payload);
                        $updatedCount++;
                    } else {
                        GoogleReview::create(array_merge($payload, ['google_review_id' => $reviewId]));
                        $createdCount++;
                    }
                }

                $nextPageToken = $data['nextPageToken'] ?? null;
                
                // If we found reviews, we stick with this endpoint and continue pagination if needed
                if ($fetchedCount > 0) {
                    // Logic for pagination would go here if we were doing a full loop, 
                    // but for debugging we'll see if the first page works.
                    break; 
                }
            }
        }

        return [
            'fetched' => $fetchedCount,
            'created' => $createdCount,
            'updated' => $updatedCount,
            'hidden' => $hiddenCount,
        ];
    }

    /**
     * Get OAuth2 access token using refresh token.
     */
    protected function getAccessToken()
    {
        $response = Http::post('https://oauth2.googleapis.com/token', [
            'client_id' => $this->clientId,
            'client_secret' => $this->clientSecret,
            'refresh_token' => $this->refreshToken,
            'grant_type' => 'refresh_token',
        ]);

        if ($response->failed()) {
            Log::error('Google OAuth Error', [
                'message' => 'Failed to refresh access token'
            ]);
            return null;
        }

        return $response->json()['access_token'];
    }

    /**
     * Normalize Google star rating to integer.
     */
    protected function normalizeRating(string $rating): int
    {
        return match ($rating) {
            'FIVE' => 5,
            'FOUR' => 4,
            'THREE' => 3,
            'TWO' => 2,
            'ONE' => 1,
            default => 0,
        };
    }
}
