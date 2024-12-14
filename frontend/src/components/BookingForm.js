import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { jsPDF } from 'jspdf';

const BookingForm = () => {
  const { packageId } = useParams(); // Retrieve the packageId from the URL
  const [packageDetails, setPackageDetails] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfTravelers: 1,
    specialRequests: '',
  });
  const [loading, setLoading] = useState(false);

  // Fetch package details based on packageId
  useEffect(() => {
    if (packageId) {
      axios.get(`http://localhost:5000/api/packages/${packageId}`)
        .then(response => {
          setPackageDetails(response.data); // Store package details
        })
        .catch(error => {
          console.error('Error fetching package details:', error);
        });
    }
  }, [packageId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Send booking details to backend
    const bookingDetails = {
      ...formData,
      packageId,
    };

    axios.post('http://localhost:5000/api/bookings', bookingDetails)
      .then(response => {
        alert('Booking successful!');
        generateInvoice(formData, packageDetails);  
        setLoading(false);
      })
      .catch(error => {
        alert('Failed to create booking.');
        setLoading(false);
      });
  };

  const generateInvoice = (formData, packageDetails) => {
    const { name, email, phone, numberOfTravelers, specialRequests } = formData;
    const { title, price } = packageDetails;
    const totalPrice = price * numberOfTravelers;
    
    const doc = new jsPDF();
    
    // Title of the invoice
    doc.setFontSize(18);
    doc.text('Booking Invoice', 14, 22);
    
    // Drawing a horizontal line after the title
    doc.setLineWidth(0.5);
    doc.line(14, 24, 200, 24);
    
    let yPosition = 40; // Starting Y position for the first piece of data
    
    // Customer and package details with line after each section
    doc.setFontSize(12);
    doc.text(`Customer Name: ${name}`, 14, yPosition);
    yPosition += 10;  // Increment Y position for the next line
    doc.line(14, yPosition, 200, yPosition);  // Draw line after name
    
    doc.text(`Email: ${email}`, 14, yPosition + 10);
    yPosition += 20;
    doc.line(14, yPosition, 200, yPosition);  // Draw line after email
    
    doc.text(`Phone: ${phone}`, 14, yPosition + 10);
    yPosition += 20;
    doc.line(14, yPosition, 200, yPosition);  // Draw line after phone
    
    doc.text(`Package: ${title}`, 14, yPosition + 10);
    yPosition += 20;
    doc.line(14, yPosition, 200, yPosition);  // Draw line after package
    
    doc.text(`Price per Traveler: Rs. ${price}`, 14, yPosition + 10);
    yPosition += 20;
    doc.line(14, yPosition, 200, yPosition);  // Draw line after price
    
    doc.text(`Number of Travelers: ${numberOfTravelers}`, 14, yPosition + 10);
    yPosition += 20;
    doc.line(14, yPosition, 200, yPosition);  // Draw line after number of travelers
    
    // Special requests if available
    if (specialRequests) {
      doc.text(`Special Requests: ${specialRequests}`, 14, yPosition + 10);
      yPosition += 20;
      doc.line(14, yPosition, 200, yPosition);  // Draw line after special requests
    }
    
    // Total Price
    doc.text(`Total Price: Rs. ${totalPrice}`, 14, yPosition + 10);
    yPosition += 20;
    doc.line(14, yPosition, 200, yPosition);  // Draw line after total price
        
    // Save the document as a PDF
    doc.save(`${name}_booking_invoice.pdf`);
  };
  
  
  if (!packageDetails) {
    return <div>Loading...</div>; // Show loading indicator while package details are being fetched
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Book Your Package</h2>
      <p><strong>Package:</strong> {packageDetails.title}</p>
      <p><strong>Description:</strong> {packageDetails.description}</p>
      <p><strong>Price:</strong> Rs. {packageDetails.price}</p>
      
      <label className="block mb-2">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full mt-1"
          required
        />
      </label>
      
      <label className="block mb-2">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full mt-1"
          required
        />
      </label>
      
      <label className="block mb-2">
        Phone:
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 w-full mt-1"
          required
        />
      </label>
      
      <label className="block mb-2">
        Number of Travelers:
        <input
          type="number"
          name="numberOfTravelers"
          value={formData.numberOfTravelers}
          onChange={handleChange}
          className="border p-2 w-full mt-1"
          required
        />
      </label>
      
      <label className="block mb-2">
        Special Requests:
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          className="border p-2 w-full mt-1"
        />
      </label>

      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded mt-4"
        disabled={loading}
      >
        {loading ? 'Booking...' : 'Submit Booking'}
      </button>
    </form>
  );
};

export default BookingForm;
