import React from "react";

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
  return (
    <div className="py-8 px-4 max-w-screen-xl mx-auto bg-gray-100">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Best Selling Products</h1>
        <button className="mt-2 sm:mt-0 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">View All</button>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col">
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
            <div className="flex flex-col gap-2 mt-4">
              <select className="border rounded px-2 py-1">
                {[...Array(11)].map((_, i) => (
                  <option key={i} value={i - 1}>{i + 1}</option>
                ))}
              </select>
              <div className="flex gap-2">
                <button className="flex-1 bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 transition flex items-center justify-center gap-2">
                  <i className="fa-solid fa-cart-shopping"></i> Add to Cart
                </button>
                <button className="bg-gray-200 text-gray-700 p-2 rounded hover:bg-gray-300 transition">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
