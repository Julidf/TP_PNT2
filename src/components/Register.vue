<template>
  <b-container>
    <Titulo :texto=this.texto />
      <p class="text-center">
        <img alt="Vue logo" style="width: 50%" src="../assets/ortflix.png" />
      </p>
  <div>
    <b-form ref="form">
      <b-form-group
        id="input-group-1"
        label="Nombre de usuario"
        label-for="input-1"
        description="El usuario con el que ingresará al sitio"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          placeholder="Tu nombre de usuario"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Nombre completo"
        label-for="input-2"
        description="Completar con tu nombre y apellido real."
      >
        <b-form-input
          id="input-2"
          v-model="form.nombre_completo"
          type="text"
          placeholder="Su nombre real, completo"
          required
        ></b-form-input>

      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Fecha de nacimiento"
        label-for="input-3"
        description="Completar con tu fecha de nacimiento, esta información sólo será utilizada para mostrarte ciertas peliculas."
      >
        <b-form-input
          id="input-3"
          v-model="form.fecha_nacimiento"
          type="date"
          required
        ></b-form-input>

      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Clave"
        label-for="input-4"
        description="Tu clave de acceso al sistema"
      >
        <b-form-input
          id="input-4"
          v-model="form.clave"
          type="password"
          placeholder="Clave de acceso al sistema"
          required
        ></b-form-input>

      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Correo electrónico"
        label-for="input-5"
        description="Tu correo vinculado a tu usuario, para enviarte notificaciones y actualizaciones"
      >
        <b-form-input
          id="input-5"
          v-model="form.correo_electronico"
          type="email"
          placeholder="Ingrese un correo valido"
          required
        ></b-form-input>

      </b-form-group>

      <b-button v-on:click="update()" variant="primary">Crear usuario</b-button>
      <br>
      <div class="alert alert-success" role="alert" v-if="actualizado">
      {{ msg }}
      </div>
    </b-form>
  </div>

  </b-container>
</template>

<script>
import axios from "axios";

import Titulo from "../components/Titulo.vue";

export default {
  data() {
    return {
      form: {
          username: '',
          nombre_completo: '',
          fecha_nacimiento: '',
          correo_electronico: '',
          clave: ''
        },
      usuario: "",
      actualizado: false,
      msg: "",
      texto: "Bienvenido!"
    };
  },
  components: {
    Titulo,
  },
  methods: {
    async update(){
      try {
        
        await axios.post(`https://62954fba63b5d108c19cb5bd.mockapi.io/Usuarios/`,
        {
          
          username: this.form.username,
          nombre_completo: this.form.nombre_completo,
          fecha_nacimiento: this.form.fecha_nacimiento,
          correo_electronico: this.form.correo_electronico,
          clave: this.form.clave
          
        });
        this.msg = "Usuario creado exitosamente! Ahora ingrese con sus datos.";
        this.actualizado = true;
      } catch (error) {
        console.log(error.response);
      }
    }
  },
};
</script>
<style>

  label {
    color:white;
    font-weight:bold;
  }

</style>
