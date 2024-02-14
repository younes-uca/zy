<?php

namespace App\Services\admin\commun;

use Illuminate\Support\Facades\DB;
use App\Models\commun\Produit;

use App\Dao\ProduitDao;

class ProduitAdminService
{
    private ProduitDao $dao;
    public function __construct(ProduitDao $dao)
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
            throw new \Exception("Produit not found", 404);
        }
        return $this->dao->update($item, $id);
    }

    public function deleteById($id) {
        $loaded = $this->findById($id);
        if ($loaded == null) {
            throw new \Exception("Produit not found", 404);
        }
        return $this->dao->deleteById($id);
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
