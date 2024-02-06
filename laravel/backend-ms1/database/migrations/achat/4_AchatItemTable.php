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
        Schema::create('achat_item', function (Blueprint $table) {
            $table->id();
            $table->decimal('prixUnitaire', 10, 2);
            $table->decimal('prixVente', 10, 2);
            $table->decimal('quantite', 10, 2);
            $table->decimal('quantiteAvoir', 10, 2);
            $table->decimal('remise', 10, 2);

            $table->unsignedBigInteger('produit_id');
            $table->foreign('produit_id')->references('id')->on('produit');
            $table->unsignedBigInteger('achat_id');
            $table->foreign('achat_id')->references('id')->on('achat');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('achat_item');
    }
};
