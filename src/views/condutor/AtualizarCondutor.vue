<template>
  <div v-if="toastMessage" class="alert alert-success mt-4" role="alert">
    <button type="button" class="btn" @click="closeToast">x</button>
    {{ toastMessage }}
  </div>
  <form class="d-flex flex-column align-items-center">
    <div class="mt-4 input-container">
      <label class="form-label">Nome</label>
      <input class="form-control" placeholder="" v-model="condutor.nome" />
    </div>

    <div class="mt-4 input-container">
      <label class="form-label">Telefone</label>
      <input class="form-control" placeholder="" v-model="condutor.telefone" />
    </div>
    <div class="d-flex justify-content-between">
      <router-link
        type="button"
        class="btn btn-danger mt-4"
        to="/condutor/lista"
      >
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
    onClickEditar() {
      CondutorClient.atualizar(this.condutor.id, this.condutor)
        .then(() => {
          this.$router.push({ name: "condutorlist" });
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
      CondutorClient.findById(id)
        .then((condutor) => {
          this.condutor = condutor;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
});
</script>

<style lang="scss"></style>
