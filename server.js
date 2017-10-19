//server

var express = require('express');
var app = express();
bodyParser = require('body-parser');
app.use(express.static('public'));
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var session = require('express-session');

//Connect to db
mongoose.connect('mongodb://localhost/hikes');

// Serve static files from public folder
app.use(express.static(__dirname + '/controllers'));

// // Set up ejs
app.set('views', __dirname + "/views");
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash());

// Require passport
require('./config/passport')(passport);



/************
 * DATABASE *
 ************/

var db = require('./models');



/************
 * Routes *
 ************/

// // Require all the routes
let routes = require('./config/routes');
app.use(routes);



// // define route NEED TO CHANGE TO /
// app.get('/', function (req, res) {
//   res.sendFile('views/landing.ejs' , { root : __dirname});
// });

// // define route
// app.get('/discover', function (req, res) {
//   res.sendFile('views/index.html' , { root : __dirname});
// });

// // the hike data on the map
// app.get('/hikes.geojson', function (req, res) {
//   res.sendFile('/hikes.geojson' , { root : __dirname});
// });

// // Form.html
// app.get('/form', function (req, res) {
//   res.sendFile('views/form.html' , { root : __dirname});
// });

// // ajax to express route to mongo to the database
// app.post("/", function(req,res) {
//   Hike.create({name: req.body.name, title: req.body.title});
// });

// // post the new form data
// app.post('/api/hikes', function create_form (req, res) {
//   console.log('body', req.body);
//   db.Hike.create(req.body, function(err, hikes) {
//     if (err) re.send(err);
//       res.json(hikes);
//   });
// });

// app.get('/api/hikes', function(req, res) {
// db.Hike.find({}, function(err, hikes) {
//   if (err) res.json(err);
//   res.json(hikes);
//   });
// });


/**********
 * SERVER *
 **********/

// where is it listening
app.listen(process.env.PORT || 3000, function () {
  console.log('Listening at http://localhost:3000/');
});