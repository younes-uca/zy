<?php

namespace App\Services\Admin\commun;

use Illuminate\Support\Facades\DB;
use App\Models\commun\Client;


use App\Dao\commun\ClientDao;

class ClientAdminService
{
    public function __construct(private ClientDao $dao, )
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
            throw new \Exception("Client not found", 404);
        }
        return $this->dao->update($item, $id);
    }

    public function deleteById($id) {
        $loaded = $this->findById($id);
        if ($loaded == null) {
            throw new \Exception("Client not found", 404);
        }
        return $this->dao->deleteById($id);
    }

    public function findAll() {
        return $this->dao->findAll();
    }




    public function findAllOptimized() {
        return $this->dao->findAllOptimized();
    }

    public function findById($id) {
        return $this->dao->findById($id);
    }
}
