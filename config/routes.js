const express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const passport = require('passport');
const usersController = require('../controllers/users');
const staticsController = require('../controllers/statics');
const hikeController = require('../controllers/discover-hikes');



router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Define db
var db = require('../models');

// Hard code hike
var hikes = [
  {
    Name: "Antelope Canyon",
    State: "Arizona",
    Date: "10/22",
    Time: "10am"
  },
];

function authenticatedUser(req, res, next) {
  // If user is authenticated then continue execution
  if (req.isAuthenticated()) return next();
  // Otherwise direct request back to the homepage
  res.redirect('/');
}

/**********
 * USER *
 **********/

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

// Discover hikes page route
router.route('/discover-hikes')
  .get(authenticatedUser, hikeController.discoverHikes);

router.route('/user/getID')
  .get(usersController.getUser);


/**********
 * HIKES *
 **********/


// GET main
router.get('/discover-hikes', function (req, res) {
  res.render('../views/main.ejs' , { root : __dirname});
});

// GET geojson
router.get('/discover-hikes/map', function (req, res) {
  res.sendFile('./hikes.geojson' , { root : __dirname});
});

// GET form
router.get('/form', function (req, res) {
  res.render('../views/form.ejs' , { root : __dirname});
});

// GET user page
router.get('/user', function (req, res) {
  res.render('../views/user.ejs', { root : __dirname})
})

// GET user db
router.get('/user/hikes', function(req, res) {
    db.Hike.find({}, function(err, hikes) {
        if (err) console.log(err);
        else res.json(hikes);
    });
});


// ajax to express route to mongo to the database
router.post("/form", function(req,res) {
  Hike.create({name: req.body.name, title: req.body.title});
});

// POST new hike
router.post("/user/hikes", function(req, res) {
    let newHike = new db.Hike({
        name: req.body.name,
        state: req.body.state,
        date: req.body.date,
        time: req.body.time,
        // user: res.locals.currentUser._id
    });
    newHike.save(function(err, hike) {
        if (err) console.log(err);
        res.json(hike);
    });
});


// GET one hike
router.get('/user/hikes/:id', function (req, res) {
  db.Hike.findOne({_id: req.params.id}, function(err, hike) {
    if (err) console.log(err);
    res.json(hike);
  });
});

// EDIT hike
 router.route('/user/hikes/:id')
  .put(hikeController.updateHike)


// DELETE one hike
router.delete('/user/hikes/:id', function(req, res) {
  let hikeId = req.params.id;
  db.Hike.findOneAndRemove({_id: hikeId}, function(err, deletedHike) {
    res.json(deletedHike);
  });
});
  
module.exports = router;