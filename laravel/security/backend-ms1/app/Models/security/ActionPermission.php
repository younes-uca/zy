<?php

namespace App\Models\security;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ActionPermission extends Model
{
    protected $table = 'action_permission';
    protected $fillable = [
        'reference',
        'libelle',
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

}


