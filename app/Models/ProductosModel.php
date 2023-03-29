<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductosModel extends Model
{
    use HasFactory;

    protected $table = 'productos';

    protected $fillable = ['nombre', 'descripcion', 'precio', 'cantidad', 'id_categoria'];

    public function categoria()
    {
        return $this->belongsTo(CategoriasModel::class, 'id_categoria');
    }

    public function carroCompras()
    {
        return $this->belongsToMany(CarroComprasModel::class, 'productos_carro_compras', 'id_producto', 'id_carro')->withPivot('cantidad')->withTimestamps();
    }
}
