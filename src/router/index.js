import Vue from 'vue'
import VueRouter from 'vue-router'
import Model from '../views/Model.vue'
import Parodias from '../components/Parodias/Index.vue'
import Fotos from '../components/Fotos/Index.vue'
import Contato from '../components/Contato/Index.vue'
import ClientForm from '../components/Contato/ClientForm.vue'
/*
import Chat from '../components/Contato/NewChat.vue'
import ChatAdm from '../components/Contato/ChatAdm.vue'
import Login from '../components/Contato/Login.vue' */
import Login from '../components/Contato/Login.vue'
import Clientes from '../components/Contato/TabelaClientes.vue'
import Parcerias from '../components/Parcerias/Index.vue'
import Entrevistas from '../components/Entrevistas/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Model',
    component: Model
  },
  {
    path: '/parodias',
    name: 'Parodias',
    component: Parodias
  },
  {
    path: '/fotos',
    name: 'Fotos',
    component: Fotos
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato
  },
  {
    path: '/parcerias',
    name: 'Parcerias',
    component: Parcerias
  },
  {
    path: '/entrevistas',
    name: 'Entrevistas',
    component: Entrevistas
  },
  {
    path: '/contato/formulario',
    name: 'Formulario',
    component: ClientForm
  },
  /*   {
    path: '/contato/register',
    name: 'Register',
    component: Formulario
  },
  {
    path: '/contato/login',
    name: 'Login',
    component: Login
  },
  */
  {
    path: '/contato/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/contato/clientes',
    name: 'Clientes',
    component: Clientes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
