var weight = require('../assets/Weight.json');
export const Size = {

    getNkw: (line) => { // Identify number of key words in a line
        const keywords = ["abstract", "break", "case", "catch", "class", "continue", "default", "double", "enum", "extends", "final", "finally", "implements", "import", "instanceof", "interface", "native", "new", "null", "package", "private", "protected", "public", "return", "static", "strictfp", "super", "synchronized", "this", "throw", "throws", "transient", "try", "void", "volatile"]
        var counter = 0;
        for (var i = 0; i < keywords.length; i++) {
            if (line.match(keywords[i])) {
                counter = counter + weight.Cs.Wkw;

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
    getNop:(line) => { // Identify number of operations in a line
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
                    counter = counter + weight.Cs.Wnv;
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
                counter = counter + weight.Cs.Wsl;
            }
        }
        return counter;
    }
};