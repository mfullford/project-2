var mongoose = require('mongoose');
var bcrypt = require('bcrypt');



// let Hikes= require('./hikes.js');

let User = mongoose.Schema({
  local : {
    email: String,
    password: String
  }
  // Hikes: []
});

User.methods.encrypt = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);

