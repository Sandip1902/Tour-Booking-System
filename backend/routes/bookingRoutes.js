const express = require('express');
const router = express.Router();

// Ensure this is the correct path to your controller
const bookingController = require('../controllers/bookingController');

// Route to create a new booking
router.post('/', bookingController.createBooking);

// Route to get all bookings
router.get('/', bookingController.getBookings);

module.exports = router;
