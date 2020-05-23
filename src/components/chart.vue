<template>
    <div class="container">


        <barchart class="width"/>
        <br>
        <div id="progressbar" v-for="file in data" :key="file">
            <div id="title">
                {{file.name}}
            </div>
            <div class="box">


                <br>
                <div class="columns is-desktop">
                    <div class="column has-text-centered">

                        <v-progress-circular id="centered"
                                             :rotate="-90"
                                             :size="150"
                                             :width="20"
                                             :value=(file.Cs/file.TCps)*100
                                             color="primary"
                        >
                            <span id="num"> {{ file.Cs }}</span>
                        </v-progress-circular>
                        <br>

                        CS <span class="precent">{{((file.Cs/file.TCps)*100).toFixed()}}%</span>
                    </div>
                    <div class="column  has-text-centered">
                        <v-progress-circular id="centered"
                                             :rotate="-90"
                                             :size="150"
                                             :width="20"
                                             :value=(file.Cv/file.TCps)*100
                                             color="teal"
                        >
                            <span id="num"> {{ file.Cv }}</span>

                        </v-progress-circular>
                        <br>

                        CV <span class="precent">{{((file.Cv/file.TCps)*100).toFixed()}}%</span>
                    </div>
                    <div class="column  has-text-centered">
                        <v-progress-circular id="centered"
                                             :rotate="-90"
                                             :size="150"
                                             :width="20"
                                             :value=(file.Cm/file.TCps)*100
                                             color="orange"
                        >
                            <span id="num"> {{ file.Cm }}</span>
                        </v-progress-circular>
                        <br>
                        CM <span class="precent">{{((file.Cm/file.TCps)*100).toFixed()}}%</span>
                    </div>
                    <div class="column  has-text-centered">
                        <v-progress-circular id="centered"
                                             :rotate="-90"
                                             :size="150"
                                             :width="20"
                                             :value=(file.Ci/file.TCps)*100
                                             color="red"
                        >
                            <span id="num"> {{ file.Ci }}</span>
                        </v-progress-circular>
                        <br>
                        CI <span class="precent">{{((file.Ci/file.TCps)*100).toFixed()}}%</span>
                    </div>
                    <div class="column  has-text-centered">
                        <v-progress-circular id="centered"
                                             :rotate="-90"
                                             :size="150"
                                             :width="20"
                                             :value=(file.Ccp/file.TCps)*100
                                             color="pink"
                        >
                            <span id="num"> {{ file.Ccp }}</span>
                        </v-progress-circular>
                        <br>
                        CCP <span class="precent">{{((file.Ccp/file.TCps)*100).toFixed()}}%</span>
                    </div>
                    <div class="column  has-text-centered">
                        <v-progress-circular id="centered"
                                             :rotate="-90"
                                             :size="150"
                                             :width="20"
                                             :value=(file.Ccs/file.TCps)*100
                                             color="black"
                        >
                            <span id="num"> {{ file.Ccs }}</span>
                        </v-progress-circular>
                        <br>
                        CCS <span class="precent">{{((file.Ccs/file.TCps)*100).toFixed()}}%</span>
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
        components: {
            barchart
        },
        data() {
            return {
                data: JSON.parse(localStorage.getItem("summery_by_file")),
                value: 20,
                filename: 'tst'
            }


        },
        methods: {},

        created() {
            console.log(this.data);

        }
    };
</script>

<style scoped>
    .width {
        width: 70%;
    }

    .container {
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }

    .box {
        justify-content: space-around !important;
        width: 100%;
        align-items: center;
        display: flex !important;
    }

    #progressbar {
        width: 100% !important;
        margin-top: 20px;
    }

    .column {
        padding-bottom: 5px !important;
    }

    #title {
        margin: 0px 0px 10px 10px;

    }

    #num {
        font-weight: 600;
        font-size: 25px;
    }

    #centered {
        text-align: center;
        /*display: block;*/
    }

    .precent {
        background: orange;
        padding: 3px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        position: absolute;
        margin: -30px 0px 0px 20px;
        text-align: center;
        line-height: 35px;
        color: #fff;


    }

</style>