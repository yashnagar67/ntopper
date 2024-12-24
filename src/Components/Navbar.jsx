import React from 'react';
import img2 from "./next topper.png";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg animate__animated animate__fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center space-x-4">
          {/* Logo */}

          <img src={`${img2}`} alt=""  className="w-[45px] rounded-[17px] h-10"/>

          <span className="text-lg font-bold text-[rgb(53 214 175)] next">Next Topper</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className="text-gray-700 font-medium hover:text-blue-700">Home</NavLink>
          <NavLink to="/Course" className="text-gray-700 font-medium hover:text-blue-700">Classes</NavLink>
          <NavLink to="#" className="text-gray-700 font-medium hover:text-blue-700">Plans</NavLink>
          <NavLink to="#" className="text-gray-700 font-medium hover:text-blue-700">About Us</NavLink>
        </div>
        <div className="flex space-x-4">
         <NavLink to="/login"> <button className="logout px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300">
            Logout
          </button></NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
