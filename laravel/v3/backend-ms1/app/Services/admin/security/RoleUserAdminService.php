<?php

namespace App\Services\Admin\security;

use Illuminate\Support\Facades\DB;
use App\Models\security\RoleUser;
use App\Models\security\User;
use App\Models\security\Role;


use App\Dao\security\RoleUserDao;

class RoleUserAdminService
{
    public function __construct(private RoleUserDao $dao, )
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
            throw new \Exception("RoleUser not found", 404);
        }
        return $this->dao->update($item, $id);
    }

    public function deleteById($id) {
        $loaded = $this->findById($id);
        if ($loaded == null) {
            throw new \Exception("RoleUser not found", 404);
        }
        return $this->dao->deleteById($id);
    }

    public function findAll() {
        return $this->dao->findAll();
    }

    public function findByUserId($id) {
        return RoleUser::where('user_id', $id)->get();
    }

    public function deleteByUserId($id) {

    }
    public function findByRoleId($id) {
        return RoleUser::where('role_id', $id)->get();
    }

    public function deleteByRoleId($id) {

    }




    public function findById($id) {
        return $this->dao->findById($id);
    }
}
