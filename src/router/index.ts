import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/saidalist',
    name: 'saidalist',

    component: () => import('../views/movimentacao/SaidaListView.vue')
  },
  {
    path: '/marca/lista',
    name: 'marcalist',

    component: () => import('../views/marca/MarcaListView.vue')
  },
  {
    path: '/registrarentrada',
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
    path: '/veiculolist',
    name: 'veiculolist',

    component: () => import('../views/veiculo/veiculoListView.vue')
  },
  {
    path: '/registrarveiculo',
    name: 'registrarveiculo',

    component: () => import('../views/veiculo/RegistrarVeiculo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
