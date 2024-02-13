const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review_id: {
    type: String,
    required: true,
    unique: true // Assuming review_id should be unique
  },
  hotel_id: {
    type: String,
    required: true,
    ref: 'Hotel' // Assuming a reference to a "Hotel" collection
  },
  user_id: {
    type: String,
    required: true,
    ref: 'User' // Assuming a reference to a "User" collection
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5 // Assuming rating is between 1 and 5
  },
  comment: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now // Set timestamp automatically when creating a review
  }
});

module.exports = mongoose.model('review', reviewSchema);
