<?php

namespace App\Dto\security;


class RoleUserDto
{

    private $user,
    private $role,




    public function getId() {
        return $this->id;
    }
    public function setId($id){
        $this->id = $id;
    }

    public function getUser() {
        return $this->user;
    }
    public function setUser($user){
        $this->user = $user;
    }

    public function getRole() {
        return $this->role;
    }
    public function setRole($role){
        $this->role = $role;
    }

}


