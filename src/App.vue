<template>
  <v-app id="inspire">

    <!-- dialog -->

  
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card id="card">
        <img src="./assets/confirm2.png" class="confirmImg">
        <v-card-title class="headline justify-center">Are you sure ?</v-card-title>
        <v-card-text>All your uploaded files and calculations are may lost.<br>please confirm</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
           <v-btn color="blue darken-1" text @click="dialog = false,confirmup=true">yes</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false,confirmup=false">no</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
 


    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app v-if="getnav">
      <v-list dense nav link >
        <!-- navigation list items -->

        <v-list-item id="upload">
          
            <v-list-item-content id="lic">
              <!-- <v-list-item-title>Upload</v-list-item-title> -->
              <v-btn class="ma-2 white--text"
              color="#000"
              id="button-upload"
              @click="upload"
              >
                Upload
                <v-icon right dark>mdi-cloud-upload</v-icon>
              </v-btn>
            </v-list-item-content>
        
        </v-list-item>
<v-list-item-group v-show="getsub">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-equal-box</v-icon>
          </v-list-item-icon>
          <router-link to="/totalComplex">
            <v-list-item-content>
              <v-list-item-title>Total complex</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-move-resize-variant</v-icon>
          </v-list-item-icon>
          <router-link to="/summery">
            <v-list-item-content>
              <v-list-item-title>size complex</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-tooltip-text</v-icon>
          </v-list-item-icon>
          <router-link to="/variableComplexity">
            <v-list-item-content>
              <v-list-item-title>Variable Complexity</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-code-braces</v-icon>
          </v-list-item-icon>
          <router-link to="/methodComplexity">
            <v-list-item-content>
              <v-list-item-title>Method Complexity</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-pipe-disconnected</v-icon>
          </v-list-item-icon>
          <router-link to="/cuplingComplex">
            <v-list-item-content>
              <v-list-item-title>cupling Complexity</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-google-controller</v-icon>
          </v-list-item-icon>
          <router-link to="/contolStructerComplex">
            <v-list-item-content>
              <v-list-item-title>contolStructer Complexity</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-file-tree</v-icon>
          </v-list-item-icon>
          <router-link to="/inheritanceComplex">
            <v-list-item-content>
              <v-list-item-title>inheritance Complexity</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
<br>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-chart-bar</v-icon>
          </v-list-item-icon>
          <router-link to="/bar">
            <v-list-item-content>
              <v-list-item-title>Bar chart </v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>

         <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-weight-gram</v-icon>
          </v-list-item-icon>
          <router-link to="/weight">
            <v-list-item-content>
              <v-list-item-title>Set custom weight </v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark id="nav">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 350px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Code Complexity measurement tool</span>
      </v-toolbar-title>

      <v-spacer />

      <v-btn icon large disabled>
        <v-img src="./assets/logo.svg" alt="Logo" class="logo"></v-img>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <transition name="fade" mode="out-in">
       <!-- <nofile v-if="this.$route.path !== '/' && !this.$store.state.files"></nofile> -->
            <router-view>
            </router-view>
            
          </transition>
        </v-row>
      </v-container>
    </v-content>
    <v-btn bottom color dark fab fixed right @click="upload" id="fab" v-if="getnav">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

  
  
    
  </v-app>
</template>

<script>
import router from "./router";
import {mapState , mapGetters , mapMutations} from 'vuex'
export default {
  props: {
    source: String
  },
  computed:{
    ...mapGetters([
      'getnav',
      'getsub'

    ]),
    ...mapState([
      'nav',
      'sub'
    ]),
},
 created(){
 
 if(performance.navigation.type == 1){
  this.setType(true)
  this.setSub(true)
 }

 
 

 },
 beforeMount() {


//     window.addEventListener("beforeunload", event => {

//       if(this.$route.path === '/'){
//      return
//    }else{
// event.preventDefault()
//       event.returnValue = "All of your uploaded files and calculations are may lost , please confirm"
//    }
     
     
//     })
  },



 
  data: () => ({
    
    confirmup:false,
    dialog: false,
    drawer: null,
    items: [
      { icon: "mdi-upload", text: "Upload your Source file", Route: "upload" },

      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Labels",
        model: true,
        children: [{ icon: "mdi-plus", text: "Create label" }]
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "More",
        model: false,
        children: [
          { text: "Import" },
          { text: "Export" },
          { text: "Print" },
          { text: "Undo changes" },
          { text: "Other contacts" }
        ]
      },
      { icon: "mdi-settings", text: "Settings" },
      { icon: "mdi-message", text: "Send feedback" },
      { icon: "mdi-help-circle", text: "Help" },
      { icon: "mdi-cellphone-link", text: "App downloads" },
      { icon: "mdi-keyboard", text: "Go to the old version" }
    ]
  }),
  watch:{
   confirmup:function(up){
      if(up == true){
      this.setType(false)
      router.push("/");
      
      
      this.confirmup =false;
       
      }else{
        
        this.setType(false)
          this.setSub(false)
      }
   }
  },

  
  methods: {

    test(){
      alert('')
    },
    upload() {
      this.dialog = !this.dialog
      
      
    },
     ...mapMutations([
      'setnav',
      'setsub'
    ]),
    setType: function(status) {
      this.setnav(status)
  
    },

    setSub: function(status) {
     this.setsub(status)
  
    },
    
  },
 
};
</script>

<style scoped>
.navtext {
  font-size: 15px !important;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.logo {
  transform: scale(1.6);
  float: right;
  position: absolute;
  right: 30px;
}

#fab {
  background-image: linear-gradient(
    180deg,
    #23c5da 0%,
    #5772a5 100%
  ) !important;
}

#nav {
  background: #258ad3 !important;
  /* box-shadow: none !important; */
}
#upload {
  text-align: center !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center;
  width: 100% !important;
  margin: 20px 0px 20px;
 
}

#lic{
  width: 100% !important;
  margin-right: 50px !important;
  padding-right:20px ;
}

#button-upload{
  width:50px !important;
  background-image: linear-gradient(
    10deg,
    #23c5da 0%,
    #5772a5 100%
  ) !important;
}

#card{
  text-align: center !important;
}

.confirmImg{
width: 94px !important;
justify-content: center !important;
align-items: center !important;
text-align: center !important;
margin-top:10px;
}
/* #nf{
  z-index:9999;
} */
</style>