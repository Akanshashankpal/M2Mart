import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaAmazon,
  FaStore
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Logo + Socials */}
        <div>
           {/* Logo with Store Icon */}
                <div className="flex items-center space-x-2">
                <FaStore className="text-3xl text-green-600" />
                <h1 className="text-2xl font-bold text-green-600">M2Mart</h1>
                  </div>
          <br></br>
          <div className="flex flex-wrap space-x-3 text-green-600 text-xl">
            <FaFacebookF className="hover:text-green-800 cursor-pointer" />
            <FaTwitter className="hover:text-green-800 cursor-pointer" />
            <FaInstagram className="hover:text-green-800 cursor-pointer" />
            <FaYoutube className="hover:text-green-800 cursor-pointer" />
            <FaAmazon className="hover:text-green-800 cursor-pointer" />
          </div>
        </div>

        {/* Organic */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Organic</h3>
          <ul className="space-y-2 text-sm break-words">
            <li><a href="#">About us</a></li>
            <li><a href="#">Conditions</a></li>
            <li><a href="#">Our Journals</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Affiliate Programme</a></li>
            <li><a href="#">Ultras Press</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
          <ul className="space-y-2 text-sm break-words">
            <li><a href="#">Offers</a></li>
            <li><a href="#">Discount Coupons</a></li>
            <li><a href="#">Stores</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Info</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm break-words">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Cookie Guidelines</a></li>
            <li><a href="#">Delivery Information</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe Us</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter to get updates about our grand offers.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
            <input
              type="email"
              placeholder="E-mail Address"
              className="px-3 py-2 rounded-md border w-full max-w-xs"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t mt-10 pt-6 pb-8 text-center text-sm text-gray-500 px-4">
        <p>© 2025 Organic. All rights reserved</p>
        <p>
          A website of Local for Vocal
        </p>
      </div>
    </footer>
  );
};

export default Footer;