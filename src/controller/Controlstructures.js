var weight = require("../assets/Weight.json");
var numbers = JSON.parse(localStorage.getItem('number'));
// Initialize patent
var forPattern = new RegExp("((?<!\\S)(for\\s*\\())|(while\\s*\\(.*\\)\\s*(?!\\s*;)|do\\s*\\{|do\\s*(?!.))");
var ifPattern = new RegExp("if\\s*\\([\\(\\)\\w\\.><=!%\\+\\*\\/\\- \\|\\&]*\\)")
var switchPattern = new RegExp("(switch\\s*\\()(\\w+\\s*[><=!\\*\\+-]*[=]*\\s*[a-zA-Z0-9]*\\)*)(\\))");
var whilePattern = new RegExp("(while\\s*\\()(\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*)((\\s*\\&\\&|\\s*\\|\\||\\s*\\&|\\s*\\|)(\\s*\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*))*(\\.\\w+\\(\\\"*\\w*\\\"*\\))*(\\)\\s*\\{?)");
//Initialize Arrays
var methedstart = [];
var methedend = [];
var classstart = [];
var classend = [];
var wtcs = [];
var NC = [];
var section = [];

export const Controlstructures = {


        wtcs: (line) => {
            if (line.match(forPattern)) { // check line equals to for paten
                if(!localStorage.getItem('number')) {
                    wtcs.push(weight.Ccs.loop);
                    return weight.Ccs.loop
                }
                else {
                    wtcs.push(numbers.ccs.loop);
                    return numbers.ccs.loop
                }
            } else if (line.match(ifPattern)) {// check line equals to if paten
                if(!localStorage.getItem('number')) {
                    wtcs.push(weight.Ccs.if_ifelse);
                    return weight.Ccs.if_ifelse;
                } else {
                    wtcs.push(numbers.ccs.if_ifelse);
                    return numbers.ccs.if_ifelse;
                }
            } else if (line.match(switchPattern)) {// check line equals to switch paten
                if(!localStorage.getItem('number')) {
                    wtcs.push(weight.Ccs.switch);
                    return weight.Ccs.switch
                }else {
                    wtcs.push(numbers.ccs.switch);
                    return numbers.ccs.switch
                }
            } else if (line.match(whilePattern)) { // check line equals to while paten
                if(!localStorage.getItem('number')) {
                    wtcs.push(weight.Ccs.loop);
                    return weight.Ccs.loop
                }else {
                    wtcs.push(numbers.ccs.loop);
                    return numbers.ccs.loop
                }
            } else if (line.match(/case/g)) { // check line equals to case paten
                if(!localStorage.getItem('number')) {
                    wtcs.push(weight.Ccs.case);
                    return weight.Ccs.case
                }else {
                    wtcs.push(numbers.ccs.case);
                    return numbers.ccs.case
                }
            } else {
                wtcs.push(0)
                return 0
            }
        },
        NC: (line) => {
            var numberOfConditions;
            if (line.match(forPattern)) {// check line equals to for paten
                NC.push(1);
                numberOfConditions = 1;
            } else if (line.match(ifPattern)) {// check line equals to if paten
                var areguments = line.trim();
                areguments = areguments.split(/\|\||&&/g);
                NC.push(areguments.length);
                numberOfConditions = areguments.length;
            } else if (line.match(switchPattern)) { // check line equals to switch paten
                var areguments1 = line.split(/\|\||&&/g);
                NC.push(areguments1.length);
                numberOfConditions = areguments1.length;
            } else if (line.match(whilePattern)) { // check line equals to while paten
                var areguments2 = line.split(/\|\||&&/g);
                NC.push(areguments2.length)
                numberOfConditions= areguments2.length;
            } else if (line.match(/case/g)) { // check line equals to case paten
                NC.push(1);
                numberOfConditions =  1;
            } else {
                NC.push(0);
                numberOfConditions =  0;
            }
            return numberOfConditions; // Return number of conditions
        },
        CcsppsAndCcsCal() { // calculate Ccspps value nad Ccs value
            for (let i = 0; i < section.length; i++) { // go thru all identified sections
                var oneSection = section[i];
                for (let j = 0; j < section.length; j++) {
                    var otherSection = section[j];
                    if (oneSection.start != otherSection.start) {
                        if (oneSection.start > otherSection.start && oneSection.end < otherSection.end) { // check nested control structures
                            section[i].Ccspps = otherSection.Ccs  // put Ccspps value to array
                            section[i].Ccs += section[i].Ccspps // put Ccs value to array
                        }
                    }
                }
            }
        },
        sortAlgo: () => { // sections sorting algorithm
            var len = section.length;
            for (var i = len - 1; i >= 0; i--) {
                for (var j = 1; j <= i; j++) {
                    var arr = section[j];
                    var arr1 = section[j - 1];
                    if (arr1.start > arr.start) {
                        var temp = section[j - 1];
                        section[j - 1] = section[j];
                        section[j] = temp;
                    }
                }
            }
        },
        d: () => {
            console.log(section);
        },
        sectionscaner: (file) => { // Identify control structures areas
            section = [];
            for (let i = 0; i < methedstart.length; i++) {
                var bracket = [];
                for (let j = methedstart[i] + 1; j < methedend[i]; j++) {
                    var line = file[j];
                    if (line.match("{")) {
                        bracket.push(j);
                    }
                    if (line.match("}")) {
                        var start = bracket.pop();
                        var startline = file[start];
                        var type, nameline;
                        if (startline.match(new RegExp("for|while|if|switch"))) {
                            type = startline.replace(new RegExp("\\(.+"), "").trim();
                            nameline = start
                        } else {
                            type = file[start - 1].replace(new RegExp("\\(.+"), "").trim();
                            nameline = start - 1;
                        }
                        var wtcs = Controlstructures.wtcs(file[nameline]);
                        var NC = Controlstructures.NC(file[nameline]);
                        var data = {
                            type: type,
                            start: start,
                            nameline: nameline,
                            end: j,
                            wtcs: wtcs,
                            NC: NC,
                            Ccspps: 0,
                            Ccs: wtcs * NC
                        }
                        section.push(data);
                    }
                }
            }
        },
        resultFeder: (index) => { // Return results to show in tables
            var sectionByOne;
            for (var i = 0; i < section.length; i++) {
                 sectionByOne = section[i];
                if (sectionByOne.nameline == index) {
                    break;
                }
                else {
                    sectionByOne =  {

                        wtcs: 0,
                        NC: 0,
                        Ccspps: 0,
                        Ccs: 0
                    };
                }
            }

                return sectionByOne;

        },
        classDetecter: (file) => { // Identify class length
            console.log(file);
            classstart = [];
            classend = [];
            var startBracket = null, lastBracket = null, bracket = [];
            for (var i = 0; i < file.length; i++) {
                if (file[i].match(/{/g)) { // Identify { becket line to array
                    if (startBracket === null) {
                        startBracket = i
                    }
                    bracket.push(i);// push { becket line to array
                }

                if (file[i].match(/}/g)) {// Identify } becket line to array

                    bracket.pop(); // pop { becket line
                    lastBracket = i
                }

                if (bracket.length === 0 && startBracket != null && lastBracket != null) {
                    classstart.push(startBracket); // put class start line to array
                    classend.push(lastBracket);  // put class end line to array
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
    }
;