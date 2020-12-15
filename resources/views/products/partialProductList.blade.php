<div class=" d-flex justify-content-between p-3 bg-white mb-3 align-items-center">
    <div id="productsRow" class="row g-4">

        @foreach ($products as $product)

        <div class="col-md-3 d-flex align-items-stretch">
            <div class="card">

                <img src="{{getImageSrc($product)}}" class="card-img-top" />

                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <span class="font-weight-bold"> {{ $product->name }}</span>
                        <span class="font-weight-bold"> &euro; {{ $product->price }}</span> </div>
                    <p class="card-text mb-1 mt-1 text-truncate">{{ $product->description }}</p>
                </div>

                <hr>

                <form action="{{ route('products.destroy', $product->id) }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <div class="card-body">
                        <div class="text-right buttons">
                            <button class="btn btn-primary" data-toggle="modal" id="editModalButton"
                                data-target="#editModal"
                                data-attr="{{ route('products.edit', $product->id) }}">Update</button>

                            <button type="submit" class="btn btn-danger">Delete</button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
        @endforeach
    </div>
</div>