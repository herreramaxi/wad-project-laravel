<!-- 
    <script src="{{ asset('js/app.js') }}" defer></script> -->
<script src="{{ asset('js/products/edit.js') }}" defer></script>

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
        </div>

        <div class="col-md-6">
            <div class="form-group row">

                <div class="custom-file">
                    <input id="inputFileId" type="file" class="form-control" name="image">

                    @php $imgSrc =""; @endphp
                    @isset ($product->image)
                    @php
                    $my_bytea = stream_get_contents($product->image);
                    $imgSrc = "data:image/png;base64," . $my_bytea . "";
                    @endphp
                    <img id="previewImage" src="{{$imgSrc}}" style="max-width: 100px;" />
                    @endisset
                </div>
            </div>
            <div class="form-group row">
            </div>
        </div>

    </div>



</form>