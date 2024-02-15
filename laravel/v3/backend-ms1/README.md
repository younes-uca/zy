## Running app

To run your Laravel project, you'll need to follow these steps:


1)- run the command :  composer install ( in case not OK run ::: composer dump-autoload )

2)- run the command : 
    a- php artisan migrate --path database/migrations/existing_migrations
    b- php artisan migrate --path database/migrations/achat (OR php artisan migrate:all)

3) php artisan db:seed --class=ClientSeeder

4) php artisan jwt:secret  ==> this will generate secret key in env file

5) php artisan key:generate

6)- run the command : php artisan serve --port=8036

7)- to register a user 
POST http://127.0.0.1:8036/api/admin/register

{
    "nom":"younes",
    "email":"younes@gmail.com",
    "password":"test12345",
    "username":"younes",
    "prenom":"Zouani"
}
8)- to login a user 
POST http://127.0.0.1:8036/login

{
    "password":"test12345",
    "username":"younes",
}

7)- lunch: http://127.0.0.1:8036/api/admin/client/

This will start the development server, and you can access your Laravel application at the specified URL (usually http://localhost:8000).


## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
