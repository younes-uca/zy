<?php

namespace App\Dao\commun;

use Illuminate\Support\Facades\DB;
use App\Models\commun\Client;

class ClientDao
{

    public function save($item,) {
        return DB::transaction(function () use ($item,) {
            $item->save();
            return $item;
        });
    }

    public function update($item, $id)
    {
        $founded = Client::find($id);
        $founded->fill($item->toArray());
        $founded->save();
        return $founded;
    }

    public function deleteById($id) {
        $item = Client::find($id);
        $item->delete();
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
