/*
 * WebSocketServer demo
 * --------------------
 *
 * This server uses the Node.js WebSocketServer module. So type the following in a command prompt:
 *    npm install websocket@1.0.3
 * 
 * To start this server, type the following in a command prompt:
 *    node socketserverWS.js
 *
 * To test this server is running, open a browser and enter this URL:  
 *    http://localhost:8888   (this should display index.html in the browser)
 *
 * To run the client, copy socketclient.html to the localhost folder and enter this URL in a browser:
 *    http://localhost/socketclient.html
 */


var WebSocketServer = require('websocket').server;
var http = require('http');
var fs = require('fs');


/* ================================================================================================= 
 * HTTP handler
 * =================================================================================================*/

// Create an HTTP server object.
var server = http.createServer(onHttpRequest);
 
// Handle HTTP requests.
function onHttpRequest(request, response) {
	console.log((new Date()) + ' Received HTTP request for ' + request.url);

	if(request.url == "/socketClient.html") {
		fs.readFile(__dirname + '/socketClient.html', function(err, data) {
			if (err) {
				res.writeHead(500);
				return response.end('Error loading index.html');
			}

			response.writeHead(200);
			return response.end(data);
		});
	} else {
		response.writeHead(404);
		response.end();
	}
}

// Start the HTTP server object listening on port 8888.
server.listen(8888, function() {
	console.log((new Date()) + ' Server is listening on port 8888');
});


/* ================================================================================================= 
 * Web Sockets server
 * =================================================================================================*/

// Create a WebSocketServer object.
var wsServer = new WebSocketServer({
	httpServer : server,              // Use the HTTP server object.
	autoAcceptConnections : true     // Don't automatically accept connections - always check orrigin!
});

// Maintain a collection of clients.
var clientList = new Array();

// Handle Web Socket requests.
wsServer.on('request', onWsRequest);

function onWsRequest(request) {
	
	console.log("ws request event...");

	// Check the client origin to see if we want to accept or reject the request.
	if (request.origin != "http://localhost:8888") {
		console.log((new Date()) + ' REJECTING incoming WS request from ' + request.origin);
		request.reject();
		return;
	}

	console.log((new Date()) + ' ACCEPTING incoming WS request from ' + request.origin);
	var connection = request.accept(null, request.origin);
	clientList.push(connection);

	// Handle connection message events.
	connection.on('message', function(message) {
		if (message.type === 'utf8') {
			console.log('Received text message: ' + message.utf8Data);
			connection.sendUTF('Server bouncing back message: ' + message.utf8Data);
		} else if(message.type === 'binary') {
			console.log('Received binary message of ' + message.binaryData.length + ' bytes');
			connection.sendBytes(message.binaryData);
		} else {
			console.log('Received unknown data-type ' + message.type);
		}
	});

	// Handle connection close events.
	connection.on('close', function(reasonCode, description) {
		console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');

		// Remove connection from list.
		var idx = clientList.indexOf(connection);
		clientList.splice(idx, 1);
	});
}

// Helper function, sends a message to all current clients.
function sendServerMessage() {
	for(var i = clientList.length - 1; i >= 0; i--) {
		var client = clientList[i];
		if(client.connected) {
			console.log(new Date() + ' sending server message to ' + client.remoteAddress)
			client.sendUTF('Server time=' + new Date().toLocaleTimeString() + ', Connected clients=' + clientList.length);
		}
	};
}

var sendProcess = setInterval(sendServerMessage, 1000);
