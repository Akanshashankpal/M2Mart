import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"; // 👈

const categories = [
  {
    title: "Fruits & Veges",
    img: "https://themewagon.github.io/organic/images/category-thumb-1.jpg",
    slug: "fruits-veges",
  },
  {
    title: "Breads & Sweets",
    img: "https://themewagon.github.io/organic/images/category-thumb-2.jpg",
    slug: "breads-sweets",
  },
  {
    title: "More Veges",
    img: "https://img.freepik.com/free-photo/side-view-broccoli-with-colored-bell-peppers-stand-white-background_141793-49391.jpg?uid=R190671798&ga=GA1.1.610268867.1737651298&semt=ais_hybrid&w=740",
    slug: "more-veges",
  },
  {
    title: "Beverages",
    img: "https://themewagon.github.io/organic/images/category-thumb-4.jpg",
    slug: "beverages",
  },
  {
    title: "Dairy Product",
    img: "https://img.freepik.com/free-photo/close-up-organic-milk-with-gourmet-cheese_23-2148610557.jpg?uid=R190671798&ga=GA1.1.610268867.1737651298&semt=ais_hybrid&w=740",
    slug: "dairy-product",
  },
];

const CategorySection = () => {
  const navigate = useNavigate(); // 👈

  const handleCategoryClick = (index, slug) => {
    if (index === 0) {
      navigate(`/fruit/${slug}`);
    }else if(index === 2){
           navigate(`/vegetable/${slug}`)
    }else if(index === 4){
        navigate(`/dairy/${slug}`)
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Category</h1>
        
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(index, cat.slug)}
            className="text-center p-4 hover:shadow-md transition cursor-pointer"
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-28 h-28 object-cover m-auto rounded-full"
            />
            <p className="mt-2 text-sm font-medium text-gray-700">
              {cat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
