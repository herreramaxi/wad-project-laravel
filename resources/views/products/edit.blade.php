<!-- 
    <script src="{{ asset('js/app.js') }}" defer></script> -->
<script src="{{ asset('js/products/edit.js') }}" defer></script>

<form id="editModalForm" method="post" action="{{ route('products.update', $product->id) }}" enctype="multipart/form-data">
    {{ csrf_field() }}
    @method('PUT')
    <div class="row">

        <div class="col-md-6">
            <div class="form-group row">
                <label for="nameId" class="col-sm-3 col-form-label">Name</label>
                <div class="col-sm-6">
                    <input name="name" type="text" value="{{ $product->name }}" class="form-control" id="nameId"
                        placeholder="Name">
                </div>
            </div>
            <div class="form-group row">
                <label for="descriptionId" class="col-sm-3 col-form-label">Description</label>
                <div class="col-sm-9">
                    <input name="description" type="text" value="{{ $product->description }}" class="form-control"
                        id="descriptionId" placeholder="Description">
                </div>
            </div>
            <div class="form-group row">
                <label for="priceId" class="col-sm-3 col-form-label">Description</label>
                <div class="col-sm-9">
                    <input name="price" type="text" value="{{ $product->price }}" class="form-control"
                        id="priceId" placeholder="Price">
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-group row">
                <div class="custom-file">
                    <input id="inputFileId" type="file" class="form-control" name="image">
                    <img id="previewImage" src="{{getImageSrc($product)}}" style="max-width: 100px;" />
                </div>
            </div>
            <div class="form-group row">
            </div>
        </div>
            
    </div>  
</form>