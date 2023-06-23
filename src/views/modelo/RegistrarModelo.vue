<template>
  <div v-if="toastMessage" class="alert alert-success mt-4" role="alert">
    {{ toastMessage }}
  </div>
  <form class="d-flex flex-column align-items-center">
    <div class="mt-4 input-container">
      <label class="form-label">Nome</label>
      <input class="form-control" placeholder="" v-model="modelo.nome" />
    </div>
    <div class="mt-4 inputselect input-container">
      <label> Marca </label>
      <select
        class="form-select"
        v-model="modelo.marca"
        aria-label="Marca select"
      >
        <option selected>Marca</option>
        <option :value="item" v-for="item in marcasList" :key="item.id">
          {{ item.nome }}
        </option>
      </select>
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

import ModeloClient from "@/client/ModeloClient";
import MarcaClient from "@/client/MarcaClient";
import { Modelo } from "@/model/Modelo";
import { Marca } from "@/model/Marca";

export default defineComponent({
  name: "ModeloFormulario",
  data() {
    return {
      modelo: new Modelo(),
      marcasList: [] as Marca[],
      toastMessage: "" as string,
    };
  },
  mounted() {
    this.selectMarcaList();
  },
  methods: {
    selectMarcaList() {
      MarcaClient.findAll()
        .then((response) => {
          this.marcasList = response; // No es necesario acceder a 'response.data'
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onClickCadastrar() {
      ModeloClient.cadastrar(this.modelo)
        .then((sucess) => {
          this.modelo = new Modelo();
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
