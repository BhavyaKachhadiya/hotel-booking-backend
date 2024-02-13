const express = require('express');
const router = express.Router();
const roomController = require('../controller/roomController'); // Assuming 'roomController.js' is in the 'controllers' directory

router.get('/room', roomController.getAllRooms);

module.exports = router;
