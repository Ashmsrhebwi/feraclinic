<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/api/leads', [\App\Http\Controllers\LeadController::class, 'store']);
