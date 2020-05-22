var weight = require("../assets/Weight.json");
var numbers = JSON.parse(localStorage.getItem('number'));
export const methods = {
    Wmrt:(line)=>{ // Identify method and method return type
        var metherdpatrn = new RegExp("((public|private|protected|static|final|native|synchronized|abstract|transient)+\\s)+[\\$_\\w\\<\\>\\w\\s\\[\\]]*\\s+[\\$_\\w]+\\([^\\)]*\\)?\\s*");
        if (line.match(metherdpatrn)) {
            var codeline = line;
            codeline = codeline.split("(");
            if (codeline[0].match(/(\bboolean\s\b)|(\bbool\s\b)|(\blong\s\b)|(\bbyte\s\b)|(\bshort\s\b)|(\bdouble\s\b)|(\bint\s\b)|(\bfloat\s\b)|(\bstring\s\b)|(\bString\s\b)|(\bchar\s\b)/g)) { // Identify method return type
                if (!localStorage.getItem('number')) {
                    return weight.Cm.primitive_return;
                }else {
                    return numbers.cm.primitive_return;
                }
            } else if (codeline[0].match(/(\bvoid\s\b)/g)) {
                if (!localStorage.getItem('number')) {
                    return weight.Cm.void_return;
                }else {
                    return numbers.cm.void_return;
                }
            } else {
                if (!localStorage.getItem('number')) {
                    return weight.Cm.composite_return;
                }else {
                    return numbers.cm.composite_return;
                }
            }
        }  else {
            return 0;
        }
    },
    Npdtp:(line)=>{ // Identify number of primitive parameters
        var metherdpatrn = new RegExp("((public|private|protected|static|final|native|synchronized|abstract|transient)+\\s)+[\\$_\\w\\<\\>\\w\\s\\[\\]]*\\s+[\\$_\\w]+\\([^\\)]*\\)?\\s*");
        if (line.match(metherdpatrn)) {
            var codeline = line;
            codeline = codeline.split(/\(|\)/g);
            console.log(codeline);
            if (codeline[1] != "") {
                var words = codeline[1].split(" ");
                for (var j = 0; j < words.length; j++) {

                    if (words[j].match(/(\bboolean\s\b)|(\bbool\s\b)|(\blong\s\b)|(\bbyte\s\b)|(\bshort\s\b)|(\bdouble\s\b)|(\bint\s\b)|(\bfloat\s\b)|(\bstring\s\b)|(\bString\s\b)|(\bchar\s\b)/g)) {
                        if (!localStorage.getItem('number')) {
                            return weight.Cm.primitive_data_type
                        }else {
                            return numbers.cm.primitive_dt;
                        }
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
    Ncdtp:(line)=>{ // Identify number of composite parameters
        var metherdpatrn = new RegExp("((public|private|protected|static|final|native|synchronized|abstract|transient)+\\s)+[\\$_\\w\\<\\>\\w\\s\\[\\]]*\\s+[\\$_\\w]+\\([^\\)]*\\)?\\s*");
        if (line.match(metherdpatrn)) {
            var codeline = line;
            codeline = codeline.split(/\(|\)/g);
            console.log(codeline);
            if (codeline[1] != "") {
                var words = codeline[1].split(" ");
                for (var j = 0; j < words.length; j++) {

                    if (!words[j].match(/(\bboolean\s\b)|(\bbool\s\b)|(\blong\s\b)|(\bbyte\s\b)|(\bshort\s\b)|(\bdouble\s\b)|(\bint\s\b)|(\bfloat\s\b)|(\bstring\s\b)|(\bString\s\b)|(\bchar\s\b)/g)) {
                        if (!localStorage.getItem('number')) {
                            return weight.Cm.composite_data_type
                        }else {
                            return numbers.cm.composite_dt;
                        }
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