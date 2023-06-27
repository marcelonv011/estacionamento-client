<template>
  <div v-if="toastMessage" class="alert alert-success mt-4" role="alert">
    <button type="button" class="btn" @click="closeToast">x</button>
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
        <option selected disabled value="">Selecione uma marca</option>
        >
        <option :value="item" v-for="item in marcasList" :key="item.id">
          {{ item.nome }}
        </option>
      </select>
    </div>
    <div class="d-flex justify-content-between">
      <router-link type="button" class="btn btn-danger mt-4" to="/modelo/lista">
        Voltar
      </router-link>
      <button
        type="button"
        class="btn btn-success mt-4 ms-2"
        @click="onClickEditar"
      >
        atualizar
      </button>
    </div>
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
    onClickEditar() {
      ModeloClient.atualizar(this.modelo.id, this.modelo)
        .then(() => {
          this.$router.push({ name: "modelolist" });
        })
        .catch((error) => {
          this.toastMessage = error.data;
        });
    },
    closeToast() {
      this.toastMessage = "";
    },
  },
  created() {
    const id = Number(this.$route.params.id);

    if (!isNaN(id)) {
      ModeloClient.findById(id)
        .then((modelo) => {
          this.modelo = modelo;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
});
</script>

<style lang="scss"></style>
