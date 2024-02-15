<?php

use App\Http\Controllers\auth\AuthController;

use App\Http\Controllers\admin\security\RoleUserRestAdmin;
use App\Http\Controllers\admin\security\RoleRestAdmin;
use App\Http\Controllers\admin\security\ModelPermissionUserRestAdmin;
use App\Http\Controllers\admin\security\ActionPermissionRestAdmin;
use App\Http\Controllers\admin\security\ModelPermissionRestAdmin;
use App\Http\Controllers\admin\security\UserRestAdmin;

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


Route::get('/admin/roleUser/', [RoleUserRestAdmin::class, 'findAll']);
Route::post('/admin/roleUser/', [RoleUserRestAdmin::class, 'save']);
Route::delete('/admin/roleUser/id/{id}', [RoleUserRestAdmin::class, 'deleteById']);
Route::get('/admin/roleUser/id/{id}', [RoleUserRestAdmin::class, 'findById']);



Route::get('/admin/roleUser/user/id/{id}', [RoleUserRestAdmin::class, 'findByUserId']);
Route::delete('/admin/roleUser/user/id/{id}', [RoleUserRestAdmin::class, 'deleteByUserId']);
Route::get('/admin/roleUser/role/id/{id}', [RoleUserRestAdmin::class, 'findByRoleId']);
Route::delete('/admin/roleUser/role/id/{id}', [RoleUserRestAdmin::class, 'deleteByRoleId']);


Route::get('/admin/role/', [RoleRestAdmin::class, 'findAll']);
Route::post('/admin/role/', [RoleRestAdmin::class, 'save']);
Route::delete('/admin/role/id/{id}', [RoleRestAdmin::class, 'deleteById']);
Route::get('/admin/role/id/{id}', [RoleRestAdmin::class, 'findById']);


Route::get('/admin/role/optimized', [RoleRestAdmin::class, 'findAllOptimized']);



Route::get('/admin/modelPermissionUser/', [ModelPermissionUserRestAdmin::class, 'findAll']);
Route::post('/admin/modelPermissionUser/', [ModelPermissionUserRestAdmin::class, 'save']);
Route::delete('/admin/modelPermissionUser/id/{id}', [ModelPermissionUserRestAdmin::class, 'deleteById']);
Route::get('/admin/modelPermissionUser/id/{id}', [ModelPermissionUserRestAdmin::class, 'findById']);



Route::get('/admin/modelPermissionUser/actionPermission/id/{id}', [ModelPermissionUserRestAdmin::class, 'findByActionPermissionId']);
Route::delete('/admin/modelPermissionUser/actionPermission/id/{id}', [ModelPermissionUserRestAdmin::class, 'deleteByActionPermissionId']);
Route::get('/admin/modelPermissionUser/modelPermission/id/{id}', [ModelPermissionUserRestAdmin::class, 'findByModelPermissionId']);
Route::delete('/admin/modelPermissionUser/modelPermission/id/{id}', [ModelPermissionUserRestAdmin::class, 'deleteByModelPermissionId']);
Route::get('/admin/modelPermissionUser/user/id/{id}', [ModelPermissionUserRestAdmin::class, 'findByUserId']);
Route::delete('/admin/modelPermissionUser/user/id/{id}', [ModelPermissionUserRestAdmin::class, 'deleteByUserId']);


Route::get('/admin/actionPermission/', [ActionPermissionRestAdmin::class, 'findAll']);
Route::post('/admin/actionPermission/', [ActionPermissionRestAdmin::class, 'save']);
Route::delete('/admin/actionPermission/id/{id}', [ActionPermissionRestAdmin::class, 'deleteById']);
Route::get('/admin/actionPermission/id/{id}', [ActionPermissionRestAdmin::class, 'findById']);





Route::get('/admin/modelPermission/', [ModelPermissionRestAdmin::class, 'findAll']);
Route::post('/admin/modelPermission/', [ModelPermissionRestAdmin::class, 'save']);
Route::delete('/admin/modelPermission/id/{id}', [ModelPermissionRestAdmin::class, 'deleteById']);
Route::get('/admin/modelPermission/id/{id}', [ModelPermissionRestAdmin::class, 'findById']);





Route::get('/admin/user/', [UserRestAdmin::class, 'findAll']);
Route::post('/admin/user/', [UserRestAdmin::class, 'save']);
Route::delete('/admin/user/id/{id}', [UserRestAdmin::class, 'deleteById']);
Route::get('/admin/user/id/{id}', [UserRestAdmin::class, 'findById']);

Route::get('/admin/user/detail/id/{id}', [UserRestAdmin::class, 'findWithAssociatedLists']);





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
