var weight = require('../assets/Weight.json');
var numbers = JSON.parse(localStorage.getItem('number'));

export const Size = {

    getNkw: (line) => { // Identify number of key words in a line
        const keywords = ["abstract", "break", "case", "catch", "class", "continue", "default", "double", "enum", "extends", "final", "finally", "implements", "import", "instanceof", "interface", "native", "new", "null", "package", "private", "protected", "public", "return", "static", "strictfp", "super", "synchronized", "this", "throw", "throws", "transient", "try", "void", "volatile"]
        var counter = 0;
        for (var i = 0; i < keywords.length; i++) {
            if (line.match(keywords[i])) {
                if (numbers.length == 0) {
                    console.log("if Nkw");
                    counter = counter + weight.Cs.Wkw;
                }else {
                    counter = counter + numbers.cs.wkv;
                    console.log("else Nkw");
                }

            }

        }
        return counter;
    },
    getNid:(line) => { // Identify number of identifiers in a line
        var classIdentyfer = "\\bclass\\b";
        var methodsIdentyfer = "((public|private|protected|static|final|native|synchronized|abstract|transient)+\\s)+[\\$_\\w\\<\\>\\w\\s\\[\\]]*\\s+[\\$_\\w]+\\([^\\)]*\\)?\\s*"
        var variabals = new RegExp("(\\w+\\s\\w+;|\\w+\\s\\w+\\s?=\\s?\\w?.+;|(\\w*(,(.*)))(?=;)|(\\w+\\[\\]))","g");
        var other = new RegExp("(public|private|protected|static|final|native|synchronized|abstract|transient|void|class|(\\bboolean\\s\\b)|(\\bbool\\s\\b)|(\\blong\\s\\b)|(\\bbyte\\s\\b)|(\\bshort\\s\\b)|(\\bdouble\\s\\b)|(\\bint\\s\\b)|(\\bfloat\\s\\b)|(\\bstring\\s\\b)|(\\bString\\s\\b)|(\\bchar\\s\\b)|\\(|\\)|\"[^\"]*\"|=|\\+|-|<|>|\\.|{|}|;|for|while|if|switch|\\d|\\s)","g");
        var counter = 0;

        if (line.match(classIdentyfer)) {
            if (numbers.length == 0) {
                counter = counter + weight.Cs.Wid;
            }else {
                counter = counter + numbers.cs.wid;
            }

        }else if (line.match(methodsIdentyfer)) {
            if (numbers.length == 0) {
                counter = counter + weight.Cs.Wid;
            }else {
                counter = counter + numbers.cs.wid;
            }
        }else {
            if (!line.match(variabals)||line.match(new RegExp("for|while|if|switch","g"))){
                var afterRepase = line.replace(other," ");
                var afterSpit = afterRepase.split(" ")
                for (var i=0 ; i < afterSpit.length;i++){
                    if (afterSpit[i]!=""){
                        if (numbers.length == 0) {
                            counter = counter + weight.Cs.Wid;
                        }else {
                            counter = counter + numbers.cs.wid;
                        }
                    }
                }
                console.log(afterSpit);
            }
        }
        return counter;

    },
    getNop:(line) => { // Identify number of operations in a line
        const operaters = ["(?<!\\+)\\+(?![+=])", "(?<!-)-(?![-=>])", "\\*(?!=)", "(?<!\\/)\\/(?![=/*])", "%(?!=)", "\\+\\+", "--", "==", "!=", "(?<![->])>(?![>=])", "(?<![<])<(?![<=])", "(?<!>)>=", "(?<!<)<=", "&&", "\\|\\|", "!(?!=)", "(?<!\\|)\\|((?![|=]))", "\\^(?!=)", "~", "(?<![<])<<(?![<=])", "(?<![>])>>(?![>=])", ">>>(?!=)", "<<<", "(?<![-+!%^&*<>=:/|~^.]),(?![-+!%^&*<>=:/|~^.])", "->", "::", "\\+=", "-=", "\\*=", "\\/=", "(?<!>)>>>=", "\\|=", "&=", "%=", "(?<!<)<<=", "(?<!>)>>=", "\\^=", "(?<![!=<^%&|/*+>-])=(?!=)", "(?<![-+!%^&*<>=:\\|~^.])\\.(?![-+!%^&*<>=:\\|~^.])"];
        var counter = 0;
        var templine = line;
        for (var operater = 0; operater < operaters.length; operater++) {
            var rejex = new RegExp(operaters[operater], "g");
            templine.replace(rejex, function (finder) {
                if (numbers.length == 0) {
                    counter = counter + weight.Cs.Wop;
                }else {
                    counter = counter + numbers.cs.wop;
                }
                console.log(finder);
                finder = " ";
                return finder;
            });
        }
        return counter;
    } ,
    getNnv:(line) => { // Identify number of numerical values in a line
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
                    if (numbers.length == 0) {
                        counter = counter + weight.Cs.Wnv;
                    }else {
                        counter = counter + numbers.cs.wnv;
                    }
                }
            }

        }
        return counter;
    } ,
    getNsl:(line) => {  // Identify number of string literals in a line
        var counter = 0;
        var splitByPlus = line.split("+");
        for (var i = 0; i < splitByPlus.length; i++) {
            if (splitByPlus[i].match("\"[^\"]*\"")) {
                if (numbers.length == 0) {
                    counter = counter + weight.Cs.Wsl;
                }else {
                    counter = counter + numbers.cs.wsl;
                }
            }
        }
        return counter;
    }
};