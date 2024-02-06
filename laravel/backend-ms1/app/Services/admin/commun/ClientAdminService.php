<?php

namespace App\Services\admin\commun;

use Illuminate\Support\Facades\DB;
use App\Models\commun\Client;

class ClientAdminService
{

    public function save($item,) {
        return DB::transaction(function () use ($item,) {
            $savedItem = new Client($item);
            $savedItem->save();


            return $savedItem;
        });
    }

    public function deleteById($id) {
        return DB::transaction(function () use ($id) {
            $item = Client::findOrFail($id);


            $item->delete();
            return true;
        });
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
