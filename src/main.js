import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from "@fortawesome/fontawesome-svg-core";


import {
  faBookmark
} from "@fortawesome/free-solid-svg-icons";

library.add(faBookmark);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  BootstrapVue,
  render: h => h(App)
}).$mount('#app')
