<?php

namespace App\Services\admin\achat;

use Illuminate\Support\Facades\DB;
use App\Models\achat\AchatItem;
use App\Models\achat\Achat;
use App\Models\commun\Produit;

class AchatItemAdminService
{

    public function save($item,) {
        return DB::transaction(function () use ($item,) {
            $savedItem = new AchatItem($item);
            $savedItem->save();


            return $savedItem;
        });
    }

    public function deleteById($id) {
        return DB::transaction(function () use ($id) {
            $item = AchatItem::findOrFail($id);


            $item->delete();
            return true;
        });
    }

    public function findAll() {
        return AchatItem::all();
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




    public function findById($id) {
        return AchatItem::find($id);
    }
}
