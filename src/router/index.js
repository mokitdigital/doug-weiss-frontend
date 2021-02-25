import Vue from 'vue'
import VueRouter from 'vue-router'
import Model from '../views/Model.vue'
import Parodias from '../components/Parodias/Index.vue'
import Fotos from '../components/Fotos/Index.vue'
import Contato from '../components/Contato/Index.vue'
import Formulario from '../components/Contato/Formulario.vue'
import Chat from '../components/Contato/Chat.vue'
import ChatAdm from '../components/Contato/ChatAdm.vue'
import Login from '../components/Contato/Login.vue'
import Parcerias from '../components/Parcerias/Index.vue'

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
    path: '/contato/register',
    name: 'Register',
    component: Formulario
  },
  {
    path: '/contato/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/contato/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/contato/administrador',
    name: 'Administrador',
    component: ChatAdm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
