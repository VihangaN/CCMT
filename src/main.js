import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false;
Vue.use(Buefy)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
