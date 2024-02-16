<?php

namespace App\Models\commun;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Produit extends Model
{
    protected $table = 'produit';
    protected $fillable = [
        'reference',
        'libelle',
        'barcode',
        'discription',
        'prixAchatMoyen',
        'quantite',
        'seuilAlert',
    ];





    public function getId() {
        return $this->attributes['$id'];
    }
    public function setId($id){
        $this->attributes['id'] = $id;
    }

    public function getReference() {
        return $this->attributes['$reference'];
    }
    public function setReference($reference){
        $this->attributes['reference'] = $reference;
    }

    public function getLibelle() {
        return $this->attributes['$libelle'];
    }
    public function setLibelle($libelle){
        $this->attributes['libelle'] = $libelle;
    }

    public function getBarcode() {
        return $this->attributes['$barcode'];
    }
    public function setBarcode($barcode){
        $this->attributes['barcode'] = $barcode;
    }

    public function getDiscription() {
        return $this->attributes['$discription'];
    }
    public function setDiscription($discription){
        $this->attributes['discription'] = $discription;
    }

    public function getPrixAchatMoyen() {
        return $this->attributes['$prixAchatMoyen'];
    }
    public function setPrixAchatMoyen($prixAchatMoyen){
        $this->attributes['prixAchatMoyen'] = $prixAchatMoyen;
    }

    public function getQuantite() {
        return $this->attributes['$quantite'];
    }
    public function setQuantite($quantite){
        $this->attributes['quantite'] = $quantite;
    }

    public function getSeuilAlert() {
        return $this->attributes['$seuilAlert'];
    }
    public function setSeuilAlert($seuilAlert){
        $this->attributes['seuilAlert'] = $seuilAlert;
    }

}


