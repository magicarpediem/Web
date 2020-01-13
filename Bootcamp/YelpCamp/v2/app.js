var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost/yelp_camp");

var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String
});

var campground = mongoose.model("Campground", campgroundSchema);

// campground.create(
// 	{
// 		name: "Campground 1",
// 		image: "https://images.unsplash.com/photo-1519395612667-3b754d7b9086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
// 	}, function(error, camground) {
// 		if (error) {
// 			console.log("ERROR WHILE CREATING");
// 			console.log(error);
// 		} else {
// 			console.log("CREATED CAMPGROUND: ");
// 			console.log(campground);
// 		}
// 	});

var campgrounds = [
	{ name: "Campground 1", image: "https://images.unsplash.com/photo-1519395612667-3b754d7b9086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" },
	{ name: "Campground 2", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" },
	{ name: "Campground 3", image: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" },
	{ name: "Campground 1", image: "https://images.unsplash.com/photo-1519395612667-3b754d7b9086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" },
	{ name: "Campground 2", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" },
	{ name: "Campground 1", image: "https://images.unsplash.com/photo-1519395612667-3b754d7b9086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" },
	{ name: "Campground 2", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" },
	{ name: "Campground 1", image: "https://images.unsplash.com/photo-1519395612667-3b754d7b9086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" },
	{ name: "Campground 2", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" }
];

app.get("/", function (req, res) {
	res.render("landing");
});

app.get("/campgrounds", function (req, res) {
	campground.find({}, function(error, campgrounds) {
		if (error) {
			console.log("ERROR WHILE FINDING CAMPGROUND");
			console.log(error);
		}
		else {
			res.render("campgrounds", { campgrounds: campgrounds });
		}
	});
});

app.post("/campgrounds", function (req, res) {
	var name = req.body.name;
	var image = req.body.image;
	var campground = { name: name, image: image };
	campgrounds.push(campground);
	res.redirect("/campgrounds")
});

app.get("/campgrounds/new", function (req, res) {
	res.render("new");
});

var port = process.env.PORT | 3000;
app.listen(port, process.env.IP, function () { console.log("YelpCamp server started"); });
