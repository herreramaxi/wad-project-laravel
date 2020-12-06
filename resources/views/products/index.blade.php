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
    <div class="container">
        <div class="row">
            <div class="col-lg-12 margin-tb">
                <div class="pull-left">
                    <h2>Products</h2>
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" data-toggle="modal" id="createModalButton"
                        data-target="#createModal" data-attr="{{ route('products.create') }}">Create</button>
                </div>
            </div>
        </div>


        <br>
        <div class="d-flex justify-content-between p-3 bg-white mb-3 align-items-center">
            <div class="row g-3">
                @foreach ($products as $product)

                <div class="col-md-4">
                    <div class="card">
                        @isset ($product->image)
                        @php
                        $my_bytea = stream_get_contents($product->image);
                        @endphp
                        <img src="data:image/png;base64,{{$my_bytea}}" class="card-img-top" style="min-height: 275px;max-height: 275px;" />
                        @endisset


                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <span class="font-weight-bold"> {{ $product->name }}</span>
                                <span class="font-weight-bold"> price </span> </div>
                            <p class="card-text mb-1 mt-1">{{ $product->description }}</p>
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

    </div>
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
                    <button type="submit" form="editModalForm" class="btn btn-primary">Update</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
                    <button type="submit" form="createModalForm" class="btn btn-primary">Create</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>

        </div>
    </div>

</body>

</html>