<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'name'      => 'Administrator',
            'email'     => 'admin@apl-products.com',
            'password'  => '5u4rNHc4DBr08guF535VWknQ',
            // 'password'  => 'password',
        ]);
    }
}
