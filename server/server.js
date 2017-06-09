// Dependencies
import bodyParser from 'body-parser'
import express from 'express'
import logger from "morgan"
import mongoose from "mongoose"
import path from 'path';

// Requiring our Note and Article models
// const Note = require("./models/Note.js");
// const Article = require("./models/Article.js");

// bluebird promise for Mongoose
import Promise from "bluebird"

mongoose.Promise = Promise;

// Initialize Express
const app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.text());
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

app.get("/api/saved", (req, res) => {
  const article = {
    title: 'Ali Sells Jersey House And Moves to Chicago',
    date: '1974-07-18T00:00:00Z',
    url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
  }
  res.json(article)
})

// Set & listen on port 3001

app.set('port', (process.env.PORT || 3001))

app.listen(3001, (error) => {
  if (error) {
    console.log("server error "+error)
  }
  console.log("App running on port 3001!");
});