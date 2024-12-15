// frontend/src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo Section */}
          <div className="text-2xl font-bold">
            <Link to="/" className="hover:text-secondary">
              TravelAgency
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-lg font-medium text-white hover:text-secondary">
              Home
            </Link>
            <Link to="/packages" className="text-lg font-medium text-white hover:text-secondary">
              Tour Packages
            </Link>
            <Link to="/about" className="text-lg font-medium text-white hover:text-secondary">
              About Us
            </Link>
            <Link to="/contact" className="text-lg font-medium text-white hover:text-secondary">
              Contact
            </Link>
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/admin"
              className="px-6 py-2 bg-secondary text-white font-medium rounded-lg hover:bg-primary transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/admin"
              className="px-6 py-2 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary transition duration-300"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu (Hidden by default) */}
      <div className="md:hidden">
        <nav className="space-y-4 px-6 py-4 bg-primary">
          <Link to="/" className="text-lg font-medium text-white hover:text-secondary block">
            Home
          </Link>
          <Link to="/packages" className="text-lg font-medium text-white hover:text-secondary block">
            Tour Packages
          </Link>
          <Link to="/about" className="text-lg font-medium text-white hover:text-secondary block">
            About Us
          </Link>
          <Link to="/contact" className="text-lg font-medium text-white hover:text-secondary block">
            Contact
          </Link>
          <Link
            to="/login"
            className="text-lg font-medium text-white hover:text-secondary block py-2"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-lg font-medium text-white hover:text-secondary block py-2"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
