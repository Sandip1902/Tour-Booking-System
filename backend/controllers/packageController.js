// packageController.js
const Package = require('../models/Package');

// Get all packages
const getPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get package by ID
const getPackageById = async (req, res) => {
  try {
    const package = await Package.findById(req.params.id);
    if (!package) return res.status(404).json({ message: 'Package not found' });
    res.json(package);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new package
const addPackage = async (req, res) => {
  const { title, description, price, availableDates, image } = req.body;

  try {
    const newPackage = new Package({ title, description, price, availableDates, image });
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a package
const updatePackage = async (req, res) => {
  try {
    const package = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!package) return res.status(404).json({ message: 'Package not found' });
    res.json(package);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a package
const deletePackage = async (req, res) => {
  try {
    const package = await Package.findByIdAndDelete(req.params.id);
    if (!package) return res.status(404).json({ message: 'Package not found' });
    res.json({ message: 'Package deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getPackages, getPackageById, addPackage, updatePackage, deletePackage };
