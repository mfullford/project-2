var passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

// GET /signup
function getSignup(request, response, next) {
	response.render('signup', {message: request.flash('signupMessage')});
}

// POST /signup
function postSignup(request, response, next) {
	let signupStrategy = passport.authenticate('local-signup', {
		successRedirect: '/discover-hikes',
		failureRedirect: '/',
		failureFlash: true
	});
	return signupStrategy(request, response, next);
}

// GET /login
function getLogin(request, response, next) {
	response.render('login', {message: request.flash('loginMessage')});
}

// POST /login
function postLogin(request, response, next) {
	let loginStrategy = passport.authenticate('local-login', {
		successRedirect: '/discover-hikes',
		failureRedirect: '/',
		failureFlash: true
	});
	return loginStrategy(request, response, next);
}

// Get /logout
function getLogout(request, response, next) {
	request.logout();
	response.redirect('/');
}

// GET user 
function getUser(request, response) {
    if (request.user) { response.send(request.user._id); }
    else { response.send("Failed"); }
}

module.exports = {
  getUser: getUser,
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout
};