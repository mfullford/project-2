var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hikes");

module.exports.Hike = require('./hikes.js');
module.exports.User = require('./user.js');

