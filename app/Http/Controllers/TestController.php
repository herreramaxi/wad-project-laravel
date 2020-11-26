<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TestController extends Controller
{     
    public function getIndex() {
         echo 'Accessing to a view via TestController';
        
         $users = DB::select('select * from public.customers');
     return   view('testView', array('users' => $users));
     }     
}
