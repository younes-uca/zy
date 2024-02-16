<?php

namespace App\Dto\stock;


class AchatDto
{

    private $reference;
    private $dateAchat;
    private $total;
    private $totalPaye;
    private $description;
    private $client,




    public function getId() {
        return $this->id;
    }
    public function setId($id){
        $this->id = $id;
    }

    public function getReference() {
        return $this->reference;
    }
    public function setReference($reference){
        $this->reference = $reference;
    }

    public function getDateAchat() {
        return $this->dateAchat;
    }
    public function setDateAchat($dateAchat){
        $this->dateAchat = $dateAchat;
    }

    public function getTotal() {
        return $this->total;
    }
    public function setTotal($total){
        $this->total = $total;
    }

    public function getTotalPaye() {
        return $this->totalPaye;
    }
    public function setTotalPaye($totalPaye){
        $this->totalPaye = $totalPaye;
    }

    public function getDescription() {
        return $this->description;
    }
    public function setDescription($description){
        $this->description = $description;
    }

    public function getClient() {
        return $this->client;
    }
    public function setClient($client){
        $this->client = $client;
    }

    public function getAchatItems() {
        return $this->achatItems;
    }
    public function setAchatItems($achatItems){
        $this->achatItems = $achatItems;
    }

}


