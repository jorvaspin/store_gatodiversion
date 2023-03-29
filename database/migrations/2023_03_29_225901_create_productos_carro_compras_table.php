<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductosCarroComprasTable extends Migration
{
    public function up()
    {
        Schema::create('productos_carro_compras', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_carro')->constrained('carro_compras')->onDelete('cascade');
            $table->foreignId('id_producto')->constrained('productos')->onDelete('cascade');
            $table->integer('cantidad');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('productos_carro_compras');
    }
}
