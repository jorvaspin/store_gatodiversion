<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarroComprasModel extends Model
{
    use HasFactory;

    protected $table = 'carro_compras';

    protected $fillable = ['id_usuario'];

    public function usuario()
    {
        return $this->belongsTo(Users::class, 'id_usuario');
    }

    public function productos()
    {
        return $this->belongsToMany(ProductosModel::class, 'productos_carro_compras', 'id_carro', 'id_producto')->withPivot('cantidad')->withTimestamps();
    }
}
