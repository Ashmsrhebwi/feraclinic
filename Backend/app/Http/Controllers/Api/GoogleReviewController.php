<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\GoogleReview;
use Illuminate\Http\Request;

class GoogleReviewController extends Controller
{
    /**
     * Get 5-star visible Google reviews.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $limit = $request->query('limit', 20);
        $lang = $request->query('lang');

        $query = GoogleReview::where('is_visible', true)
            ->where('rating', 5)
            ->where('source', 'google');

        if ($lang) {
            $query->where('language', $lang);
        }

        $reviews = $query->latest('review_time')
            ->paginate($limit);

        // Transform to expose only safe fields
        $reviews->getCollection()->transform(function ($review) {
            return [
                'reviewer_name' => $review->reviewer_name,
                'reviewer_avatar' => $review->reviewer_avatar,
                'rating' => $review->rating,
                'review_text' => $review->review_text,
                'review_time' => $review->review_time?->toIso8601String(),
                'language' => $review->language,
            ];
        });

        return response()->json($reviews);
    }
}
