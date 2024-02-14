<?php

namespace App\Services\admin\commun;

use Illuminate\Support\Facades\DB;
use App\Models\commun\Client;

use App\Dao\ClientDao;

class ClientAdminService
{
    private ClientDao $dao;
    public function __construct(ClientDao $dao)
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
        return Client::all();
    }




    public function findAllOptimized() {
        return Client::select('id', 'nom')->get();
    }

    public function findById($id) {
        return Client::find($id);
    }
}
