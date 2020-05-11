var weight = require("../assets/Weight.json");
var classnames = [];
var parentclass = [];
var chaildclass = [];
export const Inheritance = {
    classnamesIdenfy: (result) => {

        classnames = [];
        parentclass = [];
        chaildclass = [];

        for (var i = 0; i < result.length; i++) {
            if (result[i].match(/class/g)) {
                var line = result[i].replace("{", "");
                var splitline = line.split(/class|extends/g);
                console.log(splitline);
                classnames.push(splitline[1].trim());
                console.log(splitline.length == 2);
                if (splitline.length != 2) {
                    parentclass.push(splitline[1].trim())
                    chaildclass.push(splitline[2].trim())
                }
            }
        }
        console.log(classnames);
        console.log(parentclass);
        console.log(chaildclass);
    },
    Ndi: (line) => {
        if (line.match(/class/g)) {
            if (line.match(/extends/g)) {
                console.log(line);
                var splitline = line.split(/class|extends/g);
                console.log(splitline);
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
    Nidi: (line) => {
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
    Ci:(tid)=>{

        if (tid == 1){
            return weight.Ci.by_one_class
        }else if (tid == 2){
            return weight.Ci.by_two_class
        }else if (tid == 3){
            return weight.Ci.by_three_class
        }else if (tid >= 4){
            return weight.Ci.by_more_than_three_class
        }else {
            return 0;
        }
    }
};