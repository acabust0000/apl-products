<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\LeadsController;
use App\Http\Controllers\ViewController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => '/',
    'as' => 'views.',
], function () {
    
    Route::get('/',         [ViewController::class, 'index'])
        ->name('index')
    ;

    Route::get('/contact',  [ViewController::class, 'contact'])
        ->name('contact')
    ;

    Route::get('/blog',     [ViewController::class, 'blog'])
        ->name('blog')
    ;

    Route::get('/galerie',  [ViewController::class, 'gallery'])
        ->name('gallery')
    ;

    Route::get('/apl',  [ViewController::class, 'gallery'])
        ->name('apl')
    ;
    
});

Route::group([
    'prefix' => '/leads',
    'as' => 'leads.',
], function () {

    Route::post('/store',  [LeadsController::class, 'store'])
        ->name('store')
    ;
    
});

Route::group([
    'prefix' => '/blog',
    'as' => 'blog.',
], function () {

    Route::get('/{article:slug}',  [BlogController::class, 'index'])
        ->name('index')
    ;
    
});

Route::get('/politica-cookie',                  fn () => inertia('legal/index', ['html' => Storage::get('legal/cookie.md')]))->name('legal.cookies');
Route::get('/politica-de-confidentialitate',    fn () => inertia('legal/index', ['html' => Storage::get('legal/privacy.md')]))->name('legal.privacy');
Route::get('/termeni-si-conditii',              fn () => inertia('legal/index', ['html' => Storage::get('legal/terms.md')]))->name('legal.terms');