const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  amenities: {
    type: String,
    trim: true
  },
  contactInfo: {
    type: String,
    trim: true
  },
  hotelImage: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('hotel', hotelSchema);
