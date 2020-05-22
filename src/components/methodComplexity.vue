<template>
    <div>

        <div id="miniMenu">


            <div v-for="filen in filename.length" :key="filen">
                <button id="menubtn" @click="show = filename[filen-1]">{{filename[filen-1]}}</button>

            </div>
            <br>
            <hr>
        </div>
        <div v-for="res in cordoutput.length" :key="res">

            <div :id="filename[res-1]" v-if="show == filename[res-1]">
                <h3>{{filename[res-1]}}
                    <b-button type="is-info" @click="print('print'+filename[res-1])">Print</b-button>

                </h3>
                <br>
                <table :id="'print'+filename[res-1]" class="printBg">
                    <thead>
                    <tr>
                        <th class="text-left">#</th>
                        <th class="text-left"></th>
                        <th class="text-left">Wmrt</th>
                        <th class="text-left">Npdtp</th>
                        <th class="text-left">Ncdtp</th>
                        <th class="text-left">Cm</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="line in cordoutput[res-1].length" :key="line">
                        <td>{{line-1}}</td>
                        <td class="code">{{cordoutput[res-1][line-1]}}</td>
                        <td>{{Cm[res-1][line-1][0]}}</td>
                        <td>{{Cm[res-1][line-1][1]}}</td>
                        <td>{{Cm[res-1][line-1][2]}}</td>
                        <td>{{Cm[res-1][line-1][3]}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>


    import htmlToImage from "html-to-image";
    import download from "downloadjs";

    export default {
        name: "methodComplexity",
        components: {},

        data: () => ({
            swap: false,
            link: 'mdi-link',
            result: [],
            cordoutput: [],
            filename: [],
            show: "",
            Cm: []
        }),
        mounted: function () {
            // get file data ,file name and Cm values from localStorage
            if (localStorage.fileindex) {
                for (let i = 0; i < localStorage.getItem("fileindex"); i++) {
                    this.result.push(localStorage.getItem(`filedata${i}`).toString().split("\n"))
                    this.cordoutput.push(localStorage.getItem(`filedata${i}`).toString().split("\n"));
                    this.filename.push(localStorage.getItem(`filedataNmae${i}`).toString());
                }
                this.show = localStorage.getItem(`filedataNmae${0}`).toString();
                this.Cm = JSON.parse(localStorage.getItem(`Cm`).toString());

            }
        },
        methods: {
            print(id) {
                htmlToImage.toPng(document.getElementById(id))
                    .then(function (dataUrl) {
                        download(dataUrl, new Date().toLocaleString() + " " + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
                    });
            }
        }
    }

</script>

<style scoped>
    table {
        font-family: arial;
        width: 100%;
        border-spacing: 15px;
        border: 1px solid black;
        border-collapse: collapse;
    }

    th {
        border: 1px solid black;
        padding: 15px;
        background-color: #dddddd;
    }

    td {
        border: 1px solid black;
        text-align: center;
        padding: 8px;
    }

    td.code {
        border: 1px solid black;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(odd) {
        background-color: #eee;
    }

    tr:nth-child(even) {
        background-color: #fff;
    }

    .printBg {
        background-color: #fff;
    }

    #menubtn {
        outline: none;
        border-radius: 5px;
        color: #fff;
        background: #258ad3;
        height: 40px;
        margin-left: 10px;
        padding: 5px 8px 5px 8px;
    }

    #miniMenu {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;

    }
</style>