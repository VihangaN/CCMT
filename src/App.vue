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
                    <router-link to="/summery">
                        <v-list-item-content>
                            <v-list-item-title>Cs</v-list-item-title>
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

            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                :clipped-left="$vuetify.breakpoint.lgAndUp"
                app
                color="blue darken-3"
                dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title
                    style="width: 350px"
                    class="ml-0 pl-4"
            >
                <span class="hidden-sm-and-down">Code Complexity measurement tool</span>
            </v-toolbar-title>

            <v-spacer/>
            <v-btn icon>
                <v-icon>mdi-apps</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-bell</v-icon>
            </v-btn>
            <v-btn
                    icon
                    large
            >
                <v-avatar
                        size="32px"
                        item
                >
                    <v-img
                            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
                            alt="Vuetify"
                    />
                </v-avatar>
            </v-btn>
        </v-app-bar>
        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >


                    <router-view></router-view>


                </v-row>
            </v-container>
        </v-content>
        <v-btn
                bottom
                color="pink"
                dark
                fab
                fixed
                right
                @click="dialog = !dialog"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-dialog
                v-model="dialog"
                width="800px"
        >
            <v-card>
                <v-card-title class="grey darken-2">
                    Create contact
                </v-card-title>
                <v-container>
                    <v-row class="mx-2">
                        <v-col
                                class="align-center justify-space-between"
                                cols="12"
                        >
                            <v-row
                                    align="center"
                                    class="mr-0"
                            >
                                <v-avatar
                                        size="40px"
                                        class="mx-3"
                                >
                                    <img
                                            src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                                            alt=""
                                    >
                                </v-avatar>
                                <v-text-field
                                        placeholder="Name"
                                />
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                    prepend-icon="mdi-account-card-details-outline"
                                    placeholder="Company"
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                    placeholder="Job title"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                    prepend-icon="mdi-mail"
                                    placeholder="Email"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                    type="tel"
                                    prepend-icon="mdi-phone"
                                    placeholder="(000) 000 - 0000"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                    prepend-icon="mdi-text"
                                    placeholder="Notes"
                            />
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions>
                    <v-btn
                            text
                            color="primary"
                    >More
                    </v-btn>
                    <v-spacer/>
                    <v-btn
                            text
                            color="primary"
                            @click="dialog = false"
                    >Cancel
                    </v-btn>
                    <v-btn
                            text
                            @click="dialog = false"
                    >Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            dialog: false,
            drawer: null,
            items: [
                {icon: 'mdi-upload', text: 'Upload your Source file', Route: 'upload'},

                {
                    icon: 'mdi-chevron-up',
                    'icon-alt': 'mdi-chevron-down',
                    text: 'Labels',
                    model: true,
                    children: [
                        {icon: 'mdi-plus', text: 'Create label'},
                    ],
                },
                {
                    icon: 'mdi-chevron-up',
                    'icon-alt': 'mdi-chevron-down',
                    text: 'More',
                    model: false,
                    children: [
                        {text: 'Import'},
                        {text: 'Export'},
                        {text: 'Print'},
                        {text: 'Undo changes'},
                        {text: 'Other contacts'},
                    ],
                },
                {icon: 'mdi-settings', text: 'Settings'},
                {icon: 'mdi-message', text: 'Send feedback'},
                {icon: 'mdi-help-circle', text: 'Help'},
                {icon: 'mdi-cellphone-link', text: 'App downloads'},
                {icon: 'mdi-keyboard', text: 'Go to the old version'},
            ],
        }),
    }
</script>