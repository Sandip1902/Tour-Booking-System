const Package = require('../models/Package');
const Booking = require('../models/Booking');

// Create a new booking
const createBooking = async (req, res) => {
  try {
    const { packageId, name, email, phone, numberOfTravelers, specialRequests } = req.body;

    // Validate inputs
    if (!name || !email || !phone || !numberOfTravelers || !packageId) {
      return res.status(400).json({ error: "All required fields must be provided" });
    }
    if (isNaN(numberOfTravelers) || numberOfTravelers <= 0) {
      return res.status(400).json({ error: "Number of travelers must be a positive number" });
    }

    // Fetch package details
    const packageDetails = await Package.findById(packageId);
    if (!packageDetails) {
      return res.status(404).json({ error: "Package not found" });
    }

    // Calculate total price
    const totalPrice = (packageDetails.price || 0) * numberOfTravelers;

    // Create booking
    const newBooking = new Booking({
      packageId,
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      numberOfTravelers,
      specialRequests,
      totalPrice,
    });

    await newBooking.save();
    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: newBooking,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while creating the booking" });
  }
};

// Fetch all bookings
const getBookings = async (req, res) => {
  try {
    // Fetch all bookings from the database
    const bookings = await Booking.find().populate('packageId'); // populate 'packageId' if you want package details with the booking
    
    if (bookings.length === 0) {
      return res.status(404).json({ error: 'No bookings found' });
    }

    // Return the bookings as JSON
    res.status(200).json({
      success: true,
      message: 'Bookings retrieved successfully',
      data: bookings,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching bookings' });
  }
};
  
module.exports = { createBooking, getBookings};
