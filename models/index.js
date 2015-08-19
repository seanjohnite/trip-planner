var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/trip-planner');

mongoose.connection.on('error', console.error.bind(console, "MongoDb connection error: "));

module.exports = {
  Place: require('./place'),
  Hotel: require('./hotel'),
  Activity: require('./activity'),
  Restaurant: require('./restaurant')
};

