const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true // Assuming user_id should be unique
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true // Assuming username should be unique
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true // Assuming email should be unique
  },
  password_hash: {
    type: String,
    required: true
  },
  registration_date: {
    type: Date,
    default: Date.now // Set timestamp automatically when creating a user
  }
});


module.exports = mongoose.model('user', userSchema);
