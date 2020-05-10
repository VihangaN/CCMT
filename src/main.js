import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

// Vue.prototype.$nav =false;
Vue.config.productionTip = false;
Vue.use(Buefy)



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
