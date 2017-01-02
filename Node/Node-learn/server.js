


// to create HTTP server

let http = require('http');
let fs = require('fs');

var server = http.createServer();  // Event Emitter


server.on('request', function (req, resp) {

    // resp.writeHead(200, { 'Content-Type': "text/plain" });
    // resp.write('Hello All, Welcome to Node world');
    // resp.end();

    // resp.writeHead(200, { 'Content-Type': "video/mp4" });    
    // fs.readFile('jony.mp4', function (err, data) {
    //     resp.write(data);
    //     resp.end();
    // });

    resp.writeHead(200, { 'Content-Type': "video/mp4" });
    var rs = fs.createReadStream('jony.mp4'); // Event Emitter
   
    // rs.on('data', function (chunk) {
    //     //console.log(chunk.length);
    //     resp.write(chunk);
    // });
    // rs.on('end', function () {
    //     resp.end();
    // });

    rs.pipe(resp);


    console.log('going back to event-loop. to take next action');


});

server.listen(8080, function () {
    console.log('server running at http://localhost:8080/');
});