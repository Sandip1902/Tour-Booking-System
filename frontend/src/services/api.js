// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  // Adjust to your backend URL

// Get all tour packages
export const getPackages = async () => {
  try {
    const response = await axios.get(`${API_URL}/packages`);
    return response.data;
  } catch (error) {
    console.error('Error fetching packages:', error);
  }
};

// Get details of a specific package
export const getPackageById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/packages/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching package details:', error);
  }
};

// Submit a booking
export const submitBooking = async (bookingData) => {
  try {
    const response = await axios.post(`${API_URL}/bookings`, bookingData);
    return response.data;
  } catch (error) {
    console.error('Error submitting booking:', error);
  }
};
