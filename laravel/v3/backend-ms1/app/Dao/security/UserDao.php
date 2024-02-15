<?php

namespace App\Dao\security;

use Illuminate\Support\Facades\DB;
use App\Models\security\User;
use App\Models\security\Role;
use App\Models\security\ModelPermissionUser;
use App\Models\security\ModelPermission;
use App\Models\security\RoleUser;
use App\Models\security\ActionPermission;

class UserDao
{

    public function save($item,$roleUsers, $modelPermissionUsers, ) {
        return DB::transaction(function () use ($item,$roleUsers, $modelPermissionUsers, ) {
            $item->save();
            return $item;
        });
    }

    public function update($item, $id)
    {
        $founded = User::find($id);
        $founded->fill($item->toArray());
        $founded->save();
        return $founded;
    }

    public function deleteById($id) {
        $item = User::find($id);
        $item->delete();
    }


    public function findAll() {
        return User::all();
    }

    public function findWithAssociatedLists($id) {
        return User::with(['roleUsers','modelPermissionUsers',])->find($id);
    }


    public function findById($id) {
        return User::find($id);
    }
}
