import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Title on the left */}
        <span className="text-xl font-semibold">BoarderFlow</span>

        {/* Centered nav links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-6 items-center">
          <li>
              <Link to="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li><a href="#features" className="hover:text-gray-400">Features</a></li>
            <li><a href="#calculator" className="hover:text-gray-400">Calculator</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            <li>
              <Link to="/login" className="hover:text-gray-400">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
