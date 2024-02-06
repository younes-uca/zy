<?php

namespace App\Http\Controllers\admin\commun;

use App\Http\Controllers\Controller;
use App\Services\admin\commun\ProduitAdminService;
use Illuminate\Http\Request;

class ProduitRestAdmin  extends Controller
{

    private ProduitAdminService $service;

    public function __construct(ProduitAdminService $service)
    {
        $this->service = $service;
    }

    public function save(Request $request)
    {
        $validated = $request->validate([

            'reference' => 'required|string',
            'libelle' => 'required|string',
            'barcode' => 'required|string',
            'discription' => 'required|string',
            'prixAchatMoyen' => 'required|numeric',
            'quantite' => 'required|numeric',
            'seuilAlert' => 'required|numeric',

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



    public function findAllOptimized() {
        return $this->service->findAllOptimized();
    }

    public function findById($id) {
        return $this->service->findById($id);
    }
}
