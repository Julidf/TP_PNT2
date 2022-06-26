import { defineStore } from "pinia";

export const useStore = defineStore("tp",{
    state: () => ({
        _logueado: false,
    }),
    actions: {
        loguearse(estado) {
            this._logueado = estado;
        },
    },
    getters: {
        estaLogueado() {
            return this._logueado;
        }
    },

});