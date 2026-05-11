<?php

use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/job-application', [\App\Http\Controllers\JobApplicationController::class, 'store']);
Route::post('/corporate', [\App\Http\Controllers\CorporateController::class, 'store']);
Route::post('/partnership', [\App\Http\Controllers\PartnershipController::class, 'store']);

Route::get('/google-reviews', [\App\Http\Controllers\Api\GoogleReviewController::class, 'index']);

