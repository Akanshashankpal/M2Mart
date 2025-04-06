import React, { useState } from "react";
import {
  FaBars,
  FaMagnifyingGlass,
  FaCaretDown,
  FaPrint,
} from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md bg-white">
      <nav className="flex flex-wrap items-center justify-between p-4 max-w-7xl mx-auto fixed bg-white w-full z-50">
        {/* Logo */}
        <div className="flex items-center gap-2 text-green-600">
          <h1 className="text-2xl font-bold">M2Mart</h1>
        </div>

        {/* Hamburger Icon */}
        <div className="block md:hidden">
          <FaBars
            className="text-2xl cursor-pointer text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>

        {/* Desktop Search Section */}
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

        {/* Desktop Navigation Links */}
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

        {/* Desktop Icons + Login Button */}
        <div className="hidden md:flex items-center gap-4 text-xl text-gray-700">
          <FaRegBookmark className="hover:text-green-600 transition" />
          <FaPrint className="hover:text-green-600 transition" />
          {/* ✅ Login Button */}
          <button className="ml-4 px-4 py-1 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded">
            Login
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 pt-2">
          {/* Mobile Search */}
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

          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-2 text-sm font-medium">
            <li>
              <a href="#" className="block text-gray-800 hover:text-green-600 transition">Home</a>
            </li>
            <li className="flex items-center gap-1 text-gray-800 hover:text-green-600 cursor-pointer">
              <a href="#">Pages</a>
              <FaCaretDown />
            </li>
          </ul>

          {/* Mobile Icons + Login Button */}
          <div className="flex flex-wrap items-center gap-4 text-xl text-gray-700">
            <FaRegBookmark />
            <FaPrint />
            {/* ✅ Mobile Login Button */}
            <button className="mt-2 px-4 py-1 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
