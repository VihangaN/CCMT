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
                <br>
                <h3>{{filename[res-1]}} 
                  <b-button type="is-info">Print</b-button>
                
                </h3> 
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
                        <td>{{AllTCps[res-1][line-1][0]}}</td>
                        <td>{{AllTCps[res-1][line-1][1]}}</td>
                        <td>{{AllTCps[res-1][line-1][2]}}</td>
                        <td>{{AllTCps[res-1][line-1][3]}}</td>
                        <td>{{AllTCps[res-1][line-1][4]}}</td>
                        <td>{{AllTCps[res-1][line-1][5]}}</td>
                        <td>{{AllTCps[res-1][line-1][6]}}</td>

                    </tr>
                    <tr>
                        <td colspan="8"><b>Total</b></td>
                        <td>{{Total[res-1]}}</td>
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
    import {Inheritance} from "../controller/Inheritance";
    import {Controlstructures} from "../controller/Controlstructures";

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
            Total: [],
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
                    this.Cs(this.result[i]);
                    this.Cm(this.result[i]);
                    this.Cv(this.result[i]);
                    this.Ci(this.result[i]);
                    this.Ccs(this.result[i]);
                    this.TCps(i);
                }
                localStorage.setItem(`Cs`,JSON.stringify(this.AllCs));
                localStorage.setItem(`Cv`,JSON.stringify(this.AllCv));
                localStorage.setItem(`Cm`,JSON.stringify(this.AllCm));
                localStorage.setItem(`Ci`,JSON.stringify(this.AllCi));
                localStorage.setItem(`Ccs`,JSON.stringify(this.AllCcs));
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
                    lineCs.push(Nkw[i])
                    lineCs.push(0)
                    lineCs.push(Nop[i])
                    lineCs.push(Nnv[i])
                    lineCs.push(Nsl[i])
                    lineCs.push(Cs[i])
                    fileCs.push(lineCs)
                }
                this.AllCs.push(fileCs);
              //  console.log(this.AllCs);
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
               // console.log(this.AllCm);
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
                    Wvs[i] = 0;
                    Npdtv[i] = 0;
                    Ncdtv[i] = 0;
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
              //  console.log(this.AllCv);
            },
            Ci(file) {
                var fileCi = [];
                var Ci = [];
                var Ndi = [];
                var Nidi = [];
                var Ti = []
                Inheritance.classnamesIdenfy(file);
                for (var i = 0; i < file.length; i++) {
                    var lineCi = [];
                    Ndi[i] = Inheritance.Ndi(file[i]);
                    Nidi[i] = Inheritance.Nidi(file[i]);
                    Ti[i] = Ndi[i]+Nidi[i];
                    Ci[i] = Inheritance.Ci(Ti[i]);

                    lineCi.push(Ndi[i])
                    lineCi.push(Nidi[i])
                    lineCi.push(Ti[i])
                    lineCi.push(Ci[i])
                    fileCi.push(lineCi)
                }
                this.AllCi.push(fileCi)
               // console.log(this.AllCi);
            },
            Ccs(file) {
                var fileCcs = [];
                var Wtcs = [i];
                var NC = [];
                var Ccspps = [];
                var Ccs = [];
                for (var i = 0; i < file.length; i++) {
                    var lineCcs = [];
                    Wtcs[i] = 0;
                    NC[i] = 0;
                    Ccspps[i] = 0;
                    Ccs[i] = 0;
                    Wtcs[i] = Controlstructures.wtcs(file[i]);
                    NC[i] = Controlstructures.NC(file[i]);
                    Ccs[i] = (Wtcs[i] * NC[i]) + Ccspps[i]
                    lineCcs.push(Wtcs[i])
                    lineCcs.push(NC[i])
                    lineCcs.push(Ccspps[i])
                    lineCcs.push(Ccs[i])
                    fileCcs.push(lineCcs)
                }
                this.AllCcs.push(fileCcs);
               // console.log(this.AllCcs);
            },
            TCps(i) {
                var Cs = this.AllCs[i]
                var Cv = this.AllCv[i]
                var Cm = this.AllCm[i]
                var Ci = this.AllCi[i]
                var Ccs = this.AllCcs[i]
                var fileTCps=[];
                var total =0;
                for (let j = 0; j < Cs.length ; j++) {
                    var lineTCps=[];
                    var s = Cs[j];
                    var v = Cv[j];
                    var m = Cm[j];
                    var inh = Ci[j];
                    var cs = Ccs[j];
                  //  var  = Cs[j];
                    lineTCps.push(s[s.length-1])
                    lineTCps.push(v[v.length-1])
                    lineTCps.push(m[m.length-1])
                    lineTCps.push(inh[inh.length-1])
                    lineTCps.push(0)
                    lineTCps.push(cs[cs.length-1])
                    var TCps = s[s.length-1]+v[v.length-1]+m[m.length-1]+inh[inh.length-1]+0+cs[cs.length-1]
                    lineTCps.push(TCps);
                    total = total+TCps;
                    fileTCps.push(lineTCps)
                }
                this.AllTCps.push(fileTCps);
                this.Total.push(total);
                console.log(this.AllTCps);
                console.log(this.Total);
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