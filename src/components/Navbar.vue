<template>
  <div class="contenedorNavBar">
    <b-container>
      <b-nav card-header pills>
        <b-nav-item to="/"> Inicio </b-nav-item>
        <b-nav-item :to="{ name: 'Login' }" >
          Ingresar
        </b-nav-item>
        <b-nav-item :to="{ name: 'Register' }">
          Registrarse
        </b-nav-item>
        <b-nav-item :to="{ name: 'Logout' }" v-if="store.estaLogueado == true">
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
  components: {},
  data() {
    return {};
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
