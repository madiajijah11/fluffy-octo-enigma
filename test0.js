//return the string yes if the number given is part of the fibonacci sequence. Otherwise return the string no.
function MathChallenge(num) {
	const fib = [0, 1];
	for (let i = 2; i <= num; i++) {
		fib[i] = fib[i - 2] + fib[i - 1];
		if (fib[i] === num) {
			return "yes";
		}
	}
	return "no";
}

console.log(MathChallenge(54));
console.log(MathChallenge(34));


// take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1
function CheckNum(num1, num2) {
	if (num1 > num2) {
		return "false";
	} else if (num1 < num2) {
		return "true";
	} else {
		return "-1";
	}
}

console.log(CheckNum(3, 122));
console.log(CheckNum(67, 67));
console.log(CheckNum(2, 1));