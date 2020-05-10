import Vue from 'vue';
import Router from 'vue-router';
import home from './components/home.vue';
import summery from './components/summery.vue'
import variableComplexity from './components/variableComplexity.vue'
import methodComplexity from './components/methodComplexity.vue'
import cuplingComplex from './components/cuplingComplex.vue'
import inheritanceComplex from './components/inheritanceComplex.vue'
import contolStructerComplex from './components/contolStructerComplex.vue'
import totalComplex from './components/totalComplex.vue'
import weight from './components/weight.vue'

Vue.use(Router)

Vue.component('app-fileupload',home);
let router =  new Router({
    routes:[
       {path:'/' , component:home,props: true},
        {path:'/summery' , component:summery},
        {path:'/variableComplexity' , component:variableComplexity},
        {path:'/methodComplexity' , component:methodComplexity},
        {path:'/cuplingComplex' , component:cuplingComplex},
        {path:'/inheritanceComplex' , component:inheritanceComplex},
        {path:'/contolStructerComplex' , component:contolStructerComplex},
        {path:'/totalComplex' , component:totalComplex},
        {path:'/weight' , component:weight},

    ],
    mode:'history',
    linkExactActiveClass: 'active',

   
    
  });

  

  export default router;