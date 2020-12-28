@extends('shared.layout')
@section('content')
<link href="{{ asset('css/contact.css') }}" rel="stylesheet">
<script src="{{ asset('js/contact/index.js') }}" defer></script>

  <br>
        <br>
        <h2 class="text-center">
            Do You have any Queries?
        </h2>
        <p class="lead text-center">
           <em> We are always happy to help you! </em>
        </p>
    @include('shared.alertMessages')

       <!-- Contact Form Information -->
      <form id="contactForm" method="POST" action="{{route('mail')}}" enctype="multipart/form-data"
        class="needs-validation" novalidate>
        {{ csrf_field() }}
         <div class="row g-3 justify-content-center">
                <div class="col-sm-7">
                     <input id="inputName" name="name" type="text" class="form-control" placeholder="Your Name" required><br>
        <div class="invalid-feedback">
          Please provide a name.
        </div>
                </div>
            </div>

         <div class="row g-3 justify-content-center">
                <div class="col-sm-7">
                     <input id="inputEmail" name="email" type="email" class="form-control" placeholder="Your E-mail" required><br>
        <div class="invalid-feedback">
          Please provide an e-mail.
        </div>
                </div>
            </div>

        <fieldset class="row g-3 justify-content-center">
                <div class="col-sm-7">
                    <textarea id="textAreaMessage" name="message" class="form-control" placeholder="Message" row="8" required
          maxlength="512"></textarea><br>
        <div class="invalid-feedback">
          Please provide a message.
        </div>
                </div>
            </fieldset>

       
      
           <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <div class="col-sm-7">
                    <button type="submit" class="btn btn-dark">Send Message</button>
                </div>
            </div>

      </form>
  

@stop
