import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery/dist/jquery'
import 'popper.js/dist/popper'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use (IconsPlugin)
Vue.use(Vuelidate)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')