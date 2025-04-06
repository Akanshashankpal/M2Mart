import React, { useEffect, useState } from "react";
import {
    FaBars,
    FaMagnifyingGlass,
    FaCaretDown,
    FaPrint,
    FaStore,
    FaCircleUser,
} from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [user, setUser] = useState(null);
    const [signupData, setSignupData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        const storedUser = localStorage.getItem("m2martUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleSignUp = (e) => {
        e.preventDefault();
        localStorage.setItem("m2martUser", JSON.stringify(signupData));
        setUser(signupData);
        setShowSignUpModal(false);
    };

    const handleLogout = () => {
        localStorage.removeItem("m2martUser");
        setUser(null);
    };

    return (
        <header className="w-full shadow-md bg-white">
            <nav className="flex flex-wrap items-center justify-between p-4 max-w-7xl mx-auto fixed bg-white w-full z-50">
                {/* Logo */}
                <div className="flex items-center gap-2 text-green-600">
                    <FaStore className="text-3xl text-green-600" />
                    <h1 className="text-2xl font-bold">M2Mart</h1>
                </div>

                {/* Hamburger Icon */}
                <div className="block md:hidden">
                    <FaBars
                        className="text-2xl cursor-pointer text-gray-700"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </div>

                {/* Search Bar */}
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

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-4 ml-6">
                    <ul className="flex space-x-6 text-sm font-medium">
                        <li>
                            <Link to="/home" className="hover:text-green-600 transition">Home</Link>
                        </li>
                        <li className="relative group flex items-center gap-1 hover:text-green-600 cursor-pointer transition">
                            <span className="flex items-center gap-1">
                                Pages
                                <FaCaretDown />
                            </span>
                            <ul className="absolute top-full left-0 mt-1 w-40 bg-white border rounded shadow-lg hidden group-hover:block z-50">
                                <li>
                                    <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-100">About Us</Link>
                                </li>
                                <li>
                                    <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Services</Link>
                                </li>
                                <li>
                                    <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Contact Us</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Icons + Login/Profile */}
                <div className="hidden md:flex items-center gap-6 text-xl text-gray-700 relative">
                    <FaRegBookmark className="hover:text-green-600 transition" />
                   <Link to={'/cart'}><FaPrint className="hover:text-green-600 transition" /></Link> 

                    {user ? (
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsLoginDropdownOpen(true)}
                            onMouseLeave={() => setIsLoginDropdownOpen(false)}
                        >
                            <FaCircleUser className="text-2xl cursor-pointer" />
                            {isLoginDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-2 z-50">
                                    <p className="block px-4 py-2 text-sm text-gray-700 font-medium">Hello, {user.fullName}</p>
                                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</Link>
                                    {/* <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Orders</Link>
                                    <Link to="/wishlist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Wishlist</Link> */}
                                    <button
                                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
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
                                                e.preventDefault();
                                                setShowSignUpModal(true);
                                            }}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Sign Up
                                        </button>
                                    </a>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </nav>

            {/* Signup Modal */}
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
                        <form className="space-y-4" onSubmit={handleSignUp}>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={signupData.fullName}
                                onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                                className="w-full px-4 py-2 border rounded outline-none"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={signupData.email}
                                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                                className="w-full px-4 py-2 border rounded outline-none"
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={signupData.password}
                                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                                className="w-full px-4 py-2 border rounded outline-none"
                                required
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
        </header>
    );
};

export default Navbar;
