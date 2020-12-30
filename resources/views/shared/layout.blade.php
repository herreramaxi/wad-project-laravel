<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf_token" content="{{ csrf_token() }}" />
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <script src="{{ mix('js/app.js') }}" defer></script>
    @yield('javascript');

    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Food Delivery - App</title>
</head>

<body>

    <!-- Header -->
    @include('shared.header')
    @include('shared.spinner')

    <!-- Content page -->
    <div class="container">
        @yield('content')
    </div>

    <!-- Footer -->
    <footer class="section section_footer">
        {{-- @include('shared.footer') --}}
    </footer>

</body>

</html>