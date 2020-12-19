<div class="{{count($products) > 1 ? "col-md-6": "col-md-12"}} section_menu__grid__item mains">
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
                    {{ $product->price }}
                </div>
            </div>
        </div> <!-- / .row -->
    </div>
</div>
