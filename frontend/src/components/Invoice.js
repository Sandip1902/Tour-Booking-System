// frontend/src/components/Invoice.js
import React from 'react';

const Invoice = ({ bookingDetails }) => {
  const { name, email, phone, packageTitle, price, numberOfTravelers, totalPrice } = bookingDetails;

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg w-96">
      <h2 className="text-2xl font-semibold text-primary mb-4">Booking Invoice</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Customer Details</h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Package Details</h3>
        <p>Package: {packageTitle}</p>
        <p>Price per Person: ${price}</p>
        <p>Number of Travelers: {numberOfTravelers}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Total</h3>
        <p className="font-bold text-primary">Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default Invoice;
