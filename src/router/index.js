import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import HomeAutenticado from "../components/HomeAutenticado.vue";
import { useStore } from "../store/store";
import pinia from "../store/index";

Vue.use(VueRouter);

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
    //meta:{requiereAuth:true}
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {

  const store = useStore(pinia);
  const requiereAuth = to.meta.requiereAuth

  if (requiereAuth && !store.estaLogueado){
    //to();
    //from();
    next({name: "login"}); 
  } else{
    //next({name:'Login'})
    next(); 
  }
});

export default router;
