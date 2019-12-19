var express = require("express");
var app = express();

// "/" route
app.get("/", function (req, res) {
	res.send("Hello there");
});

// "/bye" route
app.get("/bye", function (req, res) {
	res.send("Goodbye");
});

// Listen for requests
var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function () { console.log("Server Started") });