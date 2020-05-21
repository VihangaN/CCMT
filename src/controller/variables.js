var weight = require('../assets/Weight.json');
var methedstart = [];
var methedend = [];
var classstart = [];
var classend = [];
var allv = [];
var primitiv = [];
export const variables = {
    a: () => {
        console.log(methedstart);
        console.log(methedend);
        console.log(classstart);
        console.log(classend);
        console.log(allv);
        console.log(primitiv);
    },
    Wvs: (line, i) => {
        var metherdpatrn = new RegExp("((public|private|protected|static|final|native|synchronized|abstract|transient)+\\s)+[\\$_\\w\\<\\>\\w\\s\\[\\]]*\\s+[\\$_\\w]+\\([^\\)]*\\)?\\s*");

        if (line.match(/(\w+\s\w+;|\w+\s\w+\s?=\s?\w?.+;|(\w*(,(.*)))(?=;)|(\w+\[\]))/g)) {
            if (!line.match(/return/g) && !line.match(metherdpatrn)  && !line.match(new RegExp("for","g"))) {
                var flag = false;
                for (var x = 0; x < methedstart.length; x++) {

                    if (methedstart[x] <= i && i <= methedend[x]) {
                        flag = true;
                    }
                }
                allv.push(i);
                if (flag) {
                    return weight.Cv.Local
                } else {
                    return weight.Cv.Global
                }

            } else {
                return 0
            }
        } else {
            return 0
        }
    },
    Npdtv: (line, i) => {
        var metherdpatrn = new RegExp("((public|private|protected|static|final|native|synchronized|abstract|transient)+\\s)+[\\$_\\w\\<\\>\\w\\s\\[\\]]*\\s+[\\$_\\w]+\\([^\\)]*\\)?\\s*", "g");
        var variable = new RegExp("(?<=(\\bboolean\\s\\b)|(\\bbool\\s\\b)|(\\blong\\s\\b)|(\\bbyte\\s\\b)|(\\bshort\\s\\b)|(\\bdouble\\s\\b)|(\\bint\\s\\b)|(\\bfloat\\s\\b)|(\\bstring\\s\\b)|(\\bString\\s\\b)|(\\bchar\\s\\b))(\\w*)", "g");
        var maltyvariable = new RegExp("(?<=(\\bboolean\\s\\b)|(\\bbool\\s\\b)|(\\blong\\s\\b)|(\\bbyte\\s\\b)|(\\bshort\\s\\b)|(\\bdouble\\s\\b)|(\\bint\\s\\b)|(\\bfloat\\s\\b)|(\\bstring\\s\\b)|(\\bString\\s\\b)|(\\bchar\\s\\b))(\\w*(,(.*)))(?=;)", "g")
        if (line.match(/(\w+\s\w+;|\w+\s\w+\s?=\s?\w?.+;|(\w*(,(.*)))(?=;)|(\w+\[\]))/g)) {
            if (!line.match(/return/g) && !line.match(metherdpatrn)&&!line.match(new RegExp("for|while|if|switch","g"))) {
                if (line.match(maltyvariable)) {
                    var veribalMul = line.split(",");
                    primitiv.push(i);
                    return veribalMul.length * weight.Cv.Primitive;
                } else if (line.match(variable)) {
                    primitiv.push(i);
                    return weight.Cv.Primitive;
                } else {
                    return 0;
                }
            } else {
                return 0;
            }
        } else {
            return 0;
        }

    },
    Ncdtv: (line, i) => {
        var flag1 = false
        for (var j = 0; j < allv.length; j++) {
            if (allv[j] == i) {
                flag1 = true;
                var flag = false;
                for (var x = 0; x < primitiv.length; x++) {
                    if (primitiv[x] == i) {
                        flag = true;
                    }
                }

                if (flag) {
                    return 0
                } else {
                    return weight.Cv.Composite
                }
            }

        }

        if (!flag1){
            return 0;
        }
    },

    classDetecter: (result) => {
        console.log(result);
         classstart = [];
         classend = [];
         allv = [];
         primitiv = [];
        var startBracket = null, lastBracket = null, bracket = [];
        for (var i = 0; i < result.length; i++) {
            if (result[i].match(/{/g)) {
                if (startBracket === null) {
                    startBracket = i
                }
                bracket.push(i);
            }

            if (result[i].match(/}/g)) {

                bracket.pop();
                lastBracket = i
            }

            if (bracket.length === 0 && startBracket != null && lastBracket != null) {
                classstart.push(startBracket);
                classend.push(lastBracket);
            }
            if (bracket.length === 0) {
                startBracket = null;
                lastBracket = null;

            }
        }


    },
    MethodsDetecter: (result) => {
         methedstart = [];
         methedend = [];
        let startBracket = null, lastBracket = null, bracket = [];
        let methad = result;
        for (let j = 0; j < classstart.length; j++) {
            for (let i = classstart[j] + 1; i < classend[j]; i++) {
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

                if (bracket.length === 0 && startBracket != null && lastBracket != null) {
                    methedstart.push(startBracket);
                    methedend.push(lastBracket);
                }
                if (bracket.length === 0) {
                    startBracket = null;
                    lastBracket = null;

                }
            }
        }

    }
};