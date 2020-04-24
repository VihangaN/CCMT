<template>
    <div>
        <table>
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
            </tr>
            </thead>
            <tbody>
            <tr v-for="res in cordoutput.length" :key="res">
                <td>{{res-1}}</td>
                <td class="code">{{cordoutput[res-1]}}</td>
                <td>{{Nr[res-1]}}</td>
                <td>{{Nmcms[res-1]}}</td>
                <td>{{Nmcmd[res-1]}}</td>
                <td>{{Nmcrms[res-1]}}</td>
                <td>{{Nmcrmd[res-1]}}</td>
                <td>{{Nrmcrms[res-1]}}</td>
                <td>{{Nrmcrmd[res-1]}}</td>
                <td>{{Nrmcms[res-1]}}</td>

            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "cuplingComplex",
        components: {},

        data: () => ({
            swap: false,
            link: 'mdi-link',
            result: '',
            cordoutput: '',
            Nr: [],
            Nmcms: [],
            Nmcmd: [],
            Nmcrms: [],
            Nmcrmd: [],
            Nrmcrms: [],
            Nrmcrmd: [],
            Nrmcms: [],


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

                    this.Nr[i]=0; this.Nmcms[i]=0; this.Nmcmd[i]=0;this.Nmcrms[i]=0; this.Nmcrmd[i]=0; this.Nrmcrms[i]=0;this.Nrmcrmd[i]=0; this.Nrmcms[i]=0;

                    this.Nmcms[5] =1;this.Nmcms[7] =1;this.Nmcms[8] =1;this.Nmcms[17] =1;this.Nmcms[19] =1;this.Nmcms[20] =1;this.Nmcms[29] =1;this.Nmcms[30] =1;this.Nmcms[55] =1;
                    this.Nr[26] =1
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