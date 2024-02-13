const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  booking_id: {
    type: String,
    required: true,
    unique: true // Assuming booking_id should be unique
  },
  user_id: {
    type: String,
    required: true,
    ref: 'User' // Assuming a reference to a "User" collection
  },
  room_id: {
    type: String,
    required: true,
    ref: 'Room' // Assuming a reference to a "Room" collection
  },
  check_in_date: {
    type: Date,
    required: true
  },
  check_out_date: {
    type: Date,
    required: true,
    min: [check_in_date => check_in_date], // Check-out date must be after check-in date
  },
  total_price: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    required: true,
    enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'] // Possible booking statuses (adjust as needed)
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
