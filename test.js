//no 1 display Ok when multiple by 3, and display yes when multiple by 4
const displayOk = (word) => {
	let result = "";
	if (word % 3 === 0 && word % 4 === 0) {
		result = "OKYES";
	} else if (word % 3 === 0) {
		result = "OK";
	} else if (word % 4 === 0) {
		result = "YES";
	} else {
		result = word;
	}
	return result;
};
console.log(displayOk(15));

// no 2 isPalindrome
// return true if string is palindrome without using upercase and lowercase
const isPalindrome = (word) => {
	const words = word.length;
	for (let i = 0; i < words / 2; i++) {
		if (word[i].toUpperCase() !== word[words - 1 - i].toUpperCase()) {
			return false;
		}
	}
	return true;
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
