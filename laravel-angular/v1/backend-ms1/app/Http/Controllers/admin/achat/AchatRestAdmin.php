<?php

namespace App\Http\Controllers\admin\achat;

use App\Http\Controllers\Controller;
use App\Services\admin\achat\AchatAdminService;
use Illuminate\Http\Request;

class AchatRestAdmin  extends Controller
{

    private AchatAdminService $service;

    public function __construct(AchatAdminService $service)
    {
        $this->service = $service;
    }

    public function save(Request $request)
    {
        $validated = $request->validate([

            'reference' => 'required|string',
            'dateAchat' => 'required|date',
            'total' => 'required|numeric',
            'totalPaye' => 'required|numeric',
            'description' => 'required|string',

            'client_id' => 'required|exists:client,id',
        ]);

        $validatedAchatItems = $request->validate([
            'achatItems.*.product_id' => 'required|exists:produit,id',
            'achatItems.*.prixUnitaire' => 'required|numeric',
            'achatItems.*.prixVente' => 'required|numeric',
            'achatItems.*.quantite' => 'required|numeric',
            'achatItems.*.quantiteAvoir' => 'required|numeric',
            'achatItems.*.remise' => 'required|numeric',
        ]);

        return $this->service->save($validated,        $validatedAchatItems['achatItems'], );

    }

    public function deleteById($id) {
        return $this->service->deleteById($id);
    }

    public function findAll() {
        $items = $this->service->findAll();
        return  $items;
    }

    public function findByClientId($id) {
        return $this->service->findByClientId($id);
    }

    public function deleteByClientId($id) {
        return  $this->service->deleteByClientId($id);
    }


    public function findWithAssociatedLists($id) {
        return  $this->service->findWithAssociatedLists($id);
    }

    public function findAllOptimized() {
        return $this->service->findAllOptimized();
    }

    public function findById($id) {
        return $this->service->findById($id);
    }
}
