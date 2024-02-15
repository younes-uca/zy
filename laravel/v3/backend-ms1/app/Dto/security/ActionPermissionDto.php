<?php

namespace App\Dto\security;


class ActionPermissionDto
{

    private $reference;
    private $libelle;




    public function getId() {
        return $this->id;
    }
    public function setId($id){
        $this->id = $id;
    }

    public function getReference() {
        return $this->reference;
    }
    public function setReference($reference){
        $this->reference = $reference;
    }

    public function getLibelle() {
        return $this->libelle;
    }
    public function setLibelle($libelle){
        $this->libelle = $libelle;
    }

}


