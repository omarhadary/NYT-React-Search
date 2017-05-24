// Dependencies
const bodyParser = require("body-parser");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const path = require('path');
// Requiring our Note and Article models
// const Note = require("./models/Note.js");
// const Article = require("./models/Article.js");
// bluebird promise for Mongoose
const Promise = require("bluebird");

mongoose.Promise = Promise;

// Initialize Express
const app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/nytreact");
const db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// Routes

// Listen on port 8000
app.listen(8000, function() {
  console.log("App running on port 8000!");
});