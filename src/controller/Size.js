var weight = require('../assets/Weight.json');
export const Size = {

    getNkw: (line) => {
        const keywords = ["abstract", "break", "case", "catch", "class", "continue", "default", "double", "enum", "extends", "final", "finally", "implements", "import", "instanceof", "interface", "native", "new", "null", "package", "private", "protected", "public", "return", "static", "strictfp", "super", "synchronized", "this", "throw", "throws", "transient", "try", "void", "volatile"]
        var counter = 0;
        for (var i = 0; i < keywords.length; i++) {
            if (line.match(keywords[i])) {
                counter = counter + weight.Cs.Wkw;

            }

        }
        return counter;
    },
    getNid:(line) => {

        var objectVariableMethodClassIdentifier = Size.objectVariableMethodClassIdentifier(line);
       //  var ForIdentifier = Size.ForIdentifier(line);
        // var ForeachIdentifier = Size.ForeachIdentifier(line);
        // var IfIdentifier = Size.IfIdentifier(line);
        // var SwitchiIdentifier = Size.SwitchiIdentifier(line);
        // var WhileIdentifier = Size.WhileIdentifier(line);
        // var MethadCallIdentifier = Size.MethadCallIdentifier(line);
        console.log(objectVariableMethodClassIdentifier) //+ " " + ForIdentifier)// + " " + ForeachIdentifier + " " + IfIdentifier + " " + SwitchiIdentifier + " " + WhileIdentifier + " " + MethadCallIdentifier);
        return  objectVariableMethodClassIdentifier// + ForIdentifier// + ForeachIdentifier + IfIdentifier + SwitchiIdentifier + WhileIdentifier + MethadCallIdentifier;

    },
    getNop:(line) => {
        const operaters = ["(?<!\\+)\\+(?![+=])", "(?<!-)-(?![-=>])", "\\*(?!=)", "(?<!\\/)\\/(?![=/*])", "%(?!=)", "\\+\\+", "--", "==", "!=", "(?<![->])>(?![>=])", "(?<![<])<(?![<=])", "(?<!>)>=", "(?<!<)<=", "&&", "\\|\\|", "!(?!=)", "(?<!\\|)\\|((?![|=]))", "\\^(?!=)", "~", "(?<![<])<<(?![<=])", "(?<![>])>>(?![>=])", ">>>(?!=)", "<<<", "(?<![-+!%^&*<>=:/|~^.]),(?![-+!%^&*<>=:/|~^.])", "->", "::", "\\+=", "-=", "\\*=", "\\/=", "(?<!>)>>>=", "\\|=", "&=", "%=", "(?<!<)<<=", "(?<!>)>>=", "\\^=", "(?<![!=<^%&|/*+>-])=(?!=)", "(?<![-+!%^&*<>=:\\|~^.])\\.(?![-+!%^&*<>=:\\|~^.])"];
        var counter = 0;
        var templine = line;
        for (var operater = 0; operater < operaters.length; operater++) {
            var rejex = new RegExp(operaters[operater], "g");
            templine.replace(rejex, function (finder) {
                counter = counter + weight.Cs.Wop;
                console.log(finder);
                finder = " ";
                return finder;
            });
        }
        return counter;
    } ,
    getNnv:(line) => {
        const operaters = ["(?<!\\+)\\+(?![+=])", "(?<!-)-(?![-=>])", "\\*(?!=)", "(?<!\\/)\\/(?![=/*])", "%(?!=)", "\\+\\+", "--", "==", "!=", "(?<![->])>(?![>=])", "(?<![<])<(?![<=])", "(?<!>)>=", "(?<!<)<=", "&&", "\\|\\|", "!(?!=)", "(?<!\\|)\\|((?![|=]))", "\\^(?!=)", "~", "(?<![<])<<(?![<=])", "(?<![>])>>(?![>=])", ">>>(?!=)", "<<<", "(?<![-+!%^&*<>=:/|~^.]),(?![-+!%^&*<>=:/|~^.])", "->", "::", "\\+=", "-=", "\\*=", "\\/=", "(?<!>)>>>=", "\\|=", "&=", "%=", "(?<!<)<<=", "(?<!>)>>=", "\\^=", "(?<![!=<^%&|/*+>-])=(?!=)"];

        line = line.trim().replace(";", " ");
        var counter = 0;
        for (var operater = 0; operater < operaters.length; operater++) {
            var rejex = new RegExp(operaters[operater], "g");
            line = line.replace(rejex, " ");
        }
        line = line.split(" ");
        for (var i = 0; i < line.length; i++) {
            if (line[i] != "") {
                if (Number.isInteger(Number(line[i]))) {
                    counter = counter + weight.Cs.Wnv;
                }
            }

        }
        return counter;
    } ,
    getNsl:(line) => {
        var counter = 0;
        var splitByPlus = line.split("+");
        for (var i = 0; i < splitByPlus.length; i++) {
            if (splitByPlus[i].match("\"[^\"]*\"")) {
                counter = counter + weight.Cs.Wsl;
            }
        }
        return counter;
    },
    objectVariableMethodClassIdentifier(line) {
        var classIdentyfer = "\\bclass\\b";
        var methodsIdentyfer = "((public|private|protected|static|final|native|synchronized|abstract|transient)+\\s)+[\\$_\\w\\<\\>\\w\\s\\[\\]]*\\s+[\\$_\\w]+\\([^\\)]*\\)?\\s*"
        var variabals = new RegExp("(\\w+\\s\\w+;|\\w+\\s\\w+\\s?=\\s?\\w?.+;|(\\w*(,(.*)))(?=;)|(\\w+\\[\\]))","g");
        var other = new RegExp("(public|private|protected|static|final|native|synchronized|abstract|transient|void|class|(\\bboolean\\s\\b)|(\\bbool\\s\\b)|(\\blong\\s\\b)|(\\bbyte\\s\\b)|(\\bshort\\s\\b)|(\\bdouble\\s\\b)|(\\bint\\s\\b)|(\\bfloat\\s\\b)|(\\bstring\\s\\b)|(\\bString\\s\\b)|(\\bchar\\s\\b)|\\(|\\)|\"[^\"]*\"|=|\\+|-|<|>|\\.|{|}|;|for|while|if|switch|\\d|\\s)","g");
        var counter = 0;

        if (line.match(classIdentyfer)) {
            counter = counter + 1;
        }else if (line.match(methodsIdentyfer)) {
            counter = counter + 1;
        }else {
           if (!line.match(variabals)||line.match(new RegExp("for|while|if|switch","g"))){
               var afterRepase = line.replace(other," ");
               var afterSpit = afterRepase.split(" ")
               for (var i=0 ; i < afterSpit.length;i++){
                   if (afterSpit[i]!=""){
                       counter = counter + 1;
                   }
               }
               console.log(afterSpit);
           }
        }




        return counter;

    },
    ForIdentifier(line) {
        var forPattern = new RegExp("(for\\s*\\()([a-zA-Z]*\\s*\\w*\\s*=?\\s*[a-zA-Z0-9]*;+\\s*)(\\w+\\s*[><=!][=]*\\s*[a-zA-Z0-9]+)((\\s*\\&\\&|\\s*\\|\\||\\s*\\&|\\s*\\|)(\\s*\\w+\\s*[><=!][=]*\\s*[a-zA-Z0-9]+))*(;\\s*[a-zA-Z]+\\+\\+)(\\)\\s*\\{)");
        var counter = 0;
        if (line.trim().match(forPattern)) {
            var splitforbysemicolen = line.split("/;/g");
            counter = 1;
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
};