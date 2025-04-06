import React, { useState } from "react";
import {
    FaBars,
    FaMagnifyingGlass,
    FaCaretDown,
    FaPrint,
    FaStore,
} from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    return (
        <header className="w-full shadow-md bg-white">
            <nav className="flex flex-wrap items-center justify-between p-4 max-w-7xl mx-auto fixed bg-white w-full z-50">
                {/* Logo */}
                <div className="flex items-center gap-2 text-green-600">
                <FaStore className="text-3xl text-green-600" />
                    
                    <h1 className="text-2xl font-bold">M2Mart</h1>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="block md:hidden">
                    <FaBars
                        className="text-2xl cursor-pointer text-gray-700"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </div>

                {/* Desktop Search */}
                <div className="hidden md:flex items-center gap-2 flex-1 px-4 max-w-2xl">
                    <select className="border border-gray-300 rounded px-2 py-1 text-sm outline-none">
                        <option>All Categories</option>
                        <option>Grocery</option>
                        <option>Drinks</option>
                        <option>Chocolets</option>
                    </select>
                    <div className="flex items-center w-full border border-gray-300 rounded overflow-hidden">
                        <input
                            type="search"
                            placeholder="Search more than 20,000 products"
                            className="w-full px-3 py-1 text-sm outline-none"
                        />
                        <FaMagnifyingGlass className="text-gray-500 mr-3" />
                    </div>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-4 ml-6">
                    <ul className="flex space-x-6 text-sm font-medium">
                        <li>
                            <a href="#" className="hover:text-green-600 transition">Home</a>
                        </li>
                        <li className="flex items-center gap-1 hover:text-green-600 cursor-pointer transition">
                            <a href="#">Pages</a>
                            <FaCaretDown />
                        </li>
                    </ul>
                </div>

                {/* Icons + Login */}
                <div className="hidden md:flex items-center gap-6 text-xl text-gray-700 relative">
                    <FaRegBookmark className="hover:text-green-600 transition" />
                    <FaPrint className="hover:text-green-600 transition" />

                    {/* Login Button with Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsLoginDropdownOpen(true)}
                        onMouseLeave={() => setIsLoginDropdownOpen(false)}
                    >
                        <button className="text-sm px-3 py-1 border rounded hover:bg-green-600 hover:text-white transition">
                            Login
                        </button>

                        {isLoginDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-2 z-50">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center"
                                >
                                    New User
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault(); // prevent default anchor behavior
                                            setShowSignUpModal(true);
                                        }}
                                        className="text-blue-600 hover:underline"
                                    >
                                        Sign Up
                                    </button>
                                </a>

                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    My Profile
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Orders
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Wishlist
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Add to Cart
                                </a>
                            </div>
                        )}


                        {showSignUpModal && (
                            <div className="fixed inset-0 flex items-center justify-center bg-white/30 bg-opacity-50 z-50">
                                <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
                                    <button
                                        className="absolute top-2 right-3 text-gray-600 text-lg"
                                        onClick={() => setShowSignUpModal(false)}
                                    >
                                        ✕
                                    </button>
                                    <h2 className="text-xl font-bold mb-4">Sign Up</h2>
                                    <form className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full px-4 py-2 border rounded outline-none"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full px-4 py-2 border rounded outline-none"
                                        />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="w-full px-4 py-2 border rounded outline-none"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                                        >
                                            Create Account
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-4">
                    {/* Search */}
                    <div className="flex items-center gap-2">
                        <select className="border border-gray-300 rounded px-2 py-1 text-sm w-1/3">
                            <option>All Categories</option>
                            <option>Grocery</option>
                            <option>Drinks</option>
                            <option>Chocolets</option>
                        </select>
                        <div className="flex items-center w-full border border-gray-300 rounded overflow-hidden">
                            <input
                                type="search"
                                placeholder="Search more than 20,000 products"
                                className="w-full px-3 py-1 text-sm outline-none"
                            />
                            <FaMagnifyingGlass className="text-gray-500 mr-3" />
                        </div>
                    </div>

                    {/* Links */}
                    <ul className="flex flex-col gap-2 text-sm font-medium">
                        <li>
                            <a href="#" className="block text-gray-800 hover:text-green-600 transition">Home</a>
                        </li>
                        <li className="flex items-center gap-1 text-gray-800 hover:text-green-600 cursor-pointer">
                            <a href="#">Pages</a>
                            <FaCaretDown />
                        </li>
                    </ul>

                    <div className="flex justify-start gap-6 text-xl text-gray-700">
                        <FaRegBookmark />
                        <FaPrint />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
