<?php

use App\Http\Controllers\TestController;
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
// Route::controller('test','TestController');