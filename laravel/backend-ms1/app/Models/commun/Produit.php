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



}


