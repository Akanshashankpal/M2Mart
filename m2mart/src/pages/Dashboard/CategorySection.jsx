import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const categories = [
  {
    title: "Fruits & Veges",
    img: "https://themewagon.github.io/organic/images/category-thumb-1.jpg",
  },
  {
    title: "Breads & Sweets",
    img: "https://themewagon.github.io/organic/images/category-thumb-2.jpg",
  },
  {
    title: "Fruits & Veges",
    img: "https://themewagon.github.io/organic/images/category-thumb-3.jpg",
  },
  {
    title: "Beverages",
    img: "https://themewagon.github.io/organic/images/category-thumb-4.jpg",
  },
  {
    title: "Meal Product",
    img: "https://themewagon.github.io/organic/images/category-thumb-5.jpg",
  },
];

const CategorySection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Category</h1>
        <div className="flex items-center gap-3">
          <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition text-sm">
            View All
          </button>
          <FaChevronLeft className="cursor-pointer text-gray-600 hover:text-green-600 transition" />
          <FaChevronRight className="cursor-pointer text-gray-600 hover:text-green-600 transition" />
        </div>
      </div>

      {/* Category Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="text-center p-4 hover:shadow-md transition"
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-28 h-28 object-cover m-auto rounded-full"
            />
            <p className="mt-2 text-sm font-medium text-gray-700">{cat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
