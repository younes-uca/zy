<?php

namespace App\Http\Controllers\admin\security;

use App\Http\Controllers\Controller;
use App\Services\admin\security\ModelPermissionUserAdminService;
use App\Converter\admin\security\ModelPermissionUserConverter;
use Illuminate\Http\Request;

class ModelPermissionUserRestAdmin  extends Controller
{


    public function __construct(private ModelPermissionUserAdminService $service, private ModelPermissionUserConverter $converter)
    {
    }

   public function save(Request $request)
    {
        $item = $this->converter->toItem($request);
        if ($item == null) {
            return response()->json(['message' => 'Invalid data'], 400);
        }
        $saved = $this->service->save($item);
		return $this->converter->toDto($saved);
    }

    public function deleteById($id) {
        return $this->service->deleteById($id);
    }

    public function findAll() {
        $items = $this->service->findAll();
		$dtos = $this->converter->toDtos($items->toArray());
        return  $dtos;
    }

    public function findByActionPermissionId($id) {
        $items = $this->service->findByActionPermissionId($id);
        $dtos = $this->converter->toDtos($items->toArray());
        return  $dtos;
    }

    public function deleteByActionPermissionId($id) {
        return  $this->service->deleteByActionPermissionId($id);
    }

    public function findByModelPermissionId($id) {
        $items = $this->service->findByModelPermissionId($id);
        $dtos = $this->converter->toDtos($items->toArray());
        return  $dtos;
    }

    public function deleteByModelPermissionId($id) {
        return  $this->service->deleteByModelPermissionId($id);
    }

    public function findByUserId($id) {
        $items = $this->service->findByUserId($id);
        $dtos = $this->converter->toDtos($items->toArray());
        return  $dtos;
    }

    public function deleteByUserId($id) {
        return  $this->service->deleteByUserId($id);
    }



    public function findById($id) {
        $item = $this->service->findById($id);
        $dto = $this->converter->toDto($item);
        return  $dto;
    }

}
