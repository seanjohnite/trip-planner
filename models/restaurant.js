var mongoose = require('mongoose');
require('./');
var Place = require('./place');

var ObjectId = mongoose.Schema.Types.ObjectId;

var restaurantSchema = mongoose.Schema({
  name: {type: String, required: true},
  place: [{type: Place}],
  cuisines: {type: String},
  price: {type: Number, enum: [1,2,3,4,5]}
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;