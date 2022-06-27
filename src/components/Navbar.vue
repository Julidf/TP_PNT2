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
          :to="{ name: 'Peliculas' }"
          
          v-if="usuario != null"
        >
          Series y Películas
        </b-nav-item>

        <b-nav-item
          :to="{ name: 'PeliculasVistas' }"
          
          v-if="usuario != null"
        >
          Vistas
        </b-nav-item>

        <b-nav-item-dropdown dark right v-if="usuario!=null">
          <template #button-content>
            <em>Nombre de usuario</em>
          </template>

          <b-dropdown-item 
            style="background-color:black"
            :to="{ name: 'MenuUsuario' }"
            
            v-if="usuario != null"
          >
            Menú de Usuario
          </b-dropdown-item>

          <b-dropdown-item  
            :to="{ name: 'Logout' }"
          
            v-if="usuario != null"
          >
            Desconectarse
          </b-dropdown-item>

        </b-nav-item-dropdown>

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
    // this.usuario = null; // teniendo en cuenta que no tenemos creado el usuario en el store
    this.usuario = 1; // teniendo en cuenta que no tenemos creado el usuario en el store
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
  border-radius: 5px;
}

.b-nav-item-dropdown {
  padding: 5px;
  border-radius:5px;
}

.dropdown-menu.show {
  backgorund-color:black;
}

.nav-item.nav-item.nav-item a:hover{
  background-color: #f31f2d;
  color: white;
}
</style>
