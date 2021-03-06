<?php

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

//Done up to 18-A-User-Can-Favorite-Any-Reply

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index');


// Route::resource('/threads', 'ThreadController');
Route::get('/threads', 'ThreadController@index');

Route::get('/threads/create', [
	'as' => 'create.thread',
	'uses' => 'ThreadController@create'
]);

Route::post('/threads', 'ThreadController@store');

Route::get('/threads/{channel}/{thread}', 'ThreadController@show');

Route::post('/threads/{channel}/{thread}/replies', 'ReplyController@store');

Route::get('/threads/{channel}', 'ThreadController@index');

Route::post('/replies/{reply}/favourite', 'FavouriteController@store');

Route::get('profile/{user}', 'ProfileController@show')->name('profile');

Route::delete('threads/{channel}/{thread}', 'ThreadController@destroy');

