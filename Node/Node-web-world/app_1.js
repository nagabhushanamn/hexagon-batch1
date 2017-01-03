

let http = require('http');

let server = http.createServer();

server.on('request', function (req, resp) {


    // by path
    // by params
    // by headers
    // by any condition

    // resp.write('Welcome to web-world');
    // resp.end();


    if (req.url === "/a" && req.method === 'GET') {
        resp.write('welcome /a');
        resp.end();
    }
    if (req.url === "/b") {
        resp.write('welcome /b');
        resp.end();
    }

});

server.listen(3000, function () {
    console.log('server running....');
})