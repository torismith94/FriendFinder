//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Setting up express app
var app = express();
var PORT = process.env.PORT || 3000;

//Express app to handle data parsing 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Starts the server
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});