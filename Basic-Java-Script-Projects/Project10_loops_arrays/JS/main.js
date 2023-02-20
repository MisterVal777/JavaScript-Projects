function Call_Loop() {  //This is a function using "while loop".
	var Digit = "";
	var X = 1;
	while (X <11) {
		Digit += "<br>" + X;
		X++;
	}
	document.getElementById("Loop").innerHTML = Digit;
}

function String_Length() { //This function counts the string length.
    let text = "My boy Hayd'n";
    document.getElementById("Length").innerHTML = text.length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() { //This function uses a "for loop".
	for (Y = 0; Y < Instruments.length; Y++) {
	Content += Instruments[Y] + "<br>";
	}
	document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { //This is an "array fuinction".
	var Haydn_Picture = [];
	Haydn_Picture[0] = "Sleeping on the bed";
	Haydn_Picture[1] = "playing";
	Haydn_Picture[2] = "eating";
	Haydn_Picture[3] = "connecting";
	document.getElementById("Array").innerHTML = "In this picture, Haydn is " + Haydn_Picture[3] + " with me.";
}
function constant_function() { //This is a "Constant function"
	const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
	Musical_Instrument.color = "blue";
	Musical_Instrument.price = ": $900";
	document.getElementById("constant").innerHTML = "The cost of the " + Musical_Instrument.type + Musical_Instrument.price;
}



var X = 82; //This is a let function
function Let_Function() {
	let X= 33;
	document.getElementById("Let").innerHTML = X;
}

function Return_Function() { // HTis is a retun function
    Return = Math.PI;
    document.getElementById("Return").innerHTML = Math.PI;
}

let dirtbike = { //This is an example of creating an object with properties and a method
    make: "KTM ",
    model: "sx450f ",
    year: "2018 ",
    color: "orange ",
    description : function() {
        return "The dirtbike is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("dirtbike_Object").innerHTML = dirtbike.description() ;

let text = ""; //This is a statement using "continue"
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("Continue").innerHTML = text;

let Texts = ""; //this is a statement using "Break"
for (let Z = 0; Z < 10; Z++) {
  if (Z === 3) { break; }
  Texts += "The number is " + Z + "<br>";
}

document.getElementById("Break").innerHTML = Texts;