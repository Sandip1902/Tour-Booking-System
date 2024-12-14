// backend/models/Package.js
const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  availableDates: { type: [String], required: true },  // Array of available dates
  image: { type: String, required: true },  // URL to package image
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
