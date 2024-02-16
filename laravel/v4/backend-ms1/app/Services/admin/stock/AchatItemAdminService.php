<?php

namespace App\Services\Admin\stock;

use Illuminate\Support\Facades\DB;
use App\Models\stock\AchatItem;
use App\Models\stock\Achat;
use App\Models\commun\Produit;


use App\Dao\stock\AchatItemDao;

class AchatItemAdminService
{
    public function __construct(private AchatItemDao $dao, )
    {
    }


    public function save($item) {
        if ($item == null) {
            throw new \Exception("Invalid data", 400);
        }
        return $this->dao->save($item);
    }

    public function saveMany($items)
    {
        if($items != null) {
            return collect($items)->each(function ($item) {
                $this->save($item);
            });
        }
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
        return $this->dao->findAll();
    }

    public function findByProduitId($id) {
        return AchatItem::where('produit_id', $id)->get();
    }

    public function deleteByProduitId($id) {

    }
    public function findByAchatId($id) {
        return AchatItem::where('achat_id', $id)->get();
    }

    public function deleteByAchatId($id) {

    }




    public function findById($id) {
        return $this->dao->findById($id);
    }
}
