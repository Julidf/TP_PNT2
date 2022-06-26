import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import { createPinia , PiniaVuePlugin } from "pinia";

Vue.use(PiniaVuePlugin)

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default createPinia();