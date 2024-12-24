import React from 'react';
import { NavLink } from 'react-router-dom';


const SuccessSection = () => {
  return (
    <body className='bg-gradient-to-r from-orange-100 via-blue-100 to-white h-[100vh] '>
        
    
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 grid grid-cols-1 md:grid-cols-2 gap-8  ">
      {/* Left Text Content */}
      <div className="flex flex-col pt-[10vh] animate__animated animate__fadeInLeft" data-aos="fade-right">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Learn and Achieve <span className="text-blue-500">Topper</span> Success.
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          1000+ high-quality notes and classes to help Class 10 students excel and become toppers. Learn anytime, anywhere, and achieve your dreams.
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-300">
            <NavLink to="/Course" className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-300">
              Start Learning
            </NavLink>
          </button>
          <button className="px-0 py-2 border text-blue-500 font-medium rounded-md hover:bg-blue-100 transition duration-300">
            <a href="" target="_blank" className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-300">
              Live Sessions
            </a>
          </button>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div>
            <h2 className="text-2xl font-bold text-blue-500">1000+</h2>
            <p className="text-gray-600">Notes Available</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-500">5000+</h2>
            <p className="text-gray-600">Students Enrolled</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-500">200+</h2>
            <p className="text-gray-600">Expert Tutors</p>
          </div>
        </div>
      </div>

      {/* Right Image Content */}
      <div className="relative animate__animated animate__zoomIn" data-aos="zoom-in">
        <img src="https://c.saavncdn.com/292/Next-Toppers-Unknown-2024-20240426103036-500x500.jpg" alt="Student Image" className="rounded-lg shadow-lg w-[28vw] mt-[20px]" />
        <div className="absolute -top-10 -right-10">
          <img 
            src="data:image/jpeg;base64,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"
       alt='icon2' className="h-16 w-16 border p-4 bg-white text-center rounded-full shadow-lg mb-4" />
        </div>
      </div>
    </section>
    </body>
  );
}

export default SuccessSection;
