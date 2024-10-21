import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

const Booksdata = ({ title, inputValue }) => {
    const bookData = useSelector(state => state.book);
    
    const searchedValue = inputValue ? inputValue.toLowerCase() : '';

    const filterData = bookData.filter((book) => (
        (book.title && book.title.toLowerCase().includes(searchedValue)) || 
        (book.author && book.author.toLowerCase().includes(searchedValue))
    ));

    return (
        <div className='mt-10 p-6 bg-white rounded-lg shadow-xl transition duration-300 ease-in-out hover:shadow-2xl'>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='font-Poppins font-bold text-4xl text-gray-800 tracking-wide drop-shadow-md'>
                    {title ? title : 'Popular Books'}
                </h2>
                {title ? null : (
                    <Link to='/browsebook'>
                        <p className='text-teal-600 font-medium text-lg underline underline-offset-2 transition duration-300 hover:text-teal-800'>
                            View more
                        </p>
                    </Link>
                )}
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-4">
                {filterData.map((book) => (
                    <BookCard book={book} key={book.id} />
                ))}
            </div>
            {filterData.length === 0 && (
                <p className="text-gray-600 text-center mt-4 italic">No books found. Please try a different search.</p>
            )}
        </div>
    );
};

export default Booksdata;
