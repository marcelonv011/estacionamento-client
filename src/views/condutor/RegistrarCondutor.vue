<template>
  <form class="d-flex flex-column align-items-center">
    <div class="mt-4 input-container">
      <label class="form-label">Nome</label>
      <input class="form-control" placeholder="" v-model="condutor.nome" />
    </div>
    <div class="mt-4 input-container">
      <label class="form-label">CPF</label>
      <input class="form-control" placeholder="" v-model="condutor.cpf" />
    </div>
    <div class="mt-4 input-container">
      <label class="form-label">Telefone</label>
      <input class="form-control" placeholder="" v-model="condutor.telefone" />
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

import CondutorClient from "@/client/CondutorClient";
import { Condutor } from "@/model/Condutor";

export default defineComponent({
  name: "CondutorFormulario",
  data() {
    return {
      condutor: new Condutor(),
      toastMessage: "" as string,
    };
  },
  methods: {
    onClickCadastrar() {
      CondutorClient.cadastrar(this.condutor)
        .then((sucess) => {
          this.condutor = new Condutor();
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
