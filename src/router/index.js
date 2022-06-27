import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import HomeAutenticado from "../components/HomeAutenticado.vue";
/* import { useStore } from "../store/store";
import pinia from "../store/index"; */

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/HomeAutenticado",
    name: "HomeAutenticado",
    component: HomeAutenticado,
    meta:{requiereAuth:true}
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

Vue.use(VueRouter);

/* router.beforeEach((to, from, next) => {
  const requiereAuth = to.meta.requiereAuth;
  const store = useStore(pinia);
  const log = store.estaLogueado;

  console.log(requiereAuth);
  console.log(log);

  if (!log && requiereAuth ){
    next({name: "Login"}); 
  } else{
    next();
  }
}); */

export default router;
