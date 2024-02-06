<?php

namespace App\Http\Controllers\admin\achat;

use App\Http\Controllers\Controller;
use App\Services\admin\achat\AchatItemAdminService;
use Illuminate\Http\Request;

class AchatItemRestAdmin  extends Controller
{

    private AchatItemAdminService $service;

    public function __construct(AchatItemAdminService $service)
    {
        $this->service = $service;
    }

    public function save(Request $request)
    {
        $validated = $request->validate([

            'prixUnitaire' => 'required|numeric',
            'prixVente' => 'required|numeric',
            'quantite' => 'required|numeric',
            'quantiteAvoir' => 'required|numeric',
            'remise' => 'required|numeric',

            'produit_id' => 'required|exists:produit,id',
            'achat_id' => 'required|exists:achat,id',
        ]);


        return $this->service->save($validated,        );

    }

    public function deleteById($id) {
        return $this->service->deleteById($id);
    }

    public function findAll() {
        $items = $this->service->findAll();
        return  $items;
    }

    public function findByProduitId($id) {
        return $this->service->findByProduitId($id);
    }

    public function deleteByProduitId($id) {
        return  $this->service->deleteByProduitId($id);
    }

    public function findByAchatId($id) {
        return $this->service->findByAchatId($id);
    }

    public function deleteByAchatId($id) {
        return  $this->service->deleteByAchatId($id);
    }




    public function findById($id) {
        return $this->service->findById($id);
    }
}
