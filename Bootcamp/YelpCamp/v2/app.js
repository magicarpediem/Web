var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/yelp_camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//     name: "Campground 1",
//     image:
//       "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     description: "This is a description. Such depth. Much wow."
//   },
//   function(error, campground) {
//     if (error) {
//       console.log("ERROR WHILE CREATING");
//       console.log(error);
//     } else {
//       console.log("CREATED CAMPGROUND: ");
//       console.log(campground);
//     }
//   }
// );

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  Campground.find({}, function(error, campgrounds) {
    if (error) {
      console.log("ERROR WHILE FINDING CAMPGROUND");
      console.log(error);
    } else {
      res.render("index", { campgrounds: campgrounds });
    }
  });
});

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  var campground = { name: name, image: image, description: description };
  Campground.create(campground, function(error, newlyCreated) {
    if (error) {
      console.log("ERROR WHILE CREATING");
      console.log(error);
    } else {
      res.redirect("/campgrounds");
    }
  });
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new");
});

app.get("/campgrounds/:id", function(req, res) {
  Campground.findById(req.params.id, function(error, campground) {
    if (error) {
      console.log("ERROR WHILE FINDING BY ID");
    } else {
      res.render("show", { campground, campground });
    }
  });
});

var port = process.env.PORT | 3000;
app.listen(port, process.env.IP, function() {
  console.log("YelpCamp server started");
});
