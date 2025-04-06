import React from 'react';

const posters = [
  {
    img: 'https://img.freepik.com/free-photo/fruit-texture-concept-composition_52683-101074.jpg?t=st=1743961978~exp=1743965578~hmac=53218df85f23bee6295d25f031d8a759d495c8c417960357ba5087ded87389f1&w=740git',
    title: 'Items on SALE',
    subtitle: 'Discounts up to 30%',
  },
  {
    img: 'https://themewagon.github.io/organic/images/banner-ad-2.jpg',
    title: 'Combo offers',
    subtitle: 'Discounts up to 50%',
  },
  {
    img: 'https://themewagon.github.io/organic/images/banner-ad-3.jpg',
    title: 'Discount Coupons',
    subtitle: 'Discounts up to 40%',
  },
];

const PromoPosters = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posters.map((poster, index) => (
        <div
          key={index}
          className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
        >
          <img
            src={poster.img}
            alt={poster.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-xl md:text-2xl font-bold">{poster.title}</h1>
            <p className="text-sm md:text-base mt-1">{poster.subtitle}</p>
            <button className="mt-4 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white transition">
              SHOP NOW
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromoPosters;
