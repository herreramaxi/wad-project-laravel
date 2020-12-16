<div class="d-flex justify-content-between p-3 bg-white mb-3 align-items-center">
    <div id="productsRow" class="row g-4">
        @foreach ($products as $product)

        <div class="{{count($products) ==1 ? "col-md-12": "col-md-3"}} d-flex align-items-stretch">
            <div class="card" style="width: 18rem;">

                <img src="{{getImageSrc($product)}}" class="card-img-top" />

                <div class="card-body">
                    <h6 class="card-title text-truncate">{{ $product->name }}</h6>
                    <h6 class="card-title">&euro; {{ $product->price }}</h6>
                    <p class="card-text text-truncate">{{ $product->description }}</p>
                </div>

                <hr>

                <div class="card-body">
                    <div class="text-right buttons">
                        <button class="btn btn-primary editModalButton" data-toggle="modal"
                            data-attr="{{ route('products.edit', $product->id) }}">Update</button>
                        <button class="btn btn-danger deleteModalButton" data-toggle="modal" data-target="#deleteModal"
                            data-attr="{{ route('products.destroy', $product->id) }}">Delete</button>

                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>
</div>