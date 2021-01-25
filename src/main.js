import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueAxios, axios);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


