import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Dashboard/Navbar";

const APIcall = () => {
  const [mainData, setmainData] = useState([]);

  const handledata = () => {
    fetch("https://67b37a5f392f4aa94fa7593e.mockapi.io/fruits")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setmainData(data);
        console.log(data);

        // setloadingData(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(mainData);
  useEffect(() => {
    handledata();
  }, []);
  return (
    <div>
      <Navbar/>
      <br></br>
      <br></br><br></br><br></br>
      <h1 className="text-3xl font-bold text-gray-800 text-center">Dairy Products</h1>
       <br></br>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {mainData
          .filter((e) => e.type === "Dairy")
          .map((e, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center"
            >
              <img
                src={e.image}
                alt={e.name}
                className="w-48 h-48 object-contain mb-4"
              />
              <h1 className="text-lg font-semibold">{e.name}</h1>
              <h1 className="text-lg font-semibold">{e.description}</h1>
              <h1 className="text-gray-600">{e.price}</h1>
              <h1 className="text-green-600 font-bold">{e.offerprice}</h1>
              <button className="p-2 border bg-green-600 rounded-full hover:bg-green-400 text-white transition">
                Add Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default APIcall;