var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/hikes");

module.exports.Hike = require('./hikes.js');
module.exports.User = require('./user.js');

