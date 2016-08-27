// naive solution: iterate through range
var threesAndFives_ON
threesAndFives = function(threshold) {
	var theSum = 0
	for (i = 1; i < threshold; i++) {
		if (i%3 === 0 || i%5 === 0)
		{
			theSum += i
		}
	}
	return theSum
}

// Constant time: take advantage of consecutive integer sums
// Remove duplicate munbers divisible by 3 and 5
var golden3and5 //O(N)
golden3and5 = function(n) {
    n -= 1 // not including n
    var three_num = Math.floor(n / 3)
    var five_num = Math.floor(n / 5)
    var fifteen_num = Math.floor(n / 15)
    var three_sum = 3 * three_num * (three_num + 1) / 2 //teehee
    var five_sum = 5 * five_num * (five_num + 1) / 2
    var fifteen_sum = 15 * fifteen_num * (fifteen_num + 1) /2
    total = three_sum + five_sum - fifteen_sum
    return total
}