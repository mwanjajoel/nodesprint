/**
 * Created by mwanjajoel on 25/06/2017.
 */

//this module helps us read and write files
var fs = require("fs");

//reading the contents of a file and writing to the console
var readMe = fs.readFile('read.txt', 'utf8', function (error, data) {

    console.log(data);

});


//writing to a file
var writeMe = fs.writeFile('writeFile.txt', readMe);