<?php

namespace App\Dto\security;


class ModelPermissionUserDto
{

    private $value;
    private $subAttribute;
    private $actionPermission,
    private $modelPermission,
    private $user,




    public function getId() {
        return $this->id;
    }
    public function setId($id){
        $this->id = $id;
    }

    public function getValue() {
        return $this->value;
    }
    public function setValue($value){
        $this->value = $value;
    }

    public function getSubAttribute() {
        return $this->subAttribute;
    }
    public function setSubAttribute($subAttribute){
        $this->subAttribute = $subAttribute;
    }

    public function getActionPermission() {
        return $this->actionPermission;
    }
    public function setActionPermission($actionPermission){
        $this->actionPermission = $actionPermission;
    }

    public function getModelPermission() {
        return $this->modelPermission;
    }
    public function setModelPermission($modelPermission){
        $this->modelPermission = $modelPermission;
    }

    public function getUser() {
        return $this->user;
    }
    public function setUser($user){
        $this->user = $user;
    }

}


