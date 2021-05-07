import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'
import VueScrollTo from 'vue-scrollto'
import VueGoogleCharts from 'vue-google-charts'
import './Vue.scss'
import 'animate.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'sweetalert2/dist/sweetalert2.min.css'
/* Axios */
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAxios, axios)
// axios.defaults.headers.common.Accept = 'application/json'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueScrollTo)
Vue.use(VueGoogleCharts)

const options = {
  confirmButtonColor: '#000',
  cancelButtonColor: '#ff0000'
}

Vue.use(VueSweetalert2, options)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
