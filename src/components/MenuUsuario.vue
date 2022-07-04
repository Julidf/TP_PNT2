<template>
  <b-container>
    <Titulo :texto=this.texto />

  <div>
    <b-form ref="form">
      <b-form-group
        id="input-group-1"
        label="Nombre de usuario"
        label-for="input-1"
        description="Este dato no debe ser editado."
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
          placeholder="usuario.nombre_completo"
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
          placeholder="usuario.clave"
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
          placeholder="usuario.correo_electronico"
          required
        ></b-form-input>

      </b-form-group>

      <b-button v-on:click="update()" variant="primary">Actualizar información</b-button>
      <br>
      <div class="alert alert-success" role="alert" v-if="actualizado">
      {{ msg }}
      </div>
    </b-form>
  </div>

  </b-container>
</template>

<script>
import { useStore } from "@/store/store";
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
      texto: "Gestión del usuario "
    };
  },
  created() {
    this.setUsuarioFormulario();
  },
  setup(){
    const store = useStore()
    return { store }
  },
  components: {
    Titulo,
  },
  methods: {
    async update(){
      try {
        
        await axios.put(`https://62954fba63b5d108c19cb5bd.mockapi.io/Usuarios/${this.usuario.id}`,
        {
          
          username: this.form.username,
          nombre_completo: this.form.nombre_completo,
          fecha_nacimiento: this.form.fecha_nacimiento,
          correo_electronico: this.form.correo_electronico,
          clave: this.form.clave
          
        });
        this.msg = "Información actualizada correctamente";
        this.actualizado = true;
      } catch (error) {
        console.log(error.response);
      }
    },
    setUsuarioFormulario() {
      let usuario = this.store.getUsuario;
      usuario.fecha_nacimiento = usuario.fecha_nacimiento.substring(0, 10);
      this.usuario = usuario;
      this.form = usuario;
      this.texto = this.texto + "\"" + this.usuario.username + "\"";
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
