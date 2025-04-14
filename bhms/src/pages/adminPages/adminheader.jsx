import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="text-blue fixed top-0 w-full z-50 shadow-md">
      <div className=" mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <Link
          to="/dashboard"
          className="text-xl font-semibold hover:text-gray-300 transition"
        >
        </Link>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="focus:outline-none"
          >
            <img
              src="https://images.pexels.com/users/avatars/839746745/jessel-joy-velasco-667.png"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden ring-1 ring-black ring-opacity-5 text-gray-800">
              <Link
                to="/adminprofile"
                className="block px-4 py-2 hover:bg-gray-100 transition"
              >
                My Profile
              </Link>
              <div className="border-t" />
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 transition"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
