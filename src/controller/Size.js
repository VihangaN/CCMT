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

  /*  getNid:(line) => {
       console.log(line);
    },*/

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
    }
};