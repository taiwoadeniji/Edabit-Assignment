//Create a function that takes in a year and returns the correct century.//

function century(year) {
	var guess = year.toString();
	if(guess.substring(2)=="00"){
		return guess.substring(0,2)+"th century";
	} else {
		if(guess.substring(0,2)=="20"){
			return (Number(guess.substring(0,2))+1).toString()+"st century";
		} 
		return (Number(guess.substring(0,2))+1).toString()+"th century";
	}
}
// This code runs on edabit.//