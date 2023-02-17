function Vote_Function() { //This Javascript utilizes a ternary operation using input form browser.
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough"; 
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {  //This is Java object constructor using "this" and "new" with function to display in HTML
	this.Vehicle_Make = Make;
	this.Vehicle_Model = Model;
	this.Vehicle_Year = Year;
	this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail hawk", 2019, "white and black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
	document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-Colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Nest_Function() { //Nested function counting up 1 from 2
	document.getElementById("Nested_Function").innerHTML = Count();
	function Count() {
		var Starting_point = 2;
		function Plus_one() {Starting_point += 1;}
		Plus_one();
		return Starting_point;
	}
}