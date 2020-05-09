<template>
    <div>
        <table>
            <thead>
            <tr>
                <th class="text-left">#</th>
                <th class="text-left"></th>
                <th class="text-left">Wtcs</th>
                <th class="text-left">NC</th>
                <th class="text-left">Ccspps</th>
                <th class="text-left">Ccs</th>
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
    import  {Controlstructures} from "../controller/Controlstructures"
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
                    this.Wtcs[i] = Controlstructures.wtcs(this.result[i]);
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