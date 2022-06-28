<template>
  <b-container fluid class="p-4">
    <div style="background-color:black">
      <p class="text-center">
        <img alt="Vue logo" style="width: 50%" src="../assets/ortflix.png" />
      </p>
    </div>
    
    <h1>Ingresa tu usuario y clave</h1>
    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="lg"
      label="Usuario"
      label-for="nombreUsuario"
    >
      <b-form-input
        id="nombreUsuario"
        size="lg"
        v-model="nombreUsuario"
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
    <br>
    <b-button class="btn btn-active" v-if="!store.estaLogueado" v-on:click="login()">
      Ingresar
    </b-button>

    <div class="alert alert-danger" role="alert"  v-if="error" >
      {{ error_msg }}
    </div>
    
  </b-container>
</template>

<script>
import axios from "axios";

// import { mapActions } from "vuex";
import { useStore } from "../store/store";

export default {
  name: "Login",
  setup() {
    const store = useStore()
    return { store };
  },
  data() {
    return {
      nombreUsuario: "",
      clave: "",
      error: false,
      error_msg: "",
    };
  },
  methods: {
     async login() {
      let usuarios = [];
      try {
        usuarios = await axios.get(
        "https://62954fba63b5d108c19cb5bd.mockapi.io/Usuarios"
        );

        usuarios = usuarios.data;

        let usuario = usuarios.find(
          (u) =>
            u.username.toUpperCase() == this.nombreUsuario.toUpperCase()
        );

        if (!usuario) {
          this.error = true;
          this.error_msg = "Usuario no encontrado";
          return;
        }

        if (usuario.username == this.nombreUsuario && usuario.clave == this.clave) {
          this.error_msg = "Acceso concedido";
          this.error = false;
          this.store.loguearse(usuario);
          this.$router.replace({name:'HomeAutenticado'});
        } else {
          this.error_msg = "Usuario o clave incorrecta";
          this.error = true;
        }
      } catch (error) {
        this.error_msg = error;
        console.log(error);
      }
    },
    // ...mapActions(),
    //...mapActions(["accionRegistrarUsuario", "accionRegistrarTodasLasFavoritas"]),
  }, 




};

</script>

<style></style>