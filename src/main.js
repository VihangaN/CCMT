import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import nofiles from './components/nofile.vue'

// Vue.prototype.$nav =false;
Vue.config.productionTip = false;
Vue.use(Buefy)
Vue.component('nofile',nofiles)


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
