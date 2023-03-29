<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarroComprasTable extends Migration
{
    public function up()
    {
        Schema::create('carro_compras', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_usuario')->constrained('users')->onDelete('cascade');
            $table->string('uid')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('carro_compras');
    }
}
