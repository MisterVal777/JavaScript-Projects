function addition_Function() { //defines and names function
	var addition = 5 + 10; //defining variable and giving it an addition value
	document.getElementById("Math").innerHTML = "=" + addition; //returns 15
}

function subtraction_Function() { //defines and names function
	var Subtraction = 5 - 2; //defining variable and giving it a subtraction value
	document.getElementById("Subt").innerHTML = "=" + Subtraction; //returns 3
}

function multiplication_Function() { //defines and names function
	var simple_Math = 5 * 2; // defining variable and giving it a multiplication value
	document.getElementById("mult").innerHTML = "=" + simple_Math; //returns 10
}

function division_Function() { //defines and names function
	var simple_Math = 50 / 2; //defining a variable and giving it a division value
	document.getElementById("divid").innerHTML = "=" + simple_Math; //returns 25
}

function more_Math() { //defines and names function
	var simple_Math = (1 + 2) * 10 / 2 -5; // defining variable and giving it mulit operator math value
	document.getElementById("more").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math; //returns total of 10

}

function modulus_Operator() { //defines and names function
	var simple_Math = 25 % 6; // defining a variable and giving it a modulus value
	document.getElementById("mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math; //returns remainder 1
}

function negation_Operator() { //defines and names function
	var x = 10; //defining a variable and giving it a value of 10
	document.getElementById("neg").innerHTML = -x; //return -10
}

function increment_Operator() { //defines and names function
	var Z = 10; //defining a variable and giving it a value of 10
	Z++ // incrementing variable Z
	document.getElementById("inc").innerHTML = Z; // increments 10 to 11
}

function decrement_Operator() { //defines and names function
	var C = 11; //defining a variable and giving it a value of 11
	C--; //decrement variable C
	document.getElementById("dec").innerHTML = C; //decrements 11 to 10
}

function random_Operator() { //defines and names function
	
	document.getElementById("ran").innerHTML = (Math.random() * 100); // returns random number between 0-100
}

function math_Pi() { //defines and names function
	document.getElementById("obj").innerHTML = Math.PI // returns PI
}