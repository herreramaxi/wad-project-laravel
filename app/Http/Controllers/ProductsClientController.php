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


    // public function show(Request $request)
    // {
    //     $products = null;
    //     if($request->has('name'))
    //     {
    //         $products = Product::all();
    //     }
    //     $products = Product::where('name', 'LIKE', '%' . request('name') . '%')->get();
    //     return view('productsClient.index', compact('products'));
    // }

    // public function search(Request $request)
    // {
    //     $search = $request->get('term');
    //     $products = Product::where('name', 'LIKE', '%' . $search . '%')->get('name');
    //     return response()->json($products);
    // }

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
