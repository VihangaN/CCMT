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
                <h3>{{filename[res-1]}}</h3>
                <br>
                <table>
                    <thead>
                    <tr>
                        <th class="text-left">#</th>
                        <th class="text-left"></th>
                        <th class="text-left">Direct inherit</th>
                        <th class="text-left">Indirect inherit</th>
                        <th class="text-left">Total inherit</th>
                        <th class="text-left">Ci</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="line in cordoutput[res-1].length" :key="line">
                        <td>{{line-1}}</td>
                        <td class="code">{{cordoutput[res-1][line-1]}}</td>
                        <td>{{Ci[res-1][line-1][0]}}</td>
                        <td>{{Ci[res-1][line-1][1]}}</td>
                        <td>{{Ci[res-1][line-1][2]}}</td>
                        <td>{{Ci[res-1][line-1][3]}}</td>

                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import {Inheritance} from "../controller/Inheritance"

    export default {
        name: "inheritanceComplex",
        components: {},

        data: () => ({
            swap: false,
            link: 'mdi-link',
            result: [],
            cordoutput: [],
            filename: [],
            show: "",
            Ci: []
        }),
        mounted: function () {
            if (localStorage.fileindex) {
                for (let i = 0; i < localStorage.getItem("fileindex"); i++) {
                    this.result.push(localStorage.getItem(`filedata${i}`).toString().split("\n"))
                    this.cordoutput.push(localStorage.getItem(`filedata${i}`).toString().split("\n"));
                    this.filename.push(localStorage.getItem(`filedataNmae${i}`).toString());
                }
                this.show = localStorage.getItem(`filedataNmae${0}`).toString();
                this.Ci = JSON.parse(localStorage.getItem(`Ci`).toString());
                //this.getComplexity();
            }
        },
        methods: {
            getComplexity() {
                for (var i = 0; i < this.result.length; i++) {
                    this.Ndi[i] = Inheritance.Ndi(this.result[i]);
                    this.Nidi[i] = Inheritance.Nidi(this.result[i]);

                    /* this.Ndi[i]=0; this.Nidi[i]=0; this.Ti[i]=0;
                     this.Ndi[13]=1;
                     this.Ndi[25]=1; this.Nidi[25]=1;*/
                    this.Ci[i] = this.Ndi[i] + this.Nidi[i];
                    this.Ti[i] = this.Ci[i];
                }
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