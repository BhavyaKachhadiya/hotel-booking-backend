const express = require('express');
const router = express.Router();
const paymentController = require('../controller/paymentController'); // Assuming 'paymentController.js' is in the 'controllers' directory

router.get('/payment', paymentController.getAllPayments);
// ... other routes related to payments here ...

module.exports = router;
