import React, { useState } from 'react';
import Navbar from '../Dashboard/Navbar';

const products = [
  {
    id: 1,
    name: "Whole Wheat Sandwich Bread",
    image: "https://themewagon.github.io/organic/images/product-thumb-1.png",
    oldPrice: 24,
    newPrice: 18,
    discount: "10% off",
    rating: 5,
    reviews: 222,
  },
  {
    id: 2,
    name: "Whole Gain Otsmeal",
    image: "https://themewagon.github.io/organic/images/product-thumb-2.png",
    oldPrice: 54,
    newPrice: 50,
    discount: "10% off",
    rating: 5,
    reviews: 41,
  },
  {
    id: 3,
    name: "Sharp Cheddar Cheese Block",
    image: "https://themewagon.github.io/organic/images/product-thumb-3.png",
    oldPrice: 14,
    newPrice: 12,
    discount: "10% off",
    rating: 5,
    reviews: 32,
  },
  {
    id: 4,
    name: "Organic Baby Spinach",
    image: "https://themewagon.github.io/organic/images/product-thumb-4.png",
    oldPrice: 24,
    newPrice: 18,
    discount: "10% off",
    rating: 5,
    reviews: 222,
  },
];

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="bg-green-100 py-16 text-center">
          <h1 className="text-4xl font-bold text-green-700">Welcome to M2Mart</h1>
          <p className="mt-4 text-gray-700">Your one-stop shop for daily essentials</p>
        </section>

        {/* Categories */}
        <section className="py-12 max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Grocery', 'Drinks', 'Chocolates', 'Snacks'].map((cat) => (
              <div
                key={cat}
                className="bg-white shadow rounded p-6 text-center hover:shadow-lg transition"
              >
                <p className="text-lg font-semibold text-green-600">{cat}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Best Sellers */}
        <section className="bg-gray-50 py-12 px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Best Selling Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow rounded p-4 cursor-pointer hover:shadow-lg transition"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-green-600 font-bold">₹{product.newPrice}</span>
                  <span className="line-through text-sm text-gray-400 text-center">₹{product.oldPrice}</span>
                </div>
                <p className="text-xs text-gray-500">{product.discount}</p>
                <button className="mt-3 text-sm text-white bg-green-600 px-3 py-1 rounded hover:bg-green-700">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 text-center bg-green-50">
          <h2 className="text-2xl font-bold mb-4">Stay Updated!</h2>
          <p className="mb-4 text-gray-600">Sign up for our newsletter and get the latest deals.</p>
          <div className="flex justify-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded w-full"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Subscribe
            </button>
          </div>
        </section>
      </div>

      {/* Optional Product Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-600 text-xl"
            >
              ✕
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="mb-4 w-full h-40 object-contain" />
            <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
            <p className="text-green-600 font-bold mt-2">${selectedProduct.newPrice}</p>
            <p className="text-sm text-gray-500 line-through">${selectedProduct.oldPrice}</p>
            <p className="text-sm text-gray-600 mt-2">{selectedProduct.discount}</p>
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
