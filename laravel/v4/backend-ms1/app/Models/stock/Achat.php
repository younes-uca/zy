<?php

namespace App\Models\stock;

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

    public function getDateAchat() {
        return $this->attributes['$dateAchat'];
    }
    public function setDateAchat($dateAchat){
        $this->attributes['dateAchat'] = $dateAchat;
    }

    public function getTotal() {
        return $this->attributes['$total'];
    }
    public function setTotal($total){
        $this->attributes['total'] = $total;
    }

    public function getTotalPaye() {
        return $this->attributes['$totalPaye'];
    }
    public function setTotalPaye($totalPaye){
        $this->attributes['totalPaye'] = $totalPaye;
    }

    public function getDescription() {
        return $this->attributes['$description'];
    }
    public function setDescription($description){
        $this->attributes['description'] = $description;
    }

    public function getClient() {
        return $this->attributes['$client'];
    }
    public function setClient($client){
        $this->attributes['client'] = $client;
    }

    public function getAchatItems() {
        return $this->attributes['$achatItems'];
    }
    public function setAchatItems($achatItems){
        $this->attributes['achatItems'] = $achatItems;
    }

}


