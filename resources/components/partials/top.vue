<template>
    <header class="bg-gray-900">
    <div class="flex justify-between items-center py-2 px-4 md:px-6 lg:px-8">
        <div class="flex-shrink-0">
        <a href="#" class="flex items-center">
            <img src="/images/menu/logo.png" alt="Logo" class="h-12 w-auto mr-2">
            <!-- <span class="text-white font-semibold text-lg">Nombre de la empresa</span> -->
        </a>
        </div>
        <div class="hidden md:block">
        <nav>
            <ul class="flex space-x-4">
            <li class="p-2"><a href="#" class="text-gray-300 hover:text-white font-medium"><i class="fa fa-user"></i> Login</a></li>
            <li class="p-2"><a href="#" class="text-gray-300 hover:text-white font-medium"><i class="fas fa-shopping-cart"></i> Carro</a></li>
            <li class="p-2"><a href="#" class="text-gray-300 hover:text-white font-medium"><i class="fa fa-envelope"></i> Contacto</a></li>
            </ul>
        </nav>
        </div>
        <div class="md:hidden">
        <button class="mobile-menu-button">
            <svg class="w-6 h-6 fill-current text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 6.25H17.5V7.75H2.5V6.25ZM2.5 9.25H17.5V10.75H2.5V9.25ZM2.5 12.25H17.5V13.75H2.5V12.25Z"></path>
            </svg>
        </button>
        </div>
    </div>
    <div class="md:hidden mobile-menu hidden">
        <ul class="flex flex-col items-center">
        <li><a href="#" class="text-gray-300 hover:text-white font-medium py-2">Inicio</a></li>
        <li><a href="#" class="text-gray-300 hover:text-white font-medium py-2">Acerca</a></li>
        <li><a href="#" class="text-gray-300 hover:text-white font-medium py-2">Servicios</a></li>
        <li><a href="#" class="text-gray-300 hover:text-white font-medium py-2">Contacto</a></li>
        </ul>
    </div>
    </header>
</template>

<script lang="ts">

  export default {
    setup() {
      return {

      }
    },
  }

</script>

<style lang="scss">


/* Colores personalizados */
@layer utilities {
  .bg-brand {
    --bg-opacity: 1;
    background-color: rgba(0, 128, 128, var(--bg-opacity));
  }
}

/* Estilos del menú */
.header-nav {
  @apply bg-gray-900 py-2 px-4 md:px-6 lg:px-8 flex justify-between items-center;
}

.header-nav a {
  @apply text-white font-semibold text-lg flex items-center;
}

.header-nav ul {
  @apply flex space-x-4;
}

.header-nav li {
  @apply list-none;
}

.header-nav a:hover {
  @apply text-gray-100;
}

.mobile-menu-button {
  @apply block md:hidden;
}

.mobile-menu {
  @apply md:hidden fixed top-0 right-0 h-full w-full bg-brand py-4 z-10 text-center;
}

.mobile-menu a {
  @apply text-white font-medium py-2 block;
}

.mobile-menu a:hover {
  @apply bg-green-700;
}
</style>
