<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers;

use App\Models\Product;
use Exception;
use Illuminate\Http\Request;

class ProductsClientController extends Controller
{
    public function index()
    {
        return view('productsClient.index');
    }

    public function searchAutocomplete(Request $request)
    {
        $products = null;

        if ($request->has('query')) {
            $products = Product::orderBy('name')
                ->where('name', 'ilike', '%' . request('query') . '%')
                ->get();
        }

        if ($products == null) {
            $products = Product::orderBy('name')->get();
        }

        $products2 = $products->map(function ($prod, $key) {
            $p = new Product();
            $p->name = $prod->name;
            $p->image = getImageSrc($prod);
            return $p;
        });

        return  response()->json($products2);
    }


    public function search(Request $request)
    {
        $products = null;

        if ($request->has('name')) {
            $products = Product::orderBy('name')
                ->where('name', 'ilike', '%' . request('name') . '%')
                ->get();
        }

        if ($products == null) {
            $products = Product::orderBy('name')->get();
        }

        return view('productsClient.partialProductList', compact('products'));
    }
}
