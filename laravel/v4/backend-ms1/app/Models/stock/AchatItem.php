<?php

namespace App\Models\stock;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AchatItem extends Model
{
    protected $table = 'achat_item';
    protected $fillable = [
        'prixUnitaire',
        'prixVente',
        'quantite',
        'quantiteAvoir',
        'remise',
        'produit_id',
        'achat_id',
    ];

    public function produit(): BelongsTo {
        return $this->belongsTo(Produit::class);
    }
    public function achat(): BelongsTo {
        return $this->belongsTo(Achat::class);
    }




    public function getId() {
        return $this->attributes['$id'];
    }
    public function setId($id){
        $this->attributes['id'] = $id;
    }

    public function getProduit() {
        return $this->attributes['$produit'];
    }
    public function setProduit($produit){
        $this->attributes['produit'] = $produit;
    }

    public function getPrixUnitaire() {
        return $this->attributes['$prixUnitaire'];
    }
    public function setPrixUnitaire($prixUnitaire){
        $this->attributes['prixUnitaire'] = $prixUnitaire;
    }

    public function getPrixVente() {
        return $this->attributes['$prixVente'];
    }
    public function setPrixVente($prixVente){
        $this->attributes['prixVente'] = $prixVente;
    }

    public function getQuantite() {
        return $this->attributes['$quantite'];
    }
    public function setQuantite($quantite){
        $this->attributes['quantite'] = $quantite;
    }

    public function getQuantiteAvoir() {
        return $this->attributes['$quantiteAvoir'];
    }
    public function setQuantiteAvoir($quantiteAvoir){
        $this->attributes['quantiteAvoir'] = $quantiteAvoir;
    }

    public function getRemise() {
        return $this->attributes['$remise'];
    }
    public function setRemise($remise){
        $this->attributes['remise'] = $remise;
    }

    public function getAchat() {
        return $this->attributes['$achat'];
    }
    public function setAchat($achat){
        $this->attributes['achat'] = $achat;
    }

}


