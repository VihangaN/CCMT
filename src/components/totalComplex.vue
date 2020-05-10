<template>
    <div>

        <div id="miniMenu">


            <div v-for="filen in filename.length" :key="filen">
                <button id="menubtn" @click="show = filename[filen-1]">{{filename[filen-1]}}</button>

            </div>
            <br><hr>
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
                        <td>{{Cs[line-1]}}</td>
                        <td>{{Cv[line-1]}}</td>
                        <td>{{Cm[line-1]}}</td>
                        <td>{{Ci[line-1]}}</td>
                        <td>{{Ccp[line-1]}}</td>
                        <td>{{Ccs[line-1]}}</td>
                        <td>{{TCps[line-1]}}</td>

                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "totalComplex",
        components: {},

        data: () => ({
            swap: false,
            link: 'mdi-link',
            result: [],
            cordoutput: [],
            filename: [],
            Cs: [],
            Cv: [],
            Cm: [],
            Ci: [],
            Ccp: [],
            Ccs: [],
            TCps: [],
            show:""
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

                    this.TCps[i] = this.Cs[i] + this.Cv[i] + this.Cm[i] + this.Ci[i] + this.Ccp[i] + this.Ccs[i];
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

    #menubtn{
        outline: none;
        border-radius: 5px;
        color:#fff;
        background: #258ad3;
        height:40px;
        margin-left:10px;
        padding: 5px 8px 5px 8px;
    }
    #miniMenu{
        display: flex;
        align-items: center;
        width:100%;
        justify-content: center;

    }
</style>