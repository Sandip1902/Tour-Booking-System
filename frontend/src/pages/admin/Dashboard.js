import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [packages, setPackages] = useState([]);
  const [bookings, setBookings] = useState([]);  // Initialize bookings as an empty array
  const [newPackage, setNewPackage] = useState({
    title: '',
    description: '',
    price: '',
    availableDates: '',
    image: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch packages and bookings on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const packagesResponse = await axios.get('http://localhost:5000/api/packages');
        setPackages(packagesResponse.data);
  
        const bookingsResponse = await axios.get('http://localhost:5000/api/bookings');
        
        // Extract bookings data from the response
        if (Array.isArray(bookingsResponse.data.data)) {
          setBookings(bookingsResponse.data.data);  // Set bookings data
        } else {
          console.error('Bookings data is not an array:', bookingsResponse.data);
          setBookings([]);  // Default to empty array if data is not an array
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data.');
      }
    };
  
    fetchData();
  }, []);
  

  // Handle adding a new package
  const handleAddPackage = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Input validation
    if (isNaN(newPackage.price) || newPackage.price <= 0) {
      setError('Price must be a valid positive number.');
      return;
    }

    if (!newPackage.availableDates) {
      setError('Please provide valid available dates.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/packages', newPackage);
      setPackages((prevPackages) => [...prevPackages, response.data]);  // Add the new package to the list
      setNewPackage({ title: '', description: '', price: '', availableDates: '', image: '' }); // Reset form
      setSuccess('Package added successfully!');
    } catch (error) {
      console.error('Error adding package:', error);
      setError('Failed to add package.');
    }
  };

  // Handle deleting a package
  const handleDeletePackage = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/packages/${id}`);
      setPackages(packages.filter((pkg) => pkg._id !== id));  // Remove the deleted package from the list
      setSuccess('Package deleted successfully!');
    } catch (error) {
      console.error('Error deleting package:', error);
      setError('Failed to delete package.');
    }
  };


  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Manage Your Tour Packages & Bookings</h2>

      {/* Error and Success Messages */}
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>}

      {/* Add Package Form */}
      <form onSubmit={handleAddPackage} className="bg-white p-4 rounded shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-4">Add New Package</h3>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="border p-2 w-full"
            value={newPackage.title}
            onChange={(e) => setNewPackage({ ...newPackage, title: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="description">Description</label>
          <textarea
            id="description"
            className="border p-2 w-full"
            value={newPackage.description}
            onChange={(e) => setNewPackage({ ...newPackage, description: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            className="border p-2 w-full"
            value={newPackage.price}
            onChange={(e) => setNewPackage({ ...newPackage, price: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="availableDates">Available Dates</label>
          <input
            type="text"
            id="availableDates"
            className="border p-2 w-full"
            value={newPackage.availableDates}
            onChange={(e) => setNewPackage({ ...newPackage, availableDates: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            className="border p-2 w-full"
            value={newPackage.image}
            onChange={(e) => setNewPackage({ ...newPackage, image: e.target.value })}
            required
          />
        </div>
        {/* Image Preview */}
        {newPackage.image && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Image Preview</h4>
            <img src={newPackage.image} alt="Package Preview" className="w-full h-48 object-cover rounded" />
          </div>
        )}
        <button type="submit" className="bg-primary text-white px-4 py-2 mt-4 rounded">Add Package</button>
      </form>

       <h3 className="text-lg font-semibold mb-4">Tour Packages</h3>
      <ul>
        {packages.map((pkg) => (
          <li key={pkg._id} className="bg-gray-100 p-4 rounded mb-4">
            <h4 className="text-xl font-bold">{pkg.title}</h4>
            <p>{pkg.description}</p>
            <p className="font-semibold">Price: Rs. {pkg.price}</p>
            <p>Available Dates: {pkg.availableDates}</p>
            <button
              onClick={() => handleDeletePackage(pkg._id)}
              className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* List of Bookings */}
      <h3 className="text-lg font-semibold mb-4">Bookings</h3>
      <ul>
         {Array.isArray(bookings) && bookings.length > 0 ? (
          bookings.map((booking) => (
            <li key={booking._id} className="bg-gray-100 p-4 rounded mb-4">
              <h4 className="text-xl font-bold">{booking.customerName}</h4>
              <p className="font-semibold">Email: {booking.customerEmail}</p>
              <p className="font-semibold">BookingDate: {booking.bookingDate}</p>
              <p>Status: {booking.status}</p>
            </li>
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </ul>
    </div>
  );
};

export default AdminDashboard;
