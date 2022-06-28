import { defineStore } from "pinia";

export const useStore = defineStore("tp",{
    state: () => ({
        _logueado: false,
        _usuario: {},
        _peliculasVistas: [],
    }),
    actions: {
        loguearse(usuario) {
            this._logueado = true;
            this._usuario = {
                username: usuario.username,
                clave: usuario.clave,
                fecha_nacimiento: usuario.fecha_nacimiento,
                nombre_completo: usuario.nombre_completo,
                correo_electronico: usuario.correo_electronico,
                id: usuario.idUsuario
            };
        },
        desloguearse() {
            this._logueado = false;
            this._usuario = {};
        },
    },
    getters: {
        estaLogueado() {
            return this._logueado;
        },
        getUsuario() {
            return this._usuario;
        }
    },

});