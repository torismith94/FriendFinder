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

function compatibility (data) {
	var newUserInfo = data.length -1;
	var newUserScore = data[newUserInfo].scores;
	var compatibleArray = [];
	var minValue = 0;
	var indexBoolean = false;

	var compatibilityIndex;
	var compatibleFriendName;
	var compatiblePhoto;

	for (var i = 0; i < newUserInfo; i++) {
		var compatibleScore = 0; 
		var friendScore = data[i].scores;

	for (var q = 0; q < friendScore.length; q++) {
		compatibleScore += Math.abs(parseInt(newUserScore[q] - parseInto(friendScore[q])));
	}
	compatibleArray.push(compatibleScore);
}

for (var n = 0; n < compatibleArray.length; n++ ) {
	if (compatibleArray.length > 1 && n < compatibleArray.length - 1) {
		minValue = Math.min(compatibleArray[n], compatibleArray[n + 1]);
		indexBoolean = true;
	}
}

if (indexBoolean) {
	compatibilityIndex = compatibleArray.indexOf(minValue);
	compatibleFriendName = data[compatibilityIndex].name;
	compatiblePhoto = data[compatibilityIndex].photo;
} else {
	compatibleFriendName = data[minValue].name;
	compatiblePhoto = data[minValue].photo;
}

var compatibleFriend = {
	name: compatibleFriendName,
	photo: compatiblePhoto
}

return compatibleFriend;
}
