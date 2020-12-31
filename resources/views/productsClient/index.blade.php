@extends('shared.layout')
@section('content')

<link href="{{ mix('css/productsClient/index.css') }}" rel="stylesheet">
<link href="{{ mix('css/typeahead.css') }}" rel="stylesheet">

@section('javascript')
<script src="{{ mix('js/productsClient/index.js') }}" defer></script>
<script src="{{ mix('js/productsClient/indexNonCritical.js') }}" defer></script>
@endsection

<div class="container pt-3" id="productsClientContainer">
    <section class="section_welcome" data-parallax="scroll">

        <div class="row">
            <div class="col-12">

                <!-- Heading -->
                <h2 class="section__heading text-center">
                    <em>Our menu</em>
                </h2>
                <p class="section__subheading text-center">
                    "Inspired by a love of Argentine food, wine, vivacious lifestyle and rich culture, our menu follows
                    the Argentine tradition of sharing food."
                </p>
               
                <div id="remote">
                    <input autocomplete="off" class="form-control typeahead"  id="searchInput" name="name"
                        type="search" placeholder="Search...">
                </div>

            </div>
        </div>
    </section>
    <br>
    @include('productsClient.menusCarousel')

    <div id="partialProductList"></div>

    <br>
</div>
@stop