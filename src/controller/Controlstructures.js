var weight = require("../assets/Weight.json");
var forPattern = new RegExp("(for\\s*\\()([a-zA-Z]*\\s*\\w*\\s*=?\\s*[a-zA-Z0-9]*;+\\s*)(\\w+\\s*[><=!][=]*\\s*[a-zA-Z0-9]+)((\\s*\\&\\&|\\s*\\|\\||\\s*\\&|\\s*\\|)(\\s*\\w+\\s*[><=!][=]*\\s*[a-zA-Z0-9]+))*(;\\s*[a-zA-Z]+\\+\\+)(\\)\\s*\\{)");
var forEachPattern = new RegExp("(for\\s*\\()([a-zA-Z]*\\s*\\w+\\s*:\\s*\\w+)(\\))");
var ifPattern = new RegExp("(\\w*\\s*if\\s*\\()(\\(*\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*\\)*)((\\s*\\&\\&|\\s*\\|\\||\\s*\\&|\\s*\\|)(\\s*\\(*\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*\\)*))*(\\.\\w+\\(\\\"*\\w*\\\"*\\))*(\\)\\s*\\{)");
var switchPattern = new RegExp("(switch\\s*\\()(\\w+\\s*[><=!\\*\\+-]*[=]*\\s*[a-zA-Z0-9]*\\)*)(\\))");
var whilePattern = new RegExp("(while\\s*\\()(\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*)((\\s*\\&\\&|\\s*\\|\\||\\s*\\&|\\s*\\|)(\\s*\\w+\\s*[><=!]*[=]*\\s*[a-zA-Z0-9]*))*(\\.\\w+\\(\\\"*\\w*\\\"*\\))*(\\)\\s*\\{?)");

export const Controlstructures = {
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
    NC:(line)=>{
        if (line.match(forPattern)){
            return 1;
        }else  if (line.match(forEachPattern)){
            return 0;
        }else  if (line.match(ifPattern)){
            var areguments = line.split(/(\|\||&&)/g);
            return areguments.length;
        }else  if (line.match(switchPattern)){

        }else  if (line.match(whilePattern)){

        }else  if (line.match(/case/g)){

        }else {
            return 0
        }
    }
};