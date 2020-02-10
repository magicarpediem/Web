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

//Routes
app.get("/blogs", function(req, res) {
  res.render("index");
});

var port = process.env.PORT | 3000;
app.listen(port, process.env.IP, function() {
  console.log("Blogr server started");
});
