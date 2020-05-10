var weight = require("../assets/Weight.json");
export const methods = {
    Wmrt:(line)=>{
        var metherdpatrn = new RegExp("((public|private|protected|static|final|native|synchronized|abstract|transient)+\\s)+[\\$_\\w\\<\\>\\w\\s\\[\\]]*\\s+[\\$_\\w]+\\([^\\)]*\\)?\\s*");
        if (line.match(metherdpatrn)) {
            var codeline = line;
            codeline = codeline.split("(");
            if (codeline[0].match(/(\bboolean\s\b)|(\bbool\s\b)|(\blong\s\b)|(\bbyte\s\b)|(\bshort\s\b)|(\bdouble\s\b)|(\bint\s\b)|(\bfloat\s\b)|(\bstring\s\b)|(\bString\s\b)|(\bchar\s\b)/g)) {
                return weight.Cm.primitive_return;
            } else if (codeline[0].match(/(\bvoid\s\b)/g)) {
                return weight.Cm.void_return;
            } else {
                return weight.Cm.composite_return;
            }
        }  else {
            return 0;
        }
    },
    Npdtp:(line)=>{
        var metherdpatrn = new RegExp("((public|private|protected|static|final|native|synchronized|abstract|transient)+\\s)+[\\$_\\w\\<\\>\\w\\s\\[\\]]*\\s+[\\$_\\w]+\\([^\\)]*\\)?\\s*");
        if (line.match(metherdpatrn)) {
            var codeline = line;
            codeline = codeline.split(/\(|\)/g);
            console.log(codeline);
            if (codeline[1] != "") {
                var words = codeline[1].split(" ");
                for (var j = 0; j < words.length; j++) {

                    if (words[j].match(/(\bboolean\s\b)|(\bbool\s\b)|(\blong\s\b)|(\bbyte\s\b)|(\bshort\s\b)|(\bdouble\s\b)|(\bint\s\b)|(\bfloat\s\b)|(\bstring\s\b)|(\bString\s\b)|(\bchar\s\b)/g)) {
                        return weight.Cm.primitive_data_type
                    } else {
                        return 0
                    }
                }
            }  else {
                return 0;
            }
        }  else {
            return 0;
        }
    } ,
    Ncdtp:(line)=>{
        var metherdpatrn = new RegExp("((public|private|protected|static|final|native|synchronized|abstract|transient)+\\s)+[\\$_\\w\\<\\>\\w\\s\\[\\]]*\\s+[\\$_\\w]+\\([^\\)]*\\)?\\s*");
        if (line.match(metherdpatrn)) {
            var codeline = line;
            codeline = codeline.split(/\(|\)/g);
            console.log(codeline);
            if (codeline[1] != "") {
                var words = codeline[1].split(" ");
                for (var j = 0; j < words.length; j++) {

                    if (!words[j].match(/(\bboolean\s\b)|(\bbool\s\b)|(\blong\s\b)|(\bbyte\s\b)|(\bshort\s\b)|(\bdouble\s\b)|(\bint\s\b)|(\bfloat\s\b)|(\bstring\s\b)|(\bString\s\b)|(\bchar\s\b)/g)) {
                        return weight.Cm.composite_data_type
                    } else {
                        return 0
                    }
                }
            }
            else {
                return 0;
            }
        }
        else {
            return 0;
        }
    }
};