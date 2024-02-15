<?php

namespace App\Dto\security;


class RoleDto
{

    private $authority;




    public function getId() {
        return $this->id;
    }
    public function setId($id){
        $this->id = $id;
    }

    public function getAuthority() {
        return $this->authority;
    }
    public function setAuthority($authority){
        $this->authority = $authority;
    }

}


