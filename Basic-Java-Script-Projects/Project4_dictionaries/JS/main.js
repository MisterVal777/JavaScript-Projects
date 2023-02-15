function my_Dictionary() {
	var Dirtbike = {
		Manufactuer:"KTM",
		Size:"450cc",
		Color:"Orange",
		Year:2018,
		Sound:"Braaap!"
	}
    delete Dirtbike.Sound;
	document.getElementById("Dictionary").innerHTML = Dirtbike.Sound;
}