// complete the given function

function palindrome(str){
let l=0,r=str.length-1;
	str=str.toLowerCase();
	while(l<r) if(str[l++]!==str[r--]) return false;
	return true;
}
module.exports = palindrome
