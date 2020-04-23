<template>
    <div>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">#</th>
                    <th class="text-left"></th>
                    <th class="text-left">Wvs</th>
                    <th class="text-left">Npdtv</th>
                    <th class="text-left">Ncdtv</th>
                    <th class="text-left">Cv</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="res in cordoutput.length" :key="res">
                    <td>{{res-1}}</td>
                    <td>{{cordoutput[res-1]}}</td>
                    <td>{{Wvs[res-1]}}</td>
                    <td>{{Npdtv[res-1]}}</td>
                    <td>{{Ncdtv[res-1]}}</td>
                    <td>{{Cv[res-1]}}</td>

                </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
    export default {
        components: {},

        data: () => ({
            swap: false,
            link: 'mdi-link',
            result: '',
            cordoutput: '',
            Wvs: [],
            Npdtv: [],
            Ncdtv: [],
            Cv: [],
            methedstart: [],
            methedend: [],
            classlenth: []
        }), mounted: function () {
            if (localStorage.filedata) {
                this.result = localStorage.getItem("filedata").toString().split("\n");
                this.cordoutput = localStorage.getItem("filedata").toString().split("\n");
                this.getComplexity();
            }
        },
        methods: {
            getComplexity() {
                this.classDetecter();
                this.MethodsDetecter();


                for (var i = 0; i < this.result.length; i++) {
                    this.Wvs[i] = 0, this.Npdtv[i] = 0, this.Ncdtv[i] = 0;
                    this.getPrimitive(this.result[i], i);
                    this.getglobalvariable(this.result[i], i);
                    this.getlocalvariable(this.result[i], i);
                    this.Cv[i] = this.Wvs[i] + this.Npdtv[i] + this.Ncdtv[i];

                }


                console.log(this.Wvs)
            },
            getPrimitive(line, i) {
                this.Npdtv[i] = 0;
                var variableIdentifier = /(?<=(\bboolean\s\b)|(\bbool\s\b)|(\blong\s\b)|(\bbyte\s\b)|(\bshort\s\b)|(\bdouble\s\b)|(\bint\s\b)|(\bfloat\s\b)|(\bstring\s\b)|(\bString\s\b)|(\bchar\s\b))(\w*)/g;
                var multiVariableIdentifier = /(?<=(\bboolean\s\b)|(\bbool\s\b)|(\blong\s\b)|(\bbyte\s\b)|(\bshort\s\b)|(\bdouble\s\b)|(\bint\s\b)|(\bfloat\s\b)|(\bstring\s\b)|(\bString\s\b)|(\bchar\s\b))(\w*(,(.*)))(?=;)/g
                var newPattern = /(new)+\s\w+/g;

                console.log(line.match(multiVariableIdentifier));
                if (line.match(multiVariableIdentifier) && !line.match(/(\[|\]|<|>)/g)) {
                    var variablestart = /^.+(?<=(\bboolean\s\b)|(\bbool\s\b)|(\blong\s\b)|(\bbyte\s\b)|(\bshort\s\b)|(\bdouble\s\b)|(\bint\s\b)|(\bfloat\s\b)|(\bstring\s\b)|(\bString\s\b)|(\bchar\s\b))/g
                    var variableend = /=.+/g;

                    var multiVariable = line;
                    multiVariable = multiVariable.replace(variablestart, "");
                    multiVariable = multiVariable.replace(variableend, "");
                    multiVariable = multiVariable.trim().split(",");
                    this.Npdtv[i] = this.Npdtv[i] + multiVariable.length;
                }
                else if (line.match(newPattern)) {
                    this.Ncdtv[i] = 2;
                } else if (line.match(variableIdentifier) && !line.match(/(\[|\]|<|>)/g)) {
                    if (!line.match(/for/g)) {
                        this.Npdtv[i] = 1
                    }
                }
            },
            getglobalvariable(line, i){
                var vriable1 = /(?<=(\bboolean\s\b)|(\bbool\s\b)|(\blong\s\b)|(\bbyte\s\b)|(\bshort\s\b)|(\bdouble\s\b)|(\bint\s\b)|(\bfloat\s\b)|(\bstring\s\b)|(\bString\s\b)|(\bchar\s\b))(\w.*);/g;
                var vriable2 = /(?<=(\bprivate\s\b))(\w*)(\w.*);/g;
              //  var methad = this.result;

                    if(i >= this.classlenth[0] && i <= this.methedstart[0]){

                        if(line.match(vriable1)){
                            this.Wvs[i]  = 2;
                        } else if(line.match(vriable2)){
                            this.Wvs[i]  = 2;
                        }
                    }



            },
            getlocalvariable(line, i){
                var vriable1 = /(?<=(\bboolean\s\b)|(\bbool\s\b)|(\blong\s\b)|(\bbyte\s\b)|(\bshort\s\b)|(\bdouble\s\b)|(\bint\s\b)|(\bfloat\s\b)|(\bstring\s\b)|(\bString\s\b)|(\bchar\s\b))(\w.*);/g;
                var vriable2 = /(?<=(\bprivate\s\b))(\w*)(\w.*);/g;
                for (var j = 0; j < this.methedstart.length; j++) {

                    if(i >= this.methedstart[j] && i <= this.methedend[j]){

                        if(line.match(vriable1)){
                            this.Wvs[i]  = 1;
                        } else if(line.match(vriable2)){
                            this.Wvs[i]  = 1;
                        }
                    }

                }

            },

            classDetecter() {

                let startBracket = null, lastBracket = null, bracket = [];

                for (var i = 0; i < this.result.length; i++) {
                    if (this.result[i].match(/{/g)) {
                        if (startBracket === null) {
                            startBracket = i
                        }
                        bracket.push(i);
                    }

                    if (this.result[i].match(/}/g)) {

                        bracket.pop();
                        lastBracket = i
                    }
                }

                this.classlenth.push(startBracket);
                this.classlenth.push(lastBracket);

            },
            MethodsDetecter() {
                let startBracket = null, lastBracket = null, bracket = [];
                var methad = this.result;
                for (var j = 0; j < this.classlenth.length; j++) {
                    console.log(this.classlenth[j]);
                    console.log(methad.length);
                    let a = this.classlenth[j];
                    methad[a] = "";
                }
                for (var i = 0; i < methad.length; i++) {
                    if (methad[i].match(/{/g)) {
                        if (bracket.length === 0) {
                            startBracket = i
                        }
                        bracket.push(i);
                    }

                    if (methad[i].match(/}/g)) {

                        bracket.pop();
                        lastBracket = i;

                    }

                    if (bracket.length === 0 && startBracket != null && lastBracket != null ) {
                        this.methedstart.push(startBracket);
                        this.methedend.push(lastBracket);
                    }
                    if (bracket.length === 0) {
                        startBracket = null;
                        lastBracket = null;

                    }
                }

            }
        }
    }
</script>

<style scoped>
</style>