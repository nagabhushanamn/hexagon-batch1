// Sleeps for a specified number of milliseconds.
function sleep(delay) {
	var start = new Date().getTime();
	while (new Date().getTime() < start + delay)
		;
}

// Handles the message event, to perform work in a background thread.
function messageHandler(e) {
	sleep(5000);
	postMessage(e.data.toUpperCase());
}

addEventListener("message", messageHandler, true);
