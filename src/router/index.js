import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../components/Register.vue";
import Peliculas from "../components/Peliculas.vue";
import PeliculasVistas from "../components/PeliculasVistas.vue";
import MenuUsuario from "../components/MenuUsuario.vue";
import Reproductor from "../components/Reproductor.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },

    {
        path: "/MenuUsuario",
        name: "MenuUsuario",
        component: MenuUsuario,
    },
    {
        path: "/MenuUsuario/:nombreUsuario",
        name: "MenuUsuario",
        component: MenuUsuario,
        props: true,
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
        path: "/Peliculas",
        name: "Peliculas",
        component: Peliculas,
    },
    {
        path: "/PeliculasVistas",
        name: "PeliculasVistas",
        component: PeliculasVistas,
    },

    {
        path: "/Reproductor/:id",
        name: "Reproductor",
        component: Reproductor,
        props: true,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;