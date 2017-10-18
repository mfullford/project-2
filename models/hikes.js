// run mongoose to make a database
var mongoose = require("mongoose");
// create schema variable
var Schema = mongoose.Schema;


let hikeSchema = new Schema({
	name: String,
	state: String,
	date: String,
	time: String
});

//make the schema a model
let Hike = mongoose.model('Hike', hikeSchema);

//export the Hike model
module.exports = Hike;
