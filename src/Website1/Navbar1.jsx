import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 fixed w-[100vw] top-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-white text-2xl font-bold italic animate-bounce">
            M ZOHAIB BUTT
          </div>

          {/* Hamburger button for mobile */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                // Close icon
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation links */}
          <div className="hidden sm:flex sm:items-center sm:gap-7">
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
            <Link to="/about" className="text-white hover:underline">
              About Us
            </Link>
            <Link to="/gallery" className="text-white hover:underline">
              Image Gallery
            </Link>
            <Link to="/team" className="text-white hover:underline">
              Our Team
            </Link>
            <Link to="/services" className="text-white hover:underline">
              Services
            </Link>
            
            <Link to="/contact">
              <button className="border-2 px-5 py-1 bg-[#45BFE3] rounded-md hover:bg-[#38a1c5] transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="sm:hidden bg-indigo-600 bg-opacity-90">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-white font-medium hover:bg-indigo-700 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-white font-medium hover:bg-indigo-700 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-2 rounded-md text-white font-medium hover:bg-indigo-700 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Image Gallery
            </Link>
            <Link
              to="/team"
              className="block px-3 py-2 rounded-md text-white font-medium hover:bg-indigo-700 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Our Team
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-white font-medium hover:bg-indigo-700 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/footer"
              className="block px-3 py-2 rounded-md text-white font-medium hover:bg-indigo-700 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Footer
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full text-center">
              <button className="border-2 px-5 py-1 bg-[#45BFE3] rounded-md hover:bg-[#38a1c5] transition-colors w-full">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar1;
