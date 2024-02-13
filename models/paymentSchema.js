const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  payment_id: {
    type: String,
    required: true,
    unique: true // Assuming payment_id should be unique
  },
  booking_id: {
    type: String,
    required: true,
    ref: 'Booking' // Referencing the "Booking" collection
  },
  payment_method: {
    type: String,
    required: true,
    enum: ['Credit Card', 'Debit Card', 'Net Banking', 'Wallet', 'Other'] // Payment method options (adjust as needed)
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  timestamp: {
    type: Date,
    default: Date.now // Set timestamp automatically when creating a payment
  }
});

module.exports = mongoose.model('payment', paymentSchema);
