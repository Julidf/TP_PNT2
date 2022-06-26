import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import pinia from "../store/index";
import { createPinia, PiniaVuePlugin } from "pinia";

//import Router from 'vue-router';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
//import vuetify from "./plugins/vuetify";

///Vue.use(Router)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

//
const pinia = createPinia();
Vue.use(PiniaVuePlugin);

new Vue({
  render: (h) => h(App),
  router,
  store,
  pinia,
}).$mount("#app");
