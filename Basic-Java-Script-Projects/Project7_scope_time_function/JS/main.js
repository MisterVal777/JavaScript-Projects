var X = 10; //this is a global variable.
function Add_numbers_1() {
	document.write(20 + X + "<br>");
}
function Add_numbers_2() {
	document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();
//---------------------------------------------------------------------------------

function Add_numbers_3() {
	var Z = 10; //this is a local variable.
	document.write(20 + Z +"<br>");
}
function Add_numbers_4() {
	document.write(Z + 100);
	}
Add_numbers_3();
Add_numbers_4();
//---------------------------------------------------------------------------------

function Add_numbers_5() {
	var A = 10;//this is a local variable
	console.log(20 + A +"<br>");//using console.log for debugging.
}
function Add_numbers_6() {
	console.log(A + 100);//using console.log for debugging.
	}
Add_numbers_5();
Add_numbers_6();
//---------------------------------------------------------------------------------

function Get_Date(){ 
	if (new Date().getHours() < 24) {
	document.getElementById("Greetings").innerHTML = "How are you today?";
	}
}
//---------------------------------------------------------------------------------

function Get_toWork(){ 
	if (new Date().getHours() < 24) {
	document.getElementById("work").innerHTML = "Keep busy you got this!";
	}
}
//---------------------------------------------------------------------------------

function Age_Function() { //function using if, else statment.
	Age = document.getElementById("Age").value;
	if (Age >= 18) {
	Race = "You are old enough to race!"
	}
	else {
		Race = "You are not old enough to race!";
	}
	document.getElementById("How_old_are_you").innerHTML = Race;
}
//---------------------------------------------------------------------------------

function Time_function() { // function using if, else, and else if statement.
	var Time = new Date().getHours();
	var Reply;
	if (Time < 12 == Time > 0) {
		Reply = "It is morning time!";
	}
	else if (Time >= 12 == Time <18) {
		Reply = "It is afternoon"
	}
	else {
		Reply = "It is evening time.";
	}
	document.getElementById("Time_of_day").innerHTML = Reply;
}