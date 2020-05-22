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
var wtcs = [];
var NC = [];
var section = [];

export const Controlstructures = {

        wtcs: (line) => {

            if (line.match(forPattern)) {
                wtcs.push(weight.Ccs.loop);
                return weight.Ccs.loop
            } else if (line.match(ifPattern)) {
                wtcs.push(weight.Ccs.if_ifelse);
                return weight.Ccs.if_ifelse;
            } else if (line.match(switchPattern)) {
                wtcs.push(weight.Ccs.switch);
                return weight.Ccs.switch
            } else if (line.match(whilePattern)) {
                wtcs.push(weight.Ccs.loop);
                return weight.Ccs.loop
            } else if (line.match(/case/g)) {
                wtcs.push(weight.Ccs.case);
                return weight.Ccs.case
            } else {
                wtcs.push(0)
                return 0
            }
        },
        NC: (line) => {
            if (line.match(forPattern)) {
                NC.push(1);
                return 1;
            } else if (line.match(ifPattern)) {
                var areguments = line.trim();
                console.log(areguments);
                console.log(areguments.split(/\|\||&&/g));
                areguments = areguments.split(/\|\||&&/g);
                NC.push(areguments.length);
                return areguments.length;
            } else if (line.match(switchPattern)) {
                var areguments1 = line.split(/\|\||&&/g);
                NC.push(areguments1.length);
                return areguments1.length;
            } else if (line.match(whilePattern)) {
                var areguments2 = line.split(/\|\||&&/g);
                NC.push(areguments2.length)
                return areguments2.length;
            } else if (line.match(/case/g)) {
                NC.push(1);
                return 1;
            } else {
                NC.push(0);
                return 0
            }
        },

        CcsppsAndCcsCal() {
            for (let i = 0; i < section.length; i++) {
                var oneSection = section[i];
                for (let j = 0; j < section.length; j++) {
                    var otherSection = section[j];
                    if (oneSection.start != otherSection.start) {
                        if (oneSection.start > otherSection.start && oneSection.end < otherSection.end) {
                            section[i].Ccspps = otherSection.Ccs
                            section[i].Ccs += section[i].Ccspps
                        }
                    }
                }
            }
        },

        sortAlgo: () => {
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
        sectionscaner: (file) => {
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

        resultFeder: (index) => {
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
    }
;