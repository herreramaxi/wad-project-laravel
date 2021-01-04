# WAD project: Food Delivery App
## Website links
 - [Home](https://wad-project-laravel.herokuapp.com/)
 - [Menus](https://wad-project-laravel.herokuapp.com/productsClient)
 - [Contactus](https://wad-project-laravel.herokuapp.com/contactus)
 - [Admin](https://wad-project-laravel.herokuapp.com/products) (Need user credentials)
## Project main parts
- [Controllers](https://github.com/herreramaxi/wad-project-laravel/tree/main/app/Http/Controllers)
- [Image helper](https://github.com/herreramaxi/wad-project-laravel/blob/main/app/Helpers/ImageHelper.php)
- [Views](https://github.com/herreramaxi/wad-project-laravel/tree/main/resources/views)
- [JavaScript](https://github.com/herreramaxi/wad-project-laravel/tree/main/resources/js)
- [sass](https://github.com/herreramaxi/wad-project-laravel/tree/main/resources/sass)
- [Database](https://github.com/herreramaxi/wad-project-laravel/blob/main/database)
  * [Migration: Products table](https://github.com/herreramaxi/wad-project-laravel/blob/main/database/migrations/2020_11_27_183856_create_products_table.php)
  * [Seeder: Products/Menus](https://github.com/herreramaxi/wad-project-laravel/blob/main/database/seeders/ProductsTableSeeder.php)
 - [JSON files](https://github.com/herreramaxi/wad-project-laravel/tree/main/public/json)
   * [JSON for rendering home page's carousel](https://github.com/herreramaxi/wad-project-laravel/blob/main/public/json/home-content.json)
   * [JSON for rendering Navbar](https://github.com/herreramaxi/wad-project-laravel/blob/main/public/json/navData.json)
   * [JSON for rendering menus page's carousel](https://github.com/herreramaxi/wad-project-laravel/blob/main/public/json/recommendedMenus.json)
- [webpack build steps](https://github.com/herreramaxi/wad-project-laravel/blob/main/webpack.mix.js)
- [.htaccess: customization of Apache HTTP server behavior](https://github.com/herreramaxi/wad-project-laravel/blob/main/public/.htaccess)
  * [HTTPS redirect](https://github.com/herreramaxi/wad-project-laravel/blob/main/public/.htaccess#L23)
  * [Compress HTML, CSS, JavaScript, Text, XML and fonts](https://github.com/herreramaxi/wad-project-laravel/blob/main/public/.htaccess#L28)
  * [Cache](https://github.com/herreramaxi/wad-project-laravel/blob/main/public/.htaccess#L59)

## How to install the web app and run it locally 
### Requirements
* Have installed PHP and enabled below modules in php.ini
    * extension=fileinfo
    * extension=gd2
    * extension=mbstring
    * extension=openssl
    * extension=pdo_pgsql
    * extension=pgsql
 * Have installed [Composer](https://laravel.com/docs/4.2#install-composer)
 * Have installed [Laravel](https://laravel.com/docs/4.2#install-laravel)
 * Have installed a Postgres database.
 * Have an empty database created.
### Installation steps  
 * Go to the root of the project: wad-project-laravel-main
 * Open powershell
 * Excecute: powershell -ExecutionPolicy ByPass -File .\install.ps1
   * [install.ps1](https://github.com/herreramaxi/wad-project-laravel/blob/main/install.ps1)
### Configure
Configure database variables (DB_*) on .env file provided on submission zip file. 
### Run a local server
 * php artisan serve
 
