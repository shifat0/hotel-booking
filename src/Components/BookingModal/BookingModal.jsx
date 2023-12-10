import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};

const BookingModal = ({ handleToogle, selectedRoom, username }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/rooms/${selectedRoom.id}`, {
        ...selectedRoom,
        booked: true,
      })
      .then((res) => {
        navigate(`/`);
        alert(`${res.data.roomTitle} is booked by ${username} Successfully`);
      });
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full text-gray-800 p-5">
      <div className="absolute inset-0 w-full h-full bg-gray-500 blur-sm opacity-50"></div>

      <div
        id="booking"
        className="relative mt-10 bg-white/30 backdrop-blur-sm p-10 rounded-lg"
      >
        <h1 className="text-center mb-5 text-3xl">Book Room</h1>
        <form
          className="flex flex-col items-center gap-3"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label>Name</label>
          <input type="text" name="name" value={username} required disabled />
          <label>Phone Number</label>
          <input type="text" name="number" required />
          <input
            className="bg-primary mx-auto p-2 max-w-max text-white mt-5 rounded-md cursor-pointer active:bg-secondary"
            type="submit"
            value="Confirm Booking"
          />
        </form>
        <button
          className="absolute top-5 right-5 bg-red-500 text-white px-2"
          onClick={handleToogle}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(BookingModal);
