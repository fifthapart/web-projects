// requires too much memory
// uses sieve of Eratosthenes O(NloglogN)
var largestPrime_bad
largestPrime_bad = function (n) {
	var a
	a = new Array(n + 1)
	a.fill(true)
	a[0] = a[1] = false
	for (i = 2; i * i <= n; i++) {
		if (a[i]) {
			for (j = i * i; j <= n; j += i) {
				a[j] = false
			}
		}
	}
	var cand = null
	for (i = 1; i * i <= n; i++) {
		if (n%i === 0 && a[n/i]) {
			return n/i
		}
		else if (n%i === 0 && a[i]) {
			cand = i
		}
	}
	return cand
}

// O(sqrtN*logN) I think
var goldLargePrime
goldLargePrime = function (n) {
	limit = Math.ceil(n**0.5);
	for (i = 2; i <= limit; i++) {
		while (n%i === 0) {
			n /= i
			if (n === 1 || n === i) {
				return i
			}
		}
	}
}