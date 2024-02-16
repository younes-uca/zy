<?php
namespace App\Converter\commun;
use Illuminate\Http\Request;
use App\Dto\commun\ProduitDto;
use App\Models\commun\Produit;

class ProduitConverter
{

    public function toItem(Request $request): ?Produit
    {
        if ($request == null) {
            return null;
        } else {
            $item = new Produit();
            if($request->has("id"))
                $item->Id = $request->input('id');
            if($request->has("reference"))
                $item->Reference = $request->input('reference');
            if($request->has("libelle"))
                $item->Libelle = $request->input('libelle');
            if($request->has("barcode"))
                $item->Barcode = $request->input('barcode');
            if($request->has("discription"))
                $item->Discription = $request->input('discription');
            if($request->has("prixAchatMoyen"))
                $item->PrixAchatMoyen = $request->input('prixAchatMoyen');
            if($request->has("quantite"))
                $item->Quantite = $request->input('quantite');
            if($request->has("seuilAlert"))
                $item->SeuilAlert = $request->input('seuilAlert');

        return $item;
        }
    }


    public function toDto(Produit $item): ?ProduitDto
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
