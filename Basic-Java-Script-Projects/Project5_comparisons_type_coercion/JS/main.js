document.write(typeof "word"); // example of string data

document.write("<br>"); //Line Break
document.write("<br>"); //Line Break

document.write(typeof 3); // example of Number data

document.write("<br>"); //Line Break
document.write("<br>"); //Line Break

document.write("50" + 5); // coercion combining string and number example

document.write("<br>"); //Line Break
document.write("<br>"); //Line Break

document.write(2E310); // positive infinity example

document.write("<br>"); //Line Break
document.write("<br>"); //Line Break

document.write(-3E310); // negative infinity example

document.write("<br>"); //Line Break
document.write("<br>"); //Line Break

document.write(10 > 2); // 10 is greater than 2 example ture

document.write("<br>"); //Line Break 
document.write("<br>"); //Line Break

document.write( 10 < 2); // 10 is less than 2 example false




console.log(10 < 2); // console log method example

document.write("<br>"); //Line Break
document.write("<br>"); //Line Break

document.write( 10 == 10); //equal to symbol example true

document.write("<br>"); //Line Break
document.write("<br>"); //Line Break

document.write( 10 == 3); // equal to symbole example false

document.write("<br>"); //Line Break
document.write("<br>"); //Line Break

X= 10;
Y= 10;
document.write(X === Y); // tripple equal symbol example true

document.write("<br>"); //Line Break
document.write("<br>"); //Line Break

A= 12;
B= "13";
document.write(A === B); // tripple equal symbol example false

document.write("<br>"); //Line Break
document.write("<br>"); //Line Break

A= 12;
B= "12";
document.write(A === B); // tripple equal symbol example false

document.write("<br>"); //Line Break
document.write("<br>"); //Line Break

A= 12;
B= 13;
document.write(A === B); // tripple equal symbol example false

document.write("<br>"); //Line Break
document.write("<br>"); //Line Break

document.write(5 > 2 && 10 > 4); // And logical operator example true

document.write("<br>"); //Line Break
document.write("<br>"); //Line Break

document.write( 5 > 10 && 10 > 4); // And logical operator example false

document.write("<br>"); //Line Break
document.write("<br>"); //Line Break

document.write(5 > 10 || 10 > 4); // OR logical operator example true

document.write("<br>"); //Line Break
document.write("<br>"); //Line Break

document.write(5 > 10 || 10 > 20); // OR logical operator example false

document.write("<br>");
document.write("<br>");

function not_Function() { //defines and names function
	document.getElementById("misc").innerHTML = !(20 > 10); // not logical operator example false
}

document.write("<br>");

function dnot_Function() { //defines and names function
	document.getElementById("Dnot").innerHTML = !(5 > 10); //double not logical operator example true
}