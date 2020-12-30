<link href="{{ asset('css/productsClient/menusCarousel.css') }}" rel="stylesheet" defer>
<script src="{{ asset('js/productsClient/menusCarousel.js') }}" defer></script>

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