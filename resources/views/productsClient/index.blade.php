@extends('shared.layout')
@section('content')
<script src="{{ asset('js/productsClient/index.js') }}" defer></script>
<!-- WELCOME
  ================================================== -->
<div class="container">
  <section class="section section_welcome" data-parallax="scroll" data-image-src="assets/img/1.jpg">
    <div class="row">
      <div class="col">

        <!-- Heading -->
        <h2 class="section__heading text-center">
          <em>Our menu</em>
        </h2>
        <p class="section__subheading text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis nisi, consequatur, laborum libero a neque ducimus. Porro rem illum quo nostrum quisquam asperiores, blanditiis, consectetur. Possimus facilis velit, voluptatibus!
        </p>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="searchBox">
          <a href="#" class="btn btn-primary" tabindex="1" role="button" id="searchBtn">Search</a>
          <a href="#" class="btn btn-secondary" tabindex="1" role="button" id="clearLnk">Clear Search</a>
        </form>
      </div> <!-- / .row -->
  </section>
  <!-- MENU
================================================== -->
  <section class="section section_menu section_border_bottom">
    <!-- MENU 
	================================================== -->
    <div class="row section_menu__grid" id="menu_images">
      @foreach ($products as $product)
      <div class="col-md-6 section_menu__grid__item mains">
        <div class="section_menu__item">
          <div class="row">
            <div class="col-3 align-self-center">
              <div class="section_menu__item__img">
                <img src="{{ getImageSrc($product) }}" alt="food_img">
              </div>
            </div>
            <div class="col-7">
              <h4 class="item-content">{{ $product-> name }}</h4>
              <p class="item-content">
                {{ $product-> description }}
              </p>
            </div>
            <div class="col-2">
              <div class="section_menu__item__price text-center item-content">
                {{ $product->price }}
              </div>
            </div>
          </div> <!-- / .row -->
        </div>
      </div>
      @endforeach
    </div> <!-- / .row -->
</div> <!-- / .container -->
</section>
<br>
</div>
@stop