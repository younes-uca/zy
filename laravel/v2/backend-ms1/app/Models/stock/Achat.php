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

    public getDateAchat(){
        return $this->attributes['$dateAchat'];
    }
    public void setDateAchat($dateAchat){
        $this->attributes['dateAchat'] = $dateAchat;
    }

    public getTotal(){
        return $this->attributes['$total'];
    }
    public void setTotal($total){
        $this->attributes['total'] = $total;
    }

    public getTotalPaye(){
        return $this->attributes['$totalPaye'];
    }
    public void setTotalPaye($totalPaye){
        $this->attributes['totalPaye'] = $totalPaye;
    }

    public getDescription(){
        return $this->attributes['$description'];
    }
    public void setDescription($description){
        $this->attributes['description'] = $description;
    }

    public getClient(){
        return $this->attributes['$client'];
    }
    public void setClient($client){
        $this->attributes['client'] = $client;
    }

    public getAchatItems(){
        return $this->attributes['$achatItems'];
    }
    public void setAchatItems($achatItems){
        $this->attributes['achatItems'] = $achatItems;
    }

}


