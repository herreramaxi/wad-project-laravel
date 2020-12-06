<div>
    <h1>Edit</h1>
<i class="fas fa-user"></i>
<form method="post"action="{{ route('products.update', $product->id) }}" enctype="multipart/form-data">
{{ csrf_field() }}
@method('PUT')
        <div class="form-group row">
            <label for="nameId" class="col-sm-3 col-form-label">Name</label>
            <div class="col-sm-9">
                <input name="name" type="text" value="{{ $product->name }}" class="form-control" id="nameId" placeholder="Name"   >
            </div>
        </div>
        <div class="form-group row">
            <label for="descriptionId" class="col-sm-3 col-form-label">Description</label>
            <div class="col-sm-9">
                <input name="description"  type="text" value="{{ $product->description }}"  class="form-control" id="descriptionId" placeholder="Description">
            </div>
        </div>
        <div class="form-group row">

        <div class="custom-file">
            <input id="inputFileId" type="file" class="form-control" name="image">               
                 
                  @php $imgSrc =""; @endphp
                  @isset ($product->image) 
        @php
        $my_bytea = stream_get_contents($product->image);
        $imgSrc = "data:image/png;base64," .  $my_bytea . "";
        @endphp
        <img id="category-img-tag" src="{{$imgSrc}}" style="max-width: 200px;"/>    
    @endisset

                  <!-- <input type="file" class="custom-file-input col-sm-2" id="customFile" name="file">
                <label id="customFileLabel" class="custom-file-label" for="customFile">Choose file</label> -->
            </div>

            <!-- <label for="productImageId" class="col-sm-3 col-form-label">Product Image</label>
            <div class="col-sm-9">
                <input name="image" type="file" id="productImageId" class="custom-file-input">
                <span style="margin-left: 15px; width: 480px;" class="custom-file-control"></span>
            </div> -->
        </div>
        <div class="form-group row">
            <div class="offset-sm-3 col-sm-9">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
</form>
</div>