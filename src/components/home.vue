<template>
    <div>

        <input type="file" ref="myFile" @change="selectedFile"><br/>
        <textarea v-model="text"></textarea>

        <table border="1">
            <tbody>
            <tr>
                <td>#</td>
                <td></td>
                <td>Nkw</td>
                <td>Nid</td>
                <td>Nop</td>
                <td>Nnv</td>
                <td>Nsl</td>
                <td>Cs</td>
            </tr>
            <tr v-for="res in cordoutput.length" :key="res">
                <td>{{res-1}}</td>
                <td>{{cordoutput[res-1]}}</td>
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
    export default {

        data() {
            return {
                text: '',
                result: '',
                cordoutput: '',
                Nkw: [],
                Nid: [],
                Nop: [],
                Nnv: [],
                Nsl: [],
                Cs: []
            }
        },
        methods: {
            selectedFile() {
                console.log('selected a file');
                // console.log(this.$refs.myFile.files[0]);
                let file = this.$refs.myFile.files[0];
                let reader = new FileReader();
                reader.readAsText(file, "UTF-8");
                reader.onload = evt => {

                    this.text = evt.target.result;
                    this.result = this.text.split("\n");
                    this.cordoutput = this.text.split("\n");


                    for (var i = 0; i < this.result.length; i++) {
                        //  this.result[i]=this.result[i].replace(";"," ");

//keywords
                        const keywords = ["abstract", "break", "case", "catch", "class", "continue", "default", "double", "enum", "extends", "final", "finally", "implements", "import", "instanceof", "interface", "native", "new", "null", "package", "private", "protected", "public", "return", "static", "strictfp", "super", "synchronized", "this", "throw", "throws", "transient", "try", "void", "volatile"]
                        var keyitmes = 0;
                        for (var key = 0; key < keywords.length; key++) {
                            if (this.result[i].match(keywords[key])) {
                                keyitmes = keyitmes + 1
                                this.Nkw[i] = keyitmes;
                            }
                        }

//operaters
                        const operaters = ["(?<!\\+)\\+(?![+=])", "(?<!-)-(?![-=>])", "\\*(?!=)", "(?<!\\/)\\/(?![=/*])", "%(?!=)", "\\+\\+", "--", "==", "!=", "(?<![->])>(?![>=])", "(?<![<])<(?![<=])", "(?<!>)>=", "(?<!<)<=", "&&", "\\|\\|", "!(?!=)", "(?<!\\|)\\|((?![|=]))", "\\^(?!=)", "~", "(?<![<])<<(?![<=])", "(?<![>])>>(?![>=])", ">>>(?!=)", "<<<", "(?<![-+!%^&*<>=:/|~^.]),(?![-+!%^&*<>=:/|~^.])", "->", "::", "\\+=", "-=", "\\*=", "\\/=", "(?<!>)>>>=", "\\|=", "&=", "%=", "(?<!<)<<=", "(?<!>)>>=", "\\^=", "(?<![!=<^%&|/*+>-])=(?!=)"]
                        var operitem = 0;
                        var splitBySpace = this.result[i].replace(";", " ").split(" ");

                        for (var index = 0; index < splitBySpace.length; index++) {

                            for (var operater = 0; operater < operaters.length; operater++) {

                                if (splitBySpace[index].match(operaters[operater])) {
                                    operitem = operitem + 1;
                                    this.Nop[i] = operitem;
                                }

                            }

                            if (splitBySpace[index].search("\\.")) {
                                //     console.log(" spliter "+splitBySpace[index].split(".").length);
                                var splitbyDot = splitBySpace[index].split(".");
                                operitem = operitem + (splitbyDot.length - 1);
                                this.Nop[i] = operitem;
                            }
                        }


//digits

                        var splitBySpace1 = this.result[i].trim().replace(";", " ").split(" ");
                        var digitcunt = 0;
                        //  console.log(splitBySpace1);
                        for (var index1 = 0; index1 < splitBySpace1.length; index1++) {
                            //   console.log(splitBySpace1[index1]);
                            //   console.log(Number.isInteger(Number(splitBySpace1[index1])));
                            if (splitBySpace1[index1] != "") {
                                if (Number.isInteger(Number(splitBySpace1[index1]))) {
                                    digitcunt = digitcunt + 1;
                                    //   console.log(digitcunt);
                                    this.Nnv[i] = digitcunt;
                                }
                            }
                        }

//string identifer
                        this.Nsl.push(0);
                        var stringcount = 0;
                        console.log(this.result[i].split("+"));
                        var splitByPlus = this.result[i].split("+");
                        //   console.log(this.result[i].includes("\"[^\"]*\""));
                        for (var splitByPlusindex = 0; splitByPlusindex < splitByPlus.length; splitByPlusindex++) {
                            if (splitByPlus[splitByPlusindex].match("\"[^\"]*\"")) {
                                stringcount = stringcount + 1;
                                // console.log(stringcount);
                                this.Nsl[i] = stringcount;
                            }
                        }


                        var classIdentyfer = "\\bclass\\b";
                        var methodsIdentyfer = "((public|private|protected|static|final|native|synchronized|abstract|transient)+\\s)+[\\$_\\w\\<\\>\\w\\s\\[\\]]*\\s+[\\$_\\w]+\\([^\\)]*\\)?\\s*";
                        var variablesIdentyfer = "(?<=(\\bboolean\\s\\b)|(\\bbool\\s\\b)|(\\blong\\s\\b)|(\\bbyte\\s\\b)|(\\bshort\\s\\b)|(\\bdouble\\s\\b)|(\\bint\\s\\b)|(\\bfloat\\s\\b)|(\\bstring\\s\\b)|(\\bString\\s\\b)|(\\bchar\\s\\b))(\\w*)";
                        var multiVariableIdentifier = "(?<=(\\bboolean\\s\\b)|(\\bbool\\s\\b)|(\\blong\\s\\b)|(\\bbyte\\s\\b)|(\\bshort\\s\\b)|(\\bdouble\\s\\b)|(\\bint\\s\\b)|(\\bfloat\\s\\b)|(\\bstring\\s\\b)|(\\bString\\s\\b)|(\\bchar\\s\\b))(\\w*(,(.*)))(?=;)";
                        var objectIdentyfer = "\\=?[\" \"]*\\bnew\\b";


                        this.Nid.push(0);
                        if (this.result[i].match(classIdentyfer)) {
                            this.Nid[i] = 1;
                        }

                        if (this.result[i].match(methodsIdentyfer)) {
                            this.Nid[i] = 1;
                        }

                        if (this.result[i].match(objectIdentyfer)) {
                            this.Nid[i] = 1;
                        }

                        if (this.result[i].match(variablesIdentyfer)) {
                            if (this.result[i].match(multiVariableIdentifier)) {
                                var splitByComma = this.result[i].split(",");
                                this.Nid[i] = splitByComma.length + 1;
                            }
                            else {
                                this.Nid[i] = 1;
                            }

                        }
                        var forPattern = "(for\\s*\\()([a-zA-Z]*\\s*\\w*\\s*=?\\s*[a-zA-Z0-9]*;+\\s*)(\\w+\\s*[><=!][=]*\\s*[a-zA-Z0-9]+)((\\s*\\&\\&|\\s*\\|\\||\\s*\\&|\\s*\\|)(\\s*\\w+\\s*[><=!][=]*\\s*[a-zA-Z0-9]+))*(;\\s*[a-zA-Z]+\\+\\+)(\\)\\s*\\{)";
                        var whilePattern = "(while\\s*\\()(\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*)((\\s*\\&\\&|\\s*\\|\\||\\s*\\&|\\s*\\|)(\\s*\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*))*(\\.\\w+\\(\\\"*\\w*\\\"*\\))*(\\)\\s*\\{?)";
                        //   var doWhileTopPattern = "(do\\s*\\{)";
                        // var doWhileBottomPattern = "(\\}\\s*while\\s*\\()(\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*)((\\s*\\&\\&|\\s*\\|\\||\\s*\\&|\\s*\\|)(\\s*\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*))*(\\.\\w+\\(\\\"*\\w*\\\"*\\))*(\\)\\;)";
                        var forEachPattern = "(for\\s*\\()([a-zA-Z]*\\s*\\w+\\s*:\\s*\\w+)(\\))";
                        var ifPattern = "(\\w*\\s*if\\s*\\()(\\(*\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*\\)*)((\\s*\\&\\&|\\s*\\|\\||\\s*\\&|\\s*\\|)(\\s*\\(*\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*\\)*))*(\\.\\w+\\(\\\"*\\w*\\\"*\\))*(\\)\\s*\\{)";
                        var switchPattern = "(switch\\s*\\()(\\w+\\s*[><=!\\*\\+-]*[=]*\\s*[a-zA-Z0-9]*\\)*)(\\))"//"(switch\\s*\\()(\\w+)(\\))";

                        if (this.result[i].trim().match(forPattern)) {

                            var splitforbysemicolen = this.result[i].split(";");
                            var foridentiffiercounter = 2;
                            splitforbyspace = splitforbysemicolen[1].trim();
                            var splitforbyspace = splitforbysemicolen[1].replace("<", " ").replace("<=", " ").replace(">", " ").replace("=>", " ").replace("=", " ").split(" ");

                            for (var splitforbyspaceindex = 0; splitforbyspaceindex < splitforbyspace.length; splitforbyspaceindex++) {

                                if (!splitforbyspace[splitforbyspaceindex].match(/^\d+$/g) && !splitforbyspace[splitforbyspaceindex] != "" && !splitforbyspace[splitforbyspaceindex].match("(true|false)")) {
                                    foridentiffiercounter = foridentiffiercounter + 1;

                                }
                            }
                            this.Nid[i] = foridentiffiercounter;
                        }

                        if (this.result[i].trim().match(whilePattern)) {
                            var whileidentiffiercounter = 0;
                            var whilearguments = this.result[i].trim().replace(/\(|\)|{|}|while/g, "").split(/=|<|>|!/g)

                            console.log(whilearguments);
                            for (var splitwhilebyspaceindex = 0; splitwhilebyspaceindex < whilearguments.length; splitwhilebyspaceindex++) {

                                if (whilearguments[splitwhilebyspaceindex].replace(/\d|true|false/g, "").match(/\D/g)) {
                                    console.log(whilearguments[splitwhilebyspaceindex]);

                                    whileidentiffiercounter = whileidentiffiercounter + 1;

                                }

                            }

                            this.Nid[i] = whileidentiffiercounter;
                        }

                        if (this.result[i].trim().match(ifPattern)) {
                            var ifidentiffiercounter = 0;
                            var ifarguments = this.result[i].trim().replace(/\(|\)|{|}|if/g, "").split(/=|<|>|!/g);

                            console.log(ifarguments);
                            for (var splitifbyspaceindex = 0; splitifbyspaceindex < ifarguments.length; splitifbyspaceindex++) {

                                if (ifarguments[splitifbyspaceindex].replace(/\d|true|false/g, "").match(/\D/g)) {
                                    console.log(ifarguments[splitifbyspaceindex]);

                                    ifidentiffiercounter = ifidentiffiercounter + 1;

                                }

                            }

                            this.Nid[i] = ifidentiffiercounter;
                        }


                        if (this.result[i].trim().match(forEachPattern)) {
                            var forEachidentiffiercounter = 0;
                            var forEacharguments = this.result[i].trim().replace(/\(|\)|{|}|for/g, "");

                            // const keywords = ["abstract","break","case","catch","class","continue","default","double","enum","extends","final","finally","implements","import","instanceof","interface","native","new","null","package","private","protected","public","return","static","strictfp","super","synchronized","this","throw","throws","transient","try","void","volatile"]
                            // var keyitmes=0;
                            for (var key1 = 0; key1 < keywords.length; key1++) {
                                forEacharguments = forEacharguments.replace(keywords[key1], "")

                            }

                            forEacharguments = forEacharguments.split(/:/g)

                            console.log(forEacharguments);
                            for (var splitforEachbyspaceindex = 0; splitforEachbyspaceindex < forEacharguments.length; splitforEachbyspaceindex++) {

                                if (forEacharguments[splitforEachbyspaceindex].replace(/\d|true|false/g, "").match(/\D/g)) {
                                    console.log(forEacharguments[splitforEachbyspaceindex]);

                                    forEachidentiffiercounter = forEachidentiffiercounter + 1;

                                }

                            }

                            this.Nid[i] = forEachidentiffiercounter;
                        }


                        if (this.result[i].trim().match(switchPattern)) {
                            var switchidentiffiercounter = 0;
                            var switcharguments = this.result[i].trim().replace(/\(|\)|{|}|switch/g, "");//.split(/=|<|>|!|\/|-|\*/g);
                            console.log(switcharguments);
                            switcharguments = switcharguments.split(/=|<|>|!|\/|-|\*|\+/g);
                            console.log(switcharguments);
                            for (var splitswitchbyspaceindex = 0; splitswitchbyspaceindex < switcharguments.length; splitswitchbyspaceindex++) {

                                if (switcharguments[splitswitchbyspaceindex].replace(/\d|true|false/g, "").match(/\D/g)) {
                                    console.log(switcharguments[splitswitchbyspaceindex]);

                                    switchidentiffiercounter = switchidentiffiercounter + 1;

                                }

                            }

                            this.Nid[i] = switchidentiffiercounter;
                        }

                        var x = this.result[i];
                        var pramidentiffiercounter = 0;
                        if (x.match(methodsIdentyfer)) {
                            x = "";
                        }
                        console.log(x);
                        if (x.match(/(\w*\s\w*\s*=)*\s*\w*\(/g)) {
                            if (!x.match(/while|if|for|switch/g)) {
                                x = x.replace(/\s/g, "");
                                x = x.replace(/\(|\)/g, " ");
                                console.log("x :-" + x);
                                x = x.split(/\s/g);
                                x = x[1].split(",");
                                console.log("x[1] :-" + x);
                                for (var y = 0; y < x.length; y++) {
                                    var z = x[y].split(/=|<|>|!|\/|-|\*|\+/g);
                                    for (var m = 0; m < z.length; m++) {
                                        if (z[m].replace(/\d|true|false/g, "").match(/\D/g)) {
                                            // console.log(switcharguments[splitswitchbyspaceindex]);

                                            pramidentiffiercounter = pramidentiffiercounter + 1;

                                        }

                                    }


                                }
                            }
                        }
                        this.Nid[i] = pramidentiffiercounter;

                        //  this.Cs[i].push(this.Nkw[i]+this.Nid[i]+this.Nop[i]+this.Nnv[i]+this.Nsl[i]);
                        //  console.log(this.Cs);
                    }
                }
                reader.onerror = evt => {
                    console.error(evt);
                }

            },

            getCs() {
                for (var i = 0; i < this.result.length; i++) {
                    this.Cs[i] = this.Nkw[i] + this.Nid[i] + this.Nop[i] + this.Nnv[i] + this.Nsl[i];
                }
            },
            getNkw() {

            },
            getNid() {

            },
            getNop() {

            },
            getNnv() {

            },
            getNsl() {

            },
            objectVariableMethodClassIdentifier() {

            },
            ForIdentifier() {

            },
            ForeachIdentifier() {

            },
            IfIdentifier() {

            },
            SwitchiIdentifier() {

            },
            WhileIdentifier() {

            },
            MethadCallIdentifier() {

            }
        }
    }
</script>
