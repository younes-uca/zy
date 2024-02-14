<?php

namespace App\Services\Admin\security;

use Illuminate\Support\Facades\DB;
use App\Models\security\ModelPermissionUser;
use App\Models\security\User;
use App\Models\security\ModelPermission;
use App\Models\security\ActionPermission;


use App\Dao\security\ModelPermissionUserDao;

class ModelPermissionUserAdminService
{
    public function __construct(private ModelPermissionUserDao $dao, )
    {
    }


    public function save($item) {
        if ($item == null) {
            throw new \Exception("Invalid data", 400);
        }
        return $this->dao->save($item);
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
            throw new \Exception("ModelPermissionUser not found", 404);
        }
        return $this->dao->update($item, $id);
    }

    public function deleteById($id) {
        $loaded = $this->findById($id);
        if ($loaded == null) {
            throw new \Exception("ModelPermissionUser not found", 404);
        }
        return $this->dao->deleteById($id);
    }

    public function findAll() {
        return $this->dao->findAll();
    }

    public function findByActionPermissionId($id) {
        return ModelPermissionUser::where('actionPermission_id', $id)->get();
    }

    public function deleteByActionPermissionId($id) {

    }
    public function findByModelPermissionId($id) {
        return ModelPermissionUser::where('modelPermission_id', $id)->get();
    }

    public function deleteByModelPermissionId($id) {

    }
    public function findByUserId($id) {
        return ModelPermissionUser::where('user_id', $id)->get();
    }

    public function deleteByUserId($id) {

    }




    public function findById($id) {
        return $this->dao->findById($id);
    }
}
