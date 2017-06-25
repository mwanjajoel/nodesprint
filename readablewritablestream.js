/**
 * Created by mwanjajoel on 25/06/2017.
 */
var fs = require("fs");

var myReadableStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');
var myWritableStream = fs.createWriteStream(__dirname + '/write.txt');

//we then listen in on the stream for data chunks via an event
/** myReadableStream.on('data', function (chunk) {

    console.log("Data Stream has been received:");

    //we then write the chunk to the file.
    myWritableStream.write(chunk);

}); **/

//now using Pipes
myReadableStream.pipe(myWritableStream);

