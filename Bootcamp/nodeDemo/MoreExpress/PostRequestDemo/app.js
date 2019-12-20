var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var friends = ["Friend 1", "Friend 2", "Friend 3"];

app.get("/", function (req, res) {
	res.render("home");
});

app.post("/addFriend", function (req, res) {
	friends.push(req.body.friendName);
	res.redirect("/friends");
});

app.get("/friends", function (req, res) {
	res.render("friends", { friends: friends });
});

var port = process.env.PORT | 3000;
app.listen(port, process.env.IP, function () { console.log("server started"); });