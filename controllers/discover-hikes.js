
 const request = require('request');
const bodyParser = require('body-parser');
// const env = require('../env.js');
const db = require('../models');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
// let Hike = require('../models/hikes');



 function discoverHikes(req, res, next) {
 	console.log(req.user);
	res.render('main', req.user);
}

// // GET
// function getHikes(req, res) {
// 	db.Hikes.discover-hikes.find({}, function(err, places) {
// 		if (err) throw err;
// 		res.json(hikes);
// 	});
// }


// // POST /signup
// function postHikes(request, response, next) {
// 	let newHike = new.db.Hikes.discoverHikes {
// 	newName: String,
// 	newState: String,
// 	newDate: String,
// 	newTime: String
// 	}
// 	res.json(discoverHikes)
// 	};

// 	return newHike(request, response, next);
// }
// 	res.json(Hikes);
// }

// // PUT update hike
// function updateHike(req, res, next) {
// 	db.Hikes.discover-hikes.findOne({_id: req.params.id}, function(err, place) {
// 		if(typeof(req.body) === 'string') req.body = JSON.parse(req.body);

// 		place.reviews.push({
// 			name: req.body.name,
// 			state: req.body.state,
// 			date: req.body.date,
// 			time: req.body.time
// 		});

// 		if(req.body.genderNeutralBathrooms) {
// 			place.genderNeutralBathrooms = req.body.genderNeutralBathrooms;
// 		}
// 		if(req.body.lgbtOwned) { 
// 			place.lgbtOwned = req.body.lgbtOwned; 
// 		}
// 		if(req.body.advertises) { 
// 			place.advertises = req.body.advertises; 
// 		}

// 		place.friendliness = parseInt(place.friendliness) + parseInt(req.body.friendliness);

// 		place.save(function(err, place) {
// 			res.json(place);
// 		});
// 	});
// }

// // DELETE
// function removeHike(req, res) {
// 	db.Hikes.discover-hikes.findOneAndRemove({_id: req.params.id}, function(err, place) {
// 		if (err) throw err;
// 		res.json(hike);
// 	});
// }

// PUT new hike
function updateHike(req, res, next) {
	console.log("editHike: controller hit");
	 db.Hike.findOne({_id: req.body.id}, function(err, changedHike) {
	 	console.log(changedHike);
 		changedHike.name = req.body.name;
 		changedHike.state = req.body.state;
 		changedHike.date = req.body.date;
 		changedHike.time = req.body.time
 		changedHike.save();
	 		});
	 };


module.exports = {
	discoverHikes: discoverHikes,
	updateHike: updateHike
  	// getHikes: getHikes,
  	// postHikes: postHikes,
  	// removeHike: removeHike
};