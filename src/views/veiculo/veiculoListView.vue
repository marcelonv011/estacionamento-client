<template>
  <div class="marca">
    <div v-if="toastMessage" class="alert alert-success mt-4" role="alert">
      <button type="button" class="btn" @click="closeToast">x</button>
      {{ toastMessage }}
    </div>
    <router-link
      type="button"
      class="btn btn-success mt-4"
      to="/veiculo/formulario"
    >
      Cadastrar veiculo
    </router-link>
    <table class="table mt-4 pequeña-table">
      <thead>
        <tr>
          <th scope="col">Placa</th>
          <th scope="col">Ativo</th>
          <th scope="col">Modelo</th>
          <th scope="col">Cor</th>
          <th scope="col">Tipo</th>
          <th scope="col">Ano</th>
          <th scope="col">Opcoes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in veiculosList" :key="item.id">
          <td>{{ item.placa }}</td>
          <td>
            <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
            <span v-if="!item.ativo" class="badge text-bg-danger">
              Inativo
            </span>
          </td>
          <td>{{ item.modelo.nome }}</td>
          <td>{{ item.cor }}</td>
          <td>{{ item.tipo }}</td>
          <td>{{ item.ano }}</td>
          <td>
            <button
              type="button"
              class="btn btn-secondary btn-color"
              @click="onClickEditar(item.id)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-clockwise"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                />
                <path
                  d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
                />
              </svg>
            </button>
            <button
              type="button"
              class="btn btn-secondary btn-color2 ms-2"
              @click="onClickExcluir(item.id)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
  name: "veiculoLista",
  data() {
    return {
      veiculosList: new Array<Veiculo>(),
      toastMessage: "" as string,
      modelosList: [] as Modelo[],
      coloresList: [] as Cor[],
      tiposList: [] as Tipo[],
      veiculo: new Veiculo(),
    };
  },
  mounted() {
    this.listaAll();
    this.selectModeloList();
    this.selectCorList();
    this.selectTipoList();
  },
  methods: {
    listaAll() {
      VeiculoClient.findAll()
        .then((sucess) => {
          this.veiculosList = sucess;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onClickExcluir(id: number) {
      VeiculoClient.excluir(id)
        .then((sucess) => {
          this.veiculo = new Veiculo();
          this.toastMessage = sucess;
          this.listaAll();
        })
        .catch((error) => {
          this.toastMessage = error.data;
        });
    },
    onClickEditar(id: number) {
      this.$router.push({ name: "veiculoeditar", params: { id } });
    },
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
    closeToast() {
      this.toastMessage = "";
    },
  },
});
</script>

<style lang="scss">
.marca {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pequeña-table {
  width: 60%;
  max-width: 600px;
}

.btn-color {
  background-color: rgb(255, 166, 0);
  border-color: rgb(255, 166, 0);
}
.btn-color:hover {
  background-color: darkorange;
  border-color: darkorange;
}
.btn-color2 {
  background-color: rgb(255, 0, 0);
  border-color: rgb(255, 0, 0);
}
.btn-color2:hover {
  background-color: darkred;
  border-color: darkred;
}
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 400px;
  text-align: center;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
