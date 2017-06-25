/**
 * Created by mwanjajoel on 25/06/2017.
 */

let http = require("http");

let server = http.createServer(function (request, response) {

    //we then write response headers
    response.writeHead(200, {'Content-Type': 'text/plain'});

    //we then end the response and send it back to the browser
    response.end("GOB SMACK!");


});

//setting a listening port
server.listen(3000, '127.0.0.1');
console.log("Yo dawgs, now listening to port 3000");