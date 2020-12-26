<?php

use App\Http\Controllers\ProductsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsClientController;

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

Route::get('products/search/{name?}', [ProductsController::class, 'search']);
Route::resource('products', ProductsController::class)->middleware('auth');

// Route::resource('productsClient', ProductsClientController::class);

Route::get('productsClient', [ProductsClientController::class, 'index']);
Route::get('productsClient/search/{name?}', [ProductsClientController::class, 'search']);
// Route::get('autocomplete', [ProductsClientController::class, 'search']);


Route::get('/contact', function () {
    return view('contact');
});

Route::post('/contact', function () {
    return view('contact');
});

if (App::environment('production')) {
    Auth::routes(['register' => false, 'reset' => false, 'confirm' => false]);
} else {
    Auth::routes();
}

//Examples
// Route::get('products',[ProductsController::class, 'getIndex']);
// Route::controller('test','TestController');
// Route::get('/test3','Test3@getIndex');
// Route::get('test', [TestController::class, 'getIndex']);
// Route::get('test3', [Test3Controller::class, 'getIndex']);

//Don't forget to add the "use on the top when adding a controller"
