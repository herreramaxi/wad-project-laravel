<?php

namespace App\Http\Controllers;

use App\Mail\Email;
use Exception;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactEmail;
use Illuminate\Http\Request;
use App\Http\Requests;

class ContactUsController extends Controller
{
    public function index()
    {
        return view('contact.index');
    }

    public function mail(Request $request)
    {
        try {           
            $data = array('name' => $request->name, 'email' => $request->email, 'message' => $request->message);
            Mail::to($request->email)
                ->send(new ContactEmail($data));

            return response('OK', 200);
        } catch (Exception  $e) {
            return response('Error when sending an email: ' . $e->getMessage(), 400);
        }
    }
}
