// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if(isDinner(cardNumber) === true) {
  	return 'Diner\'s Club';
  } else if (isAmerican(cardNumber) === true) {
  	return 'American Express';
  } else if (isSwitch(stringNum) === true) {
  	return 'Switch';
  } else if (isVisa(cardNumber) === true) {
  	return 'Visa';
  } else if (isMaster(cardNumber) === true) {
  	return 'MasterCard';
  } else if (isDiscover(cardNumber) === true) {
  	return 'Discover';
  } else if (isMaestro(cardNumber) === true) {
  	return 'Maestro';
  } else if (isChina(cardNumber) === true) {
  	return 'China UnionPay';
  }
};


function isDinner(stringNum) {
// prefix is 38 or 39
// length is 14	
	if (stringNum[0] === '3' && (stringNum[1] === '8' || stringNum[1] === '9')) {
		if (stringNum.length === 14) {
			return true;
		}
	}
}

function isAmerican(stringNum) {
// prefix is 34 or 37
// length is 15	
	if (stringNum[0] === '3' && (stringNum[1] === '4' || stringNum[1] === '7')) {
		if (stringNum.length === 15) {
			return true;
		}
	}
}

function isVisa(stringNum) {
// prefix 4
// length 13, 16, or 19	
	if (stringNum[0] === '4') {
		if (stringNum.length === 13 || stringNum.length === 16 || stringNum.length === 19) {
			return true;
		}
	}
}

function isMaster(stringNum) {
// prefix 51, 52, 53, 54, 55
// length 16
  	if (stringNum[0] === '5' && (stringNum[1] === '1' || stringNum[1] === '2' || stringNum[1] === '3' || stringNum[1] === '4' || stringNum[1] === '5')) {
		if (stringNum.length === 16) {
			return true;
		}
	}	
}

function isDiscover(stringNum) {
// prefix 6011, 65, 644-649
// length 16 or 19
	var string6011 = stringNum.slice(0, 4);
	var string65 = stringNum.slice(0, 2);

	if (string6011 === '6011' && (stringNum.length === 16 || stringNum.length === 19)) {
		return true;
	} else if (string65 === '65' && (stringNum.length === 16 || stringNum.length === 19)) {
		return true;
	} else { 
		for (var i = 644; i <= 649; i++) {
        var num = i
		var prefix = num.toString()

		if (prefix === stringNum.slice(0, 3) && (stringNum.length === 16 || stringNum.length === 19)) {
			return true;
		}
	    }
	} 
}

function isMaestro(stringNum) {
// prefix 5018, 5020, 5038, 6304
// length 12-19	
	var arr = ['5018', '5020', '5038', '6304'];

	if (arr.indexOf(stringNum.slice(0, 4)) > -1) {
		if (stringNum.length >= 12 && stringNum.length <= 19) {
			return true;
		}
	} 
}

function isChina(stringNum) {
// prefix 622126-622925, 624-626, or 6282-6288
// length 16-19	
	for (prefix = 622126; prefix <= 622925; prefix++) {
		for (length = 16; length <= 19; length++) {
			if (stringNum.slice(0, 6) === preffix.toString() && (length >=16 && length <= 19)) {
				return true;
			}
	}
	}

	for (prefix = 624; prefix <= 626; prefix++) {
		for (length = 16; length <= 19; length++) {
			if (stringNum.slice(0, 3) === preffix.toString() && (length >=16 && length <= 19)) {
				return true;
			}
	}
	}

	for (prefix = 6282; prefix <= 6288; prefix++) {
		for (length = 16; length <= 19; length++) {
			if (stringNum.slice(0, 4) === preffix.toString() && (length >=16 && length <= 19)) {
				return true;
			}
	}
	}
}


function isSwitch(stringNum) {
// prefix 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759
// length 16, 18 or 19
	var numFour = ['4903', '4905', '4911', '4936', '6333', '6759'];
	var numSix = ['564182', '633110'];

	if (numFour.indexOf(stringNum.slice(0, 4)) > -1 && (stringNum.length === 16 || stringNum.length === 18 || stringNum.length === 19)) {
		return true;
	} else if (numSix.indexOf(stringNum.slice(0, 6)) > -1 && (stringNum.length === 16 || stringNum.length === 18 || stringNum.length === 19)) {
		return true;
	}
}
