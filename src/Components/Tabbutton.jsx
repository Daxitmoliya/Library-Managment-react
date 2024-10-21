import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

const Tabbutton = ({ children, to, isLoading }) => {
    return (
        <Link to={to}>
            <button className="relative inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-normal text-base font-Poppins px-6 py-2 rounded-full transition-transform duration-300 ease-in-out shadow-lg transform hover:scale-105 overflow-hidden active:scale-95 focus:outline-none">
            
                <span className="absolute inset-0 bg-indigo-400 transform scale-0 transition-transform duration-300 ease-in-out hover:scale-110" />
                <span className="absolute inset-0 bg-blue-700 rounded-full mix-blend-multiply transition-all duration-300 ease-in-out" />
                <span className="relative z-10 flex items-center">
                    {isLoading ? (
                        <span className="loader"></span> 
                    ) : (
                        <>
                            <span className="mr-2"><FaArrowRight /></span>
                            {children}
                        </>
                    )}
                </span>
      
                <span className="ripple hidden absolute w-full h-full rounded-full bg-white opacity-50 transition-transform duration-300 ease-in-out" />
            </button>
        </Link>
    );
};

export default Tabbutton;
