<?php

namespace App\Dao\security;

use Illuminate\Support\Facades\DB;
use App\Models\security\Role;

class RoleDao
{

    public function save($item,) {
        return DB::transaction(function () use ($item,) {
            $item->save();
            return $item;
        });
    }

    public function update($item, $id)
    {
        $founded = Role::find($id);
        $founded->fill($item->toArray());
        $founded->save();
        return $founded;
    }

    public function deleteById($id) {
        $item = Role::find($id);
        $item->delete();
    }


    public function findAll() {
        return Role::all();
    }


    public function findAllOptimized() {
        return Role::select('id', 'authority')->get();
    }

    public function findById($id) {
        return Role::find($id);
    }
}
