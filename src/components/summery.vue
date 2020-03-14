<template>
  <div class="notfound">
      <span id="wrong_place">Summery</span>
      <router-link to="/">
        <v-btn id="bhome"
      rounded
        color="#D44637"
       
        dark
       right
      >
       <v-icon left>mdi-home</v-icon>
        Back to home
      </v-btn>
      </router-link>
<v-icon id="icon">{{link}}</v-icon>
    
  </div>
</template>

<script>



export default {
  name: 'notfound',

  components: {

  },

  data: () => ({
   swap:false,
   link:'mdi-link',
  }),

  mounted: function () {
  window.setInterval(() => {
   if(this.swap == true){
        this.swap = false;
        this.link = 'mdi-link-variant'
   }
   else if(this.swap == false){
        this.swap = true;
         this.link = 'mdi-link'
   }
  
  }, 1000)
}

};
</script>

<style scoped>


.notfound{
    position:absolute;
    top:45%;
    left:50%;
    transform: translate(-50% , -50%)
}

#wrong_place{
     position:absolute;
    top:140%;
    width:300px;
    text-align:center;
    left:50%;
    transform: translate(-50% , -50%);
    font-size:20px;
}

#bhome{
     position:absolute;
    top:180%;
    width:180px;
    text-align:center;
    left:50%;
    transform: translate(-50% , -50%);
    
}

#icon{
    font-size:150px;
   
}

</style>>
