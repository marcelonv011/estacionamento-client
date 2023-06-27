<template>
  <div class="configuracao">
    <div v-if="toastMessage" class="alert alert-success mt-4" role="alert">
      <button type="button" class="btn" @click="closeToast">x</button>
      {{ toastMessage }}
    </div>
    <router-link
      type="button"
      class="btn btn-success mt-4"
      to="/configuracao/formulario"
    >
      Cadastrar configuracao
    </router-link>
    <table class="table mt-4 pequeña-table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Valor Hora</th>
          <th scope="col">Vagas motos</th>
          <th scope="col">Vagas carros</th>
          <th scope="col">Vagas vam</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="item" :key="item.id">
          <td>{{ item.id }}</td>
          <td>
            <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
            <span v-if="!item.ativo" class="badge text-bg-danger">
              Inativo
            </span>
          </td>
          <td>{{ item.valorHora }}</td>
          <td>{{ item.vagasMoto }}</td>
          <td>{{ item.vagasCarro }}</td>
          <td>{{ item.vagasVam }}</td>
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
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ConfiguracaoClient from "../../client/ConfiguracaoClient";
import { Configuracao } from "../../model/Configuracao";

export default defineComponent({
  name: "Configuracoes",
  data() {
    return {
      configuracao: new Configuracao(),
      toastMessage: "" as string,
    };
  },
  mounted() {
    this.findById(this.configuracao.id);
  },
  methods: {
    findById(id: number) {
      ConfiguracaoClient.findById(id)
        .then((sucess) => {
          this.configuracao = sucess;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    onClickEditar(id: number) {
      this.$router.push({ name: "configuracaoeditar", params: { id } });
    },
    closeToast() {
      this.toastMessage = "";
    },
  },
});
</script>

<style lang="scss">
.configuracao {
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
</style>
