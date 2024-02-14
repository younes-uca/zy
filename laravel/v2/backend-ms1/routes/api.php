<?php

use App\Http\Controllers\auth\AuthController;

use App\Http\Controllers\admin\commun\ClientRestAdmin;
use App\Http\Controllers\admin\commun\ProduitRestAdmin;
use App\Http\Controllers\admin\stock\AchatRestAdmin;
use App\Http\Controllers\admin\stock\AchatItemRestAdmin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/admin/register', [AuthController::class, 'register']);  // to discust later


Route::get('/admin/client/', [ClientRestAdmin::class, 'findAll']);
Route::post('/admin/client/', [ClientRestAdmin::class, 'save']);
Route::delete('/admin/client/id/{id}', [ClientRestAdmin::class, 'deleteById']);
Route::get('/admin/client/id/{id}', [ClientRestAdmin::class, 'findById']);


Route::get('/admin/client/optimized', [ClientRestAdmin::class, 'findAllOptimized']);



Route::get('/admin/produit/', [ProduitRestAdmin::class, 'findAll']);
Route::post('/admin/produit/', [ProduitRestAdmin::class, 'save']);
Route::delete('/admin/produit/id/{id}', [ProduitRestAdmin::class, 'deleteById']);
Route::get('/admin/produit/id/{id}', [ProduitRestAdmin::class, 'findById']);


Route::get('/admin/produit/optimized', [ProduitRestAdmin::class, 'findAllOptimized']);



Route::get('/admin/achat/', [AchatRestAdmin::class, 'findAll']);
Route::post('/admin/achat/', [AchatRestAdmin::class, 'save']);
Route::delete('/admin/achat/id/{id}', [AchatRestAdmin::class, 'deleteById']);
Route::get('/admin/achat/id/{id}', [AchatRestAdmin::class, 'findById']);

Route::get('/admin/achat/detail/id/{id}', [AchatRestAdmin::class, 'findWithAssociatedLists']);

Route::get('/admin/achat/optimized', [AchatRestAdmin::class, 'findAllOptimized']);

Route::get('/admin/achat/client/id/{id}', [AchatRestAdmin::class, 'findByClientId']);
Route::delete('/admin/achat/client/id/{id}', [AchatRestAdmin::class, 'deleteByClientId']);


Route::get('/admin/achatItem/', [AchatItemRestAdmin::class, 'findAll']);
Route::post('/admin/achatItem/', [AchatItemRestAdmin::class, 'save']);
Route::delete('/admin/achatItem/id/{id}', [AchatItemRestAdmin::class, 'deleteById']);
Route::get('/admin/achatItem/id/{id}', [AchatItemRestAdmin::class, 'findById']);



Route::get('/admin/achatItem/produit/id/{id}', [AchatItemRestAdmin::class, 'findByProduitId']);
Route::delete('/admin/achatItem/produit/id/{id}', [AchatItemRestAdmin::class, 'deleteByProduitId']);
Route::get('/admin/achatItem/achat/id/{id}', [AchatItemRestAdmin::class, 'findByAchatId']);
Route::delete('/admin/achatItem/achat/id/{id}', [AchatItemRestAdmin::class, 'deleteByAchatId']);



// UserController Routes
Route::get('/user', [UserController::class, 'index']); // List all user
Route::get('/user/{id}', [UserController::class, 'retrieveById']); // Get a user by ID
Route::post('/user/token', [UserController::class, 'retrieveByToken']); // Retrieve user by token
Route::put('/user/token', [UserController::class, 'updateRememberToken']); // Update user's remember token
Route::post('/user/credentials', [UserController::class, 'retrieveByCredentials']); // Retrieve user by credentials
Route::post('/user/validate-credentials', [UserController::class, 'validateCredentials']); // Validate user credentials
Route::post('/user', [UserController::class, 'save']); // Create a new user
Route::put('/user', [UserController::class, 'update']); // Update user
Route::delete('/user/{id}', [UserController::class, 'delete']); // Delete user by ID


// RoleController Routes
Route::get('/role', [RoleController::class, 'findAll']); // List all roles
Route::get('/role/authority', [RoleController::class, 'findByAuthority']); // Find role by authority
Route::delete('/role/authority', [RoleController::class, 'deleteByAuthority']); // Delete role by authority
Route::get('/role/{id}', [RoleController::class, 'findById']); // Find role by ID
Route::delete('/role/{id}', [RoleController::class, 'deleteById']); // Delete role by ID
Route::post('/role/create', [RoleController::class, 'create']); // Create multiple roles
Route::put('/role/{id}', [RoleController::class, 'update']); // Update role by ID
Route::delete('/role/{id}', [RoleController::class, 'delete']); // Delete role by ID
Route::post('/role/username', [RoleController::class, 'findByUserName']); // Find role by username
