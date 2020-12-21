<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class UsersTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->name = "Admin";
        $user->email = "ncirl-wad-group4@mailinator.com";
        $user->password = '$2y$10$RbYG1ATsVU.644V8HK9rMuMMUGHv9Nus./hE0Oz8ZkpyUxQU0lCJG';
        $user->save();
    }
}
