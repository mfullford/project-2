var express = require('express');
var app = express();
bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


// define route
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});


// where is it listening
app.listen(process.env.PORT || 3000, function () {
  console.log('Listening at http://localhost:3000/');
});