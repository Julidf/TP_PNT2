<template>
    <div>
        <b-form-group
            label-cols="4"
            label-cols-lg="2"
            label-size="lg"
            label="Usuario"
            label-for="NombreUsuario"
        >
        <b-form-input
            id="NombreUsuario"
            size="lg"
            v-model="NombreUsuario"
        ></b-form-input>
        </b-form-group>

        <b-form-group
            label-cols="4"
            label-cols-lg="2"
            label-size="lg"
            label="Clave"
            label-for="clave"
        >
        <b-form-input type="password" id="clave" size="lg" v-model="clave"></b-form-input>
        </b-form-group>
        <b-button v-if="!conectado" class="btn btn-active" v-on:click="login()"> Ingresar </b-button>
    
        <div class="alert alert-danger" role="alert" v-if="error">
            {{ error_msg }}
        </div>
        <div class="alert alert-success" role="alert" v-if="conectado">
            {{ error_msg }}
        </div>
    </div>
</template>