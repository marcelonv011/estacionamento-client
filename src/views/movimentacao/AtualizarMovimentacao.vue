<template>
  <div v-if="toastMessage" class="alert alert-success mt-4" role="alert">
    <button type="button" class="btn" @click="closeToast">x</button>
    {{ toastMessage }}
  </div>
  <form class="d-flex flex-column align-items-center">
    <div class="mt-4 input-container">
      <label class="form-label">Hora entrada</label>
      <input
        class="form-control"
        placeholder=""
        v-model="movimentacao.entrada"
      />
    </div>
    <div class="mt-4 input-container">
      <label class="form-label">Hora saida</label>
      <input class="form-control" placeholder="" v-model="movimentacao.saida" />
    </div>
    <div class="mt-4 inputselect input-container">
      <label> Veiculo </label>
      <select
        class="form-select"
        v-model="movimentacao.veiculo"
        aria-label="Default select example"
      >
        <option selected disabled value="">Selecione um Veiculo</option>
        <option :value="item" v-for="item in veiculosList" :key="item.id">
          {{ item.placa }}
        </option>
      </select>
    </div>
    <div class="mt-4 inputselect input-container">
      <label> Condutor </label>
      <select
        class="form-select"
        v-model="movimentacao.condutor"
        aria-label="Default select example"
      >
        <option selected disabled value="">Selecione um Condutor</option>
        <option :value="item" v-for="item in condutoresList" :key="item.id">
          {{ item.nome }}
        </option>
      </select>
    </div>
    <button type="button" class="btn btn-success mt-4" @click="onClickEditar">
      Atualizar
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MovimentacaoClient from "@/client/MovimentacaoClient";
import VeiculoClient from "@/client/VeiculoClient";
import CondutorClient from "@/client/CondutorClient";

import { Movimentacao } from "@/model/Movimentacao";
import { Condutor } from "@/model/Condutor";
import { Veiculo } from "@/model/Veiculo";

export default defineComponent({
  name: "MovimentacaoFormulario",
  data() {
    return {
      movimentacao: new Movimentacao(),
      condutoresList: [] as Condutor[],
      veiculosList: [] as Veiculo[],
      toastMessage: "" as string,
    };
  },
  mounted() {
    this.selectCondutorList();
    this.selectVeiculosList();
  },
  methods: {
    selectCondutorList() {
      CondutorClient.findAll()
        .then((response) => {
          this.condutoresList = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectVeiculosList() {
      VeiculoClient.findAll()
        .then((response) => {
          this.veiculosList = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onClickEditar() {
      MovimentacaoClient.atualizar(this.movimentacao.id, this.movimentacao)
        .then(() => {
          this.$router.push({ name: "saidalist" });
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
      MovimentacaoClient.findById(id)
        .then((movimentacao) => {
          this.movimentacao = movimentacao;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
});
</script>

<style lang="scss">
.input-container {
  width: 40%;
}
</style>
