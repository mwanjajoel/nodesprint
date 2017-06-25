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

//this method deletes the file
//fs.unlink('writeFile.txt');

//this method creates a directory
fs.mkdir('stuff', function () {

    console.log("directory created");


})