<?php

namespace App\Models\security;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class RoleUser extends Model
{
    protected $table = 'role_user';
    protected $fillable = [
        'user_id',
        'role_id',
    ];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
    public function role(): BelongsTo {
        return $this->belongsTo(Role::class);
    }




    public function getId() {
        return $this->attributes['$id'];
    }
    public function setId($id){
        $this->attributes['id'] = $id;
    }

    public function getUser() {
        return $this->attributes['$user'];
    }
    public function setUser($user){
        $this->attributes['user'] = $user;
    }

    public function getRole() {
        return $this->attributes['$role'];
    }
    public function setRole($role){
        $this->attributes['role'] = $role;
    }

}


