var weight = require("../assets/Weight.json");
var forPattern = new RegExp("(for\\s*\\()([a-zA-Z]*\\s*\\w*\\s*=?\\s*[a-zA-Z0-9]*;+\\s*)(\\w+\\s*[><=!][=]*\\s*[a-zA-Z0-9]+)((\\s*\\&\\&|\\s*\\|\\||\\s*\\&|\\s*\\|)(\\s*\\w+\\s*[><=!][=]*\\s*[a-zA-Z0-9]+))*(;\\s*[a-zA-Z]+\\+\\+)(\\)\\s*\\{)");
var forEachPattern = new RegExp("(for\\s*\\()([a-zA-Z]*\\s*\\w+\\s*:\\s*\\w+)(\\))");

var ifPattern = new RegExp("if\\s*\\([\\(\\)\\w\\.><=!%\\+\\*\\/\\- \\|\\&]*\\)")//"(\\w*\\s*if\\s*\\()(\\(*\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*\\)*)((\\s*\\&\\&|\\s*\\|\\||\\s*\\&|\\s*\\|)(\\s*\\(*\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*\\)*))*(\\.\\w+\\(\\\"*\\w*\\\"*\\))*(\\)\\s*\\{)");

var switchPattern = new RegExp("(switch\\s*\\()(\\w+\\s*[><=!\\*\\+-]*[=]*\\s*[a-zA-Z0-9]*\\)*)(\\))");
var whilePattern = new RegExp("(while\\s*\\()(\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*)((\\s*\\&\\&|\\s*\\|\\||\\s*\\&|\\s*\\|)(\\s*\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*))*(\\.\\w+\\(\\\"*\\w*\\\"*\\))*(\\)\\s*\\{?)");
//var scaner = [];
export const Controlstructures = {

/*
    sectionscaner: (cord) => {

    },
*/

    wtcs: (line) => {

        if (line.match(forPattern)) {
            return weight.Ccs.loop
        } else if (line.match(forEachPattern)) {
            return weight.Ccs.loop
        } else if (line.match(ifPattern)) {
            return weight.Ccs.if_ifelse
        } else if (line.match(switchPattern)) {
            return weight.Ccs.switch
        } else if (line.match(whilePattern)) {
            return weight.Ccs.loop
        } else if (line.match(/case/g)) {
            return weight.Ccs.case
        } else {
            return 0
        }
    },
    NC: (line) => {
        if (line.match(forPattern)) {
            return 1;
        } else if (line.match(forEachPattern)) {
            return 0;
        } else if (line.match(ifPattern)) {
            var areguments = line.trim();
            console.log(areguments);
                console.log(areguments.split(/\|\||&&/g));
                areguments =areguments.split(/\|\||&&/g);
            return areguments.length;
        } else if (line.match(switchPattern)) {
            var areguments1 = line.split(/\|\||&&/g);
            return areguments1.length;
        } else if (line.match(whilePattern)) {
            var areguments2 = line.split(/\|\||&&/g);
            return areguments2.length;
        } else if (line.match(/case/g)) {
            return 1;
        } else {
            return 0
        }
    }
};