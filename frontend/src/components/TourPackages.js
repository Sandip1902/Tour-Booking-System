import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom v6

const TourPackages = () => {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    // Fetch tour packages from the backend
    axios.get('http://localhost:5000/api/packages')
      .then(response => {
        setPackages(response.data);
      })
      .catch(error => {
        console.error('Error fetching tour packages:', error);
      });
  }, []);

  // Handle Book Now button click
  const handleBookNow = (pkg) => {
    setSelectedPackage(pkg); // Set the selected package
    navigate(`/booking/${pkg._id}`); // Navigate to booking page with the package ID
  };

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center text-primary mb-6">Available Tour Packages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map(pkg => (
          <div key={pkg._id} className="border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white">
            <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary">{pkg.title}</h3>
              <p className="text-gray-600 mt-2">{pkg.description}</p>
              <p className="text-gray-800 font-semibold mt-2">Price: Rs. {pkg.price}</p>
              <p className="text-gray-500 mt-1">Available Dates: {pkg.availableDates.join(', ')}</p>
              <button
                onClick={() => handleBookNow(pkg)} // Pass the selected package
                className="bg-secondary text-white px-6 py-2 rounded-lg mt-4 hover:bg-primary focus:outline-none"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPackages;
