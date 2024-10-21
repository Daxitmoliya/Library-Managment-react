import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="relative p-5 bg-white border border-gray-200 rounded-2xl w-72 shadow-xl transition-transform hover:shadow-3xl transform hover:scale-105 hover:-rotate-1 hover:-translate-y-3 duration-700 ease-in-out cursor-pointer hover:bg-gradient-to-tr hover:from-indigo-100 hover:via-purple-100 hover:to-pink-100" key={book.id}>
      {book.isNew && (
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-light shadow-lg animate-pulse">
          New Arrival
        </div>
      )}
      
      <div className="overflow-hidden rounded-lg shadow-inner border border-gray-100">
        <img src={book.img} alt="book_image" className="w-full h-48 object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
      </div>
      
      <h3 className="mt-4 font-bold text-lg font-Poppins text-gray-800 transition-colors duration-500 hover:text-purple-600 hover:underline hover:underline-offset-4">
        {book.title}
      </h3>
      
      <div className="flex items-center gap-3 mt-3">
        <p className="bg-blue-200 text-blue-800 border border-blue-300 text-xs px-3 py-1 rounded-full font-light">
          Author
        </p>
        <p className="text-gray-700 font-semibold text-sm">{book.author}</p>
      </div>
      
      <p className="mt-3 text-sm font-light text-gray-600">
        {book.description.length > 60 ? `${book.description.substring(0, 60)}...` : book.description}
      </p>
      
      <p className="mt-3 text-sm font-medium text-yellow-500 flex items-center gap-1">
        ⭐ {book.rating ? book.rating : "No rating yet"}
      </p>
      
      <Link to={`/book/${book.id}`}>
        <button className="mt-5 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs rounded-full shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out transform">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default BookCard;
