<?php

namespace App\Http\Controllers\admin\stock;

use App\Http\Controllers\Controller;
use App\Services\admin\stock\AchatAdminService;
use Illuminate\Http\Request;

class AchatRestAdmin  extends Controller
{

    private AchatAdminService $service;
    private AchatAdminConverter $converter;

    public function __construct(AchatAdminService $service), AchatAdminConverter $converter)
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

    public function findByClientId($id) {
        $items = $this->$service->findByClientId($id);
        $dtos = $this->$converter->toDtos($items)
        return  $dtos;
    }

    public function deleteByClientId($id) {
        return  $this->$service->deleteByClientId($id);
    }


    public function findAllOptimized() {
        $items = $this->$service->findAllOptimized();
        $dtos = $this->$converter->toDtos($items)
        return  $dtos;
    }

    public function findById($id) {
        $item = $this->$service->findWithAssociatedLists($id);
        $dto = $this->$converter->toDto($item)
        return  $dto;
    }

}
