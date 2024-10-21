import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../../utils/bookSlice';
import { nanoid } from 'nanoid';

const AddBooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Load book data from localStorage on component mount
  const [bookData, setBookData] = useState(() => {
    const savedBookData = localStorage.getItem('bookData');
    return savedBookData ? JSON.parse(savedBookData) : {
      title: '',
      author: '',
      type: '',
      image: null,
      description: '',
    };
  });

  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === 'image' && files) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const newData = {
          ...bookData,
          image: reader.result, // Save the image as a base64 string
        };
        setBookData(newData);
        localStorage.setItem('bookData', JSON.stringify(newData)); // Save updated data to localStorage
      };

      reader.readAsDataURL(file);
    } else {
      const updatedData = {
        ...bookData,
        [name]: value,
      };
      
      setBookData(updatedData);
      localStorage.setItem('bookData', JSON.stringify(updatedData)); // Save updated data to localStorage
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, author, image, description } = bookData;

    // Validation for empty fields
    if (!title || !author || !image || !description) {
      setError('Please ensure all fields are filled in.');
      return;
    }

    const newBook = {
      id: nanoid(),
      title: bookData.title,
      img: bookData.image, // Use base64 image string
      type: bookData.type,
      author: bookData.author,
      description: bookData.description,
      isNew: true,
    };

    console.log(newBook);
    
    // Dispatch the addBook action
    dispatch(addBook(newBook));

    // Clear localStorage and reset state after successful submission
    localStorage.removeItem('bookData');
    setBookData({
      title: '',
      author: '',
      type: '',
      image: null,
      description: '',
    });
    
    navigate('/browsebook');
  };

  return (
    <form className='md:w-1/2 w-full font-Poppins p-12 mx-auto' onSubmit={handleSubmit}>
      <h2 className='font-semibold text-2xl mb-4 text-center'>Add New Book</h2>
      <div className='mb-4'>
        <label className='font-medium text-lg text-gray-600 mb-2'>Title</label>
        <input
          type='text'
          name='title'
          value={bookData.title}
          onChange={handleChange}
          placeholder='Enter the Title of the Book'
          className='w-full h-12 pl-2 pr-5 border-2 border-black outline-none'
        />
      </div>
      <div className='mb-4'>
        <label className='font-medium text-lg text-gray-600 mb-2'>Author</label>
        <input
          type='text'
          name='author'
          value={bookData.author}
          onChange={handleChange}
          placeholder='Enter an Author'
          className='w-full h-12 pl-2 pr-5 border-2 border-black outline-none'
        />
      </div>
      <div className='mb-4'>
        <label className='font-medium text-lg text-gray-600 mb-2'>Book Type</label>
        <input
          type='text'
          name='type'
          value={bookData.type}
          onChange={handleChange}
          placeholder='Enter a book type (e.g., Fantasy, Non-Fiction, etc.)'
          className='w-full h-12 pl-2 pr-5 border-2 border-black outline-none'
        />
      </div>
      <div className='mb-4'>
        <label className='font-medium text-lg text-gray-600 mb-2'>Description</label>
        <textarea
          name='description'
          value={bookData.description}
          onChange={handleChange}
          placeholder='Enter a description'
          className='w-full h-12 pl-2 pr-5 border-2 border-black outline-none'
          rows='5'
        ></textarea>
      </div>
      <div className='mb-4 flex gap-4'>
        <label className='font-medium text-lg text-gray-600 mb-2'>Upload an Image</label>
        <input
          type='file'
          name='image'
          accept='image/*'
          onChange={handleChange}
          className='outline-none'
        />
      </div>
      {error && <p className='font-medium text-red-500 text-base mb-4'>{error}</p>}
      <button type='submit' className='px-6 py-2 bg-black text-white font-semibold'>
        Add Book
      </button>
    </form>
  );
};

export default AddBooks;
