import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.newPrice, 0).toFixed(2);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain mb-2 sm:mb-0 sm:mr-4"
                />
                <div className="flex-1 w-full sm:w-auto">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-green-600 font-bold text-xl">₹{item.newPrice.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="mt-2 sm:mt-0 sm:ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between text-lg mb-4">
              <span>Total:</span>
              <span className="font-bold text-green-600">₹{getTotal()}</span>
            </div>
            <Link to={'/checkout'}>
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
