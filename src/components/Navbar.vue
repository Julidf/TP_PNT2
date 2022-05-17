<template>
  <div class="contenedorNavBar">
    <b-container>
      <b-nav card-header pills>
        <b-nav-item 
            to="/" 
            exact-active-class="active"
        > 
            Inicio 
        </b-nav-item>
        <b-nav-item 
            :to="{ name: 'Login' }" 
            exact-active-class="active"
            v-if="usuario == null"
        >
            Ingresar
        </b-nav-item>
        <b-nav-item 
            :to="{ name: 'Login' }" 
            exact-active-class="active"
            v-if="usuario == null"
        >
            Registrarse
        </b-nav-item>
        <b-nav-item
          :to="{ name: 'MenuUsuario' }"
          exact-active-class="active"
          v-if="usuario != null"
        >
          Menu Usuario
        </b-nav-item>
        <b-nav-item
          :to="{ name: 'MisPracticas' }"
          exact-active-class="active"
          v-if="usuario != null"
        >
          Cancionero
        </b-nav-item>
        <b-nav-item
          :to="{ name: 'LasMasPracticadas' }"
          exact-active-class="active"
          v-if="usuario != null"
        >
          Favoritas
        </b-nav-item>
        <b-nav-item
          :to="{ name: 'Logout' }"
          exact-active-class="active"
          v-if="usuario != null"
        >
          Desconectarse
        </b-nav-item>
      </b-nav>
      <!-- Child route gets rendered in <router-view> or <nuxt-child> -->
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data() {
    return {};
  },
  created() {
    this.usuario = null; // teniendo en cuenta que no tenemos creado el usuario en el store
  },
};
</script>

<style>
.contenedorNavBar {
  background-color: #16a085;
  margin-bottom: 15px;
}
</style>
