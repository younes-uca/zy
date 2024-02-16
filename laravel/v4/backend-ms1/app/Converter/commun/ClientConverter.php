<?php
namespace App\Converter\commun;
use Illuminate\Http\Request;
use App\Dto\commun\ClientDto;
use App\Models\commun\Client;

class ClientConverter
{

    public function toItem(Request $request): ?Client
    {
        if ($request == null) {
            return null;
        } else {
            $item = new Client();
            if($request->has("id"))
                $item->Id = $request->input('id');
            if($request->has("cin"))
                $item->Cin = $request->input('cin');
            if($request->has("nom"))
                $item->Nom = $request->input('nom');
            if($request->has("tel"))
                $item->Tel = $request->input('tel');
            if($request->has("email"))
                $item->Email = $request->input('email');
            if($request->has("adresse"))
                $item->Adresse = $request->input('adresse');
            if($request->has("description"))
                $item->Description = $request->input('description');
            if($request->has("creance"))
                $item->Creance = $request->input('creance');

        return $item;
        }
    }


    public function toDto(Client $item): ?ClientDto
    {
        if ($item == null) {
            return null;
        } else {
            $dto = new ClientDto();
            if($item->getId() != null)
                $dto->setId($item->getId());
            if($item->getCin() != null)
                $dto->setCin($item->getCin());
            if($item->getNom() != null)
                $dto->setNom($item->getNom());
            if($item->getTel() != null)
                $dto->setTel($item->getTel());
            if($item->getEmail() != null)
                $dto->setEmail($item->getEmail());
            if($item->getAdresse() != null)
                $dto->setAdresse($item->getAdresse());
            if($item->getDescription() != null)
                $dto->setDescription($item->getDescription());
            if($item->getCreance() != null)
                $dto->setCreance($item->getCreance());

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
