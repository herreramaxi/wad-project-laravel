<link href="{{ mix('css/productsClient/menusCarousel.css') }}" rel="stylesheet" media='screen and (min-width: 601px)' >
<link href="{{ mix('css/productsClient/menusCarouselMobile.css') }}" rel="stylesheet" media='screen and (max-width: 600px)' >

<script src="{{ mix('js/productsClient/menusCarousel.js') }}" defer></script>

<h3>Featured</h3>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div id="recommendedMenus" class="carousel-inner" role="listbox" data-mobile={{$agent->isMobile()}}>
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