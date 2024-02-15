<?php

namespace App\Dao\security;

use Illuminate\Support\Facades\DB;
use App\Models\security\ActionPermission;

class ActionPermissionDao
{

    public function save($item,) {
        return DB::transaction(function () use ($item,) {
            $item->save();
            return $item;
        });
    }

    public function update($item, $id)
    {
        $founded = ActionPermission::find($id);
        $founded->fill($item->toArray());
        $founded->save();
        return $founded;
    }

    public function deleteById($id) {
        $item = ActionPermission::find($id);
        $item->delete();
    }


    public function findAll() {
        return ActionPermission::all();
    }



    public function findById($id) {
        return ActionPermission::find($id);
    }
}
