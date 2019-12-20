var express = require("express");
var app = express();

// "/" route
app.get("/", function (req, res) {
	res.send("Hello there! Welcome to my assignment");
});

// "/bye" route
app.get("/speak/:animal", function (req, res) {
	var animal = req.params.animal;
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof Woof!"
	}
	var sound = sounds[animal];
	if (sound == null) {
		res.redirect("../*");
	}
	else {
		res.send("The " + animal + " says '" + sound + "'");
	}
	// if (animal === "pig") {
	// 	res.send("The " + animal + " says 'Oink'");
	// } else if (animal === "cow") {
	// 	res.send("The " + animal + " says 'Moo'");
	// } else if (animal === "dog") {
	// 	res.send("The " + animal + " says 'Woof Woof!'");
	// } else {
	// 	res.redirect("../*");
	// }
});

app.get("/repeat/:str/:n", function (req, res) {
	var str = req.params.str;
	var n = req.params.n;
	if (!isNaN(n)) {
		var result = "";
		for (var i = 0; i < n; i++) {
			result += str + " ";
		}
		res.send(result);
	} else {
		res.redirect("../../*");
	}
});

app.get("*", function (req, res) {
	res.send("Sorry, page not found... What are you doing with your life?");
});

// Listen for requests
var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function () { console.log("Server Started") });