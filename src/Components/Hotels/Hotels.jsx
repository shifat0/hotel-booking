import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/hotels")
      .then((res) => setHotels(res.data));
  }, []);

  return (
    <div className="container mx-auto p-5 grid grid-cols-[repeat(1,_1fr)] md:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(3,_1fr)] gap-5 ">
      {hotels.map((hotel) => (
        <div
          className="flex flex-col h-full w-full shadow-md rounded-md"
          key={hotel.id}
        >
          <img
            src={hotel.image}
            alt={hotel.name}
            className="h-[300px] w-full object-cover rounded-md"
          />
          <div className="flex justify-between items-center gap-5 p-4">
            <div className="flex flex-col">
              <h2 className="font-bold text-xl">{hotel.name}</h2>
              <span>{hotel.place}</span>
              <span className="italic mt-3">
                <strong className="not-italic">BDT {hotel.price}</strong> per
                night
              </span>
              {hotel.discount && (
                <span className="bg-red-500 text-white max-w-max p-1 rounded-md">
                  {hotel.discount} off
                </span>
              )}
            </div>
            <Link to={`/hotel/${hotel.id}`} state={{ hotel }}>
              <button className="bg-dark active:bg-primary text-white p-3 cursor-pointer rounded-md">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hotels;
