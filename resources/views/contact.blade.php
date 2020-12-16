@extends('shared.layout')
@section('content')
<link href="{{ asset('css/contact.css') }}" rel="stylesheet">
{{-- <h1>Contact us</h1> --}}
<div class="wrapper">
    <div class=myform>
        <div class="Contact-Form">
            <h1>Do You have any Queries?</h1>
            <h2>Here,We are always happy to help you!!! </h2>
        </div>
        <!-- Contact Form Information -->
        <div class="Contact">
            <form id="Contact" method="post" action="contact">
                {{ csrf_field() }}
                <input name="name" type="text" class="form-control" placeholder="YourName" required><br>
                <input name="email" type="email" class="form-control" placeholder="YourEmail" required><br>

                <textarea name="message" class="form-control" placeholder="message" row="4" required></textarea><br>

                <input type="submit" class="form-control submit" value="SendMessage">
            </form>
        </div>
    </div>
</div>
@stop

<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
 

    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'ncirl-wad-group4@mailinator.com';

    $email_subject = "New Form Submit";

    $email_body = "User Name: " . $name . "\n" .
      "User Email: " . $visitor_email . "\n";

    $to = "ncirl-wad-group4@mailinator.com";

    $headers = "FROM: $email_from\r\n";
    $headers .= "Reply-To:$visitor_email";

    //TODO: Investigate how to send an email in Laravel + Heroku
    mail($to, $email_subject, $email_body, $headers);
    header("Location: contact1");
  }
  ?>