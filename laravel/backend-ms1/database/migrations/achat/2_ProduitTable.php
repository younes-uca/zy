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
        Schema::create('produit', function (Blueprint $table) {
            $table->id();
            $table->string('reference')->required();
            $table->string('libelle')->required();
            $table->string('barcode')->required();
            $table->string('discription')->required();
            $table->decimal('prixAchatMoyen', 10, 2);
            $table->decimal('quantite', 10, 2);
            $table->decimal('seuilAlert', 10, 2);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produit');
    }
};
