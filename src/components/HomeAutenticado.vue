<template>
  <div class="row">
    <Titulo texto="Listado de series y películas disponibles" />
    <div v-for="(item, index) in arrayCancionero" :key="index" class="col">
      <b-card
        :title="item.nombre"
        :img-src="item.url_imagen"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >

        <b-card-text>
          {{item.descripcion}}
        </b-card-text>

        <b-button href="#" variant="primary">Marcar como vista</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import Titulo from "./Titulo.vue";
import axios from "axios";
export default {
  name: "Peliculas",
  components: {
    Titulo
  },
  props: {},

  data() {
    return {
      arrayCancionero: [],
    };
  },
  methods: {
    async consumirApi() {
      try {
        const res = await axios.get
        (
          "https://62954fba63b5d108c19cb5bd.mockapi.io/Peliculas"
        );
        const data = await res.data;

        this.arrayCancionero = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.consumirApi();
  },
};
</script>

<style></style>
