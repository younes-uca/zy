<?php

namespace App\Services\admin\commun;

use Illuminate\Support\Facades\DB;
use App\Models\commun\Produit;

class ProduitAdminDao
{

    public function save($item,) {
        return DB::transaction(function () use ($item,) {
            $savedItem = new Produit($item);
            $savedItem->save();
            return $savedItem;
        });
    }

    public function update($item, $id)
    {
        $founded = Produit::find($id);
        $founded->fill($item->toArray());
        $founded->save();
        return $founded;
    }

    public function deleteById($id) {
        $item = Produit::find($id);
        $item->delete();
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
