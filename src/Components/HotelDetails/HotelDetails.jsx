import React, { useEffect, useState } from "react";
import axios from "axios";

const HotelDetails = () => {
  const [rooms, setRooms] = useState([]);
  const [category, setCategory] = useState("");
  useEffect(() => {
    axios.get("http://localhost:5000/rooms").then((res) => setRooms(res.data));
  }, [setRooms]);
  // console.log(rooms);

  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
        alt=""
        className="absolute min-h-screen md:max-h-screen w-screen object-cover object-center overflow-hidden"
      />
      <div className="absolute inset-0 min-h-screen min-w-screen bg-opacity-60 backdrop-blur-sm bg-gray-800"></div>
      <div className="container mx-auto p-5 relative text-white">
        <div className="mb-20 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-5xl font-bold mb-2">Hotel Name</h2>
            <span>Hotel Location</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="mt-5">Browse Rooms By Category</span>
            <select
              className="text-gray-800 p-2"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Category</option>
              <option>Family Room</option>
              <option>King Size Room</option>
              <option>Couple Room</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(1,_1fr)] md:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(3,_1fr)] gap-5">
          {category
            ? rooms
                .filter(
                  (room) =>
                    room.category.toLowerCase().trim() ===
                    category.toLowerCase().trim()
                )
                .map((room) => (
                  <div
                    className="flex flex-col bg-dark p-5 shadow-md rounded-lg"
                    key={room.id}
                  >
                    <h2 className="text-xl font-semibold mb-4">
                      {room.roomTitle}
                    </h2>
                    <ul className="flex gap-2 list">
                      <li>{room.roomDetails.bed} Beds</li>
                      <li>{room.roomDetails.balcony} Balcony</li>
                      <li>{room.roomDetails.washroom} Washrooms</li>
                    </ul>

                    <span className="italic mt-3">
                      <strong className="not-italic">BDT {room.price}</strong>{" "}
                      per night
                    </span>
                    <button
                      type="button"
                      className="bg-primary mx-auto p-2 max-w-max text-white mt-5 rounded-md cursor-pointer active:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed disabled:active:bg-primary"
                      disabled={room.booked === true}
                    >
                      Book Now!
                    </button>
                  </div>
                ))
            : rooms.map((room) => (
                <div
                  className="flex flex-col bg-dark p-5 shadow-md rounded-lg"
                  key={room.id}
                >
                  <h2 className="text-xl font-semibold mb-4">
                    {room.roomTitle}
                  </h2>
                  <ul className="flex gap-2 list">
                    <li>{room.roomDetails.bed} Beds</li>
                    <li>{room.roomDetails.balcony} Balcony</li>
                    <li>{room.roomDetails.washroom} Washrooms</li>
                  </ul>
                  <span className="italic mt-3">
                    <strong className="not-italic">BDT {room.price}</strong> per
                    night
                  </span>
                  <button
                    type="button"
                    className="bg-primary mx-auto p-2 max-w-max text-white mt-5 rounded-md cursor-pointer active:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed disabled:active:bg-primary"
                    disabled={room.booked === true}
                  >
                    Book Now!
                  </button>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
