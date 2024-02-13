const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingController'); // Assuming 'bookingController.js' is in the 'controllers' directory

router.get('/booking', bookingController.getAllBookings);
// ... other routes related to bookings here ...

module.exports = router;
