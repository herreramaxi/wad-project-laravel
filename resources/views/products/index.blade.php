<html>
<head>
    <meta charset="utf-8">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/products.js') }}" defer></script>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>

<body>

<h1>Products</h1>
<br>
@foreach ($products as $product)
    <li>{{ $product->name }}, {{ $product->description }}
    @isset ($product->image) 
        @php
        $my_bytea = stream_get_contents($product->image);
        @endphp
        <img src="data:image/png;base64,{{$my_bytea}}" style="max-width: 40px;"/>    
    @endisset
  
    <!-- <a href="{{ route('products.show', $product->id) }}">
                            <i class="fas fa-edit  fa-lg"></i>

                        </a> -->
                        
    <a class="text-secondary" data-toggle="modal" id="mediumButton" data-target="#mediumModal"
                                data-attr="{{ route('products.edit', $product->id) }}">
                                <i class="fas fa-edit text-gray-300"></i>
                            </a>
    </li>
@endforeach

<!-- <h1>prueba</h1> -->
 <?php
//  foreach ($products as $product) {
// echo 'product: ' . $product->name;
// if ($product->image) {
//     $my_bytea = stream_get_contents($product->image);
//     echo '<img src="data:image/png;base64,' . $my_bytea . '"/>';
// }

// echo '<li>' . $product->name . ', ' . '</li>';
// }
?> 

    <!-- medium modal -->
    <div class="modal fade" id="mediumModal" tabindex="-1" role="dialog" aria-labelledby="mediumModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="mediumBody">
                                  </div>
            </div>
        </div>
    </div>        
   
</body>
</html>