import React from "react";

const Hotels = () => {
  const hotels = [
    {
      name: "Hotel Name",
      image:
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww",
      place: "Hotel Place",
      price: "200",
      discount: "40%",
    },
    {
      name: "Hotel Name",
      image:
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww",
      place: "Hotel Place",
      price: "200",
    },
  ];

  return (
    // <div className="container mx-auto p-5 flex flex-col md:flex-row md:justify-between md:flex-wrap gap-5 items-center ">
    <div className="container mx-auto p-5 grid grid-cols-[repeat(1,_1fr)] md:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(3,_1fr)] gap-5 ">
      {hotels.map((hotel) => (
        <div className="flex flex-col h-[450px] w-full md:w-[350px] shadow-md rounded-md">
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
            <div>
              <button className="bg-dark active:bg-primary text-white p-3 cursor-pointer rounded-md">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hotels;
