<html>

<head>
    <meta charset="utf-8">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/products/index.js') }}" defer></script>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>

<body>
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Products</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-success text-light" data-toggle="modal" id="createModalButton"
                    data-target="#createModal" data-attr="{{ route('products.create') }}" title="Create a product"> <i
                        class="fas fa-plus-circle"></i>
                </a>
            </div>
        </div>
    </div>

    <br>
    @foreach ($products as $product)
    <div class="row">
        {{ $product->name }}, {{ $product->description }}
        @isset ($product->image)
        @php
        $my_bytea = stream_get_contents($product->image);
        @endphp
        <img src="data:image/png;base64,{{$my_bytea}}" style="max-width: 40px;" />
        @endisset

        <a class="text-secondary" data-toggle="modal" id="editModalButton" data-target="#editModal"
            data-attr="{{ route('products.edit', $product->id) }}">
            <i class="fas fa-edit text-gray-300"></i>
        </a>
        <form action="{{ route('products.destroy', $product->id) }}" method="POST">
            @csrf
            @method('DELETE')
            <button type="submit" title="delete" style="border: none; background-color:transparent;">
                <i class="fas fa-trash fa-lg text-danger"></i>
            </button>
        </form>

    </div>
    @endforeach

    <!-- edit modal -->
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">

            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Edit</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="editModalBody">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" form="editModalForm" class="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    </div>

    <!-- create modal -->
    <div class="modal fade" id="createModal" tabindex="-1" role="dialog" aria-labelledby="createModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">

            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Create</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="createModalBody">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" form="createModalForm" class="btn btn-primary">Create</button>
                </div>
            </div>

        </div>
    </div>

</body>

</html>