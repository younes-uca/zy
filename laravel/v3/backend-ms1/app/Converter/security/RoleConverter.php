<?php
namespace App\Converter\security;
use Illuminate\Http\Request;
use App\Dto\security\RoleDto;
use App\Models\security\Role;

class RoleConverter
{

    public function toItem(Request $request): ?Role
    {
        if ($request == null) {
            return null;
        } else {
            $item = new Role();
            if($request->has("id"))
                $item->Id = $request->input('id');
            if($request->has("authority"))
                $item->Authority = $request->input('authority');

        return $item;
        }
    }


    public function toDto(Role $item): ?RoleDto
    {
        if ($item == null) {
            return null;
        } else {
            $dto = new RoleDto();
            if($item->getId() != null)
                $dto->setId($item->getId());
            if($item->getAuthority() != null)
                $dto->setAuthority($item->getAuthority());

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
