// complete the given function

function palindrome(str){

	let i = 0;
	let j = str.length()-1;
	let flag = false;
	while(i <= j) {
		if(str[i]!=str[j]) {
			flag = true;
			break;
		}
		i++;
		j--;
	}
	if(flag != true) {
		return false;
	} else {
		return true;
	}

}
module.exports = palindrome
