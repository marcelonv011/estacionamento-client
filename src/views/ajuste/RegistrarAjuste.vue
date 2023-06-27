<template>
  <div v-if="toastMessage" class="alert alert-success mt-4" role="alert">
    <button type="button" class="btn" @click="closeToast">x</button>
    {{ toastMessage }}
  </div>
  <form class="d-flex flex-column align-items-center">
    <div class="mt-4 input-container">
      <label class="form-label">Atualizar o estado da configuracao</label>
      <button
        class="btn btn-danger form-control"
        placeholder=""
        v-if="configuracao.ativo"
        @click="cambiarEstadoAtivo"
      >
        Vai ficar inativo
      </button>
      <button
        class="btn btn-success form-control"
        placeholder=""
        v-if="!configuracao.ativo"
        @click="cambiarEstadoAtivo"
      >
        Vai ficar Ativo
      </button>
    </div>
    <div class="mt-4 input-container">
      <label class="form-label">Valor hora</label>
      <input
        class="form-control"
        placeholder=""
        v-model="configuracao.valorHora"
      />
    </div>
    <div class="mt-4 input-container">
      <label class="form-label">Vagas motos</label>
      <input
        class="form-control"
        placeholder=""
        v-model="configuracao.vagasMoto"
      />
    </div>
    <div class="mt-4 input-container">
      <label class="form-label">Vagas carro</label>
      <input
        class="form-control"
        placeholder=""
        v-model="configuracao.vagasCarro"
      />
    </div>
    <div class="mt-4 input-container">
      <label class="form-label">Vagas vam</label>
      <input
        class="form-control"
        placeholder=""
        v-model="configuracao.vagasVam"
      />
    </div>
    <div class="d-flex justify-content-between">
      <router-link type="button" class="btn btn-danger mt-4" to="/ajuste/lista">
        Voltar
      </router-link>
      <button
        type="button"
        class="btn btn-success mt-4 ms-2"
        @click="onClickCadastrar"
      >
        Cadastrar
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ConfiguracaoClient from "../../client/ConfiguracaoClient";
import { Configuracao } from "../../model/Configuracao";

export default defineComponent({
  name: "ConfiguracaoEditar",
  data() {
    return {
      configuracao: new Configuracao(),
      toastMessage: "" as string,
    };
  },
  methods: {
    onClickCadastrar() {
      ConfiguracaoClient.cadastrar(this.configuracao)
        .then((sucess) => {
          this.configuracao = new Configuracao();
          this.toastMessage = sucess;
        })
        .catch((error) => {
          this.toastMessage = error.data;
        });
    },
    closeToast() {
      this.toastMessage = "";
    },
    cambiarEstadoAtivo() {
      this.configuracao.ativo = !this.configuracao.ativo;
    },
  },
});
</script>

<style lang="scss">
.input-container {
  width: 40%;
}
</style>
