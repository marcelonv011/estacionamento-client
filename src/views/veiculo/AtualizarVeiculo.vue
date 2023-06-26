<template>
  <div v-if="toastMessage" class="alert alert-success mt-4" role="alert">
    <button type="button" class="btn" @click="closeToast">x</button>
    {{ toastMessage }}
  </div>
  <form class="d-flex flex-column align-items-center">
    <div class="mt-4 input-container">
      <label class="form-label">Placa</label>
      <input class="form-control" placeholder="" v-model="veiculo.placa" />
    </div>
    <div class="mt-4 inputselect input-container">
      <label> Modelo </label>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="veiculo.modelo"
      >
        <option selected disabled value="">
          Selecione um modelo de o veiculo
        </option>
        <option :value="item" v-for="item in modelosList" :key="item.id">
          {{ item.nome }}
        </option>
      </select>
    </div>
    <div class="mt-4 inputselect input-container">
      <label> Cor </label>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="veiculo.cor"
      >
        <option selected disabled value="">Selecione o cor de o veiculo</option>
        <option :value="item" v-for="item in coloresList" :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <div class="mt-4 inputselect input-container">
      <label> Tipo </label>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="veiculo.tipo"
      >
        <option selected disabled value="">Selecione um Tipo de veiculo</option>
        <option :value="item" v-for="item in tiposList" :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <div class="mt-4 input-container">
      <label class="form-label">Ano</label>
      <input class="form-control" placeholder="" v-model="veiculo.ano" />
    </div>
    <button type="button" class="btn btn-success mt-4" @click="onClickEditar">
      Cadastrar
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import VeiculoClient from "@/client/VeiculoClient";
import ModeloClient from "@/client/ModeloClient";

import { Veiculo } from "@/model/Veiculo";
import { Modelo } from "@/model/Modelo";
import { Cor } from "@/model/enum/Cor";
import { Tipo } from "@/model/enum/Tipo";

export default defineComponent({
  name: "VeiculoFormulario",
  data() {
    return {
      veiculo: new Veiculo(),
      modelosList: [] as Modelo[],
      coloresList: [] as Cor[],
      tiposList: [] as Tipo[],
      toastMessage: "" as string,
    };
  },
  mounted() {
    this.selectModeloList();
    this.selectCorList();
    this.selectTipoList();
  },
  methods: {
    selectModeloList() {
      ModeloClient.findAll()
        .then((response) => {
          this.modelosList = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectCorList() {
      VeiculoClient.findCor()
        .then((response) => {
          this.coloresList = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectTipoList() {
      VeiculoClient.findTipo()
        .then((response) => {
          this.tiposList = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onClickEditar() {
      VeiculoClient.atualizar(this.veiculo.id, this.veiculo)
        .then(() => {
          this.$router.push({ name: "veiculolist" });
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
      VeiculoClient.findById(id)
        .then((veiculo) => {
          this.veiculo = veiculo;
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
