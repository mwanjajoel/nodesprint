/**
 * Created by mwanjajoel on 25/06/2017.
 */
var fs = require("fs");

var myReadableStream = fs.createReadStream(__dirname + '/read.txt');

//we then listen in on the stream for data chunks via an event
myReadableStream.on('data', function (chunk) {

    console.log("Data Stream has been received:");
    console.log(chunk);

});

