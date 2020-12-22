@extends('shared.layout')
@section('content')
<!-- Import styles for menu -->
<link href="{{ asset('css/productsClient/index.css') }}" rel="stylesheet">
<!-- Import typeahead.js and typeahead boostrap-->
{{-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
    defer /> --}}
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-3-typeahead/4.0.1/bootstrap3-typeahead.min.js" defer>
</script>
<!-- Import index.js -->
<script src="{{ asset('js/productsClient/index.js') }}" defer></script>
<!-- WELCOME
                  ================================================== -->

<div class="container" id="productsClientContainer">
    <section class="Rsection section_welcome" data-parallax="scroll" data-image-src="assets/img/1.jpg">

        <div class="row">
            <div class="col">

                <!-- Heading -->
                <h2 class="section__heading text-center">
                    <em>Our menu</em>
                </h2>
                <p class="section__subheading text-center">
                    "Inspired by a love of Argentine food, wine, vivacious lifestyle and rich culture, our menu follows
                    the Argentine tradition of sharing food."
                </p>
                <form class="d-flex" filter-attr="{{ url('autocomplete') }}"
                    data-attr="{{route('productsClient.show','show')}}" id="searchForm">
                    <input id="search" name="search" type="text" class="form-control me-2" aria-label="Search"
                        placeholder="Search" />
                </form>
            </div>
        </div> <!-- / .row -->
    </section>
    <hr>
    @include('productsClient.menusCarousel')
    <!-- MENU
                ================================================== -->
    <section class="section section_menu section_border_bottom">
        <!-- MENU 
                 ================================================== -->
        <div class="row section_menu__grid" id="menu_images">
            @foreach ($products as $product)
            @include('productsClient.show', ['product' => $product])
            @endforeach
        </div> <!-- / .row -->
</div> <!-- / .container -->
</section>
<br>
</div>
@stop