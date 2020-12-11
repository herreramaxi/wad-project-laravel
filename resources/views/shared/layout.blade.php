<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="{{ asset('js/app.js') }}" defer></script>
    <title>Food delivery app</title> 
</head>

<body>
    <div class="container">

        <header class="row">
            @include('shared.header')
        </header>

        <div id="main" class="row">

            @yield('content')

        </div>

        <footer class="row">
            {{-- @include('shared.footer') --}}
        </footer>

    </div>
</body>

</html>