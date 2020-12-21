<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ProductsTableSeeder::class);
        $this->command->info('Products table seeded...');

        $this->call(UsersTableSeeder::class);
        $this->command->info('Users table seeded...');
    }
}
