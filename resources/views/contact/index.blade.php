@extends('shared.layout')
@section('content')
<link href="{{ asset('css/contact.css') }}" rel="stylesheet">
<script src="{{ asset('js/contact/index.js') }}" defer></script>
{{-- <h1>Contact us</h1> --}}


<div class="wrapper">
  <div class=myform>
    <div class="Contact-Form">
      <h1>Do You have any Queries?</h1>
      <h2>Here,We are always happy to help you!!! </h2>
    </div>

    @include('shared.alertMessages')

    <!-- Contact Form Information -->
    <div class="Contact">
      <form id="contactForm" method="POST" action="{{route('mail')}}" enctype="multipart/form-data"
        class="needs-validation" novalidate>
        {{ csrf_field() }}
        <input id="inputName" name="name" type="text" class="form-control" placeholder="YourName" required><br>
        <div class="invalid-feedback">
          Please provide a name.
        </div>
        <input id="inputEmail" name="email" type="email" class="form-control" placeholder="YourEmail" required><br>
        <div class="invalid-feedback">
          Please provide an e-mail.
        </div>
        <textarea id="textAreaMessage" name="message" class="form-control" placeholder="message" row="4" required
          maxlength="512"></textarea><br>
        <div class="invalid-feedback">
          Please provide a message.
        </div>
        <input type="submit" class="form-control submit" value="SendMessage">
      </form>
    </div>
  </div>
</div>
@stop