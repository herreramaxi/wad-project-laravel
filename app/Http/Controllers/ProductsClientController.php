<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductsClientController extends Controller
{
    public function getIndex()
    { return  view('productsClient.index') ;
       
         }

}
