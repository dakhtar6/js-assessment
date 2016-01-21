exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  	//loop through string 1 - 
  		//loop through string 2 - check to see if i === j . If so, create var duplicate + arr[i] = true, then push arr[i] x amount

  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {

  	/* OPTION ONE - FOR LOOP THROUGH EACH STRING */

  	var reversedString = ""; 

    for (var i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    
    return reversedString; 

  	/* OPTION TWO - USE NATIVE ARRAY REVERSE METHOD

  	var splitString = str.split(""); 
   	var reversedString = splitString.reverse().join("");
   	return reversedString */

  }

};
