<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductosCarroComprasModel extends Model
{
    use HasFactory;

    protected $table = 'productos_carro_compras';

    protected $fillable = ['id_carro', 'id_producto', 'cantidad'];

    public function carroCompras()
    {
        return $this->belongsTo(CarroComprasModel::class, 'id_carro');
    }

    public function producto()
    {
        return $this->belongsTo(ProductosModel::class, 'id_producto');
    }
}
