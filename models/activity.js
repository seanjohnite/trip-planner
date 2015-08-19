var mongoose = require('mongoose');
require('./');
var Place = require('./place');


var ObjectId = mongoose.Schema.Types.ObjectId;

var activitySchema = mongoose.Schema({
  name: {type: String, required: true},
  place: [{type: Place}],
  age_range: {type: String},
  amenities: String
});

var Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;