<?php

namespace App\Dao\security;

use Illuminate\Support\Facades\DB;
use App\Models\security\ModelPermission;

class ModelPermissionDao
{

    public function save($item,) {
        return DB::transaction(function () use ($item,) {
            $item->save();
            return $item;
        });
    }

    public function update($item, $id)
    {
        $founded = ModelPermission::find($id);
        $founded->fill($item->toArray());
        $founded->save();
        return $founded;
    }

    public function deleteById($id) {
        $item = ModelPermission::find($id);
        $item->delete();
    }


    public function findAll() {
        return ModelPermission::all();
    }



    public function findById($id) {
        return ModelPermission::find($id);
    }
}
