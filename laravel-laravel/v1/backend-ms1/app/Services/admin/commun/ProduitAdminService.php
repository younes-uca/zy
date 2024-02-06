<?php

namespace App\Services\admin\commun;

use Illuminate\Support\Facades\DB;
use App\Models\commun\Produit;

class ProduitAdminService
{

    public function save($item,) {
        return DB::transaction(function () use ($item,) {
            $savedItem = new Produit($item);
            $savedItem->save();


            return $savedItem;
        });
    }

    public function deleteById($id) {
        return DB::transaction(function () use ($id) {
            $item = Produit::findOrFail($id);


            $item->delete();
            return true;
        });
    }

    public function findAll() {
        return Produit::all();
    }




    public function findAllOptimized() {
        return Produit::select('id', 'reference')->get();
    }

    public function findById($id) {
        return Produit::find($id);
    }
}
