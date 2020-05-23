<template>
  <div class="container">

    
<barchart class="width" />
<br>
<div id="progressbar">
  <div id="title">
      {{filename}}
  </div>
<div class="box">
 



<br>
      <div class="columns is-desktop">
  <div class="column has-text-centered">
      
      <v-progress-circular
        :rotate="-90"
        :size="150"
        :width="20"
        :value="value"
        color="primary"
      >
        {{ value }}
       
        45
      </v-progress-circular>
       <br>
   
   CS
  </div>
  <div class="column  has-text-centered">
      <v-progress-circular
        :rotate="-90"
        :size="150"
        :width="20"
        :value="value"
        color="teal"
      >
        {{ value }}
        45
      </v-progress-circular>
       <br>
     
      CV
  </div>
  <div class="column  has-text-centered">  
    <v-progress-circular
        :rotate="-90"
        :size="150"
        :width="20"
        :value="value"
        color="orange"
      >
        {{ value }}
        45
      </v-progress-circular>
       <br>
      CN
      </div>
  <div class="column  has-text-centered">  
    <v-progress-circular
        :rotate="-90"
        :size="150"
        :width="20"
        :value="value"
        color="red"
      >
        {{ value }}
        45
      </v-progress-circular>
       <br>
      CI
      </div>
      <div class="column  has-text-centered">  
    <v-progress-circular
        :rotate="-90"
        :size="150"
        :width="20"
        :value="value"
        color="pink"
      >
        {{ value }}
        45
      </v-progress-circular>
       <br>
      CCP
      </div>
      <div class="column  has-text-centered">  
    <v-progress-circular
        :rotate="-90"
        :size="150"
        :width="20"
        :value="value"
        color="black"
      >
        {{ value }}
        45
      </v-progress-circular>
       <br>
      CCS
      </div>
</div>

</div>
    </div>

 </div>
</template>

<script>

import barchart from "./barchart"

export default {
  name: "chart",
  components:{
  barchart
  },
  data() {
    return {
      value:20,
      filename:'tst'
    }
 
   
  },
  methods: {
  
   
  },

  created() {
   

  }
};
</script>

<style scoped>
.width{
    width:70%;
}

.container{
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.box{
    justify-content: space-around !important;
    width:100%;
    align-items: center;
    display: flex !important;
}

#progressbar{
    width:100% !important;
    margin-top:20px;
}

.column{
  padding-bottom:5px !important;
}

#title{
  margin:0px 0px 10px 10px;

}

</style>