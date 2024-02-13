const express = require('express');
const router = express.Router();
const userController = require('../controller/userController'); // Assuming 'userController.js' is in the 'controllers' directory

router.get('/users', userController.getAllUsers);
// ... other routes related to users here ...

module.exports = router;
