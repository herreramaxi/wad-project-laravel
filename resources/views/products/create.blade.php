<script src="{{ mix('js/products/edit.js') }}" defer></script>

<form id="createModalForm" method="post" action="{{ route('products.store') }}" enctype="multipart/form-data"
    class="needs-validation" novalidate>
    {{ csrf_field() }}
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <div class="form-group row">
                    <label for="nameId" class="col-sm-3 col-form-label">Name</label>
                    <div class="col-sm-9">
                        <input name="name" type="text" class="form-control" id="nameId" placeholder="Name" required>
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
                        <input name="price" type="number" min="0" step="0.01" class="form-control" id="priceId"
                            placeholder="Price" required>
                        <div class="invalid-feedback">
                            Please provide a product price.
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="descriptionId" class="col-sm-3 col-form-label">Description</label>
                    <div class="col-sm-9">
                        <textarea name="description" class="form-control" id="descriptionId" placeholder="Description"
                            maxlength="512" rows="7" required></textarea>
                        <div class="invalid-feedback">
                            Please provide a product description.
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="form-group row">
                    <img id="previewImage" src="{{getImageSrc(null)}}" class="img-fluid img-thumbnail" style="max-height: 15.5em" />
                </div>
            </div>
        </div>
    </div>
</form>