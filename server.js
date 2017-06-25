/**
 * Created by mwanjajoel on 25/06/2017.
 */

let http = require("http");
let fs = require('fs');

let server = http.createServer(function (request, response) {

    //we then write response headers
   // response.writeHead(200, {'Content-Type': 'text/html'});

    //we create a readstream
  // var theReadStream =  fs.createReadStream(__dirname + '/index.html', 'utf8');

   //then we pipe it to the response
    //  theReadStream.pipe(response);

    //returning JSON data
    response.writeHead(200, {'Content-Type': 'application/json'});

    //we create a simple JSON object
    var theJsonData = {

        name: 'Joel',
        job: 'Codebender',
        age: 24
    }

    response.end(JSON.stringify(theJsonData));



});

//setting a listening port
server.listen(3000, '127.0.0.1');
console.log("Yo dawgs, now listening to port 3000");