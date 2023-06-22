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
    };
  },
  methods: {
    onClickCadastrar() {
      MarcaClient.cadastrar(this.marca)
        .then((sucess) => {
          this.marca = new Marca();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>

<style lang="scss"></style>
