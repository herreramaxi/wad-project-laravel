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
            <div class="offset-sm-3 col-sm-9">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
</form>
<br>
<br>

<h1>Products</h1>
<br>
<?php
echo '<ul>';
foreach ($products as $product) {
    echo '<li>' .
        $product->id .
        ', ' .
        $product->name .
        ', ' .
        $product->description .
        '</li>';
}
echo '</ul>';
?>
</body>
</html>