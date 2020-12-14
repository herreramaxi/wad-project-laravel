const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();

mix.copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts');
mix.js('resources/js/products/index.js', 'public/js/products');
mix.js('resources/js/products/edit.js', 'public/js/products');
mix.js('resources/js/products/create.js', 'public/js/products');
mix.js('resources/js/productsClient/index.js', 'public/js/productsClient');

//.sourceMaps(); //adding debugging information