<template>
  <div class="contenedorNavBar">
    <b-container>
      <b-nav card-header pills>
        <b-nav-item 
            to="/"   
        > 
            Inicio 
        </b-nav-item>
        <b-nav-item 
            :to="{ name: 'Login' }" 
            
            v-if="usuario == null"
        >
            Ingresar
        </b-nav-item>
        <b-nav-item 
            :to="{ name: 'Register' }" 
            
            v-if="usuario == null"
        >
            Registrarse
        </b-nav-item>
        <b-nav-item
          :to="{ name: 'MenuUsuario' }"
          
          v-if="usuario != null"
        >
          Menu Usuario
        </b-nav-item>
        <b-nav-item
          :to="{ name: 'MisPracticas' }"
          
          v-if="usuario != null"
        >
          Cancionero
        </b-nav-item>
        <b-nav-item
          :to="{ name: 'LasMasPracticadas' }"
          
          v-if="usuario != null"
        >
          Favoritas
        </b-nav-item>
        <b-nav-item
          :to="{ name: 'Logout' }"
          
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
  background-color: #dc1a28;
  padding: 5px;
}
.nav-item.nav-item.nav-item a {
  color: red;
  background-color:black;
  margin:1px;
}
</style>
