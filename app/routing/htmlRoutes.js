//Routes 
var path = require("path");

module.exports = function (app) {
	//displays survey.html via GET route
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
		console.log("Survey page displayed.");
	});
	//home 
	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
		console.log("Home page displayed.");
	});
	//home
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
		console.log("Home page displayed.");
	});
};