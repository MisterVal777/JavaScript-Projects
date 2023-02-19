function full_Sentence() { //this is a Concat() method.
	var part_1 = "This  ";
	var part_2 = "is now  ";
	var part_3 = "a complete "; 
	var part_4 = "sentence.";
	var whole_sentence = part_1.concat(part_2, part_3, part_4);
	document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { //this is a slice method.
	var Sentence = "Training dogs every weekend still doesnt seem to be enough.";
	var Section = Sentence.slice(9,13);
	document.getElementById("slice").innerHTML = Section;
}

function string_Method() { //this is a toString method.
	var X=453;
	document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //this is a toprecision method.
	var X = 12938.3012987376112;
	document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_Method() { //this is a tofixed method.
    var N = 6.899;
    document.getElementById("Fixed").innerHTML = N.toFixed();
}

function valueof_Method() { //this is a valueOf method.
    let text = "Hello World";
    document.getElementById("Value").innerHTML = text.valueOf();
}