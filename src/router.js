import Vue from 'vue';
import Router from 'vue-router';
import home from './components/home.vue';
import summery from './components/summery.vue'

Vue.use(Router)
Vue.component('app-fileupload',home);
let router =  new Router({
    routes:[
       {path:'/' , component:home,props: true},
        {path:'/summery' , component:summery},
      
    ],
    mode:'history',
    linkExactActiveClass: 'active',
    
  });

  export default router;