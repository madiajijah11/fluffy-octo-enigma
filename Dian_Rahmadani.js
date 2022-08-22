//no 1 display Ok when multiple by 3, and display yes when multiple by 4
const displayOk = (word) => {
	if (word % 3 === 0 && word % 4 === 0) {
		return "OKYES";
	} else if (word % 3 === 0) {
		return "OK";
	} else if (word % 4 === 0) {
		return "YES";
	} else {
		return word;
	}
};
console.log(displayOk(1));
console.log(displayOk(2));
console.log(displayOk(3));
console.log(displayOk(4));
console.log(displayOk(5));
console.log(displayOk(6));
console.log(displayOk(7));
console.log(displayOk(8));
console.log(displayOk(9));
console.log(displayOk(10));
console.log(displayOk(11));
console.log(displayOk(12));
console.log(displayOk(13));
console.log(displayOk(14));
console.log(displayOk(15));

// no 2 isPalindrome
// return true if string is palindrome without using reverse upercase and lowercase
const isPalindrome = (word) => {
	let reverse = "";
	for (let i = word.length - 1; i >= 0; i--) {
		reverse += word[i];
	}
	return word.toLowerCase() === reverse.toLocaleLowerCase();
};

console.log(isPalindrome("maLam"));
console.log(isPalindrome("Level"));
console.log(isPalindrome("kasur ini ruSak"));
console.log(isPalindrome("aYam"));

// no 3 maxSecondNumber
const maxSecondNumber = (arrays) => {
	let max = 0;
	for (let i = 0; i < arrays.length; i++) {
		if (arrays[i] > max) {
			max = arrays[i];
		}
	}
	return max;
};

console.log(maxSecondNumber([12, 4, 8, 15, 67, 99, 3]));
