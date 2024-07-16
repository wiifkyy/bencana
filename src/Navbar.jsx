import { useContext, useState } from 'react';
import { DarkModeContext } from './context/DarkMode';

const Navbar = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-blue-500 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">Bantuan<span className="text-black"> </span>Bencana</div>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <ul className={`md:flex md:items-center md:space-x-4 gap-4 px-10 font-bold ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
                    <li><a href="/bantuan" className="text-white hover:text-gray-300">Bantuan</a></li>
                    <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
                    <li>
                        <button className='bg-blue-600 border px-3 text-white rounded' onClick={() => setIsDarkMode(!isDarkMode)}>
                            {isDarkMode ? 'Light' : 'Dark'}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
