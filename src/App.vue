<template>
    <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #476c90;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
#nav a.router-link-exact-active {
  color: #eb502a;
  background-color: rgb(255, 187, 0);
}
</style>

<script>
import { mapState } from "vuex";
export default {
  name: "app",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["usuario"]),
  },
};
</script>
