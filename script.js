// complete the given function

function palindrome(str){

	let s = str.reverse();
	if(s===str) {
		return true;
	} else {
		return false;
	}

}
module.exports = palindrome
