import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  {
    id: 5,
    name: "Organic Spinach Leaves (Fresh Produce)",
    image: "https://themewagon.github.io/organic/images/product-thumb-5.png",
    oldPrice: 24,
    newPrice: 18,
    discount: "10% off",
    rating: 5,
    reviews: 222,
  },
  {
    id: 6,
    name: "Imported Italian Spaghetti Pasta",
    image: "https://themewagon.github.io/organic/images/product-thumb-7.png",
    oldPrice: 24,
    newPrice: 18,
    discount: "10% off",
    rating: 5,
    reviews: 222,
  },
  {
    id: 7,
    name: "Granny Smith Apples",
    image: "https://themewagon.github.io/organic/images/product-thumb-8.png",
    oldPrice: 24,
    newPrice: 18,
    discount: "10% off",
    rating: 5,
    reviews: 222,
  },
  {
    id: 8,
    name: "Organic 2% Reduced Fat Milk",
    image: "https://themewagon.github.io/organic/images/product-thumb-9.png",
    oldPrice: 24,
    newPrice: 18,
    discount: "10% off",
    rating: 5,
    reviews: 222,
  },
];

const BestSellingProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showBuyNowPopup, setShowBuyNowPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
    setShowBuyNowPopup(false);
  };

  const handleAddToCart = (product) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      setShowLoginPopup(true);
      return;
    }
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = existingCart.some((item) => item.id === product.id);
    if (!exists) {
      const updatedCart = [...existingCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    navigate("/cart");
  };

  const handleBuyNow = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      setShowLoginPopup(true);
      return;
    }
    setShowBuyNowPopup(true);
  };

  const handleLogin = () => {
    if (loginEmail && loginPassword) {
      localStorage.setItem("user", JSON.stringify({ email: loginEmail }));
      setShowLoginPopup(false);
      setLoginEmail("");
      setLoginPassword("");
      alert("Logged in successfully!");
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <div className="py-8 px-4 max-w-screen-xl mx-auto bg-gray-100">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Best Selling Products</h1>
        <button
          className="mt-2 sm:mt-0 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          onClick={() => navigate("/products")}
        >
          View All
        </button>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product)}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col cursor-pointer hover:shadow-lg transition"
          >
            <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-2" />
            <p className="font-medium text-lg mb-1">{product.name}</p>
            <div className="flex items-center text-yellow-400 text-sm">
              {[...Array(product.rating)].map((_, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
              <span className="ml-1 text-gray-500">({product.reviews})</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="line-through text-gray-500">₹{product.oldPrice.toFixed(2)}</span>
              <h3 className="text-xl font-semibold text-green-600">₹{product.newPrice.toFixed(2)}</h3>
              <span className="text-sm text-white bg-red-500 px-2 py-1 rounded">{product.discount}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl"
            >
              &times;
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-48 object-contain mb-4" />
            <h2 className="text-xl font-bold mb-2">{selectedProduct.name}</h2>
            <p className="text-gray-700 mb-2">
              Rating: ⭐ {selectedProduct.rating} ({selectedProduct.reviews} reviews)
            </p>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-gray-500 line-through">₹{selectedProduct.oldPrice.toFixed(2)}</span>
              <span className="text-green-600 font-semibold text-xl">₹{selectedProduct.newPrice.toFixed(2)}</span>
            </div>
            <div className="flex flex-col gap-2">
              <button
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                onClick={() => handleAddToCart(selectedProduct)}
              >
                <i className="fa-solid fa-cart-shopping mr-2"></i> Add to Cart
              </button>
              <button
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Buy Now Popup */}
      {showBuyNowPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-md p-6 text-center max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Confirm Purchase</h2>
            <p className="mb-4">
              Are you sure you want to buy <strong>{selectedProduct.name}</strong> for ₹
              {selectedProduct.newPrice}?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={() => {
                  closeModal();
                  alert("Purchase successful! 🎉");
                  navigate("/checkout");
                }}
              >
                Yes, Buy Now
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowBuyNowPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Login Popup */}
      {showLoginPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Login Required</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-2 px-4 py-2 border rounded"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 px-4 py-2 border rounded"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <div className="flex justify-between gap-4">
              <button
                onClick={handleLogin}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Login
              </button>
              <button
                onClick={() => setShowLoginPopup(false)}
                className="w-full bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BestSellingProducts;
