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
        Schema::create('achat', function (Blueprint $table) {
            $table->id();
            $table->string('reference')->required();
            $table->dateTime('dateAchat');
            $table->decimal('total', 10, 2);
            $table->decimal('totalPaye', 10, 2);
            $table->string('description')->required();

            $table->unsignedBigInteger('client_id');
            $table->foreign('client_id')->references('id')->on('client');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('achat');
    }
};
