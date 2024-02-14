<?php

namespace App\Http\Controllers\admin\commun;

use App\Http\Controllers\Controller;
use App\Services\admin\commun\ProduitAdminService;
use Illuminate\Http\Request;

class ProduitRestAdmin  extends Controller
{

    private ProduitAdminService $service;
    private ProduitAdminConverter $converter;

    public function __construct(ProduitAdminService $service), ProduitAdminConverter $converter)
    {
        $this->$service = $service;
        $this->$converter = $converter;
    }

   public function save(Request $request)
    {
        $item = converter->toItem($request);
        if ($item == null) {
            return response()->json(['message' => 'Invalid data'], 400);
        }
        $saved = $this->$service->save($item);
		return $converter->toDto($saved);
    }

    public function deleteById($id) {
        return $this->$service->deleteById($id);
    }

    public function findAll() {
        $items = $this->$service->findAll();
		$dtos = $this->$converter->toDtos($items)
        return  $dtos;
    }


    public function findAllOptimized() {
        $items = $this->$service->findAllOptimized();
        $dtos = $this->$converter->toDtos($items)
        return  $dtos;
    }

    public function findById($id) {
        $item = $this->$service->findById($id);
        $dto = $this->$converter->toDto($item)
        return  $dto;
    }

}
