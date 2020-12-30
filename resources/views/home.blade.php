@extends('shared.layout')
@section('content')

    <link href="{{ mix('css/home.css') }}" rel="stylesheet">

    <main role="main" class="inner cover">
        @php
        $path = "json/home-content.json";
        $json = json_decode(file_get_contents($path), true);
        @endphp
        <div class="row align-items-center">
            <div class="col">
                <br>
                <h2 class="cover-heading text-center">
                    FDA
                    <small class="text-muted">Food Delivery App</small>
                  </h2>
            </div>

        </div>
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators my-4">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                @foreach ($json['images'] as $key => $value)
                    <div class="carousel-item {{ $key == 1 ? 'active' : '' }}">
                        <img src="{{ $value['imagePath'] }}" class="d-block w-100" alt=".img_home" loading="lazy">
                        <div class="carousel-caption d-none d-md-block bg-dark mb-4">
                            <h5>{{ $value['heading'] }}</h5>
                            <p>{{ $value['description'] }}</p>
                        </div>
                    </div>
                @endforeach
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </main>
@stop
