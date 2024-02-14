<?php

namespace App\Http\Controllers\admin\security;

use App\Http\Controllers\Controller;
use App\Services\admin\security\RoleUserAdminService;
use App\Converter\admin\security\RoleUserConverter;
use Illuminate\Http\Request;

class RoleUserRestAdmin  extends Controller
{


    public function __construct(private RoleUserAdminService $service, private RoleUserConverter $converter)
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

    public function findByUserId($id) {
        $items = $this->service->findByUserId($id);
        $dtos = $this->converter->toDtos($items->toArray());
        return  $dtos;
    }

    public function deleteByUserId($id) {
        return  $this->service->deleteByUserId($id);
    }

    public function findByRoleId($id) {
        $items = $this->service->findByRoleId($id);
        $dtos = $this->converter->toDtos($items->toArray());
        return  $dtos;
    }

    public function deleteByRoleId($id) {
        return  $this->service->deleteByRoleId($id);
    }



    public function findById($id) {
        $item = $this->service->findById($id);
        $dto = $this->converter->toDto($item);
        return  $dto;
    }

}
