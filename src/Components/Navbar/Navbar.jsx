import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let token = false;

  return (
    <div className="bg-primary p-5">
      <div className="container mx-auto flex justify-between">
        <NavLink to="/">
          <span className="text-xl font-bold text-secondary">
            Hotel Booking
          </span>
        </NavLink>
        <div className="flex gap-8 text-black ">
          {token ? (
            <NavLink to="/">
              <button className="bg-[#F2FFE9] px-5 py-1 rounded-md">
                Logout
              </button>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <button className="bg-[#F2FFE9] px-5 py-1 rounded-md">
                Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
