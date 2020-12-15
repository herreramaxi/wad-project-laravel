<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Test3Controller extends Controller
{
    public function getIndex()
    {
        echo 'test3';
    }

    public function search(Request $request)
    {
        echo 'asdas';

    }
}
