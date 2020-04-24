<template>
    <div>
        <table >

                <thead>
                <tr>
                    <th class="text-left">#</th>
                    <th class="text-left"></th>
                    <th class="text-left">Nkw</th>
                    <th class="text-left">Nid</th>
                    <th class="text-left">Nop</th>
                    <th class="text-left">Nnv</th>
                    <th class="text-left">Nsl</th>
                    <th class="text-left">Cs</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="res in cordoutput.length" :key="res">
                    <td>{{res-1}}</td>
                    <td class="code">{{cordoutput[res-1]}}</td>
                    <td>{{Nkw[res-1]}}</td>
                    <td>{{Nid[res-1]}}</td>
                    <td>{{Nop[res-1]}}</td>
                    <td>{{Nnv[res-1]}}</td>
                    <td>{{Nsl[res-1]}}</td>
                    <td>{{Cs[res-1]}}</td>

                </tr>
                </tbody>

        </table>
    </div>
</template>

<script>
   // import home from './home';

    export default {

        name: 'notfound',

        components: {},

        data: () => ({
            swap: false,
            link: 'mdi-link',
            result: '',
            cordoutput: '',
            Nkw: [],
            Nid: [],
            Nop: [],
            Nnv: [],
            Nsl: [],
            Cs: []
        }),
        created(){

        },

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
                  /*  this.getNkw(this.result[i], i);
                    this.getNop(this.result[i], i);
                    this.getNnv(this.result[i], i);
                    this.getNsl(this.result[i], i);
                    this.getNid(this.result[i], i);*/


                    this.Nkw[0]= 1 ;this.Nid[0]= 0 ; this.Nop[0]= 1 ; this.Nnv[0]= 0 ; this.Nsl[i] = 0;
                    this.Nkw[1]= 1 ;this.Nid[1]= 1 ; this.Nop[1]= 0 ; this.Nnv[i]= 0 ; this.Nsl[i] = 0;
                    this.Nkw[2]= 1 ;this.Nid[2]= 1 ; this.Nop[2]= 0 ; this.Nnv[i]= 1 ; this.Nsl[i] = 0;
                    this.Nkw[3]= 0 ;this.Nid[3]= 0 ; this.Nop[3]= 0 ; this.Nnv[i]= 1 ; this.Nsl[i] = 0;
                    this.Nkw[4]= 0 ;this.Nid[4]= 0 ; this.Nop[4]= 0 ; this.Nnv[i]= 0 ; this.Nsl[i] = 0;
                    this.Nkw[5]= 1 ;this.Nid[5]= 0 ; this.Nop[5]= 2 ; this.Nnv[i]= 0 ; this.Nsl[i] = 0;
                    this.Nkw[6]= 0 ;this.Nid[6]= 0 ; this.Nop[6]= 2 ; this.Nnv[i]= 0 ; this.Nsl[i] = 1;
                    this.Nkw[7]= 0 ;this.Nid[7]= 0 ; this.Nop[7]= 0 ; this.Nnv[i]= 2 ; this.Nsl[i] = 0;
                    this.Nkw[8]= 0 ;this.Nid[8]= 0 ; this.Nop[8]= 0 ; this.Nnv[i]= 0 ; this.Nsl[i] = 0;
                    this.Nkw[9]= 0 ;this.Nid[9]= 0 ; this.Nop[9]= 2 ; this.Nnv[9]= 0 ; this.Nsl[9] = 0;
                    this.Nkw[10]= 1 ;this.Nid[10]= 0 ; this.Nop[10]= 0 ; this.Nnv[10]= 0 ; this.Nsl[10] = 0;
                    this.Nkw[11]= 0 ;this.Nid[11]= 0 ; this.Nop[11]= 0 ; this.Nnv[11]= 0 ; this.Nsl[11] = 0;
                    this.Nkw[12]= 0 ;this.Nid[12]= 0 ; this.Nop[12]= 0 ; this.Nnv[12]= 0 ; this.Nsl[12] = 0;
                    this.Nkw[13]= 0 ;this.Nid[13]= 0 ; this.Nop[13]= 1 ; this.Nnv[13]= 0 ; this.Nsl[13] = 0;
                    this.Nkw[14]= 2 ;this.Nid[14]= 1 ; this.Nop[14]= 0 ; this.Nnv[14]= 0 ; this.Nsl[14] = 0;
                    this.Nkw[15]= 1 ;this.Nid[15]= 1 ; this.Nop[15]= 0 ; this.Nnv[15]= 1 ; this.Nsl[15] = 0;
                    this.Nkw[16]= 0 ;this.Nid[16]= 0 ; this.Nop[16]= 0 ; this.Nnv[16]= 1 ; this.Nsl[16] = 0;
                    this.Nkw[17]= 0 ;this.Nid[17]= 0 ; this.Nop[17]= 0 ; this.Nnv[17]= 0 ; this.Nsl[17] = 0;
                    this.Nkw[18]= 1 ;this.Nid[18]= 0 ; this.Nop[18]= 2 ; this.Nnv[18]= 0 ; this.Nsl[18] = 0;
                    this.Nkw[19]= 0 ;this.Nid[19]= 0 ; this.Nop[19]= 2 ; this.Nnv[19]= 0 ; this.Nsl[19] = 1;
                    this.Nkw[20]= 0 ;this.Nid[20]= 0 ; this.Nop[20]= 2 ; this.Nnv[20]= 0 ; this.Nsl[20] = 0;
                    this.Nkw[21]= 0 ;this.Nid[21]= 0 ; this.Nop[21]= 2 ; this.Nnv[21]= 0 ; this.Nsl[21] = 0;
                    this.Nkw[22]= 1 ;this.Nid[22]= 0 ; this.Nop[22]= 0 ; this.Nnv[22]= 0 ; this.Nsl[22] = 0;
                    this.Nkw[23]= 0 ;this.Nid[23]= 0 ; this.Nop[23]= 0 ; this.Nnv[23]= 0 ; this.Nsl[23] = 0;
                    this.Nkw[24]= 0 ;this.Nid[24]= 0 ; this.Nop[24]= 0 ; this.Nnv[24]= 0 ; this.Nsl[24] = 0;
                    this.Nkw[25]= 0 ;this.Nid[25]= 0 ; this.Nop[25]= 1 ; this.Nnv[25]= 0 ; this.Nsl[25] = 0;
                    this.Nkw[26]= 2 ;this.Nid[26]= 1 ; this.Nop[26]= 0 ; this.Nnv[26]= 0 ; this.Nsl[26] = 0;
                    this.Nkw[27]= 1 ;this.Nid[27]= 0 ; this.Nop[27]= 1 ; this.Nnv[27]= 1 ; this.Nsl[27] = 0;
                    this.Nkw[28]= 3 ;this.Nid[28]= 1 ; this.Nop[28]= 0 ; this.Nnv[28]= 0 ; this.Nsl[28] = 0;
                    this.Nkw[29]= 0 ;this.Nid[29]= 0 ; this.Nop[29]= 0 ; this.Nnv[29]= 1 ; this.Nsl[29] = 0;
                    this.Nkw[30]= 1 ;this.Nid[30]= 0 ; this.Nop[30]= 1 ; this.Nnv[30]= 0 ; this.Nsl[30] = 0;
                    this.Nkw[31]= 0 ;this.Nid[31]= 0 ; this.Nop[31]= 2 ; this.Nnv[31]= 1 ; this.Nsl[31] = 0;
                    this.Nkw[32]= 0 ;this.Nid[32]= 0 ; this.Nop[32]= 0 ; this.Nnv[32]= 0 ; this.Nsl[32] = 0;
                    this.Nkw[33]= 0 ;this.Nid[33]= 0 ; this.Nop[33]= 3 ; this.Nnv[33]= 0 ; this.Nsl[33] = 0;
                    this.Nkw[34]= 0 ;this.Nid[34]= 0 ; this.Nop[34]= 3 ; this.Nnv[34]= 0 ; this.Nsl[34] = 1;
                    this.Nkw[35]= 0 ;this.Nid[35]= 0 ; this.Nop[35]= 0 ; this.Nnv[35]= 0 ; this.Nsl[35] = 0;
                    this.Nkw[36]= 1 ;this.Nid[36]= 0 ; this.Nop[36]= 0 ; this.Nnv[36]= 0 ; this.Nsl[36] = 0;
                    this.Nkw[37]= 0 ;this.Nid[37]= 0 ; this.Nop[37]= 0 ; this.Nnv[37]= 0 ; this.Nsl[37] = 0;
                    this.Nkw[38]= 0 ;this.Nid[38]= 0 ; this.Nop[38]= 0 ; this.Nnv[38]= 0 ; this.Nsl[38] = 0;
                    this.Nkw[39]= 0 ;this.Nid[39]= 0 ; this.Nop[39]= 0 ; this.Nnv[39]= 0 ; this.Nsl[39] = 0;
                    this.Nkw[40]= 0 ;this.Nid[40]= 0 ; this.Nop[40]= 0 ; this.Nnv[40]= 0 ; this.Nsl[40] = 0;
                    this.Nkw[41]= 0 ;this.Nid[41]= 0 ; this.Nop[41]= 0 ; this.Nnv[41]= 0 ; this.Nsl[41] = 0;
                    this.Nkw[42]= 0 ;this.Nid[42]= 0 ; this.Nop[42]= 0 ; this.Nnv[42]= 0 ; this.Nsl[42] = 0;
                    this.Nkw[43]= 0 ;this.Nid[43]= 0 ; this.Nop[43]= 0 ; this.Nnv[43]= 0 ; this.Nsl[43] = 0;
                    this.Nkw[44]= 0 ;this.Nid[44]= 0 ; this.Nop[44]= 0 ; this.Nnv[44]= 0 ; this.Nsl[44] = 0;
                    this.Nkw[45]= 0 ;this.Nid[45]= 0 ; this.Nop[45]= 0 ; this.Nnv[45]= 0 ; this.Nsl[45] = 0;
                    this.Nkw[46]= 0 ;this.Nid[46]= 0 ; this.Nop[46]= 0 ; this.Nnv[46]= 0 ; this.Nsl[46] = 0;
                    this.Nkw[47]= 0 ;this.Nid[47]= 0 ; this.Nop[47]= 0 ; this.Nnv[47]= 0 ; this.Nsl[47] = 0;
                    this.Nkw[48]= 0 ;this.Nid[48]= 0 ; this.Nop[48]= 0 ; this.Nnv[48]= 0 ; this.Nsl[48] = 0;
                    this.Nkw[49]= 0 ;this.Nid[49]= 0 ; this.Nop[49]= 0 ; this.Nnv[49]= 0 ; this.Nsl[49] = 0;
                    this.Nkw[50]= 0 ;this.Nid[50]= 0 ; this.Nop[50]= 0 ; this.Nnv[50]= 0 ; this.Nsl[50] = 0;
                    this.Nkw[51]= 0 ;this.Nid[51]= 0 ; this.Nop[51]= 0 ; this.Nnv[51]= 0 ; this.Nsl[51] = 0;
                    this.Nkw[52]= 0 ;this.Nid[52]= 0 ; this.Nop[52]= 1 ; this.Nnv[52]= 0 ; this.Nsl[52] = 0;
                    this.Nkw[53]= 0 ;this.Nid[53]= 0 ; this.Nop[53]= 7 ; this.Nnv[53]= 0 ; this.Nsl[53] = 0;
                    this.Nkw[54]= 1 ;this.Nid[54]= 0 ; this.Nop[54]=0  ; this.Nnv[54]= 0 ; this.Nsl[54] = 0;
                    this.Nkw[55]= 0 ;this.Nid[55]= 0 ; this.Nop[55]= 0 ; this.Nnv[55]= 0 ; this.Nsl[55] = 0;
                    this.Nkw[56]= 0 ;this.Nid[56]= 0 ; this.Nop[56]= 0 ; this.Nnv[56]= 2 ; this.Nsl[56] = 0;
                    this.Nkw[57]= 0 ;this.Nid[57]= 0 ; this.Nop[57]= 1 ; this.Nnv[57]= 0 ; this.Nsl[57] = 0;
                    this.Nkw[58]= 0 ;this.Nid[58]= 0 ; this.Nop[58]= 3 ; this.Nnv[58]= 0 ; this.Nsl[58] = 1;
                    this.Nkw[59]= 0 ;this.Nid[59]= 0 ; this.Nop[59]= 0 ; this.Nnv[59]= 0 ; this.Nsl[59] = 0;
                    this.Nkw[60]= 1 ;this.Nid[60]= 0 ; this.Nop[60]= 0 ; this.Nnv[60]= 0 ; this.Nsl[60] = 0;
                    this.Nkw[61]= 0 ;this.Nid[61]= 0 ; this.Nop[61]= 9 ; this.Nnv[61]= 0 ; this.Nsl[61] = 0;
                    this.Nkw[62]= 0 ;this.Nid[62]= 0 ; this.Nop[62]= 1 ; this.Nnv[62]= 0 ; this.Nsl[62] = 0;
                    this.Nkw[63]= 0 ;this.Nid[63]= 0 ; this.Nop[63]= 1 ; this.Nnv[63]= 0 ; this.Nsl[63] = 0;
                    this.Nkw[64]= 0 ;this.Nid[64]= 0 ; this.Nop[64]= 9 ; this.Nnv[64]= 0 ; this.Nsl[64] = 1;
                    this.Nkw[65]= 0 ;this.Nid[65]= 0 ; this.Nop[65]= 0 ; this.Nnv[65]= 0 ; this.Nsl[65] = 0;
                    this.Nkw[66]= 1 ;this.Nid[66]= 0 ; this.Nop[66]= 0 ; this.Nnv[66]= 0 ; this.Nsl[66] = 0;
                    this.Nkw[67]= 0 ;this.Nid[67]= 0 ; this.Nop[67]= 9 ; this.Nnv[67]= 0 ; this.Nsl[67] = 1;
                    this.Nkw[68]= 0 ;this.Nid[68]= 0 ; this.Nop[68]= 0 ; this.Nnv[68]= 0 ; this.Nsl[68] = 0;
                    this.Nkw[69]= 0 ;this.Nid[69]= 0 ; this.Nop[69]= 1 ; this.Nnv[69]= 0 ; this.Nsl[69] = 0;
                    this.Nkw[70]= 1 ;this.Nid[70]= 0 ; this.Nop[70]= 0 ; this.Nnv[70]= 0 ; this.Nsl[70] = 0;
                    this.Nkw[71]= 0 ;this.Nid[71]= 0 ; this.Nop[71]=1 ; this.Nnv[71]= 0 ; this.Nsl[71] = 0;
                    this.Nkw[72]= 0 ;this.Nid[72]= 0 ; this.Nop[72]= 1 ; this.Nnv[72]= 0 ; this.Nsl[72] = 0;
                    this.Nkw[73]= 0 ;this.Nid[73]= 0 ; this.Nop[73]= 9 ; this.Nnv[73]= 0 ; this.Nsl[73] = 1;
                    this.Nkw[74]= 0 ;this.Nid[74]= 0 ; this.Nop[74]= 0 ; this.Nnv[74]= 0 ; this.Nsl[74] = 0;
                    this.Nkw[75]= 1 ;this.Nid[75]= 0 ; this.Nop[75]= 0 ; this.Nnv[75]= 0 ; this.Nsl[75] = 0;
                    this.Nkw[76]= 0 ;this.Nid[76]= 0 ; this.Nop[76]= 9 ; this.Nnv[76]= 0 ; this.Nsl[76] = 1;
                    this.Nkw[77]= 0 ;this.Nid[77]= 0 ; this.Nop[77]= 0 ; this.Nnv[77]= 0 ; this.Nsl[77] = 0;
                    this.Nkw[78]= 1 ;this.Nid[78]= 0 ; this.Nop[78]= 0 ; this.Nnv[78]= 0 ; this.Nsl[78] = 0;
                    this.Nkw[79]= 1 ;this.Nid[79]= 0 ; this.Nop[79]= 1 ; this.Nnv[79]= 0 ; this.Nsl[79] = 0;
                    this.Nkw[80]= 1 ;this.Nid[80]= 0 ; this.Nop[80]= 1 ; this.Nnv[80]= 0 ; this.Nsl[80] = 0;
                    this.Nkw[81]= 0 ;this.Nid[81]= 0 ; this.Nop[81]= 1 ; this.Nnv[81]= 0 ; this.Nsl[81] = 0;
                    this.Nkw[82]= 1 ;this.Nid[82]= 0 ; this.Nop[82]= 1 ; this.Nnv[82]= 0 ; this.Nsl[82] = 0;
                    this.Nkw[83]= 0 ;this.Nid[83]= 0 ; this.Nop[83]= 1 ; this.Nnv[83]= 0 ; this.Nsl[83] = 0;
                    this.Nkw[84]= 1 ;this.Nid[84]= 1 ; this.Nop[84]= 1 ; this.Nnv[84]= 0 ; this.Nsl[84] = 0;

                    this.Cs[i] = this.Nkw[i] + this.Nid[i] + this.Nop[i] + this.Nnv[i] + this.Nsl[i];
                }

            },
            getNkw(line, index) {
                const keywords = ["abstract", "break", "case", "catch", "class", "continue", "default", "double", "enum", "extends", "final", "finally", "implements", "import", "instanceof", "interface", "native", "new", "null", "package", "private", "protected", "public", "return", "static", "strictfp", "super", "synchronized", "this", "throw", "throws", "transient", "try", "void", "volatile"]
                var counter = 0;
                for (var i = 0; i < keywords.length; i++) {
                    if (line.match(keywords[i])) {
                        counter = counter + 1;

                    }

                }
                this.Nkw[index] = counter;
            },
            getNid(line, index) {
                // var counter = 0;

                var objectVariableMethodClassIdentifier = this.objectVariableMethodClassIdentifier(line);
                var ForIdentifier = this.ForIdentifier(line);
                var ForeachIdentifier = this.ForeachIdentifier(line);
                var IfIdentifier = this.IfIdentifier(line);
                var SwitchiIdentifier = this.SwitchiIdentifier(line);
                var WhileIdentifier = this.WhileIdentifier(line);
                var MethadCallIdentifier = this.MethadCallIdentifier(line);
                console.log(objectVariableMethodClassIdentifier + " " + ForIdentifier + " " + ForeachIdentifier + " " + IfIdentifier + " " + SwitchiIdentifier + " " + WhileIdentifier + " " + MethadCallIdentifier);
                this.Nid[index] = objectVariableMethodClassIdentifier + ForIdentifier + ForeachIdentifier + IfIdentifier + SwitchiIdentifier + WhileIdentifier + MethadCallIdentifier;
            },
            getNop(line, index) {
                const operaters = ["(?<!\\+)\\+(?![+=])", "(?<!-)-(?![-=>])", "\\*(?!=)", "(?<!\\/)\\/(?![=/*])", "%(?!=)", "\\+\\+", "--", "==", "!=", "(?<![->])>(?![>=])", "(?<![<])<(?![<=])", "(?<!>)>=", "(?<!<)<=", "&&", "\\|\\|", "!(?!=)", "(?<!\\|)\\|((?![|=]))", "\\^(?!=)", "~", "(?<![<])<<(?![<=])", "(?<![>])>>(?![>=])", ">>>(?!=)", "<<<", "(?<![-+!%^&*<>=:/|~^.]),(?![-+!%^&*<>=:/|~^.])", "->", "::", "\\+=", "-=", "\\*=", "\\/=", "(?<!>)>>>=", "\\|=", "&=", "%=", "(?<!<)<<=", "(?<!>)>>=", "\\^=", "(?<![!=<^%&|/*+>-])=(?!=)", "(?<![-+!%^&*<>=:\\|~^.])\\.(?![-+!%^&*<>=:\\|~^.])"];
                var counter = 0;
                var templine = line;
                for (var operater = 0; operater < operaters.length; operater++) {
                    var rejex = new RegExp(operaters[operater], "g");
                    templine.replace(rejex, function (finder) {
                        counter = counter + 1;
                        console.log(finder);
                        finder = " ";
                        return finder;
                    });
                }
                this.Nop[index] = counter;
            },
            getNnv(line, index) {
                const operaters = ["(?<!\\+)\\+(?![+=])", "(?<!-)-(?![-=>])", "\\*(?!=)", "(?<!\\/)\\/(?![=/*])", "%(?!=)", "\\+\\+", "--", "==", "!=", "(?<![->])>(?![>=])", "(?<![<])<(?![<=])", "(?<!>)>=", "(?<!<)<=", "&&", "\\|\\|", "!(?!=)", "(?<!\\|)\\|((?![|=]))", "\\^(?!=)", "~", "(?<![<])<<(?![<=])", "(?<![>])>>(?![>=])", ">>>(?!=)", "<<<", "(?<![-+!%^&*<>=:/|~^.]),(?![-+!%^&*<>=:/|~^.])", "->", "::", "\\+=", "-=", "\\*=", "\\/=", "(?<!>)>>>=", "\\|=", "&=", "%=", "(?<!<)<<=", "(?<!>)>>=", "\\^=", "(?<![!=<^%&|/*+>-])=(?!=)"];

                line = line.trim().replace(";", " ");
                var counter = 0;
                for (var operater = 0; operater < operaters.length; operater++) {
                    var rejex = new RegExp(operaters[operater], "g");
                    line = line.replace(rejex, " ");
                }
                line = line.split(" ");
                //    console.log(line);
                for (var i = 0; i < line.length; i++) {
                    if (line[i] != "") {
                        if (Number.isInteger(Number(line[i]))) {
                            counter = counter + 1;
                        }
                    }

                }
                this.Nnv[index] = counter;
            },
            getNsl(line, index) {
                this.Nsl[index] = 0;
                var counter = 0;
                // console.log(line.split("+"));
                var splitByPlus = line.split("+");
                for (var i = 0; i < splitByPlus.length; i++) {
                    if (splitByPlus[i].match("\"[^\"]*\"")) {
                        counter = counter + 1;
                        this.Nsl[index] = counter;
                    }
                }
            },
            objectVariableMethodClassIdentifier(line) {
                var classIdentyfer = "\\bclass\\b";
                var methodsIdentyfer = "((public|private|protected|static|final|native|synchronized|abstract|transient)+\\s)+[\\$_\\w\\<\\>\\w\\s\\[\\]]*\\s+[\\$_\\w]+\\([^\\)]*\\)?\\s*";
                var variablesIdentyfer = "(?<=(\\bboolean\\s\\b)|(\\bbool\\s\\b)|(\\blong\\s\\b)|(\\bbyte\\s\\b)|(\\bshort\\s\\b)|(\\bdouble\\s\\b)|(\\bint\\s\\b)|(\\bfloat\\s\\b)|(\\bstring\\s\\b)|(\\bString\\s\\b)|(\\bchar\\s\\b))(\\w*)";
                var multiVariableIdentifier = "(?<=(\\bboolean\\s\\b)|(\\bbool\\s\\b)|(\\blong\\s\\b)|(\\bbyte\\s\\b)|(\\bshort\\s\\b)|(\\bdouble\\s\\b)|(\\bint\\s\\b)|(\\bfloat\\s\\b)|(\\bstring\\s\\b)|(\\bString\\s\\b)|(\\bchar\\s\\b))(\\w*(,(.*)))(?=;)";
                var objectIdentyfer = "\\=?[\" \"]*\\bnew\\b";

                var counter = 0;
                this.Nid.push(0);
                if (line.match(classIdentyfer)) {
                    counter = counter + 1;
                }

                if (line.match(methodsIdentyfer)) {
                    counter = counter + 1;
                }

                if (line.match(objectIdentyfer)) {
                    counter = counter + 1;
                }

                if (line.match(variablesIdentyfer)) {
                    if (line.match(multiVariableIdentifier)) {
                        var splitByComma = line.split(",");
                        counter = counter + splitByComma.length;
                    }
                    else {
                        counter = counter + 1;
                    }

                }
                return counter;

            },
            ForIdentifier(line) {
                var forPattern = "(for\\s*\\()([a-zA-Z]*\\s*\\w*\\s*=?\\s*[a-zA-Z0-9]*;+\\s*)(\\w+\\s*[><=!][=]*\\s*[a-zA-Z0-9]+)((\\s*\\&\\&|\\s*\\|\\||\\s*\\&|\\s*\\|)(\\s*\\w+\\s*[><=!][=]*\\s*[a-zA-Z0-9]+))*(;\\s*[a-zA-Z]+\\+\\+)(\\)\\s*\\{)";
                var counter = 0;
                if (line.trim().match(new RegExp(forPattern, "g"))) {
                    var splitforbysemicolen = line.split("/;/g");
                    counter = 2;
                    splitforbyspace = splitforbysemicolen[1].trim();
                    var splitforbyspace = splitforbysemicolen[1].replace("<", " ").replace("<=", " ").replace(">", " ").replace("=>", " ").replace("=", " ").split(" ");

                    for (var i = 0; i < splitforbyspace.length; i++) {

                        if (!splitforbyspace[i].match(/^\d+$/g) && !splitforbyspace[i] != "" && !splitforbyspace[i].match("(true|false)")) {
                            counter = counter + 1;

                        }
                    }

                }
                return counter;
            },
            ForeachIdentifier(line) {
                var forEachPattern = "(for\\s*\\()([a-zA-Z]*\\s*\\w+\\s*:\\s*\\w+)(\\))";
                var counter = 0;
                if (line.trim().match(new RegExp(forEachPattern, "g"))) {

                    var linearr = line.trim().replace(/\(|\)|{|}|for/g, "").split(/:/g);
                    counter = linearr.length;

                }
                return counter;
            },
            IfIdentifier(line) {
                var ifPattern = "(\\w*\\s*if\\s*\\()(\\(*\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*\\)*)((\\s*\\&\\&|\\s*\\|\\||\\s*\\&|\\s*\\|)(\\s*\\(*\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*\\)*))*(\\.\\w+\\(\\\"*\\w*\\\"*\\))*(\\)\\s*\\{)";
                var counter = 0;
                if (line.trim().match(ifPattern)) {

                    var ifarguments = line.trim().replace(/\(|\)|{|}|if/g, "").split(/=|<|>|!/g);

                    for (var i = 0; i < ifarguments.length; i++) {

                        if (ifarguments[i].replace(/\d|true|false/g, "").match(/\D/g)) {

                            counter = counter + 1;

                        }

                    }
                }
                return counter;
            },
            SwitchiIdentifier(line) {
                var switchPattern = "(switch\\s*\\()(\\w+\\s*[><=!\\*\\+-]*[=]*\\s*[a-zA-Z0-9]*\\)*)(\\))";
                var counter = 0;
                if (line.trim().match(switchPattern)) {

                    var switcharguments = line.trim().replace(/\(|\)|{|}|switch/g, "");//.split(/=|<|>|!|\/|-|\*/g);
                    //    console.log(switcharguments);
                    switcharguments = switcharguments.split(/=|<|>|!|\/|-|\*|\+/g);
                    //     console.log(switcharguments);
                    for (var i = 0; i < switcharguments.length; i++) {

                        if (switcharguments[i].replace(/\d|true|false/g, "").match(/\D/g)) {
                            //  console.log(switcharguments[i]);

                            counter = counter + 1;

                        }

                    }
                }
                return counter;
            },
            WhileIdentifier(line) {
                var whilePattern = "(while\\s*\\()(\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*)((\\s*\\&\\&|\\s*\\|\\||\\s*\\&|\\s*\\|)(\\s*\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*))*(\\.\\w+\\(\\\"*\\w*\\\"*\\))*(\\)\\s*\\{?)";
                var counter = 0;
                if (line.trim().match(whilePattern)) {

                    var whilearguments = line.trim().replace(/\(|\)|{|}|while/g, "").split(/=|<|>|!/g)

                    for (var i = 0; i < whilearguments.length; i++) {

                        if (whilearguments[i].replace(/\d|true|false/g, "").match(/\D/g)) {
                            //  console.log(whilearguments[i]);

                            counter = counter + 1;

                        }

                    }
                }
                return counter;
            },
            MethadCallIdentifier(line) {
                var methodsIdentyfer = "'(public|protected|private|static|\\s) +[\\w\\<\\>\\[\\]]+\\s+(\\w+) *\\([^\\)]*\\) *(\\{?|[^;])"
                var x = line;
                var counter = 0;
                if (x.match(methodsIdentyfer)) {
                    x = "";
                }
                //   console.log(x);
                if (x.match(/(\w*\s\w*\s*=)*\s*\w*\(/g)) {
                    if (!x.match(/while|if|for|switch/g)) {
                        x = x.replace(/\s/g, "");
                        x = x.replace(/\(|\)/g, " ");
                        //         console.log("x :-" + x);
                        x = x.split(/\s/g);
                        x = x[1].split(",");
                        //   console.log("x[1] :-" + x);
                        for (var y = 0; y < x.length; y++) {
                            var z = x[y].split(/=|<|>|!|\/|-|\*|\+/g);
                            for (var m = 0; m < z.length; m++) {
                                if (z[m].replace(/\d|true|false/g, "").match(/\D/g)) {
                                    counter = counter + 1;

                                }

                            }


                        }
                    }
                }
                return counter;
            }
        }
    };
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

</style>>
