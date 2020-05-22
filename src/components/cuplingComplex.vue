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
                        <th class="text-left">Nr</th>
                        <th class="text-left">Nmcms</th>
                        <th class="text-left">Nmcmd</th>
                        <th class="text-left">Nmcrms</th>
                        <th class="text-left">Nmcrmd</th>
                        <th class="text-left">Nrmcrms</th>
                        <th class="text-left">Nrmcrmd</th>
                        <th class="text-left">Nrmcms</th>
                        <th class="text-left">Nrmcmd</th>
                        <th class="text-left">Nmrgvs</th>
                        <th class="text-left">Nmrgvd</th>
                        <th class="text-left">Nrmrgvs</th>
                        <th class="text-left">Nrmrgvd</th>
                        <th class="text-left">Ccp</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="line in cordoutput[res-1].length" :key="line">
                        <td>{{line-1}}</td>
                        <td class="code">{{cordoutput[res-1][line-1]}}</td>
                        <td>{{Ccp[res-1][line-1][0]}}</td>
                        <td>{{Ccp[res-1][line-1][1]}}</td>
                        <td>{{Ccp[res-1][line-1][2]}}</td>
                        <td>{{Ccp[res-1][line-1][3]}}</td>
                        <td>{{Ccp[res-1][line-1][4]}}</td>
                        <td>{{Ccp[res-1][line-1][5]}}</td>
                        <td>{{Ccp[res-1][line-1][6]}}</td>
                        <td>{{Ccp[res-1][line-1][7]}}</td>
                        <td>{{Ccp[res-1][line-1][8]}}</td>
                        <td>{{Ccp[res-1][line-1][9]}}</td>
                        <td>{{Ccp[res-1][line-1][10]}}</td>
                        <td>{{Ccp[res-1][line-1][11]}}</td>
                        <td>{{Ccp[res-1][line-1][12]}}</td>
                        <td>{{Ccp[res-1][line-1][13]}}</td>

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
        name: "cuplingComplex",
        components: {},

        data: () => ({
            swap: false,
            link: 'mdi-link',
            result: [],
            cordoutput: [],
            filename: [],
            show: "",
            Ccp: []


        }),
        mounted: function () {
            // get file data ,file name and Ccp values from localStorage
            if (localStorage.fileindex) {
                for (let i = 0; i < localStorage.getItem("fileindex"); i++) {
                    this.result.push(localStorage.getItem(`filedata${i}`).toString().split("\n"))
                    this.cordoutput.push(localStorage.getItem(`filedata${i}`).toString().split("\n"));
                    this.filename.push(localStorage.getItem(`filedataNmae${i}`).toString());
                }
                this.show = localStorage.getItem(`filedataNmae${0}`).toString();
                console.log(JSON.parse(localStorage.getItem(`Ccp`).toString()));
                this.Ccp = JSON.parse(localStorage.getItem(`Ccp`).toString());

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