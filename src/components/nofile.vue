<template>
  <div id="nofile">
    <img src="../assets/empty.svg" alt="">
    <h5>Please upload some files , the box is empty ! </h5>
    <br>
    <v-btn class="ma-2 white--text"
              color="#000"
              id="button-upload"
              @click="home"
              >
                Upload
                <v-icon right dark>mdi-cloud-upload</v-icon>
              </v-btn>
  </div>
</template>

<script>
import router from '../router'
export default {
name:'nofile',
methods:{
    home(){
        router.push('/')
    }
}
}
</script>

<style scoped>
#nofile{
    width:100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column !important;
  
  
}
img{
    width:150px
}
h5{
    margin-top:20px
}
</style>>
