<?php

namespace App\Services\Admin\security;

use Illuminate\Support\Facades\DB;
use App\Models\security\User;
use App\Models\security\Role;
use App\Models\security\ModelPermissionUser;
use App\Models\security\ModelPermission;
use App\Models\security\RoleUser;
use App\Models\security\ActionPermission;

use App\Services\security\RoleUserAdminService ;
use App\Services\security\ModelPermissionUserAdminService ;

use App\Dao\security\UserDao;

class UserAdminService
{
    public function __construct(private UserDao $dao, private RoleUserAdminService $roleUserService, private ModelPermissionUserAdminService $modelPermissionUserService, )
    {
    }


    public function save($item) {
        return DB::transaction(function () use ($item) {
            $this->dao->save($item);

            $this->roleUserService->saveMany($item->roleUsers);
            $this->modelPermissionUserService->saveMany($item->modelPermissionUsers);
            return $item;
        });
    }

    public function saveMany($items)
    {
        if($items != null) {
            return collect($items)->each(function ($item) {
                $this->save($item);
            });
        }
    }

    public function update($item, $id)
    {
        $loaded = $this->findById($id);
        if ($loaded == null) {
            throw new \Exception("User not found", 404);
        }
        return $this->dao->update($item, $id);
    }

    public function deleteById($id) {
        return DB::transaction(function () use ($id) {
            $item = $this->dao->findById($id);
            if($item == null)
                return false;
            else {
                $this->roleUserService->deleteByuserId($id);
                $this->modelPermissionUserService->deleteByuserId($id);
                $this->deleteById($id);
                return true;
            }
        });
    }

    public function findAll() {
        return $this->dao->findAll();
    }



    public function findWithAssociatedLists($id) {
        return User::with(['roleUsers','modelPermissionUsers',])->find($id);
    }


    public function findById($id) {
        return $this->dao->findById($id);
    }
}
