<template>
  <div v-if="toastMessage" class="alert alert-success mt-4" role="alert">
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
        @click="onClickEditar"
      >
        atualizar
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MarcaClient from "@/client/MarcaClient";
import { Marca } from "@/model/Marca";

export default defineComponent({
  name: "MarcaEditar",
  data() {
    return {
      marca: new Marca(),
      toastMessage: "" as string,
    };
  },
  methods: {
    onClickEditar() {
      console.log("ID:", this.marca.id);
      console.log("Marca:", this.marca);
      MarcaClient.atualizar(this.marca.id, this.marca)
        .then(() => {
          this.$router.push({ name: "marcalist" });
        })
        .catch((error) => {
          this.toastMessage = error.data;
        });
    },
  },
  created() {
    const id = Number(this.$route.params.id);

    if (!isNaN(id)) {
      MarcaClient.findById(id)
        .then((marca) => {
          this.marca = marca;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
});
</script>

<style lang="scss"></style>
