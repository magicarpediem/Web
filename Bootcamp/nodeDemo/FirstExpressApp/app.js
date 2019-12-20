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

app.get("/r/:name", function (req, res) {
	res.send("Welcome to " + req.params.name);
});

app.get("*", function (req, res) {
	res.send("STARPLATINUM");
});

// Listen for requests
var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function () { console.log("Server Started") });