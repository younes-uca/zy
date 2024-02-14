<?php

namespace App\Models\commun;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Client extends Model
{
    protected $table = 'client';
    protected $fillable = [
        'cin',
        'nom',
        'tel',
        'email',
        'adresse',
        'description',
        'creance',
    ];





    public getId(){
        return $this->attributes['$id'];
    }
    public void setId($id){
        $this->attributes['id'] = $id;
    }

    public getCin(){
        return $this->attributes['$cin'];
    }
    public void setCin($cin){
        $this->attributes['cin'] = $cin;
    }

    public getNom(){
        return $this->attributes['$nom'];
    }
    public void setNom($nom){
        $this->attributes['nom'] = $nom;
    }

    public getTel(){
        return $this->attributes['$tel'];
    }
    public void setTel($tel){
        $this->attributes['tel'] = $tel;
    }

    public getEmail(){
        return $this->attributes['$email'];
    }
    public void setEmail($email){
        $this->attributes['email'] = $email;
    }

    public getAdresse(){
        return $this->attributes['$adresse'];
    }
    public void setAdresse($adresse){
        $this->attributes['adresse'] = $adresse;
    }

    public getDescription(){
        return $this->attributes['$description'];
    }
    public void setDescription($description){
        $this->attributes['description'] = $description;
    }

    public getCreance(){
        return $this->attributes['$creance'];
    }
    public void setCreance($creance){
        $this->attributes['creance'] = $creance;
    }

}


