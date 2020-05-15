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
    import {methods} from "../controller/methods";

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
            if (localStorage.fileindex) {
                for (let i = 0; i < localStorage.getItem("fileindex"); i++) {
                    this.result.push(localStorage.getItem(`filedata${i}`).toString().split("\n"))
                    this.cordoutput.push(localStorage.getItem(`filedata${i}`).toString().split("\n"));
                    this.filename.push(localStorage.getItem(`filedataNmae${i}`).toString());
                }
                this.show = localStorage.getItem(`filedataNmae${0}`).toString();
                this.Cm = JSON.parse(localStorage.getItem(`Cm`).toString());
                //this.getComplexity();
            }
        },
        methods: {
            getComplexity() {
                for (var i = 0; i < this.result.length; i++) {
                    this.Wmrt[i] = 0, this.Npdtp[i] = 0, this.Ncdtp[i] = 0;
                    this.Wmrt[i] = methods.Wmrt(this.result[i])
                    this.Npdtp[i] = methods.Npdtp(this.result[i])
                    this.Ncdtp[i] = methods.Ncdtp(this.result[i]);
                    this.Cm[i] = this.Wmrt[i] + this.Npdtp[i] + this.Ncdtp[i];
                }
            },
            byreturntypes(line, i) {
                var metherdpatrn = new RegExp("((public|private|protected|static|final|native|synchronized|abstract|transient)+\\s)+[\\$_\\w\\<\\>\\w\\s\\[\\]]*\\s+[\\$_\\w]+\\([^\\)]*\\)?\\s*");
                if (line.match(metherdpatrn)) {
                    var codeline = line;
                    codeline = codeline.split("(");
                    // console.log(codeline[0]);
                    if (codeline[0].match(/(\bboolean\s\b)|(\bbool\s\b)|(\blong\s\b)|(\bbyte\s\b)|(\bshort\s\b)|(\bdouble\s\b)|(\bint\s\b)|(\bfloat\s\b)|(\bstring\s\b)|(\bString\s\b)|(\bchar\s\b)/g)) {
                        this.Wmrt[i] = 1
                    } else if (codeline[0].match(/(\bvoid\s\b)/g)) {
                        this.Wmrt[i] = 0
                    } else {
                        this.Wmrt[i] = 2
                    }
                }

            },
            byparameters(line, i) {
                var metherdpatrn = new RegExp("((public|private|protected|static|final|native|synchronized|abstract|transient)+\\s)+[\\$_\\w\\<\\>\\w\\s\\[\\]]*\\s+[\\$_\\w]+\\([^\\)]*\\)?\\s*");
                if (line.match(metherdpatrn)) {
                    var codeline = line;
                    codeline = codeline.split(/\(|\)/g);
                    console.log(codeline);
                    if (codeline[1] != "") {
                        var words = codeline[1].split(" ");
                        for (var j = 0; j < words.length; j++) {

                            if (words[j].match(/(\bboolean\s\b)|(\bbool\s\b)|(\blong\s\b)|(\bbyte\s\b)|(\bshort\s\b)|(\bdouble\s\b)|(\bint\s\b)|(\bfloat\s\b)|(\bstring\s\b)|(\bString\s\b)|(\bchar\s\b)/g)) {
                                this.Npdtp[i] = 1;
                            } else {
                                this.Ncdtp[i] = 2;
                            }
                        }
                    }
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