var mongoose = require('mongoose');
require('./');
var Place = require('./place');



var activitySchema = mongoose.Schema({
  name: {type: String, required: true},
  place: [Place.schema],
  age_range: {type: String},
  amenities: String
});

var Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
