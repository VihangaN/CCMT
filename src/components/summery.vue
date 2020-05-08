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
   import { Size } from "../controller/Size";
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
                this.multipalCommentidentify();
                this.singalComment()
                console.log(this.result)
                Size.ad();
             //   this.getComplexity();
            }
        },
        methods: {
            getComplexity() {
                for (var i = 0; i < this.result.length; i++) {
                    this.getNkw(this.result[i], i);
                    this.getNop(this.result[i], i);
                    this.getNnv(this.result[i], i);
                    this.getNsl(this.result[i], i);
                    this.getNid(this.result[i], i);


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
            },

            multipalCommentidentify() {
                var start = [], end = [];
                var a = new RegExp("\\/\\*.+","g")
                var b = new RegExp(".\\*\\/","g")
                // console.log(a + " "+b);
                for (var i = 0; i < this.result.length; i++) {
                    console.log(this.result[i].trim().match("\\/\\*.+") );
                    if (this.result[i].trim().match(a)) {
                        //  console.log(i)
                        start.push(i);
                    }
                    if (this.result[i].trim().match(b)) {
                        //  console.log(i)
                        end.push(i);
                    }
                }
                // console.log(start)
                for (var j = 0; j < start.length; j++) {
                    for (var x = start[j]; x <= end[j]; x++) {
                        this.result[x] = "";
                    }
                }

            },
            singalComment() {
                var b = new RegExp("\\/\\/","g")
                for (var i = 0; i < this.result.length; i++) {
                    if (this.result[i].trim().match(b)) {
                        // console.log(i)
                        var filter = this.result[i].split(b);
                        this.result[i] = filter[0];
                    }

                }
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
