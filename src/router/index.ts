import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/saida/lista',
    name: 'saidalist',

    component: () => import('../views/movimentacao/SaidaListView.vue')
  },
  {
    path: '/marca/lista',
    name: 'marcalist',

    component: () => import('../views/marca/MarcaListView.vue')
  },
  {
    path: '/saida/formulario',
    name: 'registrarentrada',

    component: () => import('../views/movimentacao/RegistrarEntrada.vue')
  },
  {
    path: '/marca/formulario',
    name: 'registrarmarca',

    component: () => import('../views/marca/RegistrarMarca.vue')
  },
  {
    path: '/modelo/lista',
    name: 'modelolist',

    component: () => import('../views/modelo/ModeloListView.vue')
  },
  {
    path: '/modelo/formulario',
    name: 'registrarmodelo',

    component: () => import('../views/modelo/RegistrarModelo.vue')
  },
  {
    path: '/condutor/lista',
    name: 'condutorlist',

    component: () => import('../views/condutor/CondutorListView.vue')
  },
  {
    path: '/condutor/formulario',
    name: 'registrarcondutor',

    component: () => import('../views/condutor/RegistrarCondutor.vue')
  },
  {
    path: '/veiculo/lista',
    name: 'veiculolist',

    component: () => import('../views/veiculo/veiculoListView.vue')
  },
  {
    path: '/veiculo/formulario',
    name: 'registrarveiculo',

    component: () => import('../views/veiculo/RegistrarVeiculo.vue')
  },
  {
    path: '/marca/editar/:id',
    name: 'marcaeditar',

    component: () => import('../views/marca/AtualizarMarca.vue')
  },
  {
    path: '/veiculo/editar/:id',
    name: 'veiculoeditar',

    component: () => import('../views/veiculo/AtualizarVeiculo.vue')
  },
  {
    path: '/modelo/editar/:id',
    name: 'modeloeditar',

    component: () => import('../views/modelo/AtualizarModelo.vue')
  },
  {
    path: '/condutor/editar/:id',
    name: 'condutoreditar',

    component: () => import('../views/condutor/AtualizarCondutor.vue')
  },
  {
    path: '/saida/editar/:id',
    name: 'saidaeditar',

    component: () => import('../views/movimentacao/AtualizarMovimentacao.vue')
  },
  {
    path: '/ajuste/lista',
    name: 'ajustelist',

    component: () => import('../views/ajuste/AjusteListView.vue')
  },
  {
    path: '/ajuste/editar/:id',
    name: 'ajusteeditar',

    component: () => import('../views/ajuste/AtualizarAjuste.vue')
  },
  {
    path: '/ajuste/formulario',
    name: 'ajusteformulario',

    component: () => import('../views/ajuste/RegistrarAjuste.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
