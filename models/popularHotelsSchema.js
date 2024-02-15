const mongoose = require('mongoose');

const popularHotelSchema = new mongoose.Schema({
  hotelId: {
    type: String,
    required: true,
    ref: 'Hotel' // Reference to the "Hotel" collection (adjust name if different)
  },
  img: {
    type: String,
    required: true,
    trim: true // Remove leading/trailing whitespace
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  rate: {
    type: Number,
    required: true,
    min: 0,
    max: 5 // Assuming ratings are between 0 and 5
  },
  dateAdded: {
    type: Date,
    default: Date.now // Automatically set when adding a popular hotel
  }
});

module.exports = mongoose.model('popularhotels', popularHotelSchema);
