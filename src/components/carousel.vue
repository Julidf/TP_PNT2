<template>
  <div>
    <b-carousel
      id="carousel-fade"
      fade
      indicators
      interval=2500
      style="text-shadow: 1px 1px 2px #373345"
    >
      <b-carousel-slide
        :img-src="require('@/assets/ozark.jpg')"
        caption="Ozark"
        text="Llegando pronto a tu aplicacion!"
      ></b-carousel-slide>

      <b-carousel-slide>
        <h3>Arrow</h3>
        <h4>Tambien llegando pronto</h4>
        <template #img>
          <img
            width="1024"
            height="480"
            class="d-block img-fluid w-100"
            src="../assets/arrow.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <h3>Dark</h3>
        <h4>Súper atrapante!</h4>
        <template #img>
          <img
            width="1024"
            height="480"
            class="d-block img-fluid w-100"
            src="../assets/dark.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <h3>Stranger Things</h3>
        <h4>La serie que lo cambio todo</h4>
        <template #img>
          <img
            width="1024"
            height="480"
            class="d-block img-fluid w-100"
            src="../assets/strangerThings.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

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