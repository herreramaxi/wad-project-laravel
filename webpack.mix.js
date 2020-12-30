const mix = require("laravel-mix");

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

mix.js("resources/js/app.js", "public/js").sass(
    "resources/sass/app.scss",
    "public/css"
);

mix.copyDirectory(
    "node_modules/@fortawesome/fontawesome-free/webfonts",
    "public/webfonts"
)
    .js("resources/js/products/index.js", "public/js/products")
    .js("resources/js/products/edit.js", "public/js/products")
    .js("resources/js/productsClient/index.js", "public/js/productsClient")
    .js(
        "resources/js/productsClient/menusCarousel.js",
        "public/js/productsClient"
    )
    .js("resources/js/spinner.js", "public/js")
    .js("resources/js/alertMessages.js", "public/js")
    .js("resources/js/contact/index.js", "public/js/contact")
    .sass("resources/sass/products/index.scss", "public/css/products")
    .sass("resources/sass/spinner.scss", "public/css")
    .sass(
        "resources/sass/productsClient/index.scss",
        "public/css/productsClient"
    )
    .sass(
        "resources/sass/productsClient/menusCarousel.scss",
        "public/css/productsClient"
    )
    .sass("resources/sass/home/home.scss", "public/css")
    .postCss("resources/css/typeahead.css", "public/css");

if (mix.inProduction()) {
    //Versioning / Cache Busting (production)
    mix.version();
} else {
    //adding debugging information (dev)
    mix.sourceMaps();
}
