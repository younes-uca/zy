<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('model_permission_user', function (Blueprint $table) {
            $table->id();
             $table->boolean('value')->default(false);
            $table->string('subAttribute')->required();

            $table->unsignedBigInteger('actionPermission_id');
            $table->foreign('actionPermission_id')->references('id')->on('action_permission');
            $table->unsignedBigInteger('modelPermission_id');
            $table->foreign('modelPermission_id')->references('id')->on('model_permission');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('user');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('model_permission_user');
    }
};
