package  ma.zs.stocky.ws.converter.commun;

namespace App\Converter;
use Illuminate\Http\Request;
use App\Dto\commun\ProduitDto;
use App\Models\commun\Produit;

class ProduitConverter
{

    public function toItem(Request $request): Produit
    {
        if ($request == null) {
            return null;
        } else {
            $item = new Produit();
                $item->Id = $request->input('id');
                $item->Reference = $request->input('reference');
                $item->Libelle = $request->input('libelle');
                $item->Barcode = $request->input('barcode');
                $item->Discription = $request->input('discription');
                $item->PrixAchatMoyen = $request->input('prixAchatMoyen');
                $item->Quantite = $request->input('quantite');
                $item->SeuilAlert = $request->input('seuilAlert');

        return $item;
        }
    }


    public function toDto(Produit $item): ProduitDto
    {
        if ($item == null) {
            return null;
        } else {
            $dto = new ProduitDto();
            if($item->getId() != null)
                $dto->setId($item->getId());
            if($item->getReference() != null)
                $dto->setReference($item->getReference());
            if($item->getLibelle() != null)
                $dto->setLibelle($item->getLibelle());
            if($item->getBarcode() != null)
                $dto->setBarcode($item->getBarcode());
            if($item->getDiscription() != null)
                $dto->setDiscription($item->getDiscription());
            if($item->getPrixAchatMoyen() != null)
                $dto->setPrixAchatMoyen($item->getPrixAchatMoyen());
            if($item->getQuantite() != null)
                $dto->setQuantite($item->getQuantite());
            if($item->getSeuilAlert() != null)
                $dto->setSeuilAlert($item->getSeuilAlert());

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
