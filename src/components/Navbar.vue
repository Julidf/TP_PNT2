<template>
  <div class="contenedorNavBar">
    <b-container>
      <b-nav card-header pills>

        <b-nav-item to="/" v-if="!store.estaLogueado "> 
          Inicio 
        </b-nav-item>

        <b-nav-item :to="{ name: 'HomeAutenticado' }" v-if="store.estaLogueado " > 
          Inicio
        </b-nav-item>

        <b-nav-item :to="{ name: 'Login' }" v-if="!store.estaLogueado ">
          Ingresar
        </b-nav-item>

        <b-nav-item :to="{ name: 'Register' }" v-if="!store.estaLogueado ">
          Registrarse
        </b-nav-item>

        <b-nav-item  v-if="store.estaLogueado" v-on:click="desloguearse()">
          Desloguearse
        </b-nav-item>

      </b-nav>
      <!-- Child route gets rendered in <router-view> or <nuxt-child> -->
    </b-container>
  </div>
</template>

<script>

import { useStore } from "../store/store";

export default {
  name: "Navbar",
  setup() {
    const store = useStore()
    return { store };
  },
  methods: {
    desloguearse (){
      this.store.desloguearse();
      this.$router.replace({name:'Home'})
    }
  },
};
</script>

<style>
.contenedorNavBar {
  background-color: #dc1a28;
  padding: 5px;
}
.nav-item.nav-item.nav-item a {
  color: red;
  background-color: black;
  margin: 1px;
}
</style>
