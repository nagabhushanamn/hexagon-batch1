// Global variables.
var theInterval;
var msg;
var numReplies;
var gap;
var count = 0;

// Sleep for a specified number of milliseconds.
function doReply() {

	// Post a message to the main page.
	postMessage( { "msg": msg,
	               "replyNumber": ++count,
				   "totalReplies": numReplies });
	
	// If we've sent enough messages, clear the interval.
	if (count == numReplies) {
		clearInterval(theInterval);
	}
}

// Handles the message event, to perform work in a background thread.
function messageHandler(e) {

	// Get data from message and store in global variables.
	msg = e.data.msg.toUpperCase();
	numReplies = e.data.numReplies;
	gap = e.data.gap;

	// Set up an interval to post messages back to main page.
	theInterval = setInterval("doReply()", gap);
}

addEventListener("message", messageHandler, true);
