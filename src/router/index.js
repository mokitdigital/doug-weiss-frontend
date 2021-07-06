import Vue from 'vue'
import VueRouter from 'vue-router'
import Parodias from '../views/Parodias/Index.vue'
import Fotos from '../views/Fotos/Index.vue'
import Contato from '../views/Contato/Index.vue'
import ClientForm from '../views/Contato/ClientForm.vue'
import Login from '../views/Contato/Login.vue'
import Clientes from '../views/Contato/TabelaClientes.vue'
import Parcerias from '../views/Parcerias/Index.vue'
import Entrevistas from '../views/Entrevistas/Index.vue'
import Index from '../views/Header.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
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
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      }
    }
  }
})

export default router
