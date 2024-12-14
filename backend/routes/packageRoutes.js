// backend/routes/packages.js
const express = require('express');
const router = express.Router();
const packageController = require('../controllers/packageController');

router.get('/', packageController.getPackages);
router.get('/:id', packageController.getPackageById);
router.post('/', packageController.addPackage);
router.put('/:id', packageController.updatePackage);
router.delete('/:id', packageController.deletePackage);

module.exports = router;
