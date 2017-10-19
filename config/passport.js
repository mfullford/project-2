let LocalStrategy = require('passport-local').Strategy;
let User = require('../models/user');

module.exports = function(passport) {
	
	passport.serializeUser(function(user, callback) {
		callback(null, user.id);
	});

	passport.deserializeUser(function(id, callback) {
		User.findById(id, function(err,user) {
			callback(err, user);
		});
	});
	// Handles the signup functionality
	passport.use('local-signup', new LocalStrategy({
		usernameField : 'email',
		passwordField : 'password',
		passReqToCallback : true
	}, function(req, email, password, callback) {
		// Find a user with this email
		User.findOne({'local.email' : email}, function(err, user) {
			if (err) return callback(err);
			// If email already exists
			if (user) {
				return callback(null, false, req.flash('signupMessage', 'This email has already been used'));
			} else {
				// Email is available, so create one
				let newUser = new User();
				newUser.local.email = email;
				newUser.local.password = newUser.encrypt(password);
				newUser.save(function(err) {
					if (err) throw err;
					return callback(null, newUser);
				});
			}
		});
	}));

	// Handles the login functionality
	passport.use('local-login', new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true
	}, function(req, email, password, callback) {
		// Attempts to find a user with that email
		User.findOne({'local.email' : email}, function(err, user) {
			if (err) return callback(err);
			// If wrong username or password
			if (!user || !user.validPassword(password)) {
				return callback(null, false, req.flash('loginMessage', 'Invalid username and/or password'));
			}

			return callback(null, user);
		});
	}));
};