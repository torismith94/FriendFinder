//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Setting up express app
var app = express();

//Express app to handle data parsing 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Friends data 
var friends = [{
  name: "",
  photo: "",
  scores: []
}];