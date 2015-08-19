var mongoose = require('mongoose');
require('./');
var Place = require('./place');


var ObjectId = mongoose.Schema.Types.ObjectId;

var hotelSchema = mongoose.Schema({
  name: {type: String, required: true},
  place: [{type: Place}],
  num_stars: {type: Number},
  amenities: String
});

var Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;