<script src="{{ asset('js/products/edit.js') }}" defer></script>

<form id="editModalForm" method="post" action="{{ route('products.update', $product->id) }}"
    enctype="multipart/form-data" class="needs-validation" novalidate>
    {{ csrf_field() }}
    @method('PUT')

    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <div class="form-group row">
                    <label for="nameId" class="col-sm-3 col-form-label">Name</label>
                    <div class="col-sm-9">
                        <input name="name" type="text" value="{{ $product->name }}" class="form-control" id="nameId"
                            placeholder="Name" required>
                        <div class="invalid-feedback">
                            Please provide a product name.
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5">

                <div class="form-group row">
                    <div class="custom-file">
                        <input id="inputFileId" type="file" class="form-control" name="image">
                    </div>
                </div>

            </div>
        </div>

        <div class="row">
            <div class="col-md-7">
                <div class="form-group row">
                    <label for="priceId" class="col-sm-3 col-form-label">Price</label>
                    <div class="col-sm-9 input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">€</span>
                        </div>
                        <input name="price" type="number" min="0" step="0.01" value="{{ $product->price }}"
                            class="form-control" id="priceId" placeholder="Price" required>
                        <div class="invalid-feedback">
                            Please provide a product price.
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="descriptionId" class="col-sm-3 col-form-label">Description</label>
                    <div class="col-sm-9">
                        <textarea name="description" class="form-control" id="descriptionId" placeholder="Description"
                            maxlength="512" rows="7" required>{{ $product->description }}</textarea>
                        <div class="invalid-feedback">
                            Please provide a product description.
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <img id="previewImage" src="{{getImageSrc($product)}}" class="img-fluid" />
            </div>
        </div>
    </div>
</form>