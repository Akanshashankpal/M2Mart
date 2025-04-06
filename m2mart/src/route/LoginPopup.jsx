import React, { useState } from "react";

const LoginPopup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ username: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    setFormData((prev) => ({ ...prev, [placeholder]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://6798cf3fbe2191d708b0ea2b.mockapi.io/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Sign-up successful!");
        const dummyToken = "mock-token-" + Math.random().toString(36).substring(7);
        localStorage.setItem("authToken", dummyToken);
        console.log("Token stored:", dummyToken);
        setFormData({ username: "", email: "", password: "" });
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Sign-up error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="bg-white shadow-xl rounded-xl p-6 sm:p-10 w-full max-w-md text-center">
        <img
          src="https://www.cms.adityabirla.com/uploads/american_eagle_640x360_b21d5a72ca.webp"
          alt="M2Mart Logo"
          className="mx-auto w-36 mb-6"
        />
        <h1 className="text-2xl font-bold text-green-600 mb-4">M2Mart</h1>

        <div className="flex justify-center mb-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 font-semibold transition ${
              isLogin ? "text-white bg-green-600" : "text-gray-600 bg-gray-100"
            } rounded-l-lg w-1/2`}
          >
            Log In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 font-semibold transition ${
              !isLogin ? "text-white bg-green-600" : "text-gray-600 bg-gray-100"
            } rounded-r-lg w-1/2`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded outline-none"
            required
          />
          {!isLogin && (
            <input
              type="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded outline-none"
              required
            />
          )}
          <input
            type="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {isLogin && (
          <div className="mt-4">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
