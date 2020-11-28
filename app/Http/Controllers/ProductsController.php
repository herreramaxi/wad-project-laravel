<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    public function getIndex()
    {
        $products = DB::select(
            'select id, name, description from public.products'
        );
        return view('productsView', ['products' => $products]);
    }
}
