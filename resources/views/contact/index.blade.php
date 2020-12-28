@extends('shared.layout')
@section('content')
        <br>
        <br>
        <h2 class="text-center">
            Do You have any Queries?
        </h2>
        <p class="lead text-center">
           <em> We are always happy to help you! </em>
        </p>
        <!-- Contact Form Information -->
        <form method="POST" action="{{ route('mail') }}" enctype="multipart/form-data">
            {{ csrf_field() }}
            <div class="row g-3 justify-content-center">
                <div class="col-sm-7">
                    <input name="name" type="text" class="form-control" placeholder="Your Name" required><br>
                </div>
            </div>
            <div class="row g-3 justify-content-center">
                <div class="col-sm-7">
                    <input name="email" type="email" class="form-control" placeholder="Your Email" required><br>
                </div>
            </div>
            <fieldset class="row g-3 justify-content-center">
                <div class="col-sm-7">
                    <textarea name="message" class="form-control" row="4" placeholder="Message" required></textarea><br>
                </div>
            </fieldset>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <div class="col-sm-7">
                    <button type="submit" class="btn btn-dark">Send Message</button>
                </div>
            </div>
        </form>
@stop

<?php
  // if ($_SERVER["REQUEST_METHOD"] == "POST") {
 

  //   $name = $_POST['name'];
  //   $visitor_email = $_POST['email'];
  //   $message = $_POST['message'];

  //   $email_from = 'ncirl-wad-group4@mailinator.com';

  //   $email_subject = "New Form Submit";

  //   $email_body = "User Name: " . $name . "\n" .
  //     "User Email: " . $visitor_email . "\n";

  //   $to = "ncirl-wad-group4@mailinator.com";

  //   $headers = "FROM: $email_from\r\n";
  //   $headers .= "Reply-To:$visitor_email";

  //   //TODO: Investigate how to send an email in Laravel + Heroku
  //   mail($to, $email_subject, $email_body, $headers);
  //   header("Location: contact1");
  // }
  ?>
