<?php

namespace App\Services\Admin\stock;

use Illuminate\Support\Facades\DB;
use App\Models\stock\Achat;
use App\Models\stock\AchatItem;
use App\Models\commun\Client;
use App\Models\commun\Produit;

use App\Services\stock\AchatItemAdminService ;

use App\Dao\stock\AchatDao;

class AchatAdminService
{
    public function __construct(private AchatDao $dao, private AchatItemAdminService $achatItemService, )
    {
    }


    public function save($item) {
        return DB::transaction(function () use ($item) {
            $this->dao->save($item);

            $this->achatItemService->saveMany($item->achatItems);
            return $item;
        });
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
            throw new \Exception("Achat not found", 404);
        }
        return $this->dao->update($item, $id);
    }

    public function deleteById($id) {
        return DB::transaction(function () use ($id) {
            $item = $this->dao->findById($id);
            if($item == null)
                return false;
            else {
                $this->achatItemService->deleteByachatId($id);
                $this->deleteById($id);
                return true;
            }
        });
    }

    public function findAll() {
        return $this->dao->findAll();
    }

    public function findByClientId($id) {
        return Achat::where('client_id', $id)->get();
    }

    public function deleteByClientId($id) {

    }


    public function findWithAssociatedLists($id) {
        return Achat::with(['achatItems',])->find($id);
    }

    public function findAllOptimized() {
        return $this->dao->findAllOptimized();
    }

    public function findById($id) {
        return $this->dao->findById($id);
    }
}
