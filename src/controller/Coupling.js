var weight = require("../assets/Weight.json");
var recarsueMetherd = [];
var recarsueMetherdFile = [];
var recarsuemethedstart = [];
var recarsuemethedend = [];

var nomalMetherd = [];
var nomalMetherdFile = [];
var nomalmethedstart = [];
var nomalmethedend = [];

var GlobalVariabals = [];
var GlobalVariabalsFile = [];

var methedstart = [];
var methedend = [];
var classstart = [];
var classend = [];

var metherdpatrn1 = new RegExp("((public|private|protected|static|final|native|synchronized|abstract|transient)+\\s)+[\\$_\\w\\<\\>\\w\\s\\[\\]]*\\s+[\\$_\\w]+\\([^\\)]*\\)?\\s*");
var metherdpatrn2 = new RegExp("((public|private|protected|static|final|native|synchronized|abstract|transient)+\\s)+[\\$_\\w\\<\\>\\w\\s\\[\\]]*\\s");
var variableKeyWordRemover = new RegExp("(public|private|protected|static|final|native|synchronized|abstract|transient|boolean|bool|long|byte|short|double|int|float|string|String|char|.+]|.+>)", "g");
var methodCall = new RegExp("([^\\W:.,()\\s]+)\\s*\\(|::([^W:.,()\\s]+)");
export const Coupling = {


    Nr: (line) => {
        for (let i = 0; i < recarsueMetherd.length; i++) {

            if (line.match(new RegExp("(" + recarsueMetherd[i] + ")\\s*\\(|::([^W:.,()\\s]+)", "g")) && !line.match(variableKeyWordRemover)) {
                console.log(line);
                return weight.Ccp.Wr;

            } else {
                return 0;
            }
        }
    },
    Nmcms: (line, fileindex, lineindex) => {
        console.log(line.match(methodCall) && !line.match(variableKeyWordRemover) && !line.match(new RegExp("for|while|if|switch")));
        if (line.match(methodCall) && !line.match(variableKeyWordRemover) && !line.match(new RegExp("for|while|if|switch"))) {
            for (let i = 0; i < nomalMetherdFile.length; i++) {

                if (nomalMetherdFile[i] == fileindex) {
                    if (nomalmethedstart[i] <= lineindex && lineindex <= nomalmethedend[i]) {

                        for (let j = 0; j < nomalMetherd.length; j++) {

                            if (line.match(new RegExp("(" + nomalMetherd[j] + ")\\s*\\(|::([^W:.,()\\s]+)", "g")) && !line.match(variableKeyWordRemover)) {
                                console.log(line);
                                if (nomalMetherdFile[j] == fileindex) {
                                    return weight.Ccp.Wmcms;
                                } else {
                                    return 0;
                                }

                            } else {
                                return 0;
                            }
                        }
                    } else {
                        return 0;
                    }
                } else {
                    return 0;
                }
            }
        } else {
            return 0;
        }
    },
    Nmcmd: (line, fileindex, lineindex) => {
        if (line.match(methodCall) && !line.match(variableKeyWordRemover) && !line.match(new RegExp("for|while|if|switch"))) {
            for (let i = 0; i < nomalMetherdFile.length; i++) {

                if (nomalMetherdFile[i] == fileindex) {
                    if (nomalmethedstart[i] <= lineindex && lineindex <= nomalmethedend[i]) {

                        for (let j = 0; j < nomalMetherd.length; j++) {

                            if (line.match(new RegExp("(" + nomalMetherd[j] + ")\\s*\\(|::([^W:.,()\\s]+)", "g")) && !line.match(variableKeyWordRemover)) {
                                console.log(line);
                                if (nomalMetherdFile[j] != fileindex) {
                                    return weight.Ccp.Wmcmd;
                                } else {
                                    return 0;
                                }

                            } else {
                                return 0;
                            }
                        }
                    } else {
                        return 0;
                    }
                } else {
                    return 0;
                }
            }
        } else {
            return 0;
        }
    },
    Nmcrms: (line, fileindex, lineindex) => {
        if (line.match(methodCall) && !line.match(variableKeyWordRemover) && !line.match(new RegExp("for|while|if|switch"))) {
            for (let i = 0; i < nomalMetherdFile.length; i++) {

                if (nomalMetherdFile[i] == fileindex) {
                    if (nomalmethedstart[i] <= lineindex && lineindex <= nomalmethedend[i]) {

                        for (let j = 0; j < recarsueMetherd.length; j++) {

                            if (line.match(new RegExp("(" + recarsueMetherd[j] + ")\\s*\\(|::([^W:.,()\\s]+)", "g")) && !line.match(variableKeyWordRemover)) {
                                console.log(line);
                                if (recarsueMetherdFile[j] == fileindex) {
                                    return weight.Ccp.Wmcrms;
                                } else {
                                    return 0;
                                }
                            } else {
                                return 0;
                            }
                        }
                    } else {
                        return 0;
                    }
                } else {
                    return 0;
                }
            }
        } else {
            return 0;
        }
    },
    Nmcrmd: (line, fileindex, lineindex) => {
        if (line.match(methodCall) && !line.match(variableKeyWordRemover) && !line.match(new RegExp("for|while|if|switch"))) {
            for (let i = 0; i < nomalMetherdFile.length; i++) {

                if (nomalMetherdFile[i] == fileindex) {
                    if (nomalmethedstart[i] <= lineindex && lineindex <= nomalmethedend[i]) {

                        for (let j = 0; j < recarsueMetherd.length; j++) {

                            if (line.match(new RegExp("(" + recarsueMetherd[j] + ")\\s*\\(|::([^W:.,()\\s]+)", "g")) && !line.match(variableKeyWordRemover)) {
                                console.log(line);
                                if (recarsueMetherdFile[j] != fileindex) {
                                    return weight.Ccp.Wmcrmd;
                                } else {
                                    return 0;
                                }
                            } else {
                                return 0;
                            }
                        }
                    } else {
                        return 0;
                    }
                } else {
                    return 0;
                }
            }
        } else {
            return 0;
        }
    },
    Nrmcrms: (line, fileindex, lineindex) => {
        if (line.match(methodCall) && !line.match(variableKeyWordRemover) && !line.match(new RegExp("for|while|if|switch"))) {
            for (let i = 0; i < recarsueMetherdFile.length; i++) {

                if (recarsueMetherdFile[i] == fileindex) {
                    if (recarsuemethedstart[i] <= lineindex && lineindex <= recarsuemethedend[i]) {

                        for (let j = 0; j < recarsueMetherd.length; j++) {

                            if (line.match(new RegExp("(" + recarsueMetherd[j] + ")\\s*\\(|::([^W:.,()\\s]+)", "g")) && !line.match(variableKeyWordRemover)) {
                                console.log(line);
                                if (recarsueMetherdFile[j] == fileindex) {
                                    return weight.Ccp.Wrmcrms;
                                } else {
                                    return 0;
                                }
                            } else {
                                return 0;
                            }
                        }
                    } else {
                        return 0;
                    }
                } else {
                    return 0;
                }
            }
        } else {
            return 0;
        }
    },
    Nrmcrmd: (line, fileindex, lineindex) => {
        if (line.match(methodCall) && !line.match(variableKeyWordRemover) && !line.match(new RegExp("for|while|if|switch"))) {
            for (let i = 0; i < recarsueMetherdFile.length; i++) {

                if (recarsueMetherdFile[i] == fileindex) {
                    if (recarsuemethedstart[i] <= lineindex && lineindex <= recarsuemethedend[i]) {

                        for (let j = 0; j < recarsueMetherd.length; j++) {

                            if (line.match(new RegExp("(" + recarsueMetherd[j] + ")\\s*\\(|::([^W:.,()\\s]+)", "g")) && !line.match(variableKeyWordRemover)) {
                                console.log(line);
                                if (recarsueMetherdFile[j] != fileindex) {
                                    return weight.Ccp.Wrmcrmd;
                                } else {
                                    return 0;
                                }
                            } else {
                                return 0;
                            }
                        }
                    } else {
                        return 0;
                    }
                } else {
                    return 0;
                }
            }
        } else {
            return 0;
        }
    },
    Nrmcms: (line, fileindex, lineindex) => {
        if (line.match(methodCall) && !line.match(variableKeyWordRemover) && !line.match(new RegExp("for|while|if|switch"))) {
            for (let i = 0; i < recarsueMetherdFile.length; i++) {

                if (recarsueMetherdFile[i] == fileindex) {
                    if (recarsuemethedstart[i] <= lineindex && lineindex <= recarsuemethedend[i]) {

                        for (let j = 0; j < nomalMetherd.length; j++) {

                            if (line.match(new RegExp("(" + nomalMetherd[j] + ")\\s*\\(|::([^W:.,()\\s]+)", "g")) && !line.match(variableKeyWordRemover)) {
                                console.log(line);
                                if (nomalMetherdFile[j] == fileindex) {
                                    return weight.Ccp.Wrmcms;
                                } else {
                                    return 0;
                                }

                            } else {
                                return 0;
                            }
                        }
                    } else {
                        return 0;
                    }
                } else {
                    return 0;
                }
            }
        } else {
            return 0;
        }
    },
    Nrmcmd: (line, fileindex, lineindex) => {
        if (line.match(methodCall) && !line.match(variableKeyWordRemover) && !line.match(new RegExp("for|while|if|switch"))) {
            for (let i = 0; i < recarsueMetherdFile.length; i++) {

                if (recarsueMetherdFile[i] == fileindex) {
                    if (recarsuemethedstart[i] <= lineindex && lineindex <= recarsuemethedend[i]) {

                        for (let j = 0; j < nomalMetherd.length; j++) {

                            if (line.match(new RegExp("(" + nomalMetherd[j] + ")\\s*\\(|::([^W:.,()\\s]+)", "g")) && !line.match(variableKeyWordRemover)) {
                                console.log(line);
                                if (nomalMetherdFile[j] != fileindex) {
                                    return weight.Ccp.Wrmcms;
                                } else {
                                    return 0;
                                }

                            } else {
                                return 0;
                            }
                        }
                    } else {
                        return 0;
                    }
                } else {
                    return 0;
                }
            }
        } else {
            return 0;
        }
    },
    Nmrgvs: (line, fileindex, lineindex) => {

        for (let i = 0; i < nomalMetherdFile.length; i++) {
            if (nomalMetherdFile[i] == fileindex) {
                if (nomalmethedstart[i] <= lineindex && lineindex <= nomalmethedend[i]) {
                    if (line.match(/(\w+\s\w+;|\w+\s\w+\s?=\s?\w?.+;|(\w*(,(.*)))(?=;)|(\w+\[\]))/g)) {
                        if (!line.match(/return/g) && !line.match(metherdpatrn1) && !line.match(new RegExp("for", "g"))) {
                            for (var j = 0; j < GlobalVariabals.length; j++) {
                                if (line.match(new RegExp(GlobalVariabals[j]))) {
                                    if (fileindex == GlobalVariabalsFile[j]) {
                                        weight.Ccp.Wmrgvs;
                                    } else {
                                        return 0;
                                    }
                                } else {
                                    return 0;
                                }
                            }
                        } else {
                            return 0;
                        }
                    } else {
                        return 0;
                    }
                } else {
                    return 0;
                }
            } else {
                return 0;
            }
        }
    },
    Nmrgvd: (line, fileindex, lineindex) => {
        for (let i = 0; i < nomalMetherdFile.length; i++) {
            if (nomalMetherdFile[i] == fileindex) {
                if (nomalmethedstart[i] <= lineindex && lineindex <= nomalmethedend[i]) {
                    if (line.match(/(\w+\s\w+;|\w+\s\w+\s?=\s?\w?.+;|(\w*(,(.*)))(?=;)|(\w+\[\]))/g)) {
                        if (!line.match(/return/g) && !line.match(metherdpatrn1) && !line.match(new RegExp("for", "g"))) {
                            for (var j = 0; j < GlobalVariabals.length; j++) {
                                if (line.match(new RegExp(GlobalVariabals[j]))) {
                                    if (fileindex != GlobalVariabalsFile[j]) {
                                        weight.Ccp.Wmrgvd;
                                    } else {
                                        return 0;
                                    }
                                } else {
                                    return 0;
                                }
                            }
                        } else {
                            return 0;
                        }
                    } else {
                        return 0;
                    }
                } else {
                    return 0;
                }
            } else {
                return 0;
            }
        }
    },
    Nrmrgvs: (line, fileindex, lineindex) => {
        for (let i = 0; i < recarsueMetherdFile.length; i++) {
            if (recarsueMetherdFile[i] == fileindex) {
                if (recarsuemethedstart[i] <= lineindex && lineindex <= recarsuemethedend[i]) {
                    if (line.match(/(\w+\s\w+;|\w+\s\w+\s?=\s?\w?.+;|(\w*(,(.*)))(?=;)|(\w+\[\]))/g)) {
                        if (!line.match(/return/g) && !line.match(metherdpatrn1) && !line.match(new RegExp("for", "g"))) {
                            for (var j = 0; j < GlobalVariabals.length; j++) {
                                if (line.match(new RegExp(GlobalVariabals[j]))) {
                                    if (fileindex == GlobalVariabalsFile[j]) {
                                        weight.Ccp.Wrmrgvs;
                                    } else {
                                        return 0;
                                    }
                                } else {
                                    return 0;
                                }
                            }
                        } else {
                            return 0;
                        }
                    } else {
                        return 0;
                    }
                } else {
                    return 0;
                }
            } else {
                return 0;
            }
        }
    },
    Nrmrgvd: (line, fileindex, lineindex) => {
        for (let i = 0; i < recarsueMetherdFile.length; i++) {
            if (recarsueMetherdFile[i] == fileindex) {
                if (recarsuemethedstart[i] <= lineindex && lineindex <= recarsuemethedend[i]) {
                    if (line.match(/(\w+\s\w+;|\w+\s\w+\s?=\s?\w?.+;|(\w*(,(.*)))(?=;)|(\w+\[\]))/g)) {
                        if (!line.match(/return/g) && !line.match(metherdpatrn1) && !line.match(new RegExp("for", "g"))) {
                            for (var j = 0; j < GlobalVariabals.length; j++) {
                                if (line.match(new RegExp(GlobalVariabals[j]))) {
                                    if (fileindex != GlobalVariabalsFile[j]) {
                                        weight.Ccp.Wrmrgvd;
                                    } else {
                                        return 0;
                                    }
                                } else {
                                    return 0;
                                }
                            }
                        } else {
                            return 0;
                        }
                    } else {
                        return 0;
                    }
                } else {
                    return 0;
                }
            } else {
                return 0;
            }
        }
    },
    methodTypeIdentyfer: (file, index) => {
        for (var i = 0; i < methedstart.length; i++) {
            var functionNmae = '';
            var line, lineSplit;
            if (file[methedstart[i]].match(metherdpatrn1)) {
                line = file[methedstart[i]];
                line = line.replace(metherdpatrn2, "");
                lineSplit = line.split("(");
                functionNmae = lineSplit[0];
            } else if (file[methedstart[i] - 1].match(metherdpatrn1)) {
                line = file[methedstart[i]];
                line = line.replace(metherdpatrn2, "");
                lineSplit = line.split("(");
                functionNmae = lineSplit[0];
            }
            console.log(functionNmae);
            var flag = false;
            var start, end;
            for (var j = methedstart[i]; j <= methedend[i]; j++) {
                start = methedstart[i];
                end = methedend[i];
                if (file[j].match(new RegExp("(" + functionNmae + ")\\s*\\(|::([^W:.,()\\s]+)", "g")) && !file[j].match(variableKeyWordRemover)) {
                    console.log(file[j]);
                    flag = true;
                    break;
                }
            }

            if (flag) {
                recarsueMetherd.push(functionNmae)
                recarsueMetherdFile.push(index)
                recarsuemethedstart.push(start);
                recarsuemethedend.push(end)
            } else {
                nomalMetherd.push(functionNmae);
                nomalMetherdFile.push(index);
                nomalmethedstart.push(start);
                nomalmethedend.push(end);
            }
        }
    },
    GlobalVariabalsIdentyfer: (file, index) => {
        for (var i = 0; i < file.length; i++) {
            if (file[i].match(/(\w+\s\w+;|\w+\s\w+\s?=\s?\w?.+;|(\w*(,(.*)))(?=;)|(\w+\[\]))/g)) {
                if (!file[i].match(/return/g) && !file[i].match(metherdpatrn1) && !file[i].match(new RegExp("for", "g"))) {
                    var flag = false;
                    for (var x = 0; x < methedstart.length; x++) {

                        if (methedstart[x] <= i && i <= methedend[x]) {
                            flag = true;
                        }
                    }

                    if (!flag) {
                        var line = file[i];
                        line = line.replace(variableKeyWordRemover, "").trim();
                        if (line.match(new RegExp("(=.+)", "g"))) {
                            line = line.replace(new RegExp("(=.+)", "g"), "").trim();
                        }


                        GlobalVariabals.push(line);
                        GlobalVariabalsFile.push(index);
                    }

                }
            }
        }
    },
    classDetecter: (file) => {
        console.log(file);
        classstart = [];
        classend = [];
        var startBracket = null, lastBracket = null, bracket = [];
        for (var i = 0; i < file.length; i++) {
            if (file[i].match(/{/g)) {
                if (startBracket === null) {
                    startBracket = i
                }
                bracket.push(i);
            }

            if (file[i].match(/}/g)) {

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
    MethodsDetecter: (file) => {
        methedstart = [];
        methedend = [];
        let startBracket = null, lastBracket = null, bracket = [];
        let methad = file;
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