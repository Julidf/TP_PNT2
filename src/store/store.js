import { defineStore } from "pinia";

export const useStore = defineStore("tp",{
    state: () => ({
        _logueado: false,
    }),
    actions: {
        loguearse() {
            this._logueado = true;
        },
        desloguearse() {
            this._logueado = false;
        },
    },
    getters: {
        estaLogueado() {
            return this._logueado;
        }
    },

});