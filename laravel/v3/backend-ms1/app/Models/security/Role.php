<?php

namespace App\Models\security;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Role extends Model
{
    protected $table = 'role';
    protected $fillable = [
        'authority',
    ];





    public function getId() {
        return $this->attributes['$id'];
    }
    public function setId($id){
        $this->attributes['id'] = $id;
    }

    public function getAuthority() {
        return $this->attributes['$authority'];
    }
    public function setAuthority($authority){
        $this->attributes['authority'] = $authority;
    }

}


