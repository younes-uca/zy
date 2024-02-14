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





    public getId(){
        return $this->attributes['$id'];
    }
    public void setId($id){
        $this->attributes['id'] = $id;
    }

    public getReference(){
        return $this->attributes['$reference'];
    }
    public void setReference($reference){
        $this->attributes['reference'] = $reference;
    }

    public getLibelle(){
        return $this->attributes['$libelle'];
    }
    public void setLibelle($libelle){
        $this->attributes['libelle'] = $libelle;
    }

    public getBarcode(){
        return $this->attributes['$barcode'];
    }
    public void setBarcode($barcode){
        $this->attributes['barcode'] = $barcode;
    }

    public getDiscription(){
        return $this->attributes['$discription'];
    }
    public void setDiscription($discription){
        $this->attributes['discription'] = $discription;
    }

    public getPrixAchatMoyen(){
        return $this->attributes['$prixAchatMoyen'];
    }
    public void setPrixAchatMoyen($prixAchatMoyen){
        $this->attributes['prixAchatMoyen'] = $prixAchatMoyen;
    }

    public getQuantite(){
        return $this->attributes['$quantite'];
    }
    public void setQuantite($quantite){
        $this->attributes['quantite'] = $quantite;
    }

    public getSeuilAlert(){
        return $this->attributes['$seuilAlert'];
    }
    public void setSeuilAlert($seuilAlert){
        $this->attributes['seuilAlert'] = $seuilAlert;
    }

}


