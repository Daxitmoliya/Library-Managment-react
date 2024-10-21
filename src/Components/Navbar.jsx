import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-gradient-to-r from-teal-700 to-blue-700 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
                
                {/* Logo */}
                <h2 className="font-Oswald text-4xl tracking-wide text-white hover:scale-110 transition-transform duration-300 ease-in-out drop-shadow-md">
                    <Link to="/" className="hover:text-yellow-300">Book Haven</Link>
                </h2>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-lg font-semibold text-white">
                    <li>
                        <Link to='/' className="hover:text-yellow-300 transition duration-300 ease-in-out">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/browsebook' className="hover:text-yellow-300 transition duration-300 ease-in-out">
                            Browse Books
                        </Link>
                    </li>
                    <li>
                        <Link to='/addbooks' className="hover:text-yellow-300 transition duration-300 ease-in-out">
                            Add Books
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className="hover:text-yellow-300 transition duration-300 ease-in-out">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact' className="hover:text-yellow-300 transition duration-300 ease-in-out">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-white">
                    {isOpen ? (
                        <HiX className="w-8 h-8 cursor-pointer hover:text-yellow-300 transition duration-300" onClick={() => setIsOpen(!isOpen)} />
                    ) : (
                        <HiOutlineMenu className="w-8 h-8 cursor-pointer hover:text-yellow-300 transition duration-300" onClick={() => setIsOpen(!isOpen)} />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white text-black shadow-lg p-5">
                    <ul className="flex flex-col gap-5 text-lg font-semibold">
                        <li>
                            <Link to='/' onClick={() => setIsOpen(false)} className="hover:text-teal-600 transition duration-300 ease-in-out">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/browsebook' onClick={() => setIsOpen(false)} className="hover:text-teal-600 transition duration-300 ease-in-out">
                                Browse Books
                            </Link>
                        </li>
                        <li>
                            <Link to='/addbooks' onClick={() => setIsOpen(false)} className="hover:text-teal-600 transition duration-300 ease-in-out">
                                Add Books
                            </Link>
                        </li>
                        <li>
                            <Link to='/about' onClick={() => setIsOpen(false)} className="hover:text-teal-600 transition duration-300 ease-in-out">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' onClick={() => setIsOpen(false)} className="hover:text-teal-600 transition duration-300 ease-in-out">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
