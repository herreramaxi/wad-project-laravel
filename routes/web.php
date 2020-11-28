<?php

use App\Http\Controllers\TestController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\Test3Controller;
use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});

Route::get('/testview', function () {
    return view('testView');
});

Route::get('/test2', function () {
    return view('test2');
});

Route::get('test', [TestController::class, 'getIndex']);
Route::get('test3', [Test3Controller::class, 'getIndex']);
Route::get('products',[ProductsController::class, 'getIndex']);
// Route::controller('test','TestController');
// Route::get('/test3','Test3@getIndex');

//Don't forget to add the "use on the top when adding a controller"