
// var db = require('../models');
 

 function discoverHikes(req, res, next) {
 	console.log(req.user);
	res.render('main', req.user);
}



module.exports = {
	discoverHikes: discoverHikes
};