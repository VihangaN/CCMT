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
                <td>{{Wtcs[res-1]}}</td>
                <td>{{NC[res-1]}}</td>
                <td>{{Ccspps[res-1]}}</td>
                <td>{{Ccs[res-1]}}</td>

            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "contolStructerComplex",
        components: {},

        data: () => ({
            swap: false,
            link: 'mdi-link',
            result: '',
            cordoutput: '',
            Wtcs: [],
            NC: [],
            Ccspps: [],
            Ccs: []
        }),
        mounted: function () {
            if (localStorage.filedata) {
                this.result = localStorage.getItem("filedata").toString().split("\n");
                this.cordoutput = localStorage.getItem("filedata").toString().split("\n");
                this.getComplexity();
            }
        },
        methods: {
            getComplexity(){
                for (var i = 0; i < this.result.length; i++) {
                    this.Wtcs[i] =0;this.NC[i]=0;this.Ccspps[i]=0;this.Ccs[i]=0;
                    this.Wtcs[32]=2; this.NC[32]=2;  this.Ccspps[32]=0
                    this.Wtcs[36]=2; this.NC[36]=1 ; this.Ccspps[36]=4
                    this.Wtcs[37]=1; this.NC[37]=1 ; this.Ccspps[37]=6
                    this.Wtcs[38]=1; this.NC[38]=1 ; this.Ccspps[38]=6
                    this.Wtcs[39]=1; this.NC[39]=1 ; this.Ccspps[39]=6
                    this.Wtcs[40]=1; this.NC[40]=1 ; this.Ccspps[40]=6
                    this.Wtcs[41]=1; this.NC[41]=1 ; this.Ccspps[41]=6
                    this.Wtcs[42]=1; this.NC[42]=1 ; this.Ccspps[42]=6
                    this.Wtcs[43]=1; this.NC[43]=1 ; this.Ccspps[43]=6
                    this.Wtcs[47] =1; this.NC[47] = 1;  this.Ccspps[47] =6
                    this.Wtcs[48]= 1; this.NC[48]= 1;  this.Ccspps[48]=6
                    this.Wtcs[49]= 1; this.NC[49]= 1;  this.Ccspps[49]=6
                    this.Wtcs[50]= 1; this.NC[50]= 1;  this.Ccspps[50]=6
                    this.Wtcs[54]= 1; this.NC[54]= 1;  this.Ccspps[54]= 6;
                    this.Wtcs[56]= 2; this.NC[56]= 1;  this.Ccspps[56]= 6;
                    this.Wtcs[60]= 2; this.NC[60]= 3;  this.Ccspps[60]= 8;
                    this.Wtcs[62]= 2; this.NC[62]= 1;  this.Ccspps[62]= 14;
                    this.Wtcs[71]=2; this.NC[71]=1;  this.Ccspps[71]=14;
                    this.Ccs[i] = (this.Wtcs[i] * this.NC[i] )+ this.Ccspps[i]
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