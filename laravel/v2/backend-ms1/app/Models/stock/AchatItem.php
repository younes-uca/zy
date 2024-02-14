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




    public getId(){
        return $this->attributes['$id'];
    }
    public void setId($id){
        $this->attributes['id'] = $id;
    }

    public getProduit(){
        return $this->attributes['$produit'];
    }
    public void setProduit($produit){
        $this->attributes['produit'] = $produit;
    }

    public getPrixUnitaire(){
        return $this->attributes['$prixUnitaire'];
    }
    public void setPrixUnitaire($prixUnitaire){
        $this->attributes['prixUnitaire'] = $prixUnitaire;
    }

    public getPrixVente(){
        return $this->attributes['$prixVente'];
    }
    public void setPrixVente($prixVente){
        $this->attributes['prixVente'] = $prixVente;
    }

    public getQuantite(){
        return $this->attributes['$quantite'];
    }
    public void setQuantite($quantite){
        $this->attributes['quantite'] = $quantite;
    }

    public getQuantiteAvoir(){
        return $this->attributes['$quantiteAvoir'];
    }
    public void setQuantiteAvoir($quantiteAvoir){
        $this->attributes['quantiteAvoir'] = $quantiteAvoir;
    }

    public getRemise(){
        return $this->attributes['$remise'];
    }
    public void setRemise($remise){
        $this->attributes['remise'] = $remise;
    }

    public getAchat(){
        return $this->attributes['$achat'];
    }
    public void setAchat($achat){
        $this->attributes['achat'] = $achat;
    }

}


