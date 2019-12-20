var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/results", function (req, res) {
	request("http://www.omdbapi.com/?s=" + req.query.s + "&apikey=thewdb", function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var movies = JSON.parse(body);
			if (movies["Search"] == null) {
				res.render("home", { movies: movies })
			} else {
				res.render("results", { movies: movies });
			}
		}
	});
});

app.get("/", function (req, res) {
	res.render("home", { movies: { "Search": ["a"] } });
});

var port = process.env.PORT | 3000;
app.listen(port, process.env.IP, function () { console.log("Server started"); });
