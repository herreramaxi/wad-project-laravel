<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
     
	public $table = 'products';
    // protected $fillable = [
    //     'name',
    //     'description',
    //     'image',
    //     'created_at'
    // ];
    // public $fillable = ['name','description'];
	// public $primaryKey = 'id';
    // Timestamps
    public $timestamps = true;
}
