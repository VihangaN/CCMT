var weight = require("../assets/Weight.json");
var forPattern = new RegExp("((?<!\\S)(for\\s*\\())|(while\\s*\\(.*\\)\\s*(?!\\s*;)|do\\s*\\{|do\\s*(?!.))");
var ifPattern = new RegExp("if\\s*\\([\\(\\)\\w\\.><=!%\\+\\*\\/\\- \\|\\&]*\\)")
var switchPattern = new RegExp("(switch\\s*\\()(\\w+\\s*[><=!\\*\\+-]*[=]*\\s*[a-zA-Z0-9]*\\)*)(\\))");
var whilePattern = new RegExp("(while\\s*\\()(\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*)((\\s*\\&\\&|\\s*\\|\\||\\s*\\&|\\s*\\|)(\\s*\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*))*(\\.\\w+\\(\\\"*\\w*\\\"*\\))*(\\)\\s*\\{?)");
//var scaner = [];
var methedstart = [];
var methedend = [];
var classstart = [];
var classend = [];
var wtcs ,NC= [];
export const Controlstructures = {



    wtcs: (line,index) => {

        if (line.match(forPattern)) {
            wtcs[index] =weight.Ccs.loop;
            return weight.Ccs.loop
         } else if (line.match(ifPattern)) {
            wtcs[index] =weight.Ccs.if_ifelse
            return weight.Ccs.if_ifelse;
        } else if (line.match(switchPattern)) {
            wtcs[index] =weight.Ccs.switch;
            return weight.Ccs.switch
        } else if (line.match(whilePattern)) {
            wtcs[index] =weight.Ccs.loop
            return weight.Ccs.loop
        } else if (line.match(/case/g)) {
            wtcs[index] =weight.Ccs.case;
            return weight.Ccs.case
        } else {
            wtcs[index] = 0;
            return 0
        }
    },
    NC: (line , index) => {
        if (line.match(forPattern)) {
            NC[index] = 1;
            return 1;
        } else if (line.match(ifPattern)) {
            var areguments = line.trim();
            console.log(areguments);
                console.log(areguments.split(/\|\||&&/g));
                areguments =areguments.split(/\|\||&&/g);
            NC[index] = areguments.length;
            return areguments.length;
        } else if (line.match(switchPattern)) {
            var areguments1 = line.split(/\|\||&&/g);
            NC[index] = areguments1.length
            return areguments1.length;
        } else if (line.match(whilePattern)) {
            var areguments2 = line.split(/\|\||&&/g);
            NC[index] = areguments2.length
            return areguments2.length;
        } else if (line.match(/case/g)) {
            NC[index] = 1
            return 1;
        } else {
            NC[index] = 0;
            return 0
        }
    },
    sectionscaner: (cord) => {
        for (let i = 0; i < cord.length; i++) {
            console.log(cord[i]);
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