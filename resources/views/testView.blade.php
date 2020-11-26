<html>
<body>
<h1>hello</h1>

@foreach ($users as $user)
    <p>This is user {{ $user->customername }}</p>
@endforeach

</body>
</html>