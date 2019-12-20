var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
	res.render("home");
});

app.get("/catch/:poke", function (req, res) {
	var poke = req.params.poke;
	res.render("caught", { poke: poke });
});

app.get("/posts", function (req, res) {
	var posts = [
		{ title: "title 1", author: "author 1" },
		{ title: "title 2", author: "author 2" },
		{ title: "title 3", author: "author 3" },
	]
	res.render("posts", { posts: posts });
});

var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function () { console.log("Server Started"); });