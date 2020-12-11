<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->delete();

        for ($i = 0; $i < 10; $i++) {
            DB::statement(
                "insert into products(id, 
                name, 
                description,
                 price) 
                 values(" .
                    $i .
                    ",'product " .
                    $i .
                    "', 'description " .
                    $i .
                    "','" .
                    $i * 10 .
                    "') "
            );
        }
    }
}
