<?php

namespace App\Services\admin\stock;

use Illuminate\Support\Facades\DB;
use App\Models\stock\Achat;
use App\Models\stock\AchatItem;
use App\Models\commun\Client;
use App\Models\commun\Produit;

use App\Dao\AchatDao;

class AchatAdminService
{
    private AchatDao $dao;
    public function __construct(AchatDao $dao)
    {
        $this->dao = $dao;
    }


    public function save($item,$achatItems, ) {
        return DB::transaction(function () use ($item,$achatItems, ) {
            $savedItem = new Achat($item);
            $savedItem->save();

            $savedAchatItems = [];
            foreach ($achatItems as $element) {
                $achatItem = new AchatItem($element);
                $savedAchatItems[] = $achatItem;
            }
            $savedItem->achatItems()->saveMany($savedAchatItems);
            return $savedItem;
    }

    public function update($item, $id)
    {
        $loaded = $this->findById($id);
        if ($loaded == null) {
            throw new \Exception("Achat not found", 404);
        }
        return $this->dao->update($item, $id);
    }

    public function deleteById($id) {
        return DB::transaction(function () use ($id) {
            $item = Achat::findOrFail($id);

            $item->achatItems()->delete();
            $item->delete();
            return true;
        });
    }

    public function findAll() {
        return Achat::all();
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
