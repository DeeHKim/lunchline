//define schema for restaurant
var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
  geometry: {location: {lat: String, lng: String}},
  id: String,
  name: String,
  photos : [{
    height: Number,
    html_attributions: [],
    photo_reference: String,
    width: Number
  }],
  time: Array,
  place_id: String,
  price_level: Number,
  rating: Number,
  types : String,
  vicinity: String
})

module.exports = mongoose.model('Restaurant', restaurantSchema)
