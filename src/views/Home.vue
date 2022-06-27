<template>
  <b-container fluid="sm">
    <div :style="myStyle" class="Home">
      <p class="text-center">
        <img alt="Vue logo" style="width: 50%" src="../assets/ortflix.png" />
      </p>
      <carousel/>
      <!-- <Titulo texto="Tu lugar para ver peliculas" /> -->
    </div>
  </b-container>
</template>

<script>
import carousel from "../components/carousel.vue";
// import Titulo from "../components/Titulo.vue";
export default {
  name: "Home",
  data() {
    return {
      myStyle: {
        backgroundColor: "rgb()",
      },
    };
  },
  components: {
    carousel,
    // Titulo
  },
};
</script>
