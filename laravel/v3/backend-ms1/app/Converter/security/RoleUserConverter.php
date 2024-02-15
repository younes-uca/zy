<?php
namespace App\Converter\security;
use Illuminate\Http\Request;
use App\Dto\security\RoleUserDto;
use App\Models\security\RoleUser;

class RoleUserConverter
{

    public function toItem(Request $request): ?RoleUser
    {
        if ($request == null) {
            return null;
        } else {
            $item = new RoleUser();
            if($request->has("id"))
                $item->Id = $request->input('id');

        return $item;
        }
    }


    public function toDto(RoleUser $item): ?RoleUserDto
    {
        if ($item == null) {
            return null;
        } else {
            $dto = new RoleUserDto();
            if($item->getId() != null)
                $dto->setId($item->getId());

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
