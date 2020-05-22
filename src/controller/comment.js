export const comment = {
    multipalCommentidentify:(file) =>{//Multi pal comment checker
       var filetext = file;

        var start = [], end = [];
        var a = new RegExp("\\/\\*.+", "g")
        var b = new RegExp(".\\*\\/", "g")
        for (var i = 0; i < filetext.length; i++) {

            if (filetext[i].trim().match(a)) { // Identify comments start location
                start.push(i);
            }
            if (filetext[i].trim().match(b)) { // Identify comments end location
                end.push(i);
            }
        }
        for (var j = 0; j < start.length; j++) {
            for (var x = start[j]; x <= end[j]; x++) { // Remove comments
                filetext[x] = "";
            }
        }
        return filetext
    },

    singalComment:(file) =>{ //Single line comment checker
        var filetext = file;
        //Single line comment paten
        var b = new RegExp("\\/\\/", "g")
        for (var i = 0; i < filetext.length; i++) {

            //Identify Single line comment location
            if (filetext[i].trim().match(b)) {
                var filter = filetext[i].split(b);
                //Remove Single line comment
                filetext[i] = filter[0];
            }
        }
        return filetext;
    }
};