<?php

namespace App\Dto\stock;


class AchatItemDto
{

    private $prixUnitaire;
    private $prixVente;
    private $quantite;
    private $quantiteAvoir;
    private $remise;
    private $produit,
    private $achat,




    public function getId() {
        return $this->id;
    }
    public function setId($id){
        $this->id = $id;
    }

    public function getProduit() {
        return $this->produit;
    }
    public function setProduit($produit){
        $this->produit = $produit;
    }

    public function getPrixUnitaire() {
        return $this->prixUnitaire;
    }
    public function setPrixUnitaire($prixUnitaire){
        $this->prixUnitaire = $prixUnitaire;
    }

    public function getPrixVente() {
        return $this->prixVente;
    }
    public function setPrixVente($prixVente){
        $this->prixVente = $prixVente;
    }

    public function getQuantite() {
        return $this->quantite;
    }
    public function setQuantite($quantite){
        $this->quantite = $quantite;
    }

    public function getQuantiteAvoir() {
        return $this->quantiteAvoir;
    }
    public function setQuantiteAvoir($quantiteAvoir){
        $this->quantiteAvoir = $quantiteAvoir;
    }

    public function getRemise() {
        return $this->remise;
    }
    public function setRemise($remise){
        $this->remise = $remise;
    }

    public function getAchat() {
        return $this->achat;
    }
    public function setAchat($achat){
        $this->achat = $achat;
    }

}


