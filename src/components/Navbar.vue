<template>
  <div class="contenedorNavBar">
    <b-container>
      <b-nav card-header pills>

        <b-nav-item 
            to="/"
            v-if="!store.estaLogueado"   
        > 
            Inicio 
        </b-nav-item>

        <b-nav-item 
            :to="{ name: 'HomeAutenticado' }" 
            v-if="store.estaLogueado"
        > 
            Inicio 
        </b-nav-item>

        <b-nav-item 
            :to="{ name: 'Login' }" 
            v-if="!store.estaLogueado"
        >
            Ingresar
        </b-nav-item>

        <b-nav-item 
            :to="{ name: 'Register' }" 
            
            v-if="!store.estaLogueado"
        >
            Registrarse
        </b-nav-item>

        <b-nav-item
          :to="{ name: 'PeliculasVistas' }"
          
          v-if="store.estaLogueado"
        >
          Vistas
        </b-nav-item>

        <b-nav-item-dropdown dark right v-if="store.estaLogueado">
          <template #button-content>
            <em>Nombre de usuario</em>
          </template>

          <b-dropdown-item 
            style="background-color:black"
            :to="{ name: 'MenuUsuario' }"
            
            v-if="store.estaLogueado"
          >
            Menú de Usuario
          </b-dropdown-item>

          <b-dropdown-item  
            v-if="store.estaLogueado" v-on:click="desloguearse()"
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
import { useStore } from "../store/store";

export default {
  name: "Navbar",
  setup(){
    const store = useStore()
    return { store }
  },
  methods: {
    desloguearse(){
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
