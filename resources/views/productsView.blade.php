<html>
<body>
<h1>Products</h1>
<br>
<?php
echo '<ul>';
foreach ($products as $product) {
    echo '<li>' .
        $product->id .
        ', ' .
        $product->name .
        ', ' .
        $product->description .       
        '</li>';
}
echo '</ul>';
?>
</body>
</html>