<template>
  <div>
    <b-carousel
      id="carousel-fade"
      v-model="slide"
      fade
      indicators
      :interval="4000"
      style="text-shadow: 1px 1px 2px #373345 height:80%"
    >
      <b-carousel-slide
        :img-src="require('@/assets/Ozark.jpg')"
        caption="Ozark"
        text="Llegando pronto a tu aplicacion!"
      ></b-carousel-slide>
      <b-carousel-slide
        :img-src="require('@/assets/arrow.jpg')"
        caption="Arrow"
        text="También llegando pronto!"
      ></b-carousel-slide>
      <b-carousel-slide
        :img-src="require('@/assets/dark.jpg')"
        caption="Dark"
        text="Súper atrapante!"
      ></b-carousel-slide>
      <b-carousel-slide
        :img-src="require('@/assets/strangerThings.jpg')"
        caption="Stranger Things"
        text="La serie que lo cambio todo"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
