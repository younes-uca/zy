<?php
namespace App\Converter\stock;
use Illuminate\Http\Request;
use App\Dto\stock\AchatItemDto;
use App\Models\stock\AchatItem;

class AchatItemConverter
{

    public function toItem(Request $request): ?AchatItem
    {
        if ($request == null) {
            return null;
        } else {
            $item = new AchatItem();
            if($request->has("id"))
                $item->Id = $request->input('id');
            if($request->has("prixUnitaire"))
                $item->PrixUnitaire = $request->input('prixUnitaire');
            if($request->has("prixVente"))
                $item->PrixVente = $request->input('prixVente');
            if($request->has("quantite"))
                $item->Quantite = $request->input('quantite');
            if($request->has("quantiteAvoir"))
                $item->QuantiteAvoir = $request->input('quantiteAvoir');
            if($request->has("remise"))
                $item->Remise = $request->input('remise');

        return $item;
        }
    }


    public function toDto(AchatItem $item): ?AchatItemDto
    {
        if ($item == null) {
            return null;
        } else {
            $dto = new AchatItemDto();
            if($item->getId() != null)
                $dto->setId($item->getId());
            if($item->getPrixUnitaire() != null)
                $dto->setPrixUnitaire($item->getPrixUnitaire());
            if($item->getPrixVente() != null)
                $dto->setPrixVente($item->getPrixVente());
            if($item->getQuantite() != null)
                $dto->setQuantite($item->getQuantite());
            if($item->getQuantiteAvoir() != null)
                $dto->setQuantiteAvoir($item->getQuantiteAvoir());
            if($item->getRemise() != null)
                $dto->setRemise($item->getRemise());

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
