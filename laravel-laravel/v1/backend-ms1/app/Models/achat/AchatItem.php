<?php

namespace App\Models\achat;

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


}


