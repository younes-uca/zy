<?php

namespace App\Dto\commun;


class ProduitDto
{

    private $reference;
    private $libelle;
    private $barcode;
    private $discription;
    private $prixAchatMoyen;
    private $quantite;
    private $seuilAlert;




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

    public function getBarcode() {
        return $this->barcode;
    }
    public function setBarcode($barcode){
        $this->barcode = $barcode;
    }

    public function getDiscription() {
        return $this->discription;
    }
    public function setDiscription($discription){
        $this->discription = $discription;
    }

    public function getPrixAchatMoyen() {
        return $this->prixAchatMoyen;
    }
    public function setPrixAchatMoyen($prixAchatMoyen){
        $this->prixAchatMoyen = $prixAchatMoyen;
    }

    public function getQuantite() {
        return $this->quantite;
    }
    public function setQuantite($quantite){
        $this->quantite = $quantite;
    }

    public function getSeuilAlert() {
        return $this->seuilAlert;
    }
    public function setSeuilAlert($seuilAlert){
        $this->seuilAlert = $seuilAlert;
    }

}


