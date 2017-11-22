//Routes 
var path = require("path");

 // * A GET Route to `/survey` which should display the survey page.
 // * A default, catch-all route that leads to `home.html` which 
 // displays the home page. 
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
	
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
		console.log("Home page displayed.");
	});
};