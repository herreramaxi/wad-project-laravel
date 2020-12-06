<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Models\Product;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();

        return view('products.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('products.create')->render();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        $product = new Product();

        $product->id = Product::max('id') + 1; //Temporary: id is not being auto incremented
        $product->name = request('name');
        $product->description = request('description');

        if (request('image')->isValid() &&  $request->file('image')) {
            $image = base64_encode(
                file_get_contents($request->file('image')->getRealPath())
            );

            $product->image = $image;
        }

        $product->save();
        return back()->withInput();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return view('products.edit', compact('product'))->render();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        return view('products.edit', compact('product'))->render();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        if (request('image') && request('image')->isValid() &&  $request->file('image')) {
            $image = base64_encode(
                file_get_contents($request->file('image')->getRealPath())
            );

            $product->image = $image;
        }
        
        $product->name = request('name');
        $product->description = request('description');

        $product->update();

        return redirect()
            ->route('products.index')
            ->with('success', 'Product updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
