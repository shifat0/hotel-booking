import React from "react";

const HotelDetails = () => {
  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
        alt=""
        className="absolute inset-0 min-h-screen w-screen object-cover object-center bg-fixed overflow-hidden"
      />
      <div className="absolute inset-0 min-h-screen min-w-screen bg-opacity-60  backdrop-blur-sm bg-gray-800"></div>
      <div className="container mx-auto p-5 relative text-white">
        <div className="mb-20">
          <h2 className="text-5xl font-bold mb-2">Hotel Name</h2>
          <span>Hotel Location</span>
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col bg-dark p-5 shadow-md rounded-lg md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Family Room</h2>
            <ul className="flex gap-2 list">
              <li>3 Beds</li>
              <li>1 Balcony</li>
              <li>2 Washrooms</li>
            </ul>
            <span>Number of rooms: 5</span>
            <span className="italic mt-3">
              <strong className="not-italic">BDT 200</strong> per night
            </span>
            <button className="bg-primary mx-auto p-2 max-w-max text-white mt-5 rounded-md cursor-pointer active:bg-secondary">
              Book Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
