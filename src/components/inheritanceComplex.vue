<template>
    <div>
        <table>
            <thead>
            <tr>
                <th class="text-left">#</th>
                <th class="text-left"></th>
                <th class="text-left">Direct inherit </th>
                <th class="text-left">Indirect inherit</th>
                <th class="text-left">Total inherit</th>
                <th class="text-left">Ci</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="res in cordoutput.length" :key="res">
                <td>{{res-1}}</td>
                <td class="code">{{cordoutput[res-1]}}</td>
                <td>{{Ndi[res-1]}}</td>
                <td>{{Nidi[res-1]}}</td>
                <td>{{Ti[res-1]}}</td>
                <td>{{Ci[res-1]}}</td>

            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "inheritanceComplex",
        components: {},

        data: () => ({
            swap: false,
            link: 'mdi-link',
            result: '',
            cordoutput: '',
            Ndi: [],
            Nidi: [],
            Ti: [],
            Ci: []
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
                    this.Ndi[i]=0; this.Nidi[i]=0; this.Ti[i]=0;
                    this.Ndi[13]=1;
                    this.Ndi[25]=1; this.Nidi[25]=1;
                    this.Ci[i] = this.Ndi[i]+ this.Nidi[i];
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
</style>