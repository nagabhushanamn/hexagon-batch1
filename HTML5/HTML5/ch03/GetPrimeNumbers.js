// Import another JavaScript file. Note you can't use <script> tags.
importScripts("Utilities.js");

// Handles the message event, to perform work in a background thread.
function messageHandler(e) {
	
	// Get the JSON object passed in the event data.
	var lower = e.data.lowerNumber;
	var upper = e.data.upperNumber;
	var startTime = e.data.startTime;

	// Post a debug message back to the main page.
	postMessage( { type: "debug", 
	               message: "In worker, lowerNumber: " + lower + ", upperNumber: " + upper + ", startTime " + startTime} );

	// If the data is invalid, post a problem message to the main page.
	if (lower > upper) {
		postMessage( { type: "problem", 
		               message: "lowerNumber: " + lower + " is higher than upperNumber: " + upper } );
	}
	else {
	
		// Find all the prime numbers between the lower and upper limits.
		var primes = new Array();
		for (var n = lower; n <= upper; n++) { 
			if (isPrimeNumber(n)) { 
				// n is a prime number, so add it to the array of prime numbers.
				primes.push(n);
				
				// Send a debug message back to the main page.
				postMessage( { type: "debug", 
							   message: "found prime number " + n } );
			} 
		}
		
		// Send a result message back to the main page.
		postMessage( { type: "result", 
		               startTime: startTime, 
					   endTime: new Date(), 
					   allPrimes: primes } );
	}
}

addEventListener("message", messageHandler, true);
