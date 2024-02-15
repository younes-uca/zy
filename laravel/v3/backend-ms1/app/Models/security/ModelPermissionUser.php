<?php

namespace App\Models\security;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ModelPermissionUser extends Model
{
    protected $table = 'model_permission_user';
    protected $fillable = [
        'value',
        'subAttribute',
        'actionPermission_id',
        'modelPermission_id',
        'user_id',
    ];

    public function actionPermission(): BelongsTo {
        return $this->belongsTo(ActionPermission::class);
    }
    public function modelPermission(): BelongsTo {
        return $this->belongsTo(ModelPermission::class);
    }
    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }




    public function getId() {
        return $this->attributes['$id'];
    }
    public function setId($id){
        $this->attributes['id'] = $id;
    }

    public function getValue() {
        return $this->attributes['$value'];
    }
    public function setValue($value){
        $this->attributes['value'] = $value;
    }

    public function getSubAttribute() {
        return $this->attributes['$subAttribute'];
    }
    public function setSubAttribute($subAttribute){
        $this->attributes['subAttribute'] = $subAttribute;
    }

    public function getActionPermission() {
        return $this->attributes['$actionPermission'];
    }
    public function setActionPermission($actionPermission){
        $this->attributes['actionPermission'] = $actionPermission;
    }

    public function getModelPermission() {
        return $this->attributes['$modelPermission'];
    }
    public function setModelPermission($modelPermission){
        $this->attributes['modelPermission'] = $modelPermission;
    }

    public function getUser() {
        return $this->attributes['$user'];
    }
    public function setUser($user){
        $this->attributes['user'] = $user;
    }

}


