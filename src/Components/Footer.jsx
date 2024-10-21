import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-indigo-50 to-blue-100 p-10 mt-10 text-gray-800 font-Poppins'>
      <div className='flex flex-col md:flex-row justify-between items-start'>
        
    
        <div className='mb-8 md:mb-0'>
          <h2 className='font-Oswald text-black text-4xl mb-4'>Book Haven</h2>
          <ul className='flex flex-col md:flex-row text-lg gap-6'>
            <Link to="/browsebook"><li className='hover:text-indigo-500 transition duration-300'>Browse Books</li></Link>
            <Link to="/addbooks"><li className='hover:text-indigo-500 transition duration-300'>Add Books</li></Link>
            <Link to="/"><li className='hover:text-indigo-500 transition duration-300'>Home</li></Link>
          </ul>
        </div>

     
        <div className='mb-8 md:mb-0'>
          <h3 className='font-semibold text-2xl mb-4'>Contact Us</h3>
          <p className='text-lg'>123 Library St, Booktown, BK 10101</p>
          <p className='text-lg mt-2'>Email: info@elibrary.com</p>
          <p className='text-lg mt-2'>Phone: +1 234 567 890</p>
        </div>

      
        <div className='flex flex-col'>
          <h3 className='font-semibold text-2xl mb-4'>Subscribe to our Newsletter</h3>
          <form className='flex items-center'>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full md:w-64 h-10 p-3 border-2 border-indigo-300 rounded-l-full focus:border-indigo-500 outline-none transition duration-300'
            />
            <button
              type='submit'
              className='bg-indigo-500 text-white px-6 py-2 rounded-r-full hover:bg-indigo-600 transition duration-300'
            >
              Subscribe
            </button>
          </form>
          <div className='flex gap-4 mt-6 text-xl'>
            <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800 transition duration-300"><FaFacebookF /></a>
            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600 transition duration-300"><FaTwitter /></a>
            <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700 transition duration-300"><FaInstagram /></a>
            <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900 transition duration-300"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

     
      <div className='mt-10 border-t-2 border-indigo-200 pt-4'>
        <p className='text-center text-gray-600 text-sm'>© 2024 Book Haven. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
