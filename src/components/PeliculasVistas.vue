<template>
  <div class="row">
    <Titulo texto="Listado de series y películas marcas como vistas" />
    <div v-for="(item, index) in arrayPeliculas" :key="index" class="col">
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
        <b-card-text>
          <b v-if="item.es_pelicula == 1">
            <b-badge style="background-color:black;">Pelicula</b-badge>
          </b>
          <b v-else-if="item.es_pelicula == 0">
            <b-badge style="background-color:gray;">Serie</b-badge>
          </b>
        </b-card-text>

        <b-button href="#" v-on:click="desmarcarPelicula(item.id)" variant="secondary">Desmarcar</b-button>

      </b-card>
    </div>
  </div>
</template>

<script>
import Titulo from "./Titulo.vue";
import axios from "axios";
import { useStore } from "../store/store";

export default {
  name: "Peliculas",
  components: {
    Titulo
  },
  props: {},

  data() {
    return {
      arrayPeliculas: [],
      usuario: "",
    };
  },
  setup(){
    const store = useStore()
    return {store}
  },
  mounted() {
    this.usuario = this.store.getUsuario
  },
  created() {
    this.traerPeliculasVistas();
  },
  methods: {
    async traerPeliculasVistas() {
      try {
        const res = await axios.get
        (
          "https://62954fba63b5d108c19cb5bd.mockapi.io/Peliculas"
        );
        const data = await res.data;

        this.arrayPeliculas = data;

        for (let i = 0; i < this.arrayPeliculas.length; i++) {
          const res = await axios.get
          (
            "https://62954fba63b5d108c19cb5bd.mockapi.io/Peliculas_vistas"
          );
          const data = await res.data;

          for (let j = 0; j < data.length; j++) {
            if (!(this.arrayPeliculas[i].id == data[j].idpelicula && this.usuario.id == data[j].idusuario)) {
              this.arrayPeliculas.splice(i, 1);
            }
          }

        }
      console.log(this.arrayPeliculas);
      } catch (error) {
        console.log(error);
      }
    },
    async marcarPelicula(id){
      try {
        await axios.post
        (
          "https://62954fba63b5d108c19cb5bd.mockapi.io/Peliculas_vistas",
          {
            idpelicula: id,
            idusuario: this.usuario.id,
            fecha: new Date()
          }
        );
        this.traerPeliculasVistas();
      } catch (error) {
        console.log(error);
      }
    },
    async desmarcarPelicula(id){
      try {
        await axios.delete
        (
          "https://62954fba63b5d108c19cb5bd.mockapi.io/Peliculas_vistas/" + id
        );
        this.traerPeliculasVistas();
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>

b-badge {
  background-color:black;
}

</style>
