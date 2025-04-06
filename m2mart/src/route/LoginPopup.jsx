import React, { useEffect, useState } from "react";

const LoginPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const lastClosed = localStorage.getItem("loginPopupClosedAt");

    const now = Date.now();
    const delay = lastClosed ? 5 * 60 * 1000 : 60 * 1000; // 5 min or 1 min

    if (!lastClosed || now - Number(lastClosed) > delay) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("loginPopupClosedAt", Date.now().toString());
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Login to M2Mart</h2>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border rounded outline-none"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;
