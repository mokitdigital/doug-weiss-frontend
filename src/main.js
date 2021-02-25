import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'
import VueScrollTo from 'vue-scrollto'

import './Vue.scss'
import 'animate.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'sweetalert2/dist/sweetalert2.min.css'

/* Axios */
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'https://doug-weiss-backend.vercel.app/'
// axios.defaults.headers.common.Accept = 'application/json'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueScrollTo)

const options = {
  confirmButtonColor: '#000',
  cancelButtonColor: '#fff'
}

Vue.use(VueSweetalert2, options)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
