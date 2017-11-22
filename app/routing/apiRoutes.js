var path = require("path");
//Require data 
var friends = require("../data/friends");

//Get all possible friends display a JSON

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        friends.push(newFriend);
        res.json(newFriend);
    });
};

//Compatibility logic