<?php

namespace App\Models\achat;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Achat extends Model
{
    protected $table = 'achat';
    protected $fillable = [
        'reference',
        'dateAchat',
        'total',
        'totalPaye',
        'description',
        'client_id',
    ];

    public function client(): BelongsTo {
        return $this->belongsTo(Client::class);
    }

    public function achatItems(): HasMany {
        return $this->hasMany(AchatItem::class);
    }

}


