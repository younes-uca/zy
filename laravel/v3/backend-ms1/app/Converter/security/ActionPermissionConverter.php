<?php
namespace App\Converter\security;
use Illuminate\Http\Request;
use App\Dto\security\ActionPermissionDto;
use App\Models\security\ActionPermission;

class ActionPermissionConverter
{

    public function toItem(Request $request): ?ActionPermission
    {
        if ($request == null) {
            return null;
        } else {
            $item = new ActionPermission();
            if($request->has("id"))
                $item->Id = $request->input('id');
            if($request->has("reference"))
                $item->Reference = $request->input('reference');
            if($request->has("libelle"))
                $item->Libelle = $request->input('libelle');

        return $item;
        }
    }


    public function toDto(ActionPermission $item): ?ActionPermissionDto
    {
        if ($item == null) {
            return null;
        } else {
            $dto = new ActionPermissionDto();
            if($item->getId() != null)
                $dto->setId($item->getId());
            if($item->getReference() != null)
                $dto->setReference($item->getReference());
            if($item->getLibelle() != null)
                $dto->setLibelle($item->getLibelle());

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
