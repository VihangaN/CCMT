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
                        <th class="text-left">Cs</th>
                        <th class="text-left">Cv</th>
                        <th class="text-left">Cm</th>
                        <th class="text-left">Ci</th>
                        <th class="text-left">Ccp</th>
                        <th class="text-left">Ccs</th>
                        <th class="text-left">TCps</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="line in cordoutput[res-1].length" :key="line">
                        <td>{{line}}</td>
                        <td class="code">{{cordoutput[res-1][line-1]}}</td>
                        <td>{{0}}</td>
                        <td>{{0}}</td>
                        <td>{{0}}</td>
                        <td>{{0}}</td>
                        <td>{{0}}</td>
                        <td>{{0}}</td>
                        <td>{{0}}</td>

                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import {Size} from "../controller/Size";
    import {methods} from "../controller/methods";
    import {variables} from "../controller/variables";

    export default {
        name: "totalComplex",
        components: {},

        data: () => ({
            swap: false,
            link: 'mdi-link',
            result: [],
            cordoutput: [],
            filename: [],
            AllCs: [],
            AllCv: [],
            AllCm: [],
            AllCi: [],
            AllCcp: [],
            AllCcs: [],
            AllTCps: [],
            show: ""
        }),
        mounted: function () {
            if (localStorage.fileindex) {
                //   this.result = localStorage.getItem("filedata").toString().split("\n");

                for (let i = 0; i < localStorage.getItem("fileindex"); i++) {
                    this.result.push(localStorage.getItem(`filedata${i}`).toString().split("\n"))
                    this.cordoutput.push(localStorage.getItem(`filedata${i}`).toString().split("\n"));
                    this.filename.push(localStorage.getItem(`filedataNmae${i}`).toString());
                }
                this.show = localStorage.getItem(`filedataNmae${0}`).toString();
                console.log(this.result)
                console.log(this.constructor)
                console.log(this.filename);
                this.getComplexity();
            }
        },
        methods: {
            getComplexity() {
                for (var i = 0; i < this.result.length; i++) {
                    this.Cs(this.result[i])
                    this.Cm(this.result[i])
                    this.Cv(this.result[i])
                    //    this.TCps[i] = this.Cs[i] + this.Cv[i] + this.Cm[i] + this.Ci[i] + this.Ccp[i] + this.Ccs[i];
                }
            },
            Cs(file) {
                var fileCs = [];
                var Cs = [];
                var Nkw = [];
                var Nop = [];
                var Nnv = [];
                var Nsl = [];
                for (var i = 0; i < file.length; i++) {
                    var lineCs = [];
                    console.log(Size.getNkw(file[i]));
                    Nkw[i] = Size.getNkw(file[i])
                    Nnv[i] = Size.getNnv(file[i])
                    Nop[i] = Size.getNop(file[i])
                    Nsl[i] = Size.getNsl(file[i])

                    Cs[i] = Nkw[i] + 0 + Nop[i] + Nnv[i] + Nsl[i];
                    lineCs.push(Cs[i])
                    lineCs.push(Nkw[i])
                    lineCs.push(0)
                    lineCs.push(Nop[i])
                    lineCs.push(Nnv[i])
                    lineCs.push(Nsl[i])
                    fileCs.push(lineCs)
                }
                this.AllCs.push(fileCs);
                console.log(this.AllCs);
            },
            Cm(file) {
                var fileCm = [];
                var Wmrt = [];
                var Npdtp = [];
                var Ncdtp = [];
                var Cm = [];
                for (var i = 0; i < file.length; i++) {
                    var lineCm = [];
                    Wmrt[i] = methods.Wmrt(file[i])
                    Npdtp[i] = methods.Npdtp(file[i])
                    Ncdtp[i] = methods.Ncdtp(file[i]);
                    Cm[i] = Wmrt[i] + Npdtp[i] + Ncdtp[i];
                    lineCm.push(Wmrt[i])
                    lineCm.push(Npdtp[i])
                    lineCm.push(Ncdtp[i])
                    lineCm.push(Cm[i])
                    fileCm.push(lineCm)
                }
                this.AllCm.push(fileCm);
                console.log(this.AllCm);
            },
            Cv(file) {
                var fileCv = [];
                var Cv = [];
                var Wvs = [];
                var Npdtv = [];
                var Ncdtv = [];

                variables.classDetecter(file);
                variables.MethodsDetecter(file);

                for (var i = 0; i < file.length; i++) {
                    var lineCv = [];
                    Wvs[i] = 0; Npdtv[i] = 0; Ncdtv[i] = 0;
                    Wvs[i] = variables.Wvs(file[i], i);
                    Npdtv[i] = variables.Npdtv(file[i], i);
                    Ncdtv[i] = variables.Ncdtv(file[i], i);
                    Cv[i] = Wvs[i] * (Npdtv[i] + Ncdtv[i]);
                    lineCv.push(Wvs[i]);
                    lineCv.push(Npdtv[i]);
                    lineCv.push(Ncdtv[i]);
                    lineCv.push(Cv[i]);
                    fileCv.push(lineCv);
                }
                this.AllCv.push(fileCv)
                console.log(this.AllCv);
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