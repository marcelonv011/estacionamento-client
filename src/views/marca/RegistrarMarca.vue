<template>
  <div v-if="toastMessage" class="alert alert-success mt-4" role="alert">
    <button type="button" class="btn" @click="closeToast">x</button>
    {{ toastMessage }}
  </div>
  <form class="d-flex flex-column align-items-center">
    <div class="mt-4 input-container">
      <label class="form-label">Nome</label>
      <input class="form-control" placeholder="" v-model="marca.nome" />
    </div>
    <div class="d-flex justify-content-between">
      <router-link type="button" class="btn btn-danger mt-4" to="/marca/lista">
        Voltar
      </router-link>
      <button
        type="button"
        class="btn btn-success mt-4 ms-2"
        @click="onClickCadastrar"
      >
        Cadastrar
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MarcaClient from "@/client/MarcaClient";
import { Marca } from "@/model/Marca";

export default defineComponent({
  name: "MarcaFormulario",
  data() {
    return {
      marca: new Marca(),
      toastMessage: "" as string,
    };
  },
  methods: {
    onClickCadastrar() {
      MarcaClient.cadastrar(this.marca)
        .then((sucess) => {
          this.marca = new Marca();
          this.toastMessage = sucess;
        })
        .catch((error) => {
          this.toastMessage = error.data;
        });
    },
    closeToast() {
      this.toastMessage = "";
    },
  },
});
</script>

<style lang="scss"></style>
