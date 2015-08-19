var express = require('express');
var router = express.Router();
var model = require('../models');
var Promise = require('bluebird');

/* GET home page. */
router.get('/', function(req, res, next) {
	var arrayOfSearches = [model.Hotel, model.Restaurant, model.Activity]
	.map(function(model) {
		return model.find().exec();
	})

	Promise.all(arrayOfSearches)
	.then(function(array) {
		var locals = {
			hotels: array[0],
			restaurants: array[1],
			activities: array[2]
		}
		res.render('index', locals);
	})
	.then(null, next);


});

module.exports = router;
