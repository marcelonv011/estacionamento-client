<template>
  <div class="configuracao">
    <div v-if="toastMessage" class="alert alert-success mt-4" role="alert">
      <button type="button" class="btn" @click="closeToast">x</button>
      {{ toastMessage }}
    </div>
    <router-link
      type="button"
      class="btn btn-success mt-4"
      to="/ajuste/formulario"
    >
      Cadastrar configuração
    </router-link>
    <div v-if="configuracao" :key="configuracao.id">
      <table class="table mt-4">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Ativo</th>
            <th scope="col">Valor Hora</th>
            <th scope="col">Vagas motos</th>
            <th scope="col">Vagas carros</th>
            <th scope="col">Vagas vam</th>
            <th scope="col">Opcoes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ configuracao.id }}</td>
            <td>
              <span v-if="configuracao.ativo" class="badge text-bg-success">
                Ativo
              </span>
              <span v-if="!configuracao.ativo" class="badge text-bg-danger">
                Inativo
              </span>
            </td>
            <td>{{ configuracao.valorHora }}</td>
            <td>{{ configuracao.vagasMoto }}</td>
            <td>{{ configuracao.vagasCarro }}</td>
            <td>{{ configuracao.vagasVam }}</td>
            <td>
              <button
                type="button"
                class="btn btn-secondary btn-color"
                @click="onClickEditar(configuracao.id)"
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ConfiguracaoClient from "@/client/ConfiguracaoClient";
import { Configuracao } from "@/model/Configuracao";

export default defineComponent({
  name: "Configuracoes",
  data() {
    return {
      configuracao: new Configuracao(),
      toastMessage: "" as string,
    };
  },
  mounted() {
    this.configuracao.id = 152;
    this.findById();
  },
  methods: {
    findById() {
      const configuracaoId = this.configuracao.id; // Utiliza el valor asignado en this.configuracao.id
      ConfiguracaoClient.findById(configuracaoId)
        .then((configuracao) => {
          this.configuracao = configuracao; // Asigna la respuesta a this.configuracao
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onClickEditar(id: number) {
      this.$router.push({ name: "ajusteeditar", params: { id } });
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
