<html>
<body>
<h1>Users using blade syntax</h1>

@foreach ($users as $user)
    <p>This is user {{ $user->customername }}</p>
@endforeach

<h1>Users using php syntax</h1>

<?php
   foreach ($users as $user2) {
    echo 'This is user '.  $user2->customername . ' </p>';
   }
?>
</body>
</html>