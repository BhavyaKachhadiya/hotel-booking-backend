const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  room_id: {
    type: String,
    required: true,
    unique: true // Assuming room_id should be unique
  },
  hotel_id: {
    type: String,
    required: true,
    ref: 'Hotel' // Assuming a reference to a "Hotel" collection
  },
  room_type: {
    type: String,
    required: true,
    enum: ['Single', 'Double', 'Suite', 'Family', 'Other'] // Possible room types (adjust as needed)
  },
  price_pernight: {
    type: Number,
    required: true,
    min: 0
  },
  capacity: {
    type: Number,
    required: true,
    min: 1
  },
  availability: {
    type: Boolean,
    required: true,
    default: true // Assuming rooms are available by default
  }
});

module.exports = mongoose.model('room', roomSchema);
