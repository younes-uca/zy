<?php
namespace App\Converter\security;
use Illuminate\Http\Request;
use App\Dto\security\UserDto;
use App\Models\security\User;

class UserConverter
{

    public function toItem(Request $request): ?User
    {
        if ($request == null) {
            return null;
        } else {
            $item = new User();
            if($request->has("id"))
                $item->Id = $request->input('id');
            if($request->has("credentialsNonExpired"))
                $item->CredentialsNonExpired = $request->input('credentialsNonExpired');
            if($request->has("enabled"))
                $item->Enabled = $request->input('enabled');
            if($request->has("email"))
                $item->Email = $request->input('email');
            if($request->has("accountNonExpired"))
                $item->AccountNonExpired = $request->input('accountNonExpired');
            if($request->has("accountNonLocked"))
                $item->AccountNonLocked = $request->input('accountNonLocked');
            if($request->has("username"))
                $item->Username = $request->input('username');
            if($request->has("password"))
                $item->Password = $request->input('password');
            if($request->has("passwordChanged"))
                $item->PasswordChanged = $request->input('passwordChanged');
            if($request->has("lastName"))
                $item->LastName = $request->input('lastName');
            if($request->has("firstName"))
                $item->FirstName = $request->input('firstName');
            if($request->has("phone"))
                $item->Phone = $request->input('phone');

        return $item;
        }
    }


    public function toDto(User $item): ?UserDto
    {
        if ($item == null) {
            return null;
        } else {
            $dto = new UserDto();
            if($item->getId() != null)
                $dto->setId($item->getId());
            if($item->getCredentialsNonExpired() != null)
                $dto->setCredentialsNonExpired($item->getCredentialsNonExpired());
            if($item->getEnabled() != null)
                $dto->setEnabled($item->getEnabled());
            if($item->getEmail() != null)
                $dto->setEmail($item->getEmail());
            if($item->getAccountNonExpired() != null)
                $dto->setAccountNonExpired($item->getAccountNonExpired());
            if($item->getAccountNonLocked() != null)
                $dto->setAccountNonLocked($item->getAccountNonLocked());
            if($item->getUsername() != null)
                $dto->setUsername($item->getUsername());
            if($item->getPassword() != null)
                $dto->setPassword($item->getPassword());
            if($item->getPasswordChanged() != null)
                $dto->setPasswordChanged($item->getPasswordChanged());
            if($item->getLastName() != null)
                $dto->setLastName($item->getLastName());
            if($item->getFirstName() != null)
                $dto->setFirstName($item->getFirstName());
            if($item->getPhone() != null)
                $dto->setPhone($item->getPhone());

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
