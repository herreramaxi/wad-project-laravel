@extends('shared.layout')
@section('content')
<h1>test</h1>
<br>
@php
// $path = storage_path() . "/app/json/navData.json"; // ie: /var/www/laravel/app/storage/json/filename.json
echo getcwd ( ) ;
echo '<br>';
$path = "navData.json";
 echo $path;
 echo '<br>';

 $json = json_decode(file_get_contents($path), true);

$output = "<ul>";
    foreach ($json['items'] as $movie) {
        $output .= "<li>"
            . $movie['name'] 
            . "</li>";
    }
    $output .= "</ul>";

    echo $output;

@endphp

@stop