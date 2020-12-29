<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Product;

class ProductsTableSeeder extends Seeder
{  
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $path = base_path().'/database/seeders/';
        $jsonPath = $path. 'json/';
        $imagesPath = $path. 'images/';
              
        $json = json_decode( file_get_contents( $jsonPath. 'products.json'),1);
         
        $id = 1;
        foreach ($json['products'] as $product) {

            $file = file_get_contents( $imagesPath. $product['image']);
            $image = base64_encode( $file);

            $p = new Product();
            $p->id =  $id++;
            $p->name =  $product['name'];
            $p->description =   $product['description'];
            $p->price =  $product['price'];
            $p->image =   $image;
            $p->save();
        }      

    }
}
