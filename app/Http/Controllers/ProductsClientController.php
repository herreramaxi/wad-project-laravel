<?php
namespace App\Http\Controllers;
namespace App\Http\Controllers;
use App\Models\Product;

class ProductsClientController extends Controller
{
    public function getIndex()
    {
        $products = Product::orderBy('name')->get();

        return view('productsClient.index', compact('products'));
    }
}
