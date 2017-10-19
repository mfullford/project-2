const express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const passport = require('passport');
const usersController = require('../controllers/users');
const staticsController = require('../controllers/statics');
const hikeController = require('../controllers/discover-hikes');

function authenticatedUser(req, res, next) {
  // If user is authenticated then continue execution
  if (req.isAuthenticated()) return next();
  // Otherwise direct request back to the homepage
  res.redirect('/');
}


// Main page route
router.route('/')
  .get(staticsController.home);

// Signup route
router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup);

// Login route
router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin);

// Logout route
router.route('/logout')
  .get(usersController.getLogout);

// Discover movies page route
router.route('/discover-hikes')
  .get(authenticatedUser, hikeController.discoverHikes);

  // Require all the routes
// let routes = require('./config/routes');
// app.use(routes);



// define route NEED TO CHANGE TO /
// router.get('/', function (req, res) {
//   res.render('../views/landing.ejs' , { root : __dirname});
// });

// define route
router.get('/discover-hikes', function (req, res) {
  res.render('../views/main.ejs' , { root : __dirname});
});

// the hike data on the map
router.get('/hikes.geojson', function (req, res) {
  res.sendFile('../hikes.geojson' , { root : __dirname});
});

// Form.html
router.get('/form', function (req, res) {
  res.render('../views/form.ejs' , { root : __dirname});
});

// ajax to express route to mongo to the database
router.post("/", function(req,res) {
  Hike.create({name: req.body.name, title: req.body.title});
});

// post the new form data
router.post('/api/hikes', function create_form (req, res) {
  console.log('body', req.body);
  db.Hike.create(req.body, function(err, hikes) {
    if (err) re.send(err);
      res.json(hikes);
  });
});

router.get('/api/hikes', function(req, res) {
db.Hike.find({}, function(err, hikes) {
  if (err) res.json(err);
  res.json(hikes);
  });
});
  
module.exports = router;