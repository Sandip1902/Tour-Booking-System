import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes and Route from react-router-dom v6
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import Header from './components/Header';
import TourPackages from './components/TourPackages';
import BookingForm from './components/BookingForm'; // Import BookingForm for the route

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TourPackages />} /> {/* Main route for TourPackages */}
        <Route path="/packages" element={<TourPackages />} />
        <Route path="/booking/:packageId" element={<BookingForm />} /> {/* Route for booking form */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
