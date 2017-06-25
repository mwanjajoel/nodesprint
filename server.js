/**
 * Created by mwanjajoel on 25/06/2017.
 */

let http = require("http");
let fs = require('fs');

let server = http.createServer(function (request, response) {

    //we then write response headers
    response.writeHead(200, {'Content-Type': 'text/plain'});

    //we create a readstream
   var theReadStream =  fs.createReadStream(__dirname + '/read.txt', 'utf8');

   //then we pipe it to the response
    theReadStream.pipe(response);



});

//setting a listening port
server.listen(3000, '127.0.0.1');
console.log("Yo dawgs, now listening to port 3000");