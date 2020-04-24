<template>
    <div>
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
            <tr v-for="res in cordoutput.length" :key="res">
                <td>{{res-1}}</td>
                <td class="code">{{cordoutput[res-1]}}</td>
                <td>{{Wmrt[res-1]}}</td>
                <td>{{Npdtp[res-1]}}</td>
                <td>{{Ncdtp[res-1]}}</td>
                <td>{{Cm[res-1]}}</td>

            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "methodComplexity",
        components: {},

        data: () => ({
            swap: false,
            link: 'mdi-link',
            result: '',
            cordoutput: '',
            Wmrt: [],
            Npdtp: [],
            Ncdtp: [],
            Cm: []
        }),
        mounted: function () {
            if (localStorage.filedata) {
                this.result = localStorage.getItem("filedata").toString().split("\n");
                this.cordoutput = localStorage.getItem("filedata").toString().split("\n");
                this.getComplexity();
            }
        },
        methods: {
            getComplexity() {
                for (var i = 0; i < this.result.length; i++) {
                    this.Wmrt[i] = 0, this.Npdtp[i] = 0, this.Ncdtp[i] = 0;
                    this.byparameters(this.result[i], i);
                    this.byreturntypes(this.result[i], i);
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
</style>