<?php

use App\Http\Controllers\ProductsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsClientController;
use App\Http\Controllers\ContactUsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/home', function () {
    return view('home');
});

if ((bool)env('AUTH_DISABLED', false)) {
    Route::get('products/search/{name?}', [ProductsController::class, 'search']);
    Route::resource('products', ProductsController::class);
} else {       
    Route::get('products/search/{name?}', [ProductsController::class, 'search'])->middleware('auth');
    Route::resource('products', ProductsController::class)->middleware('auth');
}

Route::get('productsClient', [ProductsClientController::class, 'index']);

Route::get('productsClient/search/{name?}', [ProductsClientController::class, 'search']);
Route::get('productsClient/searchAutocomplete/{query?}', [ProductsClientController::class, 'searchAutocomplete']);

if (App::environment('production')) {
    Auth::routes(['register' => false, 'reset' => false, 'confirm' => false]);
} else {
    Auth::routes();
}

Route::get('contactus', [ContactUsController::class, 'index']);
Route::post('contactus/mail', [ContactUsController::class, 'mail'])->name('mail'); 

//Examples
// Route::get('products',[ProductsController::class, 'getIndex']);
// Route::controller('test','TestController');
// Route::get('/test3','Test3@getIndex');
// Route::get('test', [TestController::class, 'getIndex']);
// Route::get('test3', [Test3Controller::class, 'getIndex']);

//Don't forget to add the "use on the top when adding a controller"
