<template>
  <form class="d-flex flex-column align-items-center">
    <div class="mt-4 input-container">
      <label class="form-label">Nome</label>
      <input class="form-control" placeholder="" v-model="marca.nome" />
    </div>
    <button
      type="button"
      class="btn btn-success mt-4"
      @click="onClickCadastrar"
    >
      Cadastrar
    </button>
  </form>
  <div v-if="toastMessage" class="alert alert-success mt-4" role="alert">
    {{ toastMessage }}
  </div>
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
  },
});
</script>

<style lang="scss"></style>
