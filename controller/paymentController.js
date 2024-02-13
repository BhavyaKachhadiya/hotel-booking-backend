// paymentController.js

const Payment = require('../models/paymentSchema'); // Assuming 'paymentSchema.js' is in the 'models' directory

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate('booking_id'); // Populate booking details
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
    // res.send("Payment");
};

// ... other controller functions as before ...

