<html>
<body>
<h1>Create (To be moved)</h1>

<form method="post" action="/products" enctype="multipart/form-data">
{{ csrf_field() }}
        <div class="form-group row">
            <label for="nameId" class="col-sm-3 col-form-label">Name</label>
            <div class="col-sm-9">
                <input name="name" type="text" class="form-control" id="nameId" placeholder="Name">
            </div>
        </div>
        <div class="form-group row">
            <label for="descriptionId" class="col-sm-3 col-form-label">Description</label>
            <div class="col-sm-9">
                <input name="description" type="text" class="form-control" id="descriptionId" placeholder="Description">
            </div>
        </div>
        <div class="form-group row">
            <label for="productImageId" class="col-sm-3 col-form-label">Product Image</label>
            <div class="col-sm-9">
                <input name="image" type="file" id="productImageId" class="custom-file-input">
                <span style="margin-left: 15px; width: 480px;" class="custom-file-control"></span>
            </div>
        </div>
        <div class="form-group row">
            <div class="offset-sm-3 col-sm-9">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
</form>

<h1>Products</h1>
<br>
@foreach ($products as $product)
    <li>{{ $product->name }}, {{ $product->description }},
    @isset ($product->image)
    <img class="card-img-top" style="max-width: 100px;" src="{{ Storage::url($product->image)  }}" alt="Card image cap">
    @endisset
    </li>
@endforeach
</body>
</html>