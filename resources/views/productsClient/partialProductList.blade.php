<section class="section section_menu section_border_bottom">

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
                        <h4 class="item-content">{{ $product->name }}</h4>
                        <p class="item-content">
                            {{ $product->description }}
                        </p>
                    </div>
                    <div class="col-2">
                        <div class="section_menu__item__price text-center item-content">
                            &euro; {{ $product->price }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        @endforeach
    </div>

</section>