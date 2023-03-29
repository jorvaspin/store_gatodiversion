<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gatosdiversion</title>
    <!-- Importamos los estilos de Tailwind -->
    <link rel="stylesheet" href="https://cdn.tailwindcss.com">
</head>
<body class="bg-gray-100">
    <!-- Barra de navegación -->
    <nav class="bg-white shadow-sm">
        <div class="container mx-auto px-4 py-2 flex justify-between items-center">
            <a href="#" class="text-lg font-bold text-gray-800">Gatosdiversion</a>
            <ul class="flex space-x-4">
                <li><a href="#" class="text-gray-500 hover:text-gray-800">Inicio</a></li>
                <li><a href="#" class="text-gray-500 hover:text-gray-800">Productos</a></li>
                <li><a href="#" class="text-gray-500 hover:text-gray-800">Nosotros</a></li>
                <li><a href="#" class="text-gray-500 hover:text-gray-800">Contacto</a></li>
            </ul>
        </div>
    </nav>

    <!-- Banner principal -->
    <div class="bg-gray-800 text-white py-32">
        <div class="container mx-auto px-4">
            <h1 class="text-5xl font-bold mb-4">Juguetes divertidos para gatos</h1>
            <p class="text-lg mb-8">En Gatosdiversion tenemos la mejor selección de juguetes para gatos, para que tu gatito se divierta y mantenga activo.</p>
            <a href="#" class="bg-white text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200">Ver productos</a>
        </div>
    </div>

    <!-- Sección de productos destacados -->
    <div class="container mx-auto px-4 py-12">
        <h2 class="text-2xl font-bold mb-8">Productos destacados</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-md shadow-sm">
                <img src="https://via.placeholder.com/400x400" alt="Juguete para gato" class="w-full h-48 object-cover rounded-t-md">
                <div class="px-4 py-2">
                    <h3 class="text-lg font-bold mb-2">Juguete para gato</h3>
                    <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur sit amet tortor in tincidunt.</p>
                    <div class="flex justify-between items-center mt-4">
                        <span class="font-bold text-gray-800">$20.00</span>
                        <a href="#" class="bg-gray-800 text-white py-1 px-3 rounded-md hover:bg-gray-700 transition-colors duration-200">Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
