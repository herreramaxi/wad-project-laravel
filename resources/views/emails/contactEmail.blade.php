<!DOCTYPE html>
<html lang="en-US">

<head>
  <meta charset="utf-8" />
</head>

<body>
  <h2>Contact form: {{$data['email']}}</h2>
  <hr>
  <p><b>Name: </b>{{ $data['name'] }}</p>
  <p><b>E-Mail: </b>{{  $data['email'] }}</p>
  <p><b>Message: </b>
    <pre>{{ $data['message'] }}</pre>
</body>

</html>