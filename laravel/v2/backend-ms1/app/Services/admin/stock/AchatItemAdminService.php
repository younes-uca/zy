<?php

namespace App\Services\admin\stock;

use Illuminate\Support\Facades\DB;
use App\Models\stock\AchatItem;
use App\Models\stock\Achat;
use App\Models\commun\Produit;

use App\Dao\AchatItemDao;

class AchatItemAdminService
{
    private AchatItemDao $dao;
    public function __construct(AchatItemDao $dao)
    {
        $this->dao = $dao;
    }


    public function save($item,) {
        if ($item == null) {
            throw new \Exception("Invalid data", 400);
        }
        return $this->dao->save($item);
    }

    public function update($item, $id)
    {
        $loaded = $this->findById($id);
        if ($loaded == null) {
            throw new \Exception("AchatItem not found", 404);
        }
        return $this->dao->update($item, $id);
    }

    public function deleteById($id) {
        $loaded = $this->findById($id);
        if ($loaded == null) {
            throw new \Exception("AchatItem not found", 404);
        }
        return $this->dao->deleteById($id);
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
