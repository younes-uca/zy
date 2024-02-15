<?php

namespace App\Dao\security;

use Illuminate\Support\Facades\DB;
use App\Models\security\ModelPermissionUser;
use App\Models\security\User;
use App\Models\security\ModelPermission;
use App\Models\security\ActionPermission;

class ModelPermissionUserDao
{

    public function save($item,) {
        return DB::transaction(function () use ($item,) {
            $item->save();
            return $item;
        });
    }

    public function update($item, $id)
    {
        $founded = ModelPermissionUser::find($id);
        $founded->fill($item->toArray());
        $founded->save();
        return $founded;
    }

    public function deleteById($id) {
        $item = ModelPermissionUser::find($id);
        $item->delete();
    }

    public function findByActionPermissionId($id) {
        return ModelPermissionUser::where('actionPermission_id', $id)->get();
    }

    public function deleteByActionPermissionId($id) {
        $items = ModelPermissionUser::where('actionPermission_id', $id)->get();
        $count = 0;
        foreach ($items as $element ){
            $element->delete();
            $count++;
        }
        return $count;
    }
    public function findByModelPermissionId($id) {
        return ModelPermissionUser::where('modelPermission_id', $id)->get();
    }

    public function deleteByModelPermissionId($id) {
        $items = ModelPermissionUser::where('modelPermission_id', $id)->get();
        $count = 0;
        foreach ($items as $element ){
            $element->delete();
            $count++;
        }
        return $count;
    }
    public function findByUserId($id) {
        return ModelPermissionUser::where('user_id', $id)->get();
    }

    public function deleteByUserId($id) {
        $items = ModelPermissionUser::where('user_id', $id)->get();
        $count = 0;
        foreach ($items as $element ){
            $element->delete();
            $count++;
        }
        return $count;
    }

    public function findAll() {
        return ModelPermissionUser::all();
    }



    public function findById($id) {
        return ModelPermissionUser::find($id);
    }
}
