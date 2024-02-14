<?php

namespace App\Http\Controllers\admin\security;

use App\Http\Controllers\Controller;
use App\Services\admin\security\UserAdminService;
use App\Converter\admin\security\UserConverter;
use Illuminate\Http\Request;

class UserRestAdmin  extends Controller
{


    public function __construct(private UserAdminService $service, private UserConverter $converter)
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



    public function findById($id) {
        $item = $this->service->findWithAssociatedLists($id);
        $dto = $this->converter->toDto($item);
        return  $dto;
    }

}
