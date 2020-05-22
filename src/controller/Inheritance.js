var weight =  require("../assets/Weight.json");
var numbers = JSON.parse(localStorage.getItem('number'));
var classnames = [];
var parentclass = [];
var chaildclass = [];
export const Inheritance = {
    classnamesIdenfy: (result) => { // Identify classes name

        classnames = [];
        parentclass = [];
        chaildclass = [];

        for (var i = 0; i < result.length; i++) {
            if (result[i].match(/class/g)) {
                var line = result[i].replace("{", "");
                var splitline = line.split(/class|extends/g); //Identify inherited classes name
                classnames.push(splitline[1].trim());
                if (splitline.length != 2) {
                    parentclass.push(splitline[1].trim())
                    chaildclass.push(splitline[2].trim())
                }
            }
        }

    },
    Ndi: (line) => { //Identify and calculate number of direct inheritance
        if (line.match(/class/g)) {
            if (line.match(/extends/g)) {
                var splitline = line.split(/class|extends/g);
                for (var x = 0; x < classnames.length; x++) {
                    if (splitline[1].trim() == classnames[x]) {
                        return 1;
                    }
                }
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    },
    Nidi: (line) => { //Identify and calculate number of indirect inheritance
        var count = 0;
        line = line.replace("{", "")
        if (line.match(/class/g)) {
            if (line.match(/extends/g)) {
                var splitline = line.split(/class|extends/g);

                var inheritClassName = splitline[2].trim()
                for (var i = 0; i < parentclass.length; i++) {
                    if (parentclass[i] == inheritClassName) {
                        inheritClassName = chaildclass[i];
                        i = 0;
                        count++;
                    }
                }
            }
        }
        return count
    },
    Ci:(tid)=>{  // return weight for number of inheritances

        if (tid == 1){
            if(!localStorage.getItem('number')) {
                return weight.Ci.by_one_class
            }else {
                return numbers.ci.by_one_class
            }
        }else if (tid == 2){
            if(!localStorage.getItem('number')) {
                return weight.Ci.by_two_class
            }else {
                return numbers.ci.by_two_class
            }
        }else if (tid == 3){
            if(!localStorage.getItem('number')) {
                return weight.Ci.by_three_class
            }else {
                return numbers.ci.by_three_class
            }
        }else if (tid >= 4){
            if(!localStorage.getItem('number')) {
            return weight.Ci.by_more_than_three_class
            }else {
                return numbers.ci.by_more_than_three_class
            }
        }else {
            return 0;
        }
    }
};