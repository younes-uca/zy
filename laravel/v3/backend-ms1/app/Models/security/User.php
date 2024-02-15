<?php

namespace App\Models\security;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Model
{
    protected $table = 'user';
    protected $fillable = [
        'credentialsNonExpired',
        'enabled',
        'email',
        'accountNonExpired',
        'accountNonLocked',
        'username',
        'password',
        'passwordChanged',
        'lastName',
        'firstName',
        'phone',
    ];


    public function roleUsers(): HasMany {
        return $this->hasMany(RoleUser::class);
    }
    public function modelPermissionUsers(): HasMany {
        return $this->hasMany(ModelPermissionUser::class);
    }



    public function getId() {
        return $this->attributes['$id'];
    }
    public function setId($id){
        $this->attributes['id'] = $id;
    }

    public function getCredentialsNonExpired() {
        return $this->attributes['$credentialsNonExpired'];
    }
    public function setCredentialsNonExpired($credentialsNonExpired){
        $this->attributes['credentialsNonExpired'] = $credentialsNonExpired;
    }

    public function getEnabled() {
        return $this->attributes['$enabled'];
    }
    public function setEnabled($enabled){
        $this->attributes['enabled'] = $enabled;
    }

    public function getEmail() {
        return $this->attributes['$email'];
    }
    public function setEmail($email){
        $this->attributes['email'] = $email;
    }

    public function getAccountNonExpired() {
        return $this->attributes['$accountNonExpired'];
    }
    public function setAccountNonExpired($accountNonExpired){
        $this->attributes['accountNonExpired'] = $accountNonExpired;
    }

    public function getAccountNonLocked() {
        return $this->attributes['$accountNonLocked'];
    }
    public function setAccountNonLocked($accountNonLocked){
        $this->attributes['accountNonLocked'] = $accountNonLocked;
    }

    public function getUsername() {
        return $this->attributes['$username'];
    }
    public function setUsername($username){
        $this->attributes['username'] = $username;
    }

    public function getPassword() {
        return $this->attributes['$password'];
    }
    public function setPassword($password){
        $this->attributes['password'] = $password;
    }

    public function getPasswordChanged() {
        return $this->attributes['$passwordChanged'];
    }
    public function setPasswordChanged($passwordChanged){
        $this->attributes['passwordChanged'] = $passwordChanged;
    }

    public function getLastName() {
        return $this->attributes['$lastName'];
    }
    public function setLastName($lastName){
        $this->attributes['lastName'] = $lastName;
    }

    public function getFirstName() {
        return $this->attributes['$firstName'];
    }
    public function setFirstName($firstName){
        $this->attributes['firstName'] = $firstName;
    }

    public function getPhone() {
        return $this->attributes['$phone'];
    }
    public function setPhone($phone){
        $this->attributes['phone'] = $phone;
    }

    public function getRoleUsers() {
        return $this->attributes['$roleUsers'];
    }
    public function setRoleUsers($roleUsers){
        $this->attributes['roleUsers'] = $roleUsers;
    }

    public function getModelPermissionUsers() {
        return $this->attributes['$modelPermissionUsers'];
    }
    public function setModelPermissionUsers($modelPermissionUsers){
        $this->attributes['modelPermissionUsers'] = $modelPermissionUsers;
    }

}


