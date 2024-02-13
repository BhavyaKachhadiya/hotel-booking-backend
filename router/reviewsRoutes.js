const express = require('express');
const router = express.Router();
const reviewController = require('../controller/reviewsController'); // Assuming 'reviewController.js' is in the 'controllers' directory

router.get('/reviews', reviewController.getAllReviews);
// ... other routes related to reviews here ...

module.exports = router;
