const Booking = require('../models/bookingSchema'); // Assuming 'bookingSchema.js' is in the 'models' directory

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
    // res.send("Booking");
};

// ... other controller functions as before ...

