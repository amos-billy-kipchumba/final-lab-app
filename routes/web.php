<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/who-we-are', [App\Http\Controllers\HomeController::class, 'who'])->name('who-we-are');
Route::get('/what-we-do', [App\Http\Controllers\HomeController::class, 'what'])->name('what-we-do');
Route::get('/our-clintele', [App\Http\Controllers\HomeController::class, 'clintele'])->name('our-clintele');
Route::get('/what-we-do/{slung}', [App\Http\Controllers\HomeController::class, 'what_single'])->name('what-we-do-single');
Route::get('/blog', [App\Http\Controllers\BlogController::class, 'blog'])->name('blog');
Route::get('/search/{slung}', [App\Http\Controllers\HomeController::class, 'search'])->name('search');
Route::get('/blog/{slung}', [App\Http\Controllers\BlogController::class, 'blog_single'])->name('blog-single');
Route::get('/contact-us', [App\Http\Controllers\HomeController::class, 'contact'])->name('contact-us');
Route::get('/other-service/{slung}', [App\Http\Controllers\HomeController::class, 'other_service'])->name('other-service');

Auth::routes();


