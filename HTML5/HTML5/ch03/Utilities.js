// Returns a boolean to indicate if the num parameter is a prime number.
function isPrimeNumber(num) {

	// Deliberately inefficient algorithm!
	for (var i = 2; i < num; i++) {
		if (num % i == 0) {
			// i is a factor of num, so num isn't prime.
			return false;	
		}
	}
	// If we get this far, num must be prime.
	return true;
}
