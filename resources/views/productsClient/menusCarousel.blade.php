<link href="{{ asset('css/productsClient/menusCarousel.css') }}" rel="stylesheet">

@php

$path = "json/recommendedMenus.json";
$json = json_decode(file_get_contents($path), true);
$i = 1;
$lastElement = count($json['menus']);
$state = "A";

@endphp

@isset( $json )

<h3>Featured</h3>
<div id="carouselExampleControls" class="carousel slide carousel-multi-item" data-ride="carousel">

    <div class="carousel-inner" role="listbox">

        @foreach ($json['menus'] as $item)

        {{--If any property is null => @continue--}}
        @if( $item['name']== null ||
        $item['description'] ==null ||
        $item['price'] ==null ||
        $item['src'] ==null)
        @continue
        @endif

        @if($state == "A")

        <div class="carousel-item {{ $i == 1 ? "active": ""}}">
            <div class="row no-gutters ">

                @php
                $state = "B";
                @endphp

                @endif

                <div class="col-md-2 my-slide">
                    <div class="card" style="swidth: 18rem;">

                        <img src="{{ $item['src'] }}"  class="card-img-top menu-image" />

                        <div class="card-body">
                            <h6 class="card-title text-truncate">{{$item['name']}}</h6>
                            {{-- <h6 class="card-title">&euro; {{$item['price']}}</h6> --}}
                            <p class="card-text text-truncate">{{ $item['description']}}</p>
                        </div>
                    </div>
                </div>
                {{-- <div class="col-md-2 my-slide ">
                    <div class="slider single-item ">
                        <img class="menu-image" src="{{ $item['src'] }}"
                alt="{{ $item['name'] }}">
            </div>
        </div> --}}

        @if($state == "B")

        @if($i%6==0 || $i ==$lastElement )
    </div>
</div>

@php
$state = "A";
@endphp


@endif

@endif


@php
$i++;
@endphp

@endforeach

</div>
<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
</a>
</div>
@endisset