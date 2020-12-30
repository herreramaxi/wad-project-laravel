<?php

if (!function_exists('getImageSrc')) {

  /**
   * Retrieve a src attribute for a image tag
   *
   * @product App\Models\Product $product
   * @return src attribute
   */
  function getImageSrc($product)
  {
    $imageNotAvailable = "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";

    $imgSrc = null;

    if ($product != null && $product->image != null) {
      $my_bytea = stream_get_contents($product->image);
      $imgSrc = "data:image/webp;base64," . $my_bytea . "";
    }

    if ($imgSrc == null) {
      $imgSrc  = "data:image/webp;base64," . $imageNotAvailable;
    }

    return $imgSrc;
  }
}
