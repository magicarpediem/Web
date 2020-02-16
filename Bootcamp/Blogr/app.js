// Imports
var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");

//App Config
mongoose.connect("mongodb://localhost/blogr");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    useUnifiedTopology: true,
    useNewUrlParser: true,
    extended: true
  })
);

//Mongoose schema/model config
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now }
});
var Blog = mongoose.model("Blog", blogSchema);

app.get("/", function (req, res) {
  res.redirect("/blogs");
});

//Routes
app.get("/blogs", function (req, res) {
  Blog.find({}, function (err, blogs) {
    if (err) {
      console.log("ERROR FINDING BLOGS");
    } else {
      res.render("index", { blogs: blogs });
    }
  })
});

app.get("/blogs/new", function (req, res) {
  res.render("new");
});

app.post("/blogs", function (req, res) {
  Blog.create(req.body.blog, function (err, newBlog) {
    if (err) {
      res.render("new");
    } else {
      res.redirect("/blogs");
    }
  })
});

app.get("/blogs/:id", function (req, res) {
  Blog.findById(req.params.id, function (err, foundBlog) {
    if (err) {
      res.redirect("/blogs");
    } else {
      res.render("show", { blog: foundBlog });
    }
  })
});

var port = process.env.PORT | 3000;
app.listen(port, process.env.IP, function () {
  console.log("Blogr server started");
});
