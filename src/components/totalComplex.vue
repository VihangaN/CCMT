<template>
    <div>
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
            <tr v-for="res in cordoutput.length" :key="res">
                <td>{{res-1}}</td>
                <td class="code">{{cordoutput[res-1]}}</td>
                <td>{{Cs[res-1]}}</td>
                <td>{{Cv[res-1]}}</td>
                <td>{{Cm[res-1]}}</td>
                <td>{{Ci[res-1]}}</td>
                <td>{{Ccp[res-1]}}</td>
                <td>{{Ccs[res-1]}}</td>
                <td>{{TCps[res-1]}}</td>

            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "totalComplex",
        components: {},

        data: () => ({
            swap: false,
            link: 'mdi-link',
            result: '',
            cordoutput: '',
            Cs: [],
            Cv: [],
            Cm: [],
            Ci: [],
            Ccp: [],
            Ccs: [],
            TCps:[]
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

                    this.Cs[i]= 0 ;this.Cv[i]= 0 ; this.Cm[i]= 0 ; this.Ci[i]= 0 ; this.Ccp[i] = 0;this.Ccs[i] = 0;
                  this.TCps[i] =  this.Cs[i] + this.Cv[i] + this.Cm[i] + this.Ci[i] + this.Ccp[i] + this.Ccs[i];
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