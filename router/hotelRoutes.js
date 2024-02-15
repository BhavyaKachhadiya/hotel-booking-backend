const express = require('express');
const router = express.Router();
const hotelController = require('../controller/hotelsController'); 
// const popularHotelController = require('../controller/popularHotelController');

router.get('/hotels', hotelController.getAllHotels);
router.get('/addhotel', hotelController.addHotel);
router.get('/hotels/popular', hotelController.getAllPopularHotels);

module.exports = router; 