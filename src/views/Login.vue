<template>
  <b-container fluid class="p-4 col-8" style="background-color:black;">
    <div class="">
      <img src="../assets/ortflix.png" id="icon" alt="User Icon" />
    </div>
  
    <h1>Ingresa tu usuario y clave</h1>
    
    <div v-if="conectado">
      <b-button class="btn btn-black">
        <router-link to="/MenuUsuario"> Presiona aqui para ir a mis practicas </router-link>
      </b-button>
    </div>
  </b-container>
</template>

<script>
import axios from "axios";

import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      NombreUsuario: "",
      clave: "",
      error: false,
      conectado: false,
      error_msg: "",
    };
  },
  methods: {
    async cargarFavoritas() {
      let favoritas = [];
      try {
        let response = await axios.get(
          "https://60eb2e32e9647b0017cddcfa.mockapi.io/usuarios/favoritas"
        );
        favoritas = response.data;
        this.accionRegistrarTodasLasFavoritas(favoritas);
      } catch (error) {
        this.error_msg = error;
        console.log(error);
      }
    },
    async login() {
      let usuarios = [];
      try {
        let response = await axios.get(
          "https://60eb2e32e9647b0017cddcfa.mockapi.io/usuarios/optimus"
        );
        usuarios = response.data;

        const usuario = usuarios.find(
          (u) =>
            u.nombreUsuario.toUpperCase() == this.NombreUsuario.toUpperCase()
        );
        if (usuario && usuario.contrasenia == this.clave) {
          this.error_msg = "Acceso concedido";
          this.error = false;
          this.conectado = true;
          this.accionRegistrarUsuario (usuario);
          this.cargarFavoritas();
        } else {
          this.error_msg = "Usuario o clave incorrecta";
          this.error = true;
        }
      } catch (error) {
        this.error_msg = error;
        console.log(error);
      }
    },
    ...mapActions(["accionRegistrarUsuario", "accionRegistrarTodasLasFavoritas"]),
  },
};
</script>

<style></style>
