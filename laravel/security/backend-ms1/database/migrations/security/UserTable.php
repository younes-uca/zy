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
        Schema::create('user', function (Blueprint $table) {
            $table->id();
             $table->boolean('credentialsNonExpired')->default(false);
             $table->boolean('enabled')->default(false);
            $table->string('email')->required();
             $table->boolean('accountNonExpired')->default(false);
             $table->boolean('accountNonLocked')->default(false);
            $table->string('username')->required();
            $table->string('password')->required();
             $table->boolean('passwordChanged')->default(false);
            $table->string('lastName')->required();
            $table->string('firstName')->required();
            $table->string('phone')->required();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user');
    }
};
