import React from 'react';

const Searchfield = ({ handleText }) => {
    const handleSearch = (inputValue) => {
        handleText(inputValue);
    };

    return (
        <div className="flex items-center justify-center gap-4 mt-4">
            <div className="relative md:w-1/2 w-full">
                <input
                    type="text"
                    placeholder="Search by Book name or Author"
                    className="pl-4 pr-7 w-full h-14 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:border-teal-600 transition duration-300 ease-in-out"
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                        className="w-6 h-6 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 4a6 6 0 00-6 6 6 6 0 006 6m0 0l8 8m-8-8a6 6 0 016-6 6 6 0 00-6-6"
                        />
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default Searchfield;
