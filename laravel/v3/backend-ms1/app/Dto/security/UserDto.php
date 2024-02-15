<?php

namespace App\Dto\security;


class UserDto
{

    private $credentialsNonExpired;
    private $enabled;
    private $email;
    private $accountNonExpired;
    private $accountNonLocked;
    private $username;
    private $password;
    private $passwordChanged;
    private $lastName;
    private $firstName;
    private $phone;




    public function getId() {
        return $this->id;
    }
    public function setId($id){
        $this->id = $id;
    }

    public function getCredentialsNonExpired() {
        return $this->credentialsNonExpired;
    }
    public function setCredentialsNonExpired($credentialsNonExpired){
        $this->credentialsNonExpired = $credentialsNonExpired;
    }

    public function getEnabled() {
        return $this->enabled;
    }
    public function setEnabled($enabled){
        $this->enabled = $enabled;
    }

    public function getEmail() {
        return $this->email;
    }
    public function setEmail($email){
        $this->email = $email;
    }

    public function getAccountNonExpired() {
        return $this->accountNonExpired;
    }
    public function setAccountNonExpired($accountNonExpired){
        $this->accountNonExpired = $accountNonExpired;
    }

    public function getAccountNonLocked() {
        return $this->accountNonLocked;
    }
    public function setAccountNonLocked($accountNonLocked){
        $this->accountNonLocked = $accountNonLocked;
    }

    public function getUsername() {
        return $this->username;
    }
    public function setUsername($username){
        $this->username = $username;
    }

    public function getPassword() {
        return $this->password;
    }
    public function setPassword($password){
        $this->password = $password;
    }

    public function getPasswordChanged() {
        return $this->passwordChanged;
    }
    public function setPasswordChanged($passwordChanged){
        $this->passwordChanged = $passwordChanged;
    }

    public function getLastName() {
        return $this->lastName;
    }
    public function setLastName($lastName){
        $this->lastName = $lastName;
    }

    public function getFirstName() {
        return $this->firstName;
    }
    public function setFirstName($firstName){
        $this->firstName = $firstName;
    }

    public function getPhone() {
        return $this->phone;
    }
    public function setPhone($phone){
        $this->phone = $phone;
    }

    public function getRoleUsers() {
        return $this->roleUsers;
    }
    public function setRoleUsers($roleUsers){
        $this->roleUsers = $roleUsers;
    }

    public function getModelPermissionUsers() {
        return $this->modelPermissionUsers;
    }
    public function setModelPermissionUsers($modelPermissionUsers){
        $this->modelPermissionUsers = $modelPermissionUsers;
    }

}


