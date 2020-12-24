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
        $user->email = "ncirl.wad.group4@gmail.com";
        $user->password = '$2y$10$Jg0UxLUjIIN5JfVWly9dzejuVe9MxmtBUhIAocg8I86L3eKNZ0uC.';
        $user->save();
    }
}
