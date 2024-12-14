// adminRouts.js
const express = require('express');
const router = express.Router();
const authenticateAdmin = require('../middleware/authMiddleware');
const packageController = require('../controllers/packageController'); // Import the packageController
const { loginAdmin } = require('../controllers/adminController');

// Admin login route (no authentication required for login)
router.post('/login', loginAdmin);

// Protect the following routes with the authentication middleware
router.use(authenticateAdmin);

// Add a new package
router.post('/packages', packageController.addPackage);

// Update an existing package
router.put('/packages/:id', packageController.updatePackage);

// Delete a package
router.delete('/packages/:id', packageController.deletePackage);

module.exports = router;
