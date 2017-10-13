var express = require('express');
var app = express();
bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


// define route
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

// the hike data on the map
app.get('/hikes.geojson', function (req, res) {
  res.sendFile('/hikes.geojson' , { root : __dirname});
});

// Form.html
app.get('/form', function (req, res) {
  res.sendFile('views/form.html' , { root : __dirname});
});


// where is it listening
app.listen(process.env.PORT || 3000, function () {
  console.log('Listening at http://localhost:3000/');
});