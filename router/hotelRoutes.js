const express = require('express');
const router = express.Router();
const hotelController = require('../controller/hotelsController'); 

router.get('/hotels', hotelController.getAllHotels);
router.get('/addhotel', hotelController.addHotel);

module.exports = router; 