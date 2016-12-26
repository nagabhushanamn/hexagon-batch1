/**
 * http://usejsdoc.org/
 */

var SSE = require('sse-nodejs');

var express = require('express');

var app = express();

app.get('/sse', function(req, res) {
	res.sendFile(__dirname + '/ServerEvents.html')
});

app.get('/time', function(req, res) {
	var serverSent = SSE(res);
	serverSent.sendEvent('message', function() {
		return new Date
	}, 1000);
	serverSent.disconnect(function() {
		console.log("disconnected");
	})
	serverSent.removeEvent('time', 2000);
});

app.listen(3333);