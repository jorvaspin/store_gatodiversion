<template>
    <div class="menu-mobile">
      <div class="container">
        <Slide>
          <a id="home" href="#">
            <span>Home</span>
          </a>
        </Slide>
        <ul>
          <li class="logo">
            <img src="https://res.cloudinary.com/dr3zgzxx0/image/upload/v1635364134/Global_Fut_Chile_LOGO_Mesa_de_trabajo_1_ke9um7.png" alt="">
          </li>
        </ul>
      </div>
      <Slide :closeOnNavigation="true">
        <a id="home">
          <span>Home</span>
        </a>
        <a href="#perfil" id="home" >
          <span>Perfil</span>
        </a>
        <a href="#perfil" id="home">
          <span>Mi Equipo</span>
        </a>
      </Slide>
    </div>
  </template>
  <script lang="ts">
//   import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`

  export default {
    components: {
        // Slide // Register your component
    },
    methods: {

    },
  }
  </script>
  <style media="screen">
  .ncontratos{
    color: white;
    background: red;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
  }
  </style>
