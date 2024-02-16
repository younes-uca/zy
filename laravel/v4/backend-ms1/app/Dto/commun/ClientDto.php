<?php

namespace App\Dto\commun;


class ClientDto
{

    private $cin;
    private $nom;
    private $tel;
    private $email;
    private $adresse;
    private $description;
    private $creance;




    public function getId() {
        return $this->id;
    }
    public function setId($id){
        $this->id = $id;
    }

    public function getCin() {
        return $this->cin;
    }
    public function setCin($cin){
        $this->cin = $cin;
    }

    public function getNom() {
        return $this->nom;
    }
    public function setNom($nom){
        $this->nom = $nom;
    }

    public function getTel() {
        return $this->tel;
    }
    public function setTel($tel){
        $this->tel = $tel;
    }

    public function getEmail() {
        return $this->email;
    }
    public function setEmail($email){
        $this->email = $email;
    }

    public function getAdresse() {
        return $this->adresse;
    }
    public function setAdresse($adresse){
        $this->adresse = $adresse;
    }

    public function getDescription() {
        return $this->description;
    }
    public function setDescription($description){
        $this->description = $description;
    }

    public function getCreance() {
        return $this->creance;
    }
    public function setCreance($creance){
        $this->creance = $creance;
    }

}


