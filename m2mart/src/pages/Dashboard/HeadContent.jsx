import React from "react";
import { FaLeaf, FaRotate, FaTruck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeadContent = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-10 space-y-10 bg-cover bg-no-repeat" style={{backgroundImage:`url('https://img.freepik.com/free-photo/top-view-fresh-red-tomatoes-with-greens-bell-peppers-dark-background_140725-137152.jpg?t=st=1743959098~exp=1743962698~hmac=6350cdd8fb719254f9d8bb1397588f738772cba9d18ab4d9b950caed93393472&w=996')`}}>
      {/* Heading + Buttons */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          <span className="text-green-600">Organic</span> Foods <br />
          at your <br />
          Doorsteps
        </h1>
        <p className="mt-4 text-white text-base">Naturally fresh, beautifully delivered.</p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to={'/home'}>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
            START SHOPPING
          </button>
          </Link>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 transition">
            JOIN NOW
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 text-center sm:text-left">
        <div>
          <h1 className="text-3xl font-bold text-green-600">14k+</h1>
          <p className="text-white">PRODUCT <br /> VARIETIES</p>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-green-600">50k+</h1>
          <p className="text-white">HAPPY <br /> CUSTOMERS</p>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-green-600">10+</h1>
          <p className="text-white">STORE <br /> LOCATIONS</p>
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex items-start gap-4 bg-white shadow-md p-4 rounded-md border-l-4 border-green-600">
          <FaRotate className="text-2xl text-green-600 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Fresh from farm</h2>
           
          </div>
        </div>

        <div className="flex items-start gap-4 bg-green-900 text-white p-4 rounded-md shadow-md">
          <FaLeaf className="text-2xl mt-1" />
          <div>
            <h2 className="text-lg font-semibold">100% Organic</h2>
            
          </div>
        </div>

        <div className="flex items-start gap-4 bg-orange-600 text-white p-4 rounded-md shadow-md">
          <FaTruck className="text-2xl mt-1" />
          <div>
            <h2 className="text-lg font-semibold">Free delivery</h2>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadContent;
