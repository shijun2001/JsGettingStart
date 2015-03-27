// let us work together

//This is Jun's task: write a javascript function to get length of a string 

function getStringLen(str) {
	var n = str.length;
	return n;
}



//This is Wei's task: generate a random string with given length

function generateRandomString(strlength) {
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var result = '';
	for(i = 0; i < strLength; i++) {
		var index = Math.floor(Math.random() * strLength) + 1;
		result += alphabet[index];
	};

	return result;
	
} 


//Run
var testString = 'Hello';
var strLength = getStringLen(testString);
var resultString = generateRandomString(strLength);

console.log('test string: ' + testString);
console.log('result string: ' + resultString);