<?php

namespace App\Http\Controllers\admin\stock;

use App\Http\Controllers\Controller;
use App\Services\admin\stock\AchatItemAdminService;
use Illuminate\Http\Request;

class AchatItemRestAdmin  extends Controller
{

    private AchatItemAdminService $service;
    private AchatItemAdminConverter $converter;

    public function __construct(AchatItemAdminService $service), AchatItemAdminConverter $converter)
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

    public function findByProduitId($id) {
        $items = $this->$service->findByProduitId($id);
        $dtos = $this->$converter->toDtos($items)
        return  $dtos;
    }

    public function deleteByProduitId($id) {
        return  $this->$service->deleteByProduitId($id);
    }

    public function findByAchatId($id) {
        $items = $this->$service->findByAchatId($id);
        $dtos = $this->$converter->toDtos($items)
        return  $dtos;
    }

    public function deleteByAchatId($id) {
        return  $this->$service->deleteByAchatId($id);
    }



    public function findById($id) {
        $item = $this->$service->findById($id);
        $dto = $this->$converter->toDto($item)
        return  $dto;
    }

}
