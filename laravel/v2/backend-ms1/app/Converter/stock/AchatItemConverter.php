package  ma.zs.stocky.ws.converter.stock;

namespace App\Converter;
use Illuminate\Http\Request;
use App\Dto\stock\AchatItemDto;
use App\Models\stock\AchatItem;

class AchatItemConverter
{

    public function toItem(Request $request): AchatItem
    {
        if ($request == null) {
            return null;
        } else {
            $item = new AchatItem();
                $item->Id = $request->input('id');
                $item->PrixUnitaire = $request->input('prixUnitaire');
                $item->PrixVente = $request->input('prixVente');
                $item->Quantite = $request->input('quantite');
                $item->QuantiteAvoir = $request->input('quantiteAvoir');
                $item->Remise = $request->input('remise');

        return $item;
        }
    }


    public function toDto(AchatItem $item): AchatItemDto
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

		return $items;
	}

	public function toDtos(array $items): array {
		$dtos = [];
		if ($items != null) {
			foreach ($items as $item) {
				$dto = $this->toDto($item);
                $dtos[] = $dto;
			}

		return $dtos;
	}

}
