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


    public function getId(): int
    {
        return $this->attributes['$id'];
    }

    public function setId($id): void
    {
        $this->attributes['id'] = $id;
    }

    public function getCin()
    {
        return $this->attributes['$cin'];
    }

    public function setCin($cin)
    {
        $this->attributes['cin'] = $cin;
    }

    public function getNom()
    {
        return $this->attributes['$nom'];
    }

    public function setNom($nom)
    {
        $this->attributes['nom'] = $nom;
    }

    public function getTel()
    {
        return $this->attributes['$tel'];
    }

    public function setTel($tel)
    {
        $this->attributes['tel'] = $tel;
    }

    public function getEmail()
    {
        return $this->attributes['$email'];
    }

    public function setEmail($email)
    {
        $this->attributes['email'] = $email;
    }

    public function getAdresse()
    {
        return $this->attributes['$adresse'];
    }

    public function setAdresse($adresse)
    {
        $this->attributes['adresse'] = $adresse;
    }

    public function getDescription()
    {
        return $this->attributes['$description'];
    }

    public function setDescription($description)
    {
        $this->attributes['description'] = $description;
    }

    public function getCreance()
    {
        return $this->attributes['$creance'];
    }

    public function setCreance($creance)
    {
        $this->attributes['creance'] = $creance;
    }

}


