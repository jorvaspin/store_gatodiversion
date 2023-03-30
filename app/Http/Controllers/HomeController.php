<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    // inicializamos el blade para trabajar por completo con vuejs y sus routes
    public function routeVue() {
        return view('welcome');
    }
}
