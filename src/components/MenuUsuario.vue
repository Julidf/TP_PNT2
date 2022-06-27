<template>
  <b-container>
    <Titulo texto="Gestión del usuario usuario.nombre" />

  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Nombre de usuario"
        label-for="input-1"
        description="Este dato no puede ser editado."
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          placeholder="usuario.username"
          disabled
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
          placeholder="usuario.fecha_nacimiento"
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

      <b-button type="submit" variant="primary">Actualizar información</b-button>
    </b-form>
  </div>

  </b-container>
</template>

<script>
import { mapState } from "vuex";
import Titulo from "../components/Titulo.vue";

export default {
  data() {
    return {
      form: {
          username: '',
          nombre_completo: '',
          fecha_nacimiento: '',
          food: null,
          checked: []
        }
    };
  },
  components: {
    Titulo,
  },
  computed: {
    ...mapState(["usuario"]),
  },
  methods: {
    onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
  },
};
</script>
<style>

  label {
    color:white;
    font-weight:bold;
  }

</style>
