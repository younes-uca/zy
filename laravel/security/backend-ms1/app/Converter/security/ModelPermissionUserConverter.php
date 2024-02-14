<?php
namespace App\Converter\security;
use Illuminate\Http\Request;
use App\Dto\security\ModelPermissionUserDto;
use App\Models\security\ModelPermissionUser;

class ModelPermissionUserConverter
{

    public function toItem(Request $request): ?ModelPermissionUser
    {
        if ($request == null) {
            return null;
        } else {
            $item = new ModelPermissionUser();
            if($request->has("id"))
                $item->Id = $request->input('id');
            if($request->has("value"))
                $item->Value = $request->input('value');
            if($request->has("subAttribute"))
                $item->SubAttribute = $request->input('subAttribute');

        return $item;
        }
    }


    public function toDto(ModelPermissionUser $item): ?ModelPermissionUserDto
    {
        if ($item == null) {
            return null;
        } else {
            $dto = new ModelPermissionUserDto();
            if($item->getId() != null)
                $dto->setId($item->getId());
            if($item->getValue() != null)
                $dto->setValue($item->getValue());
            if($item->getSubAttribute() != null)
                $dto->setSubAttribute($item->getSubAttribute());

        return $dto;
        }
    }

	public function toItems(array $dtos): array {
		$items = [];
		if ($dtos != null) {
			foreach ($dtos as $dto) {
				$item = $this->toItem($dto);
                $items[] = $item;
			}
        }
		return $items;
	}

	public function toDtos(array $items): array {
		$dtos = [];
		if ($items != null) {
			foreach ($items as $item) {
				$dto = $this->toDto($item);
                $dtos[] = $dto;
			}
        }
		return $dtos;
	}

}
