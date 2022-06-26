<template>
  <b-container fluid class="p-4 bg-light">
    <div class="bg-dark">
      
    </div>
    
    <h1>Ingresa tu usuario y clave</h1>
    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="lg"
      label="Usuario"
      label-for="NombreUsuario"
    >
      <b-form-input
        id="NombreUsuario"
        size="lg"
        v-model="NombreUsuario"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="lg"
      label="Clave"
      label-for="clave"
    >
      <b-form-input
        type="password"
        id="clave"
        size="lg"
        v-model="clave"
      ></b-form-input>
    </b-form-group>
    <b-button v-if="!store.estaLogueado" class="btn btn-active" v-on:click="login()">
      Ingresar
    </b-button>

    <div class="alert alert-danger" role="alert" v-if="error">
      {{ error_msg }}
    </div>
    <div class="alert alert-success" role="alert" v-if="store.estaLogueado">
      {{ error_msg }}
    </div>
    
  </b-container>
</template>

<script>
import axios from "axios";

import { mapActions } from "vuex";
import { useStore } from "../store/store";

export default {
  name: "Login",
  setup() {
    const store = useStore()
    return { store };
  },
  data() {
    return {
      NombreUsuario: "",
      clave: "",
      error: false,
      error_msg: "",
    };
  },
  methods: {
    async login() {
      let usuarios = await axios.get(
        "https://62954fba63b5d108c19cb5bd.mockapi.io/Usuarios"
      );
      usuarios = usuarios.data;
      try {
        const usuario = usuarios.find(
          (u) => u.name.toUpperCase() == this.NombreUsuario.toUpperCase()
        );
        if (usuario.name && usuario.pass == this.clave) {
          this.error_msg = "Acceso concedido";
          this.error = false;
          this.store.loguearse(true);
          this.$router.replace({name:'HomeAutenticado'})
        } else {
          this.error_msg = "Usuario o clave incorrecta";
          this.error = true;
        }
      } catch (error) {
        this.error_msg = error;
        console.log(error);
      }
    },
    ...mapActions(),
    //...mapActions(["accionRegistrarUsuario", "accionRegistrarTodasLasFavoritas"]),
  },
  
};

</script>

<style></style>