<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\zynerator\model\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // make a console log to see the request
        $validator = Validator::make($request->all(), [
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $credentials = $request->only('username', 'password');

        if (!Auth::attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized', 'credentails' => $credentials], 401);
        }

        $user = Auth::user();
        $customClaims = ['role' => 'ROLE_ADMIN'];
        $token = JWTAuth::claims($customClaims)->fromUser($user);
        $response = [
            'id' => $user->id,
            'username' => $user->username,
            'email' => $user->email,
            'roles' => [$customClaims['role']],
            'tokenType' => 'Bearer',
            'accessToken' => $token
        ];

        return response()->json($response)->withHeaders([
            'Authorization' => 'Bearer ' . $token,
            'Access-Control-Expose-Headers' => 'Authorization',
        ]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nom' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string',
            'prenom' => 'required|string|max:255',
            'username' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $validatedData = $validator->validated();
        $validatedData['password'] = bcrypt($validatedData['password']);

        var_dump($validatedData);

        $user = User::create($validatedData);
        // TODO: add custom claims
        $token = JWTAuth::fromUser($user);

        return response()->json(['token' => $token], 201);
    }
}
