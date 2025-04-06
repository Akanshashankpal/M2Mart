import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [items, setItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const buyNowItem = JSON.parse(localStorage.getItem("buyNow"));
    if (buyNowItem) {
      setItems([buyNowItem]);
    } else {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setItems(cartItems);
    }
  }, []);

  const getTotal = () =>
    items.reduce((sum, item) => sum + item.newPrice, 0).toFixed(2);

  const handleOrder = (e) => {
    e.preventDefault();

    // Clear cart or buyNow
    localStorage.removeItem("cart");
    localStorage.removeItem("buyNow");

    setItems([]);
    setOrderPlaced(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>

      {orderPlaced ? (
        <div className="text-center p-8 bg-green-100 rounded-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">✅ Order Confirmed!</h2>
          <p className="text-gray-600">Thank you for shopping with M2Mart. Redirecting to home...</p>
        </div>
      ) : (
        <form onSubmit={handleOrder} className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {/* Billing Form */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-2">Billing Information</h2>
            <input type="text" required placeholder="Full Name" className="w-full border p-3 rounded" />
            <input type="email" required placeholder="Email Address" className="w-full border p-3 rounded" />
            <input type="text" required placeholder="Address" className="w-full border p-3 rounded" />
            <input type="text" required placeholder="City" className="w-full border p-3 rounded" />
            <input type="text" required placeholder="Postal Code" className="w-full border p-3 rounded" />
            <input type="tel" required placeholder="Phone Number" className="w-full border p-3 rounded" />
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-green-600 font-semibold">₹{item.newPrice.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>₹{getTotal()}</span>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
            >
              Place Order
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;
