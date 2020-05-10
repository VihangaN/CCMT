<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                :clipped="$vuetify.breakpoint.lgAndUp"
                app
        >
            <v-list dense nav>


                <!-- navigation list items -->

                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-upload</v-icon>
                    </v-list-item-icon>
                    <router-link to="/">
                    <v-list-item-content>
                        <v-list-item-title>Upload</v-list-item-title>
                    </v-list-item-content>
                    </router-link>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-upload</v-icon>
                    </v-list-item-icon>
                    <router-link to="/totalComplex">
                    <v-list-item-content>
                        <v-list-item-title>Total complex</v-list-item-title>
                    </v-list-item-content>
                    </router-link>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-upload</v-icon>
                    </v-list-item-icon>
                    <router-link to="/summery">
                        <v-list-item-content>
                            <v-list-item-title>size complex</v-list-item-title>
                        </v-list-item-content>
                    </router-link>

                </v-list-item>

                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-upload</v-icon>
                    </v-list-item-icon>
                    <router-link to="/variableComplexity">
                        <v-list-item-content>
                            <v-list-item-title>Variable Complexity</v-list-item-title>
                        </v-list-item-content>
                    </router-link>

                </v-list-item>

                <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-upload</v-icon>
                </v-list-item-icon>
                <router-link to="/methodComplexity">
                    <v-list-item-content>
                        <v-list-item-title>Method Complexity</v-list-item-title>
                    </v-list-item-content>
                </router-link>
            </v-list-item>

                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-upload</v-icon>
                    </v-list-item-icon>
                    <router-link to="/cuplingComplex">
                        <v-list-item-content>
                            <v-list-item-title>cupling Complexity</v-list-item-title>
                        </v-list-item-content>
                    </router-link>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-upload</v-icon>
                    </v-list-item-icon>
                    <router-link to="/contolStructerComplex">
                        <v-list-item-content>
                            <v-list-item-title>contolStructer Complexity</v-list-item-title>
                        </v-list-item-content>
                    </router-link>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-upload</v-icon>
                    </v-list-item-icon>
                    <router-link to="/inheritanceComplex">
                        <v-list-item-content>
                            <v-list-item-title>inheritance Complexity</v-list-item-title>
                        </v-list-item-content>
                    </router-link>
                </v-list-item>

            </v-list>
        </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark id="nav">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 350px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Code Complexity measurement tool</span>
      </v-toolbar-title>

      <v-spacer />

      <v-btn icon large disabled="">
        <v-img src="./assets/logo.svg" alt="Logo" class="logo"></v-img>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-row>
      </v-container>
    </v-content>
    <v-btn bottom color="" dark fab fixed right @click="upload" id="fab">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import router from "./router";
export default {
  props: {
    source: String
  },
  data: () => ({
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
  methods: {
    upload() {
      router.push("/");
    }
  }
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

#fab{
background-image: linear-gradient(180deg, #23C5DA 0%, #5772A5 100%) !important;
}

#nav{
    background: #258ad3 !important;
    /* box-shadow: none !important; */
}
</style>