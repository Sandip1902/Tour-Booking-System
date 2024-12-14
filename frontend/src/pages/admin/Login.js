// frontend/src/pages/admin/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://tour-booking-system-l4b4.onrender.com/api/admin/login', { username, password });
      if (response.status === 200) {
        // Redirect to Admin Dashboard if login is successful
        navigate('/admin/dashboard'); // Use navigate instead of history.push
      }
    } catch (error) {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="border p-2 w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border p-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        <button type="submit" className="bg-primary text-white px-4 py-2 mt-4 rounded">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
