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
// mix.js('resources/js/products/create.js', 'public/js/products');
mix.js('resources/js/productsClient/index.js', 'public/js/productsClient');
mix.js('resources/js/spinner.js', 'public/js');
mix.js('resources/js/alertMessages.js', 'public/js');
mix.js('resources/js/contact/index.js', 'public/js/contact');
mix.sass('resources/sass/products/index.scss', 'public/css/products');
mix.sass('resources/sass/spinner.scss', 'public/css');
mix.sass('resources/sass/contact.scss', 'public/css');
mix.sass('resources/sass/productsClient/index.scss', 'public/css/productsClient');
mix.sass('resources/sass/productsClient/menusCarousel.scss', 'public/css/productsClient');
mix.sass('resources/sass/home/home.scss', 'public/css');
mix.postCss('resources/css/typeahead.css', 'public/css');
// mix.js('node_modules/typeahead.js', 'public/js/typeahead');

//.sourceMaps(); //adding debugging information