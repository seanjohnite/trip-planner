var mongoose = require('mongoose');
require('./');

var placeSchema = mongoose.Schema({
  address: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  phone: {type: String, required: true},
  location: { 
    type: [Number],
    required: true
  }
});

var Place = mongoose.model('Place', placeSchema);

module.exports = Place;