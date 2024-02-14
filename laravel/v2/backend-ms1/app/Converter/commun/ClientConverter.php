package  ma.zs.stocky.ws.converter.commun;

namespace App\Converter;
use Illuminate\Http\Request;
use App\Dto\commun\ClientDto;
use App\Models\commun\Client;

class ClientConverter
{

    public function toItem(Request $request): Client
    {
        if ($request == null) {
            return null;
        } else {
            $item = new Client();
                $item->Id = $request->input('id');
                $item->Cin = $request->input('cin');
                $item->Nom = $request->input('nom');
                $item->Tel = $request->input('tel');
                $item->Email = $request->input('email');
                $item->Adresse = $request->input('adresse');
                $item->Description = $request->input('description');
                $item->Creance = $request->input('creance');

        return $item;
        }
    }


    public function toDto(Client $item): ClientDto
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
