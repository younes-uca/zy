<?php

namespace App\Dao\stock;

use Illuminate\Support\Facades\DB;
use App\Models\stock\AchatItem;
use App\Models\stock\Achat;
use App\Models\commun\Produit;

class AchatItemDao
{

    public function save($item,) {
        return DB::transaction(function () use ($item,) {
            $item->save();
            return $item;
        });
    }

    public function update($item, $id)
    {
        $founded = AchatItem::find($id);
        $founded->fill($item->toArray());
        $founded->save();
        return $founded;
    }

    public function deleteById($id) {
        $item = AchatItem::find($id);
        $item->delete();
    }

    public function findByProduitId($id) {
        return AchatItem::where('produit_id', $id)->get();
    }

    public function deleteByProduitId($id) {
        $items = AchatItem::where('produit_id', $id)->get();
        $count = 0;
        foreach ($items as $element ){
            $element->delete();
            $count++;
        }
        return $count;
    }
    public function findByAchatId($id) {
        return AchatItem::where('achat_id', $id)->get();
    }

    public function deleteByAchatId($id) {
        $items = AchatItem::where('achat_id', $id)->get();
        $count = 0;
        foreach ($items as $element ){
            $element->delete();
            $count++;
        }
        return $count;
    }

    public function findAll() {
        return AchatItem::all();
    }



    public function findById($id) {
        return AchatItem::find($id);
    }
}
