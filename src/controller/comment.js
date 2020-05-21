export const comment = {
    multipalCommentidentify:(file) =>{
       var filetext = file;

        var start = [], end = [];
        var a = new RegExp("\\/\\*.+", "g")
        var b = new RegExp(".\\*\\/", "g")
        for (var i = 0; i < filetext.length; i++) {
           // console.log(filetext[i].trim().match("\\/\\*.+"));
            if (filetext[i].trim().match(a)) {
                start.push(i);
            }
            if (filetext[i].trim().match(b)) {
                end.push(i);
            }
        }
        for (var j = 0; j < start.length; j++) {
            for (var x = start[j]; x <= end[j]; x++) {
                filetext[x] = "";
            }
        }
        return filetext
    },

    singalComment:(file) =>{
        var filetext = file;
        var b = new RegExp("\\/\\/", "g")
        for (var i = 0; i < filetext.length; i++) {
            if (filetext[i].trim().match(b)) {
                var filter = filetext[i].split(b);
                filetext[i] = filter[0];
            }
        }
        return filetext;
    }
};