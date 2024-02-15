<?php

namespace App\Dao\security;

use Illuminate\Support\Facades\DB;
use App\Models\security\RoleUser;
use App\Models\security\User;
use App\Models\security\Role;

class RoleUserDao
{

    public function save($item,) {
        return DB::transaction(function () use ($item,) {
            $item->save();
            return $item;
        });
    }

    public function update($item, $id)
    {
        $founded = RoleUser::find($id);
        $founded->fill($item->toArray());
        $founded->save();
        return $founded;
    }

    public function deleteById($id) {
        $item = RoleUser::find($id);
        $item->delete();
    }

    public function findByUserId($id) {
        return RoleUser::where('user_id', $id)->get();
    }

    public function deleteByUserId($id) {
        $items = RoleUser::where('user_id', $id)->get();
        $count = 0;
        foreach ($items as $element ){
            $element->delete();
            $count++;
        }
        return $count;
    }
    public function findByRoleId($id) {
        return RoleUser::where('role_id', $id)->get();
    }

    public function deleteByRoleId($id) {
        $items = RoleUser::where('role_id', $id)->get();
        $count = 0;
        foreach ($items as $element ){
            $element->delete();
            $count++;
        }
        return $count;
    }

    public function findAll() {
        return RoleUser::all();
    }



    public function findById($id) {
        return RoleUser::find($id);
    }
}
