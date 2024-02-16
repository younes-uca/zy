<?php

namespace App\Dao\stock;

use Illuminate\Support\Facades\DB;
use App\Models\stock\Achat;
use App\Models\stock\AchatItem;
use App\Models\commun\Client;
use App\Models\commun\Produit;

class AchatDao
{

    public function save($item,$achatItems, ) {
        return DB::transaction(function () use ($item,$achatItems, ) {
            $item->save();
            return $item;
        });
    }

    public function update($item, $id)
    {
        $founded = Achat::find($id);
        $founded->fill($item->toArray());
        $founded->save();
        return $founded;
    }

    public function deleteById($id) {
        $item = Achat::find($id);
        $item->delete();
    }

    public function findByClientId($id) {
        return Achat::where('client_id', $id)->get();
    }

    public function deleteByClientId($id) {
        $items = Achat::where('client_id', $id)->get();
        $count = 0;
        foreach ($items as $element ){
            $element->achatItems->each(function ($elementItem) {
                $elementItem->delete();
            });
            $element->delete();
            $count++;
        }
        return $count;
    }

    public function findAll() {
        return Achat::all();
    }

    public function findWithAssociatedLists($id) {
        return Achat::with(['achatItems',])->find($id);
    }

    public function findAllOptimized() {
        return Achat::select('id', 'reference')->get();
    }

    public function findById($id) {
        return Achat::find($id);
    }
}
