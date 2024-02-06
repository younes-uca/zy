## Running app

To run your Laravel project, you'll need to follow these steps:


1)- run the command :  composer install ( in case not OK run ::: composer dump-autoload )

2)- run the command : 
    a- php artisan migrate --path database/migrations/existing_migrations
    b- php artisan migrate --path database/migrations/achat (OR php artisan migrate:all)

php artisan db:seed --class=ClientSeeder


3)- run the command : php artisan serve --port=8036

4)- lunch: http://localhost:8036/api/admin/client/

This will start the development server, and you can access your Laravel application at the specified URL (usually http://localhost:8000).


## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
