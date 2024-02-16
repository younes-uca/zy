<?php
namespace App\Converter\stock;
use Illuminate\Http\Request;
use App\Dto\stock\AchatDto;
use App\Models\stock\Achat;

class AchatConverter
{

    public function toItem(Request $request): ?Achat
    {
        if ($request == null) {
            return null;
        } else {
            $item = new Achat();
            if($request->has("id"))
                $item->Id = $request->input('id');
            if($request->has("reference"))
                $item->Reference = $request->input('reference');
            if($request->has("dateAchat"))
                $item->DateAchat = $request->input('dateAchat');
            if($request->has("total"))
                $item->Total = $request->input('total');
            if($request->has("totalPaye"))
                $item->TotalPaye = $request->input('totalPaye');
            if($request->has("description"))
                $item->Description = $request->input('description');

        return $item;
        }
    }


    public function toDto(Achat $item): ?AchatDto
    {
        if ($item == null) {
            return null;
        } else {
            $dto = new AchatDto();
            if($item->getId() != null)
                $dto->setId($item->getId());
            if($item->getReference() != null)
                $dto->setReference($item->getReference());
            if($item->getDateAchat() != null)
                $dto->setDateAchat($item->getDateAchat());
            if($item->getTotal() != null)
                $dto->setTotal($item->getTotal());
            if($item->getTotalPaye() != null)
                $dto->setTotalPaye($item->getTotalPaye());
            if($item->getDescription() != null)
                $dto->setDescription($item->getDescription());

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
