var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/");

module.exports.Hike = require('./hikes');

